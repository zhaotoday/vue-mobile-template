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
    this.list = await this.getList()
    this.loaded = true
  },
  methods: {
    getList () {
      return this.$store.dispatch('wx/studentProducts/getList', {
        query: {}
      })
    }
  }
}
