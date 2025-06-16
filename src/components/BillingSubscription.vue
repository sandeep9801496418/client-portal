<template>
  <main class="bg-white dark:bg-[#080808] billing-subscription">
    <div>

      <!-- Header -->
      <header class="pl-6 pr-7 py-6 border-b border-[rgba(0,190,236,0.30)]">
        <div class="flex justify-between flex-wrap items-center">
          <div class="text-left flex items-center gap-3 lg:gap-6 flex-wrap flex-col md:flex-row">
            <h1 class="text-[18px] sm:text-[30px] text-black dark:text-white font-medium leading-normal w-full">
              Billing & Subscription
            </h1>
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
      <!-- Header -->
      <div class=" bg-gray-100 dark:bg-transparent p-4 sm:p-6">
        <div class="min-h-screen  text-black dark:text-white space-y-6">
          <!-- Stats Grid -->
          <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div
              class="bg-white dark:bg-transparent card-bg-type-2 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">

              <div class="flex justify-between gap-4 flex-wrap items-center">
                <div class="flex items-center gap-3">
                  <div class=" text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                    Basic
                  </div>

                  <div
                    class="flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[12px] py-1 leading-normal my-2">
                    <span class="w-[5px] h-[5px] bg-[#00FF62] rounded-full"></span> Active
                  </div>
                </div>

                <h4 class="text-[18px] sm:text-[24px]  text-[#00BEEC] font-bold">$10/<span class="font-normal">mon</span></h4>

              </div>

              <p class="text-[14px] sm:text-[16px] font-normal text-[#00BEEC] mt-6 mb-7">Lorem ipsum dolor sit amet consectetur.
                Elementum ullam corper porttitor ullam corper porttitor </p>

              <h2 class="text-[18px]  text-black dark:text-white/80 font-medium">Its Includes:</h2>

              <ul class="mb-6 mt-4">
                <li class="flex gap-2 items-center mb-2">
                  <div class="w-4 h-4"><img src="../images/client-portal/includes.svg" alt="includes"></div>
                  <div class=" text-black dark:text-white/60 font-normal text-[14px] sm:text-[16px]">Real-time stock price updates
                  </div>
                </li>
                <li class="flex gap-2 items-center mb-2">
                  <div class="w-4 h-4"><img src="../images/client-portal/includes.svg" alt="includes"></div>
                  <div class=" text-black dark:text-white/60 font-normal text-[14px] sm:text-[16px]">Limited stock watchlist (5 stocks)
                  </div>
                </li>
                <li class="flex gap-2 items-center mb-2">
                  <div class="w-4 h-4"><img src="../images/client-portal/includes.svg" alt="includes"></div>
                  <div class=" text-black dark:text-white/60 font-normal text-[14px] sm:text-[16px]">Basic market insights & news</div>
                </li>
                <li class="flex gap-2 items-center">
                  <div class="w-4 h-4"><img src="../images/client-portal/includes.svg" alt="includes"></div>
                  <div class=" text-black dark:text-white/60 font-normal text-[14px] sm:text-[16px]">Daily closing price alerts</div>
                </li>
              </ul>

              <div class="flex justify-between gap-6 text-[14px] sm:text-[16px]  text-black dark:text-white">
                <p>Next Payment</p>
                <p>14 Aug, 2025</p>
              </div>


              <div class=" flex justify-center gap-4 mt-3 md:mt-6 items-center flex-wrap">
                <button type="submit"
                  class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] font-medium text-[14px] sm:text-[16px] rounded-full bg-[rgba(0,190,236,0.10)]  text-center justify-center cursor-pointer">
                  Update Plan
                </button>
              </div>


            </div>


            <!-- Card 2 -->
            <div
              class="bg-white dark:bg-transparent card-bg-type-2 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
              <div class="flex justify-between gap-6">
                <div class=" text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
                  Payment Information
                </div>
              </div>
              <p class="text-[14px] sm:text-[16px] font-normal text-[#00BEEC] mt-6 mb-7">Manage and update your preferred payment
                options seamlessly. </p>




              <div class="space-y-4  text-black dark:text-white payment-information">

                <!-- Card 1 - Visa -->
                <div
                  class="flex items-center justify-between bg-white/5 border border-[#00BEEC] p-2 sm:p-4 rounded-xl shadow-md">
                  <div class="flex items-center gap-2 sm:gap-4">

                    <div
                      class="border border-white rounded-full w-15 sm:w-18 h-8 p-2 sm:h-11 flex items-center justify-center visa-card">
                      <img src="../images/client-portal/visa.svg" alt="Visa" class="w-13 h-auto" />
                    </div>

                    <div>
                      <p class="text-[14px] sm text-[14px]:sm:text-[16px] font-medium tracking-wider text-[#00BEEC] leading-normal">
                        **** **** **** 6391</p>
                      <p class="text-[12px] sm:text-[14px] font-normal  text-black dark:text-white/80">Expires on
                        02/2025</p>
                    </div>
                  </div>
                  <div class="flex gap-2 mt-4 sm:mt-0">
                    <button @click="showEditPopup = true" type="button"
                      class="w-7 h-7 flex justify-center place-items-center rounded-full border border-white cursor-pointer edit">
                      <img src="../images/client-portal/edit-white.svg" alt="edit">
                    </button>
                    <button @click="showDeletePopup = true" type="button"
                      class="w-7 h-7 flex justify-center items-center rounded-full border border-red-500 cursor-pointer delete">
                      <img src="../images/client-portal/delete-red.svg" alt="delete">
                    </button>
                    <EditPaymentMethodPopupModel v-if="showEditPopup" @close="showEditPopup = false" />
                    <DeletePaymentMethodPopupModel v-if="showDeletePopup" @close="showDeletePopup = false" />
                  </div>
                </div>

                <!-- Card 2 - Mastercard -->
                <div
                  class="flex items-center justify-between bg-white/5 border border-[#00BEEC] p-2 sm:p-4 rounded-xl shadow-md">
                  <div class="flex items-center gap-2 sm:gap-4">
                    <div
                      class="border border-white rounded-full w-15 sm:w-18 h-8 p-2 sm:h-11 flex justify-center items-center master-card">
                      <img src="../images/client-portal/master-card.svg" alt="MasterCard" class="h-auto" />
                    </div>
                    <div>
                      <p class="text-[14px] sm text-[14px]:sm:text-[16px] font-medium tracking-wider text-[#00BEEC] leading-normal">
                        **** **** **** 7867</p>
                      <p class="text-[12px] sm:text-[14px] font-normal  text-black dark:text-white/80">Expires on
                        02/2025</p>
                    </div>
                  </div>
                  <div class="flex gap-2 mt-4 sm:mt-0">
                    <button @click="showEditPopup = true" type="button"
                      class="w-7 h-7 flex justify-center place-items-center rounded-full border border-white cursor-pointer edit">
                      <img src="../images/client-portal/edit-white.svg" alt="edit">
                    </button>
                    <button @click="showDeletePopup = true" type="button"
                      class="w-7 h-7 flex justify-center items-center rounded-full border border-red-500 cursor-pointer delete">
                      <img src="../images/client-portal/delete-red.svg" alt="delete">
                    </button>
                  </div>
                </div>

                <!-- Add Payment Method -->
                <button @click="showPopup = true" type="button"
                  class="flex w-full sm:flex-row items-center justify-between bg-white/5 border border-[#00BEEC] py-4 px-4 rounded-xl shadow-md cursor-pointer">
                  <span class="font-medium text-[#00BEEC] text-[14px] sm:text-[16px] sm:text-[18px]">Add Payment Method</span>
                  <span class="text-xl"><img src="../images/client-portal/add-payment.svg" alt="add payment"></span>
                </button>
                <AddPaymentMethodPopupModel v-if="showPopup" @close="showPopup = false" />
              </div>

            </div>

          </section>



          <section
            class="bg-white dark:bg-transparent card-bg-type-2 p-4 sm:p-6 rounded-[17px] dark:border dark:border-[#18414E]">

            <div>
              <h2 class="text-[18px] sm:text-[24px] font-medium  text-black dark:text-white mb-7">Usage This Month</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-7">

                <!-- API Request -->
                <div data-section="API Request">
                  <div class="flex gap-4 justify-between">
                    <div class=" text-black dark:text-white text-[14px] font-normal">API Request</div>
                    <div class=" text-black dark:text-white text-[14px] font-normal">7,500/10,000</div>
                  </div>
                  <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                    <div class="h-full bg-primary w-[72%] rounded-full"></div>
                  </div>
                </div>


                <!-- Storage Used -->
                <div data-section="Storage Used">
                  <div class="flex gap-4 justify-between">
                    <div class=" text-black dark:text-white text-[14px] font-normal">Storage Used</div>
                    <div class=" text-black dark:text-white text-[14px] font-normal">4/5 GB</div>
                  </div>
                  <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                    <div class="h-full bg-primary w-[40%] rounded-full"></div>
                  </div>
                </div>


                <!-- Active Tokens -->
                <div data-section="Active Tokens">
                  <div class="flex gap-4 justify-between">
                    <div class=" text-black dark:text-white text-[14px] font-normal">Active Tokens</div>
                    <div class=" text-black dark:text-white text-[14px] font-normal">12/15</div>
                  </div>
                  <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                    <div class="h-full bg-primary w-[60%] rounded-full"></div>
                  </div>
                </div>


                <!-- Bandwidth -->
                <div data-section="Bandwidth">
                  <div class="flex gap-4 justify-between">
                    <div class=" text-black dark:text-white text-[14px] font-normal">Bandwidth</div>
                    <div class=" text-black dark:text-white text-[14px] font-normal">180/250 GB</div>
                  </div>
                  <div class="mt-2 h-3 w-full border border-[#00A4BE] rounded-full overflow-hidden my-2">
                    <div class="h-full bg-primary w-[60%] rounded-full"></div>
                  </div>
                </div>


              </div>
            </div>

          </section>

          <!--  Billing History  -->
          <section
            class="bg-white dark:bg-transparent card-bg-type-2 dark:border dark:border-[#18414E] p-5 rounded-[17px] shadow-md relative">
            <div class=" text-black dark:text-white text-[18px] sm:text-[24px] font-medium">
              Billing History
            </div>

            <div class="overflow-auto pb-5 lg:pb-0 mb-8 lg:mb-0">
              <table class="table-auto border-separate border-spacing-0 w-full mt-4">
                <thead>
                  <tr>
                    <th class="p-0">
                      <div
                        class="font-[500] text-[#00BEEC] px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px] leading-normal text-center p-2 bg-[rgba(0,190,236,0.10)] border border-r-0 border-[rgba(0,190,236,0.40)] rounded-l-[10px]">
                        Invoice</div>
                    </th>
                    <th class="p-0">
                      <div class="font-[500] text-[#00BEEC] px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  leading-normal text-center p-2 bg-[rgba(0,190,236,0.10)]  border-t border-b border-[rgba(0,190,236,0.40)]">
                        Date
                      </div>
                    </th>


                    <th class="p-0">
                       <div class="font-[500] text-[#00BEEC] px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  leading-normal text-center p-2 bg-[rgba(0,190,236,0.10)]  border-t border-b border-[rgba(0,190,236,0.40)]">
                       Amount
                      </div>
                    </th>
                    <th class="p-0">
                      <div class="font-[500] text-[#00BEEC] px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  leading-normal text-center p-2 bg-[rgba(0,190,236,0.10)]  border-t border-b border-[rgba(0,190,236,0.40)]">
                        Status
                      </div>
                    </th>


                    <th class="p-0">
                      <div
                        class="font-[500] text-[#00BEEC] px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px] leading-normal text-center p-2 bg-[rgba(0,190,236,0.10)] border border-l-0 border-[rgba(0,190,236,0.40)] rounded-r-[10px]">
                        Export</div>
                    </th>


                  </tr>
                </thead>

                <tbody>
                  <tr class="">
                    <td
                      class="border-b border-[#00BEEC] pt-10 pb-5  px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      #INV-2025-07-004</td>
                    <td
                      class="border-b border-[#00BEEC] pt-10 pb-5  px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      Jun 07,2025</td>
                    <td
                      class="border-b border-[#00BEEC] pt-10 pb-5  px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      $10.99
                    </td>
                    <td
                      class="border-b border-[#00BEEC] pt-10 pb-5  px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class=" flex gap-2 bg-[rgba(0,255,98,0.10)] w-16 justify-center items-center rounded-2xl text-[#00FF62] text-[18px] py-1 leading-normal my-2 font-normal mx-auto">
                        Paid
                      </div>
                    </td>

                    <td
                      class="border-b border-[#00BEEC] pt-10 pb-5  px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 w-16.5 justify-center items-center rounded-2xl py-1 leading-normal my-2 font-normal mx-auto">
                        <img src="../images/client-portal/cloud.svg" alt="cloud">
                      </div>
                    </td>
                  </tr>


                  <tr class="">
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      #INV-2025-07-004</td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      Jun 07,2025</td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      $10.99
                    </td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 bg-[rgba(255,0,0,0.10)] w-20 justify-center items-center rounded-2xl text-[#FF0000] text-[18px] py-1 leading-normal my-2 font-normal mx-auto">
                        Failed
                      </div>
                    </td>

                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 w-16.5 justify-center items-center rounded-2xl py-1 leading-normal my-2 font-normal mx-auto">
                        <img src="../images/client-portal/cloud.svg" alt="cloud">
                      </div>
                    </td>
                  </tr>


                  <tr class="">
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      #INV-2025-07-004</td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      Jun 07,2025</td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      $10.99
                    </td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 bg-[rgba(0,255,98,0.10)] text-[#00FF62] w-16 justify-center items-center rounded-2xl text-[18px] py-1 leading-normal my-2 font-normal mx-auto">
                        Paid
                      </div>
                    </td>

                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 w-16.5 justify-center items-center rounded-2xl py-1 leading-normal my-2 font-normal mx-auto">
                        <img src="../images/client-portal/cloud.svg" alt="cloud">
                      </div>
                    </td>
                  </tr>

                  <tr class="">
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      #INV-2025-07-004</td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      Jun 07,2025</td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      $10.99
                    </td>
                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 bg-[rgba(255,0,0,0.10)] w-20 justify-center items-center rounded-2xl text-[#FF0000] text-[18px] py-1 leading-normal my-2 font-normal mx-auto">
                        Failed
                      </div>
                    </td>

                    <td
                      class=" border-b border-[#00BEEC] py-2 px-2 sm:px-4 text-[14px] text-nowrap sm text-[14px]:sm:text-[16px] md:text-[18px]  text-black dark:text-white font-normal text-center border-b-1 border-[rgba(0,190,236,0.40)]">
                      <div
                        class="flex gap-2 w-16.5 justify-center items-center rounded-2xl py-1 leading-normal my-2 font-normal mx-auto">
                        <img src="../images/client-portal/cloud.svg" alt="cloud">
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>


            <div class="flex justify-center gap-4 mt-3 md:mt-6 items-center flex-wrap">

              <button type="submit"
                class="py-2 px-4 flex items-center gap-2 text-[#00BEEC] text-[14px] sm:text-[16px] rounded-full bg-[rgba(0,190,236,0.10)] text-center justify-center cursor-pointer">
                Load More
              </button>
            </div>
          </section>



        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import AddPaymentMethodPopupModel from './AddPaymentMethodPopupModel.vue'
import EditPaymentMethodPopupModel from './EditPaymentMethodPopupModel.vue'
import DeletePaymentMethodPopupModel from './DeletePaymentMethodPopupModel.vue'

const showPopup = ref(false)
const showEditPopup = ref(false)
const showDeletePopup = ref(false)
</script>