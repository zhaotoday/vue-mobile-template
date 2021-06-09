<template>
  <div class="c-tag-checkbox">
    <div
      v-for="item in items"
      :key="item.value"
      class="c-tag h40 br8 fs24"
      :class="
        !checkable || checkedValues.includes(item.value)
          ? 'bgc21 bdc21 bgc21 c11'
          : 'bdc37 c37'
      "
      @click="check(item)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
