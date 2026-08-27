export default defineEventHandler((event) => {
  // 1. [해결책] 명시적으로 패스(/)를 지정하고 maxAge: 0을 강제 주입하여 확실하게 파기합니다.
  setCookie(event, 'auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/', // 쿠키가 생성된 범위인 전체 루트 경로 지정
    maxAge: 0  // 0초를 주어 브라우저가 즉시 쿠키를 물리적으로 삭제하도록 명령
  })

  // 2. 만약의 상황을 대비해 deleteCookie도 병행 호출 (보완 장치)
  deleteCookie(event, 'auth_token', {
    path: '/'
  })

  console.log(`[SESSION] 🔓 로그아웃 처리가 완료되어 auth_token 쿠키를 완벽히 파쇄했습니다.`);

  return { success: true, message: '로그아웃 성공' }
})