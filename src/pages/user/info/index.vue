<template>
  <div class="p-user-info u-pt24">
    <c-form>
      <c-form-item custom-class="is-link" label="头像">
        <c-avatar-upload
          class="b-avatar"
          sel-width="500upx"
          sel-height="500upx"
          @upload="onAvatarUpload"
          :avatar-src="avatarUrl"
          inner="true"
          can-rotate="false"
        />
      </c-form-item>
      <c-form-item label="姓名">
        <c-form-input
          placeholder="请输入姓名"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
      </c-form-item>
      <c-form-item custom-class="is-link" label="性别">
        <c-form-picker
          placeholder="请选择性别"
          :enums="enums.Gender.filter((item) => item.value !== 0)"
          v-model="cForm.model.gender"
        />
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      保存
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
