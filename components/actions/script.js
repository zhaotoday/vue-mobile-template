export default {
  name: 'c-actions',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    select (item) {
      this.$emit('select', item)
    }
  }
}
