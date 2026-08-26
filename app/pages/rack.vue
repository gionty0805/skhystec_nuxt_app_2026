<!-- app/pages/rack.vue -->
<template>
  <!-- 🟢 레이아웃 시스템을 호출하여 자동으로 공통 헤더/푸터/세션감시망을 상속받습니다. -->
  <NuxtLayout name="sidebar">
    <section class="content">
        <div class="content-top">
            <h3 class="content-tit">Rack 관리</h3>

            <div class="category-tab-wrap mt-05 fs-sm-09375">
                <div class="category-tab-inner">
                    <button type="button" class="btn-datacenter category-tab active" onclick="changeDatacenter(this)" data-datacenter="1">SKHDC2</button>
                    <button type="button" class="btn-datacenter category-tab" onclick="changeDatacenter(this)" data-datacenter="2">통신실</button>
                </div>
            </div>
        </div>

        <div class="rack-wrap">
            <!-- // SKHDC2 -->
            <div class="rack-inner active" id="rack-inner-1">
                <!-- // 구역 안내 -->
                <div class="rack-area area-G" data-area="G">
                    <p class="rack-area-tit">G</p>
                </div>
                <div class="rack-area area-F" data-area="F">
                    <p class="rack-area-tit">F</p>
                </div>
                <div class="rack-area area-E" data-area="E">
                    <p class="rack-area-tit">E</p>
                </div>
                <div class="rack-area area-D" data-area="D">
                    <p class="rack-area-tit">D</p>
                </div>
                <div class="rack-area area-C" data-area="C">
                    <p class="rack-area-tit">C</p>
                </div>
                <div class="rack-area area-B" data-area="B">
                    <p class="rack-area-tit">B</p>
                </div>
                <div class="rack-area area-A" data-area="A">
                    <p class="rack-area-tit">A</p>
                </div>

                <div class="rack-hr"></div>

                <!-- // f -->
                <div class="rack-line">
                    <p class="rack-line-tit left">f</p>
                    <p class="rack-line-tit right">f</p>
                    <!-- // Gf -->
                    <div class="rack" data-area="G" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                            <p class="rack-name">Gf11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="G" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                            <p class="rack-name">Gf10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Gf09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                            <p class="rack-name">Ge08</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                            <p class="rack-name">Gf07</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                            <p class="rack-name">Gf06</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="G" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                            <p class="rack-name">Gf05</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                            <p class="rack-name">Gf04</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                            <p class="rack-name">Gf03</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Gf02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="G" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Gf01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ff -->
                    <div class="rack margin-left" data-area="F" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                            <p class="rack-name">Ff11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                            <p class="rack-name">Ff10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Ff09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                            <p class="rack-name">Ff08</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                            <p class="rack-name">Ff07</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                            <p class="rack-name">Ff06</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                            <p class="rack-name">Ff05</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                            <p class="rack-name">Ff04</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                            <p class="rack-name">Ff03</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Ff02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Ff01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ef -->
                    <div class="rack margin-left disabled" data-area="E" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>

                    <!-- // Df -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cf -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Bf -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="B" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Af -->
                    <div class="rack margin-left disabled" data-area="A" data-line="f" data-num="12">
                        <div class="face front">
                            <p class="rack-num">12</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <!-- // e -->
                <div class="rack-line">
                    <p class="rack-line-tit left">e</p>
                    <p class="rack-line-tit right">e</p>
                    <!-- // Ge -->
                    <div class="rack bin-Ge disabled bin dot"></div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Ge09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                            <p class="rack-name">Ge08</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                            <p class="rack-name">Ge07</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                            <p class="rack-name">Ge06</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge dot" data-area="G" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                            <p class="rack-name">Ge05</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                            <p class="rack-name">Ge04</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                            <p class="rack-name">Ge03</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Ge02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge dot" data-area="G" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Ge01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Fe -->
                    <div class="rack disabled margin-left" data-area="F" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Fe02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Fe01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ee -->
                    <div class="rack margin-left disabled" data-area="E" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // De -->
                    <div class="rack margin-left disabled" data-area="D" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ce -->
                    <div class="rack margin-left disabled" data-area="C" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Be -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ae -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <div class="rack-hr"></div>

                <!-- // d -->
                <div class="rack-line">
                    <p class="rack-line-tit left">d</p>
                    <p class="rack-line-tit right">d</p>
                    <!-- // Gd -->
                    <div class="rack disabled bin"></div>
                    <div class="rack dot" data-area="G" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                            <p class="rack-name">Gd10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Gd09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>

                    <!-- // Fd -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="F" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ed -->
                    <div class="rack margin-left disabled" data-area="E" data-line="d" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Dd -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cd -->
                    <div class="rack margin-left disabled" data-area="C" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Bd -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="B" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ad -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <!-- // c -->
                <div class="rack-line">
                    <p class="rack-line-tit left">c</p>
                    <p class="rack-line-tit right">c</p>
                    <!-- // Gc -->
                    <div class="rack disabled" data-area="G" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="G" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Fc -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="F" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ec -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Dc -->
                    <div class="rack margin-left disabled" data-area="D" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cc -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="C" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Bc -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ac -->
                    <div class="rack margin-left disabled" data-area="A" data-line="c" data-num="12">
                        <div class="face front">
                            <p class="rack-num">12</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <div class="rack-hr"></div>

                <!-- // b -->
                <div class="rack-line">
                    <p class="rack-line-tit left">b</p>
                    <p class="rack-line-tit right">b</p>
                    <!-- // Gb -->
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="G" data-line="b" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="b" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="b" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="b" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="b" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="b" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="b" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="b" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Fb -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="F" data-line="b" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="b" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="b" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="b" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Eb -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="b" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="b" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="b" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Db -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="b" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="b" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="b" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="b" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cb -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>

                    <!-- // Bb -->
                    <div class="rack margin-left disabled" data-area="B" data-line="b" data-num="12">
                        <div class="face front">
                            <p class="rack-num">12</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="b" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="b" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="b" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="b" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ab -->
                    <div class="rack margin-left disabled" data-area="A" data-line="b" data-num="12">
                        <div class="face front">
                            <p class="rack-num">12</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="b" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="b" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="b" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <!-- // a -->
                <div class="rack-line">
                    <p class="rack-line-tit left">a</p>
                    <p class="rack-line-tit right">a</p>
                    <!-- // Ga -->
                    <div class="rack disabled" data-area="G" data-line="a" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="a" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="G" data-line="a" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="a" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="a" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="a" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="a" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="a" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="a" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Fa -->
                    <div class="rack disabled margin-left" data-area="F" data-line="a" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="a" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="a" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="a" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="a" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ea -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="E" data-line="a" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="a" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="a" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="a" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Da -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="a" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="a" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="a" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="D" data-line="a" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="a" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="a" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="a" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="a" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="a" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ca -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>

                    <!-- // Ba -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="a" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="B" data-line="a" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="a" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="a" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Aa -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                </div>

                <div class="rack-hr"></div>

                <!-- // 구역 안내 -->
                <div class="rack-area area-G" data-area="G">
                    <p class="rack-area-tit">G</p>
                </div>
                <div class="rack-area area-F" data-area="F">
                    <p class="rack-area-tit">F</p>
                </div>
                <div class="rack-area area-E" data-area="E">
                    <p class="rack-area-tit">E</p>
                </div>
                <div class="rack-area area-D" data-area="D">
                    <p class="rack-area-tit">D</p>
                </div>
                <div class="rack-area area-C" data-area="C">
                    <p class="rack-area-tit">C</p>
                </div>
                <div class="rack-area area-B" data-area="B">
                    <p class="rack-area-tit">B</p>
                </div>
                <div class="rack-area area-A" data-area="A">
                    <p class="rack-area-tit">A</p>
                </div>
            </div>

            <!-- // 통신실 -->
            <div class="rack-inner" id="rack-inner-2">
                <!-- // 구역 안내 -->
                <div class="rack-area area-G" data-area="G">
                    <p class="rack-area-tit">G</p>
                </div>
                <div class="rack-area area-F" data-area="F">
                    <p class="rack-area-tit">F</p>
                </div>
                <div class="rack-area area-E" data-area="E">
                    <p class="rack-area-tit">E</p>
                </div>
                <div class="rack-area area-D" data-area="D">
                    <p class="rack-area-tit">D</p>
                </div>
                <div class="rack-area area-C" data-area="C">
                    <p class="rack-area-tit">C</p>
                </div>
                <div class="rack-area area-B" data-area="B">
                    <p class="rack-area-tit">B</p>
                </div>
                <div class="rack-area area-A" data-area="A">
                    <p class="rack-area-tit">A</p>
                </div>

                <div class="rack-hr"></div>

                <!-- // f -->
                <div class="rack-line">
                    <p class="rack-line-tit left">f</p>
                    <p class="rack-line-tit right">f</p>
                    <!-- // Gf -->
                    <div class="rack" data-area="G" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                            <p class="rack-name">Gf11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="G" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                            <p class="rack-name">Gf10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Gf09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                            <p class="rack-name">Ge08</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                            <p class="rack-name">Gf07</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                            <p class="rack-name">Gf06</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="G" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                            <p class="rack-name">Gf05</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                            <p class="rack-name">Gf04</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                            <p class="rack-name">Gf03</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Gf02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="G" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Gf01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ff -->
                    <div class="rack margin-left" data-area="F" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                            <p class="rack-name">Ff11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                            <p class="rack-name">Ff10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Ff09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                            <p class="rack-name">Ff08</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                            <p class="rack-name">Ff07</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                            <p class="rack-name">Ff06</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                            <p class="rack-name">Ff05</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                            <p class="rack-name">Ff04</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                            <p class="rack-name">Ff03</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Ff02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Ff01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ef -->
                    <div class="rack margin-left disabled" data-area="E" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>

                    <!-- // Df -->
                    <div class="rack margin-left disabled bin dot"></div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cf -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Bf -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="B" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Af -->
                    <div class="rack margin-left disabled" data-area="A" data-line="f" data-num="12">
                        <div class="face front">
                            <p class="rack-num">12</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="f" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="f" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="f" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="f" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <!-- // e -->
                <div class="rack-line">
                    <p class="rack-line-tit left">e</p>
                    <p class="rack-line-tit right">e</p>
                    <!-- // Ge -->
                    <div class="rack bin-Ge disabled bin dot"></div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Ge09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                            <p class="rack-name">Ge08</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                            <p class="rack-name">Ge07</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                            <p class="rack-name">Ge06</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge dot" data-area="G" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                            <p class="rack-name">Ge05</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                            <p class="rack-name">Ge04</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                            <p class="rack-name">Ge03</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge" data-area="G" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Ge02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack wide-Ge dot" data-area="G" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Ge01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Fe -->
                    <div class="rack disabled margin-left" data-area="F" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="F" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="F" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                            <p class="rack-name">Fe02</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack dot" data-area="F" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                            <p class="rack-name">Fe01</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ee -->
                    <div class="rack margin-left disabled" data-area="E" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // De -->
                    <div class="rack margin-left disabled" data-area="D" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ce -->
                    <div class="rack margin-left disabled" data-area="C" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Be -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ae -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="e" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="e" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="e" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="e" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <div class="rack-hr"></div>

                <!-- // d -->
                <div class="rack-line">
                    <p class="rack-line-tit left">d</p>
                    <p class="rack-line-tit right">d</p>
                    <!-- // Gd -->
                    <div class="rack disabled bin"></div>
                    <div class="rack dot" data-area="G" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                            <p class="rack-name">Gd10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack" data-area="G" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                            <p class="rack-name">Gd09</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>

                    <!-- // Fd -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="F" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ed -->
                    <div class="rack margin-left disabled" data-area="E" data-line="d" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Dd -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cd -->
                    <div class="rack margin-left disabled" data-area="C" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Bd -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="B" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="d" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ad -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="d" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="d" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="d" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <!-- // c -->
                <div class="rack-line">
                    <p class="rack-line-tit left">c</p>
                    <p class="rack-line-tit right">c</p>
                    <!-- // Gc -->
                    <div class="rack disabled" data-area="G" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="G" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="G" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="G" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Fc -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled dot" data-area="F" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="F" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="F" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ec -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin dot"></div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="E" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="E" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Dc -->
                    <div class="rack margin-left disabled" data-area="D" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="D" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="D" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="D" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Cc -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled dot" data-area="C" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="C" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="C" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Bc -->
                    <div class="rack margin-left disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="8">
                        <div class="face front">
                            <p class="rack-num">8</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="4">
                        <div class="face front">
                            <p class="rack-num">4</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="B" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="B" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>

                    <!-- // Ac -->
                    <div class="rack margin-left disabled" data-area="A" data-line="c" data-num="12">
                        <div class="face front">
                            <p class="rack-num">12</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="11">
                        <div class="face front">
                            <p class="rack-num">11</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="c" data-num="10">
                        <div class="face front">
                            <p class="rack-num">10</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="9">
                        <div class="face front">
                            <p class="rack-num">9</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="7">
                        <div class="face front">
                            <p class="rack-num">7</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="6">
                        <div class="face front">
                            <p class="rack-num">6</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="c" data-num="5">
                        <div class="face front">
                            <p class="rack-num">5</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled bin"></div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="3">
                        <div class="face front">
                            <p class="rack-num">3</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled" data-area="A" data-line="c" data-num="2">
                        <div class="face front">
                            <p class="rack-num">2</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                    <div class="rack disabled dot" data-area="A" data-line="c" data-num="1">
                        <div class="face front">
                            <p class="rack-num">1</p>
                        </div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <div class="rack-hr"></div>

                <!-- // 구역 안내 -->
                <div class="rack-area area-G" data-area="G">
                    <p class="rack-area-tit">G</p>
                </div>
                <div class="rack-area area-F" data-area="F">
                    <p class="rack-area-tit">F</p>
                </div>
                <div class="rack-area area-E" data-area="E">
                    <p class="rack-area-tit">E</p>
                </div>
                <div class="rack-area area-D" data-area="D">
                    <p class="rack-area-tit">D</p>
                </div>
                <div class="rack-area area-C" data-area="C">
                    <p class="rack-area-tit">C</p>
                </div>
                <div class="rack-area area-B" data-area="B">
                    <p class="rack-area-tit">B</p>
                </div>
                <div class="rack-area area-A" data-area="A">
                    <p class="rack-area-tit">A</p>
                </div>
            </div>
        </div>
    </section>
    <button type="button" class="btn-top" id="btn-top" onclick="moveTop()"><span class="el-hid">스크롤 위로 이동</span></button>

    <!-- s: Rack 상세 정보 -->
    <div class="pop wide" id="rack-pop">
        <button type="button" class="pop-dim" onclick="popClose('#rack-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
        <div class="pop-inner w-max-840">
            <div class="pop-tit-wrap">
                <button type="button" class="pop-tit-btn-cls" onclick="popClose('#rack-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                <h2 class="pop-tit">Rack 상세 정보</h2>
            </div>
            <div class="pop-con">
                <div class="rack-detail-con">
                    <div class="rack-detail-wrap">
                        <div class="onM dis-fx jc-sb ai-btm">
                            <h3 class="fs-1125">SKHDC2 - Gf04</h3>
                            <div>
                                <button type="button" class="btn-line-gray ml-025 fs-14 pd-075_1" onclick="popOpen('#inflow-register-pop')"><span>장비 반입</span></button>
                            </div>
                        </div>
                        <div class="rack-detail mt-sm-075">
                            <table class="table rack-detail-table fs-14 ta-center">
                                <caption>
                                    표 제목: Rack 장비 목록 / 구성: 탑재 위치, 장비 상태
                                </caption>
                                <colgroup>
                                    <col width="10%" />
                                    <col width="80%" />
                                    <col width="10%" />
                                </colgroup>
                                <thead class="el-hid">
                                    <tr>
                                        <th>탑재 위치</th>
                                        <th>장비 상태</th>
                                        <th>탑재 위치</th>
                                    </tr>
                                </thead>
                                <tbody class="btn">
                                    <!-- 장비가 없는 경우 -->
                                    <tr tabindex="0" class="bd-btm middle" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num mark">40</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num mark">40</td>
                                    </tr>

                                    <!-- 장비가 있는 경우 -->
                                    <tr tabindex="0" onclick="popOpen('#detail-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop');">
                                        <td class="rack-detail-num">39</td>
                                        <td class="rack-detail-btn">
                                            <div class="rack-detail-btn-status">
                                                <div class="dot green"></div>
                                                <div class="dot yellow"></div>
                                                <div class="dot red"></div>
                                            </div>
                                        </td>
                                        <td class="rack-detail-num">39</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#detail-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop');">
                                        <td class="rack-detail-num">38</td>
                                        <td class="rack-detail-btn warning">
                                            <div class="rack-detail-btn-status">
                                                <div class="dot green"></div>
                                                <div class="dot yellow"></div>
                                                <div class="dot red"></div>
                                            </div>
                                        </td>
                                        <td class="rack-detail-num">38</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#detail-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop');">
                                        <td class="rack-detail-num">37</td>
                                        <td class="rack-detail-btn danger">
                                            <div class="rack-detail-btn-status">
                                                <div class="dot green"></div>
                                                <div class="dot yellow"></div>
                                                <div class="dot red"></div>
                                            </div>
                                        </td>
                                        <td class="rack-detail-num">37</td>
                                    </tr>

                                    <!-- 장비가 없는 경우 -->
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">36</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">36</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">35</td>
                                        <td rowspan="2" class="rack-detail-btn">
                                            <div class="rack-detail-btn-status">
                                                <div class="dot green"></div>
                                                <div class="dot yellow"></div>
                                                <div class="dot red"></div>
                                            </div>
                                        </td>
                                        <td class="rack-detail-num">35</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">34</td>
                                        <!-- <td class="rack-detail-btn bin"></td> -->
                                        <td class="rack-detail-num">34</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">33</td>
                                        <td class="rack-detail-btn">
                                            <div class="rack-detail-btn-status">
                                                <div class="dot green"></div>
                                                <div class="dot yellow"></div>
                                                <div class="dot red"></div>
                                            </div>
                                        </td>
                                        <td class="rack-detail-num">33</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">32</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">32</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">31</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">31</td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num mark">30</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num mark">30</td>
                                    </tr>

                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">29</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">29</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">28</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">28</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">27</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">27</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">26</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">26</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">25</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">25</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">24</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">24</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">23</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">23</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">22</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">22</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">21</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">21</td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num mark">20</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num mark">20</td>
                                    </tr>

                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">19</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">19</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">18</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">18</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">17</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">17</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">16</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">16</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">15</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">15</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">14</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">14</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">13</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">13</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">12</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">12</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">11</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">11</td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num mark">10</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num mark">10</td>
                                    </tr>

                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">9</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">9</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">8</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">8</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">7</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">7</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">6</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">6</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">5</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">5</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">4</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">4</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">3</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">3</td>
                                    </tr>
                                    <tr tabindex="0" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num">2</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num">2</td>
                                    </tr>
                                    <tr tabindex="0" class="bd-btm middle" onclick="popOpen('#inflow-register-pop')" onkeypress="if (window.event.keyCode == 13) popOpen('#inflow-register-pop');">
                                        <td class="rack-detail-num mark">1</td>
                                        <td class="rack-detail-btn bin"></td>
                                        <td class="rack-detail-num mark">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="rack-detail-info">
                        <div class="onW dis-fx jc-sb">
                            <h3 class="fs-125">SKHDC2 - Gf04</h3>
                            <div>
                                <button type="button" class="btn-line-gray ml-025 fs-14 pd-075_1" onclick="popOpen('#inflow-register-pop')"><span>장비 반입</span></button>
                            </div>
                        </div>
                        <div class="table-wrap mt-075">
                            <table class="table fs-14 ta-center">
                                <caption>
                                    표 제목: Rack 장비 목록 / 구성: 탑재 위치, 장비 크기, 모델, 장비 종류, Hydesk 번호, S/N, 용도, 장비 상태
                                </caption>
                                <thead class="bg-lightgray">
                                    <tr>
                                        <th>탑재 위치</th>
                                        <th>장비 크기</th>
                                        <th class="bd-left">모델</th>
                                        <th>장비 종류</th>
                                        <th>Hydesk 번호</th>
                                        <th>S/N</th>
                                        <th>용도</th>
                                        <th>장비 상태</th>
                                    </tr>
                                </thead>
                                <tbody class="btn">
                                    <!-- 데이터가 없는 경우 -->
                                    <tr>
                                        <td colspan="8" class="null-large">
                                            <p>해당 Rack에 등록된 장비가 없습니다.</p>
                                            <p>상단 [장비 반입] 버튼 클릭 혹은 Rack 목록의 빈칸을 클릭하여 장비 반입을 진행해 주세요.</p>
                                        </td>
                                    </tr>

                                    <!-- Rack 장비 목록 -->
                                    <tr tabindex="0" id="data-38" onclick="popOpen('#detail-pop', '#data-38')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-38');">
                                        <td><strong>38</strong></td>
                                        <td>1</td>

                                        <td class="bd-left-gray-5">MPX8905</td>
                                        <td>네트워크</td>
                                        <td></td>
                                        <td>6KZS1DD52Z</td>
                                        <td class="long">L4 #1</td>

                                        <!-- // 장비 상태 -->
                                        <td class="color-semantic-green"><span class="rack-detail-status"></span> 원활</td>
                                        <!-- <td class="color-semantic-red"><span class="rack-detail-status"></span> 이상</td> -->
                                    </tr>
                                    <tr tabindex="0" class="bg-lightred" id="data-36" onclick="popOpen('#detail-pop', '#data-36')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-36');">
                                        <td><strong>36</strong></td>
                                        <td>1</td>

                                        <td class="bd-left-gray-5">MPX8905</td>
                                        <td>네트워크</td>
                                        <td></td>
                                        <td>6KZS1DD52Z</td>
                                        <td class="long">L4 #2</td>

                                        <!-- // 장비 상태 -->
                                        <!-- <td class="color-semantic-green"><span class="rack-detail-status"></span> 원활</td> -->
                                        <td class="color-semantic-red"><span class="rack-detail-status"></span> 이상</td>
                                    </tr>
                                    <tr tabindex="0" id="data-35" onclick="popOpen('#detail-pop', '#data-35')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-35');">
                                        <td><strong>35</strong></td>
                                        <td>1</td>

                                        <td class="bd-left-gray-5">MPX8905</td>
                                        <td>네트워크</td>
                                        <td></td>
                                        <td>6KZS1DD52Z</td>
                                        <td class="long">L4 #3</td>

                                        <!-- // 장비 상태 -->
                                        <td class="color-semantic-green"><span class="rack-detail-status"></span> 원활</td>
                                        <!-- <td class="color-semantic-red"><span class="rack-detail-status"></span> 이상</td> -->
                                    </tr>
                                    <tr tabindex="0" id="data-34" onclick="popOpen('#detail-pop', '#data-34')" onkeypress="if (window.event.keyCode == 13) popOpen('#detail-pop', '#data-34');">
                                        <td><strong>34</strong></td>
                                        <td>1</td>

                                        <td class="bd-left-gray-5">MPX8905</td>
                                        <td>네트워크</td>
                                        <td></td>
                                        <td>6KZS1DD52Z</td>
                                        <td class="long">ServerFarm_L2_SW_007004_P55</td>

                                        <!-- // 장비 상태 -->
                                        <td class="color-semantic-green"><span class="rack-detail-status"></span> 원활</td>
                                        <!-- <td class="color-semantic-red"><span class="rack-detail-status"></span> 이상</td> -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="btn-wrap mt-2 mt-sm-15">
                    <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#rack-pop')">닫기</button>
                </div>
            </div>
        </div>
    </div>
    <!-- e: Rack 상세 정보 -->

    <!-- s: 장비 상세 정보 -->
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
                                    <strong class="color-black mobile-tit">Rack No. <span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap select">
                                        <select name="rackNumber" class="input" title="Rack No.">
                                            <option disabled="" value="" selected="">Rack No. 선택</option>
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
                                    <strong class="color-black mobile-tit">장비 크기<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="number" min="1" max="100" name="rackUnit" class="input" placeholder="장비 크기 입력(숫자만)" title="장비 크기" value="1" />
                                </td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">탑재 타입<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="requesterName" class="input" placeholder="탑재 타입 입력" title="탑재 타입" value="일반" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">탑재 위치<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="number" min="0" max="100" name="rackLocation" class="input" placeholder="탑재 위치 입력(숫자만)" title="탑재 위치" value="24" />
                                </td>
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
                                    <strong class="color-black mobile-tit">장비 종류<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap select">
                                        <select name="type" class="input" title="장비 종류">
                                            <option disabled="" value="" selected="">장비 종류 선택</option>
                                            <option value="시스템" selected="">시스템</option>
                                            <option value="네트워크">네트워크</option>
                                        </select>
                                    </span>
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">지역<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap select">
                                        <select name="location" class="input" title="지역">
                                            <option disabled="" value="" selected="">지역 선택</option>
                                            <option value="이천" selected="">이천</option>
                                            <option value="청주">청주</option>
                                            <option value="분당">분당</option>
                                            <option value="용인">용인</option>
                                        </select>
                                    </span>
                                </td>
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap select">
                                        <select name="datacenter" class="input" title="데이터 센터">
                                            <option disabled="" value="" selected="">데이터 센터 선택</option>
                                            <option value="SKHDC2" selected="">SKHDC2</option>
                                            <option value="통신실">통신실</option>
                                        </select>
                                    </span>
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">분전반</strong>
                                </td>
                                <td>
                                    <input type="text" name="panel" class="input" placeholder="분전반 입력" title="분전반" value="P-B2-602/Pu-6F-6A #32" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Vendor<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverVendor" class="input" placeholder="Vendor 입력" title="Vendor" value="DellEMC" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Type<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap select">
                                        <select name="datacenter" class="input" title="Type">
                                            <option disabled="" value="" selected="">Type 선택</option>
                                            <option value="Server" selected="">Server</option>
                                            <option value="Switch">Switch</option>
                                        </select>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">용도<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverUsage" class="input" placeholder="용도 입력" title="용도" value="ITSM 및 형상관리" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Model<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverModel" class="input" placeholder="Model 입력" title="Model" value="PE_R450" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Hostname<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="hostname" class="input" placeholder="Hostname 입력" title="Hostname" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">CPU<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="cpu" class="input" placeholder="CPU 입력" title="CPU" />
                                </td>
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Memory<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="memory" class="input" placeholder="Memory 입력" title="Memory" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">OS<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="os" class="input" placeholder="OS 입력" title="OS" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">운영자<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="managerName" class="input" placeholder="운영자 성명 입력" title="운영자 성명" value="홍길동" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">서버 관리자<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverManagerName" class="input" placeholder="서버 관리자 성명 입력" title="서버 관리자 성명" value="홍길동" />
                                </td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">비고</strong>
                                </td>
                                <td colspan="3">
                                    <input type="text" name="memo" class="input" placeholder="비고 입력" title="비고" />
                                </td>
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
                                <td>
                                    <input type="text" name="erp" class="input" placeholder="ERP 번호 입력" title="ERP 번호" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Hydesk 번호</strong>
                                </td>
                                <td>
                                    <input type="text" name="hydesk" class="input" placeholder="Hydesk 번호 입력" title="Hydesk 번호" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">설치일</strong>
                                </td>
                                <td>
                                    <input type="text" name="installationDate" class="input" id="day" placeholder="yyyy-mm-dd" title="설치일" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">RFID Code</strong>
                                </td>
                                <td>
                                    <input type="text" name="rfidCode" class="input" placeholder="RFID Code 입력" title="RFID Code" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">자산 관리자</strong>
                                </td>
                                <td>
                                    <input type="text" name="assetManagerName" class="input" placeholder="자산 관리자 입력" title="자산 관리자" value="김자산" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">S/N</strong>
                                </td>
                                <td>
                                    <input type="text" name="serverSN" class="input" placeholder="S/N 입력" title="S/N" value="9LKJFR3" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">취득일자</strong>
                                </td>
                                <td>
                                    <input type="text" name="acquisitionDate" class="input" id="pop-day" placeholder="yyyy-mm-dd" title="취득일자" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">감가상각연한</strong>
                                </td>
                                <td>
                                    <input type="text" name="depreciationPeriod" class="input" placeholder="감가상각연한 입력" title="감가상각연한" />
                                </td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Description</strong>
                                </td>
                                <td colspan="3">
                                    <input type="text" name="description" class="input" placeholder="Description 입력" title="Description" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="btn-wrap mt-15 mt-sm-1">
                    <button
                        type="button"
                        class="btn-reject mb-0"
                        onclick="
                            popClose('#detail-pop');
                            popOpen('#outflow-register-pop');
                        "
                    >
                        반출 요청
                    </button>
                    <button
                        type="button"
                        class="btn-done mb-0"
                        onclick="
                            alert('장비 정보가 저장되었습니다.');
                            window.location.reload();
                        "
                    >
                        저장
                    </button>
                    <button type="button" class="btn-cancel mb-0" onclick="popClose('#detail-pop')">닫기</button>
                </div>
            </div>
        </div>
    </div>
    <!-- e: 장비 상세 정보 -->

    <!-- s: 장비 반입 요청 -->
    <div class="pop large" id="inflow-register-pop">
        <button type="button" class="pop-dim" onclick="popClose('#inflow-register-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
        <div class="pop-inner">
            <div class="pop-tit-wrap">
                <button type="button" class="pop-tit-btn-cls" onclick="popClose('#inflow-register-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                <h2 class="pop-tit">장비 반입 요청</h2>
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

                <div class="table-wrap mt-1">
                    <table class="table mobile">
                        <caption>
                            '장비 반입 요청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                    <strong class="color-black mobile-tit">입고 예정일<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap date">
                                        <input type="text" name="requestDate" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="inflow-day" title="입고 예정일(yyyy-mm-dd)" />
                                    </span>
                                    <p class="mt-05 fs-14">* 입고 예정일 <strong class="color-red">2일 전</strong>까지 신청 필수</p>
                                </td>
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">요청자<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="requesterName" class="input" placeholder="요청자 성명 입력" title="요청자 성명" value="홍길동" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">서버 관리자<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="managerName" class="input" placeholder="서버 관리자 성명 입력" title="서버 관리자 성명" value="홍길동" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">데이터 센터<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap select">
                                        <select name="datacenter" class="input" title="데이터 센터">
                                            <option disabled="" value="" selected="">데이터 센터 선택</option>
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
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">탑재 위치<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="number" min="0" max="100" name="rackLocation" class="input" placeholder="탑재 위치 입력(숫자만)" title="탑재 위치" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">장비 크기<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="number" min="1" max="100" name="rackUnit" class="input" placeholder="장비 크기 입력(숫자만)" title="장비 크기" value="1" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Vendor<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverVendor" class="input" placeholder="Vendor 입력" title="Vendor" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Model<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverModel" class="input" placeholder="Model 입력" title="Model" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">용도<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverUsage" class="input" placeholder="용도 입력" title="용도" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">S/N<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverSN" class="input" placeholder="S/N 입력" title="S/N" />
                                </td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">IP<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverIP" class="input" placeholder="IP 입력" title="IP" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">서비스 명<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serviceName" class="input" placeholder="서비스 명 입력" title="서비스 명" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="btn-wrap mt-15 mt-sm-1">
                    <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#inflow-register-pop')">취소</button>
                    <button
                        type="button"
                        class="btn-done w-6 mb-0"
                        onclick="
                            alert('장비 반입 요청이 완료되었습니다.');
                            window.location.reload();
                        "
                    >
                        요청
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- e: 장비 반입 요청 -->
    <!-- s: 장비 반출 요청 -->
    <div class="pop large" id="outflow-register-pop">
        <button type="button" class="pop-dim" onclick="popClose('#outflow-register-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
        <div class="pop-inner">
            <div class="pop-tit-wrap">
                <button type="button" class="pop-tit-btn-cls" onclick="popClose('#outflow-register-pop')"><span class="el-hid">팝업 닫기 버튼</span></button>
                <h2 class="pop-tit">장비 반출 요청</h2>
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

                <div class="table-wrap mt-1">
                    <table class="table mobile">
                        <caption>
                            '장비 반출 요청' 표로 구분, 내용, 구분, 내용으로 구성되어 있습니다.
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
                                    <strong class="color-black mobile-tit">반출 예정일<span class="require"></span></strong>
                                </td>
                                <td>
                                    <span class="input-wrap date">
                                        <input type="text" name="requestDate" placeholder="yyyy-mm-dd" autocomplete="off" class="input" id="outflow-day" title="반출 예정일(yyyy-mm-dd)" />
                                    </span>
                                    <p class="mt-05 fs-14">* 반출 예정일 <strong class="color-red">2일 전</strong>까지 신청 필수</p>
                                </td>
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">요청자<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="requesterName" class="input" placeholder="요청자 성명 입력" title="요청자 성명" value="홍길동" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">서버 관리자<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="managerName" class="input" placeholder="서버 관리자 성명 입력" title="서버 관리자 성명" value="홍길동" />
                                </td>
                            </tr>
                            <tr>
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
                            </tr>
                            <tr class="bd-btm middle">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">탑재 위치<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="number" min="0" max="100" name="rackLocation" class="input" placeholder="탑재 위치 입력(숫자만)" title="탑재 위치" value="24" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">장비 크기<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="number" min="1" max="100" name="rackUnit" class="input" placeholder="장비 크기 입력(숫자만)" title="장비 크기" value="1" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Vendor<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverVendor" class="input" placeholder="Vendor 입력" title="Vendor" value="DellEMC" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">Model<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverModel" class="input" placeholder="Model 입력" title="Model" value="PE_R450" />
                                </td>
                            </tr>
                            <tr>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">용도<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverUsage" class="input" placeholder="용도 입력" title="용도" value="ITSM 및 형상관리" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">S/N<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverSN" class="input" placeholder="S/N 입력" title="S/N" value="9LKJFR3" />
                                </td>
                            </tr>
                            <tr class="bd-btm">
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">IP<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serverIP" class="input" placeholder="IP 입력" title="IP" />
                                </td>
                                <td class="bg-lightgray">
                                    <strong class="color-black mobile-tit">서비스 명<span class="require"></span></strong>
                                </td>
                                <td>
                                    <input type="text" name="serviceName" class="input" placeholder="서비스 명 입력" title="서비스 명" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="btn-wrap mt-15 mt-sm-1">
                    <button type="button" class="btn-cancel w-6 mb-0" onclick="popClose('#outflow-register-pop')">취소</button>
                    <button
                        type="button"
                        class="btn-done w-6 mb-0"
                        onclick="
                            alert('장비 반출 요청이 완료되었습니다.');
                            window.location.reload();
                        "
                    >
                        요청
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- e: 장비 반출 요청 -->
  </NuxtLayout>
