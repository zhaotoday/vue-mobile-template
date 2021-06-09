export default {
  isEmpty (value) {
    return value === null || value === undefined || value.trim() === ''
  },
  keyMirror (obj) {
    let ret = {}
    let key

    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue
      }

      ret[key] = key
    }

    return ret
  },
  loadScript (url) {
    const httpReq = new window.XMLHttpRequest()

    httpReq.open('GET', url, true)
    httpReq.send(null)
  },
  sleep (n) {
    return new Promise(resolve => {
      setTimeout(resolve, n)
    })
  },
  intercept (fn, { beforeCall, req, res } = {}) {
    return async options => {
      const fnOptions = req ? req(options) : options

      beforeCall && await beforeCall(fnOptions)

      return res ? res(fn(fnOptions)) : fn(fnOptions)
    }
  },
  getItem (items, key, val) {
    return items && items.length
      ? (items.find(item => item[key] === val) || {})
      : {}
  },
  encryptPhoneNumber (phoneNumber) {
    return phoneNumber
      ? `${phoneNumber.substring(0, 3)}****${phoneNumber.substring(7, 11)}`
      : ''
  },
  deepCopy (obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  formatNumber (number) {
    return parseFloat((number || 0).toFixed(2))
  },
  toLowerCamelCase (str) {
    return str.replace(/-([a-z])/g, (all, letter) => letter.toUpperCase())
  },
  formatHtml(html = "") {
    return html.replace(/\<img/gi, '<img style="max-width: 100%; height: auto" ');
  },
  page(array, size) {
    const length = array.length;
    const newArray = [];
    const i = Math.ceil(length / size);

    let j = 0;

    while (j < i) {
      const spare = length - j * size >= size ? size : length - j * size;
      const temp = array.slice(j * size, j * size + spare);

      newArray.push(temp);
      j++;
    }

    return newArray;
  }
}
