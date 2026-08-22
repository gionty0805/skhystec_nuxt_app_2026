// server/api/innerapi/dashboard.ts
export default defineEventHandler((event) => {
  // 쿠키에서 인증 토큰 확인
  const token = getCookie(event, 'auth_token')

  if (!token) {
    throw createError({
      statusCode: 401,
      message: '인증되지 않은 사용자입니다. 로그인이 필요합니다.'
    })
  }

  // Nuxt 자체 가공 데이터 리턴
  return {
    summary: { totalUsers: 1250, activeProjects: 8 },
    notice: "Nuxt 내부 백엔드(innerapi)에서 안전하게 제공하는 대시보드 데이터입니다.",
    updatedAt: new Date().toISOString()
  }
})