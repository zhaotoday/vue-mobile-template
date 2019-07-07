export default {
  data () {
    return {
      cForm: {},
      cCheckCode: {
        disabled: false,
        message: '获取验证码'
      }
    }
  },
  onLoad () {
    this.$wx.setNavigationBarTitle({
      title: this.$mp.query.modify ? '更换手机号' : '绑定手机号'
    })
  },
  methods: {
    getCheckCode (phoneNumber) {
      return this.$store.dispatch('wx/wxUsers/postAction', {
        body: {
          type: 'GET_CHECK_CODE',
          phoneNumber
        }
      })
    },
    async handleGetCheckCode () {
      if (this.cCheckCode.disabled) return

      const { phoneNumber } = this.cForm

      if (!phoneNumber) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(phoneNumber)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      await this.getCheckCode(phoneNumber)

      this.$wx.showToast({ title: '验证码获取成功' })

      let i = 0
      let leftSeconds = 120

      this.cCheckCode.disabled = true
      this.cCheckCode.message = `${leftSeconds} 秒后重新获取`

      this.timer = setInterval(() => {
        this.cCheckCode.message = `${leftSeconds - ++i} 秒后重新获取`

        if (leftSeconds === i) {
          clearInterval(this.timer)

          this.cCheckCode.disabled = false
          this.cCheckCode.message = '获取验证码'
        }
      }, 1000)
    },
    async confirm () {
      const { phoneNumber, checkCode } = this.cForm

      if (!phoneNumber) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(phoneNumber)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      if (!checkCode) {
        this.$wx.showToast({ title: '验证码不能为空' })
        return
      }

      if (checkCode.length < 6) {
        this.$wx.showToast({ title: '验证码格式错误' })
        return
      }

      await this.$store.dispatch('wx/wxUsers/postAction', {
        showLoading: true,
        body: {
          type: 'BIND_PHONE_NUMBER',
          phoneNumber,
          checkCode
        }
      })

      this.$auth.setPhoneNumber({ phoneNumber })
      this.$wx.showToast({ title: '绑定成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
