import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
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
