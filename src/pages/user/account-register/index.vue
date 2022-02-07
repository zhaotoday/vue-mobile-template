<template>
  <div class="p-my-phone-number u-pt18">
    <div :class="$bem.box.$">
      <ul class="c-form c-form--inbox has-label">
        <li class="c-form__item">
          <label>昵称</label>
          <input
            class="c-form__input"
            placeholder-class="t-placeholder"
            placeholder="请输入昵称"
            v-model="cForm.model.nickName"
            @blur="validate(cForm, 'nickName')"
          />
          <div v-if="cForm.errors.nickName" class="c-form__error">
            {{ cForm.errors.nickName }}
          </div>
        </li>
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
        <li class="c-form__item">
          <label>密码</label>
          <input
            class="c-form__input"
            type="password"
            placeholder-class="t-placeholder"
            placeholder="请输入密码（6-16位字母和数字组合）"
            v-model="cForm.model.password"
            @blur="validate(cForm, 'password')"
          />
          <div v-if="cForm.errors.password" class="c-form__error">
            {{ cForm.errors.password }}
          </div>
        </li>
        <li class="c-form__item">
          <label>确认密码</label>
          <input
            class="c-form__input"
            type="password"
            placeholder-class="t-placeholder"
            placeholder="请确认密码"
            v-model="cForm.model.confirmPassword"
            @blur="validate(cForm, 'confirmPassword')"
          />
          <div v-if="cForm.errors.confirmPassword" class="c-form__error">
            {{ cForm.errors.confirmPassword }}
          </div>
        </li>
      </ul>
    </div>
    <u-button custom-class="at-bottom w690" type="primary" @click="submit">
      注册
    </u-button>
  </div>
</template>

<script src="./script.js"></script>
