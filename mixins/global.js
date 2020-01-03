import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      $consts: this.$consts,
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
    redirectTo (url) {
      this.$wx.redirectTo({ url })
    },
    reLaunch (url) {
      this.$wx.reLaunch({ url })
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
    infoModified () {
      return new Promise(async (resolve, reject) => {
        if (!this.$auth.infoModified()) {
          await this.$wx.navigateTo({
            url: this.$consts.INFO_PAGE
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
            url: this.$consts.PHONE_NUMBER_PAGE
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
    },
    filterList (list, key) {
      return {
        ...list,
        items: list.items.filter(item => !!item[key])
      }
    },
    getImageById (id) {
      return `${this.$consts.API_URL}/public/files/${id}`
    },
    getImageURL ({ id, width, height }) {
      let sizeParams = ''

      if (width && height) {
        sizeParams = `?imageView2/1/w/${width}/h/${height}/q/100`
      } else if (width) {
        sizeParams = `?imageView2/2/w/${width}/q/100`
      } else if (height) {
        sizeParams = `?imageView2/2/h/${height}/q/100`
      }

      return `${this.$consts.CDN_URL}/${id}${sizeParams}`
    }
  }
}
