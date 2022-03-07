import { onShow } from "uni-composition-api";
import { useRender } from "./composables/use-render";
import { useForm } from "./composables/use-form";
import { useRoute } from "vue-mobile/composables/use-route";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { categoriesDetail, renderCategoriesDetail, getDetail } = useRender();

    const { cForm, validate, submit } = useForm();

    onShow(async () => {
      await wx.setNavigationBarTitle({
        title: currentRoute.query.id ? "修改商品" : "新增商品",
      });

      await renderCategoriesDetail();
      cForm.model = await getDetail();
    });

    return {
      cForm,
      categoriesDetail,
      validate,
      submit,
    };
  },
};
