<template>

    <!-- Filters / actions row -->
    <div ref="filtersRef" class="relative z-40 w-full mx-auto py-4 sm:py-6">
        <div class="mt-2 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 justify-between">
            <!-- LEFT: search -->
            <div class="flex-1 min-w-[260px] max-w-[360px] w-full">
                <div class="flex items-center gap-2 rounded-[10px] h-[37px] pl-3 pr-3 border border-[#00beec4d]
                 bg-white dark:bg-transparent text-black dark:text-white/90">
                    <img src="../../images/client-portal/search-icon.svg" alt=""
                        class="w-4 h-4 sm:w-5 sm:h-5 invert dark:invert-0 opacity-80" />
                    <input v-model="query" type="text" placeholder="Search name or Token..."
                        class="w-full bg-transparent outline-none placeholder-black/45 dark:placeholder-[#8ED7E4]/60 text-sm sm:text-[14px]" />
                </div>
            </div>

            <!-- RIGHT: filters + buttons -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <!-- Status dropdown -->
                <div class="relative">
                    <button @click="toggle('status')" class="h-[37px] w-full sm:w-auto md:w-[165px] px-3 sm:px-5 rounded-[6px] flex items-center justify-between gap-2
                   bg-white/80 dark:bg-[#0A2327]
                   text-sm sm:text-[14px] text-black/80 dark:text-[#00BEEC] border dark:border-none">
                        {{ selected.status }}
                        <img src="../../images/client-portal/arrow-close.svg"
                            :class="['transition-transform w-3 h-3 sm:w-4 sm:h-4', open.status ? 'rotate-180' : '']" alt="" />
                    </button>

                    <div v-if="open.status" class="absolute z-50 mt-2 rounded-[8px] border border-[#00beec26]
         bg-white text-[#0C3E45] dark:bg-[#072126] dark:text-[#A9F3FF]
         shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.55)]
         overflow-hidden w-[200px]">
                        <div class="flex flex-col">
                            <!-- header row -->
                            <button @click="select('status', headerLabels.status)" class="w-full flex items-center justify-between px-4 py-2 text-[14px]
             text-[#0A6B7A] dark:text-[#8ED7E4] hover:bg-[#EAF8FB] dark:hover:bg-[#0D2C31]">
                                {{ headerLabels.status }}
                                <img src='../../images/client-portal/arrow-close.svg' class="rotate-180 opacity-80"
                                    alt="">
                            </button>
                            <div class="border-b border-[#00beec14] dark:border-[#00beec1f]"></div>

                            <!-- options + dividers -->
                            <template v-for="(opt, i) in options.status" :key="`status-${opt}`">
                                <button @click="select('status', opt)" class="w-full text-left px-4 py-2 text-[14px] text-[#0C3E45] dark:text-[#A9F3FF]
               hover:bg-[#EAF8FB] dark:hover:bg-[#0D2C31]">
                                    {{ opt }}
                                </button>
                                <div v-if="i !== options.status.length - 1"
                                    class="border-b border-[#00beec14] dark:border-[#00beec1f]"></div>
                            </template>
                        </div>
                    </div>

                </div>

                <!-- Date range dropdown -->
                <div class="relative">
                        <button @click="toggle('date')" class="h-[37px] w-full sm:w-auto md:w-[165px] px-3 sm:px-5 rounded-[6px] flex items-center justify-between gap-2
           bg-white/80 dark:bg-[#0A2327]
           text-xs sm:text-sm md:text-[14px] text-black/80 dark:text-[#00BEEC] border dark:border-none">
                            <span class="hidden sm:inline">Date Range</span>
                            <span class="sm:hidden">Date</span>
                            <img src="../../images/client-portal/calender-11.svg" class="w-3 h-3 sm:w-4 sm:h-4" alt="">
                        </button>

                        <!-- Calendar panel -->
                        <div v-if="open.date" class="absolute z-50 mt-2 right-[-100px] sm:right-auto w-[280px] sm:w-[320px] md:w-[360px] rounded-[12px] p-3 sm:p-4 overflow-hidden
                            border border-[#00BEEC66]
                            bg-white text-[#0C3E45] shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                            dark:bg-[radial-gradient(130%_120%_at_50%_-10%,#0f171b_0%,#0b1418_55%,#0a1619_100%)]
                            dark:text-white/90">
                            <!-- Header -->
                            <div class="flex items-center justify-between mb-2 sm:mb-3">
                                <div class="text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                                    {{ monthNames[viewMonth] }} <span class="opacity-90">{{ viewYear }}</span>
                                </div>
                                <div class="flex gap-1 sm:gap-2">
                                    <button @click="shiftMonth(-1)"
                                        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 grid place-items-center rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
                                        <svg viewBox="0 0 24 24" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor"
                                            stroke-width="1.8">
                                            <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <button @click="shiftMonth(1)"
                                        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 grid place-items-center rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
                                        <svg viewBox="0 0 24 24" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor"
                                            stroke-width="1.8">
                                            <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Week header -->
                            <div class="grid grid-cols-7 text-center text-[10px] sm:text-[11px] md:text-[12px] opacity-70 mb-1 sm:mb-2">
                                <span v-for="w in weekNames" :key="w">{{ w }}</span>
                            </div>

                            <!-- Days grid -->
                            <div class="grid grid-cols-7 gap-0.5 sm:gap-1">
                                <div v-for="(cell, i) in calendarCells" :key="i"
                                    class="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 mx-auto grid place-items-center rounded-full text-[11px] sm:text-[12px] md:text-[14px]" :class="[
                                        !cell.inMonth ? 'opacity-40' : 'opacity-100',
                                        cell.isToday ? 'ring-1 ring-[#00BEEC66]' : '',
                                    ]">
                                    {{ cell.day }}
                                </div>
                            </div>
                        </div>
                    </div>



                <!-- Clear filters -->
                <button @click="clearAll" class="relative h-[37px] px-[1px] text-sm sm:text-[14px] font-medium flex items-center gap-[5px]
                 hover:bg-black/90 transition-colors rounded-md">
                    <span class="absolute inset-0 rounded-md bg-gradient-to-r from-[#00A3BE] to-[#33EFB7]"></span>
                    <span class="relative flex items-center gap-[5px] dark:bg-black rounded-md px-[12px] py-[7px]">
                        <span
                            class="bg-gradient-to-r from-[#00A3BE] to-[#33EFB7] bg-clip-text text-white dark:text-transparent">
                            Clear All Filters
                        </span>
                    </span>
                </button>

                <!-- Create new token -->
                <button @click="showPopup = true"
                    class="h-[37px] px-[12px] sm:px-[14px] rounded-[8px] text-sm sm:text-[14px] font-medium text-white flex items-center gap-[6px]"
                    style="background: linear-gradient(90deg,#00A3BE 0%, #33EFB7 100%);">
                    <span class="text-lg leading-none">+</span> Create New Token
                </button>

                <CreateNewTokenPopupModel v-if="showPopup" @close="showPopup = false" />

            </div>
        </div>
    </div>

    <!-- TOKENS TABLE CARD -->
    <section class="rounded-2xl border z-10
                  border-[#00beec3d] bg-white/90 text-black
                  dark:border-[#00BEEC66] dark:bg-[#FFFFFF0D] dark:text-white backdrop-blur overflow-x-auto">
        <!-- Head -->
        <div class="px-3 sm:px-4 md:px-5 lg:px-6 py-2 m-3 sm:m-4 md:m-5 border border-[#00beec3d] dark:border-[#00BEEC66]
                rounded-xl dark:bg-[#00BEEC0D] min-w-[800px]">
            <div class="grid grid-cols-[1.6fr,1fr,1.2fr,1fr,1fr,124px] gap-2 sm:gap-3 md:gap-4
                  text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] font-medium text-[#007D95] dark:text-[#00BEEC]">
                <span class="min-w-[180px]">Token Name/ID</span>
                <span class="min-w-[80px]">Status</span>
                <span class="min-w-[100px]">Usage</span>
                <span class="min-w-[120px]">Creation Date</span>
                <span class="min-w-[100px]">Expiration</span>
                <span class="text-center pr-2 min-w-[124px]">Actions</span>
            </div>
        </div>

        <!-- Rows -->
        <div class="px-1 sm:px-5 md:px-3 mx-3 sm:mx-5 min-w-[800px]">
            <div v-for="t in pagedTokens" :key="t.id"
                class="grid grid-cols-[1.6fr,1fr,1.2fr,1fr,1fr,124px] gap-2 items-center py-3 min-w-[800px]">
                <!-- name / id -->
                <div class="min-w-[120px]">
                    <div class="font-medium text-sm sm:text-base">{{ t.name }}</div>
                    <div class="text-[11px] sm:text-[13px] opacity-70">{{ t.token }}</div>
                </div>

                <!-- status -->
                <div class="min-w-[80px]"><span :class="statusChip(t.status)">{{ t.status }}</span></div>

                <!-- usage -->
                <div class="flex items-center gap-2 sm:gap-4 min-w-[100px]">
                    <div class="min-w-[50px] sm:min-w-[60px] text-right text-sm sm:text-base">{{ formatNumber(t.usage) }}</div>
                    <div class="relative w-[80px] sm:w-[110px] h-[12px] sm:h-[16px] rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                        <div class="absolute inset-y-0 left-0 rounded-full"
                            :style="{ width: t.usagePct + '%', background: 'linear-gradient(90deg,#33EFB7 0%, #00A3BE 100%)' }">
                        </div>
                    </div>
                </div>

                <!-- dates -->
                <div class="min-w-[100px] text-sm sm:text-base">{{ t.created }}</div>
                <div class="min-w-[100px] text-sm sm:text-base">{{ t.expires }}</div>

                <!-- actions -->
                <div class="flex justify-end gap-2 min-w-[124px]">
                    <button @click="showEditPopup = true"
                        class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] transition">
                        <img src='../../images/client-portal/edit-11.svg' alt="Edit" class="w-3 h-3 sm:w-4 sm:h-4">
                    </button>
                    <button @click="showDeletePopup = true"
                        class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] transition">
                        <img src='../../images/client-portal/delete-11.svg' alt="Delete" class="w-3 h-3 sm:w-4 sm:h-4">
                    </button>
                </div>

                <!-- divider -->
                <div class="col-span-6 h-[1px] bg-[#00beec33] dark:bg-[#00BEEC33]"></div>
            </div>
        </div>

        <!-- Footer / pagination -->
        <div
            class="flex flex-col sm:flex-row items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-[#00beec3d] dark:border-[#00beec26] rounded-b-2xl gap-3 sm:gap-0">
            <span class="text-sm opacity-70 cursor-pointer select-none"
                :class="{ 'opacity-40 pointer-events-none': currentPage === 1 }" @click="prevPage">Prev</span>

            <div class="flex items-center gap-1 sm:gap-2">
                <button v-for="p in visiblePages" :key="p.key" :disabled="p.type === 'dots'"
                    @click="p.type === 'page' && goToPage(p.num)" :class="[
                        'min-w-[32px] sm:min-w-[36px] h-[32px] sm:h-[36px] rounded-md text-xs sm:text-sm flex items-center justify-center',
                        p.type === 'dots' && 'opacity-60 cursor-default',
                        p.type === 'page' && currentPage === p.num
                            ? 'text-white bg-[#00BBD6]'
                            : 'border border-[#00beec40] text-black dark:text-white hover:bg-[#00beec12]'
                    ]">
                    <span v-if="p.type === 'dots'">…</span>
                    <span v-else>{{ p.num }}</span>
                </button>
            </div>

            <span class="text-sm opacity-70 cursor-pointer select-none"
                :class="{ 'opacity-40 pointer-events-none': currentPage === totalPages }" @click="nextPage">Next</span>
        </div>
    </section>
    <EditTokenPopupModel v-if="showEditPopup" @close="showEditPopup = false" />
    <DeleteTokenPopupModel v-if="showDeletePopup" @close="showDeletePopup = false" />

</template>

<script setup>
import { reactive, ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import CreateNewTokenPopupModel from '../../components/CreateNewTokenPopupModel.vue';
import EditTokenPopupModel from '../../components/EditTokenPopupModel.vue';
import DeleteTokenPopupModel from '../../components/DeleteTokenPopupModel.vue';

const query = ref('')

const showPopup = ref(false)
const showEditPopup = ref(false)
const showDeletePopup = ref(false)
const view = ref(new Date());
const viewYear = computed(() => view.value.getFullYear());
const viewMonth = computed(() => view.value.getMonth());

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const headerLabels = { status: 'All Status', date: 'Date Range' }
const options = {
    status: ['Active', 'Inactive'],
    date: ['All Time', 'Last 7 days', 'Last 30 days', 'This Year'],
}
const selected = reactive({ status: headerLabels.status, date: headerLabels.date })
const open = reactive({ status: false, date: false })
const filtersRef = ref(null)

function closeAll() { Object.keys(open).forEach(k => (open[k] = false)) }
function toggle(k) { Object.keys(open).forEach(key => (open[key] = key === k ? !open[key] : false)) }
function select(k, v) { selected[k] = v; closeAll() }
function clearAll() { selected.status = headerLabels.status; selected.date = headerLabels.date; query.value = '' }

function onDocClick(e) { if (!filtersRef.value) return; if (!filtersRef.value.contains(e.target)) closeAll() }
function onKey(e) { if (e.key === 'Escape') closeAll() }
onMounted(() => { document.addEventListener('click', onDocClick); document.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onKey) })

// ---- TOKENS DATA ----
const tokens = ref([
    { id: 1, name: 'api-token-001', token: 'tk_1234567890abcdef', status: 'Active', usage: 1289, usagePct: 76, created: '2024-05-02', createdAt: new Date('2024-05-02').getTime(), expires: '2025-01-15' },
    { id: 2, name: 'api-token-002', token: 'tk_abcdef1234567890', status: 'Inactive', usage: 948, usagePct: 48, created: '2024-05-02', createdAt: new Date('2024-05-02').getTime(), expires: '2025-01-15' },
    { id: 3, name: 'api-token-003', token: 'tk_zxy987654321cba', status: 'Active', usage: 590, usagePct: 31, created: '2024-05-12', createdAt: new Date('2024-05-12').getTime(), expires: '2025-01-15' },
    { id: 4, name: 'api-token-004', token: 'tk_qwerty09876lkjh', status: 'Inactive', usage: 1289, usagePct: 62, created: '2024-06-02', createdAt: new Date('2024-06-02').getTime(), expires: '2025-01-15' },
    ...Array.from({ length: 20 }).map((_, i) => {
        const d = new Date(2024, (i % 12), 1 + (i % 28))
        return {
            id: 5 + i,
            name: `api-token-${String(5 + i).padStart(3, '0')}`,
            token: `tk_${(Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10)).slice(0, 16)}`,
            status: i % 2 ? 'Inactive' : 'Active',
            usage: 200 + (i * 37) % 1200,
            usagePct: 10 + (i * 9) % 90,
            created: d.toISOString().slice(0, 10),
            createdAt: d.getTime(),
            expires: '2025-01-15',
        }
    }),
])


const perPage = ref(4)
const currentPage = ref(1)

function rangeFilter(ts) {
    const now = Date.now()
    const oneDay = 86400000
    switch (selected.date) {
        case 'Last 7 days': return ts >= now - 7 * oneDay
        case 'Last 30 days': return ts >= now - 30 * oneDay
        case 'This Year': return new Date(ts).getFullYear() === new Date().getFullYear()
        default: return true // All Time or Date Range label
    }
}

const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    const byStatus = selected.status === headerLabels.status ? null : selected.status

    return tokens.value.filter(t => {
        const matchesQ = !q || t.name.toLowerCase().includes(q) || t.token.toLowerCase().includes(q)
        const matchesStatus = !byStatus || t.status === byStatus
        const matchesDate = rangeFilter(t.createdAt)
        return matchesQ && matchesStatus && matchesDate
    })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)))
const pagedTokens = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    return filtered.value.slice(start, start + perPage.value)
})
watchEffect(() => { if (currentPage.value > totalPages.value) currentPage.value = totalPages.value })

function goToPage(n) { if (n < 1 || n > totalPages.value) return; currentPage.value = n }
function prevPage() { if (currentPage.value > 1) goToPage(currentPage.value - 1) }
function nextPage() { if (currentPage.value < totalPages.value) goToPage(currentPage.value + 1) }

const visiblePages = computed(() => {
    const pages = []
    const total = totalPages.value
    const cur = currentPage.value
    const addPage = n => pages.push({ type: 'page', num: n, key: `p${n}` })
    const addDots = key => pages.push({ type: 'dots', key })

    if (total <= 5) {
        // Show all pages if 5 or fewer
        for (let i = 1; i <= total; i++) addPage(i)
    } else {
        // Always show first page
        addPage(1)
        
        if (cur <= 3) {
            // Near the beginning: show 1, 2, 3, ..., total
            addPage(2)
            addPage(3)
            addDots('d1')
            addPage(total)
        } else if (cur >= total - 2) {
            // Near the end: show 1, ..., total-2, total-1, total
            addDots('d1')
            addPage(total - 2)
            addPage(total - 1)
            addPage(total)
        } else {
            // In the middle: show 1, ..., cur-1, cur, cur+1, ..., total
            addDots('d1')
            addPage(cur - 1)
            addPage(cur)
            addPage(cur + 1)
            addDots('d2')
            addPage(total)
        }
    }
    return pages
})

function statusChip(st) {
    const base = 'inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-[13px] font-medium'
    return st === 'Active'
        ? `${base} text-white dark:text-[#00FF62] bg-[#00FF62] dark:bg-[#00FF621A]`
        : `${base} text-white dark:text-[#FF0000] bg-[#FF0000] dark:bg-[#FF000026]`
}
function formatNumber(n) { return n.toLocaleString() }

function shiftMonth(delta) {
    const d = new Date(view.value);
    d.setMonth(d.getMonth() + delta);
    view.value = d;
}

const calendarCells = computed(() => {
    const first = new Date(viewYear.value, viewMonth.value, 1);
    let startOffset = first.getDay() - 1; // Sun=0 -> -1 (wrap to Mon-first)
    if (startOffset < 0) startOffset = 6;

    const gridStart = new Date(first);
    gridStart.setDate(first.getDate() - startOffset);

    return Array.from({ length: 42 }).map((_, i) => {
        const d = new Date(gridStart);
        d.setDate(gridStart.getDate() + i);
        return {
            day: d.getDate(),
            inMonth: d.getMonth() === viewMonth.value,
            isToday:
                d.getFullYear() === new Date().getFullYear() &&
                d.getMonth() === new Date().getMonth() &&
                d.getDate() === new Date().getDate()
        };
    });
});

</script>
