import REST from 'we-design/utils/rest'
import consts from '@/utils/consts'

export default class extends REST {
  constructor () {
    super()

    this.baseURL = consts.API_URL
    this.path = 'public/wxUsers'
  }
}
