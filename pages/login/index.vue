<template>
  <div class="p-login">
    <div class="b-logo">
      <c-logo></c-logo>
    </div>
    <h2 class="b-title fs32">力软小程序将获取以下授权：</h2>
    <p class="b-desc c31 fs28">获得您的公开信息（昵称、头像等）</p>
    <div class="b-buttons o-grid">
      <div class="o-grid__cell">
        <div
          class="c-button is-block w1 h76 bdc21 c21 fs32"
          style="margin-right: 20rpx;"
          @click="navigateBack">
          拒绝
        </div>
      </div>
      <div class="o-grid__cell">
        <button
          class="c-button is-block w1 h76 bgc21 c11 fs32"
          open-type="getUserInfo"
          style="margin-left: 20rpx;"
          @getuserinfo="getUserInfo">
          允许
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
