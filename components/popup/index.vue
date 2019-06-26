<template>
  <div class="c-popup">
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('close')">
    </div>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'CPopup',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
