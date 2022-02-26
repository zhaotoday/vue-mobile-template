<template>
  <div class="p-products-detail">
    <u-swiper
      :list="
        detail.imageFileIds.map(
          (imageFileId) =>
            $helpers.getFileUrl({ id: imageFileId }) + '?_bugfix=.jpg'
        )
      "
      height="750rpx"
      indicator
      radius="0"
      indicator-mode="dot"
      img-mode="aspectFill"
    />
    <div class="b-info bg-white u-mb24">
      <div class="b-info__name fs32">{{ detail.name }}</div>
      <div class="b-info__others">
        <span class="t-error fs32">¥{{ detail.price }}</span>
        <span class="t-g7 u-lt fs26 u-ml10">200.0</span>
        <div class="b-info__right t-g7 fs26">
          库存：1000 &nbsp;&nbsp; 销量：1000
        </div>
      </div>
    </div>
    <div class="u-pt30 u-pb30 bg-white">
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
