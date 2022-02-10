<template>
  <div class="p-user-info u-pt18">
    <ul class="c-list bg-white fs30">
      <li class="c-list__item is-link">
        <label>头像</label>
        <c-avatar-crop
          class="b-avatar"
          sel-width="500upx"
          sel-height="500upx"
          @upload="onAvatarUpload"
          :avatar-src="avatarUrl"
          inner="true"
          can-rotate="false"
        />
      </li>
      <li class="c-list__item">
        <label>姓名</label>
        <input
          class="c-list__value"
          placeholder-class="t-placeholder"
          placeholder="请输入姓名"
          v-model.trim="cForm.model.name"
        />
      </li>
      <li class="c-list__item">
        <label>昵称</label>
        <input
          class="c-list__value"
          placeholder-class="t-placeholder"
          placeholder="请输入昵称"
          v-model.trim="cForm.model.nickName"
        />
      </li>
      <li class="c-list__item">
        <label>性别</label>
        <picker
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
      </li>
      <li class="c-list__item">
        <label>个人主页</label>
        <input
          class="c-list__value"
          placeholder-class="t-placeholder"
          placeholder="请输入个人主页"
          v-model.trim="cForm.model.url"
        />
      </li>
    </ul>
    <button
      :class="bem.button.big.$"
      class="at-bottom w690 bg-primary t-white"
      @click="submit"
    >
      保存
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
