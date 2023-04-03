import { createStore } from "vuex";
import { auth } from "./auth.module";

export default (app) => {
  const store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      auth
    },
  });
  app.router = store;
  app.use(store);
};
