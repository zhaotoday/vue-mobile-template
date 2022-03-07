<template>
  <div class="cc-submit">
    <div class="cc-submit__total fs28 t-error">{{ $t("$.money") }}123.00</div>
    <div
      class="cc-submit__button bg-primary t-white fs28"
      @click="$emit('submit')"
    >
      {{ $t("$.completeOrder") }}
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
