<template>
  <div class="p-user-account-register u-pt24">
    <c-form>
      <c-form-item :label="$t('titles.name')">
        <c-form-input
          :placeholder="$t('inputs.name')"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
      </c-form-item>
      <c-form-item :label="$t('titles.phoneNumber')">
        <c-form-input
          type="number"
          maxlength="11"
          :placeholder="$t('inputs.phoneNumber')"
          v-model.trim="cForm.model.phoneNumber"
          :error="cForm.errors.phoneNumber"
          @blur="validate(cForm, 'phoneNumber')"
        />
      </c-form-item>
      <c-form-item :label="$t('titles.captcha')">
        <c-form-input
          type="number"
          maxlength="6"
          :placeholder="$t('inputs.captcha')"
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
      <c-form-item :label="$t('titles.password')">
        <c-form-input
          type="password"
          :placeholder="$t('inputs.passwordTip')"
          v-model.trim="cForm.model.password"
          :error="cForm.errors.password"
          @blur="validate(cForm, 'password')"
        />
      </c-form-item>
      <c-form-item :label="$t('titles.confirmPassword')">
        <c-form-input
          type="password"
          :placeholder="$t('inputs.confirmPassword')"
          v-model.trim="cForm.model.confirmPassword"
          :error="cForm.errors.confirmPassword"
          @blur="validate(cForm, 'confirmPassword')"
        />
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      {{ $t("titles.register") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>
