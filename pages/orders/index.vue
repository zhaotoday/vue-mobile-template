<template>
  <div class="p-orders">
    <ul class="c-tabs o-grid bgc11 fs28 u-tac">
      <li
        v-for="item in $consts.ORDER_STATUSES"
        :key="item.value"
        :class="[ 'c-tabs__item o-grid__cell', { 'is-active': cTabs.current === item.value } ]"
        @click="changeTab(item)">
        {{ item.label }}
      </li>
    </ul>
    <scroll-view scroll-y>
      <ul class="c-orders u-pt16">
        <li
          v-for="(item, index) in list.items"
          :key="item.id"
          :id="'order-' + index"
          class="c-orders__item bgc11 u-mb16">
          <div class="c-orders__head">
          <span
            class="fs28"
            style="padding-right: 10rpx;">
            {{ $helpers.getItem($consts.ORDER_STATUSES, 'value', item.status)['label'] }}
          </span>
            <span class="c32 fs22">{{ $time.getTime(item.createdAt) }}</span>
          </div>
          <div class="c-orders__body o-media">
            <img
              class="o-media__image"
              mode="aspectFill"
              :src="$helpers.getImageById(item.products[0].pictures)"
            />
            <div class="o-media__body">
              <div class="cc-products">
                <div
                  v-for="product in item.products"
                  :key="product.id">
                  <div class="cc-products__item c10 fs26">{{ product.name }}</div>
                </div>
              </div>
              <div class="b-money fs28">实付 ￥{{ item.paidMoney }}</div>
            </div>
          </div>
          <div
            v-if="item.status === '1'"
            class="c-orders__foot">
            <div
              class="c-button w160 h48 bdc21 c21 fs24"
              @click="pay(item)">
              立即付款
            </div>
          </div>
        </li>
      </ul>
    </scroll-view>
    <c-empty v-if="!list.items[0] && loaded"></c-empty>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
