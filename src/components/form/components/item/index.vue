<template>
  <li class="c-form__item">
    <label>{{ label }}</label>
    <input
      class="c-form__input"
      :type="type"
      placeholder-class="t-placeholder"
      :placeholder="placeholder"
      v-model.trim="form.model[prop]"
      @blur="validate(form, prop)"
    />
    <div v-if="form.errors[prop]" class="c-form__error">
      {{ form.errors[prop] }}
    </div>
  </li>
</template>

<script src="./script.js"></script>
