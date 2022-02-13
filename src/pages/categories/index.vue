<template>
  <div class="p-categories">
    <div class="bg-white u-pl30 u-pr30 u-pt20 u-pb20">
      <u-search
        placeholder="请输入商品名称"
        disabled
        :show-action="false"
        @click="$wx.navigateTo('/pages/products/search/index')"
      />
    </div>
    <div class="b-box">
      <ul class="b-menus fs28">
        <li
          v-for="(item, index) in products"
          :key="item.name"
          :class="{ 'is-active': index === 2 }"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="b-products">
        <gc-product-list :items="products" :col="1" />
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
