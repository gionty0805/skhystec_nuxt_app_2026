<!-- app/pages/index.vue -->
<template>
<!-- 권한 없음 팝업 -->
<div
  v-if="showUnauthorizedPopup"
  class="auth-popup-overlay"
>
  <div class="auth-popup">
    <h2 class="auth-popup-title">
      접근 권한 없음
    </h2>

    <p class="auth-popup-message">
      해당 메뉴에 접근할 권한이 없습니다.
    </p>

    <div class="auth-popup-btn-wrap">
      <button
        type="button"
        class="btn-confirm"
        @click="showUnauthorizedPopup = false"
      >
        확인
      </button>
    </div>
  </div>
</div>
  <NuxtLayout>
    <div class="content-wrap">
        <section class="content main-top">
            <h3 class="content-tit">Overview</h3>
            <p class="content-txt">
                SKHDC 관리 시스템의 최근 한 달간 처리 현황을 확인할 수 있습니다. <br />
                장비 반입·반출, 케이블 신청 현황을 한눈에 살펴보세요.
            </p>
            <p class="content-txt fs-14 color-gray-6">2026-07-04 ~ 2026-08-04</p>
        </section>
        <section class="content bg-semilightgray">
            <div class="main-box-wrap">
                <div class="main-box">
                    <div class="dis-fx jc-sb">
                        <div class="mr-1">
                            <h5 class="main-box-tit">장비 반입</h5>
                            <p class="main-box-txt">반입 요청 및 처리 현황을 확인합니다.</p>
                        </div>
                        <a href="./equipment-inflow.html" class="main-box-btn" title="장비 반입 목록">
                            <span class="el-hid">장비 반입 목록</span>
                        </a>
                    </div>
                    <div class="main-chart-wrap">
                        <div class="main-chart-inner">
                            <div class="main-chart" id="chart1"></div>
                        </div>
                    </div>
                </div>
                <div class="main-box">
                    <div class="dis-fx jc-sb">
                        <div class="mr-1">
                            <h5 class="main-box-tit">장비 반출</h5>
                            <p class="main-box-txt">반출 요청 및 처리 현황을 확인합니다.</p>
                        </div>
                        <a href="./equipment-outflow.html" class="main-box-btn" title="장비 반출 목록">
                            <span class="el-hid">장비 반출 목록</span>
                        </a>
                    </div>
                    <div class="main-chart-wrap">
                        <div class="main-chart-inner">
                            <div class="main-chart" id="chart2"></div>
                        </div>
                    </div>
                </div>
                <div class="main-box">
                    <div class="dis-fx jc-sb">
                        <div class="mr-1">
                            <h5 class="main-box-tit">케이블 신청</h5>
                            <p class="main-box-txt">케이블 신청과 진행 상태를 확인합니다.</p>
                        </div>
                        <a href="./cable.html" class="main-box-btn" title="케이블 신청 목록">
                            <span class="el-hid">케이블 신청 목록</span>
                        </a>
                    </div>
                    <div class="main-chart-wrap">
                        <div class="main-chart-inner">
                            <div class="main-chart" id="chart3"></div>
                        </div>
                    </div>
                </div>
                <div class="main-box rack">
                    <h5 class="main-box-tit">Rack 관리</h5>
                    <p class="main-box-txt">점검이 필요한 장비를 확인합니다.</p>
                    <div class="main-list-wrap">
                        <!-- // 장비 상태에 이상이 없는 경우 -->
                        <!--
                        <div class="main-list null">
                            <p class="w-100 ta-center">현재 이상이 감지된 장비가 없습니다.</p>
                        </div>
                        -->

                        <!-- // 장비 상태에 이상이 있는 경우 -->
                        <button type="button" class="main-list" id="btn-detail-1" onclick="popOpen('#detail-pop', '#btn-detail-1')">
                            <div class="dis-fx jc-sb mb-05 fw-600">
                                <p class="fs-1125">
                                    <span class="dis-ib">SKHDC2</span> -
                                    <span class="dis-ib">Gf04</span>
                                </p>
                                <div class="dis-fx flex-shrink ml-1">
                                    <p class="ws-nw color-point">상태 이상</p>
                                    <span class="main-list-dot"></span>
                                </div>
                            </div>

                            <p class="mt-0125 pl-4 fs-14 ti--4 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-point">탑재 위치</strong> 36</p>
                            <p class="mt-0125 pl-4 fs-14 ti--4 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-gray-7">장비 종류</strong> 네트워크</p>
                            <p class="mt-0125 pl-425 fs-14 ti--425 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-gray-7">모델 · S/N</strong> MPX8905 · 6KZS1DD52Z</p>
                            <p class="mt-0125 pl-2 fs-14 ti--2 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-gray-7">용도</strong> ServerFarm_L2_SW_007004_P55</p>
                        </button>
                        <button type="button" class="main-list" id="btn-detail-1" onclick="popOpen('#detail-pop', '#btn-detail-1')">
                            <div class="dis-fx jc-sb mb-05 fw-600">
                                <p class="fs-1125">
                                    <span class="dis-ib">통신실</span> -
                                    <span class="dis-ib">Fe02</span>
                                </p>
                                <div class="dis-fx flex-shrink ml-1">
                                    <p class="ws-nw color-point">상태 이상</p>
                                    <span class="main-list-dot"></span>
                                </div>
                            </div>

                            <p class="mt-0125 pl-4 fs-14 ti--4 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-point">탑재 위치</strong> 36</p>
                            <p class="mt-0125 pl-4 fs-14 ti--4 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-gray-7">장비 종류</strong> 네트워크</p>
                            <p class="mt-0125 pl-425 fs-14 ti--425 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-gray-7">모델 · S/N</strong> MPX8905 · 6KZS1DD52Z</p>
                            <p class="mt-0125 pl-2 fs-14 ti--2 wb-ba color-gray-6"><strong class="mr-025 fw-600 ls-05 color-gray-7">용도</strong> ServerFarm_L2_SW_007004_P55</p>
                        </button>

                        <!-- // 기본 링크 -->
                        <p class="ta-center"><a href="./rack.html" class="dis-ib link-arrow">Rack·장비 확인하러 가기</a></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <button type="button" class="btn-top" id="btn-top" onclick="moveTop()"><span class="el-hid">스크롤 위로 이동</span></button>

    <!-- e: 장비 상세 정보 -->
    <div class="pop large" id="detail-pop">
        <button type="button" class="pop-dim" onclick="popClose('#detail-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
        <div class="pop-inner w-max-840">
            <div class="pop-tit-wrap">
                <button type="button" class="pop-tit-btn-cls" onclick="popClose('#detail-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                <h2 class="pop-tit">장비 상세 정보</h2>
            </div>
            <div class="pop-con">
                <h3 class="mb-05 fs-125 fs-sm-1125">장비 탑재 정보</h3>
                <div class="table-wrap mt-075">
                    <table class="table mobile">
                        <caption>
                            '장비 기본 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                        </caption>
                        <colgroup>
                            <col width="16%" />
                            <col width="34%" />
                            <col width="16%" />
                            <col width="34%" />
                        </colgroup>
                        <thead class="el-hid">
                            <tr>
                                <th>구분</th>
                                <th>내용</th>
                                <th>구분</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bd-top">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Rack No. </strong>
                                </td>
                                <td>Gf04</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">장비 크기</strong>
                                </td>
                                <td>1</td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">탑재 타입</strong>
                                </td>
                                <td>일반</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">탑재 위치</strong>
                                </td>
                                <td>24</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-guideline-con-hr onM"></div>
                <div class="onW mt-2"></div>

                <h3 class="mb-05 fs-125 fs-sm-1125">장비 정보</h3>
                <div class="table-wrap mt-075">
                    <table class="table mobile">
                        <caption>
                            '장비 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                        </caption>
                        <colgroup class="onW dis-tcg">
                            <col width="16%" />
                            <col width="34%" />
                            <col width="16%" />
                            <col width="34%" />
                        </colgroup>
                        <thead class="el-hid">
                            <tr>
                                <th>구분</th>
                                <th>내용</th>
                                <th>구분</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bd-top">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">장비 종류</strong>
                                </td>
                                <td>시스템</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">지역</strong>
                                </td>
                                <td>이천</td>
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">데이터 센터</strong>
                                </td>
                                <td>SKHDC2</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">분전반</strong>
                                </td>
                                <td>P-B2-602/Pu-6F-6A #32</td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Vendor</strong>
                                </td>
                                <td>DellEMC</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Type</strong>
                                </td>
                                <td>Server</td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">용도</strong>
                                </td>
                                <td>ITSM 및 형상관리</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Model</strong>
                                </td>
                                <td>PE_R450</td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Hostname</strong>
                                </td>
                                <td></td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">CPU</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Memory</strong>
                                </td>
                                <td></td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">OS</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">운영자</strong>
                                </td>
                                <td>홍길동</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">서버 관리자</strong>
                                </td>
                                <td>홍길동</td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">비고</strong>
                                </td>
                                <td colspan="3"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-guideline-con-hr onM"></div>
                <div class="onW mt-2"></div>

                <h3 class="mb-05 fs-125 fs-sm-1125">장비 관리 정보</h3>
                <div class="table-wrap mt-075">
                    <table class="table mobile">
                        <caption>
                            '장비 관리 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                        </caption>
                        <colgroup class="onW dis-tcg">
                            <col width="18%" />
                            <col width="32%" />
                            <col width="18%" />
                            <col width="32%" />
                        </colgroup>
                        <thead class="el-hid">
                            <tr>
                                <th>구분</th>
                                <th>내용</th>
                                <th>구분</th>
                                <th>내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bd-top">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">ERP 번호</strong>
                                </td>
                                <td></td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Hydesk 번호</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">설치일</strong>
                                </td>
                                <td></td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">RFID Code</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">자산 관리자</strong>
                                </td>
                                <td>김자산</td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">S/N</strong>
                                </td>
                                <td>9LKJFR3</td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">취득일자</strong>
                                </td>
                                <td></td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">감가상각연한</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Description</strong>
                                </td>
                                <td colspan="3"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="content-guideline-con-hr onM"></div>
                <div class="onW mt-2"></div>

                <p class="w-100 ta-center">정보 수정이 필요한 경우 <a target="_blank" href="./rack.html" class="dis-ib link-outlink" title="새창열림">Rack 관리 페이지</a> 에서 변경하실 수 있습니다.</p>

                <div class="btn-wrap mt-2 mt-sm-15">
                    <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#detail-pop')">닫기</button>
                </div>
            </div>
        </div>
    </div>
    <!-- e: 장비 상세 정보 -->
  </NuxtLayout>
