import prisma from '../utils/prisma'

export default defineNitroPlugin(async () => {
  try {
    console.log('🌱 [Prisma Seeder] 데이터베이스 초기 관리자 계정 유효성 검사 시작...')

    // 1. 마스터 관리자 사번 2명 정의
    const adminUsers = [
      { username: '9111713', name: '홍길동', password: 'pass123', role: 'ADMIN' },
      { username: '9111635', name: '이순신', password: 'pass123', role: 'ADMIN' }
    ]

    // 2. 사번을 하나씩 돌며 DB에 없을 때만 INSERT 실행 (중복 에러 방지)
    for (const admin of adminUsers) {
      await prisma.user.upsert({
        where: { username: admin.username },
        update: {}, // 이미 있으면 아무것도 안 함
        create: {
          username: admin.username,
          name: admin.name,
          password: admin.password, // 실운영 시 단방향 암호화 권장
          role: admin.role
        }
      })
    }

    console.log('✅ [Prisma Seeder] 마스터 관리자 계정(9111713, 9111635) 자동 주입 완료!')
  } catch (error: any) {
    console.error('❌ [Prisma Seeder] 초기 계정 주입 중 예외 에러 발생:', error.message)
  }
})