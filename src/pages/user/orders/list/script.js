import products from "@/mock/products.json";
import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useProducts } from "@/composables/use-products";

export default {
  setup() {
    const { user } = useUsers();

    const { getTotalPrice } = useProducts();

    const loaded = ref(false);

    const cTabs = {
      items: [
        {
          label: "全部",
          value: "",
        },
        {
          label: "待付款",
          value: "ToPay",
        },
        {
          label: "已完成",
          value: "Finished",
        },
      ],
    };

    const list = ref({
      items: [],
    });

    onShow(async () => {
      await render();
      loaded.value = true;
    });

    const render = async () => {
      list.value = await ordersApi.get({
        query: {
          where: { userId: { $eq: user.value.id } },
        },
      });
    };

    return {
      loaded,
      list,
      cTabs,
      getTotalPrice,
    };
  },
};
