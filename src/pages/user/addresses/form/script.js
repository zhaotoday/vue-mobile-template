import { useRoute } from "vue-mobile/composables/use-route";
import { useValidators } from "vue-validation";
import { reactive } from "@vue/composition-api";
import { enums } from "@/utils/enums";
import { onLoad } from "uni-composition-api";
import wx from "wx-bridge";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { isRequired, isPhoneNumber, validate } = useValidators();

    const cForm = reactive({
      model: {},
      rules: {
        name: [isRequired({ label: "收货人姓名" })],
        phoneNumber: [isRequired({ label: "手机号" }), isPhoneNumber()],
      },
      errors: {},
    });

    onLoad(async () => {
      if (currentRoute.query.id) {
        wx.setNavigationBarTitle({ title: "修改收货地址" });

        cForm.model = await this.getDetail();
      } else {
        wx.setNavigationBarTitle({ title: "新增收货地址" });
      }
    });

    return {
      enums,
      currentRoute,
      cForm,
      validate,
    };
  },
  data() {
    return {
      cForm: {
        name: "",
        gender: "1",
        phoneNumber: "",
        location: {
          name: "",
          address: "",
          latitude: "",
          longitude: "",
        },
        room: "",
        tag: "1",
      },
    };
  },
  methods: {
    getDetail() {
      return this.$store.dispatch("wx/addresses/getDetail", {
        id: this.id,
      });
    },
    changeTag(key, item) {
      this.cForm[key] = item.value;
    },
    async selectLocation() {
      if (this.cForm.location.name) {
        const { latitude, longitude } = this.cForm.location;

        this.cForm.location = await wx.chooseLocation({
          latitude,
          longitude,
        });
      } else {
        this.cForm.location = await wx.chooseLocation();
      }
    },
    async save() {
      const PHONE_REG = /^1\d{2}\s?\d{4}\s?\d{4}$/;
      const { name, phoneNumber, location } = this.cForm;

      if (!name.trim()) {
        wx.showToast({ title: "请填写收货人" });
        return;
      }

      if (!phoneNumber.trim()) {
        wx.showToast({ title: "请填写手机号" });
        return;
      }

      if (!PHONE_REG.test(phoneNumber)) {
        wx.showToast({ title: "手机号格式错误" });
        return;
      }

      if (!location.name) {
        wx.showToast({ title: "请填写小区" });
        return;
      }

      await this.$store.dispatch(`wx/addresses/${this.id ? "put" : "post"}`, {
        showLoading: true,
        id: this.id,
        body: this.cForm,
      });

      wx.showToast({
        title: this.id ? "修改成功" : "新增成功",
      });

      await this.$helpers.sleep(1500);

      wx.navigateBack();
    },
  },
};
