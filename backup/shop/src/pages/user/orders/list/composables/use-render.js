import { computed, reactive, ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useI18n } from "vue-mobile/composables/use-i18n";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { OrderStatus } from "@/pages/manage/utils/enums/order-status";

export const useRender = () => {
  const { $t, getLocale } = useI18n({ page: "user/orders/list" });

  const { enums } = useEnums();

  const { user } = useUsers();

  const loaded = ref(false);

  const cTabs = reactive({
    current: 0,
  });

  const tabItems = computed(() =>
    getLocale() === "en"
      ? [
          {
            label: $t("$.orderStatuses.all"),
            value: "",
          },
          ...enums.value.OrderStatus,
        ]
      : OrderStatus
  );

  const list = ref({
    items: [],
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
    loaded,
    cTabs,
    tabItems,
    list,
    render,
    changeTab,
  };
};
