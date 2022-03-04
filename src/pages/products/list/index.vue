<template>
  <div class="p-products-list">
    <div class="bg-white u-pl24 u-pr24 u-pt24">
      <u-search
        ref="search"
        :placeholder="$t('$g.input.productName')"
        height="60rpx"
        v-model="cSearch.model.keywords"
        @search="search"
      />
    </div>
    <div class="bg-white u-pb10">
      <u-tabs
        :list="cTabs.items"
        item-style="width: 25%; height: 80rpx; box-sizing: border-box"
        line-color="#5ac725"
      />
    </div>
    <gc-product-list
      v-if="list.items.length"
      custom-class="u-pt24"
      :items="list.items"
      :col="2"
    />
    <u-empty
      v-if="loaded && !list.items.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
