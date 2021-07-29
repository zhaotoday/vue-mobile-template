<template>
  <div class="p-my-phone-number u-pt18">
    <ul class="c-list bg-white fs30">
      <li class="c-list__item">
        <label>手机号</label>
        <div class="c-list__value">139****2340</div>
        <div
          class="c-list__operation fs28"
          :class="cCaptcha.disabled ? 't-gray6' : 't-primary'"
          @click="sendCaptcha"
        >
          {{ cCaptcha.message }}
        </div>
      </li>
      <li class="c-list__item">
        <label>验证码</label>
        <input
          class="c-list__value"
          type="number"
          maxlength="6"
          placeholder-class="t-placeholder"
          placeholder="请输入验证码"
          v-model.trim="cForm.model.captcha"
        />
      </li>
      <li class="c-list__item">
        <label>密码</label>
        <input
          class="c-list__value"
          type="password"
          placeholder-class="t-placeholder"
          placeholder="请输入密码（6-16位字母和数字组合）"
          v-model.trim="cForm.model.password"
        />
      </li>
      <li class="c-list__item">
        <label>确认密码</label>
        <input
          class="c-list__value"
          type="password"
          placeholder-class="t-placeholder"
          placeholder="请确认密码"
          v-model.trim="cForm.model.confirmPassword"
        />
      </li>
    </ul>
    <button
      class="c-button at-bottom w690 h88 u-br8 bg-primary t-white fs32"
      @click="submit"
    >
      注册
    </button>
  </div>
</template>

<script src="./script.js"></script>
