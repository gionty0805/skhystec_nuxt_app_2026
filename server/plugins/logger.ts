// server/plugins/logger.ts
export default defineNitroPlugin((nitroApp) => {
  // 1. 요청 시작 시
  nitroApp.hooks.hook('request', (event) => {
    event.context._startTime = Date.now()
  })

  // 2. 정상 응답 성공 시 (200~300번대 및 일반적인 예외 처리)
  nitroApp.hooks.hook('afterResponse', (event) => {
    const statusCode = event.node.res.statusCode
    if (statusCode >= 400) return // 에러는 아래 'error' 훅에서 처리하므로 중복 방지 패스
    
    const startTime = event.context._startTime || Date.now()
    const duration = Date.now() - startTime

    console.log(
      `[${new Date().toISOString()}] ✅ [${event.method}] ${event.path} - Status: ${statusCode} (${duration}ms)`
    )
  })

  // 3. 🔥 중요: 시스템 크래시 및 500 서버 에러 강제 포착 훅 추가
  nitroApp.hooks.hook('error', async (error, { event }) => {
    if (!event) return

    const method = event.method
    const url = event.path
    const statusCode = event.node.res.statusCode || 500
    
    const startTime = event.context._startTime || Date.now()
    const duration = Date.now() - startTime

    // 터미널에 무조건 빨간색 경고등과 함께 에러를 강제로 찍어줍니다.
    console.error(
      `[${new Date().toISOString()}] ❌ [${method}] ${url} - Status: ${statusCode} (${duration}ms) -> 서버 크래시 에러 발생!`
    )
    console.error(`  ⚠️ [Error Message]:`, error.message)
    console.error(`  📂 [Stack Trace]:`, error.stack?.split('\n')[1] || '위치 불명') 
  })
})