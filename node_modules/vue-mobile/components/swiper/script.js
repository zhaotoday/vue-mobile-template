import { ref } from "@vue/composition-api";
import wx from "wx-bridge";

export default {
  name: "CSwiper",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    previewable: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    width: {
      type: Number,
      default: 750,
    },
    height: {
      type: Number,
      default: 300,
    },
    indicatorBottom: {
      type: Number,
      default: 20,
    },
  },
  setup(props) {
    const current = ref(0);

    const onChange = (e) => {
      current.value = e.detail.current;
    };

    const onClick = (item) => {
      if (props.previewable) {
        wx.previewImage({
          urls: props.items.map((item) => item.image),
          current: item.image,
          loop: true,
          indicator: "number",
        });
      } else {
        wx.navigateTo({ url: item.url });
      }
    };

    return {
      current,
      onChange,
      onClick,
    };
  },
};
