export const useConsts = () => {
  // 接口地址
  const API_URL = process.env["VUE_APP_API_URL"];

  // 静态资源地址
  const STATIC_URL = process.env["VUE_APP_STATIC_URL"];

  // CDN 地址
  const CDN_URL = process.env["VUE_APP_CDN_URL"];

  // WebSocket 地址
  const WS_URL = process.env["VUE_APP_WS_URL"];

  // 登录页面地址
  const LOGIN_URL = "/pages/user/account-login/index";

  // 购物车 tabBar 的索引
  const CART_TAB_BAR_INDEX = 2;

  return {
    API_URL,
    STATIC_URL,
    CDN_URL,
    WS_URL,
    LOGIN_URL,
    CART_TAB_BAR_INDEX,
  };
};
