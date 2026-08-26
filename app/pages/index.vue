<!-- app/pages/index.vue -->
<template>
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
<script setup>
import { onMounted } from 'vue'

// 🟢 대시보드 페이지 진입 시 전용 디자인 CSS 결합
// 브라우저의 진짜 최상위 <body> 태그에 class="main"을 강제로 꼽아주라고 선언합니다.
useHead({
  bodyAttrs: {
    class: 'main'
  },
  link: [
    { rel: 'stylesheet', type: 'text/css', href: '/css/pages/main.css' }
  ]
})
// 🔥 [차트 작동 핵심 핵심] HTML 레이아웃이 화면에 완전히 부착된 후 퍼블리셔의 차트 함수 작동 지시
// app/pages/index.vue 하단 스크립트 수정
onMounted(() => {
  if (process.client && data.value) {
    setTimeout(() => {
      // 🛡️ [방어막 1] 이미 메인 스크립트 태그가 붙어 있다면 중복 주입을 물리적으로 스킵
      if (document.getElementById('nuxt-main-dashboard-script')) {
        console.log('📊 main.js가 이미 메모리에 로드되어 있어 재선언을 스킵합니다.')
        return
      }

      // 🛡️ [방어막 2] main.js 내부에서 무조건 찾는 핵심 태그(예: 차트1)가 화면에 실제로 존재하는지 최종 검증
      // (만약 퍼블리셔 스크립트가 다른 태그를 기준으로 삼는다면 'chart1' 대신 해당 ID를 넣으세요)
      if (!document.getElementById('chart1')) {
        console.log('⚠️ 대시보드 차트 엘리먼트가 아직 생성되지 않아 스크립트 가동을 보류합니다.')
        return
      }

      // 모든 검증을 통과한 순간에만 안전하게 스크립트 배치
      const script = document.createElement('script')
      script.id = 'nuxt-main-dashboard-script' // 고유 ID 마킹
      script.src = '/js/pages/main.js'
      script.defer = true
      document.head.appendChild(script)
      console.log('📊 대시보드 메인 화면에만 main.js 스크립트를 안전하게 바인딩했습니다.')
    }, 200) // 하이드레이션 완료 타이밍 여유를 위해 지연시간을 200ms로 상향 조정
  }
})

// 내부 API 대시보드 연동 데이터 수집 기동
const { data, error, refresh } = await useFetch('/api/innerapi/dashboard')

// 로그아웃 로직 (보안 세션 파기)
const handleLogout = async () => {
  try {
    await $fetch('/api/innerapi/logout', { method: 'POST' })
    await refresh()
    navigateTo('/login')
  } catch (err) {
    alert('로그아웃 실패: ' + err.message)
  }
}

</script>