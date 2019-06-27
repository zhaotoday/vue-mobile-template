<template>
  <div
    :class="[ 'c-checkbox', { 'is-checked': checked } ]"
    @click="$emit('change')">
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
