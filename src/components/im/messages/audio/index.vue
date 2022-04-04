<template>
  <div class="cc-audio" @click="play">
    <i
      class="c-iconfont fs28"
      :class="
        playIndex === index
          ? 'c-iconfont--audio-stop'
          : 'c-iconfont--audio-play'
      "
    ></i>
    <span class="fs26">
      {{ playIndex === index ? "点击暂停" : "点击播放" }}
    </span>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
