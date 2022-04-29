<template>
  <div class="b-submit">
    <b-collection :product-id="product.id" />
    <div class="b-submit__cart" @click="$wx.switchTab('/pages/cart/index')">
      <i class="c-iconfont c-iconfont--cart-off fs42"></i>
      <h2 class="fs24 u-lh1">购物车</h2>
      <div v-if="selectedProducts.length" class="b-submit__count fs22">
        {{ selectedProducts.length }}
      </div>
    </div>
    <div class="b-submit__button bg-primary t-white fs28" @click="addToCart">
      <template v-if="addedToCart">
        <c-product-number :product="product" icon-color="white" />
      </template>
      <template v-else>加入购物车</template>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
