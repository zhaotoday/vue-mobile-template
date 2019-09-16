import CEmpty from '@/components/empty'

export default {
  components: { CEmpty },
  data () {
    return {
      list: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    this.$wx.setNavigationBarTitle({
      title:`“${this.$mp.query.title}”课程点评`
    })
    this.list = await this.getList()
  },
  methods: {
    getList () {
      return this.$store.dispatch('wx/studentProducts/getList', {
        query: {}
      })
    }
  }
}
