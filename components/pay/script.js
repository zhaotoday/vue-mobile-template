import cartProductsMixin from '@/mixins/cart-products'

export default {
  name: 'c-pay',
  mixins: [cartProductsMixin],
  methods: {
    async pay () {
      if (!this.cartProducts.length) {
        this.$wx.showToast({
          title: '您还没有添加课程到购物车'
        })
        return
      }

      const { data } = await this.$store.dispatch('wx/payments/postAction', {
        body: {
          type: 'CREATE_UNIFIED_ORDER',
          payWay: '1',
          paidMoney: this.totalPrice,
          products: this.cartProducts,
        }
      })

      try {
        await this.$wx.requestPayment(data)

        this.$wx.redirectTo({
          url: `/pages/orders/index?status=2`
        })
      } catch (e) {
        this.$wx.redirectTo({
          url: `/pages/orders/index?status=1`
        })
      }

      this.$store.dispatch('public/cartProducts/setItems', {
        items: []
      })
    }
  }
}
