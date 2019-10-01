<template>
  <div class="p-my">
    <div class="b-info bgc21 c11 u-tac">
      <template v-if="user.id">
        <img
          class="c-avatar"
          :src="user.avatarUrl"
        />
        <div class="b-name fs40">{{ detail.name || user.nickName }}</div>
        <div class="b-phone fs28">手机号：{{ user.phoneNumber }}</div>
      </template>
      <template v-else>
        <div
          class="c-avatar c-avatar--default"
          @click="navigateTo($consts.LOGIN_PAGE)">
        </div>
        <div
          class="b-login c-tag w60 h50 bdc11 br8 fs28"
          @click="navigateTo($consts.LOGIN_PAGE)">
          授权登录
        </div>
      </template>
    </div>
    <div class="c-list fs34">
      <div
        class="c-list__item has-icon is-link"
        @click="navigateToMyInfo">
        <i class="c-icon c-icon--info"></i>
        我的资料
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
