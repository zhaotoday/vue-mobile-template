import wx from "wx-bridge";
import { useRoute } from "vue-mobile/composables/use-route";
import { useValidators } from "vue-validation";
import { reactive } from "@vue/composition-api";
import { onLoad } from "uni-composition-api";
import { addressesApi } from "@/apis/client/addresses";
import { useHelpers } from "@/composables/use-helpers";
import { useEnums } from "vue-mobile/@lr/composables/use-enums";
import { useUsers } from "vue-mobile/@lr/composables/use-users";
import { useI18n } from "@/composables/use-i18n";

export default {
  setup() {
    const { t } = useI18n({ page: "user/addresses/form" });

    const { currentRoute } = useRoute();

    const { enums } = useEnums();

    const { user } = useUsers();

    const { isRequired, isPhoneNumber, validate } = useValidators();

    const cForm = reactive({
      model: {
        gender: 1,
        location: {
          name: "",
          address: "",
          latitude: "",
          longitude: "",
        },
        tag: "Home",
      },
      rules: {
        name: [
          isRequired({
            message: t("$p.user.$p.addresses.inputs.consignee"),
          }),
        ],
        phoneNumber: [
          isRequired({
            message: t("$p.user.$p.addresses.inputs.phoneNumber"),
          }),
          isPhoneNumber(),
        ],
      },
      errors: {},
    });

    onLoad(async () => {
      const { id } = currentRoute.query;

      if (id) {
        wx.setNavigationBarTitle({ title: "修改收货地址" });

        cForm.model = await addressesApi.get({ id });
      } else {
        wx.setNavigationBarTitle({ title: "新增收货地址" });
      }
    });

    const changeTag = (key, item) => {
      cForm.model[key] = item.value;
    };

    const selectLocation = async () => {
      if (cForm.model.location.name) {
        const { latitude, longitude } = cForm.model.location;

        cForm.model.location = await wx.chooseLocation({
          latitude,
          longitude,
        });
      } else {
        cForm.model.location = await wx.chooseLocation();
      }
    };

    const submit = async () => {
      const { id } = currentRoute.query;

      await validate(cForm, null, async (errors, model) => {
        if (errors) return;

        await addressesApi[id ? "put" : "post"]({
          id,
          body: { ...model, userId: user.value.id },
        });

        wx.showToast({ title: id ? "修改成功" : "新增成功" });
        await useHelpers().sleep(1500);
        wx.navigateBack();
      });
    };

    return {
      enums,
      currentRoute,
      cForm,
      changeTag,
      selectLocation,
      validate,
      submit,
    };
  },
};
