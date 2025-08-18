<template>
    <main class="bg-white dark:bg-dark-bg min-h-screen text-black dark:text-white overflow-y-hidden">
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
                    <h1 class="font-inter text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px] font-medium leading-none">Clients Management</h1>
                    <p class="text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] text-[#00BEEC99]">May 17, 2025 | Saturday</p>
                </div>

                <div
                    class="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
                    <img src="../../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                    <div
                        class="absolute top-1 right-1 sm:top-2 sm:right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full grid place-items-center">
                        <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF0000] rounded-full"></span>
                    </div>
                </div>
            </div>
        </header>

        <div class="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-4 md:px-6 pt-4 sm:pt-6 gap-3 sm:gap-4">
            <div class="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] dark:text-white font-medium">
                New Client Creation
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
                                <AdminDeleteProfilePopupModel v-if="showDeletePopup" @close="showDeletePopup = false" />

                                <div class="flex items-center">
                                    <button id="delete" type="button"
                                        class="py-2 px-3 flex items-center gap-2 text-[#00BEEC] text-[12px] rounded-full bg-[rgba(0,190,236,0.10)] border-1 border-[#071b20] text-center justify-center cursor-pointer">
                                        <span><img src="../../images/client-portal/media.svg" alt="Update" /></span>
                                        Upload
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
                        <!-- Title -->
                        <div class="text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                            Assign Users and Tokens
                        </div>

                        <form class="pt-7 space-y-5" @submit.prevent>
                            <!-- Number of Users -->
                            <div>
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1">
                                    Enter Numbers of Users
                                </label>
                                <input type="text" placeholder="1-1000" class="h-[42px] w-full px-4 rounded-md bg-white dark:bg-[#0B1D21]
               text-sm text-black/80 dark:text-white/90
               border border-black/10 dark:border-white/20
               focus:outline-none focus:ring-2 focus:ring-sky-400/50" />
                            </div>

                            <!-- Number of Tokens -->
                            <div>
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1">
                                    Enter Number of Tokens
                                </label>
                                <input type="text" placeholder="1-1000" class="h-[42px] w-full px-4 rounded-md bg-white dark:bg-[#0B1D21]
               text-sm text-black/80 dark:text-white/90
               border border-black/10 dark:border-white/20
               focus:outline-none focus:ring-2 focus:ring-sky-400/50" />
                            </div>

                            <!-- Save button -->
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
                    class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-5 rounded-[17px] shadow-md relative">
                    <div class="text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                        Create Password
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    </div>
                    <form class="pt-7">

                        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                            <div class="mb-2 new-pass">
                                <label class="block text-[12px] text-black dark:text-white/50 mb-1" for="newPass">New
                                    Password</label>
                                <div class="relative">
                                    <input type="password" id="newPass" name="newPass" placeholder="Enter New Password"
                                        class="bg-transparent w-full px-3 py-2 text-[16px] font-medium border dark:border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-7" />
                                    <img class="absolute right-2 top-2" src="../../images/client-portal/eye.svg"
                                        alt="eye">
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
                                    for="cnfNewPass">Confirm New
                                    Password</label>
                                <div class="relative">
                                    <input type="password" id="cnfNewPass" name="cnfNewPass"
                                        placeholder="Confirm New Password"
                                        class="bg-transparent w-full px-3 py-2 text-[16px] font-medium border dark:border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-7" />
                                    <img class="absolute right-2 top-2" src="../../images/client-portal/eye.svg"
                                        alt="eye">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-4 mt-3 md:mt-6 items-center flex-wrap">

                            <button type="submit"
                                class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] text-[16px] rounded-full bg-[rgba(0,190,236,0.10)] border-1 border-[#071b20] text-center justify-center cursor-pointer">
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AdminDeleteProfilePopupModel from '../../admin/components/AdminDeleteProfilePopup.vue';

const router = useRouter()
const openRole = ref(false)
const selectedRole = ref('')

const showDeletePopup = ref(false)
</script>