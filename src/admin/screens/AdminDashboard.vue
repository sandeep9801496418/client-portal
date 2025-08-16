<template>
    <main class="bg-white dark:bg-[#080808] min-h-screen text-black dark:text-white overflow-y-hidden">
        <!-- BG Ellipses -->
        <!-- BG Ellipses - only visible in dark mode -->
        <img src="../../images/client-portal/ellipse-1924.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-[450px] top-[24px] w-[807px] h-[894px] max-w-none blur-2xl" />
        <img src="../../images/client-portal/ellipse-1926.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-0 -top-[19px] w-[239px] h-[255px] max-w-none blur-xl mt-[90px]" />
        <img src="../../images/client-portal/ellipse-1925.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-[100px] top-[250px] w-[630px] h-[702px] max-w-none blur-2xl" />


        <header class="px-4 sm:px-6 py-4 sm:py-5 border-b border-[rgba(0,190,236,0.30)]">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 md:gap-6">
                <div class="flex items-center gap-2 sm:gap-3 lg:gap-6 flex-wrap">
                    <h1 class="text-[20px] sm:text-[24px] md:text-[30px] font-medium leading-none text-black dark:text-white">Admin
                        Dashboard</h1>
                    <p class="text-[12px] sm:text-[14px] font-normal text-[rgba(0,190,236,0.60)] whitespace-nowrap">May 17, 2025 |
                        Saturday</p>
                </div>

                <div class="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                    <div class="flex-1 sm:flex-none">
                        <label for="search" class="sr-only">Search</label>
                        <div
                            class="flex items-center gap-2 rounded-xl border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] bg-transparent pl-3 pr-3 h-10 sm:h-12 md:h-[50px] focus-within:border-[rgba(0,190,236,0.50)]">
                            <img src="../../images/client-portal/search-icon.svg" alt="" class="w-4 h-4 sm:w-5 sm:h-5" />
                            <input id="search" type="text" placeholder="Search"
                                class="w-full bg-transparent outline-none dark:placeholder-white/40 placeholder-black text-black dark:text-white/80 py-2 text-sm sm:text-base" />
                        </div>
                    </div>
                    <div
                        class="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative flex-shrink-0">
                        <img src="../../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                        <div
                            class="absolute top-1 right-1 sm:top-2 sm:right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full flex justify-center items-center">
                            <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF0000] rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="p-3 sm:p-4 md:p-6">
            <!-- Top stats -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                <!-- Total Users -->
                <div
                    class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-3 sm:p-4 rounded-[12px] shadow-md">
                    <div class="flex items-center justify-between">
                        <div class="text-[12px] sm:text-[14px] font-medium text-black dark:text-white/70">Total Users</div>
                        <div class="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-md bg-[#00BEEC] dark:bg-[#00BEEC1A]">
                            <img src="../../images/client-portal/dash-1.svg" alt="Total Users" class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain">
                        </div>
                    </div>
                    <div class="mt-1 text-[20px] sm:text-[24px] md:text-[26px] font-meduim text-black dark:text-white">5,842</div>
                    <div class="mt-1 text-[10px] sm:text-[12px] text-black/70 dark:text-white/60 flex items-center gap-1">
                        ↑ 15% Since Last Month
                    </div>
                </div>

                <!-- Total Clients -->
                <div
                    class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-3 sm:p-4 rounded-[12px] shadow-md">
                    <div class="flex items-center justify-between">
                        <div class="text-[12px] sm:text-[14px] font-medium text-black dark:text-white/70">Total Clients</div>
                        <div class="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-md bg-[#00BEEC] dark:bg-[#00BEEC1A]">
                            <img src="../../images/client-portal/dash-2.svg" alt="Total Clients" class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain">
                        </div>
                    </div>
                    <div class="mt-1 text-[20px] sm:text-[24px] md:text-[26px] font-meduim text-black dark:text-white">65</div>
                    <div class="mt-1 text-[10px] sm:text-[12px] text-black/70 dark:text-white/60 flex items-center gap-1">
                        ↑ 9% Since Last Month
                    </div>
                </div>

                <!-- API Requests Today -->
                <div
                    class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] rounded-[12px] p-3 sm:p-4 shadow-md">
                    <div class="flex items-center justify-between">
                        <h3 class="text-[12px] sm:text-[14px] font-medium text-black dark:text-white/70">API Requests Today</h3>
                        <button class="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-md bg-[#00BEEC] dark:bg-[#00BEEC1A]">
                            <img src="../../images/client-portal/dash-3.svg" alt="API Requests" class="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 object-contain">
                        </button>
                    </div>
                    <div class="mt-1 text-[20px] sm:text-[24px] md:text-[26px] font-meduim leading-tight text-black dark:text-white">3.2M</div>
                    <div class="mt-2 flex flex-wrap gap-1">
                        <span
                            class="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[11px] rounded-full bg-[#00BEEC26] text-[#00BEEC]">Month:
                            53k</span>
                        <span
                            class="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[11px] rounded-full bg-[#00BEEC26] text-[#00BEEC]">Week
                            13k</span>
                    </div>
                </div>

                <!-- Active Tokens -->
                <div
                    class="bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] rounded-[12px] p-3 sm:p-4 shadow-md">
                    <div class="flex items-center justify-between">
                        <h3 class="text-[12px] sm:text-[14px] font-medium text-black dark:text-white/70">Active Tokens</h3>
                        <button class="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center rounded-md bg-[#00BEEC] dark:bg-[#00BEEC1A]">
                            <img src="../../images/client-portal/dash-4.svg" alt="Active Tokens" class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain">
                        </button>
                    </div>
                    <div class="mt-1 flex items-baseline gap-1">
                        <span class="text-[20px] sm:text-[24px] md:text-[26px] font-meduim leading-tight text-black dark:text-white">137</span>
                        <span class="text-[10px] sm:text-[12px] font-medium text-black/60 dark:text-white/50">/200</span>
                    </div>
                    <div class="mt-2 flex flex-wrap gap-1">
                        <span
                            class="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[11px] rounded-full bg-[#00BEEC26] text-[#00BEEC]">Expiry:
                            23</span>
                        <span
                            class="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[11px] rounded-full bg-[#00BEEC26] text-[#00BEEC]">Inactive
                            24</span>
                    </div>
                </div>
            </div>




            <!-- Middle row: Trends + Top Clients -->
            <div class="mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                <!-- API Request Trends -->
                <div
                    class=" bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-4 sm:p-5 rounded-[16px] shadow-md">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                        <div class="font-inter text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]  font-medium text-black dark:text-white">
                            API Request Trends
                        </div>
                        <div class="flex gap-1 flex-wrap justify-center sm:min-w-[330px]">
                            <button @click="selected = 'day'"
                                :class="['text-[12px] sm:text-[14px] px-2 sm:px-3 py-1 rounded-md transition', selected === 'day' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]']">Day</button>
                            <button @click="selected = 'week'"
                                :class="['text-[12px] sm:text-[14px] px-2 sm:px-3 py-1 rounded-md transition', selected === 'week' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]']">Week</button>
                            <button @click="selected = 'month'"
                                :class="['text-[12px] sm:text-[14px] px-2 sm:px-3 py-1 rounded-md transition', selected === 'month' ? 'bg-primary text-black dark:text-white' : 'bg-[rgba(0,190,236,0.10)] text-[#00BEEC]']">Month</button>
                        </div>
                    </div>

                    <div class="h-56 sm:h-64 md:h-72 lg:h-80">
                        <!-- legend -->
                        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-3">
                            <div class="flex items-center gap-1.5 sm:gap-2">
                                <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#00BEEC]"></span>
                                <span class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-black/70 dark:text-white/70">Blue
                                    Present</span>
                            </div>
                            <div class="flex items-center gap-1.5 sm:gap-2">
                                <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#27E5B0]"></span>
                                <span class="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-black/70 dark:text-white/70">Green
                                    Present</span>
                            </div>
                        </div>

                        <!-- chart area -->
                        <div class="relative h-[calc(100%-1.5rem)] sm:h-[calc(100%-1.75rem)]">
                            <!-- Y-axis ticks -->
                            <div
                                class="absolute left-0 top-2 bottom-7 w-6 sm:w-8 md:w-10 flex flex-col-reverse justify-between text-[8px] sm:text-[9px] md:text-[11px] text-black/60 dark:text-white/60">
                                <span v-for="(t, ti) in yTicks" :key="ti">{{ t }}</span>
                            </div>

                            <!-- grid + border -->
                            <div class="absolute inset-y-2 right-0 left-6 sm:left-8 md:left-10 rounded-xl border border-white/10 dark:border-white/10"
                                :style="{
                                    backgroundImage:
                                        'repeating-linear-gradient(to top, rgba(255,255,255,0.12) 0 1px, transparent 1px 28px),' +
                                        'repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0 1px, transparent 1px calc(100%/' + buckets.length + '))',
                                    backgroundPosition: 'left bottom, left bottom',
                                    backgroundRepeat: 'repeat, repeat'
                                }">
                            </div>

                            <!-- bars -->
                            <div class="absolute inset-y-4 left-6 sm:left-8 md:left-10 right-2 flex items-end justify-between px-1 sm:px-2 md:px-4">
                                <template v-for="(b, i) in buckets" :key="i">
                                    <div class="relative flex flex-col items-center w-6 sm:w-8 md:w-10 lg:w-12">
                                        <!-- stacked bar (now relative so we can anchor the chip to its top) -->
                                        <div
                                            class="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-md overflow-visible flex flex-col justify-end">

                                            <!-- value chip positioned ABOVE the bar -->
                                            <div class="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                                                :style="{ bottom: `calc(${b.currPct + b.prevPct}% + 6px)` }">
                                                <div
                                                    class="relative overflow-hidden flex flex-col items-center justify-center
                                                    w-[40px] sm:w-[48px] md:w-[56px] h-[32px] sm:h-[38px] md:h-[45px] gap-[1px] sm:gap-[2px] px-[6px] sm:px-[8px] md:px-[10px] py-[1px] sm:py-[2px] md:py-[3px]
                                                    rounded-[6px] border border-[#0BD1F24D]
                                                    backdrop-blur-[60px]
                                                    dark:bg-[linear-gradient(180deg,rgba(34,215,255,0.03)_0%,rgba(38,33,73,0.02)_100%),radial-gradient(51.83%_94.53%_at_58.78%_107.81%,rgba(42,144,169,0.6)_0%,rgba(38,33,73,0)_100%)]
                                                    dark:bg-[linear-gradient(180deg,rgba(34,215,255,0.08)_0%,rgba(38,33,73,0.05)_100%),radial-gradient(51.83%_94.53%_at_58.78%_107.81%,rgba(42,144,169,0.8)_0%,rgba(38,33,73,0)_100%)]">
                                                    <span
                                                        class="text-[8px] sm:text-[10px] md:text-[12px] leading-none font-medium text-black/70 dark:text-white/70">
                                                        {{ b.blueShare }}%
                                                    </span>
                                                    <span
                                                        class="text-[10px] sm:text-[12px] md:text-[14px] leading-none font-medium text-black dark:text-white">
                                                        {{ b.total }}
                                                    </span>
                                                </div>

                                            </div>

                                            <!-- blue top -->
                                            <div class="w-full rounded-b-none -mt-[1px] rounded-md bg-[#00BEEC] transition-[height] duration-300"
                                                :style="{ height: b.currPct + '%' }"></div>
                                            <!-- green bottom -->
                                            <div class="w-full rounded-b-none rounded-b-md bg-[#27E5B0] transition-[height] duration-300"
                                                :style="{ height: b.prevPct + '%' }"></div>
                                        </div>

                                        <!-- label -->
                                        <span
                                            class="mt-1 sm:mt-2 text-[8px] sm:text-[9px] md:text-[11px] text-black/70 dark:text-white/60">{{
                                                b.label }}</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>



                <!-- Top 5 Clients by Volume -->
                <div
                    class=" bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-4 sm:p-5 rounded-[16px] shadow-md">
                    <div class="flex items-center justify-between mb-4">
                        <div
                            class="font-inter text-[16px] sm:text-[18px] md:text-[24px] font-medium text-black dark:text-white">
                            Top 5 Clients by Volume</div>
                        <a href="#" class="text-[14px] sm:text-[16px] font-medium text-[#00BEEC]">Views All</a>
                    </div>

                    <ul class="divide-y divide-white/0">
                        <li class="flex items-center justify-between py-2">
                            <div class="flex items-center gap-2 sm:gap-3">
                                <img src="../../images/client-portal/person-1.svg "
                                    class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover" alt="">
                                <span class="font-inter text-[14px] sm:text-[16px] text-black dark:text-white">Robert Kiyosaki</span>
                            </div>
                            <span class="font-inter text-[12px] sm:text-[16px] text-black/70 dark:text-white/60">1.2k Requests</span>
                        </li>

                        <li class="flex items-center justify-between py-2">
                            <div class="flex items-center gap-2 sm:gap-3">
                                <img src="../../images/client-portal/person-2.svg"
                                    class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover" alt="">
                                <span class="font-inter text-[14px] sm:text-[16px] text-black dark:text-white">Wade Warren</span>
                            </div>
                            <span class="font-inter text-[12px] sm:text-[16px] text-black/70 dark:text-white/60">374 Requests</span>
                        </li>

                        <li class="flex items-center justify-between py-2">
                            <div class="flex items-center gap-2 sm:gap-3">
                                <img src="../../images/client-portal/person-3.svg"
                                    class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover" alt="">
                                <span class="font-inter text-[14px] sm:text-[16px] text-black dark:text-white">Albert Flores</span>
                            </div>
                            <span class="font-inter text-[12px] sm:text-[16px] text-black/70 dark:text-white/60">88 Requests</span>
                        </li>

                        <li class="flex items-center justify-between py-2">
                            <div class="flex items-center gap-2 sm:gap-3">
                                <img src="../../images/client-portal/person-4.svg"
                                    class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover" alt="">
                                <span class="font-inter text-[14px] sm:text-[16px] text-black dark:text-white">Cody Fisher</span>
                            </div>
                            <span class="font-inter text-[12px] sm:text-[16px] text-black/70 dark:text-white/60">2k Requests</span>
                        </li>

                        <li class="flex items-center justify-between py-2">
                            <div class="flex items-center gap-2 sm:gap-3">
                                <img src="../../images/client-portal/person-5.svg"
                                    class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover" alt="">
                                <span class="font-inter text-[14px] sm:text-[16px] text-black dark:text-white">Marvin McKinney</span>
                            </div>
                            <span class="font-inter text-[12px] sm:text-[16px] text-black/70 dark:text-white/60">233k Requests</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom row: Latest Activity + Highlighted Errors -->
            <div class="mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                <!-- Latest Activity -->
                <div
                    class=" bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-4 sm:p-5 rounded-[16px] shadow-md">
                    <div class="flex items-center justify-between mb-2">
                        <div class="font-inter text-[16px] sm:text-[18px] md:text-[24px] font-medium text-black dark:text-white">Latest
                            Activity
                        </div>
                        <a href="#" class="text-[12px] sm:text-[14px] font-medium text-[#00BEEC]">Views All</a>
                    </div>

                    <div class="space-y-3 sm:space-y-4 mt-4">
                        <div class="flex items-start gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full grid place-items-center">
                                <img src="../../images/client-portal/person-6.svg" alt="" class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] text-black dark:text-white">
                                    Albert Flores created new API token
                                </p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60">2 min ago</p>
                            </div>
                            <span
                                class="ml-auto text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-full bg-[rgba(0,190,236,0.12)] text-[#00FF62] flex-shrink-0">Token</span>
                        </div>

                        <div class="flex items-start gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full grid place-items-center">
                                <img src="../../images/client-portal/person-7.svg" alt="" class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] text-black dark:text-white">Wade Warren Added client</p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60">40 min ago</p>
                            </div>
                            <span
                                class="ml-auto text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 flex-shrink-0">Client</span>
                        </div>

                        <div class="flex items-start gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full grid place-items-center ">
                                <img src="../../images/client-portal/person-8.svg" alt="" class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] text-black dark:text-white">Kevin has revoked Access of inactive
                                    Users</p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60">1 hour ago</p>
                            </div>
                            <span
                                class="ml-auto text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-full bg-[#00D9FF1A] text-[#00D9FF] flex-shrink-0">User</span>
                        </div>

                        <div class="flex items-start gap-2 sm:gap-3">
                            <div class="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full grid place-items-center">
                                <img src="../../images/client-portal/person-9.svg" alt="" class="avatar w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] text-black dark:text-white">Devon Lane Add new Token</p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60">2 hour ago</p>
                            </div>
                            <span
                                class="ml-auto text-[10px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-full bg-[rgba(0,190,236,0.12)] text-[#00FF62] flex-shrink-0">Token</span>
                        </div>
                    </div>
                </div>

                <!-- Highlighted Errors -->
                <div
                    class=" bg-white dark:bg-[#FFFFFF0D] dark:border dark:border-[#00BEEC66] p-4 sm:p-5 rounded-[16px] shadow-md">
                    <div class="font-inter text-[16px] sm:text-[18px] md:text-[24px] font-medium text-black dark:text-white mb-4">
                        Highlighted
                        Errors</div>

                    <ul class="space-y-2 sm:space-y-3">
                        <!-- Row -->
                        <li
                            class="relative flex items-center justify-between p-3 sm:p-4 rounded-xl bg-black/5 dark:bg-white/5 px-8 sm:px-10">
                            <span class="absolute left-0 top-0 h-full w-[3px] sm:w-[4px] rounded-sm bg-[#FF000099]"></span>
                            <div class="pr-2 sm:pr-3 flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] font-medium text-black dark:text-white leading-tight">Limit
                                    Exceeded</p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60 leading-tight">
                                    Client: TechCo (ID: 28) - IP: 102.168145
                                </p>
                            </div>
                            <span class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60 flex-shrink-0">10:20 AM</span>
                        </li>

                        <li
                            class="relative flex items-center justify-between p-3 sm:p-4 rounded-xl bg-black/5 dark:bg-white/5 px-8 sm:px-10">
                            <span class="absolute left-0 top-0 h-full w-[3px] sm:w-[4px] rounded-sm bg-[#FF000099]"></span>
                            <div class="pr-2 sm:pr-3 flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] font-medium text-black dark:text-white leading-tight">Limit
                                    Exceeded</p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60 leading-tight">
                                    Client: TechCo (ID: 28) - IP: 102.168145
                                </p>
                            </div>
                            <span class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60 flex-shrink-0">10:20 AM</span>
                        </li>

                        <li
                            class="relative flex items-center justify-between p-3 sm:p-4 rounded-xl bg-black/5 dark:bg-white/5 px-8 sm:px-10">
                            <span class="absolute left-0 top-0 h-full w-[3px] sm:w-[4px] rounded-sm bg-[#FF000099]"></span>
                            <div class="pr-2 sm:pr-3 flex-1 min-w-0">
                                <p class="text-[14px] sm:text-[16px] font-medium text-black dark:text-white leading-tight">Limit
                                    Exceeded</p>
                                <p class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60 leading-tight">
                                    Client: TechCo (ID: 28) - IP: 102.168145
                                </p>
                            </div>
                            <span class="text-[10px] sm:text-[12px] text-black/60 dark:text-white/60 flex-shrink-0">10:20 AM</span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const selected = ref('day') // your existing state

