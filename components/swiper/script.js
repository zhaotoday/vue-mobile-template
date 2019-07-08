export default {
  name: 'c-swiper',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    height: {
      type: Number,
      default: 300
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
