<template>
  <div class="p-news">
    <div
      v-if="cartProducts.length"
      class="c-panel bgc11 u-mt16 u-mb16">
      <div
        class="c-panel__body c35 fs28"
        style="padding-bottom: 0;">
        <ul>
          <li
            v-for="item in cartProducts"
            :key="item.id"
            class="c-media c-media--sm"
            @click="navigateTo(`/pages/products/detail/index?id=${item.id}`)">
            <img
              class="c-media__image"
              :src="$helpers.getImageById(item.pictures)"
              mode="aspectFill"
            />
            <div class="c-media__body">
              <h2 class="c-media__title fs30">{{ item.name }}</h2>
              <div class="c-media__extra">
                <span class="c23 fs24">￥</span>
                <span class="c23 fs30">{{ item.price }}</span>
                <span class="c35 fs24 u-lt">￥${{ item.originalPrice }}</span>
                <span class="c31 fs24">/{{ item.unit }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <c-empty v-if="!cartProducts[0] && loaded"></c-empty>
    <c-pay></c-pay>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
