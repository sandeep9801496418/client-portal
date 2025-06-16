<template>
 <main class="bg-white dark:bg-[#080808] overflow-hidden min-h-screen text-black dark:text-white client-dashboard">
    <div>
      <header class="pl-6 pr-7 py-6  border-b  border-[rgba(0,190,236,0.30)]">
        <div class="flex justify-between flex-wrap">
          <div class="text-left flex items-center gap-3 lg:gap-6 flex-wrap flex-col md:flex-row">
            <h1 class="text-[18px] sm:text-[30px] text-black dark:text-white font-medium leading-normal w-full sm:w-auto">Client Dashboard</h1>
            <p class="text-[14px] font-normal text-[rgba(0,190,236,0.60)] m-0 w-full md:w-auto">May 17, 2025 | Saturday
            </p>
          </div>

<div class="flex justify-center items-center w-10 sm:w-12 h-10 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
  <!-- Bell icon shown in all themes -->
  <img src="../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-6 h-6" />

  <!-- Notification dot (visible in both themes, adjusts background color) -->
  <div class="absolute top-1 sm:top-2 right-2 sm:right-3 w-3 h-3  bg-black rounded-full flex justify-center items-center">
    <span class="w-2 h-2 bg-[#FF0000] rounded-full"></span>
  </div>
