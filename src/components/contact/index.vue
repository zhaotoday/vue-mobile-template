<template>
  <ul class="c-contact">
    <li
      class="c-contact bg-secondary"
      @click="$wx.makePhoneCall({ phoneNumber: '7204466' })"
    >
      <i class="c-iconfont c-iconfont--telephone t-white fs40"></i>
    </li>
    <li
      class="c-contact bg-secondary"
      @click="$wx.makePhoneCall({ phoneNumber: '7204466' })"
    >
      <i class="c-iconfont c-iconfont--telephone t-white fs40"></i>
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
