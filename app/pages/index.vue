<!-- app/pages/index.vue -->
<template>
  <div style="max-width: 800px; margin: 50px auto; padding: 20px; font-family: sans-serif;">
    <!-- 🟢 상단 헤더 영역 및 로그아웃 버튼 추가 -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #eee; padding-bottom: 10px;">
      <h1>대시보드 (메인 화면)</h1>
      <button v-if="data" @click="handleLogout" style="padding: 8px 16px; background: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
        로그아웃
      </button>
    </div>
    
    <div v-if="data" style="background: #f5f5f5; padding: 20px; margin-top: 20px; border-radius: 6px;">
      <h3>📢 안내 사항</h3>
      <p>{{ data.notice }}</p>
      
      <h3>📊 서비스 현황</h3>
      <ul>
        <li>총 유저 수: {{ data.summary.totalUsers }}명</li>
        <li>활성 프로젝트: {{ data.summary.activeProjects }}개</li>
      </ul>
      <small style="color: #666;">데이터 업데이트 기준: {{ data.updatedAt }}</small>
    </div>

    <!-- 로그인이 풀렸거나 세션이 없을 때 분기 처리 -->
    <div v-else-if="error" style="color: #e74c3c; margin-top: 20px; text-align: center; padding: 40px; border: 1px dashed #e74c3c; border-radius: 6px;">
      <p style="font-size: 16px; font-weight: bold;">세션이 만료되었거나 인증되지 않은 사용자입니다.</p>
      <button @click="navigateTo('/login')" style="margin-top: 15px; padding: 10px 20px; background: #34495e; color: white; border: none; border-radius: 4px; cursor: pointer;">
        로그인 페이지로 이동
      </button>
    </div>
  </div>
</template>

<script setup>
// useFetch를 사용해 내부 백엔드 대시보드 데이터를 조회합니다.
const { data, error, refresh } = await useFetch('/api/innerapi/dashboard')

// 로그아웃 비즈니스 로직
const handleLogout = async () => {
  if (!confirm('로그아웃 하시겠습니까?')) return

  try {
    // 1. 내부 백엔드 로그아웃 API 호출 (쿠키 파기)
    await $fetch('/api/innerapi/logout', {
      method: 'POST'
    })
    
    // 2. 대시보드 데이터 상태를 새로고침하여 화면을 로그인 유도 상태(v-else-if)로 즉시 전환
    await refresh()
    
    // 3. 로그인 페이지로 안전하게 팅겨내기
    navigateTo('/login')
  } catch (err) {
    alert('로그아웃 중 오류가 발생했습니다: ' + (err.message || 'unknown'))
  }
}
</script>