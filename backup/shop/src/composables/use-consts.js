import { Languages } from "@/utils/consts/languages";

export const useConsts = () => {
  // 接口地址
  // const ApiUrl = "http://localhost:10601";
  const ApiUrl = "https://sol-api.liruan.cn";

  // 登录页面地址
  const LoginUrl = "/pages/user/account-login/index";

  // CDN 地址
  // const CdnUrl = "http://localhost:10601/public/files";
  const CdnUrl = "https://sol-api.liruan.cn/public/files";

  // 静态资源地址
  const StaticUrl = "https://sol-api.liruan.cn/static";

  // WebSocket 地址
  const WsUrl = "wss://sol-api.liruan.cn/wss";
  // const WsUrl = "ws://localhost:3002";

  return {
    ApiUrl,
    LoginUrl,
    CdnUrl,
    StaticUrl,
    WsUrl,
    Languages,
  };
};
