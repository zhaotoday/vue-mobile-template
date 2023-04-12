import { reactive } from "@vue/composition-api";
import { useHelpers } from "@/composables/use-helpers";
import { useValidators } from "vue-validation";
import { productsApi } from "@/apis/client/products";
import { useRoute } from "vue-mobile/composables/use-route";

export const useForm = () => {
  const { currentRoute } = useRoute();

  const { deepCopy } = useHelpers();

  const { isRequired, validate } = useValidators();

  const initialModel = {
    imageFileIds: [],
  };

  const cForm = reactive({
    model: deepCopy(initialModel),
    rules: {
      name: [isRequired({ label: "商品英文名称" })],
      cnName: [isRequired({ label: "商品中文名称" })],
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
        await uni.showToast({ title: "修改成功" });
        await useHelpers().sleep(1500);
        await uni.navigateBack();
      } else {
        await uni.showToast({ title: "新增成功" });
        cForm.model = deepCopy(initialModel);
      }
    });
  };

  return {
    cForm,
    validate,
    submit,
  };
};
