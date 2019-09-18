<template>
  <div class="c-popup">
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('close')">
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script src="./script.js"></script>
