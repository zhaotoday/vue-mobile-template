<template>
  <div class="p-user-account-login u-pt30">
    <c-form :form="cForm">
      <c-form-item label="账号" prop="account">
        <c-form-input prop="account" />
      </c-form-item>
    </c-form>
    <div :class="$bem.box.$">
      <ul class="c-form c-form--inbox has-label">
        <li class="c-form__item">
          <label>账号</label>
          <input
            class="c-form__input"
            placeholder-class="t-placeholder"
            placeholder="请输入手机号"
            v-model.trim="cForm.model.account"
            @blur="validate(cForm, 'account')"
          />
          <div v-if="cForm.errors.account" class="c-form__error">
            {{ cForm.errors.account }}
          </div>
        </li>
        <li class="c-form__item">
          <label>密码</label>
          <input
            class="c-form__input"
            type="password"
            placeholder-class="t-placeholder"
            placeholder="请输入密码"
            v-model.trim="cForm.model.password"
            @blur="validate(cForm, 'password')"
          />
          <div v-if="cForm.errors.password" class="c-form__error">
            {{ cForm.errors.password }}
          </div>
        </li>
      </ul>
    </div>
    <div class="t-g7 fs28 u-p20">
      <div class="b-register" style="float: left">注册账号</div>
      <div
        class="b-password"
        style="float: right"
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
