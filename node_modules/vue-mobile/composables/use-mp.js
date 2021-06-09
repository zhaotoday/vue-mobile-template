import wx from "wx-bridge";

export const useMp = () => {
  const getUserInfo = async () => {
    const { authSetting } = await wx.getSetting();

    if (!authSetting["scope.userInfo"]) {
      return Promise.reject();
    } else {
      const { code } = await wx.login();
      const { iv, encryptedData } = await wx.getUserInfo({
        withCredentials: true,
      });
      return { code, iv, encryptedData };
    }
  };

  return {
    getUserInfo,
  };
};
