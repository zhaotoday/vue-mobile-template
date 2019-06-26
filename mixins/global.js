import { mapActions } from 'vuex'
import $consts from '@/utils/consts'

export default {
  data () {
    return { $consts }
  },
  onShareAppMessage () {
    return {
      title: '小程序名称',
      path: `pages/index/index`
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
    loggedIn ({ action = '' } = {}) {
      const { page: { route } } = this.$parent ? this.$parent.$mp : this.$mp
      const url = `${this.$consts.LOGIN_PAGE}?from=${route}&action=${action}`

      return new Promise(async (resolve, reject) => {
        if (!this.$auth.loggedIn()) {
          await this.$wx.navigateTo({ url })
          reject()
        } else {
          const user = this.$auth.get()['user']
          resolve({ user })
        }
      })
    },
    phoneNumberBound () {
      const { page: { route } } = this.$parent ? this.$parent.$mp : this.$mp
      const url = `${this.$consts.BIND_PAGE}?from=${route}`

      return new Promise(async (resolve, reject) => {
        if (!this.$auth.phoneNumberBound()) {
          await this.$wx.navigateTo({ url })
          reject()
        } else {
          const user = this.$auth.get()['user']
          resolve({ user })
        }
      })
    }
  }
}
