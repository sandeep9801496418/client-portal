<template>
  <!-- Fullscreen modal wrapper with dark glass effect -->
  <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-[6px] flex justify-center items-center p-4">
    <!-- Modal -->
    <div
      class="w-full max-w-[525px] bg-white dark:bg-[rgba(8,8,8,0.75)] backdrop-blur-xl mx-auto text-black dark:text-white rounded-xl border border-cyan-500/20 shadow-lg"
    >
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-0 py-3 px-6 border-b dark:border-cyan-500/20">
        <h2 class="text-[24px] font-medium text-black dark:text-[#00BEEC]">Add Payment Method</h2>
        <button
          @click="closePopup"
          class="text-white text-xl hover:text-red-500 cursor-pointer w-7 h-7 flex justify-center items-center p-2 border border-white rounded-full"
        >
          <img src="../images/client-portal/close-icon.svg" alt="close icon" />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 pt-3">
        <form class="space-y-4">
          <!-- Card Holder -->
          <div>
            <label class="block mb-2 text-[14px] font-normal text-black dark:text-white/50">Card Holder<span>*</span></label>
            <input
              type="text"
              placeholder="Abdul Moiz"
              class="placeholder:dark:text-white/80 text-black dark:text-white/80 w-full px-4 py-2 bg-transparent border dark:border-[#00BEEC] rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <!-- Card Number -->
          <div>
            <label class="block mb-2 text-[14px] font-normal text-black dark:text-white/50">
              Credit/Debit Card Number<span>*</span>
            </label>
            <input
              type="text"
              placeholder="****  ****  **** 8603"
              class="placeholder:dark:text-white/80 text-black dark:text-white/80 w-full px-4 py-2 bg-transparent border dark:border-[#00BEEC] rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <!-- Expiration and CVC -->
          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block mb-2 text-[14px] font-normal text-black dark:text-white/50">Expiration Date<span>*</span></label>
              <input
                type="text"
                placeholder="09-June-2025"
                class="placeholder:dark:text-white/80 text-black dark:text-white/80 w-full px-4 py-2 bg-transparent border dark:border-[#00BEEC] rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div class="w-1/3">
              <label class="block mb-2 text-[14px] font-normal text-black dark:text-white/50">CVC<span>*</span></label>
              <input
                type="text"
                placeholder="836"
                class="placeholder:dark:text-white/80 text-black dark:text-white/80 w-full px-4 py-2 bg-transparent border dark:border-[#00BEEC] rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <!-- Footer -->
          <div class="flex justify-between items-center pt-4 flex-wrap gap-6">
            <p class="text-[12px] text-black dark:text-[#00BEEC]">* This field is mandatory</p>
            <div class="flex justify-center sm:justify-end gap-4">
              <button
                @click="closePopup"
                type="button"
                class="px-4 py-2 rounded-full border dark:border-[#00BEEC] text-[12px] font-medium w-25 cursor-pointer text-center hover:bg-[#00BEEC]/10 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 rounded-full text-black dark:text-[#00BEEC] text-[12px] bg-[#00beec1a] w-25 cursor-pointer hover:bg-[#00BEEC]/20 transition"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])

function closePopup() {
  emit('close')
}
</script>
