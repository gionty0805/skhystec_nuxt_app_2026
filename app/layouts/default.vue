<!-- app/layouts/default.vue -->
<template>
  <div>
    <!-- 🛡️ 글로벌 하이드레이션 방어막 가동 -->
    <ClientOnly>
      <div v-if="data">
        
        <!-- ========================================== -->
        <!-- 🟢 [공통 1] 상단 헤더 영역 고정 -->
        <!-- ========================================== -->
        <header class="header" id="header">
          <div class="header-inner">
            <h1 class="header-logo">
              <!-- 메인 링크 컴포넌트 전환 -->
              <NuxtLink to="/" title="메인으로">
                <img src="/images/common/header-logo.svg" alt="SK hystec" class="header-logo-img" />
              </NuxtLink>
            </h1>

            <nav>
              <ul class="header-nav-list-wrap onWide dis-fx">
                <li class="header-nav-list">
                  <a class="header-nav-list-link" href="#">장비 관리</a>
                  <div class="header-subnav-div-wrap nav-approval">
                    <div class="header-subnav-div-inner">
                      <div class="header-subnav-div">
                        <p class="header-subnav-cat"><span>장비</span></p>
                        <ul class="header-subnav-list-wrap">
                          <!-- 🟢 NuxtLink 표준 컴포넌트로 주소 라우팅 연결 -->
                          <li class="header-subnav-list"><NuxtLink class="header-subnav-link" to="/equipment-inflow">장비 반입</NuxtLink></li>
                          <li class="header-subnav-list"><NuxtLink class="header-subnav-link" to="/equipment-outflow">장비 반출</NuxtLink></li>
                        </ul>
                      </div>
                      <div class="header-subnav-div">
                        <p class="header-subnav-cat"><span>Cable</span></p>
                        <ul class="header-subnav-list-wrap">
                          <li class="header-subnav-list"><NuxtLink class="header-subnav-link" to="/cable">케이블 신청</NuxtLink></li>
                        </ul>
                      </div>
                      <div class="header-subnav-div">
                        <p class="header-subnav-cat"><span>Rack</span></p>
                        <ul class="header-subnav-list-wrap">
                          <!-- 🟢 Rack 독립 페이지 주소 지정 -->
                          <li class="header-subnav-list"><NuxtLink class="header-subnav-link" to="/rack">Rack 관리</NuxtLink></li>
                        </ul>
                      </div>
                      <div class="header-subnav-div">
                        <p class="header-subnav-cat"><span>Portmap</span></p>
                        <ul class="header-subnav-list-wrap">
                          <!-- 🟢 Rack 독립 페이지 주소 지정 -->
                          <li class="header-subnav-list"><NuxtLink class="header-subnav-link" to="/portmap">포트맵 관리</NuxtLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="header-nav-list"><a class="header-nav-list-link" href="#" onclick="popToast('준비 중입니다.')">서비스 관리</a></li>
                <li class="header-nav-list">
                    <a class="header-nav-list-link" href="javascript: popToast('준비 중입니다.');">보안 관리</a>

                    <div class="header-subnav-div-wrap nav-approval">
                        <div class="header-subnav-div-inner">
                            <div class="header-subnav-div">
                                <p class="header-subnav-cat"><span>보안 Portal</span></p>
                                <ul class="header-subnav-list-wrap">
                                    <li class="header-subnav-list">
                                        <a class="header-subnav-link" href="javascript: popToast('준비 중입니다.');">정적분석</a>
                                    </li>
                                    <li class="header-subnav-list">
                                        <a class="header-subnav-link" href="javascript: popToast('준비 중입니다.');">개인정보 관리 현황</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
              </ul>
            </nav>

            <!-- layouts/default.vue 템플릿 구역 중 header-left-wrap 부분 -->
            <div class="header-left-wrap">
              <ul class="header-left-list-wrap onW dis-fx">
                
                <!-- 💡 [동적 연동] 로그인 상태(ADMIN/USER)에 따라 태그 색상, 권한명, 사번 ID가 자동 표기됩니다. -->
                <li class="header-left-list">
                  <div class="detail" v-if="data && data.isLoggedIn">
                    <span :class="['tag', data.userRole === 'ADMIN' ? 'bg-orange' : 'bg-blue']">
                      {{ data.userRole === 'ADMIN' ? '관리자' : '일반사용자' }}
                    </span>
                    <!-- 세션에 담긴 유저 식별자(사번) 동적 출력 -->
                    {{ data.userId || '사원' }}
                  </div>
                  <div class="detail" v-else>
                    <span class="tag bg-gray">Guest</span> 미인증 사용자
                  </div>
                </li>
                
                <li class="header-left-list">
                  <!-- 기존 퍼블리셔의 제이쿼리 팝업 트리거 유지 -->
                  <button type="button" id="btnLogout" onclick="popOpen('#logout-pop', '#btnLogout')">로그아웃</button>
                </li>
              </ul>
              
              <button type="button" class="sitemap-btn" id="sitemap-btn" title="사이트맵 열기" onclick="hambergerfunc(this)">
                <span class="sitemap-btn-bar line-1"></span>
                <span class="sitemap-btn-bar line-2"></span>
                <span class="sitemap-btn-bar line-3"></span>
              </button>
            </div>
          </div>

          <!-- 로그아웃 모달 -->
          <div class="pop" id="logout-pop">
            <button type="button" class="pop-dim" onclick="popClose('#logout-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
              <div class="pop-tit-wrap">
                <button type="button" class="pop-tit-btn-cls" onclick="popClose('#logout-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                <h2 class="pop-tit">로그아웃</h2>
              </div>
              <div class="pop-con">
                <p class="large">접속중인 기기에서 로그아웃 하시겠습니까?</p>
                <div class="btn-wrap mt-15">
                  <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#logout-pop')">취소</button>
                  <button type="button" class="btn-done w-6 mb-0" id="logoutBtn" @click="handleLogout">확인</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- ========================================== -->
        <!-- 🟢 [공통 2] 사이트맵 메뉴 레이어 고정 -->
        <!-- ========================================== -->
        <div class="sitemap" id="sitemap">
          <nav class="sitemap-inner">
            <ul class="sitemap-list-wrap">
              <li class="sitemap-list">
                <h2 class="sitemap-tit onWide">장비 관리</h2>
                <div class="sitemap-div">
                  <p class="sitemap-sub-cat"><span>장비</span></p>
                  <ul class="sitemap-sub-list-wrap">
                    <li class="sitemap-sub-list"><NuxtLink class="sitemap-sub-link" to="/equipment-inflow">장비 반입</NuxtLink></li>
                    <li class="sitemap-sub-list ml-mid-1"><NuxtLink class="sitemap-sub-link" to="/equipment-outflow">장비 반출</NuxtLink></li>
                  </ul>
                  <p class="sitemap-sub-cat"><span>Cable</span></p>
                  <ul class="sitemap-sub-list-wrap">
                    <!-- 🟢 모바일 사이트맵 닫기 흐름 연동을 위해 수동 내장 함수 매핑 -->
                    <li class="sitemap-sub-list"><NuxtLink class="sitemap-sub-link" to="/cable" onclick="popClose('#sitemap')">케이블 신청</NuxtLink></li>
                  </ul>
                  <p class="sitemap-sub-cat"><span>Rack</span></p>
                  <ul class="sitemap-sub-list-wrap">
                    <!-- 🟢 모바일 사이트맵 닫기 흐름 연동을 위해 수동 내장 함수 매핑 -->
                    <li class="sitemap-sub-list"><NuxtLink class="sitemap-sub-link" to="/rack" onclick="popClose('#sitemap')">Rack 관리</NuxtLink></li>
                  </ul>
                  <p class="sitemap-sub-cat"><span>Portmap</span></p>
                  <ul class="sitemap-sub-list-wrap">
                    <!-- 🟢 모바일 사이트맵 닫기 흐름 연동을 위해 수동 내장 함수 매핑 -->
                    <li class="sitemap-sub-list"><NuxtLink class="sitemap-sub-link" to="/portmap" onclick="popClose('#sitemap')">포트맵 관리</NuxtLink></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div class="accessibility"><button type="button" onclick="hambergerfunc()">사이트맵 닫기</button></div>
        </div>

        <!-- ========================================== -->
        <!-- 🔥 [핵심 스티커] 각 서브 페이지의 본문이 여기에 자동으로 합류합니다. -->
        <!-- ========================================== -->
        <slot />

        <!-- ========================================== -->
        <!-- 🟢 [공통 3] 하단 푸터 영역 고정 -->
        <!-- ========================================== -->
        <footer class="footer">
          <div class="footer-inner">
            <div class="w-sm-100">
              <h6 class="footer-logo"><NuxtLink to="/" class="footer-logo-link"><img src="/images/common/footer-logo.svg" alt="SK hynix" class="footer-logo-img" /></NuxtLink></h6>
              <p class="footer-copy">Copyright 2026 SK hystec inc. All rights reserved.</p>
            </div>
            <ul class="footer-list-wrap w-sm-100">
              <li class="footer-list"><p>에스케이하이스텍주식회사</p></li>
              <li class="footer-list"><a href="#" class="td-ul">개인정보 처리방침</a></li>
            </ul>
          </div>
        </footer>

      </div>

        <!-- 글로벌 비인증 가드막 일괄 적용 -->
        <div v-else-if="error" style="color: #e74c3c; margin: 100px auto; max-width: 400px; text-align: center; padding: 40px; border: 1px dashed #e74c3c; border-radius: 6px;">
        <p style="font-size: 16px; font-weight: bold;">인증 세션이 없거나 로그인이 필요합니다.</p>
        <button @click="navigateTo('/login')" style="margin-top: 15px; padding: 10px 20px; background: #34495e; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">로그인 페이지로 이동</button>
        </div>
    </ClientOnly>
  </div>
