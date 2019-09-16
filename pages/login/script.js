import { utils } from 'mp-client'
import CLogo from '@/components/logo'

export default {
  components: { CLogo },
  methods: {
    async getUserInfo (e) {
      const getSettingRes = await this.$wx.getSetting()

      if (!getSettingRes.authSetting['scope.userInfo']) {
        this.$wx.showToast({ title: '授权登录后才能进行下一步操作' })
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

        if (!this.$auth.phoneNumberBound()) {
          this.$wx.redirectTo({
            url: this.$consts.BIND_PAGE
          })
        } else {
          this.$wx.navigateBack()
        }
      }
    }
  }
}
