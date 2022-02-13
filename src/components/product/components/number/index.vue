<template>
  <u-number-box v-model="value" :min="0">
    <div v-show="value" slot="minus" class="minus">
      <u-icon name="minus" size="12" color="#5ac725" />
    </div>
    <div v-show="value" slot="input" class="input">
      {{ value }}
    </div>
    <div slot="plus" class="plus">
      <u-icon name="plus" size="12" color="#ffffff" />
    </div>
  </u-number-box>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
