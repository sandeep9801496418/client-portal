<template>
    <main class="bg-light-bg dark:bg-dark-bg min-h-screen text-black dark:text-white overflow-y-hidden">
        <!-- BG Ellipses - dark only -->
        <img src="../../images/client-portal/ellipse-1924.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             right-[25vw] top-[2vw] w-[40vw] h-auto max-w-none blur-2xl" />
        <img src="../../images/client-portal/ellipse-1926.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute right-0 -top-[19px] w-[239px] h-[255px] max-w-none blur-xl mt-[90px]" />
        <img src="../../images/client-portal/ellipse-1925.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             right-[5vw] top-[15vw] w-[32vw] h-auto max-w-none blur-2xl" />
        <!-- Header -->
        <header class="px-4 sm:px-6 py-4 sm:py-5 border-b border-[rgba(0,190,236,0.30)]">
            <div class="flex items-center justify-between">
                <div class="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-4">
                    <h1 class="font-inter text-[20px] sm:text-[24px] md:text-[30px] font-medium leading-none">Clients Management</h1>
                    <p class="text-[12px] sm:text-[14px] md:text-[15px] text-[#00BEEC99]">May 17, 2025 | Saturday</p>
                </div>

                <div
                    class="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
                    <img src="../../images/client-portal/bell-light1.svg" alt="Bell Icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                    <div
                        class="absolute top-1 right-1 sm:top-2 sm:right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full grid place-items-center">
                        <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF0000] rounded-full"></span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Filters row (raised z-index so menus float above the table) -->
        <div ref="filtersRef" class="relative z-40 w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
            <div class="mt-2 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 justify-between">
                <!-- LEFT: search -->
                <div class="flex-1 min-w-[220px] max-w-[324px] w-full">
                    <div class="flex items-center gap-2 rounded-[10px] h-[37px] pl-3 pr-3 border border-[#00beec4d]
           bg-light-bg dark:bg-transparent text-black dark:text-white/90">
                        <img src="../../images/client-portal/search-icon.svg" alt=""
                            class="w-4 h-4 sm:w-5 sm:h-5 invert dark:invert-0 opacity-80" />
                        <input v-model="query" type="text" placeholder="Search name or email..."
                            class="w-full bg-transparent outline-none placeholder-black/45 dark:placeholder-[#8ED7E4]/60 text-sm sm:text-[14px]" />
                    </div>
                </div>


                <!-- RIGHT: filters + buttons -->
                <div class="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    <!-- DROPDOWNS -->
                    <div class="relative" v-for="dd in dropdowns" :key="dd.key">
                        <!-- Trigger -->
                        <button @click="toggle(dd.key)" class="h-[37px] w-full sm:w-auto md:w-[165px] px-3 sm:px-5 rounded-[6px] flex items-center justify-between gap-2
                     bg-light-bg/80 dark:bg-[#0A2327]
                     text-sm sm:text-[14px] text-black/80 dark:text-[#00BEEC] border dark:border-none
                     ">
                            {{ selected[dd.key] }}
                            <img src="../../images/client-portal/arrow-close.svg"
                                :class="['transition-transform w-3 h-3 sm:w-4 sm:h-4', open[dd.key] ? 'rotate-180' : '']" alt="" />
                        </button>

                        <!-- Menu (Light + Dark) -->
                        <div v-if="open[dd.key]" class="absolute z-50 mt-2 rounded-[8px]
         border-[#00beec26]
         bg-light-bg text-[#0C3E45] dark:bg-[#072126] dark:text-[#A9F3FF]
         shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.55)]
         overflow-hidden" :style="{ width: dd.menuWidth }">
                            <div class="flex flex-col">
                                <!-- First row = All … with up-caret -->
                                <button @click="select(dd.key, headerLabels[dd.key])" class="w-full flex items-center justify-between px-4 py-2 text-[14px]
             text-[#0A6B7A] dark:text-[#8ED7E4]
             hover:bg-[#EAF8FB] dark:hover:bg-[#0D2C31]">
                                    {{ headerLabels[dd.key] }}
                                    <img src='../../images/client-portal/arrow-close.svg' class="rotate-180 opacity-80"
                                        alt="">
                                </button>

                                <!-- Separator -->
                                <div class="border-b border-[#00beec14] dark:border-[#00beec1f]"></div>

                                <!-- Options -->
                                <template v-for="(opt, i) in options[dd.key]" :key="opt">
                                    <button @click="select(dd.key, opt)" class="w-full text-left px-4 py-2 text-[14px]
               text-[#0C3E45] dark:text-[#A9F3FF]
               hover:bg-[#EAF8FB] dark:hover:bg-[#0D2C31]">
                                        {{ opt }}
                                    </button>
                                    <div v-if="i !== options[dd.key].length - 1"
                                        class="border-b border-[#00beec14] dark:border-[#00beec1f]"></div>
                                </template>
                            </div>
                        </div>

                    </div>

                    <!-- Clear -->
                    <button @click="clearAll"
                        class="relative h-[37px] px-[1px] text-sm sm:text-[14px] font-medium flex items-center gap-[5px] hover:bg-black/90 transition-colors rounded-md ">

                        <!-- Gradient border -->
                        <span
                            class="absolute inset-0 rounded-md p-[0px] bg-gradient-to-r from-[#00A3BE] to-[#33EFB7]"></span>

                        <!-- Black background for content -->
                        <span class="relative flex items-center gap-[5px] dark:bg-black rounded-md px-[12px] py-[7px]">
                            <span
                                class="bg-gradient-to-r from-[#00A3BE] to-[#33EFB7] bg-clip-text text-white dark:text-transparent">
                                Clear All Filters
                            </span>
                        </span>
                    </button>
                    <!-- Invite -->
                    <button @click.prevent="router.push('/admin-client-create')"
                        class="h-[37px] px-[12px] sm:px-[14px] rounded-[8px] text-sm sm:text-[14px] font-medium text-white flex items-center gap-[5px] custom-border-gradient"
                        style="background: linear-gradient(90deg,#00A3BE 0%, #33EFB7 100%);">
                        <span class="text-lg leading-none">+</span> Create New Client
                    </button>
                </div>
            </div>

            <!-- Table + Summary -->
            <section class="mt-5 flex flex-col lg:flex-row gap-4 sm:gap-5">
                <!-- Table -->
                <div
                    class="flex-1 rounded-2xl border border-[#00beec3d] bg-light-bg/90 dark:border-[#00BEEC66] dark:bg-[#FFFFFF0D] backdrop-blur overflow-x-auto">
                    <!-- Header Row -->
                    <div
                        class="px-3 sm:px-5 md:px-6 py-2 m-3 sm:m-5 border border-[#00beec3d] dark:border-[#00BEEC66] rounded-xl dark:bg-[#00BEEC0D] min-w-[900px]">
                        <div
                            class="grid grid-cols-[1.5fr,1.5fr,1fr,1.2fr,1fr,152px] gap-2 sm:gap-4 text-[13px] sm:text-[15px] md:text-[18px] font-[400px] text-[#007D95] dark:text-[#00BEEC]">
                            <span class="min-w-[120px]">Client Name</span>
                            <span class="text-center min-w-[150px]">Email</span>
                            <span class="text-center min-w-[80px]">Status</span>
                            <span class="min-w-[180px] text-center">Assigned Users</span>
                            <span class="min-w-[80px]">Tokens</span>
                            <span class="text-center pr-2 min-w-[152px]">Actions</span>
                        </div>
                    </div>

                    <!-- Data Rows -->
                    <div class="px-2 sm:px-5 md:px-3 mx-3 sm:mx-5 min-w-[900px]">
                        <div v-for="u in pagedUsers" :key="u.id"
                            class="grid grid-cols-[1.5fr,1.5fr,1fr,1.2fr,1fr,152px] gap-2 items-center py-3 min-w-[900px]">
                            <div class="font-medium text-sm sm:text-base min-w-[120px]">{{ u.name }}</div>
                            <div class="text-[13px] sm:text-[15px] opacity-90 truncate min-w-[150px]">{{ u.email }}</div>
                            <div class="min-w-[80px]"><span :class="statusChip(u.status)">{{ u.status }}</span></div>
                            <div class="flex -space-x-1 sm:-space-x-2 min-w-[120px] justify-start">
                                <img v-for="(a, i) in u.assignedUsers" :key="i" :src="a"
                                    class="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white dark:border-[#0A2327]" />
                                <span v-if="u.extraUsers"
                                    class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#00BEEC] text-white text-xs sm:text-sm font-medium border-2 border-white dark:border-[#0A2327]">+{{
                                        u.extraUsers }}</span>
                            </div>
                            <div class="text-[13px] sm:text-[15px] font-medium min-w-[80px]">{{ u.tokens }}</div>
                            <div class="flex justify-start gap-1 sm:gap-2 min-w-[152px]">
                                <button @click.prevent="router.push('/admin-client-view')"
                                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] flex items-center justify-center">
                                    <img src="../../images/client-portal/eye-11.svg" class="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                                <button @click.prevent="router.push('/admin-client-edit')"
                                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] flex items-center justify-center">
                                    <img src="../../images/client-portal/edit-11.svg" class="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                               <button
                                class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] transition"
                                @click="showPopup = true">
                                <img src="../../images/client-portal/delete-11.svg" alt="Delete" class="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            </div>
                            <div class="col-span-6 h-[1px] bg-[#00beec33] dark:bg-[#00BEEC66]"></div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div
                        class="flex flex-col sm:flex-row items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-t border-[#00beec3d] dark:border-[#00beec26] rounded-b-2xl gap-3 sm:gap-0">
                        <span class="text-sm opacity-70 cursor-pointer" @click="prevPage">Prev</span>
                        <div class="flex items-center gap-1 sm:gap-2">
                            <button v-for="p in visiblePages" :key="p.key" @click="p.type === 'page' && goToPage(p.num)"
                                :class="[
                                    'min-w-[28px] sm:min-w-[32px] h-[28px] sm:h-[32px] rounded-md text-xs sm:text-sm flex items-center justify-center',
                                    p.type === 'page' && currentPage === p.num
                                        ? 'text-white bg-[#00BBD6]'
                                        : 'border border-[#00beec40] hover:bg-[#00beec12]'
                                ]">
                                <span v-if="p.type === 'dots'">..</span>
                                <span v-else>{{ p.num }}</span>
                            </button>
                        </div>
                        <span class="text-sm opacity-70 cursor-pointer" @click="nextPage">Next</span>
                    </div>
                </div>

                <!-- Summary -->
                <div
                    class="w-full lg:w-[260px] rounded-2xl border border-[#00beec3d] dark:border-[#00BEEC66] bg-light-bg/90 dark:bg-[#FFFFFF0D] backdrop-blur p-4 sm:p-5">
                    <div class="font-inter text-base sm:text-lg font-medium mb-3 sm:mb-4 text-[#007D95] dark:text-[#00BEEC]">Summary</div>
                    <div class="flex justify-between py-2 border-b border-[#00beec33] dark:border-[#00BEEC66] text-sm sm:text-base">
                        <span>Total Clients</span><span>{{ filtered.length }}</span>
                    </div>
                    <div class="flex justify-between py-2 border-b border-[#00beec33] dark:border-[#00BEEC66] text-sm sm:text-base">
                        <span>Active</span><span>{{filtered.filter(u => u.status === 'Active').length}}</span>
                    </div>
                    <div class="flex justify-between py-2 border-b border-[#00beec33] dark:border-[#00BEEC66] text-sm sm:text-base">
                        <span>Inactive</span><span>{{filtered.filter(u => u.status === 'Inactive').length}}</span>
                    </div>
                    <div class="flex justify-between py-2 text-sm sm:text-base">
                        <span>New This Week</span><span>{{ newThisWeek }}</span>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <AdminDeleteClientPopup v-if="showPopup" @close="showPopup = false" />

