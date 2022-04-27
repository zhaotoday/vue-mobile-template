<template>
  <div class="p-manage-products p-categories">
    <div class="bg-white u-pl24 u-pr24 u-pt24 u-pb24">
      <u-search
        placeholder="请输入商品名称"
        :show-action="false"
        height="60rpx"
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
      <u-button
        custom-class="u-ml24 u-mb24"
        custom-style="width: 160rpx"
        type="primary"
        size="small"
        @click="redirectToAddProduct"
      >
        新增商品
      </u-button>
      <c-product-list
        v-if="productsList.items.length"
        :items="productsList.items"
        :col="1"
        :edit-number="false"
        editable
        @del="del"
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
