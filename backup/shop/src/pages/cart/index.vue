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
      icon="https://fzxxdd-sol.oss-ap-southeast-2.aliyuncs.com/avatars/2023-01-18/b53ae50b-4bf7-4469-bd87-ccd0f7da3663.png"
      margin-top="100rpx"
      :text="$t('$.emptyCart')"
    />
    <c-cart-submit @submit="$wx.navigateTo('/pages/checkout/index')" />
  </div>
</template>

<script src="./script.js"></script>
