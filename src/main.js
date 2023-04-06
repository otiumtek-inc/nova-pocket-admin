import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/theme-chalk/index.css";

import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import http from "./plugins/http";
import "./assets/tailwind.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(http).use(store).use(router).use(ElementPlus).mount("#app");