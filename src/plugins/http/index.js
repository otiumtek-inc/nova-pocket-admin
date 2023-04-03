import axios from "axios";

export default (app) => {

  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  app.axios = instance;
  app.$http = instance;
  app.config.globalProperties.axios = instance;
  app.config.globalProperties.$http = instance;
};
