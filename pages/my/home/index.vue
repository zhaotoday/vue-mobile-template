<template>
  <div
    v-if="user.id"
    class="p-my-home">
    {{ user.nickName }}
    {{ user.phoneNumber }}
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
