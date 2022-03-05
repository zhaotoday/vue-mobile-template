<template>
  <div class="p-user-info u-pt24">
    <c-form>
      <c-form-item :label="$t('titles.avatar')">
        <u-avatar
          size="86rpx"
          :src="avatarUrl || defaultAvatarUrl"
          @click="chooseImage"
        />
      </c-form-item>
      <c-form-item :label="$t('titles.name')">
        <c-form-input
          :placeholder="$t('inputs.name')"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
      </c-form-item>
      <c-form-item custom-class="is-link" :label="$t('titles.gender')">
        <c-form-picker
          :placeholder="$t('inputs.gender')"
          :enums="enums.Gender.filter((item) => item.value !== 0)"
          v-model="cForm.model.gender"
        />
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      {{ $t("titles.save") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
