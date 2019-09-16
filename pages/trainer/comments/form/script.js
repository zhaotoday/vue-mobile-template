import restHelpers from '@/utils/helpers/rest-helpers'

export default {
  data () {
    return {
      cForm: {
        type: 'VIDEO',
        content: '',
        attachmentId: 0
      }
    }
  },
  methods: {
    async chooseVideo () {
      const { tempFilePath } = await this.$wx.chooseVideo({
        maxDuration: 20
      })

      const { data } = await this.$wx.uploadFile({
        url: this.$consts.API_URL + '/wx/files',
        header: restHelpers.getHeaders(),
        filePath: tempFilePath,
        name: 'file'
      })
      this.cForm.attachmentId = JSON.parse(data)['data'].id
    },
    delAttachment () {
      this.cForm.attachmentId = 0
    },
    async submit () {
      const { content, attachmentId } = this.cForm

      if (!content) {
        this.$wx.showToast({ title: '请填写学员点评' })
        return
      }

      if (!attachmentId) {
        this.$wx.showToast({ title: '请上传视频' })
        return
      }

      await this.$store.dispatch('wx/studentProductComments/post', {
        body: {
          ...this.cForm,
          studentProductId: this.$mp.query.studentProductId
        }
      })

      this.$wx.showToast({ title: '新增成功' })

      await this.$helpers.sleep(1500)

      this.$wx.navigateBack()
    }
  }
}
