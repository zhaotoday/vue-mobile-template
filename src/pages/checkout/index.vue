<template>
  <div class="p-pay u-pt24">
    <div
      class="c-address is-link u-mb24"
      :class="$bem.box.$"
      @click="gotoAddresses"
    >
      <i
        class="c-address__icon c-iconfont c-iconfont--address fs44 t-primary"
      ></i>
      <template v-if="selectedAddress && selectedAddress.id">
        <div class="c-address__detail">
          <h2 class="c-address__title fs28">
            {{ selectedAddress.location.name + selectedAddress.room }}
          </h2>
          <p class="c-address__desc t-g7 fs24 u-pt16">
            {{ selectedAddress.name }} {{ selectedAddress.phoneNumber }}
          </p>
        </div>
        <div class="c-tag h34 bd-primary t-primary u-br10 fs22">
          {{
            $helpers.getItem(enums.AddressTag, "value", selectedAddress.tag)[
              "label"
            ]
          }}
        </div>
      </template>
      <div v-else class="c-address__placeholder fs30 t-placeholder">
        请选择收获地址
      </div>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <div class="u-pt20 u-pb20 bg-white">
        <div class="c-title c-title--md fs32">商品信息</div>
      </div>
      <c-product-list
        :items="selectedProducts"
        :col="1"
        :edit-number="false"
        show-number
      />
    </div>
    <c-form custom-class="u-mb24">
      <c-form-item label="总计">
        <div class="c-form__input fs30 t-error">
          ¥{{ getTotalPrice(selectedProducts) }}
        </div>
      </c-form-item>
      <c-form-item label="支付方式">
        <div class="c-form__input">货到付款</div>
      </c-form-item>
    </c-form>
    <c-form>
      <c-form-item label="备注">
        <div class="u-pt10 u-pb10 u-mr20" style="margin-left: 180rpx">
          <u-textarea
            placeholder="请输入内容"
            count
            v-model="cForm.model.remark"
          />
        </div>
      </c-form-item>
    </c-form>
    <c-pay-submit @submit="submit" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
