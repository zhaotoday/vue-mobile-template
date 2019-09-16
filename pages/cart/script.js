import cartProductsMixin from '@/mixins/cart-products'
import CPay from '@/components/pay'
import CEmpty from '@/components/empty'

export default {
  mixins: [cartProductsMixin],
  components: { CPay, CEmpty },
  data () {
    return {
      newsList: {
        items: [],
        total: 0
      }
    }
  },
  onShow () {
    this.loaded = true
  }
}
