<template>
  <div class="p-user-orders-detail u-pt24 u-pb24">
    <c-form custom-class="u-mb24">
      <c-form-item label="订单号">
        <div class="c-form__input">12456461132</div>
      </c-form-item>
      <c-form-item label="下单时间">
        <div class="c-form__input">2022-02-16 00:00</div>
      </c-form-item>
      <c-form-item label="送达时间">
        <div class="c-form__input">2022-02-16 00:00</div>
      </c-form-item>
      <c-form-item label="状态">
        <div class="c-form__input">已完成</div>
      </c-form-item>
    </c-form>
    <div class="c-address u-mb24" :class="$bem.box.$">
      <i
        class="c-address__icon c-iconfont c-iconfont--address fs44 t-primary"
      ></i>
      <div class="c-address__detail">
        <h2 class="c-address__title fs28">淮安半岛</h2>
        <p class="c-address__desc t-g7 fs24 u-pt16">赵金添 13950442340</p>
      </div>
      <div class="c-tag h34 bd-primary t-primary u-br10 fs22">家</div>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <div class="u-pt20 u-pb20 bg-white">
        <div class="c-title c-title--md fs32">商品信息</div>
      </div>
      <gc-product-list
        :items="products"
        :col="1"
        :edit-number="false"
        show-number
      />
    </div>
    <c-form custom-class="u-mb24">
      <c-form-item label="总计">
        <div class="c-form__input fs30 t-error">¥123.00</div>
      </c-form-item>
      <c-form-item label="支付方式">
        <div class="c-form__input">货到付款</div>
      </c-form-item>
    </c-form>
    <c-form>
      <c-form-item label="备注">
        <div class="c-form__input">备注信息</div>
      </c-form-item>
    </c-form>
  </div>
</template>

<script src="./script.js"></script>
