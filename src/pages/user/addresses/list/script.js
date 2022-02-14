import wx from "wx-bridge";
import { onShow } from "uni-composition-api";
import { reactive, ref } from "@vue/composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import { addressesApi } from "@/apis/client/addresses";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { enums } from "@/utils/enums";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { user } = useUsers();

    const loaded = ref(true);

    const list = ref({
      items: [
        {
          name: "赵金添",
          phoneNumber: "13950442340",
          gender: 1,
          location: {
            name: "XXX",
          },
          room: "22",
          tag: 1,
        },
        {
          name: "赵金添",
          phoneNumber: "13950442340",
          gender: 1,
          location: {
            name: "XXX",
          },
          room: "22",
          tag: 1,
        },
      ],
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
      const { confirm } = await wx.showModal({
        title: "请确认",
        content: "确认删除吗？",
      });

      if (confirm) {
        await addressesApi.delete({ id });

        wx.showToast({ title: "删除成功" });

        await renderList();
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
