<template>
  <div class="p-my-info">
    <div class="pb-info u-mb20">
      <img
        class="c-avatar"
        :src="cForm.headimgurl"
        @click="handleChangeAvatar" />
      <div class="pb-name fs36">{{ wxUsersDetail.nickname }}</div>
    </div>
    <div class="c-list bgc1 fs32">
      <div class="c-list__item c6">
        昵称
        <div class="c-list__value c2 fs32">{{ cForm.nickname }}</div>
      </div>
      <div class="c-list__item c6">
        手机号
        <div class="c-list__input cs2 fs32">
          {{ encryptedMobile }}
        </div>
        <div
          class="c-list__operation c7 fs28"
          @click="navigateTo('/pages/bindPhone/bindPhone?change=1')">
          更换手机
        </div>
      </div>
      <div class="c-list__item c6">
        性别
        <div class="c-list__value c2">
          <c-checkbox
            label="男士"
            :checked="cForm.sex === 1"
            @change="cForm.sex = 1"
            style="margin-right: 60rpx;">
          </c-checkbox>
          <c-checkbox
            label="女士"
            :checked="cForm.sex === 2"
            @change="cForm.sex = 2">
          </c-checkbox>
        </div>
      </div>
      <div class="c-list__item c6">
        生日
        <div
          v-if="hasBirthday"
          class="c-list__value c2">
          {{ cForm.birthday }}
        </div>
        <picker
          v-else
          mode="date"
          v-model="cForm.birthday"
          @change="handleBirthdayChange">
          <div :class="[ 'c-list__value', cForm.birthday ? 'c2' : 'c19' ]">
            {{ cForm.birthday || '请选择生日，保存后不可修改' }}
          </div>
        </picker>
      </div>
    </div>
    <button
      :class="'c-button c-button--' + (submitDisabled ? 'disabled bgc12 c1' : 'primary bgc7 c1') + ' fs32'"
      @click="handleSubmit">
      保存
    </button>
  </div>
</template>

<script>
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
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
