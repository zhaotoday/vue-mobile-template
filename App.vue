<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  onLaunch() {
    this.setOpenId();
    this.refreshWxUserInfo();
    this.updateDicts();
  }
}
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
