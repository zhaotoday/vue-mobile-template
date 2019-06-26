import wxb from 'wx-bridge'
import consts from './consts'
import helpers from './helpers/base'
import auth from './auth'

const navigateInterceptor = {
  async beforeCall (options) {
    if (options.requiresLogin && !auth.loggedIn()) {
      options.url = consts.LOGIN_PAGE
    }

    if (options.requiresBind && !auth.phoneNumberBound()) {
      options.url = consts.BIND_PAGE
    }
  }
}

wxb.navigateTo = helpers.intercept(wxb.navigateTo, navigateInterceptor)

wxb.switchTab = helpers.intercept(wxb.switchTab, navigateInterceptor)

wxb.redirectTo = helpers.intercept(wxb.redirectTo, navigateInterceptor)

wxb.reLaunch = helpers.intercept(wxb.reLaunch, navigateInterceptor)

wxb.showToast = helpers.intercept(wxb.showToast, {
  req (options) {
    return !options.icon
      ? { ...options, icon: 'none' }
      : options
  }
})

export default wxb
