import cartProductsMixin from '@/mixins/cart-products'

export default {
  name: 'c-add-to-cart',
  mixins: [cartProductsMixin],
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    addToCart (item) {
      if (typeof item.number === 'undefined') {
        item = {
          ...item,
          number: 0,
          checked: true,
          visible: true,
          specifications: []
        }
      }
      this.addNumber(item)
    },
    subtractFromCart (item) {
      if (typeof item.number === 'undefined') {
        item = {
          ...item,
          number: 1,
          checked: true,
          visible: true,
          specifications: []
        }
      }
      this.subtractNumber(item)
    }
  }
}
