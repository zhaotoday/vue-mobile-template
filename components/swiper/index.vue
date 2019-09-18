<template>
  <div class="c-swiper">
    <swiper
      class="c-swiper__swiper"
      :circular="true"
      :autoplay="autoplay"
      :interval="interval"
      @change="handleChange"
      :style="{ height: `${height}rpx` }">
      <swiper-item
        v-for="(item, index) in items"
        :key="index"
        :style="{ height: `${height}rpx` }">
        <img
          class="c-swiper__image"
          mode="aspectFill"
          :src="item.image"
          :style="{ height: `${height}rpx` }"
          @click="navigateTo(item.url)"
        />
      </swiper-item>
    </swiper>
    <div class="cc-indicator">
      <span
        v-for="(item, index) in items.length"
        :key="index"
        :class="[ 'cc-indicator__item', { 'is-active': item === current } ]">
      </span>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
