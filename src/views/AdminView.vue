<template>
    <div class="text-white">
      <h1>This is an admin page</h1>
      <router-link to="/login" class="text-white">Login</router-link>
      <div @click="logout">Logout</div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: "AdminView",
    components: {
    },
    async mounted() {
      
    },
    methods: {
      logout: function() {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      }
    }
  };
  </script>
  