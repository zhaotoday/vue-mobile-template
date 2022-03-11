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
    <div class="b-desc fs24">应用介绍</div>
    <a class="b-button b-button--android" href="#">
      <div class="b-button__title fs24">Android版</div>
      <div class="b-button__desc fs24">APK下载</div>
    </a>
    <div
      class="b-button b-button--ios"
      @click="$wx.showToast({ title: 'iPhone版正在开发中...' })"
    >
      <div class="b-button__title fs24">iPhone版</div>
      <div class="b-button__desc fs24">AppStore下载</div>
    </div>
    <div class="b-tip t-gray7 fs24 u-tac">
      版权所有：福州市童易家网络科技有限公司<br />
      闽ICP备19013055号-1
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
