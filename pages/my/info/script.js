export default {
  data () {
    return {
      hasBirthday: false,
      cForm: {}
    }
  },
  async onShow () {
    this.id = this.$auth.get()['user'].id
    this.cForm = await this.getDetail()
    this.hasBirthday = !!this.cForm.birthday
  },
  methods: {
    async getDetail () {
      return this.$store.dispatch('wx/wxUsers/getDetail', {
        id: this.id
      })
    },
    handleBirthdayChange (e) {
      this.cForm.birthday = e.detail.value
    },
    handleGenderChange (e) {
      const { index: formIndex } = e.currentTarget.dataset
      const pickerIndex = +e.detail.value

      this.cForm.gender = this.$consts.GENDERS[pickerIndex].value
    },
    async save () {
      const { name, birthday, gender } = this.cForm

      if (!name) {
        this.$wx.showToast({
          title: '请填写姓名'
        })
        return
      }

      if (!birthday) {
        this.$wx.showToast({
          title: '请选择生日'
        })
        return
      }

      await this.$store.dispatch('wx/wxUsers/put', {
        id: this.id,
        body: { name, birthday, gender }
      })

      this.$auth.set({ name })

      this.$wx.showToast({ title: '保存成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
