<template>
  <div class="cc-submit__collect" @click="updateProductIds">
    <i v-if="collected" class="c-iconfont c-iconfont--heart fs42 t-primary"></i>
    <i v-else class="c-iconfont c-iconfont--heart-off fs42"></i>
    <h2 class="fs24">{{ $t("titles.collect") }}</h2>
  </div>
</template>

<script src="./script.js"></script>
