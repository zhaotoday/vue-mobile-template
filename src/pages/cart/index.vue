<template>
  <div class="p-cart u-pt24 u-pb100">
    <gc-product-list :items="products" :col="1" selectable />
    <gc-cart-submit />
  </div>
</template>

<script src="./script.js"></script>
