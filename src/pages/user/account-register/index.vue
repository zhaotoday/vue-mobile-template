<template>
  <div class="p-user-account-register u-pt24">
    <c-form>
      <c-form-item label="姓名">
        <c-form-input
          placeholder="请输入姓名"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
      </c-form-item>
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
      <c-form-item label="密码">
        <c-form-input
          type="password"
          placeholder="请输入密码（6-16位字母和数字组合）"
          v-model.trim="cForm.model.password"
          :error="cForm.errors.password"
          @blur="validate(cForm, 'password')"
        />
      </c-form-item>
      <c-form-item label="确认密码">
        <c-form-input
          type="password"
          placeholder="请确认密码"
          v-model.trim="cForm.model.confirmPassword"
          :error="cForm.errors.confirmPassword"
          @blur="validate(cForm, 'confirmPassword')"
        />
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      注册
    </u-button>
  </div>
</template>

<script src="./script.js"></script>
