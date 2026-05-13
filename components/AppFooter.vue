<template>
  <footer class="bg-charcoal text-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
              <span class="text-white font-extrabold text-lg font-space">N</span>
            </div>
            <div class="flex flex-col">
              <span class="text-white font-extrabold text-xl tracking-tight leading-none">NGOV</span>
              <span class="text-white/60 text-xs font-semibold tracking-widest uppercase">Construct</span>
            </div>
          </div>
          <p class="text-white/60 text-sm leading-relaxed">
            Building with precision, reliability, and craftsmanship. Your trusted construction partner.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
          <ul class="space-y-3">
            <li><NuxtLink to="#services" class="text-white/60 hover:text-orange transition-colors text-sm">Residential Construction</NuxtLink></li>
            <li><NuxtLink to="#services" class="text-white/60 hover:text-orange transition-colors text-sm">Commercial Construction</NuxtLink></li>
            <li><NuxtLink to="#services" class="text-white/60 hover:text-orange transition-colors text-sm">Renovations</NuxtLink></li>
            <li><NuxtLink to="#services" class="text-white/60 hover:text-orange transition-colors text-sm">Project Management</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
          <ul class="space-y-3">
            <li><NuxtLink to="#about" class="text-white/60 hover:text-orange transition-colors text-sm">About Us</NuxtLink></li>
            <li><NuxtLink to="#projects" class="text-white/60 hover:text-orange transition-colors text-sm">Our Projects</NuxtLink></li>
            <li><NuxtLink to="#contact" class="text-white/60 hover:text-orange transition-colors text-sm">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
          <ul class="space-y-3 text-sm text-white/60">
            <li>Sydney, NSW, Australia</li>
            <li>
              <a href="mailto:info@ngovconstruct.com.au" class="hover:text-orange transition-colors">
                info@ngovconstruct.com.au
              </a>
            </li>
            <li>
              <a href="tel:+61200000000" class="hover:text-orange transition-colors">
                (02) 0000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-white/40 text-sm">
          &copy; {{ new Date().getFullYear() }} NGOV Construct. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-white/40 hover:text-orange transition-colors text-sm">Privacy Policy</a>
          <a href="#" class="text-white/40 hover:text-orange transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
