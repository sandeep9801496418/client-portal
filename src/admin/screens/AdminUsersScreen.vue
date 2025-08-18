<template>
    <main class="bg-light-bg dark:bg-dark-bg min-h-screen text-black dark:text-white overflow-y-hidden">
        <!-- BG Ellipses - dark only -->
        <img src="../../images/client-portal/ellipse-1924.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             right-[25vw] top-[2vw] w-[40vw] h-auto max-w-none blur-2xl" />
        <img src="../../images/client-portal/ellipse-1926.svg" alt=""
            class="hidden dark:block pointer-events-none select-none absolute right-0 -top-[19px] w-[239px] h-[255px] max-w-none blur-xl mt-[90px]" />
        <img src="../../images/client-portal/ellipse-1925.svg" alt="" class="hidden dark:block pointer-events-none select-none absolute 
             right-[5vw] top-[15vw] w-[32vw] h-auto max-w-none blur-2xl" />
        <!-- Header -->
        <header class="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 border-b border-[rgba(0,190,236,0.30)]">
            <div class="flex items-center justify-between">
                <div class="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-4">
                    <h1
                        class="font-inter text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px] font-medium leading-none">
                        User Management</h1>
                    <p class="text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] text-[#00BEEC99]">May 17, 2025 |
                        Saturday</p>
                </div>

                <div
                    class="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 border border-[#0000004D] dark:border-[rgba(0,190,236,0.30)] rounded-full relative">
                    <img src="../../images/client-portal/bell-light1.svg" alt="Bell Icon"
                        class="w-5 h-5 sm:w-6 sm:h-6" />
                    <div
                        class="absolute top-1 right-1 sm:top-2 sm:right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full grid place-items-center">
                        <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF0000] rounded-full"></span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Filters row (raised z-index so menus float above the table) -->
        <div ref="filtersRef" class="relative z-40 w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
            <div
                class="mt-2 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 justify-between">
                <!-- LEFT: search -->
                <div class="flex-1 min-w-[200px] max-w-[324px] w-full">
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
                     text-sm sm:text-[14px] text-black/80 dark:text-primary border dark:border-none
                     ">
                            {{ selected[dd.key] }}
                            <img src="../../images/client-portal/arrow-close.svg"
                                :class="['transition-transform w-3 h-3 sm:w-4 sm:h-4', open[dd.key] ? 'rotate-180' : '']"
                                alt="" />
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
                    <button @click.prevent="router.push('/admin-create-user')"
                        class="h-[37px] px-[12px] sm:px-[14px] rounded-[8px] text-sm sm:text-[14px] font-medium text-white flex items-center gap-[5px] custom-border-gradient"
                        style="background: linear-gradient(90deg,#00A3BE 0%, #33EFB7 100%);">
                        <span class="text-lg leading-none">+</span> Invite New User
                    </button>
                </div>
            </div>

            <!-- USERS TABLE CARD (kept lower z so menus overlay it) -->
            <section class="mt-3 sm:mt-5 rounded-2xl border z-10
               border-[#00beec3d] bg-light-bg/90 text-black
               dark:border-[#00BEEC66] dark:bg-[#FFFFFF0D] dark:text-white
               backdrop-blur overflow-hidden">
                <!-- Table container with horizontal scroll -->
                <div class="overflow-x-auto">
                    <!-- Table header -->
                    <div class="px-3 sm:px-5 md:px-6 py-2 m-3 sm:m-5 border min-w-[800px]
                     border-[#00beec3d] dark:border-[#00BEEC66] rounded-xl dark:bg-[#00BEEC0D]">
                        <div class="grid grid-cols-[1.5fr,1.5fr,1fr,1fr,1.2fr,152px] gap-2 sm:gap-4 text-[13px] sm:text-[15px] font-[400px]
            text-[#007D95] dark:text-primary md:text-[18px] min-w-[800px]">
                            <span class="min-w-[120px]">User</span>
                            <span class="min-w-[150px]">Email</span>
                            <span class="min-w-[80px]">Role</span>
                            <span class="min-w-[80px]">Status</span>
                            <span class="min-w-[100px]">Client</span>
                            <span class="text-center min-w-[152px]">Actions</span>
                        </div>
                    </div>

                    <!-- Rows -->
                    <div class="px-2 sm:px-5 md:px-3 mx-3 sm:mx-5 min-w-[800px]">
                        <div v-for="(u, idx) in pagedUsers" :key="u.id"
                            class="grid grid-cols-[1.5fr,1.5fr,1fr,1fr,1.2fr,152px] gap-2 items-center py-2 sm:py-1 min-w-[800px]">

                            <!-- user -->
                            <div class="flex items-center gap-2 sm:gap-3 min-w-[120px]">
                                <img src="../../images/client-portal/person-1.svg" alt=""
                                    class="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-black/5 dark:ring-white/10" />
                                <div class="font-medium text-sm sm:text-base">{{ u.name }}</div>
                            </div>

                            <!-- email -->
                            <div class="text-[13px] sm:text-[15px] opacity-90 truncate min-w-[150px]">{{ u.email }}
                            </div>

                            <!-- role badge -->
                            <div class="min-w-[80px]">
                                <span :class="roleChip(u.role)">{{ u.role }}</span>
                            </div>

                            <!-- status badge -->
                            <div class="min-w-[80px]">
                                <span :class="statusChip(u.status)">{{ u.status }}</span>
                            </div>

                            <!-- client -->
                            <div class="truncate min-w-[100px]">{{ u.client }}</div>

                            <!-- actions -->
                            <div class="flex justify-end gap-1 sm:gap-2 min-w-[152px]">
                                <!-- View -->
                                <button
                                    class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] transition"
                                    @click.prevent="router.push('/admin-user-view')">
                                    <img src="../../images/client-portal/eye-11.svg" alt="View"
                                        class="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>

                                <!-- Edit -->
                                <button
                                    class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] transition"
                                    @click.prevent="router.push('/admin-user-edit')">
                                    <img src="../../images/client-portal/edit-11.svg" alt="Edit"
                                        class="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>

                                <!-- Delete -->
                                <button
                                    class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007D95] dark:bg-[#00BEEC33] transition"
                                    @click="showPopup = true">
                                    <img src="../../images/client-portal/delete-11.svg" alt="Delete"
                                        class="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>

                            </div>

                            <!-- divider line -->
                            <div class="col-span-6 h-[1px] bg-[#00beec33] dark:bg-[#00BEEC66]"></div>
                        </div>
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
                                'min-w-[28px] sm:min-w-[32px] md:min-w-[36px] h-[28px] sm:h-[32px] md:h-[36px] rounded-md text-xs sm:text-sm flex items-center justify-center',
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
                        :class="{ 'opacity-40 pointer-events-none': currentPage === totalPages }"
                        @click="nextPage">Next</span>
                </div>
            </section>
        </div>
    </main>
    <AdminDeleteUserPopup v-if="showPopup" @close="showPopup = false" />

</template>

<script setup>
import { reactive, ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import AdminDeleteUserPopup from '../components/AdminDeleteUserPopup.vue'

/* ------------------ Filters ------------------ */
const query = ref('')
const router = useRouter()
const showPopup = ref(false)

const headerLabels = {
    roles: 'All Roles',
    status: 'All Status',
    clients: 'All Clients',
}
const options = {
    roles: ['Manager', 'Admin', 'User'],
    status: ['Active', 'Inactive'],
    clients: ['Flex Company', 'Miles Company', 'Pena Corp', 'Jane Solutions', 'Simmons Company'],
}
const selected = reactive({
    roles: headerLabels.roles,
    status: headerLabels.status,
    clients: headerLabels.clients,
})
const dropdowns = [
    { key: 'roles', menuWidth: '260px' },
    { key: 'status', menuWidth: '260px' },
    { key: 'clients', menuWidth: '300px' },
]
const open = reactive({ roles: false, status: false, clients: false })
function closeAll() { Object.keys(open).forEach(k => (open[k] = false)) }
function toggle(k) { Object.keys(open).forEach(key => (open[key] = key === k ? !open[key] : false)) }
function select(k, v) { selected[k] = v; closeAll() }
function clearAll() {
    selected.roles = headerLabels.roles
    selected.status = headerLabels.status
    selected.clients = headerLabels.clients
    query.value = ''
    closeAll()
}
const filtersRef = ref(null)
function onDocClick(e) { if (!filtersRef.value) return; if (!filtersRef.value.contains(e.target)) closeAll() }
function onKey(e) { if (e.key === 'Escape') closeAll() }
onMounted(() => { document.addEventListener('click', onDocClick); document.addEventListener('keydown', onKey) })
onBeforeUnmount(() => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onKey) })

/* ------------------ Table data (using your local SVG avatars) ------------------ */
const avatar = n => `../../images/client-portal/person-${n}.svg`
const users = ref([
    { id: 1, name: 'Albert Flores', email: 'albert123@gmail.com', role: 'Manager', status: 'Active', client: 'Flex Solutions', avatar: avatar(1) },
    { id: 2, name: 'Ronald Richards', email: 'ronald123@gmail.com', role: 'Admin', status: 'Inactive', client: 'Dove Solutions', avatar: avatar(2) },
    { id: 3, name: 'Robert Fox', email: 'robert123@gmail.com', role: 'User', status: 'Active', client: 'Niro Solutions', avatar: avatar(3) },
    { id: 4, name: 'Marvin McKinney', email: 'marvin123@gmail.com', role: 'Manager', status: 'Inactive', client: 'Tom jewelers', avatar: avatar(4) },
    // more rows for pagination
    ...Array.from({ length: 36 }).map((_, i) => ({
        id: 5 + i,
        name: `User ${i + 1}`,
        email: `user${i + 1}@mail.com`,
        role: ['Manager', 'Admin', 'User'][i % 3],
        status: i % 2 ? 'Inactive' : 'Active',
        client: ['Flex Solutions', 'Dove Solutions', 'Niro Solutions', 'Tom jewelers'][i % 4],
        avatar: avatar((i % 4) + 1),
    })),
])

/* ------------------ Filtering + pagination ------------------ */
const perPage = ref(4)
const currentPage = ref(1)

const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    const byRole = selected.roles === headerLabels.roles ? null : selected.roles
    const byStatus = selected.status === headerLabels.status ? null : selected.status
    const byClient = selected.clients === headerLabels.clients ? null : selected.clients

    return users.value.filter(u => {
        const matchesQ = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
        const matchesRole = !byRole || u.role === byRole
        const matchesStatus = !byStatus || u.status === byStatus
        const matchesClient = !byClient || u.client.includes(byClient.split(' ')[0])
        return matchesQ && matchesRole && matchesStatus && matchesClient
    })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage.value)))
