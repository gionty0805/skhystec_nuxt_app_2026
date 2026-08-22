<!-- pages/index.vue -->
<template>
  <div style="max-width: 800px; margin: 50px auto; padding: 20px;">
    <h1>대시보드 (메인 화면)</h1>
    
    <div v-if="data" style="background: #f5f5f5; padding: 20px; margin-top: 20px;">
      <h3>📢 안내 사항</h3>
      <p>{{ data.notice }}</p>
      
      <h3>📊 서비스 현황</h3>
      <ul>
        <li>총 유저 수: {{ data.summary.totalUsers }}명</li>
        <li>활성 프로젝트: {{ data.summary.activeProjects }}개</li>
      </ul>
      <small>데이터 업데이트 기준: {{ data.updatedAt }}</small>
    </div>

    <div v-else-if="error" style="color: red; margin-top: 20px;">
      데이터를 불러오지 못했습니다. 로그인을 먼저 진행해주세요.
      <br><button @click="navigateTo('/login')" style="margin-top:10px;">로그인 페이지로 이동</button>
    </div>
  </div>
</template>

<script setup>
// useFetch를 사용하여 SSR 환경에서 안전하게 내부 백엔드 데이터를 바인딩합니다.
const { data, error } = await useFetch('/api/main/dashboard')
</script>