<template>
  <div class="p-user-addresses-form u-pt24">
    <c-form>
      <c-form-item :label="t('_.titles.consignee')">
        <c-form-input
          :placeholder="t('_.inputs.consignee')"
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
      <c-form-item :label="$t('titles.phoneNumber')">
        <c-form-input
          type="number"
          maxlength="11"
          :placeholder="t('_.inputs.byWhichPhoneWeContactYou')"
          v-model.trim="cForm.model.phoneNumber"
          :error="cForm.errors.phoneNumber"
          @blur="validate(cForm, 'phoneNumber')"
        />
      </c-form-item>
      <c-form-item custom-class="is-link" :label="t('_.titles.housingEstate')">
        <c-form-link
          :placeholder="t('_.inputs.housingEstate')"
          :label="cForm.model.location.name"
          @click="selectLocation"
        />
      </c-form-item>
      <c-form-item :label="t('_.titles.houseNo')">
        <c-form-input
          :placeholder="t('_.inputs.houseNo')"
          v-model.trim="cForm.model.room"
          :error="cForm.errors.room"
          @blur="validate(cForm, 'room')"
        />
      </c-form-item>
      <c-form-item :label="t('_.titles.addressTag')">
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
      {{ $t("titles.save") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
