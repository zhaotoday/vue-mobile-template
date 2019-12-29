import AsyncValidator from 'async-validator'

export default {
  data () {
    return {
      cForm: {
        model: {},
        rules: {
          phoneNumber: [
            {
              required: true,
              message: '手机号不能为空'
            },
            {
              pattern: /^1\d{2}\s?\d{4}\s?\d{4}$/,
              message: '手机号格式错误'
            }
          ],
          checkCode: [
            {
              required: true,
              message: '验证码不能为空'
            },
            {
              max: 6,
              message: '验证码格式错误'
            }
          ]
        }
      },
      cCheckCode: {
        disabled: false,
        message: '获取验证码'
      }
    }
  },
  onLoad () {
    this.$wx.setNavigationBarTitle({
      title: this.$mp.query.update ? '更换手机号' : '绑定手机号'
    })
  },
  methods: {
    async getCheckCode () {
      if (this.cCheckCode.disabled) return

      const rules = {
        phoneNumber: this.cForm.rules.phoneNumber
      }
      const { model } = this.cForm

      new AsyncValidator(rules).validate(model, async (errors, fields) => {
        if (errors) {
          this.$wx.showToast({ title: errors[0].message })
          return
        }

        this.$store.dispatch('wx/wxUsers/postAction', {
          body: {
            type: 'GET_CHECK_CODE',
            phoneNumber: model.phoneNumber
          }
        })

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
      })
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

      this.$auth.set({ phoneNumber })
      this.$wx.showToast({ title: '绑定成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
