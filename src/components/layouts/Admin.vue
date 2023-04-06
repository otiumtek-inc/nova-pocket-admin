<template>
  <div class="flex flex-wrap">
    <div
      class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30 hidden"
    >
      <div class="h-20 border-b bg-gray-100 flex px-4 items-center mb-8">
        <p class="font-semibold text-3xl text-gray-500 pl-4">
          Nova Pocket Admin
        </p>
      </div>
      <div class="mb-4 px-4">
        <admin-router-link text="Dashboard" to="/admin"><el-icon size="25" class="mr-2"><HomeFilled /></el-icon></admin-router-link>
        <admin-router-link text="Depósitos" to="/admin/deposit"><el-icon size="25" class="mr-2"><SortDown /></el-icon></admin-router-link>
        <admin-router-link text="Retiros" to="/admin/withdraw"><el-icon size="25" class="mr-2"><SortUp /></el-icon></admin-router-link>
      </div>
    </div>
    <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen">
      <div class="sticky top-0 z-40">
        <div class="h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
          <div class="flex"></div>
          <div class="flex items-center relative">
            <el-avatar :icon="UserFilled" />
          </div>
        </div>
      </div>
      <div class="p-6 bg-gray-100 mb-20">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AdminRouterLink from "@/components/common/AdminRouterLink.vue"

export default {
  name: "AdminLayout",
  components: {
    'admin-router-link': AdminRouterLink
  },
  methods: {
    logout: function () {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
