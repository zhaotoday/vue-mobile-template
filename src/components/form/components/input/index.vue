<template>
  <div>
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
  </div>
</template>

<script src="./script.js"></script>
