<template>
  <div class="p-my-addresses-list">
    <ul
      v-for="item in list.items"
      :key="item"
      class="b-list u-mt20">
      <li
        class="b-list__item bgc11"
        @click="select(item)">
        <div class="b-list__head">
          <h2 class="b-list__title fs28">{{ item.location.name + item.room }}</h2>
          <p class="b-list__desc c31 fs24">{{ item.name }} {{ item.phoneNumber }}</p>
          <div class="c-tag h34 bdc22 c22 fs20">
            {{ $helpers.getItem($consts.ADDRESS_TAGS, 'value', item.tag)['label'] }}
          </div>
        </div>
        <div class="b-list__foot fs24">
          <div
            :class="[ 'c-icon-tag', `c-icon-tag--${item.isDefault ? 'set' : 'unset'}` ]"
            @click.stop="setDefault(item)">
            设为默认
          </div>
          <div
            class="c-icon-tag c-icon-tag--edit"
            @click.stop="navigateTo(`/pages/my/addresses/form/index?id=${item.id}`)">
            修改
          </div>
          <div
            class="c-icon-tag c-icon-tag--del"
            @click.stop="showDel(item)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <c-empty v-if="!list.items.length && loaded"></c-empty>
    <button
      class="c-button is-foot w670 h76 bgc21 c11 fs32"
      @click="navigateTo('/pages/my/addresses/form/index')">
      新增
    </button>
    <c-dialog
      :visible="cDel.visible"
      title="请确认"
      content="确认删除收货地址？"
      @cancel="cDel.visible = false"
      @confirm="confirmDel">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>
