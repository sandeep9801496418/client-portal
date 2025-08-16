<template>
    <main class="bg-white dark:bg-[#080808] min-h-screen text-black dark:text-white overflow-y-hidden">
        <!-- BG Ellipses - dark only -->
        <img src="../../images/client-portal/ellipse-1924.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-[450px] top-[24px] w-[807px] h-[894px] max-w-none blur-2xl" />
        <img src="../../images/client-portal/ellipse-1926.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-0 -top-[19px] w-[239px] h-[255px] max-w-none blur-xl mt-[90px]" />
        <img src="../../images/client-portal/ellipse-1925.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-[100px] top-[230px] w-[630px] h-[702px] max-w-none blur-2xl" />

        <!-- Header -->
        <header class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border-b border-[rgba(0,190,236,0.30)]">
            <div class="flex items-center justify-between">
                <div class="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-4">
                    <h1 class="font-inter text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px] font-medium leading-none">User Management</h1>
                    <p class="text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] text-[#00BEEC99]">May 17, 2025 | Saturday</p>
                </div>

                <div
                    class="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
                    <img src="../../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <div class="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF0000] rounded-full"></div>
                </div>
            </div>
        </header>

        <div class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-4 md:px-6 pt-4 sm:pt-6 gap-3 sm:gap-4">
            <div class="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] dark:text-white font-medium">
                Edit User Details
            </div>
            <button
                @click.prevent="router.back"  
                class="h-[35px] w-[90px] dark:bg-transparent rounded-2xl border dark:border-[#00BEEC] text-[#00BEEC] flex items-center justify-center gap-1 flex-shrink-0">
                <img src="../../images/client-portal/mynaui_arrow-up.svg" alt="" class="w-4 h-4" />
                Back
            </button>
        </div>
        <div class="bg-white dark:bg-transparent p-4 sm:p-6 w-[calc(100%-0px)] md:w-full">
            <div class="min-h-screen text-black dark:text-white space-y-6">
                <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div
                        class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-5 rounded-[17px] shadow-md relative">
                        <div class="text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                            Personal Information
                        </div>
                        <div class="flex justify-between flex-wrap gap-6">
                            <div class="text-center flex items-center gap-3 p-3 pl-0 pb-0 rounded-t-xl">
                                <div
                                    class="w-10 h-10 flex justify-center items-center border border-white/10 rounded-full bg-white/10">
                                    <img src="../../images/client-portal/avtar-1.png" alt="Avatar" />
                                </div>
                                <div class="text-left">
                                    <h4 class="font-medium text-[16px] text-black dark:text-[#fff] leading-normal">
                                        Profile picture
                                    </h4>
                                    <p
                                        class="font-inter text-[12px] font-medium leading-normal text-black dark:text-white/60">
                                        PNG, JPEG under 15MB
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex items-center">
                                    <button id="delete" type="button" @click="showDeletePopup = true"
                                        class="py-2 px-3 flex items-center gap-2 text-[#FF0000] text-[12px] rounded-full border border-[#FF0000] text-center justify-center cursor-pointer">
                                        <span><img src="../../images/client-portal/bin-red.svg" alt="bin red" /></span>
                                        Delete
                                    </button>
                                </div>
                                <AdminDeleteProfilePopup v-if="showDeletePopup" @close="showDeletePopup = false" />

                                <div class="flex items-center">
                                    <button id="delete" type="button"
                                        class="py-2 px-3 flex items-center gap-2 text-[#00BEEC] text-[12px] rounded-full bg-[rgba(0,190,236,0.10)] border-1 border-[#071b20] text-center justify-center cursor-pointer">
                                        <span><img src="../../images/client-portal/media.svg" alt="Update" /></span>
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                        <form class="pt-7">
                            <div class="mb-4">
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1" for="fullName">Full
                                    Name<span>*</span></label>
                                <input type="text" id="fullName" name="fullName" placeholder="Abdul Moiz"
                                    class="w-full px-3 py-2 text-[16px]  bg-transparent font-medium border dark:border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>

                            <div class="mb-6">
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1"
                                    for="email">Email<span>*</span></label>
                                <input type="email" id="email" name="email" placeholder="abdulmoiz123@gmail.com"
                                    class="w-full px-3 py-2 text-[16px] font-medium border dark:border-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>

                            <div class="flex justify-end">
                                <button type="submit"
                                    class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] text-[16px] rounded-full bg-[rgba(0,190,236,0.10)] border-1 border-[#071b20] text-center justify-center cursor-pointer">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                    <div
                        class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-5 rounded-[17px] shadow-md relative">
                        <div class="text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                            Select User Role
                        </div>
                        <form class="pt-7" @submit.prevent>
                            <div class="relative w-full max-w-full">
                                <!-- Trigger -->
                                <button type="button" @click="openRole = !openRole" @keydown.escape="openRole = false"
                                    class="h-[42px] w-full px-4 rounded-md flex items-center justify-between gap-2
             bg-white dark:bg-[#0B1D21]
             text-sm text-black/80 dark:text-white/90
             border border-black/10 dark:border-white/20
             focus:outline-none focus:ring-2 focus:ring-sky-400/50" aria-haspopup="listbox" :aria-expanded="openRole">
                                    {{ selectedRole || 'Select User Role' }}
                                    <img src="../../images/client-portal/arrow-down-white.svg"
                                        :class="['transition-transform', openRole ? 'rotate-180' : '']" alt="" />
                                </button>

                                <!-- Menu -->
                                <transition name="fade" appear>
                                    <div v-if="openRole" class="absolute z-50 top-full left-0 right-0 mt-2
               rounded-lg overflow-hidden
               border border-black/10 dark:border-white/15
               bg-white dark:bg-[#0B1D21]
               shadow-lg" role="listbox">
                                        <button type="button" @click="selectRole('Manager'); openRole = false" class="w-full text-left px-4 py-2 text-sm
                 text-[#0C3E45] dark:text-white/90
                 hover:bg-sky-50 dark:hover:bg-[#0D2C31]" role="option">
                                            Manager
                                        </button>
                                        <div class="border-t border-black/5 dark:border-white/10"></div>

                                        <button type="button" @click="selectRole('Admin'); openRole = false" class="w-full text-left px-4 py-2 text-sm
                 text-[#0C3E45] dark:text-white/90
                 hover:bg-sky-50 dark:hover:bg-[#0D2C31]" role="option">
                                            Admin
                                        </button>
                                        <div class="border-t border-black/5 dark:border-white/10"></div>

                                        <button type="button" @click="selectRole('User'); openRole = false" class="w-full text-left px-4 py-2 text-sm
                 text-[#0C3E45] dark:text-white/90
                 hover:bg-sky-50 dark:hover:bg-[#0D2C31]" role="option">
                                            User
                                        </button>
                                    </div>
                                </transition>
                            </div>

                            <div class="flex justify-end sm:absolute sm:bottom-5 sm:right-5 mt-3 sm:mt-0">
                                <button type="submit" class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] text-[16px]
             rounded-full bg-[rgba(0,190,236,0.10)] dark:border-[#071b20]">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>

                </section>
                <section
                    class="bg-white dark:bg-transparent  card-bg-type-2 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                    <div class="text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                        Change Password
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    </div>
                    <form class="pt-7">

                        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                            <div class="mb-2">
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1"
                                    for="crntPass">Current Password</label>
                                <input type="password" id="crntPass" name="crntPass"
                                    placeholder="Enter Current Password"
                                    class="w-full px-3 py-2 text-[16px] bg-transparent font-medium border dark:border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>

                            <div class="mb-2 new-pass">
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1" for="newPass">Enter
                                    New Password</label>
                                <div class="relative">
                                    <input type="password" id="newPass" name="newPass" placeholder="Enter New Password"
                                        class="bg-transparent w-full px-3 py-2 text-[16px] font-medium border dark:border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-7" />
                                    <img class="absolute right-2 top-2" src="../../images/client-portal/eye.svg" alt="eye">
                                </div>
                                <ul class="flex gap-2 mt-3">
                                    <li class="w-full flex-auto h-1 bg-[#00FF62] rounded-2xl"></li>
                                    <li class="w-full flex-auto h-1 bg-[#00FF62] rounded-2xl"></li>
                                    <li class="w-full flex-auto h-1 bg-white/40 rounded-2xl"></li>
                                    <li class="w-full flex-auto h-1 bg-white/40 rounded-2xl"></li>
                                </ul>
                                <p class="block text-[12px] text-black dark:text-white/50 mb-1 mt-2" for="newPass">
                                    Weak-Add more Characters</p>
                            </div>
                            <div class="mb-2">
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1 "
                                    for="cnfNewPass">Confirm New Password</label>
                                <div class="relative">
                                    <input type="password" id="cnfNewPass" name="cnfNewPass"
                                        placeholder="Confirm New Password"
                                        class="bg-transparent w-full px-3 py-2 text-[16px] font-medium border dark:border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-7" />
                                    <img class="absolute right-2 top-2" src="../../images/client-portal/eye.svg"
                                        alt="eye">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between gap-4 mt-3 md:mt-6 items-center flex-wrap">
                            <a href="#" class="text-[1] font-medium">Forgot Password ?</a>

                            <button type="submit"
                                class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] text-[16px] rounded-full bg-[rgba(0,190,236,0.10)] border-1 border-[#071b20] text-center justify-center cursor-pointer">
                                Update password
                            </button>
                        </div>
                    </form>
                </section>


                <!--  Login History  -->
                <section
                    class="bg-white dark:bg-transparent  card-bg-type-2 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                    <div class="text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                        Login History
                    </div>

                    <div class="overflow-auto pb-5 lg:pb-0 mb-8 lg:mb-0">
                        <table class="w-full mt-5">
                            <thead>
                                <tr class="">
                                    <th class="p-0">
                                        <div
                                            class="text-[#00BEEC] px-2 sm:px-4 text-[14px] sm:text-[16px] md:text-[18px] leading-normal font-normal text-center p-2 text-nowrap bg-[rgba(0,190,236,0.10)] border border-r-0 border-[rgba(0,190,236,0.40)] rounded-l-[10px]">
                                            Date & Time
                                        </div>
                                    </th>
                                    <th class="p-0">
                                        <div
                                            class="text-[#00BEEC] px-2 sm:px-4 text-[14px] sm:text-[16px] md:text-[18px] leading-normal font-normal text-center p-2 text-nowrap bg-[rgba(0,190,236,0.10)] border-y border-r-0 border-[rgba(0,190,236,0.40)]">
                                            IP Address
                                        </div>
                                    </th>
                                    <th class="p-0">
                                        <div
                                            class="text-[#00BEEC] px-2 sm:px-4 text-[14px] sm:text-[16px] md:text-[18px] leading-normal font-normal text-center p-2 text-nowrap bg-[rgba(0,190,236,0.10)] border-y border-r-0 border-[rgba(0,190,236,0.40)]">
                                            Device/Browser
                                        </div>
                                    </th>
                                    <th class="p-0">
                                        <div
                                            class="text-[#00BEEC] px-2 sm:px-4 text-[14px] sm:text-[16px] md:text-[18px] leading-normal font-normal text-center p-2 text-nowrap bg-[rgba(0,190,236,0.10)] border border-l-0 border-[rgba(0,190,236,0.40)] rounded-r-[10px]">
                                            Location
                                        </div>
                                    </th>
                                </tr>
                            </thead>


                            <tbody>
                                <tr>
                                    <td
                                        class="pt-10 pb-5 border-b border-[#00BEEC]  px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Jun 08, 2025 4:25 PM</td>
                                    <td
                                        class="pt-10 pb-5 border-b border-[#00BEEC]  px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        192.168.1.100</td>
                                    <td
                                        class="pt-10 pb-5 border-b border-[#00BEEC]  px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Chrome 120 / Windows</td>
                                    <td
                                        class="pt-10 pb-5 border-b border-[#00BEEC]  px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        New York, NY</td>
                                </tr>

                                <tr>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Jun 08, 2025 4:25 PM</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        192.168.1.100</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Chrome 120 / Windows</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        New York, NY</td>
                                </tr>

                                <tr>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Jun 08, 2025 4:25 PM</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        192.168.1.100</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Chrome 120 / Windows</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        New York, NY</td>
                                </tr>


                                <tr>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Jun 08, 2025 4:25 PM</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        192.168.1.100</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        Chrome 120 / Windows</td>
                                    <td
                                        class="border-b border-[#00BEEC] py-5 px-2 sm:px-4 text-[14px] text-nowrap sm:text-[16px] md:text-[18px] text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                                        New York, NY</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="flex justify-center gap-4 mt-3 md:mt-6 items-center flex-wrap">

                        <button type="submit"
                            class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] text-[16px] rounded-full bg-[rgba(0,190,236,0.10)] text-center justify-center cursor-pointer">
                            Load More
                        </button>
                    </div>
                </section>



            </div>
        </div>

    </main>
</template>

<script setup>
import { ref } from 'vue'
import AdminDeleteProfilePopup from './AdminDeleteProfilePopup.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const openRole = ref(false)
const selectedRole = ref('')

const showDeletePopup = ref(false)

function selectRole(role) {
    selectedRole.value = role
    openRole.value = false
}
</script>