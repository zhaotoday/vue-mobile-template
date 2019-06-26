<template>
  <div class="p-login">
    <div class="b-logo-wrap">
      <c-logo></c-logo>
    </div>
    <h2 class="b-title fs32">力软商城将获取以下授权：</h2>
    <p class="b-desc c9 fs28">获得您的公开信息（昵称、头像等）</p>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      open-type="getUserInfo"
      @getuserinfo="handleGetUserInfo">
      授权登录
    </button>
  </div>
</template>

<script>
import { utils } from 'mp-client'
import CLogo from '@/components/logo'

export default {
  components: { CLogo },
  methods: {
    async handleGetUserInfo (e) {
      const getSettingRes = await this.$wx.getSetting()

      if (!getSettingRes.authSetting['scope.userInfo']) {
        this.$wx.showToast({ title: '授权登录后才能进行下一步操作' })
      } else {
        const loginRes = await this.$wx.login()
        const { iv, encryptedData } = await this.$wx.getUserInfo({
          withCredentials: true
        })
        const wxUsersPostActionRes = await this.$store.dispatch('public/wxUsers/postAction', {
          body: {
            type: 'MP_GET_USER_INFO',
            code: loginRes.code,
            iv,
            encryptedData,
            loginRes
          }
        })
        const { wxUser, token } = wxUsersPostActionRes.data
        const { from, action } = this.$mp.query
        const url = from ? `/${utils.url.decode(from)}` : this.$consts.INDEX_PAGE

        this.$auth.login({ user: wxUser, token })

        try {
          await this.$wx.navigateTo({ url })
        } catch (e) {
          await this.$wx.switchTab({ url })
        }
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
