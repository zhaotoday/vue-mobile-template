<template>
  <div class="p-products-list">
    <div class="bg-white u-pl24 u-pr24 u-pt24">
      <u-search
        ref="search"
        placeholder="请输入商品名称"
        height="60rpx"
        focus
      />
    </div>
    <div class="bg-white u-pb10">
      <u-tabs
        :list="cTabs.items"
        item-style="width: 25%; height: 80rpx; box-sizing: border-box"
        line-color="#5ac725"
      />
    </div>
    <gc-product-list custom-class="u-pt30" :items="products" :col="2" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
