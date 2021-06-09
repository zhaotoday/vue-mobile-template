<template>
  <picker
    :class="{ 'c-list__value': !isWrap }"
    mode="multiSelector"
    :range="range"
    :value="values"
    range-key="name"
    @change="onChange"
    @columnchange="onColumnChange"
  >
    <template v-if="isWrap">
      <slot name="body" />
    </template>
    <template v-else>
      <div v-if="!names" class="c37">{{ placeholder }}</div>
      <div v-else>{{ names }}</div>
    </template>
  </picker>
</template>

<script src="./script.js"></script>
