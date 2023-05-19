<template>
  <div class="flex flex-wrap">
    <div
      class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-slate-700 border-r z-30 hidden"
    >
      <div class="h-20 border-b bg-orange-500 flex px-4 items-center mb-8">
        <p class="font-semibold text-3xl text-white pl-4">Nova Pocket</p>
      </div>
      <div class="mb-4 px-4">
        <admin-router-link text="Dashboard" to="/admin" parentName="dashboard">
          <n-icon class="mr-2">
            <dashboard />
          </n-icon>
        </admin-router-link>
        <admin-router-link
          text="Cuentas"
          to="/admin/accounts"
          parentName="accounts"
        >
          <n-icon class="mr-2">
            <user-multiple />
          </n-icon>
        </admin-router-link>
        <admin-router-link
          text="Depósitos"
          to="/admin/deposits"
          parentName="deposits"
        >
          <n-icon class="mr-2">
            <arrow-down-right />
          </n-icon>
        </admin-router-link>
        <admin-router-link
          text="Retiros"
          to="/admin/withdraws"
          parentName="withdraws"
        >
          <n-icon class="mr-2">
            <arrow-up-left />
          </n-icon>
        </admin-router-link>
        <admin-router-link
          text="Transacciones"
          to="/admin/transactions"
          parentName="transactions"
        >
          <n-icon class="mr-2">
            <list-boxes />
          </n-icon>
        </admin-router-link>
      </div>
    </div>
    <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen">
      <div class="sticky top-0 z-40">
        <div
          class="h-20 px-6 bg-white border-b flex items-center justify-between"
        >
          <div class="flex">
            <n-button @click="handlerDrawer" ghost="true" type="warning" class="lg:hidden">
              <template #icon>
                <n-icon>
                  <MenuIcon />
                </n-icon>
              </template>
            </n-button>
          </div>
          <div class="flex items-center relative">
            <n-dropdown
              trigger="click"
              :options="options"
              :show-arrow="true"
              @select="handleSelect"
            >
              <n-button ghost="true" type="warning">{{
                user?.username
              }}</n-button>
            </n-dropdown>
            <el-dropdown>
              <span class="el-dropdown-link flex items-center">
                <el-avatar
                  src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                  class="bg-gray-500"
                />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="hanleLogout"
                    >Logout</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="p-6 bg-gray-100 mb-20">
        <p class="text-2xl font-semibold mb-5 mt-2 lg:mb-5 text-left">
          {{ route.meta.title }}
        </p>
        <n-divider />
        <slot></slot>
        <n-drawer v-model:show="activeDrawer" :width="256" placement="left">
          <n-drawer-content title="Nova Pocket Admin" closable class="bg-slate-700" :header-style="{backgroundColor: '#F97316', color: 'white'}">
            <admin-router-link
              text="Dashboard"
              to="/admin"
              parentName="dashboard"
            >
              <n-icon class="mr-2">
                <dashboard />
              </n-icon>
            </admin-router-link>
            <admin-router-link
              text="Cuentas"
              to="/admin/accounts"
              parentName="accounts"
            >
              <n-icon class="mr-2">
                <user-multiple />
              </n-icon>
            </admin-router-link>
            <admin-router-link
              text="Depósitos"
              to="/admin/deposits"
              parentName="deposits"
            >
              <n-icon class="mr-2">
                <arrow-down-right />
              </n-icon>
            </admin-router-link>
            <admin-router-link
              text="Retiros"
              to="/admin/withdraws"
              parentName="withdraws"
            >
              <n-icon class="mr-2">
                <arrow-up-left />
              </n-icon>
            </admin-router-link>
            <admin-router-link
              text="Transacciones"
              to="/admin/transactions"
              parentName="transactions"
            >
              <n-icon class="mr-2">
                <list-boxes />
              </n-icon>
            </admin-router-link>
          </n-drawer-content>
        </n-drawer>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import {
  Dashboard,
  UserMultiple,
  ArrowDownRight,
  ArrowUpLeft,
  ListBoxes,
  Menu as MenuIcon,
} from "@vicons/carbon";
import AdminRouterLink from "@/components/common/AdminRouterLink.vue";

export default defineComponent({
  name: "AdminLayout",
  components: {
    AdminRouterLink,
    Dashboard,
    UserMultiple,
    ArrowDownRight,
    ArrowUpLeft,
    ListBoxes,
    MenuIcon,
  },
  props: ["message"],
  setup() {
    let logoutInterval;
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const activeDrawer = ref(false);
    const user = computed(() => store.getters["auth/user"]);

    const handlerDrawer = () => (activeDrawer.value = !activeDrawer.value);

    const handleLogout = () => {
      store.dispatch("auth/logout");
      router.push("/login");
    };

    const handleSelect = (key) => {
      if (key == "logout") {
        handleLogout();
      }
    };

    onMounted(() => {
      store.dispatch("auth/currentUser");
      logoutInterval = setInterval(() => {
        if (!localStorage.getItem("user")) {
          store.dispatch("auth/currentUser");
        }
        if (!localStorage.getItem("auth")) {
          handleLogout();
        }
      }, 500);
    });

    onUnmounted(() => {
      clearInterval(logoutInterval);
    });

    return {
      options: [
        {
          label: "Logout",
          key: "logout",
        },
      ],
      route,
      user,
      activeDrawer,
      handlerDrawer,
      handleSelect,
    };
  },
});
</script>
