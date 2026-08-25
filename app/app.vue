<!-- app/app.vue -->
<template>
  <div>
    <!-- 이 컴포넌트가 app/pages 폴더 내의 index.vue나 login.vue를 감지해서 화면에 그려줍니다. -->
    <!-- ⚠️ 이 파일에는 <template>을 더 이상 추가하지 마세요. -->
    <NuxtPage />
  </div>
</template>

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
<style>
/* Nuxt가 강제로 끼워넣은 컨테이너들의 높이를 가득 채우고 */
/* 부모(body)의 Flexbox 정렬 속성을 자식(login)에게 그대로 토스하도록 만듭니다. */
html, body, #__nuxt, #__nuxt > div {
  height: 100% !important;
  min-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  flex: 1;
  margin: 0;
  padding: 0;
}

/* 퍼블리셔의 정렬 구조가 수평/수직 분할 레이아웃일 경우를 위해 */
/* 중간 상자들이 공간을 100% 다 차지하도록 유연하게 확장시킵니다. */
#__nuxt {
  width: 100%;
}
</style>