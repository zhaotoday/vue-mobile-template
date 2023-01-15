<template>
  <div class="p-products-detail">
    <u-swiper
      :list="
        detail.imageFileIds.map(
          (imageFileId) =>
            $helpers.getFileUrl({ id: imageFileId }) + '?_bugfix=.jpg'
        )
      "
      height="750rpx"
      indicator
      radius="0"
      indicator-mode="dot"
      img-mode="aspectFill"
      @click="onSwiperClick"
    />
    <div class="b-info bg-white u-mb24">
      <div class="b-info__name fs32 u-lh1">
        {{ getLocale() === "en" ? detail.name : detail.cnName }}
      </div>
      <div class="b-info__others u-lh1">
        <span class="t-error fs32">{{ $t("$.money") }}{{ detail.price }}</span>
        <span v-if="false" class="t-g7 u-lt fs26 u-ml10">200.0</span>
        <div class="b-info__right t-g7 fs26 u-lh1">
          {{ $t("$.stocks") + $t("$.colon") }}{{ detail.stock }} &nbsp;&nbsp;
          {{ $t("$.sales") + $t("$.colon") }}{{ detail.sales }}
        </div>
      </div>
    </div>
    <div class="u-pt30 u-pb30 bg-white">
      <div class="c-title c-title--md fs32">{{ $t("$.details") }}</div>
    </div>
    <div class="s-cms-content">
      <div
        v-if="detail.content"
        class="bg-white"
        style="padding: 30rpx; font-size: 28rpx"
        v-html="detail.content || 'no data'"
      ></div>
      <div v-else class="bg-white u-p30 fs28 u-tac t-placeholder">
        {{ $t("$.noData") }}
      </div>
    </div>
    <c-product-submit :product="detail" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
