import { ref } from "@vue/composition-api";
import { onShow } from "uni-composition-api";
import { publicProductsApi } from "@/apis/public/products";
import { useRoute } from "vue-mobile/composables/use-route";
import wx from "wx-bridge";
import { useHelpers } from "@/composables/use-helpers";

export default {
  setup() {
    const { currentRoute } = useRoute();

    const { getImageUrl } = useHelpers();

    const detail = ref({
      imageFileIds: [],
      name: "",
      price: 0,
      stock: 0,
      sales: 0,
      content: "",
    });

    onShow(async () => {
      await render();
    });

    const render = async () => {
      detail.value = await publicProductsApi.get({
        id: currentRoute.query.id,
      });
    };

    const onSwiperClick = (index) => {
      wx.previewImage({
        current: index,
        urls: detail.value.imageFileIds.map((imageFileId) =>
          getImageUrl({ id: imageFileId })
        ),
      });
    };

    return {
      detail,
      onSwiperClick,
    };
  },
};
