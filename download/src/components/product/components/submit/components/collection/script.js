import { ref, watch } from "@vue/composition-api";
import { useAuth } from "vue-mobile/@lr/composables/use-auth";
import { collectionsApi } from "@/apis/client/collections";

export default {
  props: {
    productId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    collected() {
      return this.productIds.includes(this.productId);
    },
  },
  setup(props) {
    const productIds = ref([]);

    const getProductIds = () =>
      collectionsApi.post({ action: "getProductIds" });

    watch(
      () => props.productId,
      async (newVal) => {
        if (useAuth().loggedIn() && newVal) {
          productIds.value = await getProductIds();
        }
      },
      { immediate: true }
    );

    const updateProductIds = async () => {
      await collectionsApi.post({
        action: "updateProductIds",
        body: { productId: props.productId },
      });
      productIds.value = await getProductIds();
    };

    return {
      productIds,
      updateProductIds,
    };
  },
};
