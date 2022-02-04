<template>
  <div class="p-user-phone-number u-pt30">
    <div :class="$bem.box.$">
      <ul class="c-form c-form--inbox has-label">
        <li class="c-form__item">
          <label class="fs30">手机号</label>
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
            :class="cCaptcha.disabled ? 'bg-gray4' : 'bg-primary'"
            @click="sendCaptcha"
          >
            {{ cCaptcha.message }}
          </button>
        </li>
        <li class="c-form__item">
          <label class="fs30">密码</label>
          <input
            class="c-form__input"
            type="password"
            placeholder-class="t-placeholder"
            placeholder="请输入密码"
            v-model="cForm.model.password"
            @blur="validate(cForm, 'password')"
          />
          <div v-if="cForm.errors.password" class="c-form__error">
            {{ cForm.errors.password }}
          </div>
        </li>
        <li class="c-form__item">
          <label class="fs30">密码</label>
          <input
            class="c-form__input"
            type="password"
            placeholder-class="t-placeholder"
            placeholder="请输入密码"
            v-model="cForm.model.password"
            @blur="validate(cForm, 'password')"
          />
          <div v-if="cForm.errors.password" class="c-form__error">
            {{ cForm.errors.password }}
          </div>
        </li>
      </ul>
    </div>
    <ul class="c-list bg-white fs30">
      <li class="c-list__item">
        <label>手机号</label>
        <input
          class="c-list__value"
          type="number"
          maxlength="11"
          placeholder-class="t-placeholder"
          placeholder="请输入手机号"
          v-model.trim="cForm.model.phoneNumber"
          style="width: 380rpx"
        />
        <div v-if="false" class="c-list__value">139****2340</div>
        <div
          class="c-list__operation fs28"
          :class="cCaptcha.disabled ? 't-gray6' : 't-primary'"
          @click.stop="sendCaptcha"
        >
          {{ cCaptcha.message }}
        </div>
      </li>
      <li class="c-list__item">
        <label>验证码</label>
        <input
          class="c-list__value"
          type="number"
          maxlength="6"
          placeholder-class="t-placeholder"
          placeholder="请输入验证码"
          v-model.trim="cForm.model.captcha"
        />
      </li>
      <li class="c-list__item">
        <label>密码</label>
        <input
          class="c-list__value"
          type="password"
          placeholder-class="t-placeholder"
          placeholder="请输入密码（6-16位字母和数字组合）"
          v-model.trim="cForm.model.password"
        />
      </li>
      <li class="c-list__item">
        <label>确认密码</label>
        <input
          class="c-list__value"
          type="password"
          placeholder-class="t-placeholder"
          placeholder="请确认密码"
          v-model.trim="cForm.model.confirmPassword"
        />
      </li>
    </ul>
    <button
      class="c-button at-bottom w690 h88 u-br8 bg-primary t-white fs32"
      @click="submit"
    >
      重置
    </button>
  </div>
</template>

<script src="./script.js"></script>
