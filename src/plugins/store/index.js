import { createStore } from "vuex";

export default (app) => {
  const store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
    },
  });
  app.router = store;
  app.use(store);
};
