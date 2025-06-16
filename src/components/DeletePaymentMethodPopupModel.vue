<template>
  <!-- Fullscreen modal wrapper -->
  <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-[6px] flex justify-center items-center p-4 modal">
    <!-- Modal -->
    <div
      class="w-full  max-w-[430px] mx-auto text-black dark:text-white rounded-xl border dark:border-cyan-500/20 p-6 pt-10 relative bg-white dark:bg-[rgba(8,8,8,0.95)] backdrop-blur-xl shadow-lg"
    >
      <!-- Close Button -->
      <button
        @click="closePopup"
        class="text-black dark:text-white text-xl hover:text-red-500 cursor-pointer w-7 h-7 flex justify-center items-center p-2 border dark:border-white rounded-full absolute top-5 right-5 close"
      >
        <img src="../images/client-portal/close-icon.svg" alt="close icon" />
      </button>

      <!-- Icon -->
      <div class="flex justify-center mb-4">
        <div class="w-16 h-16 border border-cyan-500/50 rounded-full flex items-center justify-center delete-shaddow">
          <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"
            />
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="text-center">
        <h2 class="text-black dark:text-[#00BEEC] text-[18px] font-medium mb-2">Delete Payment Method</h2>
        <p class="text-[14px] text-black dark:text-white/50 font-medium mb-6 text-wrap ">
          Are you sure you want to Delete this payment <br class=" hidden md:block">
          option? This action cannot be undone.
        </p>
      </div>

      <!-- Buttons -->
      <div class="flex justify-center gap-4">
        <button
          @click="closePopup"
          class="px-4 py-2 rounded-full border dark:border-[#00BEEC] text-[12px] font-medium w-25 cursor-pointer text-center hover:bg-[#00BEEC]/10 transition"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 rounded-full text-[#00BEEC] text-[12px] bg-[#00beec1a] w-25 cursor-pointer hover:bg-[#00BEEC]/20 transition"
        >
          Continue
        </button>
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
