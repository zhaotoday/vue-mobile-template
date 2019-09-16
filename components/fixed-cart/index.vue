<template>
  <div
    :class="[ 'c-fixed-cart bgc24 c11 fs28', { 'has-tab': hasTab } ]"
    @click="navigateTo('/pages/cart/index')">
    <div class="c-fixed-cart__number bgc25 fs20">{{ checkedCartProducts.length }}</div>
    ￥{{ totalPrice }}
  </div>
</template>

<script src="./script.js"></script>
