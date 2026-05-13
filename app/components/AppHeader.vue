<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-9 h-9 bg-[#E85D04] flex items-center justify-center">
            <span class="text-white font-extrabold text-base">N</span>
          </div>
          <div class="flex flex-col">
            <span class="text-white font-extrabold text-lg tracking-tight leading-none">NGOV</span>
            <span class="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase">Construct</span>
          </div>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-10">
          <NuxtLink to="#services" class="text-white/50 hover:text-white text-sm font-medium transition-colors">Services</NuxtLink>
          <NuxtLink to="#projects" class="text-white/50 hover:text-white text-sm font-medium transition-colors">Projects</NuxtLink>
          <NuxtLink to="#about" class="text-white/50 hover:text-white text-sm font-medium transition-colors">About</NuxtLink>
          <NuxtLink to="#contact" class="text-white/50 hover:text-white text-sm font-medium transition-colors">Contact</NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="hidden md:block">
          <NuxtLink to="#contact" class="bg-[#E85D04] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[#F47A2C] transition-colors">
            Get a Quote
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-6 border-t border-white/5 mt-4 pt-6">
        <nav class="flex flex-col gap-4">
          <NuxtLink to="#services" class="text-white/50 hover:text-white text-sm font-medium transition-colors py-2" @click="mobileMenuOpen = false">Services</NuxtLink>
          <NuxtLink to="#projects" class="text-white/50 hover:text-white text-sm font-medium transition-colors py-2" @click="mobileMenuOpen = false">Projects</NuxtLink>
          <NuxtLink to="#about" class="text-white/50 hover:text-white text-sm font-medium transition-colors py-2" @click="mobileMenuOpen = false">About</NuxtLink>
          <NuxtLink to="#contact" class="text-white/50 hover:text-white text-sm font-medium transition-colors py-2" @click="mobileMenuOpen = false">Contact</NuxtLink>
          <NuxtLink to="#contact" class="bg-[#E85D04] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-center mt-2" @click="mobileMenuOpen = false">
            Get a Quote
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
