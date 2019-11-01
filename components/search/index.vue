<template>
  <div
    class="c-search bgc21"
    :class="{ 'has-submit': showSubmit }"
    @click="handleClick">
    <div class="c-search__input-wrap bgc11">
      <div
        v-if="link"
        class="c-search__input fs28">
        <span v-if="value">
          {{ value }}
        </span>
        <span
          v-else
          class="c31">
          {{ placeholder }}
        </span>
      </div>
      <input
        v-else
        class="c-search__input fs28"
        :placeholder="placeholder"
        confirm-type="search"
        :auto-focus="autoFocus"
        v-model="value"
        @focus="$emit('focus')"
        @confirm="handleConfirm"
      />
    </div>
    <div
      class="c-search__submit c11 fs28"
      @click="handleConfirm">
      搜索
    </div>
  </div>
</template>

<script src="./script.js"></script>
