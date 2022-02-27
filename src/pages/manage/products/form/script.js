import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { onShow } from "uni-composition-api";
import { useRender } from "@/pages/manage/products/form/composables/use-render";

export default {
  setup() {
    const { isRequired, validate } = useValidators();

    const { categoriesDetail, renderCategoriesDetail } = useRender();

    const cForm = reactive({
      model: {},
      rules: {
        name: [isRequired({ label: "商品名称" })],
        imageFileIds: [isRequired({ label: "商品图片" })],
      },
      errors: {},
    });

    onShow(async () => {
      await renderCategoriesDetail();
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, { account, password }) => {
        if (errors) return;

        await accountLogin({ account, password });

        wx.showToast({ title: "新增成功" });
      });
    };

    return {
      cForm,
      categoriesDetail,
      validate,
      submit,
    };
  },
};
