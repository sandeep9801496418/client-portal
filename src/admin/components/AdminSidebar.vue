<script setup>
import { ref, onMounted } from 'vue'

const showProfileDropdown = ref(false)
const isDark = ref(true)
const arrowOpen = new URL('../../images/client-portal/arrow-open.svg', import.meta.url).href
const arrowClose = new URL('../../images/client-portal/arrow-close.svg', import.meta.url).href

function toggleProfileDropdown() {
  showProfileDropdown.value = !showProfileDropdown.value
}

function toggleTheme() {
  isDark.value = !isDark.value
  const html = document.documentElement

  if (isDark.value) {
    html.classList.add('dark')
    html.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.add('light')
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const html = document.documentElement

  if (savedTheme === 'light') {
    isDark.value = false
    html.classList.add('light')
    html.classList.remove('dark')
  } else {
    isDark.value = true
    html.classList.add('dark')
    html.classList.remove('light')
  }
})

const isRTL = ref(false)

function toggleDirection() {
  isRTL.value = !isRTL.value
  const html = document.documentElement
  html.setAttribute('dir', isRTL.value ? 'rtl' : 'ltr')
  localStorage.setItem('dir', isRTL.value ? 'rtl' : 'ltr')
}

onMounted(() => {
  const savedDir = localStorage.getItem('dir')
  if (savedDir) {
    isRTL.value = savedDir === 'rtl'
    document.documentElement.setAttribute('dir', savedDir)
  }
})

</script>

