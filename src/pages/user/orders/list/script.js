import products from "@/mock/products.json";
import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useProducts } from "@/composables/use-products";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { t, $t } = useI18n({ page: "user/orders/list" });

    const { user } = useUsers();

    const { getTotalPrice } = useProducts();

    const loaded = ref(false);

    const cTabs = {
      current: 0,
      items: [
        {
          label: $t("orderStatuses.all"),
          value: "",
        },
        {
          label: $t("orderStatuses.toPay"),
          value: "ToPay",
        },
        {
          label: $t("orderStatuses.finished"),
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
          where: {
            userId: { $eq: user.value.id },
            status: { $eq: cTabs.items[cTabs.current].value },
          },
        },
      });
    };

    const changeTab = async ({ index }) => {
      cTabs.current = index;
      await render();
    };

    return {
      loaded,
      list,
      cTabs,
      getTotalPrice,
      changeTab,
    };
  },
};
