export default defineNuxtRouteMiddleware(async (to, from) => {
  // 1. [보완] 로그인 화면 제외는 물론, /api/ 로 시작하는 백엔드 내부 통신 경로는 미들웨어 통제 영역에서 즉시 통과 처리
  if (to.path === '/login' || to.path.startsWith('/api/')) {
    return
  }

  // 2. 세션 및 권한 데이터 조회 API 호출 (기존 로직 유지)
  const { data } = await useFetch('/api/innerapi/check-session', {
    headers: useRequestHeaders(['cookie'])
  })

  const session = data.value

  // 3. 비로그인 유저 리다이렉트 (이젠 순수 웹페이지 주소만 잡힙니다)
  if (!session || !session.isLoggedIn) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }

  const userPermissions = session.permissions || {}

  // 중요: 사용자가 접근하려는 라우트 주소 문자열 매칭 판별
  // 예: 사용자가 '/cable'에 가면 userPermissions['/cable']이 잡힘
  const currentPathKey = Object.keys(userPermissions).find(allowedPath => {
    if (allowedPath === '/') {
      return to.path === '/' // 메인화면은 정확히 일치할 때만
    }
    return to.path.startsWith(allowedPath) // 그 외 서브메뉴는 경로 매칭
  })

  const pageActions = currentPathKey ? userPermissions[currentPathKey] : null

  // 일반 유저가 주소창에 '/rack'을 쳐서 들어오는 경우 pageActions가 null이 되므로 홈('/')으로 퇴출
  if (!pageActions && to.path !== '/') {
    return navigateTo('/?error=unauthorized')
  }

  // 화면 (.vue) 파일에 세부 기능 권한 배열 배달 완료
  to.meta.pageActions = pageActions || []
})