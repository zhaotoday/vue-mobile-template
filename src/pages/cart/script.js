import { useCart } from "@/composables/use-cart";
import wx from "wx-bridge";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { products, selectedProducts, clearProducts } = useCart();

    const { user } = useUsers();

    const submit = async () => {
      const { id } = await ordersApi.post({
        body: {
          userId: user.value.id,
          products: selectedProducts.value,
        },
      });

      clearProducts();

      await wx.navigateTo({ url: `/pages/pay/index?orderId=${id}` });
    };

    return {
      products,
      submit,
    };
  },
};
