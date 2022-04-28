<template>
  <div class="p-home">
    <div class="bg-primary u-pl24 u-pr24 u-pt24 u-pb24">
      <u-row>
        <u-col span="3">
          <c-locale />
        </u-col>
        <u-col span="9">
          <u-search
            placeholder="请输入商品名称"
            disabled
            :show-action="false"
            height="60rpx"
            @click="$wx.navigateTo('/pages/products/search/index')"
          />
        </u-col>
      </u-row>
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
    <c-product-list
      custom-class="u-pt24"
      :items="productsList.items"
      :col="2"
    />
    <c-contact />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
