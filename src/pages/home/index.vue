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
    <u-number-box v-model="value" :min="0">
      <view v-show="value" slot="minus" class="minus">
        <u-icon name="minus" size="12" color="#5ac725" />
      </view>
      <text v-show="value" slot="input" class="input">
        {{ value }}
      </text>
      <view slot="plus" class="plus">
        <u-icon name="plus" size="12" color="#ffffff" />
      </view>
    </u-number-box>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
