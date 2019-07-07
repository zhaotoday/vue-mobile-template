import CCheckbox from '@/components/checkbox'
import { mapState } from 'vuex'

const toast = require('@/eo-utils/toast')

export default {
  components: { CCheckbox },
  computed: {
    ...mapState({
      wxUsersDetail: state => state['private/users'].detail
    }),
    encryptedMobile () {
      const { mobile } = this.wxUsersDetail
      return mobile ? `${mobile.substring(0, 3)}****${mobile.substring(8, 11)}` : ''
    },
    submitDisabled () {
      const { cForm, cFormCache } = this

      return cForm.headimgurl === cFormCache.headimgurl &&
        cForm.nickname === cFormCache.nickname &&
        cForm.sex === cFormCache.sex &&
        cForm.birthday === cFormCache.birthday
    }
  },
  data () {
    return {
      hasBirthday: false,
      cForm: {
        headimgurl: '',
        nickname: '',
        sex: 1,
        birthday: ''
      },
      cFormCache: {
        headimgurl: '',
        nickname: '',
        sex: 1,
        birthday: ''
      }
    }
  },
  async onShow () {
    const { headimgurl, nickname, sex, birthday } = await this.getWxUsersDetail()

    this.cForm.headimgurl = headimgurl
    this.cForm.nickname = nickname
    this.cForm.sex = sex
    this.cForm.birthday = birthday

    this.cFormCache.headimgurl = headimgurl
    this.cFormCache.nickname = nickname
    this.cFormCache.sex = sex
    this.cFormCache.birthday = birthday

    this.hasBirthday = !!birthday
  },
  methods: {
    async getWxUsersDetail () {
      return this.$store.dispatch('private/users/getDetail', {})
    },
    handleBirthdayChange (e) {
      this.cForm.birthday = e.detail.value
    },
    async handleSubmit () {
      if (this.submitDisabled) {
        return
      }

      const { headimgurl, nickname, sex, birthday } = this.cForm

      await this.$store.dispatch('private/users/post', {
        body: {
          headimgurl,
          name: '',
          nickname,
          sex,
          birthday
        }
      })

      toast.show('保存成功')

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    },
    async handleChangeAvatar () {
      const { tempFilePaths } = await this.$wx.chooseImage()

      if (tempFilePaths && tempFilePaths.length) {
        try {
          const { data } = await this.$wx.uploadFile({
            url: `${this.$consts.API_URL}/${this.$consts.UPLOAD_API_PATH}`,
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {}
          })

          this.cForm.headimgurl = JSON.parse(data).data
        } catch (e) {
          toast.show('上传失败', 2)
        }
      }
    }
  }
}
