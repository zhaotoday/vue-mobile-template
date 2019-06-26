<template>
  <div class="p-bind">
    <div class="c-list bgc1 fs30 u-mt20">
      <div class="c-list__item">
        <input
          class="c-list__input is-full fs32"
          placeholder-class="c15"
          placeholder="请输入要绑定的手机号"
          v-model="cForm.mobilePhone" />
        <div
          :class="[ 'b-check-code', 'fs28', { 'is-disabled': cCheckCode.disabled } ]"
          @click="handleGetCheckCode">
          {{ cCheckCode.message }}
        </div>
      </div>
      <div class="c-list__item">
        <input
          class="c-list__input is-full fs32"
          type="number"
          placeholder-class="c15"
          placeholder="请输入验证码"
          maxlength="6"
          v-model="cForm.checkCode" />
      </div>
    </div>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="handleConfirm">
      提交
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cForm: {
        data: {}
      },
      cCheckCode: {
        disabled: false,
        message: '获取验证码'
      }
    }
  },
  methods: {
    getCheckCode (mobilePhone) {
      return this.$store.dispatch('wx/wxUsers/postAction', {
        body: {
          type: 'GET_CHECK_CODE',
          mobilePhone
        }
      })
    },
    async handleGetCheckCode () {
      if (this.cCheckCode.disabled) return

      const { mobilePhone } = this.cForm

      if (!mobilePhone) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(mobilePhone)) {
        this.$wx.showToast({ title: '手机号格式错误' })
        return
      }

      await this.getCheckCode(mobilePhone)

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
    },
    async handleConfirm () {
      const { mobilePhone, checkCode } = this.cForm

      if (!mobilePhone) {
        this.$wx.showToast({ title: '手机号不能为空' })
        return
      }

      if (!/^1\d{2}\s?\d{4}\s?\d{4}$/.test(mobilePhone)) {
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
        body: {
          type: 'BIND_mobilePhone',
          mobilePhone,
          checkCode
        }
      })

      this.$wx.showToast({ title: '绑定成功' })

      this.$wx.navigateTo({
        url: ''
      })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
