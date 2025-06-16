<template>
    <main class="bg-white dark:bg-[#080808] my-token">

        <div>
            <header class="pl-6 pr-7 py-6  border-b border border-[rgba(0,190,236,0.30)]">
                <div class="flex justify-between flex-wrap">
                    <div class="text-left flex items-center gap-3 lg:gap-6 flex-wrap flex-col md:flex-row">
                        <h1 class="text-[18px] sm:text-[30px] text-black dark:text-white font-medium leading-normal sm:w-auto w-full">My Tokens</h1>
                        <p class="text-[14px] font-normal text-[rgba(0,190,236,0.60)] m-0 w-full md:w-auto">May 17, 2025
                            | Saturday</p>
                    </div>
<div class="flex justify-center items-center w-10 sm:w-12 h-10 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
  <!-- Bell icon shown in all themes -->
  <img src="../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-6 h-6" />

  <!-- Notification dot (visible in both themes, adjusts background color) -->
  <div class="absolute top-2 right-3 w-3 h-3  bg-black rounded-full flex justify-center items-center">
    <span class="w-2 h-2 bg-[#FF0000] rounded-full"></span>
  </div>
</div>
                </div>
            </header>
            <div class="bg-gray-100 dark:bg-transparent p-4 sm:p-6">
                <div class="flex mb-6 justify-between gap-3 md:gap-8 flex-wrap">
                    <div
                        class="border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] flex gap-2 items-center w-full lg:max-w-[425px] pl-3 rounded-[8px] search-box">
                        <span><img src="../images/client-portal/search-icon.svg" alt="search"></span>
                        <input id="search" type="text" placeholder="Search"
                            class="outline-0 outline-none text-black dark:text-white/60 p-2 sm:py-1.75 w-full pr-3 bg-transparent">
                    </div>


                    <div class="flex gap-4 sm:gap-6 items-center flex-wrap justify-center button-group">
                        <div class="flex gap-1 flex-wrap justify-center">
                            <button @click="selected = 'all'" :class="[
                                'text-[14px] px-3 py-1 rounded-md transition',
                                selected === 'all' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                            ]">
                                All
                            </button>

                            <button @click="selected = 'active'" :class="[
                                'text-[14px] px-3 py-1 rounded-md transition',
                                selected === 'active' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                            ]">
                                Active
                            </button>

                            <button @click="selected = 'revoked'" :class="[
                                'text-[14px] px-3 py-1 rounded-md transition',
                                selected === 'revoked' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                            ]">
                                Revoked
                            </button>
                            <button @click="selected = 'expire'" :class="[
                                'text-[14px] px-3 py-1 rounded-md transition',
                                selected === 'expire' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                            ]">
                                Expired
                            </button>
                        </div>

                        <button type="button" @click="showPopup = true"
                            class="flex gap-3 items-center bg-[rgba(0,190,236,0.10)] dark:bg-gradient-to-l dark:from-[#33EFB7] dark:to-[#00A3BE] py-2 px-4 rounded-[8px] cursor-pointer">
             <span><img src="../images/client-portal/plus.svg" alt="plus"></span> <span
                                class="text-[14px] capitalize text-[#00BEEC] dark:text-white font-medium">Create New
                                Token</span>
                        </button>
                        <CreateNewTokenPopupModal v-if="showPopup" @close="showPopup = false" />
                    </div>
                </div>


                <div class="min-h-screen text-black dark:text-white space-y-6">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <!-- Card 1 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Production API Key</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showEditPopup = true" type="button"><img
                                                src="../images/client-portal/edit.svg" alt="edit"></button></li>
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                    <li><button type="button"><img src="../images/client-portal/copy.svg"
                                                alt="copy"></button></li>
                                </ul>
                                <EditTokenPopupModel v-if="showEditPopup" @close="showEditPopup = false" />
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">750/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[72%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Expires: </label> <span> Jun 07,2025 </span></div>
                        </div>
                        <!-- Card 2 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Development Token</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showEditPopup = true" type="button"><img
                                                src="../images/client-portal/edit.svg" alt="edit"></button></li>
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                    <li><button type="button"><img src="../images/client-portal/copy.svg"
                                                alt="copy"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">750/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[30%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Expires: </label> <span> May 23,2025 </span></div>
                        </div>
                        <!-- Card 3 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Legacy API Key</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(255,0,0,0.10)] w-20 justify-center items-center rounded-2xl text-[#FF0000] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#FF0000] rounded-full"></span> Revoked
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">0/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[0%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Revoked: </label> <span> Jun 07,2025 </span></div>
                        </div>
                        <!-- Card 4 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Production API Key</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showEditPopup = true" type="button"><img
                                                src="../images/client-portal/edit.svg" alt="edit"></button></li>
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                    <li><button type="button"><img src="../images/client-portal/copy.svg"
                                                alt="copy"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">750/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[72%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Expires: </label> <span> Jun 07,2025 </span></div>
                        </div>

                        <!-- Card 5 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Development Token</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showEditPopup = true" type="button"><img
                                                src="../images/client-portal/edit.svg" alt="edit"></button></li>
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                    <li><button type="button"><img src="../images/client-portal/copy.svg"
                                                alt="copy"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">750/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[30%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Expires: </label> <span> May 23,2025 </span></div>
                        </div>

                        <!-- Card 6 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Development Token</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showEditPopup = true" type="button"><img
                                                src="../images/client-portal/edit.svg" alt="edit"></button></li>
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                    <li><button type="button"><img src="../images/client-portal/copy.svg"
                                                alt="copy"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">750/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[30%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Expires: </label> <span> May 23,2025 </span></div>
                        </div>

                        <!-- Card 7 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Legacy API Key</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(255,0,0,0.10)] w-20 justify-center items-center rounded-2xl text-[#FF0000] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#FF0000] rounded-full"></span> Revoked
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">0/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[0%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Revoked: </label> <span> Jun 07,2025 </span></div>
                        </div>

                        <!-- Card 8 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Production API Key</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showEditPopup = true" type="button"><img
                                                src="../images/client-portal/edit.svg" alt="edit"></button></li>
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                    <li><button type="button"><img src="../images/client-portal/copy.svg"
                                                alt="copy"></button></li>
                                </ul>
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">750/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[72%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Expires: </label> <span> Jun 07,2025 </span></div>
                        </div>

                        <!-- Card 9 -->
                        <div
                            class="bg-white dark:bg-transparent card-bg-type-1 dark:border  dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white text-[16px] font-medium">Legacy API Key</div>
                                <ul class="flex gap-3">
                                    <li><button @click="showDeletePopup = true" type="button"><img
                                                src="../images/client-portal/delete.svg" alt="delete"></button></li>
                                </ul>
                                <DeleteTokenPopupModel v-if="showDeletePopup" @close="showDeletePopup = false" />
                            </div>

                            <div
                                class="flex gap-2 bg-[rgba(255,0,0,0.10)] w-20 justify-center items-center rounded-2xl text-[#FF0000] text-[12px] py-1.25 leading-normal my-2">
                                <span class="w-[5px] h-[5px] bg-[#FF0000] rounded-full"></span> Revoked
                            </div>

                            <div class="flex gap-4 justify-between">
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">Quota Usage</div>
                                <div class="text-black dark:text-white/80 text-[14px] font-normal">0/1000</div>
                            </div>

                            <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                                <div class="h-full bg-primary w-[0%] rounded-full"></div>
                            </div>
                            <div class="text-black dark:text-white/80 text-[14px] font-normal flex items-center"> <label
                                    class="flex gap-1 items-center"> <span class="flex items-center"><img
                                            class="relative top-[-1px]" src="../images/client-portal/calender-gray.svg"
                                            alt="calender"></span> Revoked: </label> <span> Jun 07,2025 </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import CreateNewTokenPopupModal from '../components/CreateNewTokenPopupModel.vue'
import EditTokenPopupModel from './EditTokenPopupModel.vue'
import DeleteTokenPopupModel from './DeleteTokenPopupModel.vue'

const selected = ref('all')
const showPopup = ref(false)
const showEditPopup = ref(false)
const showDeletePopup = ref(false)
</script>