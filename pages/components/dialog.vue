<template>
  <div class="wrap">
    <button class="c-button br8 w1 h88 bgc21 c11 fs32" @click="visible = true">
      弹出框
    </button>
    <c-dialog
      :visible="visible"
      title="标题"
      width="600"
      :show-cancel="false"
      confirm-text="确认按钮"
      confirm-disabled
      @confirm="visible = false"
    >
      <div slot="body">
        <div class="b-body fs30 u-tac">内容</div>
      </div>
    </c-dialog>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  visible = false;
}
</script>

<style lang="scss">
@import "~@/assets/styles/utils/index";

.wrap {
  padding: px2rpx(30px);
}

@include b(body) {
  padding-bottom: px2rpx(30px);
}
</style>
