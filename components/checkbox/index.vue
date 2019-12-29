<template>
  <div
    class="c-checkbox"
    :class="{ 'is-checked': checked }"
    @click="$emit('change')">
  </div>
</template>

<script src="./script.js"></script>
