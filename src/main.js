import { createApp } from 'vue'
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";

import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import http from './plugins/http'

const app = createApp(App);

app.use(http).use(store).use(router).use(ElementPlus).mount('#app')
