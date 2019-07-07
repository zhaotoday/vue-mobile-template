<template>
  <div class="p-my-info">
    <div class="c-list bgc1 fs32">
      <div class="c-list__item c6">
        姓名
        <div class="c-list__value c2 fs32">{{ cForm.name }}</div>
      </div>
      <div class="c-list__item c6">
        手机号
        <div class="c-list__input cs2 fs32">
          {{ $helpers.encryptPhoneNumber(cForm.phoneNumber) }}
        </div>
        <div
          class="c-list__operation c7 fs28"
          @click="navigateTo('/pages/bind/index?update=1')">
          更换手机
        </div>
      </div>
      <div class="c-list__item c6">
        生日
        <div
          v-if="hasBirthday"
          class="c-list__value c2">
          {{ cForm.birthday }}
        </div>
        <picker
          v-else
          mode="date"
          v-model="cForm.birthday"
          @change="handleBirthdayChange">
          <div :class="[ 'c-list__value', cForm.birthday ? 'c2' : 'c19' ]">
            {{ cForm.birthday || '请选择生日，保存后不可修改' }}
          </div>
        </picker>
      </div>
    </div>
    <button
      class="c-button is-foot w670 h76 bgc4 c1 fs32"
      @click="save">
      保存
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
