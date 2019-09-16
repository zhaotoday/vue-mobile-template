import CAddToCart from '@/components/add-to-cart'
import CFixedCart from '@/components/fixed-cart'

export default {
  components: { CAddToCart, CFixedCart },
  data () {
    return {
      detail: {}
    }
  },
  async onShow () {
    this.id = this.$mp.query.id
    this.detail = await this.getDetail()
    this.loaded = true
    this.$wx.setNavigationBarTitle({
      title: this.detail.name
    })
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })
    },
    previewImage (image) {
      this.$wx.previewImage({
        current: image,
        urls: [image]
      })
    }
  }
}
