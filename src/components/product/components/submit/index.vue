<template>
  <div class="cc-submit">
    <div class="cc-submit__collect">
      <i class="c-iconfont c-iconfont--heart-off fs42"></i>
      <h2 class="fs24">收藏</h2>
    </div>
    <div
      class="cc-submit__cart"
      @click="$wx.switchTab('/pages/categories/index')"
    >
      <i class="c-iconfont c-iconfont--cart-off fs42"></i>
      <h2 class="fs24">购物车</h2>
      <div v-if="selectedProducts.length" class="cc-submit__count fs22">
        {{ selectedProducts.length }}
      </div>
    </div>
    <div class="cc-submit__button bg-primary t-white fs28">加入购物车</div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
