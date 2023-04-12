export const useConsts = () => {
  // 接口地址
  const API_URL = process.env["VUE_APP_API_URL"];

  // 登录页面地址
  const LOGIN_URL = "/pages/user/account-login/index";

  // CDN 地址
  const CDN_URL = process.env["VUE_APP_CDN_URL"];

  // 静态资源地址
  const StaticUrl = process.env["VUE_APP_STATIC_URL"];

  // WebSocket 地址
  const WsUrl = process.env["VUE_APP_WS_URL"];

  // 购物车 tabBar 的索引
  const CartTabBarIndex = 2;

  return {
    API_URL,
    LOGIN_URL,
    CDN_URL,
    StaticUrl,
    WsUrl,
    CartTabBarIndex,
  };
};
