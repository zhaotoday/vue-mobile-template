<template>
  <u-number-box
    class="b-number"
    :min="0"
    :max="product.stock"
    v-model="value"
    @overlimit="onOverLimit"
  >
    <div slot="minus">
      <div v-if="value" class="b-number__minus">
        <u-icon name="minus" size="24rpx" :color="iconColor || '#5ac725'" />
      </div>
    </div>
    <div slot="input">
      <div v-if="value" class="b-number__input">
        {{ value }}
      </div>
    </div>
    <div class="b-number__plus" slot="plus">
      <u-icon name="plus" size="24rpx" color="#ffffff" />
    </div>
  </u-number-box>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
