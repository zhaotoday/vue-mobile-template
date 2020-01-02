import store from '@/store'
import consts from '@/utils/consts'
import helpers from '@/utils/helpers/base'
import time from 'jt-time'
import auth from 'we-design/utils/auth'
import wxb from 'we-design/utils/wxb'
import globalMixin from '@/mixins/global'

export default {
  install (Vue) {
    Vue.prototype.$store = store
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$time = time
    Vue.prototype.$auth = auth
    Vue.prototype.$wx = wxb

    Vue.mixin(globalMixin)
  }
}
