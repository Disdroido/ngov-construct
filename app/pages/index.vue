<template>
  <div class="min-h-screen bg-[#0a0a0a]">
    <AppHeader />

    <main>
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div class="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-32">
            <!-- Left content -->
            <div class="lg:col-span-6 xl:col-span-5">
              <div class="space-y-8">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-[2px] bg-[#E85D04]" />
                  <span class="text-[#E85D04] text-sm font-semibold uppercase tracking-[0.2em]">Construction &amp; Building</span>
                </div>

                <h1 class="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-extrabold text-white leading-[0.95] tracking-tight">
                  Build<br />Your<br /><span class="text-[#E85D04]">Dream</span>
                </h1>

                <p class="text-lg text-white/50 leading-relaxed max-w-md">
                  We deliver exceptional residential and commercial construction projects with precision craftsmanship, on time and on budget.
                </p>

                <div class="flex items-center gap-6 pt-4">
                  <NuxtLink to="#contact" class="group inline-flex items-center gap-3 bg-[#E85D04] text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#F47A2C] transition-colors">
                    Start a Project
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </NuxtLink>
                  <NuxtLink to="#projects" class="text-white/60 hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors">
                    View Projects
                  </NuxtLink>
                </div>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                <div>
                  <div class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">15<span class="text-[#E85D04]">+</span></div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Years</div>
                </div>
                <div>
                  <div class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">200<span class="text-[#E85D04]">+</span></div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Projects</div>
                </div>
                <div>
                  <div class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">100<span class="text-[#E85D04]">%</span></div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            <!-- Right image area -->
            <div class="lg:col-span-6 xl:col-span-7 relative">
              <div class="relative aspect-[3/4] lg:aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#222] to-[#1a1a1a]">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-20 h-20 border-2 border-[#E85D04]/30 flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-[#E85D04]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p class="text-white/20 text-xs uppercase tracking-widest">Hero Image</p>
                    </div>
                  </div>
                </div>
                <div class="absolute top-0 right-0 w-24 h-24 bg-[#E85D04]/10" />
                <div class="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#E85D04]/20" />
              </div>
              <!-- Floating card -->
              <div class="absolute -bottom-6 -left-6 bg-[#E85D04] px-6 py-4 shadow-2xl">
                <div class="text-white font-extrabold text-2xl">5.0</div>
                <div class="flex gap-0.5 mt-1">
                  <svg v-for="i in 5" :key="i" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div class="text-white/80 text-[10px] uppercase tracking-wider mt-1">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-24 lg:py-32 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-12 gap-16">
            <div class="lg:col-span-4">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-[2px] bg-[#E85D04]" />
                <span class="text-[#E85D04] text-sm font-semibold uppercase tracking-[0.2em]">Services</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">What We Build</h2>
              <p class="text-white/40 leading-relaxed">From concept to completion, we provide comprehensive construction services tailored to your vision and requirements.</p>
            </div>
            <div class="lg:col-span-8">
              <div class="grid md:grid-cols-2 gap-6">
                <div
                  v-for="(service, index) in services"
                  :key="index"
                  class="group relative bg-[#111] border border-white/5 p-8 hover:border-[#E85D04]/30 transition-all duration-500"
                >
                  <div class="absolute top-6 right-6 text-5xl font-extrabold text-white/5 group-hover:text-[#E85D04]/10 transition-colors">0{{ index + 1 }}</div>
                  <div class="w-12 h-12 bg-[#E85D04]/10 flex items-center justify-center mb-6 group-hover:bg-[#E85D04]/20 transition-colors">
                    <svg class="w-5 h-5 text-[#E85D04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon" />
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-white mb-3">{{ service.title }}</h3>
                  <p class="text-white/40 text-sm leading-relaxed">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-24 lg:py-32 bg-[#111]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-[2px] bg-[#E85D04]" />
                <span class="text-[#E85D04] text-sm font-semibold uppercase tracking-[0.2em]">Portfolio</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">Featured Projects</h2>
            </div>
            <a href="#" class="group inline-flex items-center gap-2 text-[#E85D04] font-semibold text-sm uppercase tracking-wider hover:text-[#F47A2C] transition-colors">
              View All
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="group cursor-pointer"
            >
              <div class="relative aspect-[4/3] bg-[#1a1a1a] overflow-hidden mb-4">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 border border-white/10 flex items-center justify-center">
                    <svg class="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-[#E85D04]/0 group-hover:bg-[#E85D04]/10 transition-colors duration-500" />
                <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="bg-white/10 backdrop-blur-sm px-3 py-1.5 text-white text-xs font-semibold uppercase tracking-wider">View Project</div>
                </div>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-[#E85D04] text-xs font-semibold uppercase tracking-wider">{{ project.category }}</span>
                <span class="w-1 h-1 bg-white/20 rounded-full" />
                <span class="text-white/30 text-xs">{{ project.year }}</span>
              </div>
              <h3 class="text-lg font-bold text-white group-hover:text-[#E85D04] transition-colors">{{ project.title }}</h3>
              <p class="text-white/30 text-sm mt-1">{{ project.location }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 lg:py-32 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-20 items-center">
            <div class="relative">
              <div class="aspect-[4/5] bg-[#1a1a1a] relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-20 h-20 border-2 border-[#E85D04]/30 flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-[#E85D04]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p class="text-white/20 text-xs uppercase tracking-widest">About Image</p>
                  </div>
                </div>
              </div>
              <div class="absolute -bottom-8 -right-8 bg-[#E85D04] p-8 shadow-2xl">
                <div class="text-white font-extrabold text-4xl">15<span class="text-white/80">+</span></div>
                <div class="text-white/80 text-xs uppercase tracking-wider mt-1">Years of Excellence</div>
              </div>
            </div>

            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-[2px] bg-[#E85D04]" />
                <span class="text-[#E85D04] text-sm font-semibold uppercase tracking-[0.2em]">About Us</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">Built on Trust, Driven by Quality</h2>
              <p class="text-white/50 leading-relaxed mb-6">NGOV Construct is a Sydney-based construction company with over 15 years of experience delivering exceptional residential and commercial projects. We combine traditional craftsmanship with modern building techniques.</p>
              <p class="text-white/40 leading-relaxed mb-10">Our team of skilled professionals is committed to transparency, safety, and excellence on every project — from initial consultation to final handover.</p>

              <div class="grid grid-cols-2 gap-8">
                <div class="border-l-2 border-[#E85D04] pl-4">
                  <div class="text-2xl font-extrabold text-white">200<span class="text-[#E85D04]">+</span></div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Projects Delivered</div>
                </div>
                <div class="border-l-2 border-[#E85D04] pl-4">
                  <div class="text-2xl font-extrabold text-white">30<span class="text-[#E85D04]">+</span></div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Team Members</div>
                </div>
                <div class="border-l-2 border-white/20 pl-4">
                  <div class="text-2xl font-extrabold text-white">100<span class="text-white/60">%</span></div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Safety Record</div>
                </div>
                <div class="border-l-2 border-white/20 pl-4">
                  <div class="text-2xl font-extrabold text-white">5.0</div>
                  <div class="text-white/40 text-xs uppercase tracking-wider mt-1">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-24 lg:py-32 bg-[#111]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="flex items-center justify-center gap-3 mb-6">
              <div class="w-12 h-[2px] bg-[#E85D04]" />
              <span class="text-[#E85D04] text-sm font-semibold uppercase tracking-[0.2em]">Testimonials</span>
              <div class="w-12 h-[2px] bg-[#E85D04]" />
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">Client Stories</h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="bg-[#0a0a0a] border border-white/5 p-8 relative"
            >
              <div class="text-[#E85D04] text-4xl font-serif leading-none mb-4">"</div>
              <p class="text-white/60 leading-relaxed mb-8 text-sm">{{ testimonial.text }}</p>
              <div class="flex items-center gap-3 border-t border-white/5 pt-6">
                <div class="w-10 h-10 bg-[#E85D04]/10 flex items-center justify-center">
                  <span class="text-[#E85D04] font-bold text-sm">{{ testimonial.name.charAt(0) }}</span>
                </div>
                <div>
                  <p class="text-white font-semibold text-sm">{{ testimonial.name }}</p>
                  <p class="text-white/30 text-xs">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section id="contact" class="py-24 lg:py-32 bg-[#0a0a0a]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="relative bg-[#111] border border-white/5 overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-[#E85D04]" />
            <div class="grid lg:grid-cols-2 gap-12 p-12 lg:p-20">
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-[2px] bg-[#E85D04]" />
                  <span class="text-[#E85D04] text-sm font-semibold uppercase tracking-[0.2em]">Get In Touch</span>
                </div>
                <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">Ready to Build Something Great?</h2>
                <p class="text-white/40 leading-relaxed max-w-md">Let's discuss your project. Get in touch with our team for a free consultation and quote.</p>
              </div>
              <div class="flex flex-col justify-center gap-6">
                <a href="mailto:info@ngovconstruct.com.au" class="group flex items-center gap-4 bg-[#E85D04] text-white px-8 py-5 font-semibold text-sm uppercase tracking-wider hover:bg-[#F47A2C] transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                  <svg class="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="tel:+61200000000" class="group flex items-center gap-4 border border-white/10 text-white px-8 py-5 font-semibold text-sm uppercase tracking-wider hover:border-[#E85D04]/50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <div class="text-white/30 text-xs uppercase tracking-wider">Sydney, NSW, Australia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'NGOV Construct - Professional Construction Services',
  meta: [
    { name: 'description', content: 'NGOV Construct - Professional construction services in Sydney, NSW. Residential and commercial construction built with precision and craftsmanship.' }
  ]
})

const services = [
  { title: 'Residential Construction', description: 'Custom homes, renovations, and extensions built to the highest standards with quality materials and expert craftsmanship.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { title: 'Commercial Construction', description: 'Office buildings, retail spaces, and industrial facilities designed for functionality, durability, and modern aesthetics.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { title: 'Renovations & Extensions', description: 'Transform your existing space with thoughtful renovations that add value, functionality, and modern appeal.', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
  { title: 'Project Management', description: 'End-to-end project management ensuring your build stays on schedule, on budget, and meets all quality standards.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
  { title: 'Design & Build', description: 'Integrated design and construction services for a seamless building experience from concept to completion.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { title: 'Maintenance & Repairs', description: 'Ongoing maintenance and repair services to keep your property in optimal condition year-round.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
]

const projects = [
  { title: 'Modern Family Home', category: 'Residential', location: 'Northern Beaches, Sydney', year: '2025' },
  { title: 'Commercial Office Fitout', category: 'Commercial', location: 'CBD, Sydney', year: '2024' },
  { title: 'Heritage Renovation', category: 'Renovation', location: 'Inner West, Sydney', year: '2024' },
  { title: 'Luxury Townhouses', category: 'Residential', location: 'Eastern Suburbs, Sydney', year: '2023' },
  { title: 'Industrial Warehouse', category: 'Commercial', location: 'Western Sydney', year: '2023' },
  { title: 'Kitchen & Living Extension', category: 'Extension', location: 'Hills District, Sydney', year: '2025' }
]

const testimonials = [
  { text: 'NGOV Construct delivered our dream home on time and within budget. Their attention to detail and communication throughout the process was exceptional.', name: 'Sarah Mitchell', role: 'Homeowner' },
  { text: 'Professional, reliable, and skilled. They handled our commercial fitout with minimal disruption to our business. Highly recommended.', name: 'David Chen', role: 'Business Owner' },
  { text: 'The team transformed our outdated property into a modern masterpiece. Their craftsmanship and project management were outstanding.', name: 'Emma Thompson', role: 'Property Investor' }
]
</script>
