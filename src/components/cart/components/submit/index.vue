<template>
  <div class="cc-submit">
    <div class="cc-submit__checkbox">
      <u-checkbox
        shape="circle"
        active-color="#5ac725"
        size="44rpx"
        :checked="allProductsSelected"
        :disabled="!products.length"
        @change="selectAllProducts"
      />
    </div>
    <div class="cc-submit__total fs28 t-error">¥{{ totalPrice }}</div>
    <div
      class="cc-submit__button t-white fs28"
      :class="selectedProducts.length ? 'bg-primary' : 'bg-placeholder'"
      @click="submit"
    >
      {{ ct("titles.settle") }}（{{ selectedProducts.length }}）
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