<template>
  <main class="bg-white dark:bg-[#080808] text-black dark:text-black sticky top-0 w-fit h-[100vh]">
    <div
      class="lg:w-[262px] bg-white dark:bg-[#030303] md:fixed overflow-y-auto top-0 h-[100vh] border-r border-[rgba(0,190,236,0.30)]">
      <!-- Logo + Title -->
      <div class="pt-7 lg:pt-10 pb-7 lg:pb-15 lg:px-6 flex gap-2 justify-center lg:justify-start">
        <img src="../../images/client-portal/portal-logo.svg" alt="portal-dark-mode-logo" class="darkmode" />
        <img src="../../images/client-portal/portal-logo1.svg" alt="portal-logo" class="lightmode hidden" />
        <span
          class="font-bold text-[20px] text-black dark:text-white leading-normal tracking-tight hidden lg:block">Admin
          Portal</span>
      </div>

      <!-- Sidebar Navigation Links -->
      <ul>
        <li class="mb-2 lg:mb-3">
          <router-link to="/admin-dashboard" :class="[
            'nav-link py-3 lg:py-4 px-2 lg:px-6 text-black dark:text-white flex items-center justify-center lg:justify-start gap-2 lg:border-l-4',
            $route.path === '/admin-dashboard' ? 'border-[#00BEEC] bg-[linear-gradient(to_right,_rgba(0,190,236,0.5),_rgba(0,190,236,0))]' : 'border-transparent hover:border-[#00BEEC]']">
            <img src="../../images/client-portal/dashboard-icon.svg" alt="Dashboard" />
            <span class="hidden lg:block">Dashboard</span>
          </router-link>
        </li>
        <li class="mb-2 lg:mb-3">
          <router-link to="/admin-users" :class="[
            'nav-link py-3 lg:py-4 px-2 lg:px-6 text-black dark:text-white flex items-center justify-center lg:justify-start gap-2 lg:border-l-4',
            ($route.path === '/admin-users' || $route.path === '/admin-user-view' || $route.path === '/admin-user-edit' || $route.path === '/admin-create-user') ? 'border-[#00BEEC] bg-[linear-gradient(to_right,_rgba(0,190,236,0.5),_rgba(0,190,236,0))]' : 'border-transparent hover:border-[#00BEEC]']">
            <img src="../../images/client-portal/user.svg" alt="Users" />
            <span class="hidden lg:block">Users</span>
          </router-link>
        </li>
        <li class="mb-2 lg:mb-3">
          <router-link to="/admin-tokens" :class="[
            'nav-link py-3 lg:py-4 px-2 lg:px-6 text-black dark:text-white flex items-center justify-center lg:justify-start gap-2 lg:border-l-4',
            $route.path === '/admin-tokens' ? 'border-[#00BEEC] bg-[linear-gradient(to_right,_rgba(0,190,236,0.5),_rgba(0,190,236,0))]' : 'border-transparent hover:border-[#00BEEC]']">
            <img src="../../images/client-portal/key-icon.svg" alt="Tokens" />
            <span class="hidden lg:block">Tokens</span>
          </router-link>
        </li>
    
        <li class="mb-2 lg:mb-3">
          <router-link to="/admin-clients" :class="[
            'nav-link py-3 lg:py-4 px-2 lg:px-6 text-black dark:text-white flex items-center justify-center lg:justify-start gap-2 lg:border-l-4',
            ($route.path === '/admin-clients' || $route.path === '/admin-client-create' || $route.path === '/admin-client-view' || $route.path === '/admin-client-edit') ? 'border-[#00BEEC] bg-[linear-gradient(to_right,_rgba(0,190,236,0.5),_rgba(0,190,236,0))]' : 'border-transparent hover:border-[#00BEEC]']">
            <img src="../../images/client-portal/clients.svg" alt="Clients" />
            <span class="hidden lg:block">Clients</span>
          </router-link>
        </li>
        <li class="mb-2 lg:mb-3">
          <router-link to="/admin-logs" :class="[
            'nav-link py-3 lg:py-4 px-2 lg:px-6 text-black dark:text-white flex items-center justify-center lg:justify-start gap-2 lg:border-l-4',
            $route.path === '/admin-logs' ? 'border-[#00BEEC] bg-[linear-gradient(to_right,_rgba(0,190,236,0.5),_rgba(0,190,236,0))]' : 'border-transparent hover:border-[#00BEEC]']">
            <img src="../../images/client-portal/log.svg" alt="Logs" />
            <span class="hidden lg:block">Logs</span>
          </router-link>
        </li>
      </ul>

      <!-- Profile Dropdown -->
      <div class="border-t-2 border-white/10 mt-4">
        <div @click="toggleProfileDropdown"
          class="mx-2 lg:mx-4 px-2 py-3 mt-4 rounded-lg cursor-pointer bg-white dark:bg-[rgba(0,190,236,0.10)] border dark:border-[#00BEEC] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="../../images/client-portal/avtar-1.png" class="w-8 h-8 rounded-full border border-white/10"
              alt="Avatar" />
            <div class="text-left hidden lg:block">
              <h4 class="text-black dark:text-[#00BEEC] text-[14px] font-medium">Abdul Moiz</h4>
              <p class="text-black dark:text-white/50 text-[12px]">Starter Plan</p>
            </div>
          </div>
          <img class="lg:block hidden" :src="showProfileDropdown ? arrowOpen : arrowClose" alt="arrow" />
        </div>

        <!-- Dropdown Menu -->
        <transition name="fade">
          <ul v-if="showProfileDropdown"
            class="mt-2 mx-2 lg:mx-4 border dark:border-[#00BEEC] rounded-lg overflow-hidden bg-white dark:bg-transparent dark:profile-background">
            <li>
              <a href="#"
                class="flex justify-center lg:justify-start gap-2 p-2 lg:p-4 hover:bg-[rgba(0,190,236,0.10)]">
                <img src="../../images/client-portal/view-profile.svg" alt="view-profile" />
                <span class="text-black dark:text-[#00BEEC] text-[12px] font-medium hidden lg:block">View Profile</span>
              </a>
            </li>
            <li>
              <a href="#"
                class="flex justify-center lg:justify-start gap-2 p-2 lg:p-4 hover:bg-[rgba(0,190,236,0.10)]">
                <img src="../../images/client-portal/subscription.svg" alt="Subscription" />
                <span class="text-black dark:text-[#00BEEC] text-[12px] font-medium hidden lg:block">Subscription</span>
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="toggleDirection"
    class="flex justify-center lg:justify-start gap-2 p-2 lg:p-4 hover:bg-[rgba(0,190,236,0.10)]">
    <img src="../../images/client-portal/language.svg" alt="Language" />
    <span class="text-black dark:text-[#00BEEC] text-[12px] font-medium hidden lg:block">
      Language ({{ isRTL ? 'RTL' : 'LTR' }})
    </span>
  </a>
   </li>
            <li class="px-2 my-2 border-t dark:border-[#00BEEC]"></li>
            <li>
              <a @click.prevent="toggleTheme" href="#"
                class="flex justify-center lg:justify-start gap-2 p-2 lg:p-4 hover:bg-[rgba(0,190,236,0.10)]">
                <img src="../../images/client-portal/proicons_dark-theme.svg" alt="Theme Icon" class="w-4 h-4" />

                <span class="text-black dark:text-[#00BEEC] text-[12px] font-medium hidden lg:block">Theme</span>
              </a>
            </li>
            <li>
              <a href="#"
                class="flex justify-center lg:justify-start gap-2 p-2 lg:p-4 hover:bg-[rgba(0,190,236,0.10)]">
                <img src="../../images/client-portal/log-out.svg" alt="Sign Out" />
                <span class="text-black dark:text-[#00BEEC] text-[12px] font-medium hidden lg:block">Sign Out</span>
              </a>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
