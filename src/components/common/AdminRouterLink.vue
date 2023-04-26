<template>
  <router-link :to="to" custom v-slot="{ href, navigate, isActive, isExactActive }">
    <a :href="href" @click="navigate" class="text-gray-700 no-underline">
      <div :class="{'bg-gray-200': (isActive && isExactActive) || isActiveRoute}" class="flex items-center text-gray-500 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer mb-2">
        <slot></slot>
        <span class="text-gray-700 no-underline mt-1">{{ text }}</span>
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "DashboardView",
  props: {
    text: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "/admin",
    },
    parentName: {
      type: String,
      default: "dashboard",
    }
  },
  computed: {
    isActiveRoute: function () {
      return this.$route.meta.parentName == this.parentName;
    }
  }
};
</script>
