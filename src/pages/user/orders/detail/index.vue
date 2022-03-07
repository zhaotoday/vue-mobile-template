<template>
  <div class="p-user-orders-detail u-pt24 u-pb24">
    <c-form custom-class="u-mb24">
      <c-form-item :label="pt('_.$.orderNo')">
        <div class="c-form__input">{{ detail.no }}</div>
      </c-form-item>
      <c-form-item :label="pt('_.$.orderTime')">
        <div class="c-form__input">{{ $time.getTime(detail.createdAt) }}</div>
      </c-form-item>
      <c-form-item :label="pt('_.$.reachTime')">
        <div class="c-form__input">
          {{ detail.finishedAt ? $time.getTime(detail.finishedAt) : "-" }}
        </div>
      </c-form-item>
      <c-form-item :label="$t('$.status')">
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
        <div class="c-title c-title--md fs32">
          {{ $t("$.productInfo") }}
        </div>
      </div>
      <gc-product-list
        :items="detail.products"
        :col="1"
        :edit-number="false"
        show-number
      />
    </div>
    <c-form custom-class="u-mb24">
      <c-form-item :label="$t('$.total')">
        <div class="c-form__input fs30 t-error">
          {{ $t("$.money") }}{{ getTotalPrice(detail.products) }}
        </div>
      </c-form-item>
      <c-form-item :label="$t('$.payment')">
        <div class="c-form__input">{{ $t("$.cashOnDelivery") }}</div>
      </c-form-item>
    </c-form>
    <c-form>
      <c-form-item :label="$t('$.remark')">
        <div class="c-form__input">{{ detail.remark }}</div>
      </c-form-item>
    </c-form>
  </div>
</template>

<script src="./script.js"></script>
