<!-- app/pages/login.vue -->
<template>
  <!-- 🟢 감싸는 div 없이 원본 마크업 레이아웃과 완벽하게 1:1 대칭 구조로 배치합니다. -->
  <!-- s: login -->
  <section class="login">
    <div class="login-bg">
      <h3 class="login-bg-logo">
        <img src="/images/login/login-logo.svg" alt="SK hystec" />
      </h3>
      <div class="login-bg-info-wrap">
        <h4 class="login-bg-info-tit">SK hystec Datacentar <br class="onM" />Management System</h4>
        <p class="login-bg-info-txt">SKHDC 관리 시스템은 장비 반입·반출, 케이블 신청, Rack 관리 기능을 제공하고, 처리 현황과 이상 여부를 한눈에 확인할 수 있습니다.</p>
      </div>
    </div>

    <div class="login-wrap">
      <div class="login-inner">
        <div></div>

        <div>
          <h1 class="mt-1 mt-sm-0 fs-2 fs-sm-15">로그인</h1>
          <p class="mt-1 mt-sm-075 fs-1125 fs-sm-1">아이디와 비밀번호를 입력하세요.</p>
        </div>

        <div>
          <!-- 🟢 표준 서브밋 폼 연동 -->
          <form @submit.prevent="handleLogin">
            <ul class="login-input-wrap">
              <li class="login-input">
                <label for="user_id" class="login-input-label">아이디</label>
                <input type="text" v-model="form.username" name="user_id" class="input" id="user_id" placeholder="아이디를 입력해 주세요." required />
              </li>
              <li class="login-input">
                <label for="user_password" class="login-input-label">비밀번호</label>
                <input type="password" v-model="form.password" name="user_password" class="input" id="user_password" placeholder="비밀번호를 입력해 주세요." required />
              </li>
            </ul>

            <!-- 🛡️ 로그인 검증 및 인증 에러 실시간 피드백 영역 -->
            <p v-if="errorMessage" style="color: #e74c3c; font-size: 14px; margin: 12px 0 5px 5px; font-weight: bold;">
              ⚠️ {{ errorMessage }}
            </p>

            <button type="submit" class="btn-done w-100 login-btn">로그인</button>
          </form>

          <div class="login-link-wrap">
            <button type="button" class="login-link link-arrow" id="btn-password" onclick="popOpen('#password-pop', '#btn-password')">
              <span class="question">비밀번호를 잊으셨나요?</span>
              <span class="txt">비밀번호 초기화</span>
            </button>
          </div>
        </div>

        <div class="mt-3 mt-sm-15">
          <p class="login-copy">COPYRIGHT 2026 SK HYSTEC INC. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- e: login -->

  <!-- s: 비밀번호 초기화 팝업 레이어 (원본 마크업 유지) -->
  <div class="pop" id="password-pop">
    <button type="button" class="pop-dim" onclick="popClose('#password-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
    <div class="pop-inner short mt-16">
      <div class="pop-tit-wrap">
        <button type="button" class="pop-tit-btn-cls" onclick="popClose('#password-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
        <h2 class="pop-tit">임시 비밀번호 발급</h2>
      </div>
      <div class="pop-con">
        <p class="ta-center">비밀번호를 잊어버리셨거나 오랜만에 접속하시는 경우, <br />임시 비밀번호를 발급받아 로그인하신 뒤 새 비밀번호로 재설정해 주세요.</p>

        <table class="table mobile mt-1">
          <caption>표 제목: 임시 비밀번호 발급 / 구성: 구분, 내용</caption>
          <colgroup>
            <col width="25%" />
            <col width="75%" />
          </colgroup>
          <thead class="el-hid">
            <tr>
              <th>구분</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bd-top">
              <td class="bg-lightgray">
                <strong class="color-black mobile-tit">
                  <label for="pop-user_id">아이디<span class="require"></span></label>
                </strong>
              </td>
              <td>
                <input type="text" name="user_id" class="input" id="pop-user_id" placeholder="아이디 입력" />
              </td>
            </tr>
            <tr>
              <td class="bg-lightgray">
                <strong class="color-black mobile-tit">
                  <label for="pop-user_name">이름<span class="require"></span></label>
                </strong>
              </td>
              <td>
                <input type="text" class="input" name="user_name" id="pop-user_name" placeholder="이름 입력" />
              </td>
            </tr>
            <tr>
              <td class="bg-lightgray">
                <strong class="color-black mobile-tit">
                  <label for="pop-user_phone">휴대폰번호<span class="require"></span></label>
                </strong>
              </td>
              <td>
                <div class="dis-fx">
                  <input type="tel" class="input" name="user_phone" id="pop-user_phone" placeholder="휴대폰번호 입력(숫자만)" />
                  <button type="button" class="btn-line-gray flex-shrink ml-025" onclick="popToast('인증번호가 발송되었습니다.', 2000)">인증번호 발송</button>
                </div>
              </td>
            </tr>
            <tr class="bd-btm">
              <td class="bg-lightgray">
                <strong class="color-black mobile-tit">
                  <label for="pop-assign_a">인증번호 입력<span class="require"></span></label>
                </strong>
              </td>
              <td>
                <div class="dis-fx">
                  <input type="text" autocomplete="one-time-code" class="input" name="assign_a" id="pop-assign_a" placeholder="인증번호 입력" disabled="" />
                  <button type="button" class="btn-line-gray flex-shrink ml-025" onclick="popToast('인증번호 확인이 완료되었습니다.&lt;br&gt;임시 비밀번호 발급 버튼을 눌러 주세요.', 2000)">인증번호 확인</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="w-90 w-max-24 m-auto mt-1 mt-sm-0 fs-14 ta-center ls-03 color-gray-6">
          인증번호를 확인하신 뒤 임시 비밀번호 발급 버튼을 눌러 주세요. <br class="onW" />
          입력하신 휴대폰번호로 알림톡 또는 문자 메시지로 발송됩니다.
        </p>

        <div class="btn-wrap dis-fx fw-nowrap mt-15">
          <button type="button" class="btn-cancel w-100" onclick="popClose('#password-pop')">닫기</button>
          <button type="button" class="btn-done w-100" onclick="popToast('임시 비밀번호가 발급되었습니다.', 2000); popClose('#password-pop');">
            임시 비밀번호 발급
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- e: 비밀번호 초기화 팝업 레이어 -->
</template>

