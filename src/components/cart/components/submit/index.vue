<template>
  <div class="cc-submit">
    <div class="cc-submit__checkbox">
      <u-checkbox
        shape="circle"
        active-color="#5ac725"
        size="44rpx"
        :checked="allSelected"
        @change="selectAll"
      />
    </div>
    <div class="cc-submit__total fs28 t-error">¥{{ totalPrice }}</div>
    <div
      class="cc-submit__button bg-primary t-white fs28"
      @click="$wx.navigateTo('/pages/pay/index')"
    >
      去结算（{{ products.length }}）
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
