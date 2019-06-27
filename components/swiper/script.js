export default {
  name: 'c-swiper',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleChange (e) {
      this.current = e.mp.detail.current
    }
  }
}
