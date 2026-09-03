// server/api/innerapi/check-session.get.ts
import fs from 'node:fs'
import path from 'node:path'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const currentTime = new Date().toISOString()

  // 1. 인증 쿠키 확인
  const token = getCookie(event, 'auth_token')

  if (!token) {
    const referer =
      event.node.req.headers.referer || 'Direct Access'

    console.warn(
      `[${currentTime}] ⚠️ [AUTH:EXPIRED] 미인증 또는 세션 만료 유저 접근 감지 | 경로: ${referer} -> /login 리다이렉트 유도`
    )

    return {
      isLoggedIn: false,
      username: null,
      role: 'GUEST',
      permissions: {}
    }
  }

  // 2. Sliding Expiration
  setCookie(event, 'auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 5,
    path: '/'
  })

  const username = token

  // 3. DB 사용자 조회
  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (
    !user ||
    !user.localLoginEnabled ||
    !user.password
  ) {
    deleteCookie(event, 'auth_token', {
      path: '/'
    })

    throw createError({
      statusCode: 401,
      statusMessage: '로그인할 수 없는 계정입니다.'
    })
  }

  // 4. 권한 JSON 로드
  const jsonPath = path.resolve(
    process.cwd(),
    'server/data/permissions.json'
  )

  const fileData = fs.readFileSync(jsonPath, 'utf8')
  const permissionMaster = JSON.parse(fileData)

  let userRoleData

  // 5. Role 기준 권한 결정
  if (user.role === 'ADMIN') {
    userRoleData = permissionMaster.roles.ADMIN

    console.log(
      `[${currentTime}] 🔑 [AUTH:ACTIVE] 관리자 권한 활성화 중 | 사번: ${username} | Role: ADMIN (Full Bypass)`
    )
  } else {
    userRoleData = permissionMaster.roles.USER

    console.log(
      `[${currentTime}] 👤 [AUTH:ACTIVE] 일반 세션 연장 완료 | 사번: ${username} | Role: ${user.role} (Limited)`
    )
  }

  // 6. middleware에서 사용할 형태로 응답
  return {
    isLoggedIn: true,

    username: user.username,
    role: user.role,

    ...userRoleData
  }
})