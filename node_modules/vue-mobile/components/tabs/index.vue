<template>
  <ul class="c-tabs bgc11 fs28 u-tac">
    <li
      v-for="(item, itemIndex) in tabs"
      :key="itemIndex"
      class="c-tabs__item"
      :class="{ 'is-active': index === itemIndex }"
      @click="$emit('change', itemIndex)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
