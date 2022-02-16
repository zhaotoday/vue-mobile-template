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
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      保存
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
