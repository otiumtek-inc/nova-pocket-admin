import { createApp } from "vue";
import naive from 'naive-ui'

import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import http from "./plugins/http";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(http).use(store).use(router).use(naive).mount("#app");
