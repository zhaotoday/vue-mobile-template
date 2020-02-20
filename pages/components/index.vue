<template>
  <div class="c-panel bgc11 u-mt18">
    <div class="c-panel__head">
      <div class="c-panel__title fs32">组件</div>
    </div>
    <div class="c-panel__body p30">
      <ul class="c-list fs32">
        <li
          v-for="item in components"
          :key="item.name"
          class="c-list__item is-link"
          @click="navigateTo(`/pages/components/${item.name}`)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class IndexPage extends Vue {
  components = [
    {
      name: "checkbox"
    },
    {
      name: "dialog"
    },
    {
      name: "empty"
    },
    {
      name: "list"
    },
    {
      name: "logo"
    },
    {
      name: "search"
    },
    {
      name: "share"
    },
    {
      name: "simple-ui"
    },
    {
      name: "swiper"
    }
  ];
}
</script>
