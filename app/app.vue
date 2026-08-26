
<script setup>
// 🟢 글로벌 메타 정보, 공통 CSS, 공통 스크립트만 깔끔하게 통합 관리합니다.
useHead({
  title: 'SKHDC 관리 시스템 | SK hystec',
  meta: [
    { name: 'description', content: 'SKHDC 관리 시스템 | SK hystec' },
    { name: 'copyright', content: 'skhystec.com' },
    // Open Graph (소셜 미디어 공유용 메타)
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'SKHDC 관리 시스템 | SK hystec' },
    { property: 'og:image', content: '/images/common/share-image.png' }, 
    { property: 'og:description', content: 'SKHDC 관리 시스템 | SK hystec' },
    { property: 'og:locale', content: 'ko_KR' },
    { property: 'og:image:width', content: '800' },
    { property: 'og:image:height', content: '400' },
    // Twitter 카드 메타
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'SKHDC 관리 시스템 | SK hystec' },
    { name: 'twitter:image', content: '/images/common/share-image.png' },
    { name: 'twitter:description', content: 'SKHDC 관리 시스템 | SK hystec' }
  ],
  link: [
    // 파비콘 및 앱 아이콘 설정
    { rel: 'apple-touch-icon', href: '/images/common/favicon.png' },
    { rel: 'shortcut icon', href: '/images/common/favicon.ico' },
    // 공통 CSS 파일만 전역으로 로드합니다 (main.css 간섭 차단 완료)
    { rel: 'stylesheet', type: 'text/css', href: '/css/jquery-ui.min.css' },
    { rel: 'stylesheet', type: 'text/css', href: '/css/common.css' }
  ],
  script: [
    // 공통 자바스크립트 엔진 일괄 안전 탑재
    { src: '/js/jquery-3.7.1.min.js', defer: true },
    { src: '/js/jquery-ui.min.js', defer: true },
    { src: '/js/jqueryui.js', defer: true },
    { src: '/js/echarts.min.js', defer: true },
    { src: '/js/common.js', defer: true }
  ]
})
</script>
<!-- app/app.vue 맨 하단 -->
<style>
/* 🟢 Nuxt 시스템이 강제 삽입한 중간 상자들의 높이 댐을 완전히 허물어줍니다. */
html, body, #__nuxt, #__nuxt > div {
  height: 100% !important;
  min-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  flex: 1;
  margin: 0;
  padding: 0;
  scrollbar-gutter: stable; /* 스크롤바 자리를 미리 항상 예약해두는 속성 */
}

/* 조상 박스들이 찌그러지지 않고 좌우로도 가득 차도록 강제 고정 */
#__nuxt, #__nuxt > div {
  width: 100%;
}

/* 🟢 퍼블리셔의 배치 규격인 .content가 flex 레이아웃 안에서 */
/* 빈 공간을 끝까지 밀고 내려가 채우도록 유연성을 부여합니다. */
.content {
  flex: 1;
}
/* 공통 CSS 파일 또는 app.vue */

/* 2. 만약 기존 프로젝트가 body의 .popOn 클래스로 스크롤을 제어 중이라면 아래 표준 대응을 추가 */
body.popOn {
  overflow: hidden !important;
  /* 브라우저 스크롤바의 평균 두께(약 16px ~ 17px)만큼 우측 여백을 강제 부여하여 밀림 방지 */
  padding-right: calc(100vw - 100%); 
}
</style>

<!-- app/app.vue -->
<template>
  <div>
    <!-- 이 컴포넌트가 app/pages 폴더 내의 index.vue나 login.vue를 감지해서 화면에 그려줍니다. -->
    <!-- ⚠️ 이 파일에는 <template>을 더 이상 추가하지 마세요. -->
    <NuxtPage />
  </div>
</template>
