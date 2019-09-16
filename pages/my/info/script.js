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
    async save () {
      const { name, birthday } = this.cForm

      if (!name.trim()) {
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
        body: { name, birthday }
      })

      this.$wx.showToast({ title: '保存成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
