<template>
  <div class="c-number-input">
    <div
      class="c-number-input__subtract"
      @click="$emit('subtract')">
    </div>
    <div class="c-number-input__number fs28 u-tac">{{ number }}</div>
    <div
      class="c-number-input__add"
      @click="$emit('add')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-number-input',
  props: {
    number: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
