<template>
  <div class="p-home">
    <div class="bg-primary u-p30">
      <u-search
        disabled
        :show-action="false"
        @click="$wx.navigateTo('/pages/user/account-register/index')"
      />
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