// static data (edit as you like)
const chartData = {
    day: [
        { label: '12:00', current: 82, previous: 18 }, // blue, green
        { label: '2:00', current: 63, previous: 30 },
        { label: '4:00', current: 62, previous: 40 },
        { label: '6:00', current: 72, previous: 40 },
        { label: '8:00', current: 59, previous: 35 },
        { label: '10:00', current: 45, previous: 20 },
    ],
    week: [
        { label: '12:00', current: 82, previous: 18 }, // blue, green
        { label: '2:00', current: 63, previous: 30 },
        { label: '4:00', current: 62, previous: 40 },
        { label: '6:00', current: 72, previous: 40 },
        { label: '8:00', current: 59, previous: 35 },
        { label: '10:00', current: 45, previous: 20 },
    ],
    month: [
        { label: '12:00', current: 82, previous: 18 }, // blue, green
        { label: '2:00', current: 63, previous: 30 },
        { label: '4:00', current: 62, previous: 40 },
        { label: '6:00', current: 72, previous: 40 },
        { label: '8:00', current: 59, previous: 35 },
        { label: '10:00', current: 45, previous: 20 },
    ]
}

// nice max for the visible period (round up to /20)
const yMax = computed(() => {
    const rows = chartData[selected.value]
    const m = Math.max(...rows.map(d => d.current + d.previous))
    return Math.ceil(m / 20) * 20 || 20
})

// ticks 0..yMax step 20
const yTicks = computed(() => {
    const out = []
    for (let v = 0; v <= yMax.value; v += 20) out.push(v)
    return out
})

// buckets used by the template
const buckets = computed(() =>
    chartData[selected.value].map(d => {
        const total = d.current + d.previous
        return {
            ...d,
            total,
            blueShare: total ? Math.round((d.current / total) * 100) : 0, // % chip
            currPct: Math.round((d.current / yMax.value) * 100),        // blue height
            prevPct: Math.round((d.previous / yMax.value) * 100),        // green height
        }
    })
)
</script>
