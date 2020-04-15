import { Component, Vue } from "vue-property-decorator";
import AsyncValidator from "async-validator";

@Component
export default class extends Vue {
  cForm = {
    model: {},
    rules: {
      phoneNumber: [
        {
          required: true,
          message: "请填写手机号"
        },
        {
          pattern: /^1\d{2}\s?\d{4}\s?\d{4}$/,
          message: "手机号格式错误"
        }
      ],
      captcha: [
        {
          required: true,
          message: "请填写验证码"
        },
        {
          len: 6,
          message: "验证码格式错误"
        }
      ]
    }
  };

  cCaptcha = {
    disabled: false,
    message: "获取验证码"
  };

  onLoad() {
    this.$wx.setNavigationBarTitle({
      title: this.$mp.query.update ? "更换手机号" : "绑定手机号"
    });
  }

  async sendCaptcha() {
    if (this.cCaptcha.disabled) return;

    const rules = {
      phoneNumber: this.cForm.rules.phoneNumber
    };
    const { model } = this.cForm;

    new AsyncValidator(rules).validate(model, async errors => {
      if (errors) {
        this.$wx.showToast({ title: errors[0].message });
        return;
      }

      await this.$store.dispatch("wx/wxUsers/postAction", {
        action: "sendCaptcha",
        body: {
          phoneNumber: model.phoneNumber
        }
      });

      this.$wx.showToast({ title: "验证码获取成功" });

      let i = 0;
      let leftSeconds = 120;

      this.cCaptcha.disabled = true;
      this.cCaptcha.message = `${leftSeconds}s 后获取`;

      this.timer = setInterval(() => {
        this.cCaptcha.message = `${leftSeconds - ++i}s 后获取`;

        if (leftSeconds === i) {
          clearInterval(this.timer);

          this.cCaptcha.disabled = false;
          this.cCaptcha.message = "获取验证码";
        }
      }, 1000);
    });
  }

  async submit() {
    const { rules, model } = this.cForm;
    const { phoneNumber, captcha } = model;

    new AsyncValidator(rules).validate(model, async errors => {
      if (errors) {
        this.$wx.showToast({ title: errors[0].message });
        return;
      }

      await this.$store.dispatch("wx/wxUsers/postAction", {
        showLoading: true,
        action: "bindPhoneNumber",
        body: {
          phoneNumber,
          captcha
        }
      });

      this.$auth.set({ phoneNumber });
      this.$wx.showToast({ title: "绑定成功" });

      await this.$helpers.sleep(1500);

      this.$wx.navigateBack();
    });
  }
}
