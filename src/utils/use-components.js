import Checkbox from "vue-mobile/components/checkbox";
import Dialog from "vue-mobile/components/dialog";
import Empty from "vue-mobile/components/empty";
import Filter from "vue-mobile/components/filter";
import Index from "vue-mobile/components/index";
import Logo from "vue-mobile/components/logo";
import Popup from "vue-mobile/components/popup";
import Search from "vue-mobile/components/search";
import Swiper from "vue-mobile/components/swiper";
import Rate from "vue-mobile/components/rate";

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
