import CEmpty from '@/components/empty'

export default {
  components: { CEmpty },
  data () {
    return {
      query: {},
      list: {
        items: []
      }
    }
  },
  async onShow () {
    this.list = await this.getList()
    this.query.my = this.$mp.query.my
    this.query.studentProductId = this.$mp.query.studentProductId
    this.loaded = true
  },
  methods: {
    getList () {
      return this.$store.dispatch('wx/studentProductComments/getList', {
        query: {
          where: {
            studentProductId: { $eq: this.$mp.query.studentProductId }
          }
        }
      })
    }
  }
}
