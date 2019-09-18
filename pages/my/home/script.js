export default {
  async onShow () {
    await this.loggedIn()
    await this.phoneNumberBound()
  }
}
