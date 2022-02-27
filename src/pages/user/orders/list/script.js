import products from "@/mock/products.json";
import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const cTabs = {
      items: [
        {
          name: "全部",
        },
        {
          name: "待付款",
        },
        {
          name: "待收货",
        },
        {
          name: "已完成",
        },
      ],
    };

    const { user } = useUsers();

    const list = ref({
      items: [],
    });

    onShow(async () => {
      await render();
    });

    const render = async () => {
      list.value = await ordersApi.get({
        query: {
          where: { userId: { $eq: user.value.id } },
        },
      });
    };

    return {
      products,
      list,
      cTabs,
    };
  },
};
