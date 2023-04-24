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
      <div class="b-special__box">
        <u-scroll-list indicator-active-color="#5ac725">
          <div
            v-for="(item, index) in specialProductsList.items"
            :key="item.id"
            class="b-product"
            style="width: 152rpx"
          >
            <image
              :src="
                $helpers.getImageUrl({
                  id: item.imageFileIds[0],
                  width: 120,
                  height: 120,
                })
              "
              mode="aspectFill"
            />
            <h3 class="u-lh1 fs26 t-error u-pt10 u-tac">${{ item.price }}</h3>
          </div>
        </u-scroll-list>
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
