import { reactive } from "vue";
import { useBem } from "@/composables/use-bem";

export default {
  setup() {
    const bem = useBem();

    const cForm = reactive({
      model: {
        name: "",
        phoneNumber: "",
        content: "",
      },
    });

    const submit = async () => {
      console.log("submit: ", cForm.model);
    };

    return {
      bem,
      cForm,
      submit,
    };
  },
};
