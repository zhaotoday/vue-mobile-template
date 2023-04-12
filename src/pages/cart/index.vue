<template>
  <div class="p-cart u-pt24 u-pb100">
    <c-product-list
      v-if="products.length"
      :items="products"
      :col="1"
      selectable
    />
    <u-empty
      v-else
      mode="car"
      icon="http://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
      text="购物车为空"
    />
    <c-cart-submit @submit="$uni.navigateTo('/pages/checkout/index')" />
  </div>
</template>

<script src="./script.js"></script>
