import wxb from './wxb'

const OPEN_ID = 'openId'
const USER = 'user'
const TOKEN = 'token'

export default {
  get () {
    return {
      [OPEN_ID]: wxb.getStorageSync(OPEN_ID),
      [USER]: wxb.getStorageSync(USER),
      [TOKEN]: wxb.getStorageSync(TOKEN)
    }
  },
  login ({ user, token }) {
    wxb.setStorageSync(USER, user)
    wxb.setStorageSync(TOKEN, `Bearer ${token}`)
  },
  set (data) {
    const user = this.get()[USER]
    wxb.setStorageSync(USER, { ...user, ...data })
  },
  setOpenId (value) {
    wxb.setStorageSync(OPEN_ID, value)
  },
  getOpenId () {
    return wxb.getStorageSync(OPEN_ID)
  },
  setName ({ name }) {
    const user = this.get()[USER]
    wxb.setStorageSync(USER, { ...user, name })
  },
  setPhoneNumber ({ phoneNumber }) {
    const user = this.get()[USER]
    wxb.setStorageSync(USER, { ...user, phoneNumber })
  },
  logout () {
    wxb.removeStorageSync(USER)
    wxb.removeStorageSync(TOKEN)
  },
  loggedIn () {
    return !!wxb.getStorageSync(USER) && !!wxb.getStorageSync(TOKEN)
  },
  phoneNumberBound () {
    return this.loggedIn() && !!this.get()['user'].phoneNumber
  }
}
