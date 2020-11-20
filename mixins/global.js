import { Component } from "vue-property-decorator";
import { mapState } from "vuex";
import GlobalBaseMixin from "vue-mobile/mixins/global";

@Component({
  computed: mapState({
    user: state => state["wx/wxUsers"].wxUser
  })
})
export default class GlobalMixin extends GlobalBaseMixin {
  onLoad(options) {
    this.query = options;
  }
}
