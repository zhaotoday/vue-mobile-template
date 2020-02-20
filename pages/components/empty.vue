<template>
  <c-empty tip="暂无数据..."></c-empty>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class EmptyPage extends Vue {}
</script>
