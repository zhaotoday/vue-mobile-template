import wx from "wx-bridge";
import { onShow } from "uni-composition-api";
import { ref } from "@vue/composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import { addressesApi } from "@/apis/client/addresses";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { enums } = useEnums();

    const { user } = useUsers();

    const loaded = ref(true);

    const list = ref({
      items: [],
      total: 0,
    });

    onShow(async () => {
      const { select } = currentRoute.query;

      wx.setNavigationBarTitle({ title: select ? "选择收货地址" : "收货地址" });

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

    const select = (item) => {
      if (currentRoute.query.select) {
        console.log(item);
        wx.navigateBack();
      }
    };

    const setDefault = async (item) => {
      if (item.default) return;

      await addressesApi.post({
        id: item.id,
        action: "setDefault",
      });

      wx.showToast({ title: "设置成功" });

      await render();
    };

    const del = async ({ id }) => {
      const { confirm } = await wx.showModal({
        title: "请确认",
        content: "确认删除吗？",
      });

      if (confirm) {
        await addressesApi.delete({ id });

        wx.showToast({ title: "删除成功" });

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