</template>
<!-- layouts/default.vue 스크립트 구역 -->
<script setup lang="ts">
import { useFetch, useRequestHeaders, navigateTo } from '#app'

// 1. 공통 데이터 감시 및 권한 정보 집약 (체크 세션 API와 연동)
const { data, refresh } = await useFetch('/api/innerapi/check-session', {
  headers: useRequestHeaders(['cookie']) // SSR 대응용 쿠키 헤더 전달
})

// 2. 로그아웃 비즈니스 로직 (보안 세션 파기 - innerapi 경로로 정정 완료)
const handleLogout = async () => {
  try {
    // 💡 내부 인증 관문 서버의 로그아웃 로직 가동 (httpOnly 쿠키 파쇄)
    await $fetch('/api/outerapi/logout', { method: 'POST' })
    
    // 기존 퍼블리셔의 제이쿼리 팝업 닫기 함수 안전 호출
    if (typeof window !== 'undefined' && (window as any).popClose) { 
      (window as any).popClose('#logout-pop') 
    }
    
    await refresh()
    
    // 페이지를 새로고침하며 깨끗한 게스트 상태로 로그인창 퇴출
    window.location.href = '/login'
  } catch (err: any) { 
    alert('로그아웃 실패: ' + err.message) 
  }
}

// 징검다리 전역 함수 개설 (HTML 내부 onclick에서 Vue 함수를 호출할 수 있게 바인딩)
if (process.client) {
  (window as any).executeRealLogout = handleLogout
}
</script>