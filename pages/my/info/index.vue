<template>
  <div class="p-my-info u-pt18">
    <ul class="c-list bgc11 fs32">
      <li class="c-list__item">
        <label>姓名</label>
        <input
          class="c-list__value"
          placeholder-class="c36"
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
        <div
          class="c-list__operation c21 fs28"
          @click="
            $wx.navigateTo(
              `/pages/my/phone-number/index?update=${
                cForm.model.phoneNumber ? 1 : ''
              }`
            )
          "
        >
          {{ cForm.model.phoneNumber ? "更换手机号" : "绑定手机号" }}
        </div>
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
          <div v-else class="c36">请选择性别</div>
        </picker>
      </li>
      <li class="c-list__item">
        <label>生日</label>
        <div v-if="hasBirthday" class="c-list__value c2">
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
          <div v-else class="c36">请选择生日，保存后不可修改</div>
        </picker>
      </li>
    </ul>
    <button class="c-button is-bottom w650 h88 bgc21 c11 fs32" @click="submit">
      保存
    </button>
  </div>
</template>

<script src="./script.js"></script>
