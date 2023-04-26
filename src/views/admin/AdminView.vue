<template>
  <admin-layout>
    <router-view />
  </admin-layout>
</template>

<script>
  import { defineComponent } from 'vue'
  import AdminLayout from '@/components/layouts/Admin.vue'

  export default defineComponent({
    components: {
      AdminLayout
    },
    props: [],
    setup () {
      return {}
    }
  })
</script>