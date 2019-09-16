import { mapState } from 'vuex'

export default {
  computed: mapState({
    detail: state => state['public/articles'].detail
  }),
  onShow () {
    this.$wx.setNavigationBarTitle({
      title: this.$mp.query.title
    })
    this.getDetail()
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('public/articles/getDetail', {
        id: this.$mp.query.id
      })
    }
  }
}
