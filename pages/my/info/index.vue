<template>
  <div class="p-my-info">
    <div class="c-list bgc11 fs32 u-mt16">
      <div class="c-list__item">
        <label class="c35">姓名</label>
        <input
          class="c-list__value fs32"
          placeholder-class="c32"
          placeholder="请输入姓名"
          v-model="cForm.name"
        />
      </div>
      <div class="c-list__item">
        <label class="c35">手机号</label>
        <div class="c-list__value fs32">
          {{ $helpers.encryptPhoneNumber(cForm.phoneNumber) }}
        </div>
        <div
          class="c-list__operation c21 fs28"
          @click="navigateTo('/pages/bind/index?update=1')">
          更换手机号
        </div>
      </div>
      <div class="c-list__item">
        <label class="c35">性别</label>
        <div class="c-list__value fs32">
          {{ $helpers.getItem($consts.GENDERS, 'value', cForm.gender)['label'] || '未知' }}
        </div>
      </div>
      <div class="c-list__item">
        <label class="c35">生日</label>
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
          <div :class="[ 'c-list__value', cForm.birthday ? '' : 'c31' ]">
            {{ cForm.birthday || '请选择生日，保存后不可修改' }}
          </div>
        </picker>
      </div>
    </div>
    <button
      class="c-button is-foot w650 h88 bgc21 c11 fs32"
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
