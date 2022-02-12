<template>
  <u-grid
    col="2"
    :border="false"
    style="width: 720rpx; margin: 0 auto"
    class="c-products u-pt30 u-pb30"
  >
    <u-grid-item v-for="(item, index) in products" :key="index">
      <div class="c-box">
        <u-avatar shape="square" size="330rpx" :src="item.url" />
      </div>
    </u-grid-item>
  </u-grid>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
