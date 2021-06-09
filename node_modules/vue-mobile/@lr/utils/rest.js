import $Rest from "jt-rest";
import wx from "wx-bridge";

export class Rest extends $Rest {
  toString(obj) {
    const ret = {};

    Object.keys(obj).forEach((attribute) => {
      ret[attribute] = {};

      Object.keys(obj[attribute]).forEach((operator) => {
        if (
          obj[attribute][operator] === undefined ||
          obj[attribute][operator] === ""
        ) {
          delete ret[attribute];
        } else if (operator === "$like") {
          ret[attribute][operator] = `%${obj[attribute][operator]}%`;
        } else {
          ret[attribute] = obj[attribute];
        }
      });
    });

    return JSON.stringify(ret);
  }

  request(
    method = "GET",
    {
      id,
      query = {},
      body = {},
      action = "",
      showLoading = false,
      showError = true,
    }
  ) {
    if (action) {
      this.addPath(`actions/${action}`);
    }

    if (query.where) {
      query.where = this.toString(query.where);
    }

    ["include", "order", "attributes"].forEach((key) => {
      if (query[key]) {
        query[key] = JSON.stringify(query[key]);
      }
    });

    if (method === "GET") {
      query._ = new Date().getTime();
    }

    showLoading && wx.showLoading();

    return new Promise((resolve) => {
      super
        .request(method, { id, query, body })
        .then((res) => {
          showLoading && wx.hideLoading();
          resolve(res.data.data);
        })
        .catch((res) => {
          showLoading && wx.hideLoading();

          if (res.statusCode === 500) {
            showError && wx.showToast({ title: "服务器出错" });
          } else if (res.statusCode === 401) {
            wx.navigateTo({ url: "/pages/login/index" });
          } else {
            if (showError) {
              if (res.data && res.data.error) {
                wx.showToast({ title: res.data.error.message });
              } else {
                wx.showToast({ title: "服务器出错" });
              }
            }
          }
        });
    });
  }
}
