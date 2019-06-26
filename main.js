import Vue from 'vue'
import App from '@/App'
import globalPlugin from '@/plugins/global'
import '@/utils/init'

Vue.config.productionTip = false

Vue.use(globalPlugin)

const app = new Vue({
  mpType: 'app',
  ...App
})

app.$mount()
