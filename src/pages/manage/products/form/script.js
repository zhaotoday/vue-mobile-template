import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { onShow } from "uni-composition-api";
import { useRender } from "@/pages/manage/products/form/composables/use-render";
import { productsApi } from "@/apis/client/products";

export default {
  setup() {
    const { isRequired, validate } = useValidators();

    const { categoriesDetail, renderCategoriesDetail } = useRender();

    const cForm = reactive({
      model: {
        imageFileIds: [43],
      },
      rules: {
        name: [isRequired({ label: "商品名称" })],
        imageFileIds: [isRequired({ message: "请上传商品图片" })],
        price: [isRequired({ label: "商品价格" })],
      },
      errors: {},
    });

    onShow(async () => {
      await renderCategoriesDetail();
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, model) => {
        if (errors) return;

        await productsApi.post({ body: model });

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
