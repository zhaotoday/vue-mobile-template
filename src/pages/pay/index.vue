<template>
  <div class="p-pay u-pt24">
    <div
      class="c-address is-link u-mb24"
      :class="$bem.box.$"
      @click="$wx.navigateTo('/pages/user/addresses/list/index?action=select')"
    >
      <i
        class="c-address__icon c-iconfont c-iconfont--address fs44 t-primary"
      ></i>
      <template v-if="selectedAddress.id">
        <div class="c-address__detail">
          <h2 class="c-address__title fs28">
            {{ selectedAddress.location.name }}
          </h2>
          <p class="c-address__desc t-g7 fs24 u-pt16">
            {{ selectedAddress.name }} {{ selectedAddress.phoneNumber }}
          </p>
        </div>
        <div class="c-tag h34 bd-primary t-primary u-br10 fs22">家</div>
      </template>
      <div v-else class="c-address__placeholder fs30 t-placeholder">
        {{ $t("$p.pay.selectAddress") }}
      </div>
    </div>
    <div class="u-mb24" :class="$bem.box.$">
      <div class="u-pt20 u-pb20 bg-white">
        <div class="c-title c-title--md fs32">
          {{ $t("$p.pay.productInfo") }}
        </div>
      </div>
      <gc-product-list
        :items="selectedProducts"
        :col="1"
        :edit-number="false"
        show-number
      />
    </div>
    <c-form custom-class="u-mb24">
      <c-form-item :label="$t('$p.pay.total')">
        <div class="c-form__input fs30 t-error">
          ¥{{ getTotalPrice(selectedProducts) }}
        </div>
      </c-form-item>
      <c-form-item custom-class="is-link" :label="$t('$p.pay.payment')">
        <div class="c-form__input">{{ $t("$p.pay.cashOnDelivery") }}</div>
      </c-form-item>
    </c-form>
    <c-form>
      <c-form-item :label="$t('$g.Remark')">
        <div class="u-pt10 u-pb10 u-mr20" style="margin-left: 180rpx">
          <u-textarea
            :placeholder="$t('$g.input.content')"
            count
            v-model="cForm.model.remark"
          />
        </div>
      </c-form-item>
    </c-form>
    <gc-pay-submit @submit="submit" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
