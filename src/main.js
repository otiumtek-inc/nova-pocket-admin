import { createApp } from "vue";
import naive from 'naive-ui'

import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import http from "./plugins/http";
import Scroll from "./directives/scroll";
import "./assets/tailwind.css";

const app = createApp(App);

app.directive('scroller', Scroll)

// Enviromenmet
const env = {
    VUE_APP_API_URL: process.env.VUE_APP_API_URL,
    VUE_APP_STELLAR_EXPLORER_URL: process.env.VUE_APP_STELLAR_EXPLORER_URL
};
app.provide('env', env)

app.use(http).use(store).use(router).use(naive).mount("#app");
