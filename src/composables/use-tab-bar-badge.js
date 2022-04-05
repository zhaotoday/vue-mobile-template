import { useCart } from "uni-shop/composables/use-cart";
import { useIm } from "@/components/im/components/composables/use-im";

export const useTabBarBadge = () => {
  const { renderProductsNumber } = useCart();
  const { ws, getChats } = useIm();

  const initialize = () => {
    renderProductsNumber();

    ws.ready(() => {
      getChats();
    });
  };

  return {
    initialize,
  };
};
