<template>
  <div class="p-orders">
    <div class="bg-white u-pb10">
      <u-tabs
        :list="cTabs.items"
        item-style="width: 25%; height: 80rpx; box-sizing: border-box"
      />
    </div>
    <ul class="c-orders">
      <li class="c-orders__item bg-white u-mt18">
        <div class="c-orders__head">
          <span class="fs26" style="padding-right: 20rpx">代付款</span>
          <span class="t-g7 fs24">2022-02-14 14:00</span>
        </div>
        <div class="c-orders__body o-media">
          <img
            class="o-media__image"
            mode="aspectFill"
            src="https://cdn.uviewui.com/uview/goods/1.jpg"
          />
          <div class="o-media__body">
            <div class="cc-products">
              <div>
                <div class="cc-products__item fs26">商品名称</div>
              </div>
            </div>
            <div class="b-money fs26">实付 ￥12.00</div>
          </div>
        </div>
        <div class="c-orders__foot u-tar">
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">立即付款</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
