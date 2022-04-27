import { useCart } from "uni-shop/composables/use-cart";
import { useIm } from "uni-im/components/im/composables/use-im";
import { useUsers } from "vue-mobile/@lr/composables/use-users";

export const useTabBarBadge = () => {
  const { loggedIn } = useUsers();
  const { renderProductsNumber } = useCart();
  const { ws, getChats } = useIm();

  const initialize = () => {
    renderProductsNumber();

    if (loggedIn()) {
      ws.ready(() => {
        getChats();
      });
    }
  };

  return {
    initialize,
  };
};
