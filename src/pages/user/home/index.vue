<template>
  <div class="p-user-home u-pt24">
    <div class="b-info bg-white u-mb24">
      <template v-if="loggedIn()">
        <u-avatar size="120rpx" :src="avatarUrl || defaultAvatarUrl" />
        <div class="b-info__extra">
          <h2 class="fs30">{{ name }}</h2>
          <h3 class="fs26" v-if="user.phoneNumber">{{ user.phoneNumber }}</h3>
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
          {{ t("titles.login") }}
        </u-button>
      </template>
    </div>
    <div class="b-entries u-pt30 u-pb30 u-mb24" :class="$bem.box.$">
      <u-grid col="4" :border="false">
        <u-grid-item
          v-for="(item, index) in menus"
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
    <div :class="$bem.box.$">
      <ul class="c-list bg-white fs28">
        <li
          class="c-list__item has-icon is-link"
          @click="
            navigateTo({ requiresLogin: true, url: '/pages/user/info/index' })
          "
        >
          <i class="c-iconfont c-iconfont--info fs34 t-primary"></i>
          {{ t("titles.myInformation") }}
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
          {{ t("titles.modifyPassword") }}
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
          {{ t("titles.bindPhoneNumber") }}
        </li>
        <li
          v-if="false"
          class="c-list__item has-icon is-link"
          @click="wxMpBind"
        >
          <i class="c-iconfont c-iconfont--wechat fs34 t-primary"></i>
          {{ t("titles.bindWx") }}
        </li>
      </ul>
    </div>
    <u-button
      v-if="loggedIn()"
      custom-class="at-bottom w702"
      type="primary"
      style="bottom: 130rpx"
      @click="logoutAndGotoHome"
    >
      {{ $t("titles.logout") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
