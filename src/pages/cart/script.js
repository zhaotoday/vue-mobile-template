import { useCart } from "@/composables/use-cart";
import wx from "wx-bridge";

export default {
  setup() {
    const { products } = useCart();

    const submit = () => {
      wx.navigateTo({ url: "/pages/pay/index" });
    };

    return {
      products,
      submit,
    };
  },
};