</template>
<!-- app/pages/index.vue 스크립트 구역 -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute, useRouter, navigateTo, useFetch, useHead } from '#app'
const route = useRoute()
const router = useRouter()

const showUnauthorizedPopup = ref(false)
// 1. 🟢 대시보드 페이지 진입 시 전용 디자인 CSS 및 바디 클래스 결합
useHead({
  bodyAttrs: {
    class: 'main'
  },
  link: [
    { rel: 'stylesheet', type: 'text/css', href: '/css/pages/main.css' }
  ]
})

// 2. 내부 API 대시보드 연동 데이터 수집 기동
const { data } = await useFetch('/api/innerapi/dashboard')

let chartObserver: MutationObserver | null = null

// 📊 외부 main.js 코드를 텍스트로 낚아채서 격리된 방에서 가동시키는 마스터 함수
const forceRenderCharts = async () => {
  if (!process.client) return

  // 1) 실제 본문에 차트 그릇(#chart1)이 최종 안착했는지 레이아웃 검증
  const chartTarget = document.getElementById('chart1')
  if (!chartTarget) return

  // 차트 그릇이 레이아웃 크기(Width/Height)를 완벽히 확보했는지 검사
  if (chartTarget.offsetWidth === 0 || chartTarget.offsetHeight === 0) return

  try {
    // 💡 [핵심 해결책] <script> 태그를 박는 대신, main.js 소스코드를 텍스트 스트링으로 직접 읽어옵니다.
    // 캐시 방지를 위해 랜덤 타임스탬프 쿼리를 뒤에 붙여 매번 새로운 코드로 인식시킵니다.
    const response = await fetch(`/js/pages/main.js?t=${Date.now()}`)
    const rawJsCode = await response.text()

    if (!rawJsCode) return

    // 💡 [클라이막스] 읽어온 소스코드를 독립된 익명 블록(Scoped Block) 텍스트로 가공합니다.
    // 이렇게 하면 'chartColor' 변수가 최상위 전역이 아닌, 이 실행 순간의 독립된 방 안에 갇히게 됩니다.
    const scopedJsCode = `
      (function() {
        try {
          ${rawJsCode}
        } catch(e) {
          console.error("차트 실행 중 내부 오류:", e);
        }
      })();
    `

    // 브라우저 동적 컴파일러(Function 구문)를 이용해 격리된 공간에서 차트 로직 점화!
    // ❌ 이제 전역 메모리에 'chartColor'가 등록되지 않으므로 중복 선언 에러가 100% 영구 박멸됩니다.
    const executeCharts = new Function(scopedJsCode)
    executeCharts()
    
    console.log('🎯 [PERFECT SUCCESS] 외부 main.js 소스코드를 가상 스코프에 격리 주입하여 중복 에러를 완전 박멸했습니다.')

  } catch (error) {
    console.error('❌ 차트 스크립트 로드 실패:', error)
  }
}

