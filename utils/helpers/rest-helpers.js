import auth from 'we-design/utils/auth'

export default {
  getHeaders () {
    return {
      Authorization: auth.get()['token']
    }
  }
}
