<template>
  <div class="c-product-actions">
    <div class="c-product-actions__collect bgc1 is-active"></div>
    <div class="c-product-actions__add-cart bgc4 c1 fs32 u-tac">加入购物车</div>
  </div>
</template>

<script>
import CCheckbox from '../checkbox/index'
import cartUtils from '@/utils/cart'

export default {
  name: 'c-product-actions'
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
