<template>
  <div
    v-if="user.id"
    class="p-my">
    <div class="b-bg"></div>
    <img
      class="c-avatar"
      :src="user.avatarUrl"
    />
    <div class="b-name fs40 u-tac">{{ detail.name || user.nickName }}</div>
    <div class="b-phone c35 fs28 u-tac">手机号：{{ user.phoneNumber }}</div>
    <div class="c-list fs34">
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/my/info/index')">
        <i class="c-icon c-icon--info"></i>
        我的资料
      </div>
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/orders/index')">
        <i class="c-icon c-icon--order"></i>
        我的订单
      </div>
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/my/products/home/index')">
        <i class="c-icon c-icon--product"></i>
        我的课程
      </div>
      <button
        class="c-list__item has-border is-button has-icon is-link bgc11 fs34"
        open-type="contact">
        <i class="c-icon c-icon--service"></i>
        客户服务
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
