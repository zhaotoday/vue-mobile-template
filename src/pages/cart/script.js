import { useCart } from "@/composables/use-cart";
import wx from "wx-bridge";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { products, clearProducts } = useCart();

    const { user } = useUsers();

    const submit = async () => {
      const { id } = await ordersApi.post({
        body: {
          userId: user.value.id,
          products: products.value,
        },
      });

      clearProducts();

      wx.navigateTo({ url: `/pages/pay/index?orderId=${id}` });
    };

    return {
      products,
      submit,
    };
  },
};
