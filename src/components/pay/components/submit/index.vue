<template>
  <div class="b-submit">
    <div class="b-submit__total fs28 t-error">
      ¥{{ getTotalPrice(selectedProducts) }}
    </div>
    <div
      class="b-submit__button bg-primary t-white fs28"
      @click="$emit('submit')"
    >
      支付
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
