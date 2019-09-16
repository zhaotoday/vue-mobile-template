<template>
  <div class="p-login">
    <div class="b-logo">
      <c-logo></c-logo>
    </div>
    <h2 class="b-title fs32">泳力俱乐部小程序将获取以下授权：</h2>
    <p class="b-desc c31 fs28">获得您的公开信息（昵称、头像等）</p>
    <button
      class="c-button w650 h88 bgc21 c11 fs32"
      open-type="getUserInfo"
      @getuserinfo="getUserInfo">
      授权登录
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
