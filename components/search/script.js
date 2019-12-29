export default {
  name: 'c-search',
  props: {
    autoFocus: {
      type: Boolean,
      default: false
    },
    showSubmit: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    defaultValue () {
      this.value = this.defaultValue
    }
  },
  methods: {
    navigateToLink () {
      if (this.link) {
        this.$wx.navigateTo({ url: this.link })
      }
    },
    confirm () {
      this.$emit('confirm', this.value)
    },
    getValue () {
      return this.value
    }
  }
}
