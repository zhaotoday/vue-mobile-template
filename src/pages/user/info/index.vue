<template>
  <div class="p-user-info u-pt24">
    <c-form>
      <c-form-item label="头像">
        <u-avatar
          size="86rpx"
          :src="avatarUrl || defaultAvatarUrl"
          mode="aspectFill"
          @click="chooseImage"
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
