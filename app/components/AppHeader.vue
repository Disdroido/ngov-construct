<template>
  <header class="sticky top-0 z-30 bg-off-white/[.88] backdrop-blur-xl border-b border-rule-soft">
    <div class="max-w-content mx-auto px-8 py-[18px] grid grid-cols-[auto_1fr_auto] items-center gap-8 max-[720px]:grid-cols-[1fr_auto] max-[720px]:px-5">
      <NuxtLink to="/" class="flex items-center gap-3 no-underline">
        <img src="/img/logo.webp" alt="NGOV" class="h-9 w-auto" />
      </NuxtLink>

      <nav class="justify-self-center flex gap-8 text-sm font-medium text-ink-2 max-[720px]:hidden">
        <a href="#archive" class="no-underline transition-colors hover:text-red">Projects</a>
        <a href="#why" class="no-underline transition-colors hover:text-red">Services</a>
        <a href="#about" class="no-underline transition-colors hover:text-red">About</a>
        <a href="#contact" class="no-underline transition-colors hover:text-red">Contact</a>
      </nav>

      <button @click="inquiryOpen = true" class="inline-flex items-center gap-3.5 bg-red text-white rounded-full py-2.5 pr-[18px] pl-2 font-sans font-semibold text-sm no-underline cursor-pointer transition-colors hover:bg-red-dark max-[720px]:hidden">
        <span class="w-8 h-8 bg-white text-red rounded-full grid place-items-center font-bold">&#8594;</span>
        Start your project
      </button>

      <button @click="mobileOpen = !mobileOpen" class="hidden max-[720px]:inline-flex items-center justify-center w-10 h-10 bg-transparent border-0 cursor-pointer text-ink" aria-label="Toggle menu">
        <svg v-if="!mobileOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M3 6h18M3 12h18M3 18h18"/>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M6 6l12 12M6 18L18 6"/>
        </svg>
      </button>
    </div>

    <!-- Mobile nav -->
    <div v-if="mobileOpen" class="min-[721px]:hidden border-t border-rule-soft bg-off-white px-6 pb-6">
      <nav class="flex flex-col gap-4 pt-4">
        <a href="#archive" class="text-ink font-medium text-sm py-2 no-underline hover:text-red transition-colors" @click="mobileOpen = false">Projects</a>
        <a href="#why" class="text-ink font-medium text-sm py-2 no-underline hover:text-red transition-colors" @click="mobileOpen = false">Services</a>
        <a href="#about" class="text-ink font-medium text-sm py-2 no-underline hover:text-red transition-colors" @click="mobileOpen = false">About</a>
        <a href="#contact" class="text-ink font-medium text-sm py-2 no-underline hover:text-red transition-colors" @click="mobileOpen = false">Contact</a>
        <button @click="inquiryOpen = true; mobileOpen = false" class="inline-flex items-center gap-3.5 bg-red text-white rounded-full py-2.5 pr-[18px] pl-2 font-sans font-semibold text-sm no-underline cursor-pointer transition-colors hover:bg-red-dark w-full justify-center mt-2">
          <span class="w-8 h-8 bg-white text-red rounded-full grid place-items-center font-bold">&#8594;</span>
          Start your project
        </button>
      </nav>
    </div>

    <!-- Inquiry Modal -->
    <Teleport to="body">
      <div v-if="inquiryOpen" class="fixed inset-0 bg-navy-deep/[0.78] backdrop-blur-md z-50 flex items-center justify-center p-10 animate-[fade_0.25s_ease] max-[720px]:p-5" @click.self="inquiryOpen = false">
        <div class="bg-paper max-w-[580px] w-full max-h-[90vh] p-11 pb-9 overflow-y-auto relative animate-[rise_0.35s_cubic-bezier(.2,.7,.2,1)] flex flex-col gap-6 max-[720px]:p-8 max-[720px]:pb-7">
          <button class="absolute top-[18px] right-[18px] bg-off-white border border-rule w-9 h-9 rounded-full text-lg cursor-pointer text-ink grid place-items-center z-[2] hover:bg-ink hover:text-white" @click="inquiryOpen = false">&times;</button>
          <div>
            <h3 class="font-display font-bold text-[30px] leading-[1.1] tracking-[-.02em] m-0 mb-[10px] text-balance">Tell us about <em class="not-italic text-red">your project.</em></h3>
            <p class="text-[14.5px] leading-[1.55] text-ink-soft m-0 text-pretty">A rough scope and a timeline gets you the right reply. We'll be in touch within a few days — usually sooner.</p>
          </div>
          <form class="flex flex-col gap-[18px]" @submit.prevent="submitInquiry">
            <div class="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
              <div class="flex flex-col gap-[6px]">
                <label class="font-mono text-[10px] tracking-[.18em] uppercase text-ink-soft">Name</label>
                <input v-model="form.name" type="text" required autocomplete="name" class="font-sans text-sm text-ink bg-transparent border-0 border-b border-rule py-2 outline-none w-full focus:border-red appearance-none" />
              </div>
              <div class="flex flex-col gap-[6px]">
                <label class="font-mono text-[10px] tracking-[.18em] uppercase text-ink-soft">Email</label>
                <input v-model="form.email" type="email" required autocomplete="email" class="font-sans text-sm text-ink bg-transparent border-0 border-b border-rule py-2 outline-none w-full focus:border-red appearance-none" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 max-[720px]:grid-cols-1">
              <div class="flex flex-col gap-[6px]">
                <label class="font-mono text-[10px] tracking-[.18em] uppercase text-ink-soft">Phone <span class="normal-case tracking-normal opacity-60">(optional)</span></label>
                <input v-model="form.phone" type="tel" autocomplete="tel" class="font-sans text-sm text-ink bg-transparent border-0 border-b border-rule py-2 outline-none w-full focus:border-red appearance-none" />
              </div>
              <div class="flex flex-col gap-[6px]">
                <label class="font-mono text-[10px] tracking-[.18em] uppercase text-ink-soft">Project type</label>
                <select v-model="form.type" class="font-sans text-sm text-ink bg-transparent border-0 border-b border-rule py-2 outline-none w-full focus:border-red appearance-none select-arrow">
                  <option value="" disabled>Select&hellip;</option>
                  <option>Addition</option>
                  <option>Renovation</option>
                  <option>Kitchen</option>
                  <option>Bath</option>
                  <option>Outdoor / Deck / Porch</option>
                  <option>ADU / Outbuilding</option>
                  <option>Small commercial</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col gap-[6px]">
              <label class="font-mono text-[10px] tracking-[.18em] uppercase text-ink-soft">Tell us about the project</label>
              <textarea v-model="form.description" placeholder="Address, rough scope, timing&hellip;" rows="3" required class="font-sans text-sm text-ink bg-transparent border-0 border-b border-rule py-2 outline-none w-full focus:border-red resize-y min-h-[96px]"></textarea>
            </div>
            <button type="submit" class="self-start mt-2 font-sans font-semibold text-sm bg-red text-white border-0 rounded-full py-3 px-6 cursor-pointer inline-flex items-center gap-[10px] transition-colors hover:bg-red-dark">
              {{ sent ? "Thanks — we'll be in touch" : 'Send inquiry' }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-3 h-3"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </form>
          <div class="mt-1 pt-[18px] border-t border-rule-soft font-mono text-[11px] tracking-[.14em] uppercase text-ink-soft">
            Prefer to call — <a href="tel:+14135550147" class="text-ink no-underline border-b border-rule hover:border-red hover:text-red">(413) 555 — 0147</a>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const inquiryOpen = inject('inquiryOpen', ref(false)) as Ref<boolean>
const mobileOpen = ref(false)
const sent = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  type: '',
  description: '',
})

function submitInquiry() {
  console.log('Inquiry submitted:', { ...form })
  sent.value = true
  setTimeout(() => {
    sent.value = false
    inquiryOpen.value = false
    form.name = ''
    form.email = ''
    form.phone = ''
    form.type = ''
    form.description = ''
  }, 1800)
}
</script>

<style scoped>
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes rise {
  from { transform: translateY(18px); opacity: 0; }
  to { transform: none; opacity: 1; }
}

.select-arrow {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #5b6373 50%), linear-gradient(135deg, #5b6373 50%, transparent 50%);
  background-position: calc(100% - 14px) 16px, calc(100% - 9px) 16px;
  background-size: 5px 5px;
  background-repeat: no-repeat;
}
</style>