</template>

<script setup>
// 이 페이지 전용 타이틀과 디자인 세팅만 독립 선언
useHead({
  title: 'Rack 관리 | SKHDC 관리 시스템',
  link: [{ rel: 'stylesheet', type: 'text/css', href: '/css/pages/rack.css' }],
  //script: [
  //  { src: '/js/pages/rack.js', defer: true }
  //]
})
// 🟢 [철통 방어막 적용] 오직 브라우저 환경(Client)이 준비 완료된 시점에만 실행하도록 격리합니다.
onMounted(() => {
  if (process.client) {
    
    $(document).ready(function () {
        $("#inflow-day, #outflow-day").datepicker({
            ...datepicker_setting,
            minDate: "+2d",
            beforeShowDay: $.datepicker.noWeekends,
        });
        $("#inflow-day, #outflow-day").datepicker("setDate", getBusinessDate(2));
    });
    nextTick(() => {
      if (document.getElementById('nuxt-rack-script')) return

      const script = document.createElement('script')
      script.id = 'nuxt-rack-script'
      script.src = '/js/pages/rack.js'
      script.defer = true
      document.head.appendChild(script)
      console.log('🖥️ HTML 태그 부착이 완벽히 끝난 직후 스크립트 바인딩 완료')
    })
  }
  
})
</script>