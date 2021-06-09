<template>
  <div>
    <div v-show="visible" class="c-overlay" @click="$emit('cancel')"></div>
    <div v-show="visible" class="c-dialog" :style="{ width: `${width}rpx` }">
      <div v-if="title" class="c-dialog__title fs34 u-tac">
        {{ title }}
      </div>
      <div v-if="content" class="c-dialog__content u-tac c10 fs28">
        {{ content }}
      </div>
      <slot name="body"></slot>
      <ul class="c-dialog__foot o-grid u-tac fs32">
        <li
          v-if="showCancel"
          class="o-grid__cell"
          :class="cancelStyle"
          @click="$emit('cancel')"
        >
          {{ cancelText }}
        </li>
        <li
          v-if="showConfirm"
          class="o-grid__cell"
          :class="confirmDisabled ? 'c37' : confirmStyle"
          @click="onConfirm"
        >
          {{ confirmText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
