// server/plugins/logger.ts
export default defineNitroPlugin((nitroApp) => {
  // 1. 요청 시작 시
  nitroApp.hooks.hook('request', (event) => {
    event.context._startTime = Date.now()
  })

  // 2. 정상 응답 성공 시
  nitroApp.hooks.hook('afterResponse', (event) => {
    const statusCode = event.node.res.statusCode
    if (statusCode >= 400) return // 에러 훅 중복 방지
    
    const startTime = event.context._startTime || Date.now()
    const duration = Date.now() - startTime
    
    // 💡 event.context에서 사용자 식별자 정보 추출 (없으면 'Guest')
    const userId = event.context.user?.id || 'Guest'

    console.log(
      `[${new Date().toISOString()}] ✅ [${event.method}] ${event.path} [User: ${userId}] - Status: ${statusCode} (${duration}ms)`
    )
  })

  // 3. 시스템 크래시 및 500 서버 에러 포착
  nitroApp.hooks.hook('error', async (error, { event }) => {
    if (!event) return

    const method = event.method
    const url = event.path
    const statusCode = event.node.res.statusCode || 500
    
    const startTime = event.context._startTime || Date.now()
    const duration = Date.now() - startTime
    
    // 💡 에러 발생 당시의 사용자 식별자 정보 추출
    const userId = event.context.user?.id || 'Guest'

    console.error(
      `[${new Date().toISOString()}] ❌ [${method}] ${url} [User: ${userId}] - Status: ${statusCode} (${duration}ms) -> 서버 크래시 에러 발생!`
    )
    console.error(`  ⚠️ [Error Message]:`, error.message)
    console.error(`  📂 [Stack Trace]:`, error.stack?.split('\n')[1] || '위치 불명') 
  })
})