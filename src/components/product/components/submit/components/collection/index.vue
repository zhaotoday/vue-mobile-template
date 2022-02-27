<template>
  <div class="cc-submit__collect" @click="updateProductIds">
    <i v-if="collected" class="c-iconfont c-iconfont--heart fs42 t-primary"></i>
    <i v-else class="c-iconfont c-iconfont--heart-off fs42"></i>
    <h2 class="fs24">收藏</h2>
  </div>
</template>

<script src="./script.js"></script>
