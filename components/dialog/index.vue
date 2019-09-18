<template>
  <div>
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('cancel')">
    </div>
    <div
      v-show="visible"
      class="c-dialog"
      :style="{ width: `${width}rpx` }">
      <div
        v-if="title"
        class="c-dialog__title fs34 u-tac">
        {{ title }}
      </div>
      <div
        v-if="content"
        class="c-dialog__content u-tac c10 fs28">
        {{ content }}
      </div>
      <slot name="body"></slot>
      <ul class="c-dialog__foot o-grid u-tac fs32">
        <li
          v-if="showCancel"
          class="o-grid__cell"
          @click="$emit('cancel')">
          {{ cancelText }}
        </li>
        <li
          :class="[ 'o-grid__cell', confirmDisabled ? 'c19' : 'c26' ]"
          @click="handleConfirm">
          {{ confirmText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./script.js"></script>
