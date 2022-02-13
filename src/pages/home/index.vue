<template>
  <div class="p-home">
    <div class="bg-primary u-pl30 u-pr30 u-pt20 u-pb20">
      <u-search
        placeholder="请输入商品名称"
        disabled
        :show-action="false"
        @click="$wx.navigateTo('/pages/products/search/index')"
      />
      <u-gap height="20rpx" />
      <u-swiper
        :list="swiperData"
        height="300rpx"
        indicator
        indicator-mode="line"
      />
    </div>
    <vc-categories />
    <gc-product-list :products="products" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
