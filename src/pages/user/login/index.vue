<template>
  <div class="p-login">
    <div class="b-logo">
      <c-logo
        :name="$consts.SchoolConfig.name"
        :css-classes="{ __icon: ['u-circle'] }"
      />
    </div>
    <h2 class="b-title fs30">
      {{ $consts.SchoolConfig.name }}将获取以下授权：
    </h2>
    <p class="b-desc t-gray7 fs28">获得您的公开信息（昵称、头像等）</p>
    <div class="b-button">
      <button
        :class="bem.button.big.$"
        class="is-block bg-primary t-white"
        @click="login"
      >
        授权登录
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
