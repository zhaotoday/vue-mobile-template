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
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索位置查找附近茶室'
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
    handleConfirm () {
      this.$emit('confirm', this.value)
    },
    getValue () {
      return this.value
    }
  }
}
