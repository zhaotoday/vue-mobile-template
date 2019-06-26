<template>
  <div class="c-cart-manager c1">
    <div class="c-cart-manager__checked bgc11 fs28">
      <c-checkbox
        class="c-cart-manager__checkbox"
        :checked="!cart.find(item => !item.checked)"
        @change="handleCheckboxChange">
      </c-checkbox>
      <div class="fs28">已选中（{{ checkedProducts.length }}）</div>
      <div class="c-cart-manager__money fs32">￥{{ totalPrice }} 元</div>
    </div>
    <div
      class="c-cart-manager__settle bgc5 fs32 u-tac"
      @click="handleGoToPay">
      去结算
    </div>
  </div>
</template>

<script>
import CCheckbox from '../checkbox/index'
import cartUtils from '@/utils/cart'

export default {
  name: 'c-cart-manager',
  components: { CCheckbox },
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    checkedProducts () {
      return this.cart.filter(item => item.checked)
    },
    totalPrice () {
      return cartUtils.getTotalPrice(this.checkedProducts)
    }
  },
  methods: {
    handleCheckboxChange () {
      if (this.cart.find(item => !item.checked)) {
        this.$emit('check', true)
      } else {
        this.$emit('check', false)
      }
    },
    async handleGoToPay () {
      const { data: { id } } = await this.$store.dispatch('wx/carts/postAction', {
        body: { type: 'CLOSE' }
      })

      this.$wx.navigateTo({ url: `/pages/pay/index?cartId=${id}` })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
