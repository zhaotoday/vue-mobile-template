<template>
  <div class="p-categories">
    <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24">
      <u-search
        :placeholder="$t('inputs.productName')"
        disabled
        :show-action="false"
        height="60rpx"
        @click="$wx.navigateTo('/pages/products/search/index')"
      />
    </div>
    <ul class="b-categories fs28">
      <li
        v-for="(item, index) in categoriesList.items"
        :key="item.name"
        :class="{ 'is-active': index === cTab.current }"
        @click="changeCategory(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <scroll-view class="b-products" scroll-y>
      <gc-product-list
        v-if="productsList.items.length"
        :items="productsList.items"
        :col="1"
      />
      <u-empty
        v-if="loaded && !productsList.items.length"
        mode="data"
        icon="https://cdn.uviewui.com/uview/empty/data.png"
        margin-top="100rpx"
        :text="$t('$.noData')"
      />
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
