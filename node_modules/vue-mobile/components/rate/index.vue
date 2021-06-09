<template>
  <div class="c-rate" :class="modifier">
    <i
      v-for="(item, index) in 5"
      :key="index"
      class="c-iconfont c-iconfont--star"
      :class="score >= index + 1 ? activeClass : normalClass"
      @click="rate(index + 1)"
    ></i>
    <span>{{ score }}分</span>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
