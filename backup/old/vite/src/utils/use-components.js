import Checkbox from "vue-mobile/components/checkbox/index.vue";
import Dialog from "vue-mobile/components/dialog/index.vue";
import Empty from "vue-mobile/components/empty/index.vue";
import Filter from "vue-mobile/components/filter/index.vue";
import Index from "vue-mobile/components/index/index.vue";
import Logo from "vue-mobile/components/logo/index.vue";
import Popup from "vue-mobile/components/popup/index.vue";
import Search from "vue-mobile/components/search/index.vue";
import Swiper from "vue-mobile/components/swiper/index.vue";
import Rate from "vue-mobile/components/rate/index.vue";

export const useComponents = (app) => {
  app.component("c-checkbox", Checkbox);
  app.component("c-dialog", Dialog);
  app.component("c-empty", Empty);
  app.component("c-filter", Filter);
  app.component("c-index", Index);
  app.component("c-logo", Logo);
  app.component("c-popup", Popup);
  app.component("c-search", Search);
  app.component("c-swiper", Swiper);
  app.component("c-rate", Rate);
};
