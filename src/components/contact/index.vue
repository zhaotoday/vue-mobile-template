<template>
  <ul class="c-contacts">
    <li
      class="c-contacts__item bg-secondary"
      @click="$wx.makePhoneCall({ phoneNumber: '7204466' })"
    >
      <i class="c-iconfont c-iconfont--telephone t-white fs40"></i>
    </li>
    <li
      class="c-contacts__item bg-secondary u-mt20"
      @click="
        $wx.navigateTo(
          '/pages/im/chats/detail/index?toUserId=2&toUserName=客服'
        )
      "
    >
      <i class="c-iconfont c-iconfont--service-filled t-white fs40"></i>
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
