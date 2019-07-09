<template>
  <div class="p-bind">
    <div class="c-list bgc11 fs30 u-mt16">
      <div class="c-list__item">
        <input
          class="c-list__value is-full fs32"
          type="number"
          maxlength="11"
          placeholder-class="c32"
          placeholder="请输入要绑定的手机号"
          v-model="cForm.phoneNumber"
        />
        <div
          :class="[ 'b-check-code', 'fs28', { 'is-disabled': cCheckCode.disabled } ]"
          @click="handleGetCheckCode">
          {{ cCheckCode.message }}
        </div>
      </div>
      <div class="c-list__item">
        <input
          class="c-list__value is-full fs32"
          type="number"
          maxlength="6"
          placeholder-class="c32"
          placeholder="请输入验证码"
          v-model="cForm.checkCode"
        />
      </div>
    </div>
    <button
      class="c-button is-foot w650 h88 bgc21 c11 fs32"
      @click="confirm">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
