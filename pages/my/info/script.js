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
      cForm: {
        name: '测试',
        phoneNumber: '13950442340',
        birthday: ''
      }
    }
  },
  async onShow () {
    const { name, birthday } = await this.getWxUsersDetail()

    this.cForm.name = name
    this.cForm.birthday = birthday
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
      if (this.submitDisabled) {
        return
      }

      const { name, birthday } = this.cForm

      await this.$store.dispatch('wx/wxUsers/post', {
        body: { name, birthday }
      })

      this.$wx.showToast({ title: '保存成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
