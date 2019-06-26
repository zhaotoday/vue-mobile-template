<template>
  <div
    :class="[ 'c-checkbox', { 'is-checked': checked } ]"
    @click="$emit('change')">
  </div>
</template>

<script>
export default {
  name: 'c-checkbox',
  props: {
    checked: {
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
