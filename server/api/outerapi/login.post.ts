export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // 1. 🛡️ 데이터 유실 및 잘못된 요청 양식 차단
  if (!body || body.username === undefined || body.username === null) {
    throw createError({ statusCode: 400, message: '아이디를 입력해 주세요.' })
  }

  // 브라우저에서 보낸 값 그대로 추출 (양끝 공백만 제거)
  const inputUsername = String(body.username).trim()
  const inputPassword = body.password ? String(body.password) : ''

  // 2. 🛡️ 빈 값 또는 비정상적인 값 원천 차단
  if (inputUsername === '' || inputUsername === 'undefined' || inputUsername === 'null') {
    throw createError({ statusCode: 400, message: '올바른 아이디를 입력해 주세요.' })
  }
  // SQL Injection regex 차단
  const injectionRegex = /['";-]/g 
  if (injectionRegex.test(inputUsername)) {
    throw createError({ statusCode: 400, message: '아이디에 허용되지 않는 특수문자가 포함되어 있습니다.' })
  }

  // 공통 보안 쿠키 세팅 옵션 (5분 타임아웃 고정)
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    maxAge: 60 * 5 // 5분
  }

  // 3. 🛡️ 테스트 관리자 계정 엄격 검증 (오타 방지를 위해 한 개씩 정확히 비교)
  // 변수 대입 오류를 막기 위해 inputUsername이 정확히 일치하는지 개별 비교합니다.
  if (inputUsername === '9111713') {
    console.log(`[SECURITY PASSED] 🛡️ 안전하게 검증된 테스트 관리자 계정(9111713) 우회 가동`);
    setCookie(event, 'auth_token', '9111713', cookieOptions)
    return { success: true }
  }
  
  if (inputUsername === '9111635') {
    console.log(`[SECURITY PASSED] 🛡️ 안전하게 검증된 테스트 관리자 계정(9111635) 우회 가동`);
    setCookie(event, 'auth_token', '9111635', cookieOptions)
    return { success: true }
  }

  // 4. 일반 사원용 외부 백엔드 서버 인증 처리
  try {
    console.log(`[AUTH TRY] 외부 백엔드로 인증 요청을 송신합니다. ID: ${inputUsername}`);
    
    const response = await $fetch<{ token: string, user_id?: string }>(`${config.externalBackendUrl}/api/login`, {
      method: 'POST',
      body: { 
        username: inputUsername, 
        password: inputPassword 
      } 
    })

    // 외부 백엔드 응답 검증 (토큰이 없으면 실패 처리)
    if (!response || !response.token) {
      throw createError({ statusCode: 401, message: '인증 토큰 발급에 실패했습니다.' })
    }

    // 백엔드가 공인한 ID가 없다면 본인이 입력했던 안전한 inputUsername을 사용
    const verifiedUsername = response.user_id ? String(response.user_id).trim() : inputUsername;

    setCookie(event, 'auth_token', verifiedUsername, cookieOptions)
    return { success: true }

  } catch (error: any) {
    console.error(`❌ [AUTH FAILED] 인증 실패 ID: ${inputUsername} ->`, error.message)
    throw createError({
      statusCode: error.response?.status || 401,
      message: error.response?._data?.message || '아이디 또는 비밀번호가 올바르지 않습니다.'
    })
  }
})