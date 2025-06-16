<template>
  <!-- Fullscreen modal wrapper -->
  <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-[6px] flex justify-center items-center p-4 modal">
    <!-- Modal box -->
    <div
      class="w-full max-w-[525px] text-black dark:text-white rounded-xl border dark:border-cyan-500/20 shadow-lg backdrop-blur-xl bg-white dark:bg-[rgba(8,8,8,0.95)]"
    >
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-6 border-b dark:border-cyan-500/20 py-3 px-6">
        <h2 class="text-[24px] font-medium text-black dark:text-white">Create New Token</h2>
        <button @click="closePopup" class="text-black dark:text-white text-xl hover:text-red-500 cursor-pointer close">
          <img src="../images/client-portal/close-icon.svg" alt="close icon" />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6 pt-0 max-h-[80vh] overflow-y-auto">
        <!-- Token Name -->
        <div class="mb-6">
          <label for="tokenName" class="block mb-1 text-[14px] font-medium text-black dark:text-white/50 leading-5">Token Name</label>
          <input
            type="text"
            id="tokenName"
            placeholder="e.g, Weather API Key"
            class="w-full px-4 py-2 bg-transparent border dark:border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black dark:text-white text-[16px] dark:placeholder:text-white/70"
          />
        </div>

        <!-- Permissions & Expiration -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Permissions -->
          <div>
            <h3 class="text-[14px] font-medium leading-5 mb-2 text-black dark:text-white/50">Permissions & Scopes</h3>
            <div class="space-y-2 text-sm text-black dark:text-white/50">
              <label class="flex items-center gap-2 text-[14px] font-normal"><input type="checkbox" class="dark:accent-cyan-500" /> Current Weather</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" checked class="dark:accent-cyan-500" /> Forecast</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" class="dark:accent-cyan-500" /> Historical Data</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" class="dark:accent-cyan-500" /> Air Quality</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" class="dark:accent-cyan-500" /> Alerts</label>
            </div>
          </div>

          <!-- Expiration -->
          <div>
            <h3 class="text-[14px] font-medium leading-5 mb-3 text-black dark:text-white/50">Token Expiration</h3>
            <div class="space-y-2 text-sm text-black dark:text-white/50">
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" checked class="dark:accent-cyan-500" /> 1 Day</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" class="dark:accent-cyan-500" /> 7 Day</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" class="dark:accent-cyan-500" /> 30 Day</label>
              <label class="flex items-center gap-2 text-[14px] font-normal mb-3"><input type="checkbox" class="dark:accent-cyan-500" /> Never Expires</label>
            </div>
          </div>
        </div>

        <!-- IP Whitelist -->
        <div class="mb-4">
          <label for="ipWhitelist" class="block mb-2 text-[14px] font-medium text-black dark:text-white/50">IP Whitelist (Optional)</label>
          <textarea
            id="ipWhitelist"
            rows="4"
            placeholder="Enter IP addresses, one per line&#10;e.g., 192.168.1.1&#10;10.0.0.1"
            class="w-full px-4 py-2 bg-transparent border dark:border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black dark:text-white placeholder:dark:text-white/70 resize-none"
          ></textarea>
        </div>
        <p class="text-[12px] font-medium leading-5 text-white/50 mb-6">Leave empty to allow access from any IP address</p>

        <!-- Buttons -->
        <div class="flex justify-center sm:justify-end gap-4">
          <button
            @click="closePopup"
            class="px-4 py-2 rounded-full border dark:border-[#00BEEC] text-[12px] font-medium w-25 cursor-pointer text-center hover:bg-[#00BEEC]/10 transition"
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 rounded-full text-[#00BEEC] text-[12px] bg-[#00beec1a] cursor-pointer hover:bg-[#00BEEC]/20 transition"
          >
            Create Token
          </button>
        </div>
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
