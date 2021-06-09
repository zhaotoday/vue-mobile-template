<template>
  <picker :range="range" :value.sync="value" @change="$emit('change', $event)">
    <div class="c-filter bgc11 fs28 u-tac">
      <span v-if="value === -1" class="c37">
        {{ placeholder }}
      </span>
      <span v-else>
        {{ range[value] }}
      </span>
      <i class="c-icon c-icon--drop"></i>
    </div>
  </picker>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
