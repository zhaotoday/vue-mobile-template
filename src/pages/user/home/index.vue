<template>
  <div class="p-user-home has-nav-bar u-pt24">
    <div class="b-info bg-white u-mb24">
      <template v-if="loggedIn()">
        <u-avatar
          size="120rpx"
          mode="aspectFill"
          :src="avatarUrl || defaultAvatarUrl"
        />
        <div class="b-info__extra">
          <h2 class="fs30">Name: {{ name }}</h2>
          <h3 class="fs26" v-if="user.phoneNumber">
            Phone Number: {{ user.phoneNumber }}
          </h3>
        </div>
      </template>
      <template v-else>
        <u-avatar size="120rpx" mode="aspectFill" :src="defaultAvatarUrl" />
        <u-button
          type="primary"
          custom-class="b-info__extra"
          custom-style="width: 130rpx"
          size="small"
          @click="$wx.navigateTo($consts.LoginUrl)"
        >
          {{ pt("$.login") }}
        </u-button>
      </template>
    </div>
    <div
      v-if="false"
      class="b-entries u-pt30 u-pb30 u-mb24"
      :class="$bem.box.$"
    >
      <u-grid col="4" :border="false">
        <u-grid-item
          v-for="(item, index) in menus"
          :key="index"
          @click="navigateTo({ requiresLogin: true, url: item.url })"
        >
          <i
            class="c-iconfont fs50 t-primary"
            :class="'c-iconfont--' + item.icon"
          ></i>
          <div class="fs26 u-pt10">
            {{ item.name }}
          </div>
        </u-grid-item>
      </u-grid>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requireLogin: true,
              url: '/pages/user/orders/list/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--order fs34 t-primary"></i>
          {{ pt("$.myOrders") }}
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requireLogin: true,
              url: '/pages/user/addresses/list/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--address fs34 t-primary"></i>
          {{ pt("$.myAddresses") }}
        </li>
      </ul>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({ requiresLogin: true, url: '/pages/user/info/index' })
          "
        >
          <i class="c-iconfont c-iconfont--info fs34 t-primary"></i>
          {{ pt("$.myInformation") }}
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requiresLogin: true,
              url: '/pages/user/password/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--lock fs34 t-primary"></i>
          {{ pt("$.modifyPassword") }}
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requiresLogin: true,
              url: '/pages/user/phone-number/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--phone fs34 t-primary"></i>
          {{ pt("$.bindPhoneNumber") }}
        </li>
        <li
          v-if="false"
          class="c-list__item has-icon is-link"
          @click="wxMpBind"
        >
          <i class="c-iconfont c-iconfont--wechat fs34 t-primary"></i>
          {{ pt("$.bindWx") }}
        </li>
      </ul>
    </div>
    <div :class="$bem.box.$">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requiresLogin: true,
              url: '/pages/manage/products/list/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--product fs34 t-primary"></i>
          商品管理
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requiresLogin: true,
              url: '/pages/manage/distribute/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--distribute fs34 t-primary"></i>
          配送管理
        </li>
      </ul>
    </div>
    <u-button
      v-if="loggedIn()"
      custom-class="at-bottom w702"
      type="primary"
      style="bottom: 130rpx"
      @click="logoutAndGotoHome"
    >
      {{ $t("$.logout") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
