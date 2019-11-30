import CLogo from '@/components/logo'

export default {
  components: { CLogo },
  methods: {
    async getUserInfo () {
      const getSettingRes = await this.$wx.getSetting()

      if (!getSettingRes.authSetting['scope.userInfo']) {
        this.$wx.navigateBack()
      } else {
        const loginRes = await this.$wx.login()
        const { iv, encryptedData } = await this.$wx.getUserInfo({
          withCredentials: true
        })
        const wxUsersPostActionRes = await this.$store.dispatch('public/wxUsers/postAction', {
          showLoading: true,
          body: {
            type: 'MP_GET_USER_INFO',
            code: loginRes.code,
            iv,
            encryptedData,
            loginRes
          }
        })
        const { wxUser, token } = wxUsersPostActionRes.data

        this.$auth.login({ user: wxUser, token })
        this.$wx.showToast({ title: '登录成功' })

        await this.$helpers.sleep(1500)

        if (!this.infoModified()) {
          this.$wx.redirectTo({
            url: this.$consts.INFO_PAGE
          })
        } else {
          this.$wx.navigateBack()
        }
      }
    }
  }
}
