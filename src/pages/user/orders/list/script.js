import { computed, ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useProducts } from "@/composables/use-products";
import { useI18n } from "@/composables/use-i18n";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";

export default {
  setup() {
    const { $t } = useI18n({ path: "user/orders/list" });

    const { enums } = useEnums();

    const { user } = useUsers();

    const { getTotalPrice } = useProducts();

    const loaded = ref(false);

    const cTabs = {
      current: 0,
    };

    const tabItems = computed(() => [
      {
        label: $t("$.orderStatuses.all"),
        value: "",
      },
      ...enums.value.OrderStatus,
    ]);

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
            status: { $eq: tabItems.value[cTabs.current].value },
          },
        },
      });
    };

    const changeTab = async ({ index }) => {
      cTabs.current = index;
      await render();
    };

    return {
      enums,
      loaded,
      list,
      cTabs,
      tabItems,
      getTotalPrice,
      changeTab,
    };
  },
};
