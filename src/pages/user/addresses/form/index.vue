<template>
  <div class="p-user-addresses-form u-pt24">
    <c-form>
      <c-form-item label="收货人">
        <c-form-input
          placeholder="收货人姓名"
          v-model.trim="cForm.model.name"
          :error="cForm.errors.name"
          @blur="validate(cForm, 'name')"
        />
        <ul class="b-tags">
          <li
            v-for="item in enums.AddressGender"
            :key="item.value"
            :class="[
              'c-tag h46 u-br10',
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
      <c-form-item custom-class="is-link" label="小区">
        <c-form-link
          placeholder="小区/写字楼等"
          :label="cForm.model.location.name"
          @click="selectLocation"
        />
      </c-form-item>
      <c-form-item label="门牌号">
        <c-form-input
          placeholder="门牌号，如：1 号楼 102"
          v-model.trim="cForm.model.room"
          :error="cForm.errors.room"
          @blur="validate(cForm, 'room')"
        />
      </c-form-item>
      <c-form-item label="地址类型">
        <ul class="b-tags u-pt18">
          <li
            v-for="item in enums.AddressTag"
            :key="item.value"
            :class="[
              'c-tag h46 u-br10',
              cForm.model.tag === item.value
                ? 'bd-primary t-primary'
                : 'bd-placeholder t-placeholder',
              'fs26',
            ]"
            @click="changeTag('tag', item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </c-form-item>
    </c-form>
    <u-button custom-class="at-bottom w702" type="primary" @click="submit">
      保存
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
