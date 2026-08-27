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

            <div class="header-left-wrap">
              <ul class="header-left-list-wrap onW dis-fx">
                <li class="header-left-list"><div class="detail"><span class="tag bg-orange">관리자</span> 홍길동 TL</div></li>
                <li class="header-left-list"><button type="button" id="btnLogout" onclick="popOpen('#logout-pop', '#btnLogout')">로그아웃</button></li>
              </ul>
              <button type="button" class="sitemap-btn" id="sitemap-btn" title="사이트맵 열기" onclick="hambergerfunc(this)">
                <span class="sitemap-btn-bar line-1"></span><span class="sitemap-btn-bar line-2"></span><span class="sitemap-btn-bar line-3"></span>
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

<script setup>
// 공통 데이터 감시 및 로그아웃 엔진 집약
const { data, error, refresh } = await useFetch('/api/innerapi/dashboard')

const handleLogout = async () => {
  try {
    await $fetch('/api/outerapi/logout', { method: 'POST' })
    if (typeof window !== 'undefined' && window.popClose) { window.popClose('#logout-pop') }
    await refresh()
    navigateTo('/login')
  } catch (err) { alert('로그아웃 실패: ' + err.message) }
}
</script>