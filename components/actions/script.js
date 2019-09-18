export default {
  name: 'c-actions',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    items: {
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
