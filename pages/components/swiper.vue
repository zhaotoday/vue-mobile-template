<template>
  <c-swiper class="p-swiper" :height="300" :items="items"> </c-swiper>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SwiperPage extends Vue {
  items = [
    { image: "https://mmjs.lrcdn.cn/1?imageView2/1/w/750/h/300/q/100" },
    { image: "https://mmjs.lrcdn.cn/2?imageView2/1/w/750/h/300/q/100" },
    { image: "https://mmjs.lrcdn.cn/3?imageView2/1/w/750/h/300/q/100" }
  ];
}
</script>
