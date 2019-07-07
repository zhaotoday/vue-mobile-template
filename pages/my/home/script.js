export default {
  data () {
    return {
      user: {}
    }
  },
  async onShow () {
    await this.loggedIn()
    await this.phoneNumberBound()
    this.user = this.$auth.get()['user']
  }
}
