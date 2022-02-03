<template>
  <div class="p-login">
    <div class="b-logo">
      <u-avatar size="90" shape="square" :src="logoUrl" />
      <h2 class="fs28">XXX小程序</h2>
    </div>
    <h2 class="b-title fs32">XXX 小程序将获取以下授权：</h2>
    <p class="b-desc t-gray7 fs28">获得您的公开信息（昵称、头像等）</p>
    <div class="b-buttons">
      <u-row gutter="10">
        <u-col span="6">
          <u-button type="primary" plain @click="$wx.navigateBack()">
            拒绝
          </u-button>
        </u-col>
        <u-col span="6">
          <u-button type="primary" @click="login">允许</u-button>
        </u-col>
      </u-row>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
