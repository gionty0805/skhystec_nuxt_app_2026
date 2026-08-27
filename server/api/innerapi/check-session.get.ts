// server/api/innerapi/check-session.get.ts
import fs from 'node:fs'
import path from 'node:path'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const currentTime = new Date().toISOString()
  
  // 1. 보안 httpOnly 쿠키에서 저장된 토큰(사번) 검사
  const token = getCookie(event, 'auth_token')

  if (token) {
    // 5분 수명 리프레시 충전 (Sliding Expiration)
    setCookie(event, 'auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 5
    })

    const username = token; // 로그인 처리 시 보관된 사번 매칭

    // 💡 [DB 조회 추가] 사번 문자열(username)을 이용해 실제 User 테이블의 데이터를 조회합니다.
    const user = await prisma.user.findUnique({
      where: { username: username }
    })

    // 쿠키는 유효하나 실제 DB에 유저가 존재하지 않는 예외 상황 차단
    if (!user) {
      console.warn(`[${currentTime}] ⚠️ [AUTH:INVALID] 쿠키 사번은 존재하나 DB 유저 정보 없음 | 사번: ${username}`)
      return { isLoggedIn: false, userRole: 'GUEST', permissions: {} }
    }

    // 2. 권한 마스터 JSON 로드
    const jsonPath = path.resolve(process.cwd(), 'server/data/permissions.json')
    const fileData = fs.readFileSync(jsonPath, 'utf8')
    const permissionMaster = JSON.parse(fileData)

    let userRoleData;

    // 💡 [권한 판별 변경] 사번 화이트리스트 대신 실제 DB에 저장된 유저의 role 속성값을 기준으로 판단합니다.
    if (user.role === 'ADMIN') {
      // 관리자: 전 메뉴 오프닝 및 DELETE 권한 포괄 탑재
      userRoleData = permissionMaster.roles.ADMIN
      
      // 📊 [LOG] DB 기반 관리자 활동 실시간 로그 기록
      console.log(`[${currentTime}] 🔑 [AUTH:ACTIVE] 관리자 권한 활성화 중 | 사번: ${username} | Role: ADMIN (Full Bypass)`)
    } else {
      // 일반 유저: /rack 메뉴 자동 제외, 모든 권한에서 DELETE 누락 처리된 명세 할당
      userRoleData = permissionMaster.roles.USER
      
      // 📊 [LOG] DB 기반 일반 임직원 활동 실시간 로그 기록
      console.log(`[${currentTime}] 👤 [AUTH:ACTIVE] 일반 세션 연장 완료 | 사번: ${username} | Role: ${user.role} (Limited)`)
    }

    return {
      isLoggedIn: true,
      userId: user.username, // 데이터베이스에서 꺼낸 확실한 사번 명시
      ...userRoleData
    }
  }

  // 🚨 [LOG] 비로그인(게스트) 유저가 무단 접근하거나 세션이 만료되어 기웃거릴 때 경고 로그 기록
  const referer = event.node.req.headers.referer || 'Direct Access'
  console.warn(`[${currentTime}] ⚠️ [AUTH:EXPIRED] 미인증 또는 세션 만료 유저 접근 감지 | 경로: ${referer} -> /login 리다이렉트 유도`)

  return { isLoggedIn: false, userRole: 'GUEST', permissions: {} }
})