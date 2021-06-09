import { reactive } from "@vue/composition-api";

export default {
  setup() {
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
      cForm,
      submit,
    };
  },
};
