export default {
  name: 'c-filter',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    range: {
      type: Array,
      default: () => []
    },
    array: {
      type: Array,
      default: () => []
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleChange (e) {
      this.$emit('change', e)
    }
  }
}
