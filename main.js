import Vue from 'vue'
import App from '@/App'
import globalPlugin from '@/plugins/global'
import CCheckbox from 'we-design/components/checkbox'
import CDialog from 'we-design/components/dialog'
import CEmpty from 'we-design/components/empty'
import CFilter from 'we-design/components/filter'
import CIndex from 'we-design/components/index'
import CLogo from 'we-design/components/logo'
import CPopup from 'we-design/components/popup'
import CSearch from 'we-design/components/search'
import CPoster from 'we-design/components/poster'
import CShareOptions from 'we-design/components/share-options'
import CShare from 'we-design/components/share'
import CSwiper from 'we-design/components/swiper'

Vue.config.productionTip = false

Vue.use(globalPlugin)

Vue.component('c-checkbox', CCheckbox)
Vue.component('c-dialog', CDialog)
Vue.component('c-empty', CEmpty)
Vue.component('c-filter', CFilter)
Vue.component('c-index', CIndex)
Vue.component('c-logo', CLogo)
Vue.component('c-popup', CPopup)
Vue.component('c-search', CSearch)
Vue.component('c-poster', CPoster)
Vue.component('c-share-options', CShareOptions)
Vue.component('c-share', CShare)
Vue.component('c-swiper', CSwiper)

const app = new Vue({
  mpType: 'app',
  ...App
})

app.$mount()
