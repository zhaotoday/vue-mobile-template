<template>
  <div class="p-categories">
    <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24">
      <u-search
        placeholder="请输入商品名称"
        disabled
        :show-action="false"
        height="60rpx"
        @click="$wx.navigateTo('/pages/products/search/index')"
      />
    </div>
    <ul class="b-categories fs28">
      <li
        v-for="(item, index) in products"
        :key="item.name"
        :class="{ 'is-active': index === cTab.current }"
        @click="changeCategory(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <scroll-view class="b-products" scroll-y>
      <u-button
        custom-class="u-ml24 u-mb24"
        custom-style="width: 160rpx"
        type="primary"
        size="small"
      >
        新增商品
      </u-button>
      <gc-product-list :items="products" :col="1" :edit-number="false" />
    </scroll-view>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
