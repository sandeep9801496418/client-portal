<template>
    <main class="bg-white dark:bg-[#080808] min-h-screen text-black dark:text-white overflow-y-hidden">
        <!-- BG Ellipses - dark only -->
        <img src="../../images/client-portal/ellipse-1924.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             right-[25vw] top-[2vw] w-[40vw] h-auto max-w-none blur-2xl" />
        <img src="../../images/client-portal/ellipse-1926.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             left-[65vw] top-[-1vw] w-[12vw] h-auto max-w-none blur-xl" />
        <img src="../../images/client-portal/ellipse-1925.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             right-[5vw] top-[15vw] w-[32vw] h-auto max-w-none blur-2xl" />

        <!-- Header -->
        <header class="px-6 py-5 border-b border-[rgba(0,190,236,0.30)]">
            <div class="flex items-center justify-between">
                <div class="flex items-end gap-4">
                    <h1 class="font-inter text-[28px] md:text-[30px] font-medium leading-none">Users Management</h1>
                    <p class="text-[14px] sm:text-[15px] text-[#00BEEC99]">May 17, 2025 | Saturday</p>
                </div>

                <div
                    class="flex justify-center items-center w-10 sm:w-12 h-10 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
                    <img src="../../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-6 h-6" />
                    <div
                        class="absolute top-1 sm:top-2 right-2 sm:right-3 w-3 h-3 bg-black rounded-full grid place-items-center">
                        <span class="w-2 h-2 bg-[#FF0000] rounded-full"></span>
                    </div>
                </div>
            </div>
        </header>

        <!-- CONTENT -->
        <div class="p-4 sm:p-6 w-full">
            <!-- Tabs -->
            <!-- TOOLBAR: Back + Tabs in one compact bar -->
            <div class="px-6 pt-4">
                <div
                    class="rounded-xl px-4 sm:px-5 py-3 flex items-center gap-0 md:gap-[200px] md:-ml-[40px] lg:-ml-[40px]">

                    <div class="flex items-center gap-6">
                        <button @click.prevent="router.back()" class=" h-[36px] px-4 rounded-2xl border border-[#00BEEC] text-[#00BEEC]
                            flex items-center gap-2 hover:bg-[#00BEEC1A] transition">
                            <img src="../../images/client-portal/mynaui_arrow-up.svg" class="w-4 h-4" alt="" />
                            Back
                        </button>
                    </div>
                    <!-- Back -->

                    <!-- Tabs -->
                    <ul class="flex items-center gap-10 text-md font-medium">
                        <!-- Details -->
                        <li>
                            <button @click="activeTab = 'details'"
                                class="relative flex items-center gap-2 px-4 py-2 transition-colors"
                                :class="activeTab === 'details' ? 'text-[#00cfff] dark:bg-gradient-to-b from-[#0A1E22] to-[#0C3E45]' : 'text-[#0C3E45] dark:text-white'">

                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    :stroke="activeTab === 'details' ? '#00cfff' : 'currentColor'" stroke-width="1.6">
                                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                                    <path d="M4 21a8 8 0 0 1 16 0" />
                                </svg>
                                Details

                                <!-- Bottom highlight bar -->
                                <span v-if="activeTab === 'details'"
                                    class="absolute -bottom-[4px] left-0 right-0 h-[4px] bg-[#00cfff]"></span>
                            </button>
                        </li>

                        <!-- Tokens -->
                        <li>
                            <button @click="activeTab = 'tokens'"
                                class="relative flex items-center gap-2 px-4 py-2 transition-colors"
                                :class="activeTab === 'tokens'
                                    ? 'text-[#00cfff] dark:bg-gradient-to-b from-[#0A1E22] to-[#0C3E45]' : 'text-[#0C3E45] dark:text-white'">

                                <svg class="w-6 h-6" viewBox="0 0 18 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.625 8C12.2463 8 12.75 7.49632 12.75 6.875C12.75 6.25368 12.2463 5.75 11.625 5.75C11.0037 5.75 10.5 6.25368 10.5 6.875C10.5 7.49632 11.0037 8 11.625 8Z"
                                        fill="currentColor" />
                                    <path
                                        d="M3.75 12.5L7.635 8.261C7.52475 7.90625 7.5 7.64225 7.5 7.25C7.5 6.50832 7.71993 5.7833 8.13199 5.16661C8.54404 4.54993 9.12971 4.06928 9.81494 3.78545C10.5002 3.50162 11.2542 3.42736 11.9816 3.57206C12.709 3.71675 13.3772 4.0739 13.9017 4.59835C14.4261 5.1228 14.7833 5.79098 14.9279 6.51841C15.0726 7.24584 14.9984 7.99984 14.7145 8.68506C14.4307 9.37029 13.9501 9.95596 13.3334 10.368C12.7167 10.7801 11.9917 11 11.25 11C10.8577 11 10.599 10.9925 10.2435 10.8815L9 12.125H7.5V13.625H6V15.125H3.75V12.5Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                                Tokens
                                <span v-if="activeTab === 'tokens'"
                                    class="absolute -bottom-[4px] left-0 right-0 h-[4px] bg-[#00cfff]"></span>
                            </button>
                        </li>

                        <!-- Config -->
                        <li>
                            <button @click="activeTab = 'config'"
                                class="relative flex items-center gap-2 px-4 py-2 transition-colors"
                                :class="activeTab === 'config'
                                    ? 'text-[#00cfff] dark:bg-gradient-to-b from-[#0A1E22] to-[#0C3E45]' : 'text-[#0C3E45] dark:text-white'">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                    :stroke="activeTab === 'config' ? '#00BEEC' : 'currentColor'" stroke-width="1.6">
                                    <path d="M12 15a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                                    <path
                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.66 0 1.25-.39 1.51-1 .26-.58.17-1.26-.33-1.82l-.06-.06A2 2 0 1 1 7.03 3.4l.06.06c.5.56 1.24.59 1.82.33.61-.26 1-.85 1-1.51V3a2 2 0 1 1 4 0v.09c0 .66.39 1.25 1 1.51.58.26 1.26.17 1.82-.33l.06-.06A2 2 0 1 1 20.6 7.03l-.06.06c-.5.56-.59 1.24-.33 1.82.26.61.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.25.39-1.51 1Z" />
                                </svg>
                                Config
                                <span v-if="activeTab === 'config'"
                                    class="absolute -bottom-[4px] left-0 right-0 h-[4px] bg-[#00cfff]"></span>
                            </button>
                        </li>

                        <!-- Logs -->
                        <li>
                            <button @click="activeTab = 'logs'"
                                class="relative flex items-center gap-2 px-4 py-2 transition-colors"
                                :class="activeTab === 'logs'
                                    ? 'text-[#00cfff] dark:bg-gradient-to-b from-[#0A1E22] to-[#0C3E45]' : 'text-[#0C3E45] dark:text-white'">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                    :stroke="activeTab === 'logs' ? '#00BEEC' : 'currentColor'" stroke-width="1.6">
                                    <path d="M3 12a9 9 0 1 1 9 9" />
                                    <path d="M12 7v5l3 3" />
                                </svg>
                                Logs
                                <span v-if="activeTab === 'logs'"
                                    class="absolute -bottom-[4px] left-0 right-0 h-[4px] bg-[#00cfff]"></span>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>


            <!-- Details tab -->
            <section v-if="activeTab === 'details'" class="mt-6">
                <!-- Card -->
                <div class="rounded-xl border border-black/10 dark:border-[#00BEEC66] overflow-hidden">
                    <div class="p-6 sm:p-7 rounded-xl
                   bg-white/90 text-[#0C3E45]
                   dark:bg-[#FFFFFF0D] dark:text-white/90
                   ">
                        <div class="font-inter text-[24px] font-[500px]">Personal Information</div>

                        <div class="flex items-center justify-between mt-6">

                            <!-- User row -->
                            <div class="flex items-center gap-4 mb-6">
                                <img src="../../images/client-portal/user-9.svg" alt=""
                                    class="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p class="font-inter text-[16px] font-[500px]">{{ user.name }}</p>
                                    <p class="font-inter text-sm text-black/60 dark:text-white/60">{{ user.email }}</p>
                                </div>
                            </div>
                            <span
                                class="px-3 py-1 rounded-full text-sm text-white bg-[#C300FF] dark:bg-[#C300FF26] dark:text-[#C300FF]">Manager</span>
                        </div>


                        <!-- Inputs -->
                        <div class="space-y-4">
                            <div>
                                <label class="block text-xs mb-2 text-black/60 dark:text-white/60">Phone Number</label>
                                <input v-model="user.phone" type="text"
                                    class="w-full h-11 px-4 rounded-md
                         bg-white text-[#0C3E45] placeholder:text-black/40
                         border border-black/20
                         dark:bg-transparent dark:text-white/90 dark:placeholder:text-white/40 dark:border-[#FFFFFF80] focus:outline-none"
                                    placeholder="+1 (222) 123-3456" />
                            </div>
                            <div>
                                <label class="block text-xs mb-2 text-black/60 dark:text-white/60">Website</label>
                                <input v-model="user.website" type="text"
                                    class="w-full h-11 px-4 rounded-md
                         bg-white text-[#0C3E45] placeholder:text-black/40
                         border border-black/20
                         dark:bg-transparent dark:text-white/90 dark:placeholder:text-white/40 dark:border-[#FFFFFF80] focus:outline-none"
                                    placeholder="www.pendulumtech.com" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- KPIs -->
                <div class="mt-8 flex justify-center gap-12 flex-wrap">
                    <div class="rounded-2xl px-6 py-8 text-center w-[260px]
                      bg-[#0D3A43]/5 text-[#0C3E45]
                      dark:bg-[#00BEEC30] dark:text-white">
                        <div class="text-4xl font-semibold leading-none mb-2">{{ stats.tokens }}</div>
                        <div class="opacity-80 text-lg">Active Tokens</div>
                    </div>

                    <div class="rounded-2xl px-6 py-8 text-center w-[260px]
                      bg-[#0D3A43]/5 text-[#0C3E45]
                      dark:bg-[#00BEEC30] dark:text-white">
                        <div class="text-4xl font-semibold leading-none mb-2">{{ stats.quota }}%</div>
                        <div class="opacity-80 text-lg">Quota Used</div>
                    </div>

                    <div class="rounded-2xl px-6 py-8 text-center w-[260px]
                      bg-[#0D3A43]/5 text-[#0C3E45]
                      dark:bg-[#00BEEC30] dark:text-white">
                        <div class="text-4xl font-semibold leading-none mb-2">{{ stats.days }}</div>
                        <div class="opacity-80 text-lg">Active Days</div>
                    </div>
                </div>
            </section>

            <!-- Tokens tab -->
            <section v-if="activeTab === 'tokens'" class="mt-6">
                <UserTokenComponent />
            </section>

            <!-- Config tab -->
            <section v-if="activeTab === 'config'" class="mt-6">
                <UserConfigComponent />
            </section>

            <!-- Logs tab -->
            <section v-if="activeTab === 'logs'" class="mt-6">
                <UserLogComponent />
            </section>




            <!-- Bottom actions -->
            <div class="flex justify-end gap-4 mt-10">
                <button class="h-11 px-6 rounded-full border border-[#00BEEC] text-[#00BEEC]
                 hover:bg-[#00BEEC1A] transition">
                    Cancel
                </button>
                <button class="h-11 px-6 rounded-full bg-[#00BEEC] text-white border border-white/15
                 dark:bg-[#00BEEC1A] dark:text-[#00BEEC]
                 hover:brightness-110 transition">
                    Save
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { reactive, ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import UserTokenComponent from './UserTokenComponent.vue'
import UserConfigComponent from './UserConfigComponent.vue'
import UserLogComponent from './UserLogComponent.vue'

const query = ref('')
const router = useRouter()

const activeTab = ref('details')

const user = ref({
    name: 'Peter Parker',
    email: 'peter123@gmail.com',
    phone: '+1 (222) 123-3456',
    website: 'www.pendulumtech.com',
    avatar: 'https://i.pravatar.cc/96?img=15'
})

const stats = ref({
    tokens: 12,
    quota: 89,
    days: 34
})

</script>

<style scoped>
.custom-border-gradient {
    border-image: linear-gradient(90deg, #33EFB7, #00A3BE) 1;
}
</style>
