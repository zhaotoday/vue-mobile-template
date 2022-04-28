<template>
  <div class="p-user-orders-detail u-pt24 u-pb24">
    <c-form custom-class="u-mb24">
      <c-form-item label="订单号">
        <div class="c-form__input">{{ detail.no }}</div>
      </c-form-item>
      <c-form-item label="下单时间">
        <div class="c-form__input">{{ $time.getTime(detail.createdAt) }}</div>
      </c-form-item>
      <c-form-item label="完成时间">
        <div class="c-form__input">
          {{ detail.finishedAt ? $time.getTime(detail.finishedAt) : "-" }}
        </div>
      </c-form-item>
      <c-form-item label="状态">
        <div class="c-form__input">
          {{
            $helpers.getItem(enums.OrderStatus, "value", detail.status)[
              "label"
            ] || ""
          }}
        </div>
      </c-form-item>
    </c-form>
    <div
      v-if="detail.address"
      class="c-address u-mb24"
      :class="$bem.box.$"
      @click="openLocation(detail.address)"
    >
      <i
        class="c-address__icon c-iconfont c-iconfont--address fs44 t-primary"
      ></i>
      <div class="c-address__detail">
        <h2 class="c-address__title fs28">
          {{ detail.address.location.name }}
        </h2>
        <p class="c-address__desc t-g7 fs24 u-pt16">
          {{ detail.address.name }} {{ detail.address.phoneNumber }}
        </p>
      </div>
      <div class="c-tag h34 bd-primary t-primary u-br10 fs22">
        {{
          $helpers.getItem(enums.AddressTag, "value", detail.address.tag)[
            "label"
          ]
        }}
      </div>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <div class="u-pt20 u-pb20 bg-white">
        <div class="c-title c-title--md fs32">商品信息</div>
      </div>
      <c-product-list
        :items="detail.products"
        :col="1"
        :edit-number="false"
        show-number
      />
    </div>
    <c-form custom-class="u-mb24">
      <c-form-item label="总计">
        <div class="c-form__input fs30 t-error">
          ¥{{ getTotalPrice(detail.products) }}
        </div>
      </c-form-item>
      <c-form-item label="支付方式">
        <div class="c-form__input">货到付款</div>
      </c-form-item>
    </c-form>
    <c-form>
      <c-form-item label="备注">
        <div
          class="fs28"
          style="
            margin-left: 230rpx;
            padding-top: 22rpx;
            padding-bottom: 10rpx;
            padding-right: 10rpx;
          "
        >
          {{ detail.remark }}
        </div>
      </c-form-item>
    </c-form>
  </div>
</template>

<script src="./script.js"></script>
