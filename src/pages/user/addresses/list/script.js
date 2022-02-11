import wx from "wx-bridge";
import { onShow } from "uni-composition-api";
import { reactive, ref } from "@vue/composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import { addressesApi } from "@/apis/client/addresses";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { user } = useUsers();

    const loaded = ref(false);

    const list = ref({
      items: [],
      total: 0,
    });

    const cDel = reactive({
      id: 0,
      visible: false,
    });

    onShow(async () => {
      const { select } = currentRoute.query;

      wx.setNavigationBarTitle({ title: select ? "选择收货地址" : "收货地址" });

      await renderList();

      loaded.value = true;
    });

    const renderList = async () => {
      list.value = await addressesApi.get({
        query: {
          where: {
            wxUserId: { $eq: user.value.id },
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
      await addressesApi.post({
        action: "setDefault",
        body: { id: item.id },
      });

      wx.showToast({ title: "设置成功" });

      await renderList();
    };

    const del = async ({ id }) => {
      await addressesApi.delete({ id });

      wx.showToast({ title: "删除成功" });

      await renderList();
    };

    return {
      loaded,
      list,
      cDel,
      select,
      setDefault,
      del,
    };
  },
};
