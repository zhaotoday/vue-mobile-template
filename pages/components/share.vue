<template>
  <div class="wrap">
    <button
      class="c-button br8 w1 h88 bgc21 c11 fs32"
      @click="$refs.share.showOptions()"
    >
      分享
    </button>
    <c-share ref="share"></c-share>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class SharePage extends Vue {
  onShow() {
    this.$refs.share.init();
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/utils/index";

.wrap {
  padding: px2rpx(30px);
}
</style>
