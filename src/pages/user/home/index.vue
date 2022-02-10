<template>
  <div class="p-user-home u-pt20">
    <div class="b-info bg-white u-mb20">
      <template v-if="loggedIn()">
        <u-avatar size="120rpx" :src="avatarUrl" />
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
    <div :class="$bem.box.$" class="u-mb20">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="navigateTo('/pages/user/info/index')"
        >
          我的资料
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="navigateTo('/pages/user/password/index')"
        >
          修改密码
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="navigateTo('/pages/user/password/index')"
        >
          绑定手机号
        </li>
        <li class="c-list__item has-icon is-link" @click="wxMpBind">
          <i class="c-iconfont c-iconfont--phone fs34"></i>
          绑定微信
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
