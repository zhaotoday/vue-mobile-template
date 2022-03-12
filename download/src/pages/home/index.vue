<template>
  <div class="p-download">
    <div class="b-logo">
      <img class="b-logo__image" src="/static/logo.png" />
      <span class="fs30">Sol Summer Shop</span>
    </div>
    <gc-locale />
    <div class="b-phone"></div>
    <swiper
      class="b-demo-pages"
      circular
      autoplay
      :interval="3000"
      @change="onDemoPagesChange"
    >
      <swiper-item v-for="item in 4" :key="item">
        <div class="b-demo-pages__image" :class="`image-${item}`"></div>
      </swiper-item>
    </swiper>
    <div class="b-indicator">
      <span
        v-for="(item, index) in 4"
        :key="index"
        class="b-indicator__item"
        :class="{ 'is-active': index === cDemoPages.current }"
      >
      </span>
    </div>
    <a class="b-button b-button--android" href="#">
      <div class="b-button__title fs30">Android</div>
    </a>
    <div class="b-button b-button--ios">
      <div class="b-button__title fs30">iPhone</div>
    </div>
    <div class="b-tip t-gray7 fs24 u-tac">powered by Sol Summer Shop</div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
