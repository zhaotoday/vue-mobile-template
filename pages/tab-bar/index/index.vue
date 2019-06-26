<template>
  <div class="p-index u-pb20">
    <c-search></c-search>
    <c-swiper :items="adsImages"></c-swiper>
    <ul class="b-categories bgc1 u-mb20">
      <li
        v-for="item in categoriesTree"
        :key="item.id"
        class="b-categories__item fs22 u-tac"
        @click="handleGoCategories(item.id)">
        <img
          class="b-categories__image"
          :src="$helpers.getImageById(item.icon)" />
        <div class="b-categories__name">{{ item.name }}</div>
      </li>
    </ul>
    <div class="c-card bgc1">
      <div class="c-card__head green has-border fs32">
        热销产品
      </div>
      <div class="c-card__body">
        <ul class="c-products">
          <li
            v-for="item in productsList.items"
            :key="item.id"
            class="c-products__item">
            <img
              class="c-products__image"
              :src="$helpers.getImageById(item.pictures)" />
            <div class="c-products__info">
              <div class="c-products__name fs32">{{ item.name }}</div>
              <div class="c-products__price c5 fs30">
                <span class="fs20">￥</span>
                <template v-if="!!item.price">
                  {{ item.price }} {{item.unit ? `元/${$helpers.getItem($consts.PRODUCT_UNITS, 'value',
                  item.unit)['label']}` : '' }}
                </template>
                <template v-else>
                  {{ getPriceRange(item) }}
                </template>
              </div>
            </div>
            <template v-if="!!item.price">
              <template v-if="!item.number">
                <div
                  class="c-products__cart c-icon c-icon--add-bg"
                  @click="handleAddNumber(item)">
                </div>
              </template>
              <template v-else>
                <c-number-input
                  :key="item.id"
                  :number="item.number"
                  @add="handleAddNumber(item)"
                  @subtract="handleSubtractNumber(item)">
                </c-number-input>
              </template>
            </template>
            <template v-else>
              <div
                v-show="!item.visible"
                :class="[ 'c-products__cart', 'c-icon', `c-icon--${item.price ? 'add-bg' : 'arrow-down'}` ]"
                @click="handleToggleSpecification(item)">
              </div>
              <div
                v-show="item.visible"
                class="c-products__cart c-icon c-icon--arrow-up"
                @click="handleToggleSpecification(item)">
              </div>
            </template>
            <div
              v-show="item.visible"
              v-for="specification in item.specifications"
              :key="specification.value"
              class="c-products__specification">
              <p class="c-products__price c5 fs30">
                <span class="fs20">￥</span>
                {{ getUnitPrice(specification, item.unit) }}
              </p>
              <p class="c-products__tag fs20">
                {{ specification.price }} 元 / {{ specification.label }}
              </p>
              <template v-if="!specification.number">
                <div
                  class="c-products__cart c-icon c-icon--add-bg"
                  @click="handleAddNumber(item, specification)">
                </div>
              </template>
              <template v-else>
                <c-number-input
                  :key="specification.value"
                  :number="specification.number"
                  @add="handleAddNumber(item, specification)"
                  @subtract="handleSubtractNumber(item, specification)">
                </c-number-input>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CSwiper from '@/components/swiper'
import CSearch from '@/components/search'
import categoriesMixin from '@/mixins/categories'
import productsMixin from '@/mixins/products'
import CNumberInput from '@/components/number-input/index'

export default {
  components: { CNumberInput, CSwiper, CSearch },
  mixins: [categoriesMixin, productsMixin],
  data () {
    return {
      productsList: {
        items: [],
        total: 0
      }
    }
  },
  computed: {
    ...mapState({
      adsList: state => state['public/ads'].list
    }),
    adsImages () {
      return this.adsList.items.map(item => this.$helpers.getImageById(item.picture))
    }
  },
  async onShow () {
    await this.getAdsList()
    await this.getCategoriesList()

    if (this.$auth.loggedIn()) {
      this.cart = await this.getCart()
    }

    this.productsList = await this.getProductsList()
  },
  methods: {
    getAdsList () {
      return this.$store.dispatch('public/ads/getList', {
        query: {}
      })
    },
    async getProductsList () {
      const { items, total } = await this.$store.dispatch('public/products/getList', {
        query: {}
      })

      return {
        items: items.map(item => {
          const cartProduct = this.cart.find(product => product.id === item.id)

          return {
            ...item,
            visible: cartProduct
              ? !!(cartProduct.specifications.find(cartSpecification => !!cartSpecification.number))
              : false,
            number: cartProduct ? cartProduct.number : 0,
            specifications: item.specifications
              ? item.specifications.map(specification => {
                const cartSpecification = cartProduct
                  ? cartProduct.specifications.find(cartSpecification => cartSpecification.value === specification.value)
                  : null

                return {
                  ...specification,
                  number: cartSpecification ? cartSpecification.number : 0
                }
              })
              : []
          }
        }) || [],
        total
      }
    },
    handleGoCategories (id) {
      this.$store.dispatch('public/categories/setId', { id })
      this.$wx.switchTab({ url: '/pages/tab-bar/categories/index' })
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>
