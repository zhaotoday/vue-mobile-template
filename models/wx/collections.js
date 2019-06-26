import REST from '@/utils/rest'
import consts from '@/utils/consts'
import restHelpers from '@/utils/helpers/rest-helpers'

export default class extends REST {
  constructor () {
    super()

    this.baseURL = consts.API_URL
    this.headers = restHelpers.getHeaders()
    this.path = 'wx/collections'
  }
}
