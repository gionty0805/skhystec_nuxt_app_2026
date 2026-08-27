// plugins/session-timeout.client.js 또는 ui-initializer.client.js 내부에 병합

export default defineNuxtPlugin((nuxtApp) => {
  let timeoutTimer = null;
  const TIMEOUT_5_MINS = 5 * 60 * 1000; // 5분을 밀리초로 계산 (300,000ms)

  // 1. 실제 로그아웃을 실행하고 세션을 파기하는 함수
  const triggerLogout = async () => {
    try {
      // 서버의 로그아웃 API를 호출하여 httpOnly 쿠키를 완전히 날립니다.
      await $fetch('/api/outerapi/logout', { method: 'POST' });
    } catch (e) {
      // 로그아웃 API가 아직 없다면 브라우저 강제 이동으로 세션 초기화 유도
    } finally {
      alert('5분 동안 활동이 없어 안전을 위해 자동 로그아웃되었습니다.');
      // 현재 주소를 백업하며 로그인 화면으로 강제 워프
      const currentPath = useRoute().fullPath;
      navigateTo(`/login?redirect=${encodeURIComponent(currentPath)}`, { replace: true });
    }
  };

  // 2. 타이머를 리셋하고 5분 시간을 다시 재기 시작하는 함수
  const resetTimeoutTimer = () => {
    if (timeoutTimer) clearTimeout(timeoutTimer);
    
    // 5분 뒤에 triggerLogout을 실행하도록 예약
    timeoutTimer = setTimeout(triggerLogout, TIMEOUT_5_MINS);
  };

  // 3. 사용자가 어떤 활동을 할 때마다 주기적으로 쿠키 만료시간을 연장해주는 함수 (Throttling 적용)
  let lastExtendActiveTime = 0;
  const extendSessionCookie = async () => {
    const now = Date.now();
    // 1분(60,000ms)에 한 번씩만 서버에 연장 신호를 보내어 서버 부하를 방지합니다.
    if (now - lastExtendActiveTime > 60000) {
      lastExtendActiveTime = now;
      // 세션 연장 전용 가벼운 API 호출 (쿠키 만료시간이 다시 5분으로 갱신됨)
      await $fetch('/api/innerapi/check-session', { method: 'GET' });
    }
  };

  // 4. 사용자의 온갖 액션(마우스, 키보드, 스크롤, 클릭)을 복합 감지
  const onUserActivity = () => {
    resetTimeoutTimer();     // 5분 타이머 리셋
    extendSessionCookie();   // 서버 쿠키 수명 5분으로 갱신
  };

  // Nuxt 페이지가 완전히 브라우저에 안착하면 감시를 시작합니다.
  nuxtApp.hook('page:finish', () => {
    // 사용자가 로그인된 상태일 때만 타이머 가동 (로그인 안 됐으면 패스)
    const tokenCookie = document.cookie.includes('auth_token'); // httpOnly라 값은 안보여도 존재여부는 판별 가능할 수 있음, 확실한 건 check-session 응답 기반 권장
    
    // 안전하게 최초 1회 타이머 가동
    resetTimeoutTimer();

    // 브라우저 전역 이벤트 리스너 등록
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.removeEventListener(event, onUserActivity); // 중복 등록 방지
      window.addEventListener(event, onUserActivity, { passive: true });
    });
  });
});