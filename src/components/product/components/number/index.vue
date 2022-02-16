<template>
  <u-number-box
    class="cc-number"
    :min="0"
    :max="max"
    v-model="value"
    @change="updateProductNumber({ id: productId, number: value })"
  >
    <div slot="minus">
      <div v-if="value" class="cc-number__minus">
        <u-icon name="minus" size="24rpx" color="#5ac725" />
      </div>
    </div>
    <div slot="input">
      <div v-if="value" class="cc-number__input">
        {{ value }}
      </div>
    </div>
    <div class="cc-number__plus" slot="plus">
      <u-icon name="plus" size="24rpx" color="#ffffff" />
    </div>
  </u-number-box>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
