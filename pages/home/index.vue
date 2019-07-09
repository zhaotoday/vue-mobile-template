<template>
  <div class="p-home">
    <c-swiper :items="banners"></c-swiper>
    <div class="c-panel bgc11 u-mb20">
      <h2 class="c-panel__head fs36 u-tac">俱乐部简介</h2>
      <div class="c-panel__body c35 fs28">
        <p>福州泳力游泳俱乐部，以普及游泳为己任，立志于做中国最专业的游泳培训机构，并希望以已之力让热爱游泳的人能通过游泳保持身心健康，实现自我价值。 </p>
        <p>泳力游泳俱乐部，涵盖专业游泳培训和群众游泳培训两个版块，且在两个不同版块整合各自领域的优势资源，实现优势互补，成为游泳培训行业的标杆。</p>
      </div>
    </div>
    <div class="c-panel bgc11 u-mb20">
      <div class="c-panel__head fs36 u-tac">团队介绍</div>
      <div class="c-panel__body c35 fs28">
        <table
          class="c-table bgc11 fs28 u-tac"
          style="margin-bottom: 32rpx;">
          <tr class="c11">
            <th class="w150">职称</th>
            <th class="w150">人数</th>
            <th>备注</th>
          </tr>
          <tr>
            <td class="w150">高级教练</td>
            <td class="w150">7</td>
          </tr>
          <tr>
            <td class="w150">高级教练</td>
            <td class="w150">7</td>
          </tr>
          <tr>
            <td class="w150">高级教练</td>
            <td class="w150">7</td>
          </tr>
          <div class="c-table__together">
            其中： 国家级游泳健将11人， 国家一级运动员33人
          </div>
        </table>
        <p>
          泳力体育，立足于游泳培训市场，集合全国最优质的游泳培训行业师资队伍，在游泳培训领域不同类型（短训、长训、体育中高考、体育特长生等）、不同级别（初级、中级、高级）建立严格的教学标准和测评体系，立志成为国内最为专业的游泳培训标竿企业。
        </p>
      </div>
    </div>
    <div class="c-panel bgc11 u-mb16">
      <div class="c-panel__head fs36 u-tac">新闻动态</div>
      <div
        class="c-panel__body c35 fs28"
        style="padding-bottom: 0;">
        <ul style="margin-top: -20rpx;">
          <li
            v-for="item in 4"
            :key="item"
            class="c-media c-media--sm">
            <img
              class="c-media__image"
              src="http://localhost:88/pages/home/demo2.jpg"
            />
            <div class="c-media__body">
              <h2 class="c-media__title fs30">夏天适合游泳锻炼坚持下来或能赚到这5个益处夏天适合游泳锻炼坚持下来或能赚到这5个益处</h2>
              <div class="c-media__extra c31 fs24">2019.06.21</div>
            </div>
          </li>
          <li class="c-media__more c31 u-tac">
            查看更多
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
