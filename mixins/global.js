import { mapActions } from 'vuex'
import $consts from '@/utils/consts'

export default {
  data () {
    return {
      $consts,
      loaded: false
    }
  },
  onShareAppMessage () {
    return {
      title: '小程序名称',
      path: this.$consts.HOME_PAGE
    }
  },
  methods: {
    ...mapActions({
      resetState: 'resetState'
    }),
    navigateTo (url) {
      this.$wx.navigateTo({ url })
    },
    switchTab (url) {
      this.$wx.switchTab({ url })
    },
    loggedIn () {
      return new Promise(async (resolve, reject) => {
        if (!this.$auth.loggedIn()) {
          await this.$wx.navigateTo({
            url: this.$consts.LOGIN_PAGE
          })
          reject()
        } else {
          const user = this.$auth.get()['user']
          resolve({ user })
        }
      })
    },
    phoneNumberBound () {
      return new Promise(async (resolve, reject) => {
        if (!this.$auth.phoneNumberBound()) {
          await this.$wx.navigateTo({
            url: this.$consts.BIND_PAGE
          })
          reject()
        } else {
          const user = this.$auth.get()['user']
          resolve({ user })
        }
      })
    }
  }
}
