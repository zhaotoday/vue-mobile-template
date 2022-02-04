<template>
  <div class="p-user-account-login u-pt18">
    <div class="c-box">
      <ul class="c-form c-form--inbox has-label u-mb40">
        <li class="c-form__item is-required">
          <label class="fs32">姓名</label>
          <input
            class="c-form__input"
            placeholder-class="t-placeholder"
            placeholder="请输入真实姓名"
            v-model="cForm.model.nickName"
            @blur="validate(cForm, 'nickName')"
          />
          <div v-if="cForm.errors.nickName" class="c-form__error">
            {{ cForm.errors.nickName }}
          </div>
        </li>
      </ul>
    </div>
    <ul class="c-list bg-white fs30">
      <li class="c-list__item">
        <label>账号</label>
        <input
          class="c-list__value"
          placeholder-class="t-placeholder"
          placeholder="请输入手机号"
          v-model.trim="cForm.model.account"
        />
      </li>
      <li class="c-list__item">
        <label>密码</label>
        <input
          class="c-list__value"
          type="password"
          placeholder-class="t-placeholder"
          placeholder="请输入密码"
          v-model.trim="cForm.model.password"
        />
      </li>
    </ul>
    <div class="u-tar u-pr10">
      <div
        class="b-password t-primary u-p20 fs26"
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
