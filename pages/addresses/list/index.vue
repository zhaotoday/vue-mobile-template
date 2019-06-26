<template>
  <div class="p-addresses-list">
    <ul
      v-for="item in 5"
      :key="item"
      class="b-list u-mt20">
      <li class="b-list__item bgc1">
        <div class="b-list__head">
          <h2 class="b-list__title fs28">浦上大道金港路8号 金山桔园泰园</h2>
          <p class="b-list__desc c9 fs24">赵金添 13890998888</p>
          <div class="c-tag h34 bdc5 c5 fs20">公司</div>
        </div>
        <div class="b-list__foot fs24">
          <div class="c-icon-tag c-icon-tag--set">设为默认</div>
          <div class="c-icon-tag c-icon-tag--edit">编辑</div>
          <div class="c-icon-tag c-icon-tag--del">删除</div>
        </div>
      </li>
    </ul>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="navigateTo('/pages/addresses/form/index')">
      新增地址
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
