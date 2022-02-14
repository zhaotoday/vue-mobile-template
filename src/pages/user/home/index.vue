<template>
  <div class="p-user-home u-pt24">
    <div class="b-info bg-white u-mb24">
      <template v-if="loggedIn()">
        <u-avatar
          size="120rpx"
          src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epbyHPGNLu9sAq9NSnaVqZkGKWzTYZaoNDBTfdfDH4kvbiaWtP1RMIK9B9Lqj4Q7WYNtO8JsLSdGkw/132"
        />
        <div class="b-info__extra">
          <h2 class="fs30">赵金添{{ name }}</h2>
          <h3 class="fs26">13950442340</h3>
        </div>
      </template>
      <template v-else>
        <u-avatar size="120rpx" :src="defaultAvatarUrl" />
        <u-button
          type="primary"
          custom-class="b-info__extra"
          custom-style="width: 130rpx"
          size="small"
          @click="$wx.navigateTo('/pages/user/mp-login/index')"
        >
          授权登录
        </u-button>
      </template>
    </div>
    <div
      class="u-pt30 u-pb30 u-mb24"
      :class="$bem.box.$"
      style="line-height: normal"
    >
      <u-grid col="4" :border="false">
        <u-grid-item v-for="(item, index) in menus" :key="index">
          <i
            class="c-iconfont fs50 t-primary"
            :class="`c-iconfont--${item.icon}`"
          ></i>
          <div class="fs26 u-pt10">
            {{ item.name }}
          </div>
        </u-grid-item>
      </u-grid>
    </div>
    <div :class="$bem.box.$" class="u-mb20">
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
              url: '/pages/user/password/index',
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
    <u-button
      custom-class="at-bottom w690"
      type="primary"
      style="bottom: 130rpx"
    >
      退出登录
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
