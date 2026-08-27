// server/api/innerapi/check-session.get.ts
import fs from 'node:fs'
import path from 'node:path'

export default defineEventHandler((event) => {
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

    // 2. 권한 마스터 JSON 로드
    const jsonPath = path.resolve(process.cwd(), 'server/data/permissions.json')
    const fileData = fs.readFileSync(jsonPath, 'utf8')
    const permissionMaster = JSON.parse(fileData)

    // 3. 관리자 사번 화이트리스트 분기 처리
    const adminUsers = ['9111713', '9111635']
    let userRoleData;

    if (adminUsers.includes(username)) {
      // 관리자: 전 메뉴 오프닝 및 DELETE 권한 포괄 탑재
      userRoleData = permissionMaster.roles.ADMIN
    } else {
      // 일반 유저: /rack 메뉴 자동 제외, 모든 권한에서 DELETE 누락 처리된 명세 할당
      userRoleData = permissionMaster.roles.USER
    }

    return {
      isLoggedIn: true,
      ...userRoleData
    }
  }

  return { isLoggedIn: false, userRole: 'GUEST', permissions: {} }
})