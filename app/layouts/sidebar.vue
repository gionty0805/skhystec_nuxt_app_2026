<!-- app/layouts/sidebar.vue -->
<template>
  <NuxtLayout name="default">
    
    <!-- 🟢 [해결 핵심]: content-wrap 상자에 Flex 정렬 및 화면을 가득 채우는 강제 속성을 보강합니다 -->
    <div class="content-wrap" style="display: flex !important; flex: 1 !important; width: 100% !important; min-height: calc(100vh - 4em) !important; align-items: stretch !important;">
      
      <!-- s: sidebar (기존 마크업 원본 동일) -->
      <aside class="sidebar">
        <div class="sidebar-inner">
          <h5 class="sidebar-tit"><span>장비 관리</span></h5>
          <p class="sidebar-cat"><span>장비</span></p>
          <ul class="sidebar-list-wrap">
            <li class="sidebar-list"><NuxtLink class="sidebar-link" to="/equipment-inflow" active-class="active">장비 반입</NuxtLink></li>
            <li class="sidebar-list"><NuxtLink class="sidebar-link" to="/equipment-outflow" active-class="active">장비 반출</NuxtLink></li>
          </ul>
          <p class="sidebar-cat"><span>Cable</span></p>
          <ul class="sidebar-list-wrap">
            <li class="sidebar-list"><NuxtLink class="sidebar-link" to="/cable" active-class="active">케이블 신청</NuxtLink></li>
          </ul>
          <p class="sidebar-cat"><span>Rack</span></p>
          <ul class="sidebar-list-wrap">
            <li class="sidebar-list"><NuxtLink class="sidebar-link" to="/rack" active-class="active">Rack 관리</NuxtLink></li>
          </ul>
          <p class="sidebar-cat"><span>Portmap</span></p>
          <ul class="sidebar-list-wrap">
            <li class="sidebar-list"><NuxtLink class="sidebar-link" to="/portmap" active-class="active">포트맵 관리</NuxtLink></li>
          </ul>
        </div>
        <button type="button" class="sidebar-btn" onclick="sidebarToggle()" style="margin-bottom: 102px">CLOSE</button>
      </aside>
      <!-- e: sidebar -->

      <!-- s: 본문 알맹이 도킹 공간 -->
      <slot />

    </div>
  </NuxtLayout>
</template>