// server/api/innerapi/logout.post.ts
export default defineEventHandler((event) => {
  // 쿠키를 삭제하기 위해 만료 시간(maxAge)을 0으로 주어 강제 소멸시킵니다.
  deleteCookie(event, 'auth_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  })

  console.log(`[SESSION] 🔓 로그아웃 처리가 완료되어 세션 쿠키를 파기했습니다.`);

  return { success: true, message: '로그아웃 성공' }
})