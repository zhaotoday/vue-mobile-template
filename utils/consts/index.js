import ORDER_STATUSES from './order-statuses'
import PRODUCT_UNITS from './product-units'
import PAY_WAYS from './pay-ways'

// 接口地址
// const API_URL = 'http://localhost:3005/api/v1'
const API_URL = 'https://api.fjnm.cn/api/v1'

// 首页
const INDEX_PAGE = '/pages/tab-bar/index/index'

// 登录页
const LOGIN_PAGE = '/pages/login/index'

// 绑定手机页面
const BIND_PAGE = '/pages/bind/index'

export default {
  API_URL,
  INDEX_PAGE,
  LOGIN_PAGE,
  BIND_PAGE,
  ORDER_STATUSES,
  PRODUCT_UNITS,
  PAY_WAYS
}
