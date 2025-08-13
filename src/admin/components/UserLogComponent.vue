<template>
  <!-- Filters / actions row -->
  <div ref="filtersRef" class="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div class="mt-2 flex flex-wrap items-center gap-4 justify-between">
      <!-- LEFT: search -->
      <div class="flex-1 min-w-[260px] max-w-[360px]">
        <div class="flex items-center gap-2 rounded-[10px] h-[37px] pl-3 pr-3 border border-[#00beec4d]
                 bg-white dark:bg-transparent text-black dark:text-white/90">
          <img src="../../images/client-portal/search-icon.svg" alt=""
            class="w-5 h-5 invert dark:invert-0 opacity-80" />
          <input v-model="query" type="text" placeholder="Search name or IP Address..."
            class="w-full bg-transparent outline-none placeholder-black/45 dark:placeholder-[#8ED7E4]/60 text-[14px]" />
        </div>
      </div>

      <!-- RIGHT: filters + buttons -->
      <div class="flex flex-wrap items-center gap-3">
        <!-- Actions dropdown -->
        <div class="relative">
          <button @click="toggle('action')" class="h-[37px] md:w-[165px] px-5 rounded-[6px] flex items-center justify-between gap-2
           bg-white/80 dark:bg-[#0A2327]
           text-[14px] text-black/80 dark:text-[#00BEEC] border dark:border-none">
            {{ selected.action }}
            <img src="../../images/client-portal/arrow-close.svg"
              :class="['transition-transform', open.action ? 'rotate-180' : '']" alt="" />
          </button>

          <div v-if="open.action" class="absolute z-50 mt-2 rounded-[8px] border border-[#00beec26]
           bg-white text-[#0C3E45] dark:bg-[#072126] dark:text-[#A9F3FF]
           shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.55)]
           overflow-hidden w-[200px]">
            <div class="flex flex-col">
              <!-- header row -->
              <button @click="select('action', headerLabels.action)" class="w-full flex items-center justify-between px-4 py-2 text-[14px]
               text-[#0A6B7A] dark:text-[#8ED7E4] hover:bg-[#EAF8FB] dark:hover:bg-[#0D2C31]">
                {{ headerLabels.action }}
                <img src='../../images/client-portal/arrow-close.svg' class="rotate-180 opacity-80" alt="">
              </button>
              <div class="border-b border-[#00beec14] dark:border-[#00beec1f]"></div>

              <!-- options + dividers -->
              <template v-for="(opt, i) in options.action" :key="`action-${opt}`">
                <button @click="select('action', opt)" class="w-full text-left px-4 py-2 text-[14px]
                 text-[#0C3E45] dark:text-[#A9F3FF]
                 hover:bg-[#EAF8FB] dark:hover:bg-[#0D2C31]">
                  {{ opt }}
                </button>
                <div v-if="i !== options.action.length - 1" class="border-b border-[#00beec14] dark:border-[#00beec1f]">
                </div>
              </template>
            </div>
          </div>
        </div>


        <!-- Date range dropdown -->
        <div class="relative">
          <button @click="toggle('date')" class="h-[37px] md:w-[165px] px-5 rounded-[6px] flex items-center justify-between gap-2
                   bg-white/80 dark:bg-[#0A2327]
                   text-[14px] text-black/80 dark:text-[#00BEEC] border dark:border-none">
            Date Range
            <img src="../../images/client-portal/calender-11.svg" class="w-4 h-4" alt="">
          </button>

          <!-- Calendar panel (UI only) -->
          <div v-if="open.date" class="absolute z-50 mt-2 w-[360px] rounded-[12px] p-4 overflow-hidden
                      border border-[#00BEEC66]
                      bg-white text-[#0C3E45] shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                      dark:bg-[radial-gradient(130%_120%_at_50%_-10%,#0f171b_0%,#0b1418_55%,#0a1619_100%)]
                      dark:text-white/90">
            <div class="flex items-center justify-between mb-3">
              <div class="text-[22px] font-semibold">
                {{ monthNames[viewMonth] }} <span class="opacity-90">{{ viewYear }}</span>
              </div>
              <div class="flex gap-2">
                <button @click="shiftMonth(-1)"
                  class="w-8 h-8 grid place-items-center rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button @click="shiftMonth(1)"
                  class="w-8 h-8 grid place-items-center rounded-full border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5">
                  <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-7 text-center text-[12px] opacity-70 mb-2">
              <span v-for="w in weekNames" :key="w">{{ w }}</span>
            </div>

            <div class="grid grid-cols-7 gap-1">
              <div v-for="(cell, i) in calendarCells" :key="i"
                class="h-9 w-9 mx-auto grid place-items-center rounded-full text-[14px]" :class="[
                  !cell.inMonth ? 'opacity-40' : 'opacity-100',
                  cell.isToday ? 'ring-1 ring-[#00BEEC66]' : ''
                ]">
                {{ cell.day }}
              </div>
            </div>
          </div>
        </div>

        <!-- Clear filters -->
        <button @click="clearAll" class="relative h-[37px] px-[1px] text-[14px] font-medium flex items-center gap-[5px]
                 hover:bg-black/90 transition-colors rounded-md">
          <span class="absolute inset-0 rounded-md bg-gradient-to-r from-[#00A3BE] to-[#33EFB7]"></span>
          <span class="relative flex items-center gap-[5px] dark:bg-black rounded-md px-[12px] py-[7px]">
            <span class="bg-gradient-to-r from-[#00A3BE] to-[#33EFB7] bg-clip-text text-white dark:text-transparent">
              Clear All Filters
            </span>
          </span>
        </button>

        <!-- Export Logs -->
        <button @click="showPopup = true"
          class="h-[37px] px-[14px] rounded-[8px] text-[14px] font-medium text-white flex items-center gap-[6px]"
          style="background:linear-gradient(90deg,#00A3BE 0%,#33EFB7 100%);">
          <img src="../../images/client-portal/download.svg" class="w-4 h-4" alt="">
          Export Logs
        </button>
      </div>
    </div>

    <CreateNewTokenPopupModel v-if="showPopup" @close="showPopup = false" />

    <!-- Active filters chips -->
    <div class="mt-6 flex items-center gap-3">
      <span class="text-[#00BEEC] text-sm font-medium">{{ chips.length }} Active Filters</span>
      <div class="flex flex-wrap gap-1">
        <span v-for="(c, i) in chips" :key="i"
          class="inline-flex items-center rounded-full text-[13px] text-[#00BEEC] bg-[#00BEEC1A]">
          <span class="flex items-center p-2 ml-2">
            {{ c.label }}: {{ c.text }}
          </span>
          <button @click="removeChip(i)"
            class="mr-2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#0D2C31] text-[#00BEEC]">
            ×
          </button>
        </span>
      </div>

    </div>
  </div>

  <!-- LOGS TABLE CARD -->
  <section class="mt-5 rounded-2xl border z-10
                  border-[#00beec3d] bg-white/90 text-black
                  dark:border-[#00BEEC66] dark:bg-[#FFFFFF0D] dark:text-white backdrop-blur">

    <!-- Head -->
    <div class="px-5 sm:px-6 py-2 m-5 border border-[#00beec3d] dark:border-[#00BEEC66]
                rounded-xl dark:bg-[#00BEEC0D]">
      <div class="grid grid-cols-[1.5fr,1fr,1.2fr,2fr] gap-4
                  text-[15px] md:text-[18px] font-medium text-[#007D95] dark:text-[#00BEEC]">
        <span>Timestamps</span>
        <span>Action Type</span>
        <span>IP Address</span>
        <span>Description</span>
      </div>
    </div>

    <!-- Rows -->
    <div class="px-5 sm:px-3 mx-5">
      <div v-for="(row, idx) in pagedLogs" :key="idx"
        class="grid grid-cols-[1.5fr,1fr,1.2fr,2fr] gap-2 items-center py-4">
        <div class="tabular-nums">{{ row.time }}</div>
        <div><span :class="actionChip(row.action)">{{ row.action }}</span></div>
        <div class="tabular-nums">{{ row.ip }}</div>
        <div class="truncate">{{ row.desc }}</div>

        <!-- divider -->
        <div class="col-span-4 h-[1px] bg-[#00beec33] dark:bg-[#00BEEC33]"></div>
      </div>
    </div>

    <!-- Footer / pagination -->
    <div class="flex items-center justify-between px-5 py-4">
      <span class="text-sm opacity-70 cursor-pointer select-none"
        :class="{ 'opacity-40 pointer-events-none': currentPage === 1 }" @click="prevPage">Prev</span>

      <div class="flex items-center gap-2">
        <button v-for="p in visiblePages" :key="p.key" :disabled="p.type === 'dots'"
          @click="p.type === 'page' && goToPage(p.num)" :class="[
            'min-w-[36px] h-[36px] rounded-md text-sm flex items-center justify-center',
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
</template>

<script setup>
import { reactive, ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import CreateNewTokenPopupModel from '../../components/CreateNewTokenPopupModel.vue'

const showPopup = ref(false)

/* ---------- search + dropdown state ---------- */
const query = ref('')

const headerLabels = { action: 'All Actions', date: 'Date Range' }
const options = { action: ['Login', 'Edit', 'Delete'], date: ['All Time', 'Last 7 days', 'Last 30 days', 'This Year'] }
const selected = reactive({ action: headerLabels.action, date: headerLabels.date })
const open = reactive({ action: false, date: false })

const filtersRef = ref(null)
function closeAll() { Object.keys(open).forEach(k => open[k] = false) }
function toggle(k) { Object.keys(open).forEach(key => open[key] = key === k ? !open[key] : false) }
function select(k, v) { selected[k] = v; closeAll() }
function clearAll() { selected.action = headerLabels.action; selected.date = headerLabels.date; query.value = ''; chips.value = [] }

function onDocClick(e) { if (!filtersRef.value) return; if (!filtersRef.value.contains(e.target)) closeAll() }
function onKey(e) { if (e.key === 'Escape') closeAll() }
onMounted(() => { document.addEventListener('click', onDocClick); document.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onKey) })

/* ---------- sample active chips (UI only) ---------- */
const chips = ref([
  { label: 'User', text: 'John Smith' },
  { label: 'Action', text: 'Login' },
  { label: 'Date', text: 'Last 7 days' },
])
function removeChip(i) { chips.value.splice(i, 1) }

/* ---------- logs data ---------- */
const logs = ref([
  { time: '2025-04-23 12:44:31', action: 'Login', ip: '192.168.1.112', desc: 'User logged into admin panel' },
  { time: '2025-04-23 12:44:31', action: 'Edit', ip: '192.168.1.10.5', desc: 'Updated client profile information' },
  { time: '2025-04-23 12:44:31', action: 'Delete', ip: '192.168.3.245', desc: 'Delete API Token' },
  { time: '2025-04-23 12:44:31', action: 'Login', ip: '192.168.1.165', desc: 'User logged into admin panel' },
  // extra rows for paging
  ...Array.from({ length: 16 }).map((_, i) => ({
    time: `2025-04-${String(10 + (i % 20)).padStart(2, '0')} 0${(i % 9) + 1}:3${i % 6}${i % 9}`,
    action: ['Login', 'Edit', 'Delete'][i % 3],
    ip: `192.168.${1 + (i % 5)}.${100 + (i * 7) % 200}`,
    desc: ['User logged into admin panel', 'Updated client profile information', 'Delete API Token'][i % 3]
  })),
])

/* ---------- filtering + pagination ---------- */
const perPage = ref(4)
const currentPage = ref(1)

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  const byAction = selected.action === headerLabels.action ? null : selected.action
  return logs.value.filter(r => {
    const matchesQ = !q || r.desc.toLowerCase().includes(q) || r.ip.toLowerCase().includes(q)
    const matchesAction = !byAction || r.action === byAction
    return matchesQ && matchesAction
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)))
const pagedLogs = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filtered.value.slice(start, start + perPage.value)
})
watchEffect(() => { if (currentPage.value > totalPages.value) currentPage.value = totalPages.value })

function goToPage(n) { if (n < 1 || n > totalPages.value) return; currentPage.value = n }
function prevPage() { if (currentPage.value > 1) goToPage(currentPage.value - 1) }
function nextPage() { if (currentPage.value < totalPages.value) goToPage(currentPage.value + 1) }

const visiblePages = computed(() => {
  const pages = []; const total = totalPages.value; const cur = currentPage.value
  const addPage = n => pages.push({ type: 'page', num: n, key: `p${n}` }); const addDots = k => pages.push({ type: 'dots', key: k })
  if (total <= 7) { for (let i = 1; i <= total; i++) addPage(i) }
  else {
    addPage(1); if (cur > 4) addDots('d1')
    const s = Math.max(2, cur - 1), e = Math.min(total - 1, cur + 1)
    for (let i = s; i <= e; i++) addPage(i)
    if (cur < total - 3) addDots('d2'); addPage(total)
  }
  return pages
})

/* ---------- helpers ---------- */
function actionChip(a) {
  const base = 'inline-block px-3 py-1 rounded-full text-[13px] font-medium'
  if (a === 'Login') return `${base} bg-emerald-100 text-emerald-700 dark:bg-[#00FF621A] dark:text-[#00FF62]`
  if (a === 'Edit') return `${base} bg-cyan-100    text-cyan-700    dark:bg-[#00BEEC1A] dark:text-[#00BEEC]`
  return `${base} bg-red-100     text-red-700     dark:bg-[#FF000026] dark:text-[#FF6B6B]`
}

/* ---------- calendar (UI only) ---------- */
const view = ref(new Date())
const viewYear = computed(() => view.value.getFullYear())
const viewMonth = computed(() => view.value.getMonth())
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
function shiftMonth(delta) { const d = new Date(view.value); d.setMonth(d.getMonth() + delta); view.value = d }
const calendarCells = computed(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1)
  let startOffset = first.getDay() - 1; if (startOffset < 0) startOffset = 6
  const gridStart = new Date(first); gridStart.setDate(first.getDate() - startOffset)
  return Array.from({ length: 42 }).map((_, i) => {
    const d = new Date(gridStart); d.setDate(gridStart.getDate() + i)
    return {
      day: d.getDate(),
      inMonth: d.getMonth() === viewMonth.value,
      isToday: d.toDateString() === new Date().toDateString()
    }
  })
})
</script>
