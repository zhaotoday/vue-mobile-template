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
    <div class="b-submit__button bg-primary t-white fs28">
      <c-product-number
        v-if="addedToCart"
        class="b-submit__number"
        :product="product"
        icon-color="white"
      />
      <div v-else class="b-submit__add" @click="addToCart">加入购物车</div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
