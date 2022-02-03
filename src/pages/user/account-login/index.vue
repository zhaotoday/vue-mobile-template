<template>
  <div class="p-user-account-login u-pt18">
    <ul class="c-list bg-white fs30">
      <li class="c-list__item">
        <label>账号</label>
        <input
          class="c-list__value"
          placeholder-class="t-placeholder"
          placeholder="请输入手机号/邮箱"
          v-model.trim="cForm.model.account"
        />
      </li>
      <li class="c-list__item">
        <label>密码</label>
        <input
          class="c-list__value"
          type="password"
          placeholder-class="t-placeholder"
          placeholder="请输入密码"
          v-model.trim="cForm.model.password"
        />
      </li>
    </ul>
    <div class="u-tar u-pr10">
      <div
        class="b-password t-primary u-p20 fs26"
        @click="$wx.navigateTo('/pages/user/password/index')"
      >
        忘记密码？
      </div>
    </div>
    <button
      class="c-button at-bottom w690 h88 u-br8 bg-primary t-white fs32"
      @click="submit"
    >
      登录
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
