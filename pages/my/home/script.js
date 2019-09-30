export default {
  methods: {
    async navigateToMyInfo () {
      await this.loggedIn()

      this.$wx.navigateTo({
        url: '/pages/my/info/index'
      })
    }
  }
}
