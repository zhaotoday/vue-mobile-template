<template>
  <div
    v-if="loaded"
    class="p-products-detail">
    <img
      class="b-image"
      :src="$helpers.getImageById(detail.pictures)"
      @click="previewImage($helpers.getImageById(detail.pictures))"
    />
    <div class="b-info bgc11 u-mb16">
      <h2 class="b-title fs40">{{ detail.name }}</h2>
      <div class="b-price">
        <span class="c23 fs24">￥</span>
        <span class="c23 fs40">{{ detail.price || '' }}</span>
        <span class="c35 fs26 u-lt">￥{{ detail.originalPrice }}</span>
        <span class="c31 fs26">/{{ detail.unit || '' }}</span>
      </div>
    </div>
    <div
      class="b-content bgc11 c35 fs30"
      v-html="detail.content">
    </div>
    <c-add-to-cart :item="detail"></c-add-to-cart>
    <c-fixed-cart></c-fixed-cart>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
