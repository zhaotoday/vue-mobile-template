<template>
  <div class="p-home">
    <div class="bg-primary u-pl30 u-pr30 u-pt24 u-pb24">
      <u-search
        placeholder="请输入商品名称"
        disabled
        :show-action="false"
        height="60rpx"
        @click="$wx.navigateTo('/pages/products/search/index')"
      />
      <u-gap height="26rpx" />
      <u-swiper
        :list="swiperData"
        height="300rpx"
        indicator
        indicator-mode="dot"
      />
    </div>
    <vc-categories />
    <gc-product-list class="u-pt30" :items="products" :col="2" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
