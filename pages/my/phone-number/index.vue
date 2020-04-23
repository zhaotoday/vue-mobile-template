<template>
  <div class="p-my-phone-number u-pt18">
    <ul class="c-list bgc11 fs30">
      <li class="c-list__item">
        <input
          class="c-list__value is-full fs32"
          type="number"
          maxlength="11"
          placeholder-class="c36"
          placeholder="请填写手机号"
          v-model.trim="cForm.model.phoneNumber"
        />
        <div
          class="c-list__operation fs28"
          :class="cCaptcha.disabled ? 'c36' : 'c21'"
          @click="sendCaptcha"
        >
          {{ cCaptcha.message }}
        </div>
      </li>
      <li class="c-list__item">
        <input
          class="c-list__value is-full fs32"
          type="number"
          maxlength="6"
          placeholder-class="c36"
          placeholder="请填写验证码"
          v-model.trim="cForm.model.captcha"
        />
      </li>
    </ul>
    <button class="c-button is-bottom w650 h88 bgc21 c11 fs32" @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
