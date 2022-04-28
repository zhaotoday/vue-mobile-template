<template>
  <div class="p-user-addresses-list u-pt24">
    <ul v-for="item in list.items" :key="item.id" class="b-list">
      <li class="b-list__item" :class="$bem.box.$" @click="select(item)">
        <div class="b-list__head">
          <h2 class="b-list__title fs28">
            {{ item.location.name + item.room }}
          </h2>
          <p class="b-list__desc t-g7 fs24">
            {{ item.name }} {{ item.phoneNumber }}
          </p>
          <div class="c-tag h34 bd-primary t-primary u-br10 fs22">
            {{ $helpers.getItem(enums.AddressTag, "value", item.tag)["label"] }}
          </div>
        </div>
        <div class="b-list__foot fs24">
          <div
            :class="[
              'c-icon-tag',
              `c-icon-tag--${item.default ? 'set' : 'unset'}`,
            ]"
            @click.stop="setDefault(item)"
          >
            {{ pt("$.setDefault") }}
          </div>
          <div
            class="c-icon-tag c-icon-tag--edit"
            @click.stop="
              $wx.navigateTo(`/pages/user/addresses/form/index?id=${item.id}`)
            "
          >
            {{ $t("$.modify") }}
          </div>
          <div class="c-icon-tag c-icon-tag--del" @click.stop="del(item)">
            {{ $t("$.del") }}
          </div>
        </div>
      </li>
    </ul>
    <u-empty
      v-if="loaded && !list.items.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
      text="暂无数据"
    />
    <u-button
      custom-class="at-bottom w702"
      type="primary"
      :disabled="list.items.length >= 5"
      @click="$wx.navigateTo('/pages/user/addresses/form/index')"
    >
      {{ $t("$.add") }}
    </u-button>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
