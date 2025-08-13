<template>
  <div class="flex flex-row min-h-screen">
    <!-- Sidebar only for non-auth routes -->
    <div v-if="!isAuthRoute" class="w-16 lg:w-64 bg-gray-800 text-white">
      <component :is="isAdmin ? 'AdminSidebar' : 'Sidebar'" />
    </div>

    <main class="flex-1 ml-0 overflow-hidden">
      <router-view />
    </main>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import './style/css/theme.css'
import './style/css/output.css'
import AdminSidebar from './admin/components/AdminSidebar.vue'

export default {
   components: { Sidebar, AdminSidebar },
  setup() {
    const route = useRoute()

    // Add any route names or paths for your auth screens
    const isAuthRoute = computed(() =>
      ['/login', '/signup'].includes(route.path)
    )

     const isAdmin = computed(() => route.path.includes('/admin'))

    return { isAuthRoute, isAdmin }
  }
}
</script>
