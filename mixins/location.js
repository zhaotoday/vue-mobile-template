export default {
  data () {
    return {
      cLocation: {
        longitude: 119.28,
        latitude: 26.08
      }
    }
  },
  methods: {
    async getLocation () {
      return new Promise(async resolve => {
        try {
          const { longitude, latitude } = await this.$wx.getLocation({ type: 'gcj02' })
          resolve({ longitude, latitude })
        } catch (e) {
          if (!this.$wx.getStorageSync('locationTip')) {
            const { confirm } = await this.$wx.showModal({
              title: '提示',
              content: '需要获取您的位置信息，请到小程序的设置打开授权',
              cancelColor: '#999999',
              confirmColor: '#0070F5'
            })

            this.$wx.setStorageSync('locationTip', 1)
            confirm && await this.$wx.openSetting()
          }

          resolve(this.cLocation)
        }
      })
    },
    getDistance ({ fromLocation, toLocation }) {
      return this.$helpers.getDistance(
        +fromLocation.latitude,
        +fromLocation.longitude,
        +toLocation.latitude,
        +toLocation.longitude
      )
    },
    addDistance (items) {
      return items
        .map(item => ({
          ...item,
          distance: item.latitude
            ? this.getDistance({
              fromLocation: {
                latitude: item.latitude,
                longitude: item.longitude
              },
              toLocation: this.cLocation
            })
            : this.$consts.MAX_DISTANCE
        }))
        .sort((a, b) => a.distance - b.distance)
    }
  }
}
