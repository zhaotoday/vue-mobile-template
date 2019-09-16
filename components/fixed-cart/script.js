import cartProductsMixin from '@/mixins/cart-products'

export default {
  name: 'c-fixed-cart',
  mixins: [cartProductsMixin],
  props: {
    hasTab: {
      type: Boolean,
      default: false
    }
  }
}
