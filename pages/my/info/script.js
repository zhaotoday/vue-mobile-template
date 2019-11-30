export default {
  data () {
    return {
      hasBirthday: false,
      cForm: {}
    }
  },
  async onShow () {
    this.cForm = await this.getDetail()
    this.hasBirthday = !!this.cForm.birthday
  },
  methods: {
    async getDetail () {
      return this.$store.dispatch('wx/wxUsers/getDetail', {
        id: this.user.id
      })
    },
    handleBirthdayChange (e) {
      this.cForm.birthday = e.detail.value
    },
    handleGenderChange (e) {
      const pickerIndex = +e.detail.value
      this.cForm.gender = this.$consts.GENDERS[pickerIndex].value
    },
    async save () {
      const { name, phoneNumber, birthday, gender } = this.cForm

      if (!name) {
        this.$wx.showToast({ title: '请填写姓名' })
        return
      }

      if (!phoneNumber) {
        this.$wx.showToast({ title: '请绑定手机号' })
        return
      }

      if (!birthday) {
        this.$wx.showToast({ title: '请选择生日' })
        return
      }

      await this.$store.dispatch('wx/wxUsers/put', {
        id: this.user.id,
        body: { name, birthday, gender }
      })

      this.$auth.set({ name })

      this.$wx.showToast({ title: '保存成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