</template>

<script setup>
import { reactive, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import avatar1 from '../../images/client-portal/person-1.svg'
import avatar2 from '../../images/client-portal/person-2.svg'
import avatar3 from '../../images/client-portal/person-3.svg'
import avatar4 from '../../images/client-portal/person-4.svg'
import AdminDeleteClientPopup from '../components/AdminDeleteClientPopup.vue'

const showPopup = ref(false)
const router = useRouter()
const query = ref('')
const headerLabels = { users: 'All Users', status: 'All Status', clients: 'All Clients' }
const options = { users: ['Jenny Wilson', 'Floyd Miles', 'Eleanor Pena', 'Jane Cooper', 'Brooklyn Simmons'], status: ['Active', 'Inactive'], clients: ['Flex Company', 'Miles Company'] }
const selected = reactive({ users: headerLabels.users, status: headerLabels.status, clients: headerLabels.clients })
const dropdowns = [{ key: 'users', menuWidth: '260px' }, { key: 'status', menuWidth: '260px' }, { key: 'clients', menuWidth: '300px' }]
const open = reactive({ users: false, status: false, clients: false })
const filtersRef = ref(null)

function closeAll() { Object.keys(open).forEach(k => open[k] = false) }
function toggle(k) { Object.keys(open).forEach(key => open[key] = key === k ? !open[key] : false) }
function select(k, v) { selected[k] = v; closeAll() }
function clearAll() { selected.users = headerLabels.users; selected.status = headerLabels.status; selected.clients = headerLabels.clients; query.value = ''; closeAll() }
function onDocClick(e) { if (!filtersRef.value) return; if (!filtersRef.value.contains(e.target)) closeAll() }
function onKey(e) { if (e.key === 'Escape') closeAll() }
onMounted(() => { document.addEventListener('click', onDocClick); document.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onKey) })

