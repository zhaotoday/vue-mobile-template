<template>
  <div class="p-my-products-home u-pt16">
    <div
      v-if="list.items.length"
      class="c-panel u-mb16">
      <div
        v-for="item in list.items"
        :key="item.product.id"
        class="c-panel__body bgc11 c35 fs28 u-mb16"
        style="padding-bottom: 0;">
        <div
          class="c-media c-media--sm"
          @click="navigateTo(`/pages/products/detail/index?id=${item.product.id}`)">
          <img
            class="c-media__image"
            :src="$helpers.getImageById(item.product.pictures)"
            mode="aspectFill"
          />
          <div class="c-media__body">
            <h2 class="c-media__title fs30">{{ item.product.name }}</h2>
            <div class="c-media__extra">
              <span class="c23 fs24">￥</span>
              <span class="c23 fs30">{{ item.product.price }}</span>
              <span class="c35 fs24 u-lt">￥${{ item.product.originalPrice }}</span>
              <span class="c31 fs24">/{{ item.product.unit }}</span>
            </div>
          </div>
        </div>
        <div class="c-panel__foot">
          <div class="c-panel__extra fs24">成绩：{{ item.score || '暂无' }}</div>
          <div
            class="c-button w160 h48 bdc21 c21 fs24"
            @click="navigateTo(`/pages/trainer/comments/list/index?my=1&studentProductId=${item.id}`)">
            查看点评
          </div>
        </div>
      </div>
    </div>
    <c-empty v-if="!list.items[0] && loaded"></c-empty>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
