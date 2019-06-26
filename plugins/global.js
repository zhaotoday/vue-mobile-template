import store from '@/store'
import consts from '@/utils/consts'
import helpers from '@/utils/helpers/base'
import time from 'jt-time'
import auth from '@/utils/auth'
import wxb from '@/utils/wxb'
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
