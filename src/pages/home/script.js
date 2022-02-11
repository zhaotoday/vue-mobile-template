import { ref } from "@vue/composition-api";

export default {
  setup() {
    const swiperData = [
      "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      "https://cdn.uviewui.com/uview/swiper/swiper2.png",
      "https://cdn.uviewui.com/uview/swiper/swiper3.png",
    ];

    const value = ref(0);

    return {
      swiperData,
      value,
    };
  },
};
