export default {
  data () {
    return {
      cForm: {
        name: '',
        phoneNumber: '',
        content: ''
      }
    }
  },
  methods: {
    async submit () {
      const PHONE_REG = /^1\d{2}\s?\d{4}\s?\d{4}$/
      const { name, phoneNumber } = this.cForm

      if (!name.trim()) {
        this.$wx.showToast({ title: '请输入您的姓名' })
        return
      }

      if (!phoneNumber.trim()) {
        this.$wx.showToast({ title: '请填写手机号' })
        return
      }

      if (!PHONE_REG.test(phoneNumber)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      await this.$store.dispatch('wx/comments/post', {
        body: this.cForm
      })

      this.$wx.showToast({ title: '提交成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}

