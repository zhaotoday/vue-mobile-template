<template>
  <u-grid
    col="2"
    :border="false"
    style="width: 720rpx; margin: 0 auto"
    class="c-products u-pt30 u-pb30"
  >
    <u-grid-item v-for="(item, index) in products" :key="index">
      <div class="c-box bg-white u-br10 u-mb30">
        <u-avatar shape="square" size="330rpx" :src="item.url" />
        <div class="c-products__name fs28">{{ item.name }}</div>
        <div class="c-products__price">
          <span class="t-error fs26">¥100.0</span>
          <span class="t-g6 u-lt fs24 u-ml10">200.0</span>
        </div>
      </div>
    </u-grid-item>
  </u-grid>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
