import { useCart } from "uni-shop/composables/use-cart";
import BCollection from "./components/collection/index.vue";
import { store } from "@/store";
import wx from "wx-bridge";

export default {
  components: {
    BCollection,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { selectedProducts, updateProductNumber } = useCart();

    const addToCart = () => {
      if (props.product.stock) {
        updateProductNumber({ product: props.product, number: 1 });
      } else {
        wx.showToast({ title: "库存不足" });
      }
    };

    return {
      selectedProducts,
      addToCart,
    };
  },
  // app computed bug
  computed: {
    addedToCart() {
      const { products } = store.state.cart;
      return products.map(({ id }) => id).includes(this.product.id);
    },
  },
};
