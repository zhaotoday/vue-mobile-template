<template>
  <div class="cc-submit__collect" @click="updateProductIds">
    <i v-if="collected" class="c-iconfont c-iconfont--heart fs42 t-error"></i>
    <i v-else class="c-iconfont c-iconfont--heart-off fs42"></i>
    <h2 class="fs24 u-lh1">收藏</h2>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="../../style.scss"></style>
