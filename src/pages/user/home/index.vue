<template>
  <div class="p-user-home u-pt20">
    <div
      class="b-info bg-white u-mb20"
      @click="$wx.navigateTo('/pages/user/info/index')"
    >
      <image v-if="avatarUrl" class="b-info__avatar" :src="avatarUrl" />
      <image v-else class="b-info__avatar" :src="defaultAvatarUrl" />
      <div class="b-info__extra">
        <h2 class="fs30">{{ name }}</h2>
      </div>
      <div class="b-info__links">
        <div class="c-tag h44 fs24 bgc21 c11">编辑资料</div>
      </div>
    </div>
    <div :class="bem.box.$" class="u-mb20">
      <ul class="c-list bg-white fs28">
        <li class="c-list__item has-icon is-link">
          <i class="c-iconfont c-iconfont--link fs34"></i>
          我与 1 个 机构 2个 部门 设置了业务关系
        </li>
        <li class="c-list__item has-icon is-link">
          <i class="c-iconfont c-iconfont--share fs34"></i>
          我与 33名 伙伴 设置了业务信息共享
        </li>
      </ul>
    </div>
    <div :class="bem.box.$" class="u-mb20">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="$wx.navigateTo('/pages/user/account/home/index')"
        >
          <i class="c-iconfont c-iconfont--setup fs34"></i>
          账号设置
        </li>
        <li class="c-list__item has-icon is-link">
          <i class="c-iconfont c-iconfont--help fs34"></i>
          帮助文档
        </li>
        <li class="c-list__item has-icon is-link">
          <i class="c-iconfont c-iconfont--letter fs34"></i>
          问题需求反馈
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
