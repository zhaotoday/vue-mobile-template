import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartProducts: 'public/cartProducts/filteredItems',
      checkedCartProducts: 'public/cartProducts/checkedItems'
    }),
    totalPrice () {
      let totalPrice = 0

      this.checkedCartProducts.forEach(product => {
        if (product.price) {
          totalPrice += product.price * product.number
        } else {
          product.specifications.forEach(specification => {
            totalPrice += specification.price * specification.number
          })
        }
      })

      return parseFloat(totalPrice.toFixed(2))
    }
  },
  methods: {
    getNumber (item, specification) {
      const cartProduct = this.cartProducts.find(product => product.id === item.id)

      if (cartProduct) {
        if (specification) {
          return (cartProduct.specifications.find(item => item.value === specification.value) || {})['number'] || 0
        } else {
          return cartProduct.number
        }
      } else {
        return 0
      }
    },
    addCartKeys (item) {
      const cartProduct = this.cartProducts.find(product => product.id === item.id)

      return item.id ? {
        ...item,
        visible: cartProduct
          ? !!(cartProduct.specifications.find(cartSpecification => !!cartSpecification.number))
          : false,
        checked: true,
        number: cartProduct ? cartProduct.number : 0,
        specifications: item.specifications
          ? item.specifications.map(specification => {
            const cartSpecification = cartProduct
              ? cartProduct.specifications.find(cartSpecification => cartSpecification.value === specification.value)
              : null

            return {
              ...specification,
              number: cartSpecification ? cartSpecification.number : 0
            }
          })
          : []
      } : {}
    },
    addNumber (item, specification) {
      this.$store.dispatch('public/cartProducts/addNumber', { item, specification })
    },
    subtractNumber (item, specification) {
      this.$store.dispatch('public/cartProducts/subtractNumber', { item, specification })
    }
  }
}
