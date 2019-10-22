import cities from './cities'

export default {
  data () {
    return {
      cities,
      letters: [],
      cScroll: {
        intoView: ''
      }
    }
  },
  created () {
    this.letters = this.cities.cityGroups.map(item => item.initial)
  },
  methods: {
    scrollIntoView (item) {
      this.cScroll.intoView = item
    }
  }
}
