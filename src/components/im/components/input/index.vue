<template>
  <div class="c-im-input u-pt20 u-pb20 u-pl30 u-pr30" :class="backgroundClass">
    <div class="c-im-input__wrap">
      <textarea
        class="fs26"
        auto-height
        :placeholder="placeholder"
        placeholder-class="t-placeholder"
        v-model.trim="cForm.model.content"
      />
      <div
        class="c-im-input__submit fs30"
        :class="{ 'is-disabled': !cForm.model.content }"
        @click="send"
      >
        {{ sendText }}
      </div>
      <b-recorder
        v-show="cRecorder.visible"
        @hide="cRecorder.visible = false"
        @ok="sendAudio"
      />
    </div>
    <div class="c-im-input__operations o-grid c37 fs52 u-tac">
      <div class="o-grid__cell" @click="toggleRecorder">
        <i class="c-iconfont c-iconfont--audio"></i>
      </div>
      <div class="o-grid__cell" @click="sendImage">
        <i class="c-iconfont c-iconfont--image"></i>
      </div>
      <div class="o-grid__cell is-opacity">
        <i class="c-iconfont c-iconfont--video"></i>
      </div>
      <div class="o-grid__cell is-opacity">
        <i class="c-iconfont c-iconfont--courseware"></i>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
