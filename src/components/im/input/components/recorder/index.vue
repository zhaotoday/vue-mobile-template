<template>
  <div
    class="cc-recorder fs30 u-tac"
    :class="cRecorder.speaking ? 'bg-g3' : 'bg-white'"
    @longtap="startSpeaking"
    @touchend="stopSpeaking"
  >
    {{ cRecorder.speaking ? "松开 结束" : "按住 说话" }}
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
