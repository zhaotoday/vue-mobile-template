<template>
  <div class="p-login">
    <div class="b-logo">
      <c-logo name="XXX 小程序" />
    </div>
    <h2 class="b-title fs32">XXX 小程序将获取以下授权：</h2>
    <p class="b-desc c--gray7 fs28">获得您的公开信息（昵称、头像等）</p>
    <div class="b-buttons o-grid">
      <div class="o-grid__cell">
        <div
          class="c-button is-block h76 u-br8 bd--primary c--primary fs32 u-mr20"
          @click="$wx.navigateBack()"
        >
          拒绝
        </div>
      </div>
      <div class="o-grid__cell">
        <!-- #ifdef H5 -->
        <button
          class="c-button is-block h76 u-br8 bg--primary c--white fs32 u-ml20"
          @click="getUserInfo"
        >
          允许
        </button>
        <!-- #endif -->
        <!-- #ifndef H5 -->
        <button
          class="c-button is-block h76 u-br8 bg--primary c--white fs32 u-ml20"
          open-type="getUserInfo"
          @getuserinfo="getUserInfo"
        >
          允许
        </button>
        <!-- #endif -->
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
