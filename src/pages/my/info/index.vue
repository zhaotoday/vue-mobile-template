<template>
  <div class="p-my-info u-pt18">
    <ul class="c-list bg-white fs30">
      <li class="c-list__item">
        <label>姓名</label>
        <input
          class="c-list__value"
          placeholder-class="t-placeholder"
          placeholder="请填写姓名"
          v-model.trim="cForm.model.name"
        />
      </li>
      <li class="c-list__item">
        <label>手机号</label>
        <div class="c-list__value">
          {{
            cForm.model.phoneNumber
              ? $helpers.encryptPhoneNumber(cForm.model.phoneNumber)
              : ""
          }}
        </div>
        <button
          class="c-list__operation c-button u-br0 bg-white t-primary fs28"
          open-type="getPhoneNumber"
          @getphonenumber="onGetPhoneNumber"
        >
          获取手机号
        </button>
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
        <label>生日</label>
        <div v-if="hasBirthday" class="c-list__value">
          {{ cForm.model.birthday }}
        </div>
        <picker
          v-else
          class="c-list__value"
          mode="date"
          v-model="cForm.model.birthday"
          @change="onBirthdayChange"
        >
          <div v-if="cForm.model.birthday">
            {{ cForm.model.birthday }}
          </div>
          <div v-else class="t-placeholder">请选择生日，保存后不可修改</div>
        </picker>
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
