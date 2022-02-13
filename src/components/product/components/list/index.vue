<template>
  <div class="cc-list u-pt30">
    <u-grid col="2" :border="false">
      <u-grid-item v-for="(item, index) in products" :key="index">
        <div class="c-box u-pr bg-white u-br10 u-mb30">
          <u-avatar shape="square" size="330rpx" :src="item.url" />
          <div class="cc-list__name fs28">{{ item.name }}</div>
          <div class="cc-list__price">
            <span class="t-error fs26">¥100.0</span>
            <span class="t-g6 u-lt fs24 u-ml10">200.0</span>
          </div>
          <div class="cc-list__number" @click.stop>
            <gc-product-number />
          </div>
        </div>
      </u-grid-item>
    </u-grid>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