const pagedUsers = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    return filtered.value.slice(start, start + perPage.value)
})

watchEffect(() => {
    if (currentPage.value > totalPages.value) currentPage.value = totalPages.value
})

function goToPage(n) { if (n < 1 || n > totalPages.value) return; currentPage.value = n }

const visiblePages = computed(() => {
    const pages = []
    const total = totalPages.value
    const cur = currentPage.value
    const addPage = n => pages.push({ type: 'page', num: n, key: `p${n}` })
    const addDots = key => pages.push({ type: 'dots', key })

    if (total <= 7) {
        for (let i = 1; i <= total; i++) addPage(i)
    } else {
        addPage(1)
        addPage(2)
        addPage(3)
        if (cur > 6) addDots('d1')
        const start = Math.max(4, cur - 1)
        const end = Math.min(total - 1, cur + 1)
        for (let i = start; i <= end; i++) addPage(i)
        if (cur < total - 3) addDots('d2')
        addPage(total)
    }
    return pages
})

function prevPage() {
    if (currentPage.value > 1) goToPage(currentPage.value - 1)
}

function nextPage() {
    if (currentPage.value < totalPages.value) goToPage(currentPage.value + 1)
}


/* ------------------ UI helpers ------------------ */
function roleChip(role) {
    const base = 'inline-block px-3 py-1 rounded-full text-[13px] font-medium'
    if (role === 'Manager') return `${base} text-white dark:text-[#C300FF] bg-[#C300FF] dark:bg-[#C300FF26]`
    if (role === 'Admin') return `${base} text-white dark:text-[#FFC800] bg-[#FFC800] dark:bg-[#FFC8001A]`
    return `${base} text-white dark:text-[#00D9FF] bg-[#00D9FF] dark:bg-[#00D9FF1A]`
}
function statusChip(st) {
    const base = 'inline-block px-3 py-1 rounded-full text-[13px] font-medium'
    return st === 'Active'
        ? `${base} text-white dark:text-[#00FF62] bg-[#00FF62] dark:bg-[#00FF621A]`
        : `${base} text-white dark:text-[#FF0000] bg-[#FF0000] dark:bg-[#FF000026]`
}

/* actions */
function viewUser(u) { /* hook up */ }
function editUser(u) { /* hook up */ }
function deleteUser(id) { }
</script>

<style scoped>
.custom-border-gradient {
    border-image: linear-gradient(90deg, #33EFB7, #00A3BE) 1;
}
</style>
