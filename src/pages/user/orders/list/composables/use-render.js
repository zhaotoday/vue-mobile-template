import { computed, reactive, ref } from "@vue/composition-api";
import { ordersApi } from "@/apis/client/orders";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";

export const useRender = () => {
  const { enums } = useEnums();

  const { user } = useUsers();

  const loaded = ref(false);

  const cTabs = reactive({
    current: 0,
  });

  const list = ref({
    items: [],
  });

  const orderStatuses = computed(() => [
    { label: "所有", value: "" },
    ...enums.value.OrderStatus,
  ]);

  const render = async () => {
    list.value = await ordersApi.get({
      query: {
        where: {
          userId: { $eq: user.value.id },
          status: { $eq: orderStatuses.value[cTabs.current].value },
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
    list,
    orderStatuses,
    render,
    changeTab,
  };
};
