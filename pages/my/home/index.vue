<template>
  <div class="p-my">
    <div class="b-bg"></div>
    <img
      class="c-avatar"
      :src="user.avatarUrl"
    />
    <div class="b-name fs40 u-tac">赵金添</div>
    <div class="b-phone c35 fs28 u-tac">手机号：13950442340</div>

    <div class="c-list fs34">
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/my/info/index')">
        <i class="c-icon c-icon--info"></i>
        我的资料
      </div>
      <div
        class="c-list__item has-icon is-link"
        @click="navigateTo('/pages/addresses/list/index')">
        <i class="c-icon c-icon--course"></i>
        我的课程
      </div>
      <button
        class="c-list__item has-border is-button has-icon is-link fs34"
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
