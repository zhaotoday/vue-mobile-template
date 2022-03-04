<template>
  <div class="p-user-account-login u-pt24">
    <c-form>
      <c-form-item :label="$t('$g.$t.phoneNumber')">
        <c-form-input
          type="number"
          maxlength="11"
          :placeholder="$t('$g.input.phoneNumber')"
          v-model.trim="cForm.model.account"
          :error="cForm.errors.account"
          @blur="validate(cForm, 'account')"
        />
      </c-form-item>
      <c-form-item :label="$t('$g.$t.password')">
        <c-form-input
          type="password"
          :placeholder="$t('$g.input.password')"
          v-model.trim="cForm.model.password"
          :error="cForm.errors.password"
          @blur="validate(cForm, 'password')"
        />
      </c-form-item>
    </c-form>
    <div class="t-g7 fs28 u-p20">
      <div
        class="b-register"
        @click="$wx.navigateTo('/pages/user/captcha-login/index')"
      >
        {{ $t("$p.user.$p.accountLogin.captchaLogin") }}
      </div>
      <div
        class="b-password"
        @click="$wx.navigateTo('/pages/user/password/index')"
      >
        {{ $t("$p.user.$p.accountLogin.forgotPassword") }}
      </div>
    </div>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      {{ $t("$g.$t.login") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