<script setup lang="ts"> // 💡 lang="ts"를 추가하여 타입스크립트 문법을 안전하게 허용합니다.
useHead({
  link: [
    { rel: 'stylesheet', type: 'text/css', href: '/css/pages/login.css' }
  ]
})
// ------------------------------------------------------------------
// 🛡️ 완비된 기존 로그인 연동 아키텍처 비즈니스 로직 (변경 제로)
// ------------------------------------------------------------------
import { reactive, ref } from 'vue'
import { useRoute, navigateTo } from '#app'

// 💡 템플릿의 'form.username'과 완전 일치하도록 ref 대신 reactive를 사용합니다.
const form = reactive({
  username: '',
  password: ''
})

const errorMessage = ref('')
const route = useRoute()

const handleLogin = async () => {
  // 에러 메시지 초기화
  errorMessage.value = ''

  // 1. 🛡️ 프론트엔드 공백 입력 차단 유효성 검증
  if (!form.username.trim()) {
    errorMessage.value = '아이디를 입력해 주세요.'
    return
  }
  if (!form.password) {
    errorMessage.value = '비밀번호를 입력해 주세요.'
    return
  }

  try {
    // 2. 내부 인증 관문 서버(innerapi)로 실제 입력 데이터 전송
    const response = await $fetch<{ success: boolean }>('/api/outerapi/login', {
      method: 'POST',
      body: {
        username: form.username,
        password: form.password
      }
    })

    // 3. 로그인 최종 성공 시 리다이렉트 동선 가동
    if (response && response.success) {
      // 💡 [빌드 에러 해결] 깨짐의 원인이었던 'as string' 대신 String() 함수로 안전하게 교정했습니다.
      const queryRedirect = route.query.redirect
      const redirectPath = queryRedirect ? String(queryRedirect) : '/'
      
      return navigateTo(decodeURIComponent(redirectPath))
    }
    
  } catch (error: any) {
    // 4. 🚨 서버가 던진 400, 401 보안 에러 메시지를 낚아채서 화면에 동적 실시간 출력
    const errorMsg = error.response?._data?.message || '아이디 또는 비밀번호가 올바르지 않습니다.'
    errorMessage.value = errorMsg
  }
}
</script>