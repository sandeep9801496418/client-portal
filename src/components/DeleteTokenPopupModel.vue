<template>
  <!-- Backdrop -->
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4
           bg-black/50 backdrop-blur-[6px]" @keydown.escape="closePopup" tabindex="0">
    <!-- Card -->
    <div class="relative w-[430px] max-w-full h-[315px]
             rounded-xl overflow-hidden
             text-center select-none border border-black/10 dark:border-[#00BEEC66]" role="dialog" aria-modal="true"
      aria-label="Delete Profile Picture">
      <!-- Gradient border (0.8px inner) -->
      <div class="absolute inset-0 rounded-[12px] delete-border-pointer-events"></div>

      <!-- Surface -->
      <div class="relative h-full rounded-[12px] px-6 pt-14 pb-6
               bg-light-bg text-[#0C3E45]
               dark:bg-[radial-gradient(120%_120%_at_20%_0%,#1e9fc733_0%,transparent_40%),radial-gradient(140%_120%_at_100%_100%,#2a90a91f_0%,transparent_55%),linear-gradient(180deg,#070b0e_0%,#111518_100%)]
               dark:text-white/90">
        <!-- Close -->
        <button @click="closePopup" class="absolute top-3.5 right-3.5 w-8 h-8 grid place-items-center
                 rounded-full border border-black/20 dark:border-white/30
                 hover:bg-black/5 dark:hover:border-red-400/60 dark:hover:bg-light-bg/5 transition" aria-label="Close">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-black/70 dark:text-white/80">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          </svg>
        </button>

        <!-- Icon -->
        <div class="mx-auto mb-4 w-[68px] h-[68px] rounded-full grid place-items-center
                 border border-[#00BEEC33] bg-[#00BEEC0D]
                 dark:border-[#00BEECCC] dark:bg-[#00BEEC33]">
          <img src="../images/client-portal/button.svg" alt="">
        </div>

        <!-- Title & text (unchanged content) -->
        <h2 class="text-[#00BEEC] text-[18px] font-inter font-medium font-[500px] mb-2">
          Delete Token Permanently
        </h2>
        <p class="text-[14px] text-black/60 dark:text-[#FFFFFF80] font-inter font-medium mb-8 leading-6">
         Are you sure you want to Delete this Token? This<br class="hidden sm:block" />
          action cannot be undone.
        </p>

        <!-- Actions (unchanged design) -->
        <div class="flex items-center justify-center gap-4">
          <button @click="closePopup" class="h-10 w-35 px-10 rounded-full text-[14px] font-medium
                   border border-[#00BEEC] text-[#00BEEC]
                   hover:bg-[#00BEEC1A] transition">
            Cancel
          </button>

          <button class="h-10 px-10 rounded-full text-[14px] font-medium
                   text-[#00BEEC] bg-[#00BEEC1A]
                   hover:bg-[#00BEEC29] transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);
function closePopup() { emit('close'); }
</script>

<style scoped>
/* Thin cyan inner border, like Figma ~0.8px @ 40% */
.delete-border-pointer-events::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  box-shadow: inset 0 0 0 0.8px rgba(0, 190, 236, 0.40);
  pointer-events: none;
}

/* (kept as-is) */
.delete-icon {
  background:
    radial-gradient(60% 60% at 50% 45%, rgba(46, 217, 255, 0.22), transparent 70%);
  box-shadow:
    0 0 0 1px rgba(0, 190, 236, 0.25) inset,
    0 12px 40px rgba(0, 190, 236, 0.10);
}
</style>
