import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("@/views/public/LandingView.vue"),
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
        meta: {title: 'Dashboard'},
        component: () => import("@/views/admin/dashboard/IndexView.vue"),
      },
      {
        path: 'accounts',
        name: "accounts",
        component: () => import("@/views/admin/account/AccountView.vue"),
        children: [
          {
            path: '',
            name: "accounts-list",
            meta: {title: 'Cuentas', parentName: 'accounts'},
            component: () => import("@/views/admin/account/IndexView.vue"),
          },
          {
            path: ':id',
            name: "account-detail",
            meta: {title: 'Detalles de la cuenta', parentName: 'accounts'},
            component: () => import("@/views/admin/account/DetailView.vue"),
          },
        ]
      },
      {
        path: 'deposits',
        name: "deposits",
        meta: {title: 'Depósitos'},
        component: () => import("@/views/admin/deposit/IndexView.vue"),
      },
      {
        path: 'withdraws',
        name: "withdraws",
        meta: {title: 'Retiros'},
        component: () => import("@/views/admin/withdraw/IndexView.vue"),
      },
      {
        path: 'transactions',
        name: "transactions",
        meta: {title: 'Transacciones'},
        component: () => import("@/views/admin/transaction/IndexView.vue"),
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
  const loggedIn = localStorage.getItem("auth");
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
