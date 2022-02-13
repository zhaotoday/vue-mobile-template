<template>
  <div class="p-products-detail">
    <u-swiper
      :list="swiperData"
      height="750rpx"
      indicator
      radius="0"
      indicator-mode="dot"
    />
    <div class="b-info bg-white u-mb20">
      <div class="b-info__name fs32">
        心相印纸巾抽纸整箱大包家用实惠装卫生纸心心相印餐巾纸面巾纸抽
      </div>
      <div class="b-info__others">
        <span class="t-error fs32">¥100.0</span>
        <span class="t-g7 u-lt fs26 u-ml10">200.0</span>
        <div class="b-info__right t-g7 fs26">
          库存：1000 &nbsp;&nbsp; 销量：1000
        </div>
      </div>
    </div>
    <div class="u-pt20 u-pb20 bg-white">
      <div class="c-title c-title--md fs32">详情</div>
    </div>
    <div class="s-cms-content">
      <img
        src="https://imgs.static.pupumall.com/STORE_PRODUCT/a3d844176f6c416f86ffd8d6eda5d02a/1589268148757.jpg"
        style="width: 100%"
      />
    </div>
    <gc-product-submit />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
