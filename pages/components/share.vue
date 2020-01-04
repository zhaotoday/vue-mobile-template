<template>
  <div class="p-components-share">
    <button
      class="c-button br8 w1 h88 bgc21 c11 fs32"
      @click="$refs.share.showOptions()">
      按钮
    </button>
    <c-share ref="share"></c-share>
  </div>
</template>

<script>
export default {
  onShow () {
    this.$refs.share.init()
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/utils/index";

  @include p(components-share) {
    padding: px2rpx(30px);
  }
</style>
