<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <!-- Active Days -->
    <div class="rounded-2xl border border-black/10 p-5 md:p-6 bg-white text-[#0C3E45]
                dark:border-[#00BEEC26] dark:bg-[#FFFFFF0F] dark:text-white/90">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <img src="../../images/client-portal/calendar-12.svg" alt="">
          <h4 class="text-[16px] font-[400px]">Active Days</h4>
        </div>
        <div class="flex gap-2">
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">−</button>
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">＋</button>
        </div>
      </div>
      <div class="text-[24px] font-semibold leading-none">235</div>
      <p class="text-sm text-black/60 dark:text-white/55 mt-2">Days Remaining</p>
    </div>

    <!-- API Scopes (vertically centered) -->
    <div class="rounded-2xl border border-black/10 p-5 md:p-6 bg-white text-[#0C3E45]
                dark:border-[#00BEEC26] dark:bg-[#FFFFFF0F] dark:text-white/90
                flex flex-col justify-center min-h-[152px]">
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <img src="../../images/client-portal/tdesign-12.svg" alt="">
          <h4 class="text-[16px] font-medium">API Scopes</h4>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                     text-emerald-700 bg-emerald-100
                     dark:text-[#00FF62] dark:bg-[#00FF621A]">read:users</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                     text-emerald-700 bg-emerald-100
                     dark:text-[#00FF62] dark:bg-[#00FF621A]">write:orders</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                     text-emerald-700 bg-emerald-100
                     dark:text-[#00FF62] dark:bg-[#00FF621A]">admin:settings</span>
        <button class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                       text-emerald-700 bg-emerald-200
                       dark:text-[#00FF62] dark:bg-[#00FF621A]">+ Add More</button>
      </div>
    </div>

    <!-- Concurrent Requests -->
    <div class="rounded-2xl border border-black/10 p-5 md:p-6 bg-white text-[#0C3E45]
                dark:border-[#00BEEC26] dark:bg-[#FFFFFF0F] dark:text-white/90">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <img src="../../images/client-portal/meter-12.svg" alt="">
          <h4 class="text-[16px] font-medium">Concurrent Requests</h4>
        </div>
        <div class="flex gap-2">
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">−</button>
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">＋</button>
        </div>
      </div>
      <div class="text-[24px] font-semibold leading-none">42</div>
      <p class="text-sm text-black/60 dark:text-white/55 mt-2">Max simultaneous</p>
    </div>

    <!-- Daily Request Limit -->
    <div class="rounded-2xl border border-black/10 p-5 md:p-6 bg-white text-[#0C3E45]
                dark:border-[#00BEEC26] dark:bg-[#FFFFFF0F] dark:text-white/90">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <img src="../../images/client-portal/time-12.svg" alt="">
          <h4 class="text-[16px] font-medium">Daily Request Limit</h4>
        </div>
        <div class="flex gap-2">
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">−</button>
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">＋</button>
        </div>
      </div>
      <div class="text-[24px] font-semibold leading-none">8000</div>
      <p class="text-sm text-black/60 dark:text-white/55 mt-2">Request per day</p>
    </div>

    <!-- Expiration Date -->
    <div class="rounded-2xl border border-black/10 p-5 md:p-6 bg-white text-[#0C3E45]
                dark:border-[#00BEEC26] dark:bg-[#FFFFFF0F] dark:text-white/90">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <img src="../../images/client-portal/calendar-12.svg" alt="">
          <h4 class="text-[16px] font-medium">Expiration Date</h4>
        </div>
        <div class="flex gap-2">
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">−</button>
          <button
            class="w-10 h-10 md:w-11 md:h-11 grid place-items-center rounded-lg border
                   border-black/15 text-[#0C3E45] hover:bg-black/5
                   dark:bg-[#FFFFFF1A]
                   dark:border-white dark:text-white dark:hover:bg-white/5
                   text-[20px] md:text-[24px] leading-none">＋</button>
        </div>
      </div>
      <div class="text-[24px] font-semibold leading-tight">June 21, 2025</div>
      <p class="text-sm text-black/60 dark:text-white/55 mt-2">Configuration expires</p>
    </div>

    <!-- Allowed Regions (vertically centered) -->
    <div class="rounded-2xl border border-black/10 p-5 md:p-6 bg-white text-[#0C3E45]
                dark:border-[#00BEEC26] dark:bg-[#FFFFFF0F] dark:text-white/90
                flex flex-col justify-center min-h-[152px]">
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <img src="../../images/client-portal/world-12.svg" alt="">
          <h4 class="text-[16px] font-medium">Allowed Regions</h4>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                     text-emerald-700 bg-emerald-100
                     dark:text-[#00FF62] dark:bg-[#00FF621A]">US-East</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                     text-emerald-700 bg-emerald-100
                     dark:text-[#00FF62] dark:bg-[#00FF621A]">EU-West</span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                     text-emerald-700 bg-emerald-100
                     dark:text-[#00FF62] dark:bg-[#00FF621A]">Asia-Pacific</span>
        <button class="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium
                       text-emerald-700 bg-emerald-100
                       dark:text-[#00FF62] dark:bg-[#00FF621A]">+ Add More</button>
      </div>
    </div>

  </div>
</template>
