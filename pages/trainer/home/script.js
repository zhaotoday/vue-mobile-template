import CFilter from '@/components/filter'
import CActions from '@/components/actions'
import CDialog from '@/components/dialog'
import CEmpty from '@/components/empty'

export default {
  components: { CFilter, CActions, CDialog, CEmpty },
  data () {
    return {
      cProducts: {
        range: [],
        array: [],
        value: 0
      },
      studentsList: {
        items: []
      },
      cActions: {
        visible: false,
        item: {},
        options: [
          {
            value: 'comment',
            label: '点评'
          },
          {
            value: 'score',
            label: '录入成绩'
          }
        ]
      },
      cScore: {
        visible: false,
        form: {
          value: ''
        }
      }
    }
  },
  async onShow () {
    const productsList = await this.getProductsList()
    console.log(productsList, 33)
    this.cProducts.range = productsList.items.map(item => item.name)
    this.cProducts.array = productsList.items.map(item => ({ id: item.id, name: item.name }))
    if (this.cProducts.array[0]) {
      this.productId = this.cProducts.array[0].id
      this.studentsList = await this.getStudentsList()
    }
    this.loaded = true
  },
  methods: {
    getProductsList () {
      return this.$store.dispatch('wx/products/getList', {
        query: {
          where: {
            trainerId: { $eq: this.$auth.get()['user'].id }
          }
        }
      })
    },
    getStudentsList () {
      return this.$store.dispatch('wx/studentProducts/getList', {
        query: {
          where: {
            productId: { $eq: this.productId }
          }
        }
      })
    },
    showActions (item) {
      this.cActions.visible = true
      this.cActions.item = item
    },
    async saveScore () {
      this.cScore.visible = false
      await this.$store.dispatch('wx/studentProducts/put', {
        id: this.cActions.item.id,
        body: {
          score: this.cScore.form.value
        }
      })
      this.studentsList = await this.getStudentsList()
      this.$wx.showToast({
        title: '录入成功'
      })
    },
    async selectAction (item) {
      this.cActions.visible = false

      switch (item.value) {
        case 'comment':
          this.$wx.navigateTo({
            url: `/pages/trainer/comments/list/index?studentProductId=${this.cActions.item.id}`
          })
          break
        case 'score':
          this.cScore.form.value = this.cActions.item.score
          this.cScore.visible = true
          break
        default:
          break
      }
    },
    async handleProductChange (e) {
      this.cProducts.value = +e.detail.value
      this.productId = this.cProducts.array[this.cProducts.value].id
      this.studentsList = await this.getStudentsList()
    }
  }
}
