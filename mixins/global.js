import { mapActions, mapState } from 'vuex'
import $consts from '@/utils/consts'

export default {
  data () {
    return {
      $consts,
      loaded: false,
      query: {}
    }
  },
  computed: mapState(['user']),
  onShareAppMessage () {
    return {
      title: this.$consts.NAME,
      path: this.$consts.HOME_PAGE
    }
  },
  onShow () {
    if (this.$auth.loggedIn()) {
      this.$store.dispatch('setUser', {
        user: this.$auth.get()['user']
      })
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
    navigateBack (delta = 1) {
      this.$wx.navigateBack({ delta })
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
    },
    wrapHTML (html) {
      return html.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
    }
  }
}
