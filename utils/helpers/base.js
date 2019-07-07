import consts from '../consts'
import helpers from 'jt-helpers'

export default {
  ...helpers,
  getImageById (id) {
    return `${consts.API_URL}/public/files/${id}`
  },
  getImageURL ({ id, width, height }) {
    let sizeParams = ''

    if (width && height) {
      sizeParams = `?imageView2/1/w/${width}/h/${height}/q/100`
    } else if (width) {
      sizeParams = `?imageView2/2/w/${width}/q/100`
    } else if (height) {
      sizeParams = `?imageView2/2/h/${height}/q/100`
    }

    return `${consts.CDN_URL}/${id}${sizeParams}`
  },
  getItem (items, key, val) {
    return items && items.length
      ? (items.find(item => item[key] === val) || {})
      : {}
  }
}
