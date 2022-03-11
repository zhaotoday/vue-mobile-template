export const useConsts = () => {
  // 接口地址
  const ApiUrl = "http://localhost:3101";

  // CDN 地址
  const CdnUrl = "https://my-app.lrcdn.cn";

  // 静态资源地址
  const StaticUrl = "https://my-app.liruan.cn/static";

  return {
    ApiUrl,
    CdnUrl,
    StaticUrl,
  };
};
