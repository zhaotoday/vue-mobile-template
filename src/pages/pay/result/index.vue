<template>
  <div class="p-pay-result">
    <view class="b-tip">
      <view class="b-tip__icon">
        <u-icon name="checkbox-mark" color="#fff" size="30"></u-icon>
      </view>
      <div class="b-tip__title fs28 t-primary u-tac">
        {{ pt("paySuccess") }}
      </div>
      <div class="b-tip__buttons">
        <u-button
          type="primary"
          size="small"
          @click="$wx.redirectTo('/pages/user/orders/list/index')"
        >
          {{ pt("gotoOrders") }}
        </u-button>
        <u-button size="small" @click="$wx.switchTab('/pages/home/index')">
          {{ pt("backHome") }}
        </u-button>
      </div>
    </view>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
