<script>
export default {
  async onLaunch() {
    await this.updateDicts();

    if (this.$auth.loggedIn()) {
      await this.$store.dispatch("wx/wxUsers/set", {
        key: "wxUser",
        value: await this.getWxUserInfo()
      });
    }
  }
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
