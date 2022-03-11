import { reactive, ref } from "@vue/composition-api";
import { router } from "@/router";
import { onShow } from "uni-composition-api";
import wx from "wx-bridge";
import { PublicSchoolsApi } from "@/apis/public/schools";

export default {
  setup() {
    const { query } = router.currentRoute;

    const schoolsDetail = ref({
      homeDressComponents: [
        {
          props: {
            logo: 0,
          },
        },
      ],
    });

    const cDemoPages = reactive({
      current: 0,
    });

    onShow(async () => {
      schoolsDetail.value = await new PublicSchoolsApi().get({
        id: query.schoolId,
      });
      wx.setNavigationBarTitle({ title: schoolsDetail.value.name });
    });

    const onDemoPagesChange = (e) => {
      cDemoPages.current = e.detail.current;
    };

    return {
      schoolsDetail,
      query,
      cDemoPages,
      onDemoPagesChange,
    };
  },
};
