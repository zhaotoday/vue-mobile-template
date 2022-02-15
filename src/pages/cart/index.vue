<template>
  <div class="p-cart u-pt24 u-pb100">
    <u-empty
      mode="car"
      icon="http://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
    />
    <gc-product-list :items="products" :col="1" selectable />
    <gc-cart-submit />
  </div>
</template>

<script src="./script.js"></script>
