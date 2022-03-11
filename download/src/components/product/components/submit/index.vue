<template>
  <div class="cc-submit">
    <cc-collection :product-id="product.id" />
    <div
      class="cc-submit__cart"
      @click="$wx.switchTab('/pages/categories/index')"
    >
      <i class="c-iconfont c-iconfont--cart-off fs42"></i>
      <h2 class="fs24 u-lh1">{{ $t("$.cart") }}</h2>
      <div v-if="selectedProducts.length" class="cc-submit__count fs22">
        {{ selectedProducts.length }}
      </div>
    </div>
    <div class="cc-submit__button bg-primary t-white fs28" @click="addToCart">
      <template v-if="addedToCart">
        <gc-product-number :product="product" icon-color="white" />
      </template>
      <template v-else>
        {{ $t("$.addToCart") }}
      </template>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
