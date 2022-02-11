import { mapState } from "vuex";
import { onShow } from "uni-composition-api";
import { ref } from "@vue/composition-api";
import { useRoute } from "vue-mobile/composables/use-route";
import wx from "wx-bridge";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const loaded = ref(false);

    onShow(async () => {
      const { select } = currentRoute.query;

      wx.setNavigationBarTitle({ title: select ? "选择收货地址" : "收货地址" });

      await this.getList();

      loaded.value = true;
    });

    return {
      loaded,
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
    getList() {
      return this.$store.dispatch("wx/addresses/getList", {
        query: {
          where: {
            wxUserId: {
              $eq: this.$auth.get()["user"].id,
            },
          },
        },
      });
    },
    async setDefault(item) {
      await this.$store.dispatch("wx/addresses/postAction", {
        showLoading: true,
        body: {
          type: "SET_DEFAULT",
          id: item.id,
        },
      });

      wx.showToast({
        title: "设置成功",
      });

      this.getList();
    },
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
