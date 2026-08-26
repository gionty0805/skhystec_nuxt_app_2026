<template>
    <!-- 🟢 레이아웃 시스템을 호출하여 자동으로 공통 헤더/푸터/세션감시망을 상속받습니다. -->
    <NuxtLayout name="sidebar">
        <section class="content">
                <div class="content-top">
                    <h3 class="content-tit">포트맵 관리</h3>
                    <div class="content-search-wrap">
                        <ul class="content-search-list-wrap">
                            <li class="content-search-list">
                                <label class="content-search-tit" for="searchAdminName">담당자</label>
                                <div class="content-search-con">
                                    <input type="text" name="adminName" class="input w-max-10" id="searchAdminName" placeholder="이름 입력" />
                                </div>
                            </li>
                            <li class="content-search-list">
                                <label class="content-search-tit" for="searchEquipmentName">장비명</label>
                                <div class="content-search-con">
                                    <input type="text" name="equipmentName" class="input w-min-16" id="searchEquipmentName" placeholder="장비명 입력" />
                                </div>
                            </li>
                        </ul>
                        <button type="button" class="btn-search">조회</button>
                    </div>
                </div>

                <div class="table-top">
                    <p class="table-top-total">총 <span class="color-point">1,234</span>건</p>

                    <div class="table-top-btn mb--02">
                        <button type="button" class="btn-done fs-14" onclick="popOpen('#register-equipment-pop')"><span>장비 추가</span></button>
                        <button type="button" class="btn-done fs-14" onclick="popOpen('#register-portmap-pop')"><span>포트맵 추가</span></button>
                    </div>
                </div>

                <div class="table-wrap">
                    <table class="table fs-14 ta-center">
                        <caption>
                            표 제목: 포트맵 관리 / 구성: No, 데이터 센터, 네트워크 장비명 (호스트명), 설치위치, 담당자
                        </caption>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>데이터 센터</th>
                                <th>네트워크 장비명 (호스트명)</th>
                                <th>설치위치</th>
                                <th>담당자</th>
                            </tr>
                        </thead>
                        <tbody class="btn">
                            <!-- 데이터가 없는 경우 -->
                            <!-- <tr>
                                <td colspan="5" class="null-large">등록된 장비가 없습니다.</td>
                            </tr> -->

                            <!-- 장비 반입 목록 -->
                            <tr tabindex="0" id="data-1" onclick="popOpen('#detail-pop', '#data-1')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-1');">
                                <td>1</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_DT_A_007001</strong></td>
                                <td><strong>Ge04</strong></td>
                                <td>오동진</td>
                            </tr>
                            <tr tabindex="0" id="data-2" onclick="popOpen('#detail-pop', '#data-2')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-2');">
                                <td>1</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_DT_B_007002</strong></td>
                                <td><strong>Gf06</strong></td>
                                <td>오동진</td>
                            </tr>
                            <tr tabindex="0" id="data-3" onclick="popOpen('#detail-pop', '#data-3')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-3');">
                                <td>1</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_L2_SW_007003</strong></td>
                                <td><strong>Ge04</strong></td>
                                <td>오동진</td>
                            </tr>
                            <tr tabindex="0" id="data-4" onclick="popOpen('#detail-pop', '#data-4')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-4');">
                                <td>1</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_L2_SW_007002</strong></td>
                                <td><strong>Gf05</strong></td>
                                <td>김준영</td>
                            </tr>
                            <tr tabindex="0" id="data-5" onclick="popOpen('#detail-pop', '#data-5')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-5');">
                                <td>1</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_L2_SW_007001</strong></td>
                                <td><strong>Gf06</strong></td>
                                <td>김준영</td>
                            </tr>

                            <tr tabindex="0" id="data-6" onclick="popOpen('#detail-pop', '#data-6')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-6');">
                                <td>6</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_DT_A_007006</strong></td>
                                <td><strong>Ge04</strong></td>
                                <td>오동진</td>
                            </tr>
                            <tr tabindex="0" id="data-7" onclick="popOpen('#detail-pop', '#data-7')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-7');">
                                <td>7</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_DT_B_007005</strong></td>
                                <td><strong>Gf06</strong></td>
                                <td>오동진</td>
                            </tr>
                            <tr tabindex="0" id="data-8" onclick="popOpen('#detail-pop', '#data-8')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-8');">
                                <td>8</td>
                                <td class="color-semantic-gray">통신실</td>
                                <td><strong class="link">ServerFarm_L2_SW_007004</strong></td>
                                <td><strong>Ge04</strong></td>
                                <td>오동진</td>
                            </tr>
                            <tr tabindex="0" id="data-9" onclick="popOpen('#detail-pop', '#data-9')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-9');">
                                <td>9</td>
                                <td class="color-semantic-gray">SKHDC2</td>
                                <td><strong class="link">ServerFarm_L2_SW_007003</strong></td>
                                <td><strong>Gf07</strong></td>
                                <td>김준영</td>
                            </tr>
                            <tr tabindex="0" id="data-10" onclick="popOpen('#detail-pop', '#data-10')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-10');">
                                <td>10</td>
                                <td class="color-semantic-gray">통신실</td>
                                <td><strong class="link">ServerFarm_L2_SW_007002</strong></td>
                                <td><strong>Gf08</strong></td>
                                <td>김준영</td>
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

        <!-- s: 포트맵 상세 정보 -->
        <div class="pop large" id="detail-pop">
            <button type="button" class="pop-dim" onclick="popClose('#detail-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner w-max-840">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#detail-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">포트맵 상세 정보</h2>
                </div>
                <div class="pop-con">
                    <div class="dis-fx jc-sb ai-btm">
                        <h3 class="fs-125 fs-sm-1125">장비 기본 정보</h3>
                        <div>
                            <button type="button" class="btn-line-gray ml-025 fs-14 pd-075_1" onclick="popOpen('#edit-equipment-pop')"><span>장비 정보 수정</span></button>
                            <button type="button" class="btn-line-red ml-025 fs-14 pd-075_1" onclick="popOpen('#delete-equipment-pop')"><span>장비 삭제</span></button>
                        </div>
                    </div>
                    <div class="table-wrap mt-075">
                        <table class="table mobile">
                            <caption>
                                '장비 기본 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup>
                                <col width="30%" />
                                <col width="25%" />
                                <col width="20%" />
                                <col width="25%" />
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
                                        <strong class="color-black mobile-tit">네트워크 장비명 <span class="dis-ib">(호스트명)</span></strong>
                                    </td>
                                    <td colspan="3">ServerFarm_DT_A_007001</td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">설치위치</strong>
                                    </td>
                                    <td>Ge04</td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">담당자</strong>
                                    </td>
                                    <td>오동진</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="content-guideline-con-hr onM"></div>
                    <div class="onW mt-2"></div>

                    <h3 class="mb-05 fs-125 fs-sm-1125">포트맵 정보</h3>
                    <div class="portmap-box-wrap scrollbar fs-14">
                        <div class="portmap-box-inner">
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">1</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">3</span>
                                <span class="portmap-box-info bg-type1"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">5</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">7</span>
                                <span class="portmap-box-info bg-type3"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">9</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">11</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">13</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">15</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">17</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">19</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">21</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">23</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">25</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">27</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">29</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">31</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">33</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">35</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">37</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">39</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">41</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">43</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">45</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">47</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">49</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">51</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">53</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">55</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                        </div>
                        <div class="portmap-box-inner">
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">2</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">4</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">6</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">8</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">10</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">12</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">14</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">16</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">18</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">20</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">22</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">24</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">26</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">28</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">30</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">32</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">34</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">36</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">38</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">40</span>
                                <span class="portmap-box-info"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">42</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">44</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">46</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">48</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">50</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>

                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">52</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#register-portmap-pop')" title="포트맵 추가">
                                <span class="portmap-box-num">54</span>
                                <span class="portmap-box-info"></span>
                            </button>
                            <button type="button" class="portmap-box" onclick="popOpen('#edit-portmap-pop')" title="포트맵 정보 수정">
                                <span class="portmap-box-num">56</span>
                                <span class="portmap-box-info bg-type2"></span>
                            </button>
                        </div>
                    </div>

                    <div class="portmap-legend-wrap mt-05">
                        <div class="portmap-legend">
                            <span class="portmap-legend-dot bg-type1"></span>
                            <span class="portmap-legend-name">UTP</span>
                        </div>
                        <div class="portmap-legend">
                            <span class="portmap-legend-dot bg-type2"></span>
                            <span class="portmap-legend-name">Single</span>
                        </div>
                        <div class="portmap-legend">
                            <span class="portmap-legend-dot bg-type3"></span>
                            <span class="portmap-legend-name">Multi</span>
                        </div>
                    </div>

                    <div class="scrollbar h-max-20 mt-1">
                        <div class="table-wrap">
                            <table class="table fs-12 lh-1 ta-center">
                                <caption>
                                    표 제목: 포트맵 관리 / 구성: 포트 번호, 케이블 종류, 서비스명, 추가/수정
                                </caption>
                                <colgroup class="onW dis-tcg">
                                    <col width="15%" />
                                    <col width="15%" />
                                    <col width="55%" />
                                    <col width="15%" />
                                </colgroup>
                                <colgroup class="onM dis-tcg">
                                    <col width="12%" />
                                    <col width="15%" />
                                    <col width="45%" />
                                    <col width="28%" />
                                </colgroup>
                                <thead class="va-middle bg-lightgray">
                                    <tr>
                                        <th>포트 번호</th>
                                        <th>케이블 종류</th>
                                        <th>서비스명</th>
                                        <th>추가/수정</th>
                                    </tr>
                                </thead>
                                <tbody class="btn">
                                    <!-- 포트맵 목록 -->
                                    <tr tabindex="0" class="bg-lightgray" id="detail-1" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-1')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-1');">
                                        <td>1</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-2" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-2')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-2');">
                                        <td>2</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-3" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-3')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-3');">
                                        <td>3</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007003_P55</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-4" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-4')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-4');">
                                        <td>4</td>
                                        <td class="bg-type1"><strong>UTP</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>Uplink</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-5" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-5')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-5');">
                                        <td>5</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P55</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-6" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-6')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-6');">
                                        <td>6</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-7" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-7')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-7');">
                                        <td>7</td>
                                        <td class="bg-type3"><strong>Multi</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_DT_A_007002</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-8" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-8')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-8');">
                                        <td>8</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-9" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-9')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-9');">
                                        <td>9</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle bg-lightgray" id="detail-10" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-10')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-10');">
                                        <td>10</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-11" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-11')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-11');">
                                        <td>11</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-12" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-12')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-12');">
                                        <td>12</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-13" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-13')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-13');">
                                        <td>13</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-14" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-14')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-14');">
                                        <td>14</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-15" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-15')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-15');">
                                        <td>15</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-16" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-16')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-16');">
                                        <td>16</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-17" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-17')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-17');">
                                        <td>17</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-18" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-18')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-18');">
                                        <td>18</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-19" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-19')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-19');">
                                        <td>19</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle bg-lightgray" id="detail-20" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-20')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-20');">
                                        <td>20</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-21" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-21')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-21');">
                                        <td>21</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-22" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-22')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-22');">
                                        <td>22</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-23" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-23')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-23');">
                                        <td>23</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-24" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-24')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-24');">
                                        <td>24</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-25" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-25')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-25');">
                                        <td>25</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-26" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-26')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-26');">
                                        <td>26</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-27" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-27')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-27');">
                                        <td>27</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-28" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-28')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-28');">
                                        <td>28</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-29" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-29')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-29');">
                                        <td>29</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle bg-lightgray" id="detail-30" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-30')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-30');">
                                        <td>30</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-31" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-31')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-31');">
                                        <td>31</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-32" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-32')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-32');">
                                        <td>32</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-33" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-33')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-33');">
                                        <td>33</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-34" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-34')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-34');">
                                        <td>34</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-35" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-35')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-35');">
                                        <td>35</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-36" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-36')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-36');">
                                        <td>36</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-37" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-37')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-37');">
                                        <td>37</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-38" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-38')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-38');">
                                        <td>38</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-39" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-39')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-39');">
                                        <td>39</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle bg-lightgray" id="detail-40" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-40')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-40');">
                                        <td>40</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-41" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-41')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-41');">
                                        <td>41</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-42" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-42')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-42');">
                                        <td>42</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-43" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-43')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-43');">
                                        <td>43</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-44" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-44')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-44');">
                                        <td>44</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-45" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-45')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-45');">
                                        <td>45</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" class="bg-lightgray" id="detail-46" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-46')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-46');">
                                        <td>46</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-47" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-47')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-47');">
                                        <td>47</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-48" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-48')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-48');">
                                        <td>48</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-49" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-49')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-49');">
                                        <td>49</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P49</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle" id="detail-50" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-50')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-50');">
                                        <td>50</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P50</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" id="detail-51" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-51')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-51');">
                                        <td>51</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P51</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-52" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-52')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-52');">
                                        <td>52</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P52</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-53" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-53')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-53');">
                                        <td>53</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P53</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" class="bg-lightgray" id="detail-54" title="포트맵 추가" onclick="popOpen('#register-portmap-pop', '#detail-54')" onkeypress="if (window.event.keyCode == 13) popOpen('#register-portmap-pop', '#detail-54');">
                                        <td>54</td>
                                        <td><strong></strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong></strong></td>
                                        <td>
                                            <span class="link color-semantic-gray">+ 추가</span>
                                        </td>
                                    </tr>
                                    <tr tabindex="0" id="detail-55" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-55')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-55');">
                                        <td>55</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P55</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>

                                    <tr tabindex="0" id="detail-56" title="포트맵 정보 수정" onclick="popOpen('#edit-portmap-pop', '#detail-56')" onkeypress="if (window.event.keyCode == 13) popOpen('#edit-portmap-pop', '#detail-56');">
                                        <td>56</td>
                                        <td class="bg-type2"><strong>Single</strong></td>
                                        <td class="ta-left wb-ba ls-03"><strong>ServerFarm_L2_SW_007004_P56</strong></td>
                                        <td>
                                            <span class="link-edit"><span class="link va-middle">정보 수정</span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 w-sm-auto" onclick="popClose('#detail-pop')">닫기</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 포트맵 상세 정보 -->

        <!-- s: 장비 추가 -->
        <div class="pop" id="register-equipment-pop">
            <button type="button" class="pop-dim" onclick="popClose('#register-equipment-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#register-equipment-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">장비 추가</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '장비 기본 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup>
                                <col width="26%" />
                                <col width="28%" />
                                <col width="18%" />
                                <col width="28%" />
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
                                        <strong class="color-black mobile-tit">네트워크 장비명 <span class="dis-ib">(호스트명)</span><span class="require"></span></strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" spellcheck="false" name="equipmentName" class="input" id="equipmentName-equipmentRegister" placeholder="네트워크 장비명 입력" title="네트워크 장비명" />
                                        <p class="mt-05 fs-14 color-semantic-gray">* 자동 입력되는 장비명은 기존에 등록된 장비명입니다.</p>
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">설치위치<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="설치위치">
                                                <option disabled="" value="" selected="">Rack No.</option>
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
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">담당자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" spellcheck="false" name="adminName" class="input" placeholder="담당자 성명 입력" title="담당자 성명" value="홍길동" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#register-equipment-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('장비가 추가되었습니다.');
                                window.location.reload();
                            "
                        >
                            추가
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 장비 추가 -->
        <!-- s: 장비 정보 수정 -->
        <div class="pop" id="edit-equipment-pop">
            <button type="button" class="pop-dim" onclick="popClose('#edit-equipment-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#edit-equipment-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">장비 정보 수정</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '장비 기본 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup>
                                <col width="26%" />
                                <col width="28%" />
                                <col width="18%" />
                                <col width="28%" />
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
                                        <strong class="color-black mobile-tit">네트워크 장비명 <span class="dis-ib">(호스트명)</span><span class="require"></span></strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" spellcheck="false" name="equipmentName" class="input" id="equipmentName-equipmentEdit" placeholder="네트워크 장비명 입력" title="네트워크 장비명" value="ServerFarm_DT_A_007001" />
                                        <p class="mt-05 fs-14 color-semantic-gray">* 자동 입력되는 장비명은 기존에 등록된 장비명입니다.</p>
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">설치위치<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="rackNumber" class="input" title="설치위치">
                                                <option disabled="" value="">Rack No.</option>
                                                <optgroup label="Gf">
                                                    <option value="Gf01">Gf01</option>
                                                    <option value="Gf02">Gf02</option>
                                                    <option value="Gf03">Gf03</option>
                                                    <option value="Gf04" selected>Gf04</option>
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
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">담당자<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="text" spellcheck="false" name="adminName" class="input" placeholder="담당자 성명 입력" title="담당자 성명" value="오동진" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#edit-equipment-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('장비 정보가 수정되었습니다.');
                                window.location.reload();
                            "
                        >
                            저장
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 장비 정보 수정 -->
        <!-- s: 장비 삭제 -->
        <div class="pop" id="delete-equipment-pop">
            <button type="button" class="pop-dim" onclick="popClose('#delete-equipment-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#delete-equipment-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">장비 삭제</h2>
                </div>
                <div class="pop-con">
                    <p class="large">
                        장비를 <span class="color-red">삭제</span>하시겠습니까? <br />
                        <span class="color-red">확인</span> 버튼 클릭 시 삭제됩니다.
                    </p>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#delete-equipment-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-reject w-6 mb-0"
                            onclick="
                                alert('장비가 삭제되었습니다.');
                                window.location.reload();
                            "
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 장비 삭제 -->

        <!-- s: 포트맵 추가 -->
        <div class="pop" id="register-portmap-pop">
            <button type="button" class="pop-dim" onclick="popClose('#register-portmap-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#register-portmap-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">포트맵 추가</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '포트맵 기본 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup>
                                <col width="26%" />
                                <col width="28%" />
                                <col width="18%" />
                                <col width="28%" />
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
                                        <strong class="color-black mobile-tit">네트워크 장비명 <span class="dis-ib">(호스트명)</span><span class="require"></span></strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" spellcheck="false" name="equipmentName" class="input" id="equipmentName-portmapRegister" placeholder="네트워크 장비명 입력" title="네트워크 장비명" />
                                        <p class="mt-05 fs-14 color-semantic-gray">* 자동 입력되는 장비명을 입력해 주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">포트번호<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="number" min="1" max="100" name="portNumber" class="input" placeholder="숫자만" title="포트번호" value="1" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">케이블 종류<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="cableType" class="input" title="케이블 종류">
                                                <option disabled="" value="" selected="">케이블 선택</option>
                                                <option value="UTP">UTP</option>
                                                <option value="Single">Single</option>
                                                <option value="Multi">Multi</option>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스명<span class="require"></span></strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" spellcheck="false" name="serviceName" class="input" placeholder="서비스명 입력" title="서비스명" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#register-portmap-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('포트맵이 추가되었습니다.');
                                window.location.reload();
                            "
                        >
                            추가
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 포트맵 추가 -->
        <!-- s: 포트맵 정보 수정 -->
        <div class="pop" id="edit-portmap-pop">
            <button type="button" class="pop-dim" onclick="popClose('#edit-portmap-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#edit-portmap-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">포트맵 정보 수정</h2>
                </div>
                <div class="pop-con">
                    <div class="table-wrap">
                        <table class="table mobile">
                            <caption>
                                '포트맵 기본 정보' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
                            </caption>
                            <colgroup>
                                <col width="26%" />
                                <col width="28%" />
                                <col width="18%" />
                                <col width="28%" />
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
                                        <strong class="color-black mobile-tit">네트워크 장비명 <span class="dis-ib">(호스트명)</span><span class="require"></span></strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" spellcheck="false" name="equipmentName" class="input" id="equipmentName-portmapEdit" placeholder="네트워크 장비명 입력" title="네트워크 장비명" value="ServerFarm_DT_A_007001" />
                                        <p class="mt-05 fs-14 color-semantic-gray">* 자동 입력되는 장비명을 입력해 주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">포트번호<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <input type="number" min="1" max="100" name="portNumber" class="input" placeholder="숫자만" title="포트번호" value="5" />
                                    </td>
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">케이블 종류<span class="require"></span></strong>
                                    </td>
                                    <td>
                                        <span class="input-wrap select">
                                            <select name="cableType" class="input" title="케이블 종류">
                                                <option disabled="" value="">케이블 선택</option>
                                                <option value="UTP">UTP</option>
                                                <option value="Single" selected>Single</option>
                                                <option value="Multi">Multi</option>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="bd-btm">
                                    <td class="bg-lightgray">
                                        <strong class="color-black mobile-tit">서비스명<span class="require"></span></strong>
                                    </td>
                                    <td colspan="3">
                                        <input type="text" spellcheck="false" name="serviceName" class="input" placeholder="서비스명 입력" title="서비스명" value="ServerFarm_L2_SW_007003_P55" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#edit-portmap-pop')">취소</button>
                        <button type="button" class="btn-reject w-6 mb-0" onclick="popOpen('#delete-portmap-pop')">삭제</button>
                        <button
                            type="button"
                            class="btn-done w-6 mb-0"
                            onclick="
                                alert('포트맵이 추가되었습니다.');
                                window.location.reload();
                            "
                        >
                            추가
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 포트맵 정보 수정 -->
        <!-- s: 포트맵 삭제 -->
        <div class="pop" id="delete-portmap-pop">
            <button type="button" class="pop-dim" onclick="popClose('#delete-portmap-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
            <div class="pop-inner short">
                <div class="pop-tit-wrap">
                    <button type="button" class="pop-tit-btn-cls" onclick="popClose('#delete-portmap-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                    <h2 class="pop-tit">포트맵 삭제</h2>
                </div>
                <div class="pop-con">
                    <p class="large">
                        포트맵을 <span class="color-red">삭제</span>하시겠습니까? <br />
                        <span class="color-red">확인</span> 버튼 클릭 시 삭제됩니다.
                    </p>

                    <div class="btn-wrap mt-15 mt-sm-1">
                        <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#delete-portmap-pop')">취소</button>
                        <button
                            type="button"
                            class="btn-reject w-6 mb-0"
                            onclick="
                                alert('포트맵이 삭제되었습니다.');
                                window.location.reload();
                            "
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- e: 포트맵 삭제 -->
    </NuxtLayout>
</template>

<script setup>
// 이 페이지 전용 타이틀과 디자인 세팅만 독립 선언
useHead({
  title: 'Rack 관리 | SKHDC 관리 시스템',
  bodyAttrs: { class: 'main' },
  link: [{ rel: 'stylesheet', type: 'text/css', href: '/css/pages/portmap.css' }],
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

        // 포트맵 추가 - 장비명 자동 입력
        var availableEquipment = ["ServerFarm_L2_SW_007001", "ServerFarm_L2_SW_007002", "ServerFarm_L2_SW_007003", "ServerFarm_L2_SW_007004", "ServerFarm_DT_A_007001", "ServerFarm_DT_A_007006", "ServerFarm_DT_B_007002", "ServerFarm_DT_B_007005"];
        $("#equipmentName-equipmentRegister, #equipmentName-equipmentEdit, #equipmentName-portmapRegister, #equipmentName-portmapEdit").autocomplete({
            source: availableEquipment,
        });
    });
  }
})
</script>