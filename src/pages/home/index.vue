<template>
  <div class="p-home u-m20">
    <!-- 以下是 vue-mobile 框架中已优化过的组件样式类实例 -->

    <!-- c-avatar -->
    <image
      class="c-avatar r168"
      mode="aspectFill"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <image
      class="c-avatar w168 u-br8"
      mode="aspectFill"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <image
      class="c-avatar r168"
      src="~vue-mobile/assets/images/components/avatar/default.png"
    />

    <!-- title -->
    <div class="c-title c-title--md fs32 u-mb30">标题</div>
    <div class="c-title c-title--bg fs32 u-mb30">大标题</div>

    <!-- button -->
    <button class="c-button w650 h76 u-br8 bg--primary c--white fs32">
      允许
    </button>

    <!-- icon -->
    <i class="c-icon c-icon--logo"></i>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
