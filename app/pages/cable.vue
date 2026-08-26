<template>
    <!-- 🟢 레이아웃 시스템을 호출하여 자동으로 공통 헤더/푸터/세션감시망을 상속받습니다. -->
    <NuxtLayout name="sidebar">
      <section class="content">
                <div class="content-top">
                    <h3 class="content-tit">케이블 신청</h3>
                    <div class="content-search-wrap">
                        <ul class="content-search-list-wrap">
                            <li class="content-search-list">
                                <label class="content-search-tit" for="searchStatus">진행 현황</label>
                                <div class="content-search-con">
                                    <span class="input-wrap select">
                                        <select name="status" class="input" id="searchStatus">
                                            <option value="">전체</option>
                                            <option value="">요청</option>
                                            <option value="">완료</option>
                                            <option value="">취소</option>
                                        </select>
                                    </span>
                                </div>
                            </li>
                            <li class="content-search-list dis-sm-bl w-sm-100 mr-sm-0">
                                <label class="content-search-tit mt-sm-0" for="day-s">완료 요청일</label>
                                <div class="content-search-con mt-sm-025 fs-sm-09375">
                                    <span class="input-wrap date">
                                        <input type="text" name="requestDate" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="day-s" />
                                    </span>
                                    <span class="period">~</span>
                                    <span class="input-wrap date">
                                        <input type="text" name="requestDate" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="day-e" />
                                    </span>
                                </div>
                            </li>
                            <li class="content-search-list">
                                <label class="content-search-tit" for="searchRequesterName">요청자</label>
                                <div class="content-search-con">
                                    <input type="text" name="requesterName" class="input w-max-10" id="searchRequesterName" placeholder="이름 입력" />
                                </div>
                            </li>
                            <li class="content-search-list">
                                <label class="content-search-tit" for="searchAdminName">처리자</label>
                                <div class="content-search-con">
                                    <input type="text" name="adminName" class="input w-max-10" id="searchAdminName" placeholder="이름 입력" />
                                </div>
                            </li>
                        </ul>
                        <button type="button" class="btn-search">조회</button>
                    </div>
                </div>

                <div class="table-top">
                    <p class="table-top-total">총 <span class="color-point">1,234</span>건</p>

                    <div class="table-top-btn mb--02">
                        <button type="button" class="btn-done fs-14" onclick="popOpen('#register-pop')"><span>케이블 신청</span></button>
                    </div>
                </div>

                <div class="table-wrap">
                    <table class="table fs-14 ta-center">
                        <caption>
                            표 제목: 케이블 신청 / 구성: 요청ID, 진행 현황, 완료 요청일, 요청자, 서비스 명, 서버 Rack No., 네트워크 Rack No., 네트워크 장비, 포트, 처리자
                        </caption>
                        <thead>
                            <tr>
                                <th>요청ID</th>
                                <th>진행 현황</th>
                                <th>완료 요청일</th>
                                <th>요청자</th>
                                <th>서비스 명</th>
                                <th>서버 Rack No.</th>
                                <th class="bd-left-point bg-lightorange"><span class="color-point-semilight">↔</span></th>
                                <th class="bd-left-point">네트워크 Rack No.</th>
                                <th>네트워크 장비</th>
                                <th>포트</th>
                                <th>처리자</th>
                            </tr>
                        </thead>
                        <tbody class="btn">
                            <!-- 데이터가 없는 경우 -->
                            <!-- <tr>
                                <td colspan="11" class="null-large">등록된 케이블 신청 정보가 없습니다.</td>
                            </tr> -->

                            <!-- 케이블 신청 목록 -->
                            <tr tabindex="0" id="data-261236" onclick="popOpen('#detail-pop', '#data-261236')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-261236');">
                                <td>261236</td>

                                <!-- // 진행 현황 -->
                                <td class="bg-lightblue">요청</td>
                                <!-- <td class="bg-lightgreen">완료</td> -->
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="요청상태/사용자">요청상태/사용자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong></strong></td>
                                <td class="long"></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr tabindex="0" id="data-261235" onclick="popOpen('#detail-manager-pop', '#data-261235')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-261235');">
                                <td>261235</td>

                                <!-- // 진행 현황 -->
                                <td class="bg-lightblue">요청</td>
                                <!-- <td class="bg-lightgreen">완료</td> -->
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="요청상태/관리자">요청상태/관리자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong></strong></td>
                                <td class="long"></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr tabindex="0" id="data-261234" onclick="popOpen('#done-pop', '#data-261234')" onkeypress="if (window.event.keyCode == 13) popOpen('#done-pop', '#data-261234');">
                                <td>261234</td>

                                <!-- // 진행 현황 -->
                                <!-- <td class="bg-lightblue">요청</td> -->
                                <td class="bg-lightgreen">완료</td>
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="완료상태/사용자">완료상태/사용자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong>Gf07</strong></td>
                                <td class="long" title="ServerFarm_L2_SW#1">ServerFarm_L2_SW#1</td>
                                <td><strong>15</strong></td>
                                <td>오*진</td>
                            </tr>
                            <tr tabindex="0" id="data-261233" onclick="popOpen('#done-manager-pop', '#data-261233')" onkeypress="if (window.event.keyCode == 13) popOpen('#done-manager-pop', '#data-261233');">
                                <td>261233</td>

                                <!-- // 진행 현황 -->
                                <!-- <td class="bg-lightblue">요청</td> -->
                                <td class="bg-lightgreen">완료</td>
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="완료상태/관리자">완료상태/관리자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong>Gf07</strong></td>
                                <td class="long" title="ServerFarm_L2_SW#1">ServerFarm_L2_SW#1</td>
                                <td><strong>15</strong></td>
                                <td>오*진</td>
                            </tr>
                            <tr tabindex="0" id="data-261232" onclick="popOpen('#canceled-pop', '#data-261232')" onkeypress="if (window.event.keyCode == 13) popOpen('#canceled-pop', '#data-261232');">
                                <td>261232</td>

                                <!-- // 진행 현황 -->
                                <!-- <td class="bg-lightblue">요청</td> -->
                                <!-- <td class="bg-lightgreen">완료</td> -->
                                <td class="bg-lightgray">취소</td>

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="취소상태">취소상태</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong></strong></td>
                                <td class="long"></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr tabindex="0" id="data-261231" onclick="popOpen('#detail-pop', '#data-261231')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-261231');">
                                <td>261231</td>

                                <!-- // 진행 현황 -->
                                <td class="bg-lightblue">요청</td>
                                <!-- <td class="bg-lightgreen">완료</td> -->
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="요청상태/사용자">요청상태/사용자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong></strong></td>
                                <td class="long"></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr tabindex="0" id="data-261230" onclick="popOpen('#detail-manager-pop', '#data-261230')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-261230');">
                                <td>261230</td>

                                <!-- // 진행 현황 -->
                                <td class="bg-lightblue">요청</td>
                                <!-- <td class="bg-lightgreen">완료</td> -->
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="요청상태/관리자">요청상태/관리자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong></strong></td>
                                <td class="long"></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr tabindex="0" id="data-261229" onclick="popOpen('#done-pop', '#data-261229')" onkeypress="if (window.event.keyCode == 13) popOpen('#done-pop', '#data-261229');">
                                <td>261229</td>

                                <!-- // 진행 현황 -->
                                <!-- <td class="bg-lightblue">요청</td> -->
                                <td class="bg-lightgreen">완료</td>
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="완료상태/사용자">완료상태/사용자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong>Gf07</strong></td>
                                <td class="long" title="ServerFarm_L2_SW#1">ServerFarm_L2_SW#1</td>
                                <td><strong>15</strong></td>
                                <td>오*진</td>
                            </tr>
                            <tr tabindex="0" id="data-261228" onclick="popOpen('#done-manager-pop', '#data-261228')" onkeypress="if (window.event.keyCode == 13) popOpen('#done-manager-pop', '#data-261228');">
                                <td>261228</td>

                                <!-- // 진행 현황 -->
                                <!-- <td class="bg-lightblue">요청</td> -->
                                <td class="bg-lightgreen">완료</td>
                                <!-- <td class="bg-lightgray">취소</td> -->

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="완료상태/관리자">완료상태/관리자</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong>Gf07</strong></td>
                                <td class="long" title="ServerFarm_L2_SW#1">ServerFarm_L2_SW#1</td>
                                <td><strong>15</strong></td>
                                <td>오*진</td>
                            </tr>
                            <tr tabindex="0" id="data-261227" onclick="popOpen('#canceled-pop', '#data-261227')" onkeypress="if (window.event.keyCode == 13) popOpen('#canceled-pop', '#data-261227');">
                                <td>261227</td>

                                <!-- // 진행 현황 -->
                                <!-- <td class="bg-lightblue">요청</td> -->
                                <!-- <td class="bg-lightgreen">완료</td> -->
                                <td class="bg-lightgray">취소</td>

                                <td>2026-01-29</td>
                                <td>홍*동</td>
                                <td class="long" title="취소상태">취소상태</td>
                                <td><strong>Gf06</strong></td>

                                <td class="bd-left-gray-5 bg-lightgray"><span class="color-gray-5">↔</span></td>

                                <td class="bd-left-gray-5"><strong></strong></td>
                                <td class="long"></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="pagination">
                    <button type="button" class="pagination-btn-prev"><span class="el-hid">이전 버튼</span></button>
                    <ul class="pagination-list-wrap">
                        <li class="pagination-list">
                            <button type="button" class="pagination-btn active">1</button>
                        </li>
                        <li class="pagination-list">
                            <button type="button" class="pagination-btn">2</button>
                        </li>
                        <li class="pagination-list">
                            <button type="button" class="pagination-btn">3</button>
                        </li>
                        <li class="pagination-list">
                            <button type="button" class="pagination-btn">4</button>
                        </li>
                        <li class="pagination-list">
                            <button type="button" class="pagination-btn">5</button>
                        </li>
                    </ul>
                    <button type="button" class="pagination-btn-next"><span class="el-hid">다음 버튼</span></button>
                </div>
            </section>
    </NuxtLayout>
</template>

<script setup>
// 이 페이지 전용 타이틀과 디자인 세팅만 독립 선언
useHead({
  title: 'Rack 관리 | SKHDC 관리 시스템',
  bodyAttrs: { class: 'main' },
  link: [{ rel: 'stylesheet', type: 'text/css', href: '/css/pages/rack.css' }],
  //script: [
  //  { src: '/js/pages/rack.js', defer: true }
  //]
})
// 🟢 [철통 방어막 적용] 오직 브라우저 환경(Client)이 준비 완료된 시점에만 실행하도록 격리합니다.
onMounted(() => {
  if (process.client) {
    
    $(document).ready(function () {
        $("#inflow-day").datepicker({
            ...datepicker_setting,
            minDate: "+2d",
            beforeShowDay: $.datepicker.noWeekends,
        });
        $("#inflow-day").datepicker("setDate", getBusinessDate(2));
        $("#inflow-day-edit, #inflow-day-edit2").datepicker({
            ...datepicker_setting,
            beforeShowDay: $.datepicker.noWeekends,
        });
    });
  }
  
})
</script>