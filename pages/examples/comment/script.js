import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class CommentPage extends Vue {
  cForm = {
    name: "",
    phoneNumber: "",
    content: ""
  };

  async submit() {
    console.log("submit: ", this.cForm);
  }
}
