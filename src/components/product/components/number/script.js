import { useCart } from "uni-shop/composables/use-cart";
import { store } from "@/store";
import wx from "wx-bridge";

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
    iconColor: {
      type: String,
      default: "",
    },
  },
  computed: {
    value: {
      get() {
        const { products } = store.state.cart;
        const found = products.find((item) => item.id === this.product.id);
        return found ? found.number : 0;
      },
      set(value) {
        this.updateProductNumber({ product: this.product, number: value });
      },
    },
  },
  setup() {
    const { updateProductNumber } = useCart();

    const onOverLimit = (type) => {
      if (type === "plus") {
        wx.showToast({ title: "库存不足" });
      }
    };

    return {
      updateProductNumber,
      onOverLimit,
    };
  },
};
