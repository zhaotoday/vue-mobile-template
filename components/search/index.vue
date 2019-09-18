<template>
  <div :class="[ 'c-search', 'bgc11', { 'has-submit': showSubmit } ]">
    <div class="c-search__input bgc36">
      <input
        class="fs28"
        :placeholder="placeholder"
        confirm-type="search"
        :auto-focus="autoFocus"
        v-model="value"
        @focus="$emit('focus')"
        @confirm="handleConfirm"
      />
    </div>
    <div
      class="c-search__submit c1 fs28"
      @click="handleConfirm">
      搜索
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
