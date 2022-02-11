import { mapState } from "vuex";
import { onShow } from "uni-composition-api";
import { ref } from "@vue/composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import wx from "wx-bridge";
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
      select,
      setDefault,
      del,
    };
  },
  data() {
    return {
      cDel: {
        visible: false,
        id: 0,
      },
    };
  },
};
