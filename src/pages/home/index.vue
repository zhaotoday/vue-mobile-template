<template>
  <div class="p-home">
    <div class="bg-primary u-pl24 u-pr24 u-pt24 u-pb24">
      <u-search
        placeholder="请输入商品名称"
        disabled
        :show-action="false"
        height="60rpx"
        @click="$wx.navigateTo('/pages/products/search/index')"
      />
      <u-gap height="24rpx" />
      <u-swiper
        :list="
          adsList.items.map(
            ({ imageFileId }) =>
              $helpers.getFileUrl({ id: imageFileId }) + '?_bugfix=.jpg'
          )
        "
        height="300rpx"
        indicator
        img-mode="aspectFill"
        indicator-mode="dot"
      />
    </div>
    <b-categories :items="categoriesList.items" />
    <c-product-list
      custom-class="u-pt24"
      :items="productsList.items"
      :col="2"
    />
    <c-contact />
  </div>
</template>

<script src="./script.js"></script>
