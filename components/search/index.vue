<template>
  <div :class="[ 'c-search', 'bgc4', { 'has-submit': hasSubmit } ]">
    <div class="c-search__input bgc1">
      <input
        class="fs28"
        type="text"
        placeholder="输入要搜索的商品名称" />
    </div>
    <div class="c-search__submit c1 fs28">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'c-search',
  props: {
    hasSubmit: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
