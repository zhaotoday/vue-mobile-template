<template>
  <div class="p-my-home">
    <div class="b-info bg-primary t-white u-tac">
      <template v-if="wxUser.id">
        <img class="c-avatar r168" :src="wxUser.avatarUrl" />
        <div class="b-name fs40">{{ wxUser.name || wxUser.nickName }}</div>
        <div v-if="wxUser.phoneNumber" class="b-phone fs28">
          手机号：{{ wxUser.phoneNumber }}
        </div>
      </template>
      <template v-else>
        <image
          class="c-avatar r168"
          :src="avatarUrl"
          @click="$wx.navigateTo('/pages/login/index')"
        />
        <div
          class="b-login c-tag h50 u-br8 bd-white fs28"
          @click="$wx.navigateTo('/pages/login/index')"
        >
          授权登录
        </div>
      </template>
    </div>
    <div class="c-list fs30">
      <div
        class="c-list__item has-icon is-link"
        @click="
          navigateTo({ requiresLogin: true, url: '/pages/my/info/index' })
        "
      >
        <i class="c-iconfont c-iconfont--info t-primary fs36"></i>
        我的资料
      </div>
      <button
        class="c-list__item is-button has-icon is-link bg-white fs30"
        open-type="contact"
      >
        <i class="c-iconfont c-iconfont--service t-primary fs36"></i>
        客户服务
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
