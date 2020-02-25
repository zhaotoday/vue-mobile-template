<template>
  <div class="p-my-info u-pt18">
    <div class="c-list bgc11 fs32">
      <div class="c-list__item">
        <label>姓名</label>
        <input
          class="c-list__value fs32"
          placeholder-class="c36"
          placeholder="请填写姓名"
          v-model.trim="cForm.model.name"
        />
      </div>
      <div class="c-list__item">
        <label>手机号</label>
        <div class="c-list__value fs32">
          {{
            cForm.model.phoneNumber
              ? $helpers.encryptPhoneNumber(cForm.model.phoneNumber)
              : ""
          }}
        </div>
        <div
          class="c-list__operation c21 fs28"
          @click="
            navigateTo(
              `${$consts.PHONE_NUMBER_PAGE}?update=${
                cForm.model.phoneNumber ? 1 : ''
              }`
            )
          "
        >
          {{ cForm.model.phoneNumber ? "更换手机号" : "绑定手机号" }}
        </div>
      </div>
      <div class="c-list__item">
        <label>性别</label>
        <picker
          :range="
            dicts.Gender.filter(item => item.value !== 0).map(
              item => item.label
            )
          "
          @change="handleGenderChange"
        >
          <div v-if="cForm.model.gender" class="c-list__value fs32">
            {{
              $helpers.getItem(dicts.Gender, "value", cForm.model.gender)[
                "label"
              ] || ""
            }}
          </div>
          <div v-else class="c-list__value fs32 c36">
            请选择性别
          </div>
        </picker>
      </div>
      <div class="c-list__item">
        <label>生日</label>
        <div v-if="hasBirthday" class="c-list__value c2">
          {{ cForm.model.birthday }}
        </div>
        <picker
          v-else
          mode="date"
          v-model="cForm.model.birthday"
          @change="handleBirthdayChange"
        >
          <div :class="['c-list__value', cForm.model.birthday ? '' : 'c36']">
            {{ cForm.model.birthday || "请选择生日，保存后不可修改" }}
          </div>
        </picker>
      </div>
    </div>
    <button class="c-button is-bottom w650 h88 bgc21 c11 fs32" @click="save">
      保存
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
