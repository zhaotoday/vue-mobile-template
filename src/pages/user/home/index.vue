<template>
  <div class="p-user-home has-nav-bar u-pt24">
    <!-- app computed bug -->
    <div v-show="false">{{ users.user }}</div>
    <div class="b-info bg-white u-mb24">
      <template v-if="loggedIn()">
        <u-avatar
          size="120rpx"
          mode="aspectFill"
          :src="avatarUrl || defaultAvatarUrl"
        />
        <div class="b-info__extra">
          <h2 class="fs30">姓名：{{ name }}</h2>
          <h3 class="fs26" v-if="user.phoneNumber">
            手机号：{{ user.phoneNumber }}
          </h3>
        </div>
      </template>
      <template v-else>
        <u-avatar size="120rpx" mode="aspectFill" :src="defaultAvatarUrl" />
        <div class="b-info__extra">
          <u-button
            type="primary"
            custom-style="width: 130rpx"
            size="small"
            @click="$uni.navigateTo($consts.LOGIN_URL)"
          >
            登录
          </u-button>
          <u-button
            type="primary"
            custom-style="width: 130rpx"
            size="small"
            @click="$uni.navigateTo('/pages/user/account-register/index')"
          >
            注册
          </u-button>
        </div>
      </template>
    </div>
    <div class="b-entries u-pt30 u-pb30 u-mb24" :class="$bem.box.$">
      <u-grid col="4" :border="false">
        <u-grid-item
          v-for="(item, index) in mainMenus"
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
              requiresLogin: true,
              url: '/pages/user/orders/list/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--order fs34 t-primary"></i>
          我的订单
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({
              requiresLogin: true,
              url: '/pages/user/addresses/list/index',
            })
          "
        >
          <i class="c-iconfont c-iconfont--address fs34 t-primary"></i>
          收货地址
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
          我的资料
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
          修改密码
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
          绑定手机号
        </li>
        <li
          v-if="false"
          class="c-list__item has-icon is-link"
          @click="wxMpBind"
        >
          <i class="c-iconfont c-iconfont--wechat fs34 t-primary"></i>
          绑定微信
        </li>
      </ul>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="$uni.makePhoneCall({ phoneNumber: '7204466' })"
        >
          <i class="c-iconfont c-iconfont--telephone fs34 t-primary"></i>
          联系我们
        </li>
      </ul>
    </div>
    <u-button
      v-if="loggedIn()"
      custom-class="b-logout w702"
      type="primary"
      @click="logoutAndGotoHome"
    >
      退出账号
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
