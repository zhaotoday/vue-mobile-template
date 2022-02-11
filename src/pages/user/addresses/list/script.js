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

      list.value = await getList();

      loaded.value = true;
    });

    const getList = () => {
      return addressesApi.get({
        query: {
          where: {
            wxUserId: { $eq: user.value.id },
          },
        },
      });
    };

    const setDefault = async (item) => {
      await addressesApi.post({
        action: "setDefault",
        body: { id: item.id },
      });

      wx.showToast({ title: "设置成功" });

      this.getList();
    };

    return {
      loaded,
      setDefault,
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
  computed: mapState({
    list: (state) => state["wx/addresses"].list,
  }),
  async onShow() {},
  methods: {
    showDel(item) {
      this.cDel.id = item.id;
      this.cDel.visible = true;
    },
    async confirmDel() {
      this.cDel.visible = false;

      await this.$store.dispatch("wx/addresses/del", {
        id: this.cDel.id,
      });

      wx.showToast({
        title: "删除成功",
      });

      this.getList();
    },
    select(item) {
      if (this.$mp.query.select) {
        this.$store.dispatch("wx/orders/setForm", {
          key: "address",
          value: item,
        });
        wx.navigateBack();
      }
    },
  },
};
