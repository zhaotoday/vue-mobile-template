<template>
  <div
    class="c-search bgc11"
    :class="{ 'has-submit': showSubmit }"
    @click="navigateToLink"
  >
    <div class="c-search__input-wrap bgc32">
      <div v-if="link" class="c-search__input fs28">
        <span v-if="value">
          {{ value }}
        </span>
        <span v-else class="c37">
          {{ placeholder }}
        </span>
      </div>
      <input
        v-else
        class="c-search__input fs28"
        placeholder-class="c37"
        :placeholder="placeholder"
        confirm-type="search"
        :auto-focus="autoFocus"
        v-model="value"
        @focus="$emit('focus')"
        @confirm="confirm"
      />
    </div>
    <div class="c-search__submit fs28" @click="confirm">搜索</div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
