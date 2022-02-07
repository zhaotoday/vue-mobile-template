<template>
  <div class="p-user-phone-number u-pt18">
    <div
      v-if="currentRoute.query.firstBind"
      class="b-tip bg-white t-gray7 fs26"
    >
      应国家法律要求，使用互联网服务需进行账号实名。为保障账号的正常使用，请完成手机号绑定。感谢你的理解和支持。
    </div>
    <ul class="c-list bg-white fs30">
      <li class="c-list__item">
        <label>手机号</label>
        <input
          class="c-list__value"
          type="number"
          maxlength="11"
          placeholder-class="t-placeholder"
          placeholder="请输入手机号"
          v-model.trim="cForm.model.phoneNumber"
          style="width: 380rpx"
        />
        <div
          class="c-list__operation fs28"
          :class="cCaptcha.disabled ? 't-gray6' : 't-primary'"
          @click.stop="sendCaptcha"
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
    </ul>
    <button
      class="c-button at-bottom w690 h88 u-br8 bg-primary t-white fs32"
      @click="submit"
    >
      绑定
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
