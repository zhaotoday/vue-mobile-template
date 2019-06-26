import REST from 'jt-rest'
import consts from './consts'
import restHelpers from './helpers/rest-helpers'
import wxb from './wxb'
import auth from './auth'

export default class extends REST {
  /**
   * 重写父类 request 方法，按业务场景定制功能
   * @override
   */
  request (method = 'GET', { id, query = {}, body = {}, showLoading = false, showError = true }) {
    if (auth.loggedIn()) {
      const userId = auth.get()['user']['id']

      query.wxUserId = userId
      body.wxUserId = userId
    }

    // 转 query.where 对象为字符串
    if (query.where) {
      query.where = restHelpers.whereToStr(query.where)
    }

    // 清楚缓存
    if (method === 'GET') {
      query._ = new Date().getTime()
    }

    showLoading && wxb.showLoading()

    return new Promise(resolve => {
      super.request(method, { id, query, body })
        .then(res => {
          showLoading && wxb.hideLoading()

          // 在这里可对 res 进行包装
          resolve(res.data)
        })
        .catch(res => {
          showLoading && wxb.hideLoading()

          if (res.statusCode === 500) {
            showError && wxb.showToast({ title: '服务器出错' })
          } else if (res.data.error.code === 'AUTHORIZATION/UNAUTHORIZED') {
            wxb.navigateTo({ url: consts.LOGIN_PAGE })
          } else {
            showError && wxb.showToast({ title: res.data.error.message })
          }
        })
    })
  }
}
