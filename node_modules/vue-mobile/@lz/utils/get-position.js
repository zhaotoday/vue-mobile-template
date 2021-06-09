import wx from "wx-bridge";
import { permission } from "../../utils/permission";
import { apis } from "../../utils/apis";
import { map } from "../../utils/map";
import { consts } from "@/utils/consts";

export const getPosition = async () => {
  await permission.check("ACCESS_FINE_LOCATION", "请开启位置权限");

  const { ip } = await apis.getCity();
  const { latitude, longitude } = await wx.getLocation({
    type: "gcj02",
    geocode: true,
  });
  const {
    data: {
      regeocode: {
        addressComponent: { province, city },
        formatted_address: address,
      },
    },
  } = await map.initialize({ key: consts.MapKey }).getAddressByLatLng({
    lat: latitude,
    lng: longitude,
  });

  return {
    ip,
    address,
    province,
    city,
  };
};
