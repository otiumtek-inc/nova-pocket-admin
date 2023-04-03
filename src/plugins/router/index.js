import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/views/PrivacyPolicyView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default (app) => {
  router.beforeEach((to, from, next) => {
    const publicPages = ["/home", "/privacy-policy", "/login"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");
    if (authRequired && !loggedIn) {
      next("/login");
    } else {
      next();
    }
  });
  app.router = router;
  app.use(router);
};
