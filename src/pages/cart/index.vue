<template>
  <div class="p-cart u-pt24 u-pb100">
    <gc-product-list
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
    />
    <gc-cart-submit @submit="$wx.navigateTo('/pages/pay/index')" />
  </div>
</template>

<script src="./script.js"></script>
