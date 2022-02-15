<template>
  <div class="p-user-distribute">
    <div class="bg-white u-pb10 u-mb24">
      <u-tabs
        :list="cTabs.items"
        item-style="width: 33.3%; height: 80rpx; box-sizing: border-box"
        line-color="#5ac725"
      />
    </div>
    <ul class="c-orders">
      <li v-for="item in 3" :key="item" class="c-orders__item bg-white u-mt20">
        <div class="c-orders__head">
          <span class="fs26" style="padding-right: 20rpx">配送中</span>
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
              <div class="cc-products__item fs26">
                赵金添（13950442340）<br />
                <span class="t-g7">福建省福州市鼓楼区蒙古</span>
              </div>
            </div>
            <div class="b-money fs26">
              实付 <span class="t-error">￥12.00</span>
            </div>
          </div>
        </div>
        <div class="c-orders__foot u-tar">
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">订单详情</div>
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">导航</div>
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">打电话</div>
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">送达</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
