<template>
  <div class="p-products-list">
    <c-product-list
      v-if="productsList.items.length"
      custom-class="u-pt24"
      :items="productsList.items"
      :col="2"
    />
    <u-empty
      v-if="loaded && !productsList.items.length"
      mode="data"
      icon="https://fzxxdd-sol.oss-ap-southeast-2.aliyuncs.com/avatars/2023-01-18/b53ae50b-4bf7-4469-bd87-ccd0f7da3663.png"
      margin-top="100rpx"
      :text="$t('$.noData')"
    />
  </div>
</template>

<script src="./script.js"></script>
