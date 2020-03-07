<template>
  <div class="wrap">
    example
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ExamplePage extends Vue {}
</script>

<style lang="scss">
@import "../../assets/styles/utils/index";

.wrap {
  padding: px2rpx(30px);
}
</style>
