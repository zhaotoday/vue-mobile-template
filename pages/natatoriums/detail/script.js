export default {
  data () {
    return {
      cTabs: {
        tabs: ['课程', '教练员', '学员风采', '动态'],
        current: 0
      },
      productsList: {
        items: [],
        total: 0
      },
      trainersList: {
        items: [],
        total: 0
      },
      studentsList: {
        items: [],
        total: 0
      },
      newsList: {
        items: [],
        total: 0
      }
    }
  },
  async onShow () {
    this.$wx.setNavigationBarTitle({
      title: this.$mp.query.title
    })
    this.id = this.$mp.query.id
    this.productsList = await this.getProductsList()
    this.trainersList = await this.getTrainersList()
    this.studentsList = await this.getStudentsList()
    this.newsList = await this.getNewsList()
  },
  methods: {
    changeTab (index) {
      this.cTabs.current = index
    },
    getProductsList () {
      return this.$store.dispatch('public/products/getList', {
        query: {
          where: {
            natatoriumId: { $eq: this.id }
          }
        }
      })
    },
    async getTrainersList () {
      const { trainerIds } = await this.$store.dispatch('public/natatoriums/getDetail', {
        id: this.id
      })

      return this.$store.dispatch('public/trainers/getList', {
        query: {
          where: {
            id: { $in: trainerIds }
          }
        }
      })
    },
    getStudentsList () {
      return this.$store.dispatch('public/students/getList', {
        query: {
          where: {
            natatoriumId: { $eq: this.id }
          }
        }
      })
    },
    getNewsList () {
      return this.$store.dispatch('public/articles/getList', {
        query: {
          where: {
            natatoriumId: { $eq: this.id }
          }
        }
      })
    }
  }
}
