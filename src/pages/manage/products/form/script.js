import { onShow } from "uni-composition-api";
import { useRender } from "./composables/use-render";
import { useForm } from "./composables/use-form";

export default {
  setup() {
    const { categoriesDetail, renderCategoriesDetail, getDetail } = useRender();

    const { cForm, validate, submit } = useForm();

    onShow(async () => {
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
