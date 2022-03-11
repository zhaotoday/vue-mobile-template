<template>
  <div class="p-products-list">
    <gc-product-list
      v-if="productsList.items.length"
      custom-class="u-pt24"
      :items="productsList.items"
      :col="2"
    />
    <u-empty
      v-if="loaded && !productsList.items.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
      :text="$t('$.noData')"
    />
  </div>
</template>

<script src="./script.js"></script>
