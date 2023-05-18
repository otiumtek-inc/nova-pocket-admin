<template>
  <router-link
    :to="to"
    custom
    v-slot="{ href, navigate, isActive, isExactActive }"
  >
    <a :href="href" @click="navigate" class="text-white no-underline">
      <div
        :class="{
          'bg-gray-200 text-black':
            (isActive && isExactActive) || isActiveRoute,
        }"
        class="flex items-center text-white h-10 pl-4 hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer mb-2"
      >
        <slot></slot>
        <span class="no-underline">{{ text }}</span>
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
    },
  },
  computed: {
    isActiveRoute: function () {
      return this.$route.meta.parentName == this.parentName;
    },
  },
};
</script>
