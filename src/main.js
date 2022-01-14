import { createSSRApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { config } from "@/utils/config";
import { useComponents } from "@/utils/use-components";

export function createApp() {
  const app = createSSRApp(App);

  app.use(store);

  config(app);
  useComponents(app);

  return {
    app,
  };
}
