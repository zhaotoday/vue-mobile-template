<template>
  <div class="p-pay">
    <div class="c-list bgc1 fs28 u-mt20">
      <div class="c-list__item has-icon is-link is-height-auto">
        <i class="c-icon c-icon--address"></i>
        <p class="c-list__desc">赵金添 1395442340</p>
        <p class="c-list__desc">福州市仓山区学军路198号</p>
      </div>
    </div>
    <div class="c-list bgc1 fs30 u-mt20">
      <div class="c-list__item is-link">
        优惠券
        <div class="c-list__extra c8 fs28">满 100 减 10</div>
      </div>
      <div class="c-list__item is-link">
        备注
      </div>
      <div class="c-list__item">
        商品数
        <div class="c-list__extra c8 fs28">{{ cartDetail.data.length }} 件</div>
      </div>
      <picker
        class="c-list__item is-link"
        @change="handlePayWayChange"
        v-model="cPayWay.index"
        :range="cPayWay.range">
        支付方式
        <div class="c-list__extra c8 fs28">
          {{ $consts.PAY_WAYS[cPayWay.index].label }}
        </div>
      </picker>
      <div class="c-list__item">
        商品总价
        <div class="c-list__extra c8 fs28">￥{{ totalPrice }} 元</div>
      </div>
      <div class="c-list__item">
        合计
        <div class="c-list__extra c5 fs28">￥{{ totalPrice }} 元</div>
      </div>
    </div>
    <div class="b-pay bgc1">
      <div class="b-pay__money c5 fs32">￥{{ totalPrice }} 元</div>
      <div
        class="b-pay__submit bgc5 c1 fs32 u-tac"
        @click="handlePay">
        支付
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cartUtils from '@/utils/cart'

export default {
  computed: {
    ...mapState({
      cartDetail: state => state['wx/carts'].detail
    }),
    totalPrice () {
      return cartUtils.getTotalPrice(this.cartDetail.data)
    }
  },
  data () {
    return {
      cartId: 0,
      cPayWay: {
        index: 0,
        range: this.$consts.PAY_WAYS.map(item => item.label)
      }
    }
  },
  onShow () {
    this.cartId = this.$mp.query.cartId
    this.getCartsDetail()
  },
  methods: {
    getCartsDetail () {
      this.$store.dispatch('wx/carts/getDetail', { id: this.cartId })
    },
    handlePayWayChange (e) {
      this.cPayWay.index = e.detail.value
    },
    async handlePay () {
      const { data } = await this.$store.dispatch('wx/payments/postAction', {
        body: {
          type: 'CREATE_UNIFIED_ORDER',
          cartId: parseInt(this.cartId, 10),
          payMoney: this.totalPrice,
          remark: 'abc'
        }
      })

      const res = await this.$wx.requestPayment(data)
      console.log(res)
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
