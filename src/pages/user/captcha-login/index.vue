<template>
  <div class="p-user-captcha-login u-pt24">
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
      登录
    </u-button>
  </div>
</template>

<script src="./script.js"></script>
