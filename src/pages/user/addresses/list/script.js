import { onShow } from "uni-composition-api";
import { ref } from "@vue/composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import { addressesApi } from "@/apis/client/addresses";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { usePageData } from "vue-mobile/composables/use-page-data";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { setPageData, getCurrentPage } = usePageData();

    const { enums } = useEnums();

    const { user } = useUsers();

    const loaded = ref(false);

    const list = ref({
      items: [],
      total: 0,
    });

    onShow(async () => {
      const { action } = currentRoute.query;

      await uni.setNavigationBarTitle({
        title: action === "select" ? "选择收货地址" : "收货地址",
      });

      await render();

      loaded.value = true;
    });

    const render = async () => {
      list.value = await addressesApi.get({
        query: {
          where: {
            userId: { $eq: user.value.id },
          },
        },
      });
    };

    const select = async (item) => {
      if (currentRoute.query.action === "select") {
        setPageData({
          page: getCurrentPage(),
          data: { selectedAddress: item },
        });
        await uni.navigateBack();
      }
    };

    const setDefault = async (item) => {
      if (item.default) return;

      await addressesApi.post({
        id: item.id,
        action: "setDefault",
      });

      await uni.showToast({ title: "设置成功" });

      await render();
    };

    const del = async ({ id }) => {
      const { confirm } = await uni.showModal({
        title: "请确认",
        content: "确认删除吗？",
      });

      if (confirm) {
        await addressesApi.delete({ id });

        await uni.showToast({ title: "删除成功" });

        await render();
      }
    };

    return {
      enums,
      loaded,
      list,
      select,
      setDefault,
      del,
    };
  },
};
