export default defineNuxtRouteMiddleware(async (to) => {
  // =========================================================
  // 1. 인증 제외 경로
  // =========================================================
  if (to.path === '/login' || to.path.startsWith('/api/')) {
    return
  }

  try {
    let session: any = null

    // =========================================================
    // 2. 세션 조회
    // =========================================================
    if (import.meta.server) {
      /**
       * SSR
       *
       * 현재 GET / 요청에 들어온 Cookie를
       * check-session API에도 명시적으로 전달
       */
      const headers = useRequestHeaders(['cookie'])

      console.log('[AUTH SSR COOKIE]', {
        path: to.path,
        hasCookie: !!headers.cookie
      })

      session = await $fetch('/api/innerapi/check-session', {
        headers
      })
    } else {
      /**
       * CSR
       *
       * 브라우저가 가지고 있는 Cookie 사용
       */
      session = await $fetch('/api/innerapi/check-session', {
        credentials: 'include'
      })
    }

    // =========================================================
    // 3. 디버깅
    // =========================================================
    console.log('[ROUTE AUTH CHECK]', {
      path: to.path,
      isLoggedIn: session?.isLoggedIn,
      username: session?.username,
      role: session?.role
    })

    // =========================================================
    // 4. 비로그인
    // =========================================================
    if (!session?.isLoggedIn) {
      console.warn('[AUTH REDIRECT LOGIN]', {
        path: to.path,
        session
      })

      return navigateTo(
        `/login?redirect=${encodeURIComponent(to.fullPath)}`
      )
    }

    // =========================================================
    // 5. ADMIN
    // =========================================================
    if (session.role === 'ADMIN') {
      to.meta.pageActions = ['*']

      console.log(
        `[AUTH ADMIN BYPASS] ${session.username} → ${to.path}`
      )

      return
    }

    // =========================================================
    // 6. 일반 사용자 권한
    // =========================================================
    const userPermissions = session.permissions || {}

    const currentPathKey = Object.keys(userPermissions).find(
      (allowedPath) => {
        // 메인은 정확하게 "/"만
        if (allowedPath === '/') {
          return to.path === '/'
        }

        // /rack 권한이 있으면:
        // /rack
        // /rack/1
        // /rack/detail/1
        //
        // 허용
        return (
          to.path === allowedPath ||
          to.path.startsWith(`${allowedPath}/`)
        )
      }
    )

    const pageActions = currentPathKey
      ? userPermissions[currentPathKey]
      : null

    // =========================================================
    // 7. 메뉴 접근 권한 없음
    // =========================================================
    if (!pageActions && to.path !== '/') {
      return navigateTo('/?error=unauthorized')
    }

    // =========================================================
    // 8. 페이지에 세부 권한 전달
    // =========================================================
    to.meta.pageActions = pageActions || []

  } catch (error) {
    console.error('[ROUTE AUTH ERROR]', error)

    return navigateTo(
      `/login?redirect=${encodeURIComponent(to.fullPath)}`
    )
  }
})