<!-- pages/login.vue -->
<template>
  <div style="max-width: 400px; margin: 100px auto; padding: 20px; border: 1px solid #ccc;">
    <h2>서비스 로그인</h2>
    <form @submit.prevent="handleLogin">
      <div style="margin-bottom: 10px;">
        <label>아이디: </label>
        <input v-model="form.username" type="text" required style="width: 100%" />
      </div>
      <div style="margin-bottom: 15px;">
        <label>비밀번호: </label>
        <input v-model="form.password" type="password" required style="width: 100%" />
      </div>
      <button type="submit" style="width: 100%; padding: 10px;">로그인</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>
<!-- app/pages/login.vue (스크립트 부분 일부) -->
<script setup>
const form = ref({ username: '', password: '' })
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''
  try {
    // 🟢 외부 중계 API 경로 수정 완료
    await $fetch('/api/outerapi/login', {
      method: 'POST',
      body: form.value
    })
    navigateTo('/')
  } catch (err) {
    errorMessage.value = err.message || '로그인 실패'
  }
}
</script>