const users = ref([
    { id: 1, name: 'Albert Flores', email: 'albert123@gmail.com', status: 'Active', assignedUsers: [avatar1, avatar2, avatar3], tokens: 15 },
    { id: 2, name: 'Ronald Richards', email: 'ronald123@gmail.com', status: 'Inactive', assignedUsers: [avatar2, avatar3], tokens: 5 },
    { id: 3, name: 'Robert Fox', email: 'robert123@gmail.com', status: 'Active', assignedUsers: [avatar3, avatar4], tokens: 8 },
    { id: 4, name: 'Marvin McKinney', email: 'marvin123@gmail.com', status: 'Inactive', assignedUsers: [avatar1, avatar2, avatar3], extraUsers: 2, tokens: 4 },
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: 5 + i,
        name: `User ${i + 1}`,
        email: `user${i + 1}@mail.com`,
        status: i % 2 ? 'Inactive' : 'Active',
        assignedUsers: [[avatar1, avatar2, avatar3, avatar4][i % 4]],
        tokens: (i + 1) * 2
    }))
])

const perPage = ref(4)
const currentPage = ref(1)
const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    const byRole = selected.users === headerLabels.users ? null : selected.users
    const byStatus = selected.status === headerLabels.status ? null : selected.status
    const byClient = selected.clients === headerLabels.clients ? null : selected.clients
    return users.value.filter(u => {
        const matchesQ = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
        const matchesStatus = !byStatus || u.status === byStatus
        return matchesQ && matchesStatus
    })
})
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)))
const pagedUsers = computed(() => filtered.value.slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value))
function goToPage(n) { if (n >= 1 && n <= totalPages.value) currentPage.value = n }
const visiblePages = computed(() => {
    const pages = [], total = totalPages.value, cur = currentPage.value
    const addPage = n => pages.push({ type: 'page', num: n, key: `p${n}` }), addDots = k => pages.push({ type: 'dots', key: k })
    if (total <= 5) { for (let i = 1; i <= total; i++) addPage(i) }
    else { 
        addPage(1); 
        addPage(2); 
        addPage(3); 
        addDots('d1'); 
        addPage(10) 
    }
    return pages
})
function prevPage() { if (currentPage.value > 1) currentPage.value-- }
function nextPage() { if (currentPage.value < totalPages.value) currentPage.value++ }
function statusChip(st) { return st === 'Active' ? 'inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-[13px] font-medium text-white dark:text-[#00FF62] bg-[#00FF62] dark:bg-[#00FF621A]' : 'inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-[13px] font-medium text-white dark:text-[#FF0000] bg-[#FF0000] dark:bg-[#FF000026]' }
const newThisWeek = computed(() => 4) // mock value
</script>

<style scoped>
.custom-border-gradient {
    border-image: linear-gradient(90deg, #33EFB7, #00A3BE) 1;
}
</style>