// 👁️ 타이밍 엇박자를 방지하는 정밀 감시 리스너
const startChartObservation = () => {
  if (!process.client) return
  if (chartObserver) chartObserver.disconnect()

  if (document.getElementById('chart1')) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { forceRenderCharts() })
    })
    return
  }

  chartObserver = new MutationObserver(() => {
    if (document.getElementById('chart1')) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          forceRenderCharts()
          if (chartObserver) chartObserver.disconnect() // 가동 성공 시 카메라 해제
        })
      })
    }
  })

  chartObserver.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// 🎯 API 데이터 수집 완료 감지 시 발동
watch(data, (newData) => {
  if (newData) {
    nextTick(() => {
      startChartObservation()
    })
  }
}, { immediate: true })

onMounted(() => {
  // 기존 차트 렌더링
  if (data.value) {
    startChartObservation()
  }

  // 권한 없는 메뉴 접근 시 팝업 표시
  if (route.query.error === 'unauthorized') {
    showUnauthorizedPopup.value = true

    // URL의 ?error=unauthorized 제거
    router.replace({
      path: '/',
      query: {}
    })
  }
})

onUnmounted(() => {
  if (chartObserver) {
    chartObserver.disconnect()
    chartObserver = null
  }
})

// 로그아웃 로직
const handleLogout = async () => {
  try {
    await $fetch('/api/innerapi/logout', { method: 'POST' })
    navigateTo('/login')
  } catch (err: any) {
    alert('로그아웃 실패: ' + err.message)
  }
}
</script>
<style scoped>
.auth-popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);
}

.auth-popup {
  width: calc(100% - 40px);
  max-width: 420px;

  padding: 32px 28px;

  background: #fff;
  border-radius: 12px;

  text-align: center;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.auth-popup-title {
  margin: 0 0 12px;

  font-size: 20px;
  font-weight: 700;
}

.auth-popup-message {
  margin: 0 0 24px;

  font-size: 15px;
  color: #666;
}

.auth-popup-btn-wrap {
  display: flex;
  justify-content: center;
}

.btn-confirm {
  min-width: 100px;

  padding: 10px 24px;

  border: 0;
  border-radius: 6px;

  cursor: pointer;
  font-weight: 600;
}
</style>