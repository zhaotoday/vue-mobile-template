<template>
  <div class="wrap">
    <h2>按钮</h2>
    <p>
      <button class="c-button br8 w1 h88 bgc21 c11 fs32">
        按钮
      </button>
    </p>
    <h2>头像</h2>
    <p>
      <img
        class="c-avatar"
        src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epGL9qnUFzOMHWV5OXLDhWdyPBVnpSSqUOZ4fQdasgMbfibSVJmbGakweaJXv51u6eoiaawvdBPPWVw/132"
      />
    </p>
    <h2>图标</h2>
    <p>
      <i class="c-icon c-icon--logo"></i>
    </p>
    <h2>标签</h2>
    <p>
      <span class="c-tag h30 br8 bdc21 c21 fs20">公司 XXXX</span>
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="scss">
@import "../../assets/styles/utils/index";

h2 {
  padding: px2rpx(30px);
  font-size: px2rpx(28px);
}

p {
  @include margin(null, px2rpx(30px), px2rpx(30px), px2rpx(30px));
}
</style>
