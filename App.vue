<script>
export default {
  onLaunch () {
    this.setOpenId()
  },
  onShow () {
    console.log('App Show')
  },
  onHide () {
    console.log('App Hide')
  },
  methods: {
    async setOpenId () {
      if (!this.$auth.get()['openId']) {
        const { code } = await this.$wx.login({
          withCredentials: true
        })

        const { data: { openId } } = await this.$store.dispatch('public/wxUsers/postAction', {
          body: { type: 'MP_CODE_TO_SESSION', code }
        })

        this.$auth.setOpenId({ openId })
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles/global/index.scss">
</style>
