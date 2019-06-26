import consts from '../consts'
import helpers from 'jt-helpers'

export default {
  ...helpers,
  getImageById (id) {
    return `${consts.API_URL}/public/files/${id}`
  },
  getItem (items, key, val) {
    return items && items.length
      ? (items.find(item => item[key] === val) || {})
      : {}
  }
}
