<template>
  <div class="flex flex-row min-h-screen">
    <div class="w-16 lg:w-64 bg-gray-800 text-white">
      <Sidebar />
    </div>
    <main class="flex-1 ml-0 overflow-hidden">
      <router-view />
    </main>
  </div>
</template>


<script>
import Sidebar from './components/Sidebar.vue'
import './style/css/theme.css'
import './style/css/output.css'

export default {
  components: {
    Sidebar
  }
}
</script>