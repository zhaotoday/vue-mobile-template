<template>
  <div class="c-toggle c21 fs24 u-tac" @click="toggle">
    <template v-if="!show">
      {{ showText }}
      <i class="c-iconfont c-iconfont--show fs24"></i>
    </template>
    <template v-else>
      {{ hideText }}
      <i class="c-iconfont c-iconfont--hide fs24"></i>
    </template>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
