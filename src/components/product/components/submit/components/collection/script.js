import { ref, watch } from "@vue/composition-api";
import { useAuth } from "@lr/composables/use-auth";
import { CollectionsApi } from "@/apis/wx/collections";

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
      new CollectionsApi().post({
        action: "getProductIds",
      });

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
      await new CollectionsApi().post({
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
