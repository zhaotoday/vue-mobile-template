import { Languages } from "@/utils/consts/languages";

export const useConsts = () => {
  // 接口地址
  // const ApiUrl = "http://localhost:10601";
  const ApiUrl = "https://sol-api.fzlr.com";

  // 登录页面地址
  const LoginUrl = "/pages/user/account-login/index";

  // CDN 地址
  // const CdnUrl = "http://localhost:10601/public/files";
  const CdnUrl = "https://sol-api.fzlr.com/public/files";

  // 静态资源地址
  const StaticUrl = "https://my-app.liruan.cn/static";

  return {
    ApiUrl,
    LoginUrl,
    CdnUrl,
    StaticUrl,
    Languages,
  };
};
