<template>
  <div class="p-user-home u-pt20">
    <div class="b-info bg-white u-mb20">
      <image v-if="avatarUrl" class="b-info__avatar" :src="avatarUrl" />
      <image v-else class="b-info__avatar" :src="defaultAvatarUrl" />
      <div class="b-info__extra">
        <h2 class="fs30">{{ name }}</h2>
      </div>
    </div>
    <div :class="$bem.box.$" class="u-mb20">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="$wx.navigateTo('/pages/user/info/index')"
        >
          编辑资料
        </li>
        <li
          class="c-list__item has-icon is-link"
          @click="$wx.navigateTo('/pages/user/account/home/index')"
        >
          <i class="c-iconfont c-iconfont--setup fs34"></i>
          账号设置
        </li>
        <li class="c-list__item has-icon is-link" @click="logoutAndGotoLogin">
          <i class="c-iconfont c-iconfont--logout fs34"></i>
          退出账号
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
