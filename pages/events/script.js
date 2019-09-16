export default {
  data () {
    return {
      eventsList: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    this.eventsList = await this.getEventsList()
  },
  methods: {
    getEventsList () {
      return this.$store.dispatch('public/articles/getList', {
        query: {
          where: {
            alias: { $eq: 'events' }
          }
        }
      })
    }
  }
}
