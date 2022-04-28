<template>
  <picker
    :range="$consts.Languages.map((item) => item.label)"
    :value="cPicker.current"
    @change="onChange"
  >
    <div class="c-locale fs26">
      <div class="c-locale__title">
        {{ $consts.Languages[cPicker.current].label }}
      </div>
      <i class="c-iconfont c-iconfont--arrow-down-filled fs20 u-info"></i>
    </div>
  </picker>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
