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
          {{ encryptedMobile }}
        </div>
        <div
          class="c-list__operation c7 fs28"
          @click="navigateTo('/pages/bind/index?update=1')">
          更换手机
        </div>
      </div>
      <div class="c-list__item c6">
        性别
        <div class="c-list__value c2">
          <c-checkbox
            label="男士"
            :checked="cForm.sex === 1"
            @change="cForm.sex = 1"
            style="margin-right: 60rpx;">
          </c-checkbox>
          <c-checkbox
            label="女士"
            :checked="cForm.sex === 2"
            @change="cForm.sex = 2">
          </c-checkbox>
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
      :class="'c-button c-button--' + (submitDisabled ? 'disabled bgc12 c1' : 'primary bgc7 c1') + ' fs32'"
      @click="handleSubmit">
      保存
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
