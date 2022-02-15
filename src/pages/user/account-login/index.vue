<template>
  <div class="p-user-account-login u-pt24">
    <c-form>
      <c-form-item label="手机号">
        <c-form-input
          type="number"
          maxlength="11"
          placeholder="请输入手机号"
          v-model.trim="cForm.model.account"
          :error="cForm.errors.account"
          @blur="validate(cForm, 'account')"
        />
      </c-form-item>
      <c-form-item label="密码">
        <c-form-input
          type="password"
          placeholder="请输入密码"
          v-model.trim="cForm.model.password"
          :error="cForm.errors.password"
          @blur="validate(cForm, 'password')"
        />
      </c-form-item>
    </c-form>
    <div class="t-g7 fs28 u-p20">
      <div
        class="b-register"
        @click="$wx.navigateTo('/pages/user/account-register/index')"
      >
        注册账号
      </div>
      <div
        class="b-password"
        @click="$wx.navigateTo('/pages/user/password/index')"
      >
        忘记密码？
      </div>
    </div>
    <u-button custom-class="at-bottom w690" type="primary" @click="submit">
      登录
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
