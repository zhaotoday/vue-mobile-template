<template>
  <div class="p-login">
    <div class="b-logo">
      <c-logo name="XXX 小程序" :css-classes="{ __icon: ['u-circle'] }" />
    </div>
    <h2 class="b-title fs32">XXX 小程序将获取以下授权：</h2>
    <p class="b-desc t-gray7 fs28">获得您的公开信息（昵称、头像等）</p>
    <div class="b-buttons o-grid o-grid--12">
      <div class="o-grid__row">
        <div class="o-grid__col o-grid__col--6 p20">
          <button
            :class="$bem.button.middle.$"
            class="is-block bg-white bd-primary t-primary"
            @click="$wx.navigateBack()"
          >
            拒绝
          </button>
        </div>
        <div class="o-grid__col o-grid__col--6 p20">
          <button
            :class="$bem.button.middle.$"
            class="is-block bg-primary t-white"
            @click="login"
          >
            允许
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
