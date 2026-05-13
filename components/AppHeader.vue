<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-warm-gray/95 backdrop-blur-sm border-b border-charcoal/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center">
            <span class="text-white font-extrabold text-lg font-space">N</span>
          </div>
          <div class="flex flex-col">
            <span class="text-charcoal font-extrabold text-xl tracking-tight leading-none">NGOV</span>
            <span class="text-charcoal/60 text-xs font-semibold tracking-widest uppercase">Construct</span>
          </div>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink to="#services" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors">Services</NuxtLink>
          <NuxtLink to="#projects" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors">Projects</NuxtLink>
          <NuxtLink to="#about" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors">About</NuxtLink>
          <NuxtLink to="#contact" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors">Contact</NuxtLink>
        </nav>

        <!-- CTA -->
        <div class="hidden md:block">
          <NuxtLink to="#contact" class="btn-primary text-sm px-6 py-3">
            Get a Quote
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden w-10 h-10 flex items-center justify-center text-charcoal"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-6 border-t border-charcoal/10 mt-4 pt-4">
        <nav class="flex flex-col gap-4">
          <NuxtLink to="#services" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors py-2" @click="mobileMenuOpen = false">Services</NuxtLink>
          <NuxtLink to="#projects" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors py-2" @click="mobileMenuOpen = false">Projects</NuxtLink>
          <NuxtLink to="#about" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors py-2" @click="mobileMenuOpen = false">About</NuxtLink>
          <NuxtLink to="#contact" class="text-charcoal/70 hover:text-charcoal font-semibold transition-colors py-2" @click="mobileMenuOpen = false">Contact</NuxtLink>
          <NuxtLink to="#contact" class="btn-primary text-sm px-6 py-3 mt-2 text-center" @click="mobileMenuOpen = false">
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
