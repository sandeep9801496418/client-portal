<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">
    <!-- BG Ellipses -->
    <img src="../images/client-portal/ellipse-1924.svg" alt=""
         class="pointer-events-none select-none absolute -left-[14px] top-[24px] w-[807px] h-[894px] max-w-none blur-2xl" />
    <img src="../images/client-portal/ellipse-1926.svg" alt=""
         class="hidden dark:block pointer-events-none select-none absolute right-0 -top-[19px] w-[239px] h-[255px] max-w-none blur-xl" />
    <img src="../images/client-portal/ellipse-1925.svg" alt=""
         class="pointer-events-none select-none absolute left-[793px] bottom-[10px] w-[630px] h-[702px] max-w-none blur-2xl" />

    <!-- Center card -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-14 sm:px-6">
      <div class="w-full max-w-md">
        <h1 class="text-center font-inter text-[40px] leading-[100%] text-white font-medium">
          Create your Account
        </h1>
        <p class="mt-5 text-center font-inter text-[19px] text-white/90">
          Get started with your free account today
        </p>

        <!-- Social buttons -->
        <div class="mt-10 grid grid-cols-2 gap-3">
          <button
            type="button"
            class="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-light-bg/5 px-4 py-3 text-sm font-medium
                   transition-all hover:bg-light-bg/10 hover:border-white/30 hover:shadow-[0_10px_28px_-14px_rgba(0,190,236,0.45)]
                   active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEC]/40">
            <img src="../images/client-portal/google.svg" alt="" class="h-5 w-5" />
            Google
          </button>

          <button
            type="button"
            class="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-light-bg/5 px-4 py-3 text-sm font-medium
                   transition-all hover:bg-light-bg/10 hover:border-white/30 hover:shadow-[0_10px_28px_-14px_rgba(0,190,236,0.45)]
                   active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEC]/40">
            <img src="../images/client-portal/slack.svg" alt="" class="h-5 w-5" />
            Slack
          </button>
        </div>

        <!-- Divider -->
        <div class="my-6 flex items-center gap-4 text-sm text-white/60">
          <span class="h-px flex-1 bg-light-bg/15"></span>
          continue with email
          <span class="h-px flex-1 bg-light-bg/15"></span>
        </div>

        <!-- Form -->
        <form @submit.prevent="onSubmit" novalidate>
          <!-- Full name -->
          <label class="mb-3 block">
            <div class="relative flex items-center rounded-lg border h-[55px]"
                 :class="nameError ? 'border-red-500/70' : 'border-white/10 bg-light-bg/5'">
              <div class="px-3">
                <img src="../images/client-portal/person.svg" alt="" class="h-[25px] w-[25px] opacity-70" />
              </div>
              <input v-model.trim="form.name" type="text" placeholder="Full name"
                     :aria-invalid="!!nameError"
                     class="w-full bg-transparent py-2.5 pr-3 outline-none text-white placeholder:text-white/40" />
            </div>
            <p v-if="nameError" class="mt-1 text-xs text-red-400">{{ nameError }}</p>
          </label>

          <!-- Email -->
          <label class="mb-3 block">
            <div class="relative flex items-center rounded-lg border h-[55px]"
                 :class="emailError ? 'border-red-500/70' : 'border-white/10 bg-light-bg/5'">
              <div class="px-3">
                <img src="../images/client-portal/email.svg" alt="" class="h-[25px] w-[25px] opacity-70" />
              </div>
              <input v-model.trim="form.email" type="email" autocomplete="email" placeholder="Email Address"
                     :aria-invalid="!!emailError"
                     class="w-full bg-transparent py-2.5 pr-3 outline-none text-white placeholder:text-white/40" />
            </div>
            <p v-if="emailError" class="mt-1 text-xs text-red-400">{{ emailError }}</p>
          </label>

          <!-- Company name -->
          <label class="mb-3 block">
            <div class="relative flex items-center rounded-lg border h-[55px]"
                 :class="companyError ? 'border-red-500/70' : 'border-white/10 bg-light-bg/5'">
              <div class="px-3">
                <img src="../images/client-portal/building.svg" alt="" class="h-[25px] w-[25px] opacity-70" />
              </div>
              <input v-model.trim="form.company" type="text" placeholder="Company name"
                     :aria-invalid="!!companyError"
                     class="w-full bg-transparent py-2.5 pr-3 outline-none text-white placeholder:text-white/40" />
            </div>
            <p v-if="companyError" class="mt-1 text-xs text-red-400">{{ companyError }}</p>
          </label>

          <!-- Password -->
          <label class="mb-3 block">
            <div class="relative flex items-center rounded-lg border h-[55px]"
                 :class="passwordError ? 'border-red-500/70' : 'border-white/10 bg-light-bg/5'">
              <div class="px-3">
                <img src="../images/client-portal/lock.svg" alt="" class="h-[25px] w-[25px] opacity-70" />
              </div>

              <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                     autocomplete="new-password" placeholder="Create Password"
                     :aria-invalid="!!passwordError"
                     class="w-full bg-transparent py-2.5 pr-12 outline-none text-white placeholder:text-white/40" />

              <button type="button" class="absolute right-3 p-1 opacity-70 hover:opacity-100"
                      @click="showPassword = !showPassword"
                      :aria-label="showPassword ? 'Hide password' : 'Show password'">
                <component :is="showPassword ? EyeOff : Eye" class="h-5 w-5" />
              </button>
            </div>
            <p v-if="passwordError" class="mt-1 text-xs text-red-400">{{ passwordError }}</p>
          </label>

          <!-- Strength bar -->
          <div class="mb-5">
            <div class="h-1.5 w-full rounded-full bg-light-bg/10">
              <div class="h-1.5 rounded-full bg-emerald-400 transition-all"
                   :style="{ width: passwordStrength + '%' }"></div>
            </div>
            <p class="mt-1 text-[11px] text-white/60">{{ strengthLabel }}</p>
          </div>

          <button type="submit"
                  class="mt-5 w-full h-[54px] rounded-lg bg-gradient-to-r from-[#00A3BE] to-[#33EFB7]
                         font-inter text-[20px] py-2.5 text-center font-medium text-white
                         hover:opacity-95 active:opacity-90">
            Create Account
          </button>
        </form>

        <p class="mt-6 text-center text-[11px] leading-relaxed text-white/50">
          By signing in, you agree to our <a href="#" class="hover:underline">Terms of Service</a>
          and <a href="#" class="hover:underline">Privacy Policy</a>
        </p>

        <p class="mt-3 text-center text-sm text-white/70">
          Already have an account?
          <button class="font-medium text-white"
                  @click.prevent="router.push('/login')">
            Log In
          </button>
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import { toast } from 'vue-hot-toast'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  name: '',
  email: '',
  company: '',
  password: '',
})

