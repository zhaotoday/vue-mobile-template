<template>
  <div
    :class="[ 'c-search', 'bgc21', { 'has-submit': showSubmit } ]"
    @click="$emit('focus')">
    <div class="c-search__input bgc11">
      <div class="fs28">
        <span v-if="value">
        {{ value }}
        </span>
        <span
          v-else
          class="c31">
          {{ placeholder }}
        </span>
      </div>
    </div>
    <div
      class="c-search__submit c1 fs28"
      @click="handleConfirm">
      搜索
    </div>
  </div>
</template>

<script src="./script.js"></script>
