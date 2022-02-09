<template>
  <div class="p-user-phone-number u-pt30">
    <div
      v-if="currentRoute.query.firstBind"
      class="t-g7 fs26 u-pl30 u-pr30 u-pb30"
    >
      应国家法律要求，使用互联网服务需进行账号实名。为保障账号的正常使用，请完成手机号绑定。感谢你的理解和支持。
    </div>
    <c-form>
      <c-form-item label="手机号">
        <c-form-input
          type="number"
          maxlength="11"
          placeholder="请输入手机号"
          v-model.trim="cForm.model.phoneNumber"
          :error="cForm.errors.phoneNumber"
          @blur="validate(cForm, 'phoneNumber')"
        />
      </c-form-item>
      <c-form-item label="验证码">
        <c-form-input
          type="number"
          maxlength="6"
          placeholder="请输入验证码"
          v-model.trim="cForm.model.captcha"
          :error="cForm.errors.captcha"
          custom-style="width: 300rpx"
          @blur="validate(cForm, 'captcha')"
        />
        <button
          slot="append"
          class="c-form__send-captcha c-button h56 t-white fs26"
          :class="cCaptcha.disabled ? 'bg-g4' : 'bg-primary'"
          @click.stop="sendCaptcha"
        >
          {{ cCaptcha.message }}
        </button>
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w690" type="primary" @click="submit">
      绑定
    </u-button>
  </div>
</template>

<script src="./script.js"></script>
