<template>
  <div class="p-categories">
    <scroll-view
      class="b-sidebar bgc6"
      scroll-y>
      <li
        v-for="(item, index) in categoriesTree"
        :key="item.id"
        :class="[ 'b-sidebar__item', 'fs24', { 'is-active': index === cSidebar.index } ]"
        @click="handleClickSidebarItem(index)">
        <p>{{ item.name }}</p>
      </li>
    </scroll-view>
    <scroll-view
      class="b-main bgc1"
      scroll-y>
      <div
        v-if="!!categoriesTree[cSidebar.index].banner"
        class="b-banner-wrap">
        <img
          class="b-banner"
          :src="$helpers.getImageById((categoriesTree[cSidebar.index] || {})['banner'])" />
      </div>
      <ul class="b-categories">
        <li
          class="b-categories__item"
          v-for="item in (categoriesTree[cSidebar.index] || {}).children || []"
          :key="item.id">
          <img
            class="b-categories__image"
            :src="$helpers.getImageById(item.icon)" />
          <p class="b-categories__name c10 fs24">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import categoriesMixin from '@/mixins/categories'

export default {
  mixins: [categoriesMixin],
  data () {
    return {
      cSidebar: { index: 0 }
    }
  },
  computed: mapState({
    id: state => state['public/categories'].id
  }),
  onLoad () {
    this.getCategoriesList()
  },
  async onShow () {
    this.cSidebar.index = this.id
      ? this.categoriesTree.findIndex(item => item.id === this.id)
      : 0
    this.$store.dispatch('public/categories/setId', { id: 0 })
  },
  methods: {
    handleClickSidebarItem (index) {
      this.cSidebar.index = index
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
