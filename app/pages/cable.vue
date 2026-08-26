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
            
        <button type="button" class="btn-top" id="btn-top" onclick="moveTop()"><span class="el-hid">스크롤 위로 이동</span></button>

        <!-- s: 케이블 신청 -->
        <div class="pop large" id="register-pop">
            <button type="button" class="pop-dim" onclick="popClose('#register-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#register-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청</h2>
                </div>
                <div class="pop-con">
                    <div class="process-list-wrap w-50 w-sm-80 m-auto active-3-1">
                        <div class="process-list active">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">작성 중</p>
                        </div>
                        <div class="process-list">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">요청</p>
                        </div>
                        <div class="process-list">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">완료</p>
                        </div>
                    </div>

                    <p class="mt-1 fs-125 fs-sm-1 ta-center color-semantic-gray">서버 정보를 입력해 주세요.</p>

                    <div class="table-wrap mt-1">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup class="onW dis-tcg">
                                <col width="20%" />
                                <col width="30%" />
                                <col width="20%" />
                                <col width="30%" />
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>
                                        <p class="fs-14 color-semantic-gray">* 요청 완료 시 자동 생성됩니다.</p>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap date">
                                            <input type="text" name="createdAtSt" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="inflow-day" title="완료 요청일(yyyy-mm-dd)" />
                                        </span>
                                        <p class="mt-05 fs-14">* 완료 요청일 <strong class="color-red">2일 전</strong>까지 신청 필수</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="requesterName" class="input" placeholder="요청자 성명 입력" title="요청자 성명" value="홍길동" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="serviceName" class="input" placeholder="서비스 명 입력" title="서비스 명" />
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="datacenter" class="input" title="데이터 센터">
                                                <option disabled="" value="" selected="">데이터 센터 선택</option>
                                                <option value="SKHDC2">SKHDC2</option>
                                                <option value="통신실">통신실</option>
                                            </select>
                                        </span>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="Rack No.">
                                                <option disabled="" value="" selected="">Rack No. 선택</option>
                                                <optgroup label="Gf">
                                                    <option value="Gf01">Gf01</option>
                                                    <option value="Gf02">Gf02</option>
                                                    <option value="Gf03">Gf03</option>
                                                    <option value="Gf04">Gf04</option>
                                                    <option value="Gf05">Gf05</option>
                                                    <option value="Gf06">Gf06</option>
                                                    <option value="Gf07">Gf07</option>
                                                    <option value="Gf08">Gf08</option>
                                                    <option value="Gf09">Gf09</option>
                                                    <option value="Gf10">Gf10</option>
                                                    <option value="Gf11">Gf11</option>
                                                </optgroup>
                                                <optgroup label="Ff">
                                                    <option value="Ff01">Ff01</option>
                                                    <option value="Ff02">Ff02</option>
                                                    <option value="Ff03">Ff03</option>
                                                    <option value="Ff04">Ff04</option>
                                                    <option value="Ff05">Ff05</option>
                                                    <option value="Ff06">Ff06</option>
                                                    <option value="Ff07">Ff07</option>
                                                    <option value="Ff08">Ff08</option>
                                                    <option value="Ff09">Ff09</option>
                                                    <option value="Ff10">Ff10</option>
                                                    <option value="Ff11">Ff11</option>
                                                </optgroup>
                                                <optgroup label="Ge">
                                                    <option value="Ge01">Ge01</option>
                                                    <option value="Ge02">Ge02</option>
                                                    <option value="Ge03">Ge03</option>
                                                    <option value="Ge04">Ge04</option>
                                                    <option value="Ge05">Ge05</option>
                                                    <option value="Ge06">Ge06</option>
                                                    <option value="Ge07">Ge07</option>
                                                    <option value="Ge08">Ge08</option>
                                                    <option value="Ge09">Ge09</option>
                                                </optgroup>
                                                <optgroup label="Fe">
                                                    <option value="Fe01">Fe01</option>
                                                    <option value="Fe02">Fe02</option>
                                                </optgroup>
                                                <optgroup label="Gd">
                                                    <option value="Gd09">Gd09</option>
                                                    <option value="Gd10">Gd10</option>
                                                </optgroup>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#register-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('케이블 신청이 완료되었습니다.');
                                window.location.reload();
                            "
                        >
                            요청
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 -->

        <!-- s: 케이블 신청 상세 정보 - 요청상태/사용자 -->
        <div class="pop large" id="detail-pop">
            <button type="button" class="pop-dim" onclick="popClose('#detail-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner w-max-840">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#detail-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 상세 정보</h2>
                </div>
                <div class="pop-con">
                    <div class="process-list-wrap w-50 w-sm-80 m-auto active-3-2">
                        <div class="process-list done">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">작성 중</p>
                        </div>
                        <div class="process-list active">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">요청</p>
                        </div>
                        <div class="process-list">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">완료</p>
                        </div>
                    </div>

                    <div class="table-wrap mt-1">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>261235</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일</strong>
                                    </td>
                                    <td><strong class="color-point">2026-01-29</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자</strong>
                                    </td>
                                    <td>홍길동</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명</strong>
                                    </td>
                                    <td>SCO_Web#1</td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf06</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM mt-0"></div>

                    <p class="mt-1 fs-125 fs-sm-1 ta-center color-semantic-gray">요청하신 내용을 관리자가 확인하고 있습니다.</p>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-reject w-6 w-sm-auto" onclick="popOpen('#cancel-pop')">요청 취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 w-sm-auto"
                            onclick="
                                popClose('#detail-pop');
                                popOpen('#edit-pop');
                            "
                        >
                            수정
                        </button>
                        <button type="button" class="btn-cancel w-6 w-sm-auto" onclick="popClose('#detail-pop')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 상세 정보 - 요청상태/사용자 -->
        <!-- s: 케이블 신청 상세 정보 - 요청상태/관리자 -->
        <div class="pop large" id="detail-manager-pop">
            <button type="button" class="pop-dim" onclick="popClose('#detail-manager-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#detail-manager-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 상세 정보</h2>
                </div>
                <div class="pop-con">
                    <div class="process-list-wrap w-50 w-sm-80 m-auto active-3-2">
                        <div class="process-list done">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">작성 중</p>
                        </div>
                        <div class="process-list active">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">요청</p>
                        </div>
                        <div class="process-list">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">완료</p>
                        </div>
                    </div>

                    <div class="table-wrap mt-1">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>261235</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일</strong>
                                    </td>
                                    <td><strong class="color-point">2026-01-29</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자</strong>
                                    </td>
                                    <td>홍길동</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명</strong>
                                    </td>
                                    <td>SCO_Web#1</td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf06</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM mt-0"></div>

                    <p class="mt-2 mt-sm-0 fs-125 fs-sm-1 ta-center color-semantic-gray">네트워크 정보를 입력해 주세요.</p>

                    <div class="table-wrap mt-1">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청 완료 처리' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="datacenter" class="input" title="데이터 센터">
                                                <option disabled="" value="" selected="">데이터 센터 선택</option>
                                                <option value="SKHDC2">SKHDC2</option>
                                                <option value="통신실">통신실</option>
                                            </select>
                                        </span>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="Rack No.">
                                                <option disabled="" value="" selected="">Rack No. 선택</option>
                                                <optgroup label="Gf">
                                                    <option value="Gf01">Gf01</option>
                                                    <option value="Gf02">Gf02</option>
                                                    <option value="Gf03">Gf03</option>
                                                    <option value="Gf04">Gf04</option>
                                                    <option value="Gf05">Gf05</option>
                                                    <option value="Gf06">Gf06</option>
                                                    <option value="Gf07">Gf07</option>
                                                    <option value="Gf08">Gf08</option>
                                                    <option value="Gf09">Gf09</option>
                                                    <option value="Gf10">Gf10</option>
                                                    <option value="Gf11">Gf11</option>
                                                </optgroup>
                                                <optgroup label="Ff">
                                                    <option value="Ff01">Ff01</option>
                                                    <option value="Ff02">Ff02</option>
                                                    <option value="Ff03">Ff03</option>
                                                    <option value="Ff04">Ff04</option>
                                                    <option value="Ff05">Ff05</option>
                                                    <option value="Ff06">Ff06</option>
                                                    <option value="Ff07">Ff07</option>
                                                    <option value="Ff08">Ff08</option>
                                                    <option value="Ff09">Ff09</option>
                                                    <option value="Ff10">Ff10</option>
                                                    <option value="Ff11">Ff11</option>
                                                </optgroup>
                                                <optgroup label="Ge">
                                                    <option value="Ge01">Ge01</option>
                                                    <option value="Ge02">Ge02</option>
                                                    <option value="Ge03">Ge03</option>
                                                    <option value="Ge04">Ge04</option>
                                                    <option value="Ge05">Ge05</option>
                                                    <option value="Ge06">Ge06</option>
                                                    <option value="Ge07">Ge07</option>
                                                    <option value="Ge08">Ge08</option>
                                                    <option value="Ge09">Ge09</option>
                                                </optgroup>
                                                <optgroup label="Fe">
                                                    <option value="Fe01">Fe01</option>
                                                    <option value="Fe02">Fe02</option>
                                                </optgroup>
                                                <optgroup label="Gd">
                                                    <option value="Gd09">Gd09</option>
                                                    <option value="Gd10">Gd10</option>
                                                </optgroup>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">네트워크 장비<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="rackLocation" class="input" placeholder="네트워크 장비 입력" title="네트워크 장비" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">포트<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="number" min="1" max="100" name="rackUnit" class="input" placeholder="포트 번호 입력(숫자만)" title="포트" value="1" />
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">처리자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="adminName" class="input" placeholder="처리자 성명 입력" title="처리자 성명" value="홍길동" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">비고</strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" name="memo" class="input" placeholder="비고 사항을 입력해 주세요." title="비고" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-2 mt-sm-15">
                        <button type="button" class="btn-reject w-6 w-sm-auto" onclick="popOpen('#cancel-pop')">요청 취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 w-sm-auto"
                            onclick="
                                popClose('#detail-manager-pop');
                                popOpen('#edit-pop');
                            "
                        >
                            수정
                        </button>
                        <button
                            type="button"
                            class="btn-black w-6 w-sm-auto"
                            onclick="
                                alert('케이블 신청이 완료 처리되었습니다.');
                                window.location.reload();
                            "
                        >
                            완료처리
                        </button>
                        <button type="button" class="btn-cancel w-6 w-sm-auto" onclick="popClose('#detail-manager-pop')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 상세 정보 - 요청상태/관리자 -->
        <!-- s: 케이블 신청 요청 수정 -->
        <div class="pop large" id="edit-pop">
            <button type="button" class="pop-dim" onclick="popClose('#edit-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#edit-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 요청 수정</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>261235</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap date">
                                            <input type="text" name="requestDate" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="inflow-day-edit" title="입고 예정일(yyyy-mm-dd)" value="2026-01-29" />
                                        </span>
                                        <p class="mt-05 fs-14">* 완료 요청일 <strong class="color-red">2일 전</strong>까지 신청 필수</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="requesterName" class="input" placeholder="요청자 성명 입력" title="요청자 성명" value="홍길동" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="serviceName" class="input" placeholder="서비스 명 입력" title="서비스 명" value="SCO_Web#1" />
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="datacenter" class="input" title="데이터 센터">
                                                <option disabled="" value="">데이터 센터 선택</option>
                                                <option value="SKHDC2" selected>SKHDC2</option>
                                                <option value="통신실">통신실</option>
                                            </select>
                                        </span>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="Rack No.">
                                                <option disabled="" value="" selected="">Rack No. 선택</option>
                                                <optgroup label="Gf">
                                                    <option value="Gf01">Gf01</option>
                                                    <option value="Gf02">Gf02</option>
                                                    <option value="Gf03">Gf03</option>
                                                    <option value="Gf04">Gf04</option>
                                                    <option value="Gf05">Gf05</option>
                                                    <option value="Gf06" selected>Gf06</option>
                                                    <option value="Gf07">Gf07</option>
                                                    <option value="Gf08">Gf08</option>
                                                    <option value="Gf09">Gf09</option>
                                                    <option value="Gf10">Gf10</option>
                                                    <option value="Gf11">Gf11</option>
                                                </optgroup>
                                                <optgroup label="Ff">
                                                    <option value="Ff01">Ff01</option>
                                                    <option value="Ff02">Ff02</option>
                                                    <option value="Ff03">Ff03</option>
                                                    <option value="Ff04">Ff04</option>
                                                    <option value="Ff05">Ff05</option>
                                                    <option value="Ff06">Ff06</option>
                                                    <option value="Ff07">Ff07</option>
                                                    <option value="Ff08">Ff08</option>
                                                    <option value="Ff09">Ff09</option>
                                                    <option value="Ff10">Ff10</option>
                                                    <option value="Ff11">Ff11</option>
                                                </optgroup>
                                                <optgroup label="Ge">
                                                    <option value="Ge01">Ge01</option>
                                                    <option value="Ge02">Ge02</option>
                                                    <option value="Ge03">Ge03</option>
                                                    <option value="Ge04">Ge04</option>
                                                    <option value="Ge05">Ge05</option>
                                                    <option value="Ge06">Ge06</option>
                                                    <option value="Ge07">Ge07</option>
                                                    <option value="Ge08">Ge08</option>
                                                    <option value="Ge09">Ge09</option>
                                                </optgroup>
                                                <optgroup label="Fe">
                                                    <option value="Fe01">Fe01</option>
                                                    <option value="Fe02">Fe02</option>
                                                </optgroup>
                                                <optgroup label="Gd">
                                                    <option value="Gd09">Gd09</option>
                                                    <option value="Gd10">Gd10</option>
                                                </optgroup>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#edit-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('케이블 신청 정보가 수정되었습니다.');
                                window.location.reload();
                            "
                        >
                            저장
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 요청 수정 -->
        <!-- s: 케이블 신청 취소 -->
        <div class="pop" id="cancel-pop">
            <button type="button" class="pop-dim" onclick="popClose('#cancel-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#cancel-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 취소</h2>
                </div>
                <div class="pop-con">
                    <p class="large">
                        케이블 신청을 <span class="color-red">취소</span>하시겠습니까? <br />
                        <span class="color-red">확인</span> 버튼 클릭 시 취소됩니다.
                    </p>
                    <div class="btn-wrap mt-15">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#cancel-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-reject w-6 mb-0"
                            onclick="
                                alert('케이블 신청이 취소되었습니다.');
                                window.location.reload();
                            "
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 취소 -->

        <!-- s: 케이블 신청 상세 정보 - 완료상태/사용자 -->
        <div class="pop large" id="done-pop">
            <button type="button" class="pop-dim" onclick="popClose('#done-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner w-max-840">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#done-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 상세 정보</h2>
                </div>
                <div class="pop-con">
                    <div class="process-list-wrap w-50 w-sm-80 m-auto active-3-3">
                        <div class="process-list done">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">작성 중</p>
                        </div>
                        <div class="process-list done">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">요청</p>
                        </div>
                        <div class="process-list active">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">완료</p>
                        </div>
                    </div>

                    <div class="table-wrap mt-1">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>261235</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일</strong>
                                    </td>
                                    <td><strong class="color-point">2026-01-29</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자</strong>
                                    </td>
                                    <td>홍길동</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명</strong>
                                    </td>
                                    <td>SCO_Web#1</td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf06</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM mt-0"></div>

                    <div class="table-wrap mt-2 mt-sm-0">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청 완료 처리' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf07</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">네트워크 장비</strong>
                                    </td>
                                    <td>ServerFarm_L2_SW#1</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">포트</strong>
                                    </td>
                                    <td><strong class="color-point">15</strong></td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">처리자</strong>
                                    </td>
                                    <td>오동진</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">비고</strong>
                                    </td>
                                    <td colspan="3">ㅁㅁㅁ로 인한 oo 작업 추가 예정</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-2 mt-sm-15">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#done-pop')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 상세 정보 - 완료상태/사용자 -->
        <!-- s: 케이블 신청 상세 정보 - 완료상태/관리자 -->
        <div class="pop large" id="done-manager-pop">
            <button type="button" class="pop-dim" onclick="popClose('#done-manager-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner w-max-840">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#done-manager-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 상세 정보</h2>
                </div>
                <div class="pop-con">
                    <div class="process-list-wrap w-50 w-sm-80 m-auto active-3-3">
                        <div class="process-list done">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">작성 중</p>
                        </div>
                        <div class="process-list done">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">요청</p>
                        </div>
                        <div class="process-list active">
                            <div class="process-list-dot"></div>
                            <p class="process-list-tit">완료</p>
                        </div>
                    </div>

                    <div class="table-wrap mt-1">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>261235</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일</strong>
                                    </td>
                                    <td><strong class="color-point">2026-01-29</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자</strong>
                                    </td>
                                    <td>홍길동</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명</strong>
                                    </td>
                                    <td>SCO_Web#1</td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf06</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM mt-0"></div>

                    <div class="table-wrap mt-2 mt-sm-0">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청 완료 처리' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf07</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">네트워크 장비</strong>
                                    </td>
                                    <td>ServerFarm_L2_SW#1</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">포트</strong>
                                    </td>
                                    <td><strong class="color-point">15</strong></td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">처리자</strong>
                                    </td>
                                    <td>오동진</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">비고</strong>
                                    </td>
                                    <td colspan="3">ㅁㅁㅁ로 인한 oo 작업 추가 예정</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-2 mt-sm-15">
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                popClose('#done-manager-pop');
                                popOpen('#done-edit-pop');
                            "
                        >
                            수정
                        </button>
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#done-manager-pop')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 상세 정보 - 완료상태/관리자 -->
        <!-- s: 케이블 신청 정보 수정 -->
        <div class="pop large" id="done-edit-pop">
            <button type="button" class="pop-dim" onclick="popClose('#done-edit-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#done-edit-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 정보 수정</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>
                                        <p class="fs-14 color-semantic-gray">* 요청 완료 시 자동 생성됩니다.</p>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap date">
                                            <input type="text" name="createdAtSt" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="day-2" title="완료 요청일(yyyy-mm-dd)" value="2026-01-29" />
                                        </span>
                                        <p class="mt-05 fs-14">* 완료 요청일 <strong class="color-red">2일 전</strong>까지 신청 필수</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="requesterName" class="input" placeholder="요청자 성명 입력" title="요청자 성명" value="홍길동" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="serviceName" class="input" placeholder="서비스 명 입력" title="서비스 명" value="SCO_Web#1" />
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="datacenter" class="input" title="데이터 센터">
                                                <option disabled="" value="">데이터 센터 선택</option>
                                                <option value="SKHDC2" selected>SKHDC2</option>
                                                <option value="통신실">통신실</option>
                                            </select>
                                        </span>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="Rack No.">
                                                <option disabled="" value="" selected="">Rack No. 선택</option>
                                                <optgroup label="Gf">
                                                    <option value="Gf01">Gf01</option>
                                                    <option value="Gf02">Gf02</option>
                                                    <option value="Gf03">Gf03</option>
                                                    <option value="Gf04">Gf04</option>
                                                    <option value="Gf05">Gf05</option>
                                                    <option value="Gf06" selected>Gf06</option>
                                                    <option value="Gf07">Gf07</option>
                                                    <option value="Gf08">Gf08</option>
                                                    <option value="Gf09">Gf09</option>
                                                    <option value="Gf10">Gf10</option>
                                                    <option value="Gf11">Gf11</option>
                                                </optgroup>
                                                <optgroup label="Ff">
                                                    <option value="Ff01">Ff01</option>
                                                    <option value="Ff02">Ff02</option>
                                                    <option value="Ff03">Ff03</option>
                                                    <option value="Ff04">Ff04</option>
                                                    <option value="Ff05">Ff05</option>
                                                    <option value="Ff06">Ff06</option>
                                                    <option value="Ff07">Ff07</option>
                                                    <option value="Ff08">Ff08</option>
                                                    <option value="Ff09">Ff09</option>
                                                    <option value="Ff10">Ff10</option>
                                                    <option value="Ff11">Ff11</option>
                                                </optgroup>
                                                <optgroup label="Ge">
                                                    <option value="Ge01">Ge01</option>
                                                    <option value="Ge02">Ge02</option>
                                                    <option value="Ge03">Ge03</option>
                                                    <option value="Ge04">Ge04</option>
                                                    <option value="Ge05">Ge05</option>
                                                    <option value="Ge06">Ge06</option>
                                                    <option value="Ge07">Ge07</option>
                                                    <option value="Ge08">Ge08</option>
                                                    <option value="Ge09">Ge09</option>
                                                </optgroup>
                                                <optgroup label="Fe">
                                                    <option value="Fe01">Fe01</option>
                                                    <option value="Fe02">Fe02</option>
                                                </optgroup>
                                                <optgroup label="Gd">
                                                    <option value="Gd09">Gd09</option>
                                                    <option value="Gd10">Gd10</option>
                                                </optgroup>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM mt-0"></div>

                    <div class="table-wrap mt-2 mt-sm-0">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청 완료 처리' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                        <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="datacenter" class="input" title="데이터 센터">
                                                <option disabled="" value="">데이터 센터 선택</option>
                                                <option value="SKHDC2" selected>SKHDC2</option>
                                                <option value="통신실">통신실</option>
                                            </select>
                                        </span>
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="Rack No.">
                                                <option disabled="" value="">Rack No. 선택</option>
                                                <optgroup label="Gf">
                                                    <option value="Gf01">Gf01</option>
                                                    <option value="Gf02">Gf02</option>
                                                    <option value="Gf03">Gf03</option>
                                                    <option value="Gf04">Gf04</option>
                                                    <option value="Gf05">Gf05</option>
                                                    <option value="Gf06">Gf06</option>
                                                    <option value="Gf07" selected>Gf07</option>
                                                    <option value="Gf08">Gf08</option>
                                                    <option value="Gf09">Gf09</option>
                                                    <option value="Gf10">Gf10</option>
                                                    <option value="Gf11">Gf11</option>
                                                </optgroup>
                                                <optgroup label="Ff">
                                                    <option value="Ff01">Ff01</option>
                                                    <option value="Ff02">Ff02</option>
                                                    <option value="Ff03">Ff03</option>
                                                    <option value="Ff04">Ff04</option>
                                                    <option value="Ff05">Ff05</option>
                                                    <option value="Ff06">Ff06</option>
                                                    <option value="Ff07">Ff07</option>
                                                    <option value="Ff08">Ff08</option>
                                                    <option value="Ff09">Ff09</option>
                                                    <option value="Ff10">Ff10</option>
                                                    <option value="Ff11">Ff11</option>
                                                </optgroup>
                                                <optgroup label="Ge">
                                                    <option value="Ge01">Ge01</option>
                                                    <option value="Ge02">Ge02</option>
                                                    <option value="Ge03">Ge03</option>
                                                    <option value="Ge04">Ge04</option>
                                                    <option value="Ge05">Ge05</option>
                                                    <option value="Ge06">Ge06</option>
                                                    <option value="Ge07">Ge07</option>
                                                    <option value="Ge08">Ge08</option>
                                                    <option value="Ge09">Ge09</option>
                                                </optgroup>
                                                <optgroup label="Fe">
                                                    <option value="Fe01">Fe01</option>
                                                    <option value="Fe02">Fe02</option>
                                                </optgroup>
                                                <optgroup label="Gd">
                                                    <option value="Gd09">Gd09</option>
                                                    <option value="Gd10">Gd10</option>
                                                </optgroup>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">네트워크 장비<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="rackLocation" class="input" placeholder="네트워크 장비 입력" title="네트워크 장비" value="ServerFarm_L2_SW#1" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">포트<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="number" min="1" max="100" name="rackUnit" class="input" placeholder="포트 번호 입력(숫자만)" title="포트" value="15" />
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">처리자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" name="adminName" class="input" placeholder="처리자 성명 입력" title="처리자 성명" value="오동진" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">비고</strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" name="memo" class="input" placeholder="비고 사항을 입력해 주세요." title="비고" value="ㅁㅁㅁ로 인한 oo 작업 추가 예정" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#done-edit-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('케이블 신청이 수정되었습니다.');
                                window.location.reload();
                            "
                        >
                            저장
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 정보 수정 -->

        <!-- s: 케이블 신청 상세 정보 - 취소상태 -->
        <div class="pop" id="canceled-pop">
            <button type="button" class="pop-dim" onclick="popClose('#canceled-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner w-max-840">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#canceled-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">케이블 신청 상세 정보</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '케이블 신청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup class="onW dis-tcg">
                                <col width="20%" />
                                <col width="30%" />
                                <col width="20%" />
                                <col width="30%" />
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
                                        <strong class="color-black mobile-tit">요청ID</strong>
                                    </td>
                                    <td>261235</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">완료 요청일</strong>
                                    </td>
                                    <td><strong class="color-point">2026-01-29</strong></td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">요청자</strong>
                                    </td>
                                    <td>홍길동</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스 명</strong>
                                    </td>
                                    <td>SCO_Web#1</td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">데이터 센터</strong>
                                    </td>
                                    <td>SKHDC2</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">Rack No.</strong>
                                    </td>
                                    <td><strong class="color-point">Gf06</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM mt-0"></div>

                    <p class="mt-1 fs-125 fs-sm-1 ta-center color-semantic-gray">해당 요청은 취소되었습니다.</p>
                    <p class="mt-0 fs-14 fs-sm-14 ls-03 ta-center color-gray-5">취소일시: 2026. 7. 7. 오전 13:20:00 / 취소자: 홍길동</p>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#canceled-pop')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 케이블 신청 상세 정보 - 취소상태 -->
    </NuxtLayout>
</template>

<script setup>
// 이 페이지 전용 타이틀과 디자인 세팅만 독립 선언
useHead({
  title: 'Rack 관리 | SKHDC 관리 시스템',
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