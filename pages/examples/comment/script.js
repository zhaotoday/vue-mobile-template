import { Vue, Component } from "vue-property-decorator";

@Component
export default class Comment extends Vue {
  cForm = {
    model: {
      name: "",
      phoneNumber: "",
      content: ""
    }
  };

  async submit() {
    console.log("submit: ", this.cForm.model);
  }
}