</div>


        </div>
      </header>
      <div class="bg-gray-100 dark:bg-transparent p-4 sm:p-6">
        <div class="flex mb-6 justify-between gap-3 md:gap-8 flex-wrap">
          <div
            class="border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] flex gap-2 items-center w-full md:max-w-[425px] pl-3 rounded-[8px] search-box">
            <span><img src="../images/client-portal/search-icon.svg" alt="search-icon" ></span>
            <input id="search" type="text" placeholder="Search"
              class="outline-0 outline-none text-white/60 p-2 sm:py-1.75 w-full pr-3 bg-transparent ">
          </div>
          <button type="button" @click="showPopup = true"
            class="flex gap-3 items-center bg-[rgba(0,190,236,0.10)] dark:bg-gradient-to-l dark:from-[#33EFB7] dark:to-[#00A3BE] py-2 px-4 rounded-[8px] cursor-pointer button-light">
            <span><img src="../images/client-portal/plus.svg" alt="plus"></span> <span
              class="text-[14px] capitalize text-[#00BEEC] dark:text-white font-medium">Create New Token</span>
          </button>
          <CreateNewTokenPopupModal v-if="showPopup" @close="showPopup = false" />
        </div>

        <div class="min-h-screen text-white space-y-6">
          <!-- Stats Grid -->
          <div class="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <!-- Card 1 -->
            <div class="bg-white dark:bg-transparent card-bg-type-1 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
              <div class="text-black dark:text-white/60 text-[16px] font-medium">API Requests Today</div>
              <div class="text-[18px] sm:text-[28px] font-medium text-black dark:text-white">5,842</div>
              <div class="text-black dark:text-white/60 text-[16px] font-medium flex gap-2 items-center"><span><img
                    src="../images/client-portal/arrow-up.svg" alt="arrow up"></span> 15% from Yesterday</div>

              <div
                class="absolute top-4 right-5 bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                <img src="../images/client-portal/uil_arrow-growth.svg" alt="API Requests Today" class="dark">
 
              </div>

            </div>
            <!-- Card 2 -->
            <div class="bg-white dark:bg-transparent card-bg-type-1 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
              <div class="text-black dark:text-white/60 text-[16px] font-medium">API Requests This Month</div>
              <div class="text-[18px] sm:text-[28px] font-medium text-black dark:text-white">145,769</div>
              <div class="text-black dark:text-white/60 text-[16px] font-medium flex gap-2 items-center"><span><img
                    src="../images/client-portal/arrow-up.svg" alt="arrow up"></span> 9% from Last Month</div>

              <div
                class="absolute top-4 right-5 bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                <img src="../images/client-portal/calender.svg" alt="API Requests This Month">
              </div>

            </div>
            <!-- Card 3 -->
            <div class="bg-white dark:bg-transparent card-bg-type-1 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
              <div class="text-black dark:text-white/60 text-[16px] font-medium">Active Tokens</div>
              <div class="text-[18px] sm:text-[28px] font-medium text-black dark:text-white">4</div>
              <div class="text-black dark:text-white/60 text-[16px] font-medium">Last Created 7 June 2025</div>

              <div
                class="absolute top-4 right-5 bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                <img src="../images/client-portal/key-icon.svg" alt="Active Tokens">
              </div>

            </div>
            <!-- Card 4 -->
            <div class="bg-white dark:bg-transparent card-bg-type-1 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
              <div class="text-black dark:text-white/60 text-[16px] font-medium flex justify-between">
                Quota Usage
              </div>
              <div class="text-[18px] sm:text-[28px] font-medium text-black dark:text-white">72%</div>
              <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden">
                <div class="h-full bg-primary w-[72%] rounded-full"></div>
              </div>

              <div
                class="absolute top-4 right-5 bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                <img src="../images/client-portal/data-usage.svg" alt="Quota Usage">
              </div>

            </div>
          </div>

          <!-- API Usage Trends -->
          <div class="bg-white dark:bg-transparent card-bg-type-2 p-4 sm:p-6 rounded-[17px] dark:border dark:border-[#18414E]">
            <div class="flex justify-between items-center mb-4 flex-wrap gap-2 sm:gap-0">
              <h2 class="text-[18px] sm:text-[24px] font-medium text-black dark:text-white">API Usage Trends</h2>
              <div class="sm:min-w-[330px] flex gap-1 flex-wrap justify-center">
                <button @click="selected = 'day'" :class="[
                  'text-[14px] px-3 py-1 rounded-md transition',
                  selected === 'day' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                ]">
                  Day
                </button>

                <button @click="selected = 'week'" :class="[
                  'text-[14px] px-3 py-1 rounded-md transition',
                  selected === 'week' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                ]">
                  Week
                </button>

                <button @click="selected = 'month'" :class="[
                  'text-[14px] px-3 py-1 rounded-md transition',
                  selected === 'month' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]'
                ]">
                  Month
                </button>
                <button class="bg-[rgba(0,190,236,0.10)] text-[14px] text-black dark:text-[#00BEEC] px-3 py-1 rounded-md flex gap-2">All
                  Tokens <img src="../images/client-portal/arrow-close.svg" alt="arrow-close"></button>
              </div>
            </div>

            <div class="flex justify-center items-cent h-37 sm:h-75 text-white/70">
              <div class=" flex justify-center gap-3 items-center flex-wrap">
                <div class="bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                  <img src="../images/client-portal/uil_arrow-growth.svg" alt="API Usage Trends">
                </div>
                <p class="m-0 text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white"> Line graph showing API usage over time
                </p>
              </div>
            </div>
          </div>

          <!-- Lower Grid (Error + Performance) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Error Distribution -->
            <div class="bg-white dark:bg-transparent card-bg-type-2 p-4 sm:p-6 rounded-[17px] dark:border dark:border-[#18414E]">
              <h2 class="text-[18px] sm:text-[24px] font-medium text-black dark:text-white mb-4">Error Distribution</h2>

              <div class="flex justify-center items-cent h-37 sm:h-75 text-white/70">
                <div class=" flex justify-center sm:justify-start gap-3 items-center flex-wrap">
                  <div class="bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                    <img src="../images/client-portal/data-usage.svg" alt="data usage">
                  </div>
                  <p class="m-0 text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white"> Pie Chart showing error types</p>
                </div>
              </div>

            </div>
            <!-- Performance Metrics -->
            <div class="bg-white dark:bg-transparent card-bg-type-2 p-4 sm:p-6 rounded-[17px] dark:border  dark:border-[#18414E]">
              <h2 class="text-[18px] sm:text-[24px] font-medium text-black dark:text-white mb-4">Performance Metrics</h2>

              <div class="flex justify-center items-center h-37 sm:h-75 text-white/70">
                <div class=" flex justify-center gap-3 items-center flex-wrap">
                  <div class="bg-[rgba(0,190,236,0.10)] w-8.5 h-8.5 flex justify-center items-center rounded-[5px]">
                    <img src="../images/client-portal/data-usage.svg" alt="data usage">
                  </div>
                  <p class="m-0 text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white">Pie Chart showing error types</p>
                </div>
              </div>

            </div>
          </div>




          <div class="flex flex-col lg:flex-row gap-4">
            <!-- Column 1 (70%) -->
            <div class="bg-white dark:bg-transparent card-bg-type-2 p-4 sm:p-6 rounded-[17px] dark:border dark:border-[#18414E] w-full lg:w-[65%]">
              <div class="flex justify-between items-center mb-2">
                <h2 class="text-[18px] sm:text-[24px] font-medium text-black dark:text-white mb-4">Latest Activity</h2>
                <a href="#" class="text-black dark:text-[#00BEEC] text-[14px] font-medium hover:underline">Views All</a>
              </div>

              <div class="text-sm text-black dark:text-white/80 md:pl-4">
                <div class="flex items-start gap-3 my-4">
                  <div
                    class="min-w-10 sm:w-12 min-h-10 sm:h-12 bg-[rgba(0,190,236,0.10)] rounded-full flex items-center justify-center">
                    <img src="../images/client-portal/key-icon.svg" alt="key">
                  </div>
                  <div>
                    <p class="text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white">New Token Created: <span
                        class="font-medium text-black dark:text-white">Production API v2</span></p>
                    <p class="text-[12px] font-normal leading-normal text-black dark:text-white/60">Today, 8:43 PM</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 my-4">
                  <div
                    class="min-w-10 sm:w-12 min-h-10 sm:h-12 bg-[rgba(0,190,236,0.10)] rounded-full flex items-center justify-center">
                    <!-- Warning icon -->
                    <img src="../images/client-portal/warning.svg" alt="warning">
                  </div>
                  <div>
                    <p class="text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white">Rate limit warning:
                      <span class="font-medium text-black dark:text-white">Test Environment</span>
                    </p>
                    <p class="text-[12px] font-normal leading-normal text-black dark:text-white/60">Yesterday, 12:10 PM</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 my-4">
                  <div
                    class="min-w-10 sm:w-12 min-h-10 sm:h-12 bg-[rgba(0,190,236,0.10)] rounded-full flex items-center justify-center">
                    <!-- Cancel/close icon -->
                    <img src="../images/client-portal/disable.svg" alt="disable">
                  </div>
                  <div>
                    <p class="text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white">Token revoked: <span
                        class="font-medium text-black dark:text-white">Development API</span></p>
                    <p class="text-[12px] font-normal leading-normal text-black dark:text-white/60">Today, 8:43 PM</p>
                  </div>
                </div>

                <div class="flex items-start gap-3 my-4">
                  <div
                    class="min-w-10 sm:w-12 min-h-10 sm:h-12 bg-[rgba(0,190,236,0.10)] rounded-full flex items-center justify-center">
                    <!-- Upload/arrow icon -->
                    <img src="../images/client-portal/tick.svg" alt="tick">
                  </div>
                  <div>
                    <p class="text-[14px] sm:text-[16px] font-medium leading-normal text-black dark:text-white">Quota increased: <span
                        class="font-medium text-black dark:text-white">+25,000 requests</span></p>
                    <p class="text-[12px] font-normal leading-normal text-black dark:text-white/60">Today, 8:43 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 2 (30%) -->
            <div class="bg-[rgba(0,190,236,0.10)] dark:bg-gradient-to-l dark:from-[#33EFB7] dark:to-[#00A3BE] p-4 sm:p-6 rounded-[17px] dark:border dark:border-[#18414E] w-full lg:w-[35%] relative">
              <div>
                <h2 class="text-[22px] sm:text-[24px] text-[#00BEEC] dark:text-white leading-normal mb-2">Need another API token?</h2>
                <p class="text-[16px] sm:text-[18px] text-[#00BEEC] dark:text-white leading-normal">Create a new token for your projects
                  with custom permissions and expiration settings.</p>
              </div>
              <div class="sm:p-6 lg:absolute bottom-5 left-0 right-0">
                <button @click="showPopup = true"
                  class="mt-6 w-full py-2 text-center bg-white text-[#00BEEC] dark:text-[#00BEEC] font-medium text-[18px] rounded-md hover:bg-white/90 flex items-center justify-center gap-2 cursor-pointer">
                  <!-- Plus icon -->
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                  </svg>
                  Create New Token
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import CreateNewTokenPopupModal from './../components/CreateNewTokenPopupModel.vue'

const selected = ref('day')
const showPopup = ref(false)
</script>
