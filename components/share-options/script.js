export default {
  name: 'c-share-options',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  onShareAppMessage () {
    return {
      title: this.$consts.NAME,
      imageUrl: '',
      path: `pages/home/index?shareOpenId=${this.$auth.getOpenId()}`
    }
  }
}
