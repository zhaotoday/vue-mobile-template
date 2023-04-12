<template>
  <div class="p-user-distribute">
    <div class="bg-white u-pb10 u-mb24">
      <u-tabs
        :list="OrderStatus.map(({ label }) => ({ name: label }))"
        item-style="width: 25%; height: 80rpx; box-sizing: border-box"
        line-color="#5ac725"
        @change="changeTab"
      />
    </div>
    <ul v-if="ordersList.items.length" class="c-orders">
      <li
        v-for="item in ordersList.items"
        :key="item.id"
        class="c-orders__item bg-white u-mt20"
        @click="$uni.navigateTo(`/pages/user/orders/detail/index?id=${item.id}`)"
      >
        <div class="c-orders__head">
          <span class="fs26" style="padding-right: 20rpx">
            {{ $helpers.getItem(OrderStatus, "value", item.status)["label"] }}
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
                {{ item.products[0] ? item.products[0].name : "" }}<br />
                <span class="t-g7">
                  {{ item.user.name }}
                  &nbsp;&nbsp;
                  {{ item.user.phoneNumber }}
                  &nbsp;&nbsp;
                  {{ item.address ? item.address.location.name : "" }}
                </span>
              </div>
            </div>
            <div class="b-money fs26">
              <span class="t-error"> ¥{{ getTotalPrice(item.products) }} </span>
            </div>
          </div>
        </div>
        <div class="c-orders__foot u-tar">
          <div
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click.stop="openLocation(item.address)"
          >
            定位
          </div>
          <div
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click.stop="makePhoneCall(item.address)"
          >
            打电话
          </div>
          <div
            v-if="item.status === 'ToDistribute'"
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click.stop="startToDistribute(item)"
          >
            开始配送
          </div>
          <div
            v-if="item.status === 'Distributing'"
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click.stop="finish(item)"
          >
            送达
          </div>
        </div>
      </li>
    </ul>
    <u-empty
      v-if="loaded && !ordersList.items.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
      text="暂无数据"
    />
  </div>
</template>

<script src="./script.js"></script>
