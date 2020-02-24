<script>
export default {
  onLaunch() {
    this.setOpenId();
    this.refreshWxUserInfo();
    this.updateDicts();
  }
};
</script>

<style lang="scss" src="./assets/styles/global/index.scss"></style>
