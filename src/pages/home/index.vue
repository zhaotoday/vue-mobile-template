<template>
  <div class="p-home">
    <div class="bg-primary u-pl24 u-pr24 u-pt24 u-pb24">
      <u-search
        :placeholder="$t('pages.home.search.placeholder')"
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
    <vc-categories :items="categoriesList.items" />
    <gc-product-list
      custom-class="u-pt24"
      :items="productsList.items"
      :col="2"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
