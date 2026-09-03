import prisma from '../utils/prisma'
import * as argon2 from 'argon2'

export default defineNitroPlugin(async () => {
  try {
    console.log('🌱 [Prisma Seeder] 데이터베이스 초기 관리자 계정 유효성 검사 시작...')

    const adminUsers = [
      {
        username: '9111713',
        name: '홍길동',
        password: 'pass123',
        role: 'ADMIN',
        email: 'test@skhystec.com',
        localLoginEnabled: true // SSO
      },
      {
        username: '9111635',
        name: '이순신',
        password: 'pass123',
        role: 'ADMIN',
        email: 'test@skhystec.com',
        localLoginEnabled: false // 로컬 로그인
      }
    ]

    for (const admin of adminUsers) {

      // 기존 계정 조회
      const existingUser = await prisma.user.findUnique({
        where: {
          username: admin.username
        }
      })

      /**
       * 계정이 없는 경우
       * → Argon2 해시 비밀번호로 신규 생성
       */
      if (!existingUser) {
        const hashedPassword = await argon2.hash(admin.password)

        await prisma.user.create({
          data: {
            username: admin.username,
            name: admin.name,
            password: hashedPassword,
            role: admin.role,
            email: admin.email,
            localLoginEnabled: admin.localLoginEnabled
          }
        })

        console.log(
          `✅ [Prisma Seeder] 신규 계정 생성: ${admin.username}`
        )

        continue
      }

      /**
       * 기존 비밀번호가 평문인 경우
       * → Argon2 비밀번호로 자동 변환
       */
      let password = existingUser.password

      if (
        !password ||
        !password.startsWith('$argon2')
      ) {
        password = await argon2.hash(admin.password)

        console.log(
          `🔐 [Prisma Seeder] 기존 계정 비밀번호 암호화 처리: ${admin.username}`
        )
      }

      /**
       * 기존 계정 기본정보 갱신
       */
      await prisma.user.update({
        where: {
          username: admin.username
        },

        data: {
          name: admin.name,
          email: admin.email,
          role: admin.role,
          password,
          localLoginEnabled: admin.localLoginEnabled
        }
      })
    }

    console.log(
      '✅ [Prisma Seeder] 초기 관리자 계정 검증 및 주입 완료!'
    )

  } catch (error: any) {
    console.error(
      '❌ [Prisma Seeder] 초기 계정 주입 중 예외 에러 발생:',
      error.message
    )
  }
})