export const useConsts = () => {
  // 接口地址
  const ApiUrl = process.env["VUE_APP_API_URL"];

  // 登录页面地址
  const LoginUrl = "/pages/user/account-login/index";

  // CDN 地址
  const CdnUrl = process.env["VUE_APP_CDN_URL"];

  // 静态资源地址
  const StaticUrl = "https://my-app.liruan.cn/static";

  // WebSocket 地址
  const WsUrl = process.env["VUE_APP_WS_URL"];

  // 购物车 tabBar 的索引
  const CartTabBarIndex = 2;

  return {
    ApiUrl,
    LoginUrl,
    CdnUrl,
    StaticUrl,
    WsUrl,
    CartTabBarIndex,
  };
};
