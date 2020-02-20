<template>
  <div class="c-panel bgc11 u-mt18">
    <div class="c-panel__head">
      <div class="c-panel__title fs32">标题</div>
      <div class="c-panel__extra has-icon c37 fs24">
        更多
        <i class="c-icon c-icon--more"></i>
      </div>
    </div>
    <div class="c-panel__body p30">
      <ul class="c-list fs32">
        <li v-for="item in 4" :key="item" class="c-list__item is-link">
          列表项
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ListPage extends Vue {}
</script>
