import { mapState } from 'vuex'
import CDialog from '@/components/dialog'
import CEmpty from '@/components/empty'

export default {
  components: { CDialog, CEmpty },
  data () {
    return {
      cDel: {
        visible: false,
        id: 0
      }
    }
  },
  computed: mapState({
    list: state => state['wx/addresses'].list
  }),
  async onShow () {
    this.$wx.setNavigationBarTitle({
      title: this.$mp.query.select ? '选择收货地址' : '收货地址'
    })

    await this.getList()

    this.loaded = true
  },
  methods: {
    getList () {
      return this.$store.dispatch('wx/addresses/getList', {
        query: {
          where: {
            wxUserId: {
              $eq: this.$auth.get()['user'].id
            }
          }
        }
      })
    },
    async setDefault (item) {
      await this.$store.dispatch('wx/addresses/postAction', {
        showLoading: true,
        body: {
          type: 'SET_DEFAULT',
          id: item.id
        }
      })

      this.$wx.showToast({
        title: '设置成功'
      })

      this.getList()
    },
    showDel (item) {
      this.cDel.id = item.id
      this.cDel.visible = true
    },
    async confirmDel () {
      this.cDel.visible = false

      await this.$store.dispatch('wx/addresses/del', {
        id: this.cDel.id
      })

      this.$wx.showToast({
        title: '删除成功'
      })

      this.getList()
    },
    select (item) {
      if (this.$mp.query.select) {
        this.$store.dispatch('wx/orders/setForm', {
          key: 'address',
          value: item
        })
        this.$wx.navigateBack()
      }
    }
  }
}
