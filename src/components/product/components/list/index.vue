<template>
  <div
    class="cc-list"
    :class="[
      `cc-list--col${col}`,
      selectable ? 'is-selectable' : '',
      customClass,
    ]"
  >
    <u-grid :col="col" :border="false">
      <u-grid-item v-for="(item, index) in items" :key="index">
        <div
          class="cc-list__box"
          @click="$wx.navigateTo(`/pages/products/detail/index?id=${item.id}`)"
        >
          <div class="cc-list__checkbox">
            <u-checkbox
              shape="circle"
              active-color="#5ac725"
              size="44rpx"
              :checked="item.selected"
              @change="selectProduct({ product: item })"
            />
          </div>
          <image
            class="cc-list__image"
            mode="aspectFill"
            :src="$helpers.getFileUrl({ id: item.imageFileIds[0] })"
          />
          <div class="cc-list__name fs28">{{ item.name }}</div>
          <div class="cc-list__price">
            <span class="t-error fs26">¥{{ item.price }}</span>
            <span class="t-g7 u-lt fs24 u-ml10">200.0</span>
          </div>
          <div class="cc-list__number" @click.stop>
            <gc-product-number v-if="editNumber" :product="item" />
            <div v-if="showNumber" class="fs24">x1</div>
          </div>
        </div>
      </u-grid-item>
    </u-grid>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
