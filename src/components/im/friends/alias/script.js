import { reactive } from "@vue/composition-api";
import { useFormValidators } from "vue-validation";
import wx from "wx-bridge";
import { ChatFriendsApi } from "@/apis/wx/chat-friends";

export default {
  emits: ["ok"],
  setup(props, context) {
    const { isRequired, validate } = useFormValidators();

    const cDialog = reactive({
      visible: false,
    });

    const cForm = reactive({
      model: {},
      rules: {
        alias: [isRequired({ label: "备注" })],
      },
      errors: {
        alias: "",
      },
    });

    const show = ({ friendUserId, alias, index } = {}) => {
      cForm.model = { friendUserId, alias, index };
      cDialog.visible = true;
    };

    const confirm = async () => {
      await validate(cForm, null, async (errors, model) => {
        if (errors) {
          wx.showToast({ title: errors[0].message });
          return;
        }

        await new ChatFriendsApi().post({
          action: "update",
          body: model,
        });

        cDialog.visible = false;
        wx.showToast({ title: "修改成功" });
        context.emit("ok", cForm.model);
      });
    };

    return {
      cDialog,
      cForm,
      show,
      confirm,
    };
  },
};
