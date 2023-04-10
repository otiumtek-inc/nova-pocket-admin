<template>
  <div class="flex flex-wrap">
    <div
      class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30 hidden"
    >
      <div class="h-20 border-b bg-gray-100 flex px-4 items-center mb-8">
        <p class="font-semibold text-3xl text-gray-500 pl-4">Nova Pocket</p>
      </div>
      <div class="mb-4 px-4">
        <admin-router-link text="Dashboard" to="/admin" parentName="dashboard"
          ><el-icon size="25" class="mr-2"><HomeFilled /></el-icon
        ></admin-router-link>
        <admin-router-link text="Cuentas" to="/admin/accounts" parentName="accounts"
          ><el-icon size="25" class="mr-2"><User /></el-icon
        ></admin-router-link>
        <admin-router-link text="Depósitos" to="/admin/deposits" parentName="deposits"
          ><el-icon size="25" class="mr-2"><SortDown /></el-icon
        ></admin-router-link>
        <admin-router-link text="Retiros" to="/admin/withdraws" parentName="withdraws"
          ><el-icon size="25" class="mr-2"><SortUp /></el-icon
        ></admin-router-link>
        <admin-router-link text="Transacciones" to="/admin/transactions" parentName="transactions"
          ><el-icon size="25" class="mr-2"><Memo /></el-icon
        ></admin-router-link>
      </div>
    </div>
    <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen">
      <div class="sticky top-0 z-40">
        <div
          class="h-20 px-6 bg-gray-100 border-b flex items-center justify-between"
        >
          <div class="flex"></div>
          <div class="flex items-center relative">
            <el-dropdown>
              <span class="el-dropdown-link flex items-center">
                <el-avatar src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" class="bg-gray-500" />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="hanleLogout">Logout</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="p-6 bg-gray-100 mb-20">
        <p class="text-2xl font-semibold mb-5 mt-2 lg:mb-5 text-left">
          {{ this.$route.meta.title }}
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { UserFilled } from '@element-plus/icons-vue'
import AdminRouterLink from "@/components/common/AdminRouterLink.vue";

let logoutInterval;

export default {
  name: "AdminLayout",
  components: {
    "admin-router-link": AdminRouterLink,
  },
  mounted() {
    logoutInterval = setInterval(() => {
      if(!localStorage.getItem('user')) {
        this.hanleLogout();
      }
    }, 500);
  },
  unmounted() {
    clearInterval(logoutInterval);
  },
  methods: {
    hanleLogout: function () {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
