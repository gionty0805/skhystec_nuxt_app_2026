// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  future: {
    compatibilityVersion: 4
  },
  
  // 🛡️ 글로벌 보안 응답 헤더 일괄 추가
  routeRules: {
    '/**': {
      headers: {
        // 브라우저가 콘텐츠 타입을 강제로 추측(MIME Sniffing)하여 XSS를 유발하는 현상 방지
        'X-Content-Type-Options': 'nosniff',
        // 다른 사이트에서 우리 사이트를 iframe 등으로 무단 삽입하여 낚시하는 것 방지 (Clickjacking 차단)
        'X-Frame-Options': 'DENY',
        // 브라우저 내장 XSS 필터 강제 활성화
        'X-XSS-Protection': '1; mode=block',
        // HTTPS 연결 강제 (운영 서버 필수)
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
      }
    }
  },

  runtimeConfig: {
    externalBackendUrl: process.env.EXTERNAL_BACKEND_URL || 'https://your-backend.com'
  }
})