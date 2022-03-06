import wx from "wx-bridge";
import { reactive } from "@vue/composition-api";
import { useValidators } from "vue-validation";
import { onShow } from "uni-composition-api";
import { useRender } from "@/pages/manage/products/form/composables/use-render";
import { productsApi } from "@/apis/client/products";
import { useRoute } from "vue-mobile/composables/use-route";
import { useHelpers } from "@/composables/use-helpers";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { deepCopy } = useHelpers();

    const { isRequired, validate } = useValidators();

    const { categoriesDetail, renderCategoriesDetail, getDetail } = useRender();

    const initialModel = {
      imageFileIds: [],
    };

    const cForm = reactive({
      model: deepCopy(initialModel),
      rules: {
        name: [isRequired({ label: "商品名称" })],
        imageFileIds: [
          {
            ...isRequired({ message: "请上传商品图片" }),
            type: "array",
          },
        ],
        price: [
          {
            ...isRequired({ label: "商品价格" }),
            type: "number",
          },
        ],
      },
      errors: {},
    });

    onShow(async () => {
      await renderCategoriesDetail();
      cForm.model = await getDetail();
    });

    const submit = async () => {
      await validate(cForm, null, async (errors, { id, ...restModel }) => {
        if (errors) return;

        await productsApi[id ? "put" : "post"]({
          id: id,
          body: {
            ...restModel,
            categoryId: currentRoute.query.categoryId,
          },
        });

        if (id) {
          wx.showToast({ title: "修改成功" });
          wx.navigateBack();
        } else {
          wx.showToast({ title: "新增成功" });
          cForm.model = deepCopy(initialModel);
        }
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
