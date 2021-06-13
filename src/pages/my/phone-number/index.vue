<template>
  <div class="p-my-phone-number u-pt18">
    <ul class="c-list bg--white fs30">
      <li class="c-list__item">
        <input
          class="c-list__value is-full"
          type="number"
          maxlength="11"
          placeholder-class="c--placeholder"
          placeholder="请填写手机号"
          v-model.trim="cForm.model.phoneNumber"
        />
        <div
          class="c-list__operation fs28"
          :class="cCaptcha.disabled ? 'c--gray6' : 'c--primary'"
          @click="sendCaptcha"
        >
          {{ cCaptcha.message }}
        </div>
      </li>
      <li class="c-list__item">
        <input
          class="c-list__value is-full"
          type="number"
          maxlength="6"
          placeholder-class="c--placeholder"
          placeholder="请填写验证码"
          v-model.trim="cForm.model.captcha"
        />
      </li>
    </ul>
    <button
      class="c-button at-bottom w650 h88 u-br8 bg--primary c--white fs32"
      @click="submit"
    >
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>
