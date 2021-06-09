<template>
  <div class="c-swiper">
    <swiper
      class="c-swiper__swiper"
      :circular="true"
      :autoplay="autoplay"
      :interval="interval"
      @change="onChange"
      :style="{ width: `${width}rpx`, height: `${height}rpx` }"
    >
      <swiper-item
        v-for="(item, index) in items"
        :key="index"
        :style="{ width: `${width}rpx`, height: `${height}rpx` }"
      >
        <image
          class="c-swiper__image"
          mode="aspectFill"
          :src="item.image"
          :style="{ width: `${width}rpx`, height: `${height}rpx` }"
          @click="onClick(item)"
        />
      </swiper-item>
    </swiper>
    <div class="cc-indicator" :style="{ bottom: `${indicatorBottom}rpx` }">
      <span
        v-for="(item, index) in items.length"
        :key="index"
        class="cc-indicator__item"
        :class="{ 'is-active': index === current }"
      >
      </span>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
