<template>
  <div class="p-user-addresses-form u-pt24">
    <c-form>
      <c-form-item :label="pt('$.consignee')">
        <c-form-input
          :placeholder="pt('inputs.consignee')"
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
      <c-form-item :label="$t('$.phoneNumber')">
        <c-form-input
          type="number"
          maxlength="11"
          :placeholder="pt('inputs.byWhichPhoneWeContactYou')"
          v-model.trim="cForm.model.phoneNumber"
          :error="cForm.errors.phoneNumber"
          @blur="validate(cForm, 'phoneNumber')"
        />
      </c-form-item>
      <c-form-item custom-class="is-link" :label="pt('$.housingEstate')">
        <c-form-link
          :placeholder="pt('inputs.housingEstate')"
          :label="cForm.model.location.name"
          @click="selectLocation"
        />
      </c-form-item>
      <c-form-item :label="pt('$.houseNo')">
        <c-form-input
          :placeholder="pt('inputs.houseNo')"
          v-model.trim="cForm.model.room"
          :error="cForm.errors.room"
          @blur="validate(cForm, 'room')"
        />
      </c-form-item>
      <c-form-item :label="pt('$.addressTag')">
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
      {{ $t("$.save") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
