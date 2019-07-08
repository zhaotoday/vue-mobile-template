import CCheckbox from '@/components/checkbox'
import { mapState } from 'vuex'

export default {
  components: { CCheckbox },
  computed: mapState({
    wxUsersDetail: state => state['wx/wxUsers'].detail
  }),
  data () {
    return {
      hasBirthday: false,
      cForm: {}
    }
  },
  async onShow () {
    this.cForm = await this.getWxUsersDetail()
  },
  methods: {
    async getWxUsersDetail () {
      return this.$store.dispatch('wx/wxUsers/getDetail', {
        id: this.$auth.get()['user'].id
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

      if (!this.birthday) {
        this.$wx.showToast({
          title: '请选择生日'
        })
        return
      }

      await this.$store.dispatch('wx/wxUsers/post', {
        body: { name, birthday }
      })

      this.$wx.showToast({ title: '保存成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
