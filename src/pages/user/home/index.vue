<template>
  <div class="p-user-home u-pt20">
    <div class="b-info bg-white u-mb20">
      <u-avatar v-if="avatarUrl" size="120rpx" :src="avatarUrl" />
      <u-avatar v-else size="120rpx" :src="defaultAvatarUrl" />
      <div class="b-info__extra">
        <h2 class="fs30">赵金添{{ name }}</h2>
        <h3 class="fs26">13950442340</h3>
      </div>
    </div>
    <div :class="$bem.box.$" class="u-mb20">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="$wx.navigateTo('/pages/user/info/index')"
        >
          我的资料
        </li>
        <li class="c-list__item has-icon is-link">修改密码</li>
        <li class="c-list__item has-icon is-link">绑定手机号</li>
        <li class="c-list__item has-icon is-link">绑定微信</li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
