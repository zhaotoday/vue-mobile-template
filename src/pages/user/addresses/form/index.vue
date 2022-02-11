<template>
  <div class="p-user-addresses-form u-pt30">
    <c-form>
      <c-form-item label="收货人">
        <c-form-input
          placeholder="收货人姓名"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
        <ul class="b-genders">
          <li
            v-for="item in enums.UserAddressGender"
            :key="item.value"
            :class="[
              'c-tag h50 u-br10',
              cForm.model.gender === item.value
                ? 'bd-primary t-primary'
                : 'bd-placeholder t-placeholder',
              'fs26',
            ]"
            @click="changeTag('gender', item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </c-form-item>
      <c-form-item label="手机号">
        <c-form-input
          type="number"
          maxlength="11"
          placeholder="配送员联系您的手机号"
          v-model.trim="cForm.model.phoneNumber"
          :error="cForm.errors.phoneNumber"
          @blur="validate(cForm, 'phoneNumber')"
        />
      </c-form-item>
      <c-form-item custom-class="is-link" label="小区"> abc </c-form-item>
      <c-form-item label="门牌号">
        <c-form-input
          placeholder="门牌号，如：1 号楼 102"
          v-model.trim="cForm.model.room"
          :error="cForm.errors.room"
          @blur="validate(cForm, 'room')"
        />
      </c-form-item>
    </c-form>
    <ul v-if="false" class="c-list bgc11 fs30 u-mt20">
      <li class="c-list__item is-link" @click="selectLocation">
        小区
        <p v-if="cForm.location.name" class="c-list__value fs32">
          {{ cForm.location.name }}
        </p>
        <p v-else class="c-list__value c31 fs32">小区/写字楼等</p>
      </li>
      <li class="c-list__item">
        门牌号
        <input
          class="c-list__value fs32"
          placeholder-class="c31"
          placeholder="门牌号，如：1 号楼 102"
          v-model="cForm.room"
        />
      </li>
      <li class="c-list__item">
        地址分类
        <ul class="b-types">
          <li
            v-for="item in $consts.ADDRESS_TAGS"
            :key="item.value"
            :class="[
              'c-tag h50',
              cForm.tag === item.value ? 'bdc22 c22' : 'bdc31 c31',
              'fs26',
            ]"
            @click="changeTag('tag', item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </li>
    </ul>
    <u-button custom-class="at-bottom w690" type="primary" @click="submit">
      保存
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
