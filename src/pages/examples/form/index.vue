<template>
  <div class="p-form c-form">
    <h2 class="c-form__title c12 fs30">您的姓名</h2>
    <input
      class="c-form__input fs28 bgc11"
      placholder-class="c32"
      placeholder="请输入您的姓名"
      v-model.trim="cForm.model.name"
    />
    <h2 class="c-form__title c12 fs30">手机号</h2>
    <input
      class="c-form__input fs28 bgc11"
      type="number"
      maxlength="11"
      placholder-class="c32"
      placeholder="请输入手机号"
      v-model.trim="cForm.model.phoneNumber"
    />
    <h2 class="c-form__title c12 fs30">评论（可以不填）</h2>
    <textarea
      class="c-form__textarea fs28 bgc11"
      placholder-class="c32"
      placeholder="请输入评论"
      v-model.trim="cForm.model.content"
    >
    </textarea>
    <button class="c-button is-bottom w650 h88 bgc21 c11 fs32" @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>
