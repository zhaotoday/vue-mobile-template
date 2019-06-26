import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    categoriesTree: 'public/categories/tree'
  }),
  methods: {
    getCategoriesList () {
      return this.$store.dispatch('public/categories/getList', {
        query: {
          offset: 0,
          limit: 1000,
          alias: 'products'
        }
      })
    }
  }
}
