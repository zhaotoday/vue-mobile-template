export default {
  name: 'c-dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    confirmDisabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '560'
    }
  },
  methods: {
    handleConfirm () {
      if (!this.confirmDisabled) {
        this.$emit('confirm')
      }
    }
  }
}
