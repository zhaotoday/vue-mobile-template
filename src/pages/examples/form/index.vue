<template>
  <div class="p-form c-form">
    <h2 class="c-form__title c12 fs30">您的姓名</h2>
    <input
      class="c-form__input bgc11 fs30"
      placholder-class="c36"
      placeholder="请输入您的姓名"
      v-model.trim="cForm.model.name"
    />
    <h2 class="c-form__title c12 fs30">手机号</h2>
    <input
      class="c-form__input bgc11 fs30"
      type="number"
      maxlength="11"
      placholder-class="c36"
      placeholder="请输入手机号"
      v-model.trim="cForm.model.phoneNumber"
    />
    <h2 class="c-form__title c12 fs30">评论（可以不填）</h2>
    <textarea
      class="c-form__textarea bgc11 fs30"
      placholder-class="c36"
      placeholder="请输入评论"
      v-model.trim="cForm.model.content"
    >
    </textarea>
    <button class="c-button at-bottom w650 h88 u-br8 bgc21 c11 fs32" @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>
