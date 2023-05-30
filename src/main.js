import { createApp } from "vue";
import naive from 'naive-ui'
import mitt from "mitt"

import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import http from "./plugins/http";
import i18n from "./plugins/i18n";
import Scroll from "./directives/scroll";
import "./assets/tailwind.css";

const app = createApp(App);

app.directive('scroller', Scroll)

const emitter = mitt()
app.provide("$emitter", emitter)

const env = {
    VUE_APP_NAME_APP: process.env.VUE_APP_NAME_APP,
    VUE_APP_API_BACKEND_URL: process.env.VUE_APP_API_BACKEND_URL,
    VUE_APP_API_ANCHOR_URL: process.env.VUE_APP_API_ANCHOR_URL,
    VUE_APP_STELLAR_EXPLORER_URL: process.env.VUE_APP_STELLAR_EXPLORER_URL
};
app.provide('env', env)

app.use(i18n).use(http).use(store).use(router).use(naive).mount("#app");
