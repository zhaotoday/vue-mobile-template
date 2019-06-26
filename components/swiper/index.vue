<template>
  <div class="c-swiper">
    <swiper
      class="c-swiper__swiper"
      :circular="true"
      :autoplay="true"
      :interval="2500"
      @change="handleChange">
      <swiper-item
        v-for="(item, index) in items"
        :key="index">
        <img
          class="c-swiper__image"
          mode="aspectFill"
          :src="item" />
      </swiper-item>
    </swiper>
    <div class="cc-indicator">
      <span
        v-for="(item, index) in items.length"
        :key="index"
        :class="[ 'cc-indicator__item', { 'is-active': item === current } ]">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-swiper',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleChange (e) {
      this.current = e.mp.detail.current
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
