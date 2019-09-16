import CSwiper from '@/components/swiper'

export default {
  components: { CSwiper },
  data () {
    return {
      banners: [
        'https://yongli-api.liruan.cn/static/pages/home/banner.jpg'
      ],
      newsList: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    this.newsList = await this.getNewsList()
  },
  methods: {
    getNewsList () {
      return this.$store.dispatch('public/articles/getList', {
        query: {
          where: {
            alias: { $eq: 'club-news' }
          }
        }
      })
    }
  }
}
