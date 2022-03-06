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
      <li
        v-for="item in ordersList.items"
        :key="item.id"
        class="c-orders__item bg-white u-mt20"
      >
        <div class="c-orders__head">
          <span class="fs26" style="padding-right: 20rpx">配送中</span>
          <span class="t-g7 fs24">2022-02-14 14:00</span>
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
              {{ $t("$.paid") }}
              <span class="t-error">￥{{ getTotalPrice(item.products) }}</span>
            </div>
          </div>
        </div>
        <div class="c-orders__foot u-tar">
          <div
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click="
              $wx.navigateTo(`/pages/user/orders/detail/index?id=${item.id}`)
            "
          >
            订单详情
          </div>
          <div
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click="openLocation(item.address)"
          >
            位置
          </div>
          <div
            class="c-tag h48 u-br8 bd-primary t-primary fs24"
            @click="makePhoneCall(item.address)"
          >
            打电话
          </div>
          <div class="c-tag h48 u-br8 bd-primary t-primary fs24">送达</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="./script.js"></script>
