<template>
  <!-- Fullscreen modal wrapper -->
  <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-[6px] flex justify-center items-center p-4 modal">
    <!-- Modal box -->
    <div
      class="relative overflow-hidden w-full max-w-[525px]
         rounded-[10px] border bg-white text-black
         dark:text-white dark:border-[#00BEEC66]
         shadow-lg backdrop-blur-xl
         dark:bg-[radial-gradient(120%_140%_at_100%_-30%,rgba(34,215,255,0.30)_0%,transparent_55%),radial-gradient(140%_120%_at_0%_120%,rgba(42,144,169,0.18)_0%,transparent_60%),linear-gradient(180deg,#0b1418_0%,#0a1215_100%)]">

         <div aria-hidden="true"
     class="pointer-events-none absolute inset-0 rounded-[10px]
            [box-shadow:inset_0_0_0_.8px_rgba(0,190,236,.40)]"></div>

      <!-- Modal Header -->
      <div class="flex justify-between items-center border-b py-3 px-6
                border-black/10 dark:border-[#00BEEC33] mb-6">
        <h2 class="text-[24px] font-medium">Create New Token</h2>
        <button @click="closePopup" class="w-8 h-8 grid place-items-center rounded-full
                       hover:bg-black/5 dark:hover:bg-white/5">
          <img src="../images/client-portal/close-icon.svg" alt="close icon" />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6 pt-0 max-h-[80vh] overflow-y-auto">
        <!-- Token Name -->
        <div class="mb-6">
          <label for="tokenName" class="block mb-1 text-[14px] font-medium text-black dark:text-white/60">Token
            Name</label>
          <input id="tokenName" type="text" placeholder="e.g, Weather API Key" class="w-full h-10 px-4 rounded-md bg-transparent
                 border border-black/20 text-black placeholder-black/50
                 focus:outline-none focus:ring-2 focus:ring-[#00BEEC]
                 dark:border-[#00BEEC66] dark:text-white dark:placeholder-white/60" />
        </div>

        <!-- Permissions & Expiration -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Permissions -->
          <div>
            <h3 class="text-[14px] font-medium mb-2 text-black dark:text-white/60">Permissions & Scopes</h3>
            <div class="space-y-2 text-[14px] text-black dark:text-white/70">
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> Current Weather</label>
              <label class="flex items-center gap-2"><input type="checkbox" checked
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> Forecast</label>
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> Historical Data</label>
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> Air Quality</label>
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> Alerts</label>
            </div>
          </div>

          <!-- Expiration -->
          <div>
            <h3 class="text-[14px] font-medium mb-2 text-black dark:text-white/60">Token Expiration</h3>
            <div class="space-y-2 text-[14px] text-black dark:text-white/70">
              <label class="flex items-center gap-2"><input type="checkbox" checked
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> 1 Day</label>
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> 7 Day</label>
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> 30 Day</label>
              <label class="flex items-center gap-2"><input type="checkbox"
                  class="accent-[#0C3E45] dark:accent-[#00BEEC]"> Never Expires</label>
            </div>
          </div>
        </div>

        <!-- IP Whitelist -->
        <div class="mb-4">
          <label for="ipWhitelist" class="block mb-2 text-[14px] font-medium text-black dark:text-white/60">IP Whitelist
            (Optional)</label>
          <textarea id="ipWhitelist" rows="4"
            placeholder="Enter IP addresses, one per line&#10;e.g., 192.168.1.1&#10;10.0.0.1" class="w-full px-4 py-2 rounded-md bg-transparent resize-none
                 border border-black/20 text-black placeholder-black/45
                 focus:outline-none focus:ring-2 focus:ring-[#00BEEC]
                 dark:border-[#00BEEC66] dark:text-white dark:placeholder-white/60"></textarea>
        </div>
        <p class="text-[12px] text-black/60 dark:text-white/55 mb-6">
          Leave empty to allow access from any IP address
        </p>

        <!-- Buttons -->
        <div class="flex justify-center sm:justify-end gap-4">
          <button @click="closePopup" class="px-4 py-2 rounded-full border border-black/20 text-[12px]
                       hover:bg-black/5 text-[#00BEEC]
                       dark:border-[#00BEEC] dark:hover:bg-[#00BEEC1A]">
            Cancel
          </button>
          <button class="px-4 py-2 rounded-full text-[#00BEEC] text-[12px]
                 bg-[#00beec1a] hover:bg-[#00BEEC29]">
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
