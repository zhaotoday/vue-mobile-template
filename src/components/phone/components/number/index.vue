<template>
  <u-modal
    :show="cModal.visible"
    title="请完善用户信息"
    :show-confirm-button="false"
    :show-cancel-button="true"
    cancel-text="拒绝"
    @cancel="$wx.navigateBack()"
  >
    <u-button
      custom-class="u-mt20"
      type="primary"
      open-type="getPhoneNumber"
      @getphonenumber="onGetPhoneNumber"
    >
      绑定微信手机号
    </u-button>
  </u-modal>
</template>

<script src="./script.js"></script>
