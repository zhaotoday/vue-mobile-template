<template>
  <div class="p-login">
    <div class="u-tar u-pr10">
      <div
        class="b-register u-p20 t-primary fs26"
        @click="$wx.navigateTo('/pages/user/register/index')"
      >
        注册账号
      </div>
    </div>
    <div class="b-logo">
      <c-logo name="东街口" :css-classes="{ __icon: ['u-circle'] }" />
    </div>
    <h2 class="b-title fs30 u-tac">该程序将获取以下授权：</h2>
    <p class="b-desc t-gray7 fs28 u-tac">获得您的公开信息（昵称、头像等）</p>
    <div class="b-button">
      <button
        :class="bem.button.big.$"
        class="is-block bg-primary t-white"
        @click="login"
      >
        微信登录
      </button>
    </div>
    <div class="b-login__wrap u-tac">
      <div class="b-login u-p20 t-primary fs26">账号登录</div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
