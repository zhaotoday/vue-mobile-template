import { useRoute } from "vue-mobile/composables/use-route";
import { useValidators } from "vue-validation";
import { reactive } from "@vue/composition-api";
import { enums } from "@/utils/enums";

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
  async onLoad() {
    this.id = this.$mp.query.id;

    if (this.id) {
      this.$wx.setNavigationBarTitle({
        title: "修改收货地址",
      });

      this.cForm = await this.getDetail();
    } else {
      this.$wx.setNavigationBarTitle({
        title: "新增收货地址",
      });
    }
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

        this.cForm.location = await this.$wx.chooseLocation({
          latitude,
          longitude,
        });
      } else {
        this.cForm.location = await this.$wx.chooseLocation();
      }
    },
    async save() {
      const PHONE_REG = /^1\d{2}\s?\d{4}\s?\d{4}$/;
      const { name, phoneNumber, location } = this.cForm;

      if (!name.trim()) {
        this.$wx.showToast({ title: "请填写收货人" });
        return;
      }

      if (!phoneNumber.trim()) {
        this.$wx.showToast({ title: "请填写手机号" });
        return;
      }

      if (!PHONE_REG.test(phoneNumber)) {
        this.$wx.showToast({ title: "手机号格式错误" });
        return;
      }

      if (!location.name) {
        this.$wx.showToast({ title: "请填写小区" });
        return;
      }

      await this.$store.dispatch(`wx/addresses/${this.id ? "put" : "post"}`, {
        showLoading: true,
        id: this.id,
        body: this.cForm,
      });

      this.$wx.showToast({
        title: this.id ? "修改成功" : "新增成功",
      });

      await this.$helpers.sleep(1500);

      this.$wx.navigateBack();
    },
  },
};
