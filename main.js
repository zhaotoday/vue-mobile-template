import Vue from 'vue'
import App from '@/App'
import globalPlugin from '@/plugins/global'
import Checkbox from 'we-design/components/checkbox'
import Dialog from 'we-design/components/dialog'
import Empty from 'we-design/components/empty'
import Filter from 'we-design/components/filter'
import Index from 'we-design/components/index'
import Logo from 'we-design/components/logo'
import Popup from 'we-design/components/popup'
import Search from 'we-design/components/search'
import Poster from 'we-design/components/poster'
import ShareOptions from 'we-design/components/share-options'
import Share from 'we-design/components/share'
import Swiper from 'we-design/components/swiper'

Vue.config.productionTip = false;

Vue.use(globalPlugin);

Vue.component("c-checkbox", Checkbox);
Vue.component("c-dialog", Dialog);
Vue.component("c-empty", Empty);
Vue.component("c-filter", Filter);
Vue.component("c-index", Index);
Vue.component("c-logo", Logo);
Vue.component("c-popup", Popup);
Vue.component("c-search", Search);
Vue.component("c-poster", Poster);
Vue.component("c-share-options", ShareOptions);
Vue.component("c-share", Share);
Vue.component("c-swiper", Swiper);

const app = new Vue({
  mpType: "app",
  ...App
});

app.$mount();
