<template>
  <div>
    <input
      class="c-form__input"
      :type="type"
      placeholder-class="t-placeholder"
      :placeholder="placeholder"
      @input="$emit('input', $event.detail.value)"
      @blur="$emit('blur')"
    />
    <div v-if="form.errors[prop]" class="c-form__error">
      {{ form.errors[prop] }}
    </div>
  </div>
</template>

<script src="./script.js"></script>
