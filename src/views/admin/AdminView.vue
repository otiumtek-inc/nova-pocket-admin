<template>
  <admin-layout>
    <router-view />
  </admin-layout>
</template>

<script>
import AdminLayout from '@/components/layouts/Admin.vue'

export default {
  name: "AdminView",
  components: {
    'admin-layout': AdminLayout
  },
  async mounted() {},
  methods: {
    logout: function () {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
