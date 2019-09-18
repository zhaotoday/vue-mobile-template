<template>
  <div>
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('cancel')">
    </div>
    <div
      v-show="visible"
      class="c-actions bgc34 fs34 u-tac">
      <div
        v-for="item in items"
        :key="item.value"
        class="c-actions__item bgc11"
        @click="select(item)">
        {{ item.label }}
      </div>
      <div
        class="c-actions__cancel bgc11 c26"
        @click="$emit('cancel')">
        取消
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
