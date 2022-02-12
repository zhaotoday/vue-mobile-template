import { ref } from "@vue/composition-api";
import Categories from "./components/categories";
import products from "@/mock/products.json";

export default {
  components: {
    "vc-categories": Categories,
  },
  setup() {
    const swiperData = [
      "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      "https://cdn.uviewui.com/uview/swiper/swiper2.png",
      "https://cdn.uviewui.com/uview/swiper/swiper3.png",
    ];

    const value = ref(0);

    return {
      products,
      swiperData,
      value,
    };
  },
};
