import Vue from "vue";
import { Component } from "vue-property-decorator";
import AsyncValidator from "async-validator";

@Component
export default class MyInfoPage extends Vue {
  hasBirthday = false;

  cForm = {
    model: {},
    rules: {
      name: [
        {
          required: true,
          message: "请填写姓名"
        }
      ],
      phoneNumber: [
        {
          required: true,
          message: "请绑定手机号"
        }
      ],
      birthday: [
        {
          required: true,
          message: "请选择生日"
        }
      ]
    }
  };

  async onLoad() {
    this.cForm.model = await this.getDetail();
    this.hasBirthday = !!this.cForm.birthday;
  }

  async onShow() {
    const { phoneNumber } = await this.getDetail();
    this.cForm.model.phoneNumber = phoneNumber;
  }

  async getDetail() {
    return this.$store.dispatch("wx/wxUsers/getDetail", {
      id: this.user.id
    });
  }

  handleBirthdayChange(e) {
    this.cForm.model.birthday = e.detail.value;
  }

  handleGenderChange(e) {
    const pickerIndex = +e.detail.value;
    this.cForm.model.gender = this.$consts.GENDERS[pickerIndex].value;
  }

  async save() {
    const { model, rules } = this.cForm;

    new AsyncValidator(rules).validate(model, async errors => {
      if (errors) {
        this.$wx.showToast({ title: errors[0].message });
        return;
      }

      await this.$store.dispatch("wx/wxUsers/put", {
        id: this.user.id,
        body: model
      });

      this.$auth.set({ name: model.name });

      this.$wx.showToast({ title: "保存成功" });

      await this.$helpers.sleep(1500);

      this.$wx.navigateBack();
    });
  }
}
