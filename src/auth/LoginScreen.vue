<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">
    <!-- BG Ellipses -->
    <img src="../images/client-portal/ellipse-1924.svg" alt=""
         class="pointer-events-none select-none absolute -left-[14px] top-[24px] w-[807px] h-[894px] max-w-none blur-2xl" />
    <img src="../images/client-portal/ellipse-1926.svg" alt=""
         class="hidden dark:block pointer-events-none select-none absolute right-0 -top-[19px] w-[239px] h-[255px] max-w-none blur-xl " />
    <img src="../images/client-portal/ellipse-1925.svg" alt=""
         class="pointer-events-none select-none absolute left-[793px] bottom-[10px] w-[630px] h-[702px] max-w-none blur-2xl" />

    <!-- Center card -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-14 sm:px-6">
      <div class="w-full max-w-md">
        <h1 class="text-center font-inter text-[40px] leading-[100%] text-white font-medium">
          Log in your Account
        </h1>

        <p class="mt-5 text-center font-inter text-[19px] text-white/90">
          Welcome back! Select method to log in
        </p>

        <!-- Social buttons -->
        <div class="mt-10 grid grid-cols-2 gap-3">
          <button
            type="button"
            class="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-light-bg/5 px-4 py-3 text-sm font-medium
                   transition-all hover:bg-light-bg/10 hover:border-white/30 hover:shadow-[0_10px_28px_-14px_rgba(0,190,236,0.45)]
                   active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEC]/40"
            @click="toast.info('Google login coming soon')">
            <img src="../images/client-portal/google.svg" alt="" class="h-5 w-5" />
            Google
          </button>

          <button
            type="button"
            class="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-light-bg/5 px-4 py-3 text-sm font-medium
                   transition-all hover:bg-light-bg/10 hover:border-white/30 hover:shadow-[0_10px_28px_-14px_rgba(0,190,236,0.45)]
                   active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BEEC]/40"
            @click="toast.info('Slack login coming soon')">
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
          <!-- Email -->
          <label class="mb-3 block">
            <div class="relative flex items-center rounded-lg border h-[55px]"
                 :class="emailError ? 'border-red-500/70' : 'border-white/10 bg-light-bg/5'">
              <div class="px-3">
                <img src="../images/client-portal/email.svg" alt="" class="h-[25px] w-[25px] opacity-70" />
              </div>
              <input
                v-model.trim="form.email"
                type="email"
                autocomplete="email"
                placeholder="Email Address"
                :aria-invalid="!!emailError"
                class="w-full bg-transparent py-2.5 pr-3 outline-none text-white placeholder:text-white/40"
              />
            </div>
            <p v-if="emailError" class="mt-1 text-xs text-red-400">{{ emailError }}</p>
          </label>

          <!-- Password -->
          <label class="mb-3 block">
            <div class="relative flex items-center rounded-lg border h-[55px]"
                 :class="passwordError ? 'border-red-500/70' : 'border-white/10 bg-light-bg/5'">
              <div class="px-3">
                <img src="../images/client-portal/lock.svg" alt="" class="h-[25px] w-[25px] opacity-70" />
              </div>

              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="Password"
                :aria-invalid="!!passwordError"
                class="w-full bg-transparent py-2.5 pr-12 outline-none placeholder:text-white/40"
              />

              <button
                type="button"
                class="absolute right-3 p-1 opacity-70 hover:opacity-100"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'">
                <component :is="showPassword ? EyeOff : Eye" class="h-5 w-5" />
              </button>
            </div>
            <p v-if="passwordError" class="mt-1 text-xs text-red-400">{{ passwordError }}</p>
          </label>

          <div class="mb-5 flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input v-model="form.remember" type="checkbox" class="h-4 w-4 accent-[#00BEEC]" />
              <span class="text-white/50">Remember me</span>
            </label>
            <a href="#" class="text-primary hover:underline mr-3 text-[16px]">Forgot Password?</a>
          </div>

          <button
            type="submit"
            class="mt-5 w-full h-[54px] rounded-lg bg-gradient-to-r from-[#00A3BE] to-[#33EFB7]
                   font-inter text-[20px] py-2.5 text-center font-medium text-white
                   hover:opacity-95 active:opacity-90">
            Log in
          </button>
        </form>

        <p class="mt-6 text-center text-[11px] leading-relaxed text-white/50">
          By signing in, you agree to our <a href="#" class="hover:underline">Terms of Service</a>
          and <a href="#" class="hover:underline">Privacy Policy</a>
        </p>

        <p class="mt-3 text-center text-sm text-white/70">
          Don’t have an account?
          <button class="font-medium text-white"
                  @click.prevent="router.push('/signup')">
            Create an account
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-hot-toast'
import { Eye, EyeOff } from 'lucide-vue-next'

const router = useRouter()

const form = ref({
  email: '',
  password: '',
  remember: true
})
const showPassword = ref(false)
/* Only show field errors after submit click */
const submitted = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

const emailError = computed(() => {
  if (!submitted.value && !form.value.email) return ''
  if (!form.value.email) return 'Email is required.'
  return emailRegex.test(form.value.email) ? '' : 'Please enter a valid email address.'
})

const passwordError = computed(() => {
  if (!submitted.value && !form.value.password) return ''
  if (!form.value.password) return 'Password is required.'
  return form.value.password.length >= 6 ? '' : 'Password must be at least 6 characters.'
})

function onSubmit() {
  submitted.value = true

  // check if both are filled
  if (!form.value.email || !form.value.password) {
    if (!form.value.email) toast.error('Email is required.')
    if (!form.value.password) toast.error('Password is required.')
    return
  }

  // check format/length
  if (!emailRegex.test(form.value.email)) {
    toast.error('Please enter a valid email address.')
    return
  }
  if (form.value.password.length < 6) {
    toast.error('Password must be at least 6 characters.')
    return
  }

  // all good
  toast.success('Logged in successfully!')
}

</script>
