<template>
  <div class="p-detail">
    <div class="bgc11 u-mt16">
      <h2 class="b-title fs46 u-tac">{{ detail.title }}</h2>
      <div
        class="b-content fs28"
        v-html="detail.content">
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
