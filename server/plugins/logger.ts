// server/plugins/logger.ts
import { getCookie } from 'h3'
import prisma from '../utils/prisma'

export default defineNitroPlugin((nitroApp) => {
  // 1. 요청 시작 시 타이머 마킹
  nitroApp.hooks.hook('request', (event) => {
    event.context._startTime = Date.now()
  })

  // 2. 정상 응답 성공 시 로그 자동 Insert (200~300번대)
  nitroApp.hooks.hook('afterResponse', async (event) => {
    const statusCode = event.node.res.statusCode
    if (statusCode >= 400) return // 에러 로그와의 중복 적재 원천 차단
    
    // 💡 [최적화 필터] 5분 연장 감시용 check-session 호출 로그가 DB를 도배하는 현상 방지
    if (event.path.includes('/api/innerapi/check-session')) return

    const startTime = event.context._startTime || Date.now()
    const duration = Date.now() - startTime
    
    // httpOnly 쿠키에서 유저 사번 식별자 복원
    const token = getCookie(event, 'auth_token')
    const userId = token ? String(token).trim() : 'Guest'

    console.log(`[${new Date().toISOString()}] ✅ [${event.method}] ${event.path} [User: ${userId}] - Status: ${statusCode} (${duration}ms)`)

    try {
      // 💡 [Prisma 로그 저장] 제공해주신 UserLog 스키마 규격에 정확히 맞춰 INSERT 연산 가동
      await prisma.userLog.create({
        data: {
          method: event.method,
          path: event.path,
          userId: userId,
          statusCode: statusCode,
          duration: duration,
          status: 'SUCCESS'
        }
      })
    } catch (dbError) {
      console.error('❌ [Prisma LOG INSERT ERROR] 성공 로그 적재 실패:', dbError)
    }
  })

  // 3. 로그인 실패(401) 및 서버 크래시(500) 발생 시 로그 자동 Insert
  nitroApp.hooks.hook('error', async (error, { event }) => {
    if (!event) return

    const method = event.method
    const url = event.path
    const statusCode = event.node.res.statusCode || 500
    
    const startTime = event.context._startTime || Date.now()
    const duration = Date.now() - startTime
    
    const token = getCookie(event, 'auth_token')
    const userId = token ? String(token).trim() : 'Guest'

    console.error(`[${new Date().toISOString()}] ❌ [${method}] ${url} [User: ${userId}] - Status: ${statusCode} (${duration}ms) -> 에러 처리 구역 개입`)

    try {
      // 💡 [Prisma 에러 로그 저장] 실패 내용과 함께 상세 에러 메시지(errorMessage)를 누적 기록
      await prisma.userLog.create({
        data: {
          method: method,
          path: url,
          userId: userId,
          statusCode: statusCode,
          duration: duration,
          status: 'FAIL',
          errorMessage: error.message
        }
      })
    } catch (dbError) {
      console.error('❌ [Prisma LOG INSERT ERROR] 에러 로그 적재 실패:', dbError)
    }
  })
})