const showPassword = ref(false)
/* Show errors only after submit click */
const submitted = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

const nameError = computed(() => {
  if (!submitted.value && !form.value.name) return ''
  if (!form.value.name) return 'Full name is required.'
  return form.value.name.length >= 2 ? '' : 'Please enter your full name.'
})

const emailError = computed(() => {
  if (!submitted.value && !form.value.email) return ''
  if (!form.value.email) return 'Email is required.'
  return emailRegex.test(form.value.email) ? '' : 'Please enter a valid email address.'
})

const companyError = computed(() => {
  if (!submitted.value && !form.value.company) return ''
  if (!form.value.company) return 'Company name is required.'
  return form.value.company.length >= 2 ? '' : 'Company name is too short.'
})

const passwordError = computed(() => {
  if (!submitted.value && !form.value.password) return ''
  if (!form.value.password) return 'Password is required.'
  return form.value.password.length >= 6 ? '' : 'Password must be at least 6 characters.'
})

/* Strength bar */
const passwordStrength = computed(() => {
  const p = form.value.password
  let score = 0
  if (p.length >= 6) score += 30
  if (/[A-Z]/.test(p)) score += 20
  if (/[a-z]/.test(p)) score += 20
  if (/\d/.test(p)) score += 15
  if (/[^A-Za-z0-9]/.test(p)) score += 15
  return Math.min(score, 100)
})

const strengthLabel = computed(() => {
  const s = passwordStrength.value
  if (s < 40) return 'Weak – Add more characters'
  if (s < 70) return 'Fair – Add numbers & symbols'
  return 'Strong password'
})

function onSubmit() {
  submitted.value = true
  const errors = [nameError.value, emailError.value, companyError.value, passwordError.value]
    .filter(Boolean)
  if (errors.length) {
    errors.forEach(e => toast.error(e))
    return
  }
  toast.success('Account created!')
}
</script>


<style>
/* Fix Chrome autofill turning inputs white on dark UI */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
    -webkit-text-fill-color: #fff !important;
    caret-color: #fff;
    -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.06) inset !important;
    transition: background-color 600000s 0s, color 600000s 0s;
}
</style>
