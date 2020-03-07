import { Vue, Component } from "vue-property-decorator";

@Component
export default class CommentPage extends Vue {
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
