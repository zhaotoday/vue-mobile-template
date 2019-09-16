export default {
  data () {
    return {
      list: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    this.list = await this.getList()
  },
  methods: {
    getList () {
      return this.$store.dispatch('public/natatoriums/getList', {
        query: {}
      })
    }
  }
}
