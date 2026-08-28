import prisma from '../../utils/prisma'
import * as argon2 from 'argon2'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // ============================================================
  // 1. 입력값 검증
  // ============================================================

  if (
    !body ||
    body.username === undefined ||
    body.username === null
  ) {
    throw createError({
      statusCode: 400,
      message: '아이디를 입력해 주세요.'
    })
  }

  const inputUsername = String(body.username).trim()
  const inputPassword = body.password
    ? String(body.password)
    : ''

  if (!inputUsername) {
    throw createError({
      statusCode: 400,
      message: '올바른 아이디를 입력해 주세요.'
    })
  }

  // 사번은 숫자만 허용
  if (!/^\d+$/.test(inputUsername)) {
    throw createError({
      statusCode: 400,
      message: '아이디는 숫자만 입력할 수 있습니다.'
    })
  }

  // ============================================================
  // 2. 사용자 조회
  // ============================================================

  let user

  try {
    user = await prisma.user.findUnique({
      where: {
        username: inputUsername
      }
    })
  } catch (error) {
    console.error(
      `[LOGIN ERROR] DB 사용자 조회 실패: ${inputUsername}`,
      error
    )

    throw createError({
      statusCode: 500,
      message: '사용자 정보를 확인하는 중 오류가 발생했습니다.'
    })
  }

  // ============================================================
  // 3. LOCAL 로그인
  // localLoginEnabled = true인 사용자
  // ============================================================

  if (user?.localLoginEnabled === true) {

    if (!inputPassword) {
      throw createError({
        statusCode: 400,
        message: '비밀번호를 입력해 주세요.'
      })
    }

    if (!user.password) {
      throw createError({
        statusCode: 401,
        message: '로컬 로그인 비밀번호가 설정되지 않은 계정입니다.'
      })
    }

    // Argon2 형식이 아닌 기존 평문 비밀번호 방어
    if (!user.password.startsWith('$argon2')) {
      console.error(
        `[LOCAL LOGIN ERROR] 비밀번호 해시 형식 오류: ${inputUsername}`
      )

      throw createError({
        statusCode: 500,
        message: '계정 비밀번호 설정에 문제가 있습니다. 관리자에게 문의해 주세요.'
      })
    }

    let passwordValid = false

    try {
      passwordValid = await argon2.verify(
        user.password,
        inputPassword
      )
    } catch (error) {
      console.error(
        `[LOCAL LOGIN ERROR] 비밀번호 검증 오류: ${inputUsername}`,
        error
      )

      throw createError({
        statusCode: 500,
        message: '로그인 처리 중 오류가 발생했습니다.'
      })
    }

    if (!passwordValid) {
      console.warn(
        `[LOCAL LOGIN FAILED] 비밀번호 불일치: ${inputUsername}`
      )

      throw createError({
        statusCode: 401,
        message: '아이디 또는 비밀번호가 올바르지 않습니다.'
      })
    }

    // LOCAL 로그인 성공
    setCookie(event, 'auth_token', user.username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 5
    })

    console.log(
      `[LOCAL LOGIN SUCCESS] ${inputUsername}`
    )

    return {
      success: true,
      loginType: 'LOCAL'
    }
  }

  // ============================================================
  // 4. LOCAL 로그인 미허용 → SSO 로그인
  //
  // user가 존재하지만 localLoginEnabled=false
  // 또는 DB에 사용자가 아직 존재하지 않는 경우
  // → SSO 인증
  // ============================================================

  console.log(
    `[SSO LOGIN] SSO 인증 시작: ${inputUsername}`
  )

  // ------------------------------------------------------------
  // SSO 환경설정 검증
  // undefined 상태로 URL 생성되는 것 방지
  // ------------------------------------------------------------

  if (!config.ssoClientId) {
    console.error('[SSO CONFIG ERROR] ssoClientId가 없습니다.')

    throw createError({
      statusCode: 500,
      message: 'SSO Client ID가 설정되지 않았습니다. 관리자에게 문의해 주세요.'
    })
  }

  if (!config.ssoAuthorizationEndpoint) {
    console.error(
      '[SSO CONFIG ERROR] ssoAuthorizationEndpoint가 없습니다.'
    )

    throw createError({
      statusCode: 500,
      message: 'SSO 인증 서버 주소가 설정되지 않았습니다. 관리자에게 문의해 주세요.'
    })
  }

  if (!config.ssoRedirectUri) {
    console.error(
      '[SSO CONFIG ERROR] ssoRedirectUri가 없습니다.'
    )

    throw createError({
      statusCode: 500,
      message: 'SSO Callback 주소가 설정되지 않았습니다. 관리자에게 문의해 주세요.'
    })
  }

  const ssoClientId = String(config.ssoClientId)
  const ssoAuthorizationEndpoint =
    String(config.ssoAuthorizationEndpoint)
  const ssoRedirectUri =
    String(config.ssoRedirectUri)

  // ============================================================
  // 5. SSO state 생성
  // ============================================================

  const state = crypto.randomUUID()

  setCookie(event, 'sso_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 5
  })

  /**
   * callback에서 어떤 사용자가 SSO를 시작했는지
   * 비교할 수 있도록 사번도 임시 저장
   */
  setCookie(event, 'sso_username', inputUsername, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 5
  })

  // ============================================================
  // 6. SSO Authorization URL 생성
  // ============================================================

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: ssoClientId,
    redirect_uri: ssoRedirectUri,
    scope: 'openid',
    state
  })

  const separator =
    ssoAuthorizationEndpoint.includes('?')
      ? '&'
      : '?'

  const ssoUrl =
    `${ssoAuthorizationEndpoint}${separator}${params.toString()}`

  console.log(
    `[SSO LOGIN REDIRECT] ${inputUsername} → SSO`
  )

  // 보안상 전체 URL/Client ID 등을 운영 로그에 출력하지 않는 것을 권장
  console.log(
    `[SSO CONFIG] endpoint=${ssoAuthorizationEndpoint}, redirectUri=${ssoRedirectUri}`
  )

  return {
    success: true,
    loginType: 'SSO',
    redirectUrl: ssoUrl
  }
})