<template>
  <div :class="$bem.box.$">
    <ul class="c-form c-form--inbox has-label">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" src="./style.scss"></style>
