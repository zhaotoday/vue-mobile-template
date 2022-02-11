<template>
  <div class="p-user-addresses-list u-pt30">
    <ul v-for="item in list.items" :key="item" class="b-list">
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
              `c-icon-tag--${item.isDefault ? 'set' : 'unset'}`,
            ]"
            @click.stop="setDefault(item)"
          >
            设为默认
          </div>
          <div
            class="c-icon-tag c-icon-tag--edit"
            @click.stop="
              navigateTo(`/pages/my/addresses/form/index?id=${item.id}`)
            "
          >
            修改
          </div>
          <div class="c-icon-tag c-icon-tag--del" @click.stop="showDel(item)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <u-empty
      v-if="loaded && !list.items.length"
      mode="data"
      icon="https://cdn.uviewui.com/uview/empty/data.png"
      margin-top="100rpx"
    />
    <u-button
      custom-class="at-bottom w690"
      type="primary"
      @click="$wx.navigateTo('/pages/user/addresses/form/index')"
    >
      新增
    </u-button>
    <u-modal
      :show="cDel.visible"
      title="请确认"
      content="确认删除收货地址"
      @confirm="del"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
