<template>
  <div>
    <input
      class="c-form__input"
      :type="type"
      placeholder-class="t-placeholder"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :style="customStyle"
      @input="$emit('input', $event.detail.value)"
      @blur="$emit('blur')"
    />
    <div v-if="error" class="c-form__error">
      {{ error }}
    </div>
  </div>
</template>

<script src="./script.js"></script>
