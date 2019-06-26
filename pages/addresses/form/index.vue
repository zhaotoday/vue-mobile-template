<template>
  <div class="p-addresses-form">
    <ul class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item">
        收货人
        <input
          class="c-list__input fs32"
          placeholder-class="c15"
          placeholder="收货人姓名"
          v-model="cForm.mobilePhone" />
        <div class="b-gender">
          <div class="c-tag h50 bdc5 c5 fs26">先生</div>
          <div class="c-tag h50 bdc5 c5 fs26">女士</div>
        </div>
      </li>
      <li class="c-list__item">
        手机号
        <input
          class="c-list__input fs32"
          placeholder-class="c15"
          placeholder="配送员联系您的手机号"
          v-model="cForm.mobilePhone" />
      </li>
      <li class="c-list__item is-link">
        小区
        <input
          class="c-list__input fs32"
          placeholder-class="c15"
          placeholder="小区/写字楼等"
          v-model="cForm.mobilePhone" />
      </li>
      <li class="c-list__item">
        收货人
        <input
          class="c-list__input fs32"
          placeholder-class="c15"
          placeholder="楼号/单元/门牌号"
          v-model="cForm.mobilePhone" />
      </li>
      <li class="c-list__item">
        地址分类
        <div class="b-types">
          <div class="c-tag h50 bdc5 c5 fs26">家</div>
          <div class="c-tag h50 bdc5 c5 fs26">公司</div>
          <div class="c-tag h50 bdc5 c5 fs26">学校</div>
          <div class="c-tag h50 bdc5 c5 fs26">其他</div>
        </div>
      </li>
    </ul>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="handleSave">
      保存
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cForm: {}
    }
  },
  onShow () {
    this.$wx.setNavigationBarTitle({ title: '新增地址' })
  },
  methods: {
    handleSave () {}
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
