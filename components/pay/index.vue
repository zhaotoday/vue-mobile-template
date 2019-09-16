<template>
  <div class="c-submit-bar">
    <div class="c-submit-bar__price bgc11">
      <span class="c23 fs26">￥</span>
      <span class="c23 fs48">{{ totalPrice }}</span>
    </div>
    <div
      class="c-submit-bar__submit bgc21 c11 fs32 u-tac"
      @click="pay">
      结算
    </div>
  </div>
</template>

<script src="./script.js"></script>
