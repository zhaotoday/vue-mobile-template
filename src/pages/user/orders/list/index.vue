<template>
  <div class="p-user-orders-list">
    <div class="bg-white u-pb10 u-mb24">
      <u-tabs
        :list="tabItems"
        key-name="label"
        item-style="padding-left: 36rpx; padding-right: 36rpx; height: 80rpx; box-sizing: border-box"
        line-color="#5ac725"
        @change="changeTab"
      />
    </div>
    <ul v-if="list.items.length" class="c-orders">
      <li
        v-for="item in list.items"
        :key="item.id"
        class="c-orders__item bg-white u-mt20"
        @click="$wx.navigateTo(`/pages/user/orders/detail/index?id=${item.id}`)"
      >
        <div class="c-orders__head">
          <span class="fs26" style="padding-right: 20rpx">
            {{
              $helpers.getItem(enums.OrderStatus, "value", item.status)["label"]
            }}
          </span>
          <span class="t-g7 fs24">{{ $time.getTime(item.createdAt) }}</span>
        </div>
        <div class="c-orders__body o-media">
          <img
            v-if="item.products[0]"
            class="o-media__image"
            mode="aspectFill"
            :src="$helpers.getFileUrl({ id: item.products[0].imageFileIds[0] })"
          />
          <div class="o-media__body">
            <div class="cc-products">
              <div class="cc-products__item fs26">
                {{ item.products[0] ? item.products[0].name : "" }}
              </div>
            </div>
            <div class="b-money fs26">
              <span class="t-error">￥{{ getTotalPrice(item.products) }}</span>
            </div>
          </div>
        </div>
        <div v-if="false" class="c-orders__foot u-tar">
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">
            {{ pt("$.payAtOnce") }}
          </div>
        </div>
      </li>
    </ul>
    <u-empty
      v-if="loaded && !list.items.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
      text="暂无数据"
    />
  </div>
</template>

<script src="./script.js"></script>
