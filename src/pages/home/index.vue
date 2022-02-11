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
    <u-number-box v-model="value">
      <view slot="minus" class="minus">
        <u-icon name="minus" color="#FFFFFF" size="12" />
      </view>
      <text slot="input" style="width: 50px; text-align: center" class="input">
        {{ value }}
      </text>
      <view slot="plus" class="plus">
        <u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
      </view>
    </u-number-box>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
