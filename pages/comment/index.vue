<template>
  <div class="p-join c-comment">
    <h2 class="c-comment__title c12 fs30">所在城市</h2>
    <input
      class="c-comment__input fs28 bgc11"
      placholder-class="c32"
      placeholder="请输入所在城市"
      v-model="cForm.city"
    />
    <h2 class="c-comment__title c12 fs30">您的姓名</h2>
    <input
      class="c-comment__input fs28 bgc11"
      placholder-class="c32"
      placeholder="请输入您的姓名"
      v-model="cForm.name"
    />
    <h2 class="c-comment__title c12 fs30">手机号</h2>
    <input
      class="c-comment__input fs28 bgc11"
      type="number"
      maxlength="11"
      placholder-class="c32"
      placeholder="请输入手机号"
      v-model="cForm.phoneNumber"
    />
    <h2 class="c-comment__title c12 fs30">留言建议（可以不填）</h2>
    <textarea
      class="c-comment__textarea fs28 bgc11"
      placholder-class="c32"
      placeholder="请输入留言建议"
      v-model="cForm.suggestion">
    </textarea>
    <button
      class="c-button is-foot w650 h88 bg1 c11 fs32"
      @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
