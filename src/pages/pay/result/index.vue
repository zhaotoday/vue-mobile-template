<template>
  <div class="p-pay-result">
    <view class="b-tip">
      <view class="b-tip__icon">
        <u-icon name="checkbox-mark" color="#fff" size="30"></u-icon>
      </view>
      <div class="b-tip__title fs28 t-primary u-tac">下单成功</div>
      <div class="b-tip__buttons">
        <u-button
          type="primary"
          size="small"
          @click="$wx.redirectTo('/pages/user/orders/list/index')"
        >
          查看订单列表
        </u-button>
        <u-button size="small" @click="$wx.switchTab('/pages/home/index')">
          返回首页
        </u-button>
      </div>
    </view>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>
