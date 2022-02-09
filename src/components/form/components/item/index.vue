<template>
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
</template>

<script src="./script.js"></script>
