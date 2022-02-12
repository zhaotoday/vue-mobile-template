<template>
  <div class="vc-categories u-pt30 u-pb10 bg-white">
    <u-grid col="5" :border="false">
      <u-grid-item v-for="(item, index) in list.items" :key="index">
        <u-avatar size="90rpx" :src="item.url" />
        <div class="fs26 u-pt10 u-pb20">
          {{ item.name }}
        </div>
      </u-grid-item>
    </u-grid>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
