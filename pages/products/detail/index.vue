<template>
  <div class="p-products-detail">
    <div class="bgc1 u-mb20">
      <div class="b-picture">
        <img
          v-if="detail.pictures"
          mode="aspectFill"
          :src="$helpers.getImageById(detail.pictures)" />
      </div>
      <div class="b-name u-tac fs40">{{ detail.name }}</div>
      <div class="b-price u-tac">
        <span class="c5 fs20">￥</span>
        <span class="c5 fs50">12.34</span>
        <span class="c9 fs20">/￥20.54</span>
      </div>
    </div>
    <div class="c-panel bgc1">
      <div class="c-panel__head u-mb20">
        <div class="c-panel__title fs32">服务保障</div>
      </div>
      <div class="c-panel__body u-mb20">
        <ul class="c-guarantees">
          <li class="c-guarantees__item">
            <i class="c-icon c-icon--delivery"></i>
            <h2 class="c-guarantees__title fs28">配送服务</h2>
            <p class="c-guarantees__desc c9 fs24">
              该商品支持次日达，由产品名称配送
            </p>
          </li>
          <li class="c-guarantees__item">
            <i class="c-icon c-icon--after-sale"></i>
            <h2 class="c-guarantees__title fs28">售后服务</h2>
            <p class="c-guarantees__desc c9 fs24">
              该商品支持签收起8小时内有质量问题可退
            </p>
          </li>
          <li class="c-guarantees__item">
            <i class="c-icon c-icon--pay"></i>
            <h2 class="c-guarantees__title fs28">支付方式</h2>
            <p class="c-guarantees__desc c9 fs24">
              在线支付：支付宝、微信、余额<br />
              货到付款：现金、支付宝、微信、银行卡
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-panel bgc1 u-mb20">
      <div class="c-panel__head">
        <div class="c-panel__title fs32">详细信息</div>
      </div>
      <div class="c-panel__body c-panel__body--p30 fs24">
        <wx-parse :content="detail.content"></wx-parse>
      </div>
    </div>
    <c-product-actions></c-product-actions>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CProductActions from '../../../components/product-actions/index'
import WxParse from 'mpvue-wxparse'

export default {
  components: { CProductActions, WxParse },
  computed: mapState({
    detail: state => state['public/products'].detail
  }),
  async onShow () {
    this.id = this.$mp.query.id || 17

    await this.getDetail()
    await this.$wx.setNavigationBarTitle({ title: this.detail.name })
  },
  methods: {
    async getDetail () {
      const { data } = await this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })

      console.log(data)

    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
