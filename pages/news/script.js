export default {
  data () {
    return {
      newsList: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    this.newsList = await this.getNewsList()
  },
  methods: {
    getNewsList () {
      return this.$store.dispatch('public/articles/getList', {
        query: {
          where: {
            alias: { $eq: 'club-news' }
          }
        }
      })
    }
  }
}
