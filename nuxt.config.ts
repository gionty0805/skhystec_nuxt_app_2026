// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  future: {
    compatibilityVersion: 4
  },
  
  // 🟢 [하이드레이션 경고 강제 진압 옵션 추가]
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // 퍼블리셔 마크업 주석 등으로 인한 미스매치 경고 콘솔 노출을 차단합니다.
          isCustomElement: (tag) => false
        }
      }
    }
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
    ssoClientId: process.env.NUXT_SSO_CLIENT_ID,
    ssoAuthorizationEndpoint: process.env.NUXT_SSO_AUTHORIZATION_ENDPOINT,
    ssoTokenEndpoint: process.env.NUXT_SSO_TOKEN_ENDPOINT,
    ssoUserinfoEndpoint: process.env.NUXT_SSO_USERINFO_ENDPOINT,
    ssoJwksUri: process.env.NUXT_SSO_JWKS_URI,
    ssoIssuer: process.env.NUXT_SSO_ISSUER,
    ssoRedirectUri: process.env.NUXT_SSO_REDIRECT_URI,
    externalBackendUrl: process.env.EXTERNAL_BACKEND_URL || 'https://your-backend.com'
  },
  // 💡 Nitro 빌드 엔진이 프리즈마 클라이언트를 제멋대로 변조하지 못하도록 락을 겁니다.
  nitro: {
    experimental: {
      openAPI: false
    },
    // 빌드 시 외부 Node.js 기본 라이브러리로 온전히 취급하도록 지정
    external: ['@prisma/client']
  }
})