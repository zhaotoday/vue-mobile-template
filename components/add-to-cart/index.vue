<template>
  <div class="c-submit-bar">
    <div class="c-submit-bar__price bgc11">
      <span class="c23 fs26">￥</span>
      <span class="c23 fs40">{{ item.price }}</span>
    </div>
    <div
      v-if="!getNumber(item)"
      class="c-submit-bar__submit bgc21 c11 fs32 u-tac"
      @click="addToCart(item)">
      加入购物车
    </div>
    <div
      v-else
      class="c-submit-bar__submit bgc21 c11 fs32 u-tac"
      @click="subtractFromCart(item)">
      移出购物车
    </div>
  </div>
</template>

<script src="./script.js"></script>
