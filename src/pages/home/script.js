import { ref } from "@vue/composition-api";
import Categories from "./components/categories";
import products from "@/mock/products.json";
import { onShow } from "uni-composition-api";
import { useCart } from "@/composables/use-cart";

export default {
  components: {
    "vc-categories": Categories,
  },
  setup() {
    const swiperData = [
      "https://cdn.uviewui.com/uview/goods/1.jpg",
      "https://cdn.uviewui.com/uview/goods/2.jpg",
      "https://cdn.uviewui.com/uview/goods/3.jpg",
    ];

    const value = ref(0);

    onShow(() => {
      useCart().renderProductNumbers();
    });

    return {
      products,
      swiperData,
      value,
    };
  },
};
