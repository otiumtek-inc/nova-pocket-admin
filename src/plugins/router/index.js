import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("@/views/public/HomeView.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/views/public/PrivacyPolicyView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/public/LoginView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/admin/AdminView.vue"),
    children: [
      {
        path: '',
        name: "dashboard",
        component: () => import("@/views/admin/dashboard/IndexView.vue"),
      },
      {
        path: 'deposit',
        name: "deposit",
        component: () => import("@/views/admin/deposit/IndexView.vue"),
      },
      {
        path: 'withdraw',
        name: "withdraw",
        component: () => import("@/views/admin/withdraw/IndexView.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/privacy-policy", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default (app) => {
  app.router = router;
  app.use(router);
};
