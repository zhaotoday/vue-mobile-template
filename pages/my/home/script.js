export default {
  data () {
    return {
      user: {},
      detail: {}
    }
  },
  async onShow () {
    await this.loggedIn()
    await this.phoneNumberBound()

    this.detail = await this.getDetail()
    this.user = this.$auth.get()['user']
  },
  methods: {
    async getDetail () {
      return this.$store.dispatch('wx/wxUsers/getDetail', {
        id: this.$auth.get()['user'].id
      })
    }
  }
}
