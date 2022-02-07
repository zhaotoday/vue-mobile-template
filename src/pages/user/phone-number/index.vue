<template>
  <div class="p-user-phone-number u-pt18">
    <div v-if="currentRoute.query.firstBind" class="b-tip bg-white t-g7 fs26">
      应国家法律要求，使用互联网服务需进行账号实名。为保障账号的正常使用，请完成手机号绑定。感谢你的理解和支持。
    </div>
    <div :class="$bem.box.$">
      <ul class="c-form c-form--inbox has-label">
        <li class="c-form__item">
          <label>手机号</label>
          <input
            class="c-form__input"
            type="number"
            maxlength="11"
            placeholder-class="t-placeholder"
            placeholder="请输入手机号"
            v-model="cForm.model.phoneNumber"
            @blur="validate(cForm, 'phoneNumber')"
          />
          <div v-if="cForm.errors.phoneNumber" class="c-form__error">
            {{ cForm.errors.phoneNumber }}
          </div>
        </li>
        <li class="c-form__item">
          <label>验证码</label>
          <input
            class="c-form__input"
            type="number"
            maxlength="6"
            placeholder-class="t-placeholder"
            placeholder="请输入验证码"
            v-model.trim="cForm.model.captcha"
            @blur="validate(cForm, 'captcha')"
            style="width: 490rpx"
          />
          <div v-if="cForm.errors.captcha" class="c-form__error">
            {{ cForm.errors.captcha }}
          </div>
          <button
            class="c-form__send-captcha c-button h56 t-white fs26"
            :class="cCaptcha.disabled ? 'bg-g4' : 'bg-primary'"
            @click.stop="sendCaptcha"
          >
            {{ cCaptcha.message }}
          </button>
        </li>
      </ul>
    </div>
    <u-button custom-class="at-bottom w690" type="primary" @click="submit">
      绑定
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
