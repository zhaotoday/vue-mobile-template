<template>
  <div class="p-user-info u-pt30">
    <c-form>
      <c-form-item label="头像">abc</c-form-item>
      <c-form-item label="名字">
        <c-form-input
          placeholder="请输入名字"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
      </c-form-item>
      <c-form-item label="性别">
        <c-form-picker
          :enums="enums.Gender.filter((item) => item.value !== 0)"
          v-model="cForm.model.gender"
        />
        <picker
          v-if="false"
          class="c-list__value"
          :range="
            enums.Gender.filter((item) => item.value !== 0).map(
              (item) => item.label
            )
          "
          @change="onGenderChange"
        >
          <div v-if="cForm.model.gender">
            {{
              $helpers.getItem(enums.Gender, "value", cForm.model.gender)[
                "label"
              ] || ""
            }}
          </div>
          <div v-else class="t-placeholder">请选择性别</div>
        </picker>
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w690" type="primary" @click="submit">
      保存
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
