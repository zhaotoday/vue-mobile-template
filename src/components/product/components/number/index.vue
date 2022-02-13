<template>
  <u-number-box class="cc-number" v-model="value" :min="0" :max="max">
    <div v-show="value" class="cc-number__minus" slot="minus">
      <u-icon name="minus" size="12" color="#5ac725" />
    </div>
    <div v-show="value" class="cc-number__input" slot="input">
      {{ value }}
    </div>
    <div class="cc-number__plus" slot="plus">
      <u-icon name="plus" size="12" color="#ffffff" />
    </div>
  </u-number-box>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
