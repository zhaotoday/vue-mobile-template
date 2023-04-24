<template>
  <div class="p-home">
    <div class="bg-primary u-pl24 u-pr24 u-pt24 u-pb24">
      <u-row>
        <u-col span="3">
          <c-locale />
        </u-col>
        <u-col span="9">
          <u-search
            :placeholder="$t('inputs.productName')"
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
              $helpers.getImageUrl({
                id: imageFileId,
                width: 702,
                height: 300,
              }) + '&_bugfix=.jpg'
          )
        "
        height="300rpx"
        indicator
        img-mode="aspectFill"
        indicator-mode="dot"
      />
    </div>
    <vc-categories :loaded="loaded" :items="categoriesList.items" />
    <div class="u-pl24 u-pt20">
      <div class="c-title c-title--md fs32">特价区</div>
    </div>
    <div class="b-special">
      <div class="b-product">
        <u-scroll-list>
          <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
          </view>
        </u-scroll-list>

        <image
          src="https://sol-api.liruan.cn/public/files/1651?x-oss-process=image/resize,w_406,h_406"
        />
      </div>
    </div>
    <div class="u-pl24 u-pt20">
      <div class="c-title c-title--md fs32">商品</div>
    </div>
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
