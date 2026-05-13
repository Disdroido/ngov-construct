<template>
  <div class="min-h-screen bg-warm-gray">
    <AppHeader />

    <main>
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />
        </div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-2 mb-8">
                <span class="w-2 h-2 bg-orange rounded-full animate-pulse" />
                <span class="text-orange text-sm font-semibold">Professional Construction Services</span>
              </div>

              <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                Building What
                <span class="text-orange">Matters</span>
              </h1>

              <p class="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
                Precision craftsmanship meets modern construction. We deliver residential and commercial projects built to last, on time and on budget.
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="#contact" class="btn-primary">
                  Start Your Project
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
                <NuxtLink to="#projects" class="btn-secondary border-white/30 text-white hover:bg-white hover:text-charcoal">
                  View Our Work
                </NuxtLink>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                <div>
                  <div class="text-3xl md:text-4xl font-extrabold text-orange font-space">50+</div>
                  <div class="text-white/50 text-sm mt-1">Projects Completed</div>
                </div>
                <div>
                  <div class="text-3xl md:text-4xl font-extrabold text-orange font-space">15+</div>
                  <div class="text-white/50 text-sm mt-1">Years Experience</div>
                </div>
                <div>
                  <div class="text-3xl md:text-4xl font-extrabold text-orange font-space">100%</div>
                  <div class="text-white/50 text-sm mt-1">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <!-- Hero visual -->
            <div class="hidden lg:block relative">
              <div class="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-charcoal-light to-charcoal flex items-center justify-center">
                  <div class="text-center p-8">
                    <div class="w-24 h-24 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg class="w-12 h-12 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p class="text-white/40 text-sm uppercase tracking-wider font-semibold">Featured Project</p>
                    <p class="text-white text-xl font-bold mt-2">Modern Residential Build</p>
                    <p class="text-white/50 text-sm mt-1">Sydney, NSW</p>
                  </div>
                </div>
              </div>
              <!-- Decorative element -->
              <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-orange/20 rounded-2xl -z-10" />
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-steel/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span class="text-xs uppercase tracking-widest">Scroll</span>
          <div class="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-24 lg:py-32 bg-warm-gray">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-orange font-semibold text-sm uppercase tracking-wider mb-4">What We Do</p>
            <h2 class="section-heading mb-6">Our Services</h2>
            <p class="section-subheading mx-auto">
              From concept to completion, we provide comprehensive construction services tailored to your needs.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-charcoal/5"
            >
              <div class="w-14 h-14 bg-charcoal/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange/10 transition-colors">
                <svg class="w-7 h-7 text-charcoal group-hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-charcoal mb-3">{{ service.title }}</h3>
              <p class="text-charcoal/60 leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-24 lg:py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p class="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Portfolio</p>
              <h2 class="section-heading mb-4">Featured Projects</h2>
              <p class="section-subheading">
                A selection of our recent work across residential and commercial construction.
              </p>
            </div>
            <a href="#" class="text-orange font-semibold hover:text-orange-light transition-colors flex items-center gap-2 whitespace-nowrap">
              View All Projects
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="group cursor-pointer"
            >
              <div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-charcoal/5">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 bg-charcoal/10 rounded-xl flex items-center justify-center">
                    <svg class="w-8 h-8 text-charcoal/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div class="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs font-semibold text-orange uppercase tracking-wider">{{ project.category }}</span>
                <span class="w-1 h-1 bg-charcoal/20 rounded-full" />
                <span class="text-xs text-charcoal/50">{{ project.year }}</span>
              </div>
              <h3 class="text-lg font-bold text-charcoal mt-2 group-hover:text-orange transition-colors">{{ project.title }}</h3>
              <p class="text-sm text-charcoal/50 mt-1">{{ project.location }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 lg:py-32 bg-charcoal">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p class="text-orange font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
              <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Built on Trust, Driven by Quality
              </h2>
              <p class="text-white/70 text-lg leading-relaxed mb-6">
                NGOV Construct is a Sydney-based construction company with over 15 years of experience delivering exceptional residential and commercial projects. We combine traditional craftsmanship with modern building techniques to create structures that stand the test of time.
              </p>
              <p class="text-white/70 leading-relaxed mb-8">
                Our team of skilled professionals is committed to transparency, safety, and excellence on every project. From initial consultation to final handover, we work closely with our clients to bring their vision to life.
              </p>

              <div class="grid grid-cols-2 gap-6">
                <div class="border-l-2 border-orange pl-4">
                  <div class="text-2xl font-extrabold text-white font-space">50+</div>
                  <div class="text-white/50 text-sm">Projects Delivered</div>
                </div>
                <div class="border-l-2 border-orange pl-4">
                  <div class="text-2xl font-extrabold text-white font-space">15+</div>
                  <div class="text-white/50 text-sm">Years in Business</div>
                </div>
                <div class="border-l-2 border-steel pl-4">
                  <div class="text-2xl font-extrabold text-white font-space">30+</div>
                  <div class="text-white/50 text-sm">Team Members</div>
                </div>
                <div class="border-l-2 border-steel pl-4">
                  <div class="text-2xl font-extrabold text-white font-space">100%</div>
                  <div class="text-white/50 text-sm">Safety Record</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="aspect-square rounded-2xl bg-charcoal-light flex items-center justify-center">
                <div class="text-center p-8">
                  <div class="w-20 h-20 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p class="text-white/40 text-sm uppercase tracking-wider font-semibold">Licensed & Insured</p>
                  <p class="text-white text-lg font-bold mt-2">Fully Certified</p>
                  <p class="text-white/50 text-sm mt-1">NSW Licensed Builder</p>
                </div>
              </div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-orange/20 rounded-2xl -z-10" />
              <div class="absolute -top-4 -left-4 w-16 h-16 bg-steel/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-24 lg:py-32 bg-warm-gray">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <p class="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</p>
            <h2 class="section-heading mb-6">What Our Clients Say</h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5"
            >
              <div class="flex gap-1 mb-4">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="text-charcoal/70 leading-relaxed mb-6">"{{ testimonial.text }}"</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-charcoal/10 rounded-full flex items-center justify-center">
                  <span class="text-charcoal font-bold text-sm">{{ testimonial.name.charAt(0) }}</span>
                </div>
                <div>
                  <p class="text-charcoal font-semibold text-sm">{{ testimonial.name }}</p>
                  <p class="text-charcoal/50 text-xs">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section id="contact" class="py-24 lg:py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="bg-charcoal rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <!-- Background decoration -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-steel/10 rounded-full blur-3xl" />

            <div class="relative">
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Ready to Build<br />Something Great?
              </h2>
              <p class="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Let's discuss your project. Get in touch with our team for a free consultation and quote.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@ngovconstruct.com.au" class="btn-primary">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a href="tel:+61200000000" class="btn-secondary border-white/30 text-white hover:bg-white hover:text-charcoal">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
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
  {
    title: 'Residential Construction',
    description: 'Custom homes, renovations, and extensions built to the highest standards with quality materials and expert craftsmanship.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and industrial facilities designed for functionality, durability, and modern aesthetics.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Renovations & Extensions',
    description: 'Transform your existing space with thoughtful renovations that add value, functionality, and modern appeal.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management ensuring your build stays on schedule, on budget, and meets all quality standards.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    title: 'Design & Build',
    description: 'Integrated design and construction services for a seamless building experience from concept to completion.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
  },
  {
    title: 'Maintenance & Repairs',
    description: 'Ongoing maintenance and repair services to keep your property in optimal condition year-round.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  }
]

const projects = [
  {
    title: 'Modern Family Home',
    category: 'Residential',
    location: 'Northern Beaches, Sydney',
    year: '2025'
  },
  {
    title: 'Commercial Office Fitout',
    category: 'Commercial',
    location: 'CBD, Sydney',
    year: '2024'
  },
  {
    title: 'Heritage Renovation',
    category: 'Renovation',
    location: 'Inner West, Sydney',
    year: '2024'
  },
  {
    title: 'Luxury Townhouses',
    category: 'Residential',
    location: 'Eastern Suburbs, Sydney',
    year: '2023'
  },
  {
    title: 'Industrial Warehouse',
    category: 'Commercial',
    location: 'Western Sydney',
    year: '2023'
  },
  {
    title: 'Kitchen & Living Extension',
    category: 'Extension',
    location: 'Hills District, Sydney',
    year: '2025'
  }
]

const testimonials = [
  {
    text: 'NGOV Construct delivered our dream home on time and within budget. Their attention to detail and communication throughout the process was exceptional.',
    name: 'Sarah Mitchell',
    role: 'Homeowner'
  },
  {
    text: 'Professional, reliable, and skilled. They handled our commercial fitout with minimal disruption to our business. Highly recommended.',
    name: 'David Chen',
    role: 'Business Owner'
  },
  {
    text: 'The team transformed our outdated property into a modern masterpiece. Their craftsmanship and project management were outstanding.',
    name: 'Emma Thompson',
    role: 'Property Investor'
  }
]
</script>
