export default defineNuxtPlugin((nuxtApp) => {
  let observer = null;

  // 감시를 시작하는 함수
  const startObservation = () => {
    if (typeof window.initAllUiComponents !== 'function') return;

    // 1. 페이지 로드 직후 즉시 1회 실행 (정적 HTML 대비)
    window.initAllUiComponents();

    // 2. 기존 감시자가 있다면 제거 (중복 방지)
    if (observer) observer.disconnect();

    // 3. 브라우저가 DOM 변화를 실시간 감지하도록 설정 (setTimeout 완벽 대체)
    observer = new MutationObserver(() => {
      // DOM에 변화(태그 추가 등)가 생기면 초기화 함수 실행
      window.initAllUiComponents();
    });

    // body 전체의 하위 요소 추가/삭제를 감시
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  // Nuxt 페이지 전환 완료 시점
  nuxtApp.hook('page:finish', () => {
    nextTick(() => {
      startObservation();
    });
  });
});