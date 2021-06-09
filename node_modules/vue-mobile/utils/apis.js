import wx from "wx-bridge";

export const apis = {
  async getCity() {
    const { data } = await wx.request({
      url: "http://pv.sohu.com/cityjson?ie=utf-8",
      method: "GET",
    });
    const {
      cid: code,
      cname: name,
      cip: ip,
    } = JSON.parse(data.replace("var returnCitySN = ", "").replace(";", ""));
    return { code, name, ip };
  },
};
