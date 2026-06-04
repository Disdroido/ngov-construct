<template>
  <div>
    <AppHeader />

    <main>
      <!-- 01 Hero -->
      <section class="relative max-w-content mx-auto pt-10 px-8 md:px-8 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(320px,1fr)_1.15fr] lg:min-h-[540px] gap-12 items-stretch">
          <!-- Left: heading + CTA -->
          <div class="flex flex-col justify-between pt-6 pb-10 lg:pb-10">
            <div>
              <h1 class="font-display font-bold text-4xl sm:text-5xl lg:text-[5.5rem] lg:text-[clamp(44px,5.5vw,84px)] leading-[0.96] tracking-tight text-ink mb-5 lg:mb-6">
                Building what<br>stays standing —<br><span class="text-red">and remembering<br>what didn't.</span>
              </h1>
              <p class="text-base lg:text-[17px] leading-relaxed text-ink-soft max-w-[44ch] mb-6 lg:mb-9">
                NGOV is a small-construction firm working across New England — additions, renovations, outdoor living, and the occasional outbuilding. We take on six to eight projects a season, and we keep a record of every one.
              </p>
            </div>
            <div class="flex items-center gap-6">
              <button
                class="inline-flex items-center gap-3 bg-red text-white border-0 rounded-full py-3.5 pl-6 pr-2 font-sans font-semibold text-[15px] cursor-pointer no-underline transition-colors hover:bg-red-dark"
                @click="openInquiry"
              >
                Start your project
                <span class="w-9 h-9 bg-white text-red rounded-full grid place-items-center font-bold text-base">→</span>
              </button>
            </div>
          </div>
          <!-- Right: hero image -->
          <div class="relative overflow-hidden bg-navy clip-hero lg:min-h-0">
            <img src="/img/hero.png" alt="Looking up through timber framing on an NGOV build" class="w-full h-full object-cover block" />
            <div class="absolute inset-0 bg-gradient-to-br from-transparent from-50% to-[rgba(26,47,92,0.18)] to-100% pointer-events-none"></div>
            <!-- Decorative triangles -->
            <div class="absolute top-0 left-[12%] w-[18%] h-full clip-corner-tl bg-white/25 mix-blend-overlay pointer-events-none"></div>
            <div class="absolute top-0 left-[32%] w-[9%] h-[70%] clip-corner-tl bg-white/12 mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- 02 Featured -->
      <section class="max-w-content mx-auto mt-48 md:mt-52 px-8">
        <div class="text-center mb-12">
          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-tight text-ink mb-4">
            The work we're <span class="text-red">most proud of</span>
          </h2>
          <p class="max-w-[60ch] mx-auto text-ink-soft text-base leading-relaxed">
            Three recent projects — one finished, one just finished, one on site as we type.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-[18px]">
          <!-- Card 1: image card -->
          <article
            class="relative bg-white border border-rule p-7 min-h-[280px] flex flex-col justify-between overflow-hidden transition-transform duration-250 hover:-translate-y-[3px] bg-cover bg-center text-white"
            :style="{ backgroundImage: `url(${imgSrc(featured[0])})` }"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-ink/55 from-0% to-ink/10 to-100% pointer-events-none"></div>
            <div class="relative z-10">
              <div class="font-mono text-[10.5px] tracking-[0.16em] uppercase text-white/80 mb-2">{{ featured[0].type }} · {{ featured[0].city }}</div>
              <h3 class="font-display font-bold text-[22px] leading-[1.15] tracking-tight mb-3">
                <a href="#archive" class="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white" @click.prevent="open = featured[0]">{{ featured[0].title }}</a>
              </h3>
              <div class="font-display font-bold text-lg mt-3 mb-1.5">Completed {{ featured[0].completed }}</div>
              <p class="text-[13.5px] leading-relaxed text-white/85 mb-4">{{ featured[0].note }}</p>
            </div>
            <a class="relative z-10 self-start text-[13px] font-semibold bg-white/20 text-white px-4 py-2.5 rounded-full no-underline inline-flex items-center gap-2 backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer" href="#archive" @click.prevent="open = featured[0]">Read the file →</a>
          </article>
          <!-- Card 2: red -->
          <article class="relative bg-red text-white border border-red p-7 min-h-[280px] flex flex-col justify-between overflow-hidden transition-transform duration-250 hover:-translate-y-[3px]">
            <div>
              <div class="font-mono text-[10.5px] tracking-[0.16em] uppercase text-white/85 mb-2">{{ featured[1].type }} · {{ featured[1].city }}</div>
              <h3 class="font-display font-bold text-[22px] leading-[1.15] tracking-tight mb-3">
                <a href="#archive" class="text-white underline underline-offset-4 decoration-white/40" @click.prevent="open = featured[1]">{{ featured[1].title }}</a>
              </h3>
              <p class="text-[13.5px] leading-relaxed text-white/85 mt-3.5 mb-4">{{ featured[1].note }}</p>
            </div>
            <a class="self-start text-[13px] font-semibold bg-white/18 text-white px-4 py-2.5 rounded-full no-underline inline-flex items-center gap-2 hover:bg-white/28 transition-colors cursor-pointer" href="#archive" @click.prevent="open = featured[1]">Read the file →</a>
          </article>
          <!-- Card 3: navy -->
          <article class="relative bg-navy text-white border border-navy p-7 min-h-[280px] flex flex-col justify-between overflow-hidden transition-transform duration-250 hover:-translate-y-[3px]">
            <div>
              <div class="font-mono text-[10.5px] tracking-[0.16em] uppercase text-white/70 mb-2">{{ featured[2].type }} · ON SITE</div>
              <h3 class="font-display font-bold text-[22px] leading-[1.15] tracking-tight mb-3">
                <a href="#archive" class="text-white underline underline-offset-4 decoration-white/30" @click.prevent="open = featured[2]">{{ featured[2].title }}</a>
              </h3>
              <p class="text-[13.5px] leading-relaxed text-white/75 mt-3.5 mb-4">{{ featured[2].note }}</p>
            </div>
            <a class="self-start text-[13px] font-semibold bg-white/12 text-white px-4 py-2.5 rounded-full no-underline inline-flex items-center gap-2 hover:bg-white/20 transition-colors cursor-pointer" href="#archive" @click.prevent="open = featured[2]">Read the file →</a>
          </article>
        </div>
      </section>

      <!-- 03 Pitch -->
      <section class="relative max-w-content mx-auto mt-24 px-8">
        <div class="absolute -top-[30px] left-8 w-[150px] h-[150px] bg-warm-2 clip-corner-tl pointer-events-none" aria-hidden="true"
          style="background: linear-gradient(135deg, transparent 0%, transparent 30%, rgba(26,47,92,0.06) 30%, rgba(26,47,92,0.06) 50%, transparent 50%), #f1f0eb;">
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 items-end relative">
          <div></div>
          <div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(32px,4.2vw,56px)] leading-[1.02] tracking-tight text-ink mb-5 max-w-[22ch]">
              Decisions get made on the building. <span class="text-red">Not on a spreadsheet.</span>
            </h2>
            <p class="text-base leading-relaxed text-ink-soft max-w-[60ch] mb-7">
              Every site we walk gets a paper survey before a single tool comes out of the truck. Every survey gets a file — and every file stays, whether or not the building does. That's how we estimate, how we restore, and how we remember.
            </p>
            <a class="text-[13px] font-semibold bg-warm-2 text-ink px-5 py-3 rounded-full no-underline inline-flex items-center gap-2" href="#archive">How we work →</a>
          </div>
        </div>
      </section>

      <!-- 04 Gallery -->
      <section class="max-w-content mx-auto mt-32 px-8 relative" id="archive">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-8">
          <div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(34px,4.6vw,64px)] leading-none tracking-tight text-ink">
              Every project <span class="text-red">we've ever touched.</span>
            </h2>
          </div>
        </div>

        <!-- Mobile carousel -->
        <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 overscroll-x-contain md:hidden">
          <article
            v-for="p in PROJECTS"
            :key="'m' + p.id"
            class="flex-[0_0_78%] snap-start cursor-pointer"
            @click="open = p"
          >
            <div class="relative overflow-hidden bg-navy aspect-[3/2] shadow-[0_12px_30px_-22px_rgba(15,24,48,0.45)] transition-transform duration-300 ease-masonry">
              <img class="absolute inset-0 w-full h-full object-cover block transition-transform duration-600 ease-masonry" :src="imgSrc(p)" :alt="p.title" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/55 from-60% to-transparent to-100% pointer-events-none"></div>
              <div class="absolute left-3.5 right-3.5 bottom-3.5 text-white z-10">
                <div class="font-display font-bold text-[15px] sm:text-[17px] leading-[1.15] tracking-tight mb-1.5">{{ p.title }}</div>
                <div class="font-mono text-[10px] tracking-[0.14em] uppercase text-white/75 flex gap-3 items-center">
                  <span>{{ p.year }}</span>
                  <span class="w-[3px] h-[3px] bg-white/50 rounded-full"></span>
                  <span>{{ p.city }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Desktop masonry -->
        <div ref="wallRef" class="hidden md:block relative w-full" :style="{ height: layout.wallHeight + 'px' }">
          <article
            v-for="t in layout.tiles"
            :key="'d' + t.p.id"
            class="absolute cursor-pointer transition-transform duration-[0.45s] ease-masonry hover:z-5"
            :style="{ width: t.style.width + 'px', transform: t.style.transform }"
            @click="open = t.p"
          >
            <div
              class="relative overflow-hidden bg-navy shadow-[0_12px_30px_-22px_rgba(15,24,48,0.45)] transition-all duration-300 ease-masonry hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,24,48,0.35),0_12px_24px_-12px_rgba(15,24,48,0.2)]"
              :style="{ height: t.style._h + 'px' }"
            >
              <img class="absolute inset-0 w-full h-full object-cover block transition-transform duration-600 ease-masonry hover:scale-[1.04]" :src="imgSrc(t.p)" :alt="t.p.title" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/55 from-60% to-transparent to-100% pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-250"></div>
              <div class="absolute left-3.5 right-3.5 bottom-3.5 text-white z-10 opacity-0 translate-y-1.5 hover:opacity-100 hover:translate-y-0 transition-all duration-250">
                <div class="font-display font-bold text-[17px] leading-[1.15] tracking-tight mb-1.5">{{ t.p.title }}</div>
                <div class="font-mono text-[10px] tracking-[0.14em] uppercase text-white/75 flex gap-3 items-center">
                  <span>{{ t.p.year }}</span>
                  <span class="w-[3px] h-[3px] bg-white/50 rounded-full"></span>
                  <span>{{ t.p.city }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- 05 Why NGOV -->
      <section class="mt-32 bg-navy-dark text-white relative overflow-hidden" id="why">
        <div class="absolute top-0 right-0 w-[40%] h-full pointer-events-none"
          style="background: linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.025) 40%, rgba(255,255,255,0.025) 60%, transparent 60%);">
        </div>
        <div class="absolute top-0 left-0 w-20 h-20 bg-off-white clip-corner-tl"></div>
        <div class="max-w-content mx-auto px-8 pt-24 pb-20">
          <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start mb-14">
            <div>
              <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(34px,4.4vw,60px)] leading-[1.02] tracking-tight text-white mb-7">
                Move projects forward with <span class="text-red">proactive, informed decisions.</span>
              </h2>
              <a class="text-[13px] font-semibold bg-red text-white px-5 py-3 rounded-full no-underline inline-flex items-center gap-2" href="#contact">Learn more →</a>
            </div>
            <div class="relative h-[360px] bg-white overflow-hidden clip-why-img">
              <img src="/img/photo2.jpg" alt="Restoration site" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/12">
            <div class="font-mono text-[10.5px] tracking-[0.2em] uppercase text-white/55 mb-8 col-span-full">What we build / Eight services</div>
            <div v-for="s in services" :key="s.title" class="pt-6 border-t border-white/10">
              <h4 class="font-display font-bold text-lg tracking-tight text-white mb-3">{{ s.title }}</h4>
              <p class="text-sm leading-relaxed text-white/65 mb-4">{{ s.body }}</p>
              <a class="text-[12.5px] font-semibold text-red no-underline inline-flex items-center gap-1.5" href="#contact">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- 06 About -->
      <section class="max-w-content mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start" id="about">
        <div>
          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(34px,4.2vw,56px)] leading-[1.02] tracking-tight text-ink mb-8">
            Exceptional quality, <span class="text-red">in every detail.</span>
          </h2>
          <div class="text-sm text-ink-soft mt-8 pt-6 border-t border-rule max-w-[28ch] leading-relaxed">
            <strong class="text-ink font-semibold">NGOV Construct</strong><br>
            Builders, carpenters &amp; tradespeople
          </div>
        </div>
        <div class="text-base leading-[1.75] text-ink-2">
          <p class="font-display font-semibold text-xl leading-[1.45] text-ink tracking-tight mb-5">
            At NGOV Construct, we pride ourselves on delivering exceptional quality and craftsmanship in every project we undertake — from a single deck to a full first-floor addition.
          </p>
          <p class="mb-5">We are committed to turning your vision into reality. That commitment starts with how we listen — to what the brief actually is, what the site allows, and what the budget will sustain — and it carries through to the details no one sees once the job is finished. Every cut, joint, and fixing is meticulously crafted to meet the highest standards. The work behind the wall has to be as good as the work in front of it.</p>
          <p class="mb-5">Our focus is on durability and aesthetics in equal measure. A project should look as considered the day it's handed over as it does ten years later, and the choices we make in materials, framing, and finishes are made with that timeline in mind. We use what holds up, we build the way it should be built, and we don't take shortcuts that cost the client later.</p>
          <p class="mb-5">More than anything, we are in the business of building lasting relationships with our clients. Most of our work comes from referrals, return clients, and the families who lived through their last renovation with us and asked us back for the next one. That is not an accident. It is the result of unwavering dedication to excellence, clear communication on site, and a small team of tradespeople who care about what they put their name to.</p>
          <p>If you have a project in mind — whether it's framing, formwork, a granny flat, a new pergola, or something we haven't built yet — we'd like to hear about it.</p>
        </div>
      </section>

      <!-- 08 CTA -->
      <section class="relative mt-32 bg-navy-deep text-white overflow-hidden" id="contact">
        <div class="absolute inset-0 opacity-45" style="filter: grayscale(0.6);">
          <img src="/img/photo9.jpg" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,18,42,0.85)] to-[rgba(8,18,42,0.6)]"></div>
        <div class="relative z-[2] max-w-[880px] mx-auto px-8 pt-32 pb-32 text-center">
          <div class="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70 mb-6">A small practice, paying attention</div>
          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(34px,4.6vw,60px)] leading-[1.05] tracking-tight text-white mb-9">
            Tell us about your project. <span class="text-red">We'll come look at it.</span>
          </h2>
          <div class="flex flex-wrap items-center justify-center gap-6">
            <button
              class="inline-flex items-center gap-3 bg-white/8 text-white border border-white/20 rounded-full py-3.5 pl-6 pr-2 font-sans font-semibold text-base cursor-pointer no-underline backdrop-blur-sm transition-colors hover:bg-white/16"
              @click="openInquiry"
            >
              Start your project
              <span class="w-[42px] h-[42px] bg-red text-white rounded-full grid place-items-center font-bold text-base">→</span>
            </button>
            <span class="font-mono text-[11px] tracking-[0.16em] uppercase text-white/70">
              Or call <a href="tel:+141****0147" class="text-white underline underline-offset-[2px] decoration-white/30 ml-2">(413) 555 — 0147</a>
            </span>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />

    <!-- Project detail modal -->
    <div v-if="open" class="fixed inset-0 bg-[rgba(8,18,42,0.78)] backdrop-blur-sm z-50 flex items-center justify-center p-10 animate-fade-in" @click="open = null">
      <div class="bg-off-white max-w-[1100px] w-full max-h-[90vh] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] overflow-hidden animate-rise" @click.stop>
        <div class="relative min-h-[240px] md:min-h-[580px] overflow-hidden bg-navy" :class="{ 'grayscale-[0.6] contrast-[1.05]': open.status === 'lost' }">
          <img :src="imgSrc(open)" :alt="open.title" class="w-full h-full object-cover absolute inset-0" />
          <div class="absolute inset-0" :class="open.status === 'lost' ? 'bg-gradient-to-t from-[rgba(120,30,15,0.7)] to-[rgba(214,69,47,0.1)]' : 'bg-gradient-to-t from-ink/50 to-ink/10'"></div>
          <div class="absolute top-0 left-[-2%] w-[28%] h-full bg-white/16 clip-tile-cut-l mix-blend-overlay pointer-events-none"></div>
          <div class="absolute top-0 right-[-2%] w-[12%] h-1/2 bg-white/10 clip-tile-cut-r mix-blend-overlay pointer-events-none"></div>
          <div class="absolute top-3.5 right-3.5 font-mono text-[9.5px] tracking-[0.16em] text-white/85 px-2 py-1 border border-white/30 uppercase bg-ink/30 backdrop-blur-sm">№ {{ plate(open) }}</div>
          <div v-if="open.status === 'lost'" class="absolute top-3.5 left-3.5 font-mono text-[9.5px] tracking-[0.18em] uppercase px-2 py-1 text-white bg-red backdrop-blur-sm">In Memoriam</div>
          <div v-else-if="open.status === 'active'" class="absolute top-3.5 left-3.5 font-mono text-[9.5px] tracking-[0.18em] uppercase px-2 py-1 text-white bg-[#c87b2a] backdrop-blur-sm">On Site</div>
        </div>
        <div class="p-7 md:p-12 overflow-y-auto relative">
          <button class="absolute top-5 right-5 bg-white border border-rule w-9 h-9 rounded-full text-lg cursor-pointer text-ink grid place-items-center hover:bg-ink hover:text-white transition-colors" aria-label="Close" @click="open = null">×</button>
          <div class="font-mono text-[10.5px] tracking-[0.18em] uppercase text-red mb-4">File № {{ plate(open) }} / {{ open.type }}</div>
          <h3 class="font-display font-bold text-[36px] leading-[1.05] tracking-tight text-ink mb-3">{{ open.title }}</h3>
          <div class="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-soft pb-5.5 border-b border-rule">
            {{ open.city }} · Built {{ open.year }}<template v-if="open.completed"> · Completed {{ open.completed }}</template><template v-if="open.lost"> · Lost {{ open.lost }}</template>
          </div>
          <dl class="mt-6 grid grid-cols-[110px_1fr] gap-3 gap-x-[18px] text-[13.5px]">
            <dt class="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-0.5">Status</dt>
            <dd class="m-0 text-ink-2">{{ open.status === 'lost' ? 'No longer extant' : open.status === 'active' ? 'Active restoration' : 'Standing' }}</dd>
            <dt class="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-0.5">Category</dt>
            <dd class="m-0 text-ink-2">{{ open.tag }}</dd>
            <dt class="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-0.5">Materials</dt>
            <dd class="m-0 text-ink-2">{{ open.materials }}</dd>
            <dt class="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-0.5">Scope</dt>
            <dd class="m-0 text-ink-2">{{ open.scope }}</dd>
            <template v-if="open.lost"><dt class="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-0.5">Year lost</dt><dd class="m-0 text-ink-2">{{ open.lost }}</dd></template>
            <template v-if="open.completed"><dt class="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft pt-0.5">Completed</dt><dd class="m-0 text-ink-2">{{ open.completed }}</dd></template>
          </dl>
          <div class="mt-7 p-5 bg-white border-l-[3px] border-red text-[15px] leading-relaxed text-ink italic">
            {{ open.note }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'NGOV Construct — Building what stays standing, and remembering what didn\'t',
  meta: [
    { name: 'description', content: 'NGOV Construct — a small-construction firm working across New England. Additions, renovations, outdoor living, and the occasional outbuilding.' }
  ]
})

interface Project {
  id: string
  title: string
  year: number
  completed?: number
  lost?: number
  city: string
  type: string
  status: 'completed' | 'active' | 'lost'
  weight: number
  tag: string
  materials: string
  scope: string
  note: string
  img: number
}

const inquiryOpen = ref(false)
provide('inquiryOpen', inquiryOpen)
function openInquiry() { inquiryOpen.value = true }

const PROJECTS: Project[] = [
  { id: 'ng-001', title: 'Beacon Street Kitchen', year: 1962, completed: 2024, city: 'Hensley, MA', type: 'Kitchen Renovation', status: 'completed', weight: 3, tag: 'Kitchen', materials: 'Oak cabinetry, soapstone counters, white oak flooring', scope: 'Full gut renovation, new layout, custom cabinetry', note: 'The original kitchen hadn\'t been touched since 1962. Two windows opened up, one wall came down. The family eats in the kitchen now.', img: 0 },
  { id: 'ng-002', title: 'Fenwick Rear Addition', year: 1928, completed: 2023, city: 'Providence, RI', type: 'Addition', status: 'completed', weight: 2, tag: 'Addition', materials: 'Cedar siding, white oak floors, fiber-cement trim', scope: '260 sq ft family room + half bath', note: 'Matched the existing brackets on the eaves — they were milled by hand in 1928, so we milled the new ones by hand too.', img: 1 },
  { id: 'ng-003', title: 'Maple Avenue Bathroom', year: 1955, completed: 2024, city: 'Dunmore, PA', type: 'Bath Renovation', status: 'completed', weight: 2, tag: 'Bath', materials: 'Marble tile, brass fixtures, walnut vanity', scope: 'Primary bath gut + new tile shower', note: 'Took out a cast-iron tub the size of a small car. The new one weighs a third as much and holds twice the water.', img: 2 },
  { id: 'ng-004', title: 'Coburn Garage Build', year: 2024, completed: 2024, city: 'Lowell, MA', type: 'Detached Garage', status: 'completed', weight: 2, tag: 'Outbuilding', materials: 'Hemlock frame, board-and-batten siding, metal roof', scope: '24×24 detached two-car with loft', note: 'Started in April. Done by October. The loft is for the model railroad.', img: 3 },
  { id: 'ng-005', title: 'The Verity Mudroom', year: 1971, completed: 2023, city: 'Newburgh, NY', type: 'Addition', status: 'completed', weight: 2, tag: 'Mudroom', materials: 'Slate floor, beadboard, white oak benches', scope: '8×14 mudroom + half-bath off the kitchen', note: 'Four kids, three dogs, two bikes. The mudroom had to earn its keep, and it does.', img: 4 },
  { id: 'ng-006', title: 'Stonington Front Porch', year: 1908, completed: 2024, city: 'Stonington, CT', type: 'Porch Rebuild', status: 'completed', weight: 2, tag: 'Porch', materials: 'Mahogany decking, hand-turned balusters, slate steps', scope: 'Full porch rebuild on original footprint', note: 'Original porch was rotted through. We rebuilt it joist-for-joist, kept the column details, swapped the decking for mahogany.', img: 5 },
  { id: 'ng-007', title: 'The Workshop', year: 1971, completed: 2004, city: 'Hensley, MA', type: 'Founder\'s Shop', status: 'completed', weight: 2, tag: 'Our Shop', materials: 'Pine frame, corrugated steel, polished concrete', scope: 'Ongoing in-house improvements', note: 'Where the firm started. We renovate it ourselves, in slow weeks between jobs.', img: 6 },
  { id: 'ng-008', title: 'Dunbar Sunroom', year: 1992, completed: 2024, city: 'Dunbar, VT', type: 'Sunroom', status: 'completed', weight: 3, tag: 'Sunroom', materials: 'Cedar, glass, radiant floor', scope: '3-season sunroom + new deck', note: 'South-facing. Catches sun nine months of the year. The cat lives there now.', img: 7 },
  { id: 'ng-009', title: 'Greavey Dormer', year: 1989, completed: 2023, city: 'Salem, NH', type: 'Dormer Addition', status: 'completed', weight: 2, tag: 'Dormer', materials: 'Asphalt shingles, copper flashing, fir framing', scope: 'Shed dormer + new bath on second floor', note: 'Added 180 square feet of headroom upstairs. The new bathroom is where the chimney used to be.', img: 8 },
  { id: 'ng-010', title: 'East Warren Kitchen', year: 1856, completed: 2023, city: 'East Warren, VT', type: 'Kitchen Renovation', status: 'completed', weight: 2, tag: 'Kitchen', materials: 'Reclaimed pine, soapstone, original beams exposed', scope: 'Kitchen + pantry renovation', note: 'Pulled down a 1980s dropped ceiling and found hand-hewn beams underneath. We kept them.', img: 9 },
  { id: 'ng-011', title: 'Harbor Cottage', year: 1950, city: 'Rockland, ME', type: 'Whole-Home Renovation', status: 'active', weight: 3, tag: 'Renovation', materials: 'Cedar shingle, fiber-cement, copper flashing', scope: 'Interior gut + new envelope, Phase 2 of 3', note: 'Started in March. New copper roof scheduled for June. Owners moved out for the summer.', img: 10 },
  { id: 'ng-012', title: 'Ansell Pool House', year: 2024, completed: 2024, city: 'Hartford, CT', type: 'Outbuilding', status: 'completed', weight: 2, tag: 'Pool House', materials: 'Brick veneer, cedar siding, IPE decking', scope: 'Pool house + outdoor shower + storage', note: '240 square feet. Two changing rooms, an outdoor shower, and a beer fridge.', img: 11 },
  { id: 'ng-013', title: 'Pritchard Barn Conversion', year: 1902, completed: 2024, city: 'Wells, ME', type: 'Adaptive Reuse', status: 'completed', weight: 3, tag: 'Barn → Studio', materials: 'Hemlock frame restored, fiber-cement, slate', scope: 'Barn converted to art studio + guest suite', note: 'The middle bay is now a working art studio with northern light. The original hayloft stayed where it was.', img: 0 },
  { id: 'ng-014', title: 'Cobb\'s Point Deck', year: 1985, completed: 2023, city: 'Cobb\'s Point, ME', type: 'Deck + Outdoor Living', status: 'completed', weight: 2, tag: 'Deck', materials: 'IPE decking, stainless cable rail, granite piers', scope: '400 sq ft wraparound deck with kitchen', note: 'Hurricane-rated cable rail. The owners cook outside from May through October.', img: 1 },
  { id: 'ng-015', title: 'Thurlow Two-Bath', year: 1943, completed: 2024, city: 'Marblehead, MA', type: 'Bath Renovation (x2)', status: 'completed', weight: 2, tag: 'Bath', materials: 'Subway tile, marble mosaic, brass', scope: 'Primary + guest bath, same scope each', note: 'Two bathrooms, ten weeks. Owners showered at the gym. They have not forgiven us, but they\'re happy.', img: 2 },
  { id: 'ng-016', title: 'Kellerman ADU', year: 2023, completed: 2024, city: 'Portsmouth, NH', type: 'Accessory Dwelling Unit', status: 'completed', weight: 3, tag: 'ADU', materials: 'SIP panels, cedar siding, metal roof', scope: '640 sq ft 1-bedroom ADU above garage', note: 'First ADU permitted in the neighborhood. Took eight months and three zoning hearings to get the permit. Six months to build.', img: 3 },
  { id: 'ng-017', title: 'Meacham Roof + Siding', year: 1972, city: 'Adams, MA', type: 'Envelope Replacement', status: 'active', weight: 2, tag: 'Roof + Siding', materials: 'Standing-seam metal, fiber-cement, copper', scope: 'Full roof + siding + insulation upgrade', note: 'Currently on site. Found rot in three places we didn\'t expect. We\'re rebuilding the soffits before the weather turns.', img: 4 },
  { id: 'ng-018', title: 'Perry Garage Conversion', year: 1965, completed: 2023, city: 'Perry, NY', type: 'Garage Conversion', status: 'completed', weight: 2, tag: 'Garage → Studio', materials: 'Insulated panels, drywall, oak floors', scope: '2-car garage converted to home office + studio', note: 'Owner works from home full-time now. The cars stay outside. Nobody is complaining.', img: 5 },
  { id: 'ng-019', title: 'Wyatt Basement Finish', year: 1978, completed: 2023, city: 'Mt. Monadnock, NH', type: 'Basement Finish', status: 'completed', weight: 2, tag: 'Basement', materials: 'LVT flooring, drywall, custom built-ins', scope: '1,100 sq ft basement: rec room, bath, office', note: 'Sealed and insulated before we touched a single finish. Dry basement, warm basement. That\'s the order.', img: 6 },
  { id: 'ng-020', title: 'Fairlee Boathouse', year: 1908, completed: 2023, city: 'Lake Fairlee, VT', type: 'Outbuilding Restoration', status: 'completed', weight: 2, tag: 'Boathouse', materials: 'Hemlock pilings, cedar shingle, copper', scope: 'Foundation rebuild + new roof + interior', note: 'Stores the family\'s canoes now, same as the day it was built. Just a different family.', img: 7 },
  { id: 'ng-021', title: 'Worcester Café Fit-out', year: 1918, city: 'Worcester, MA', type: 'Small Commercial', status: 'active', weight: 3, tag: 'Commercial', materials: 'Reclaimed brick, white oak, brass', scope: 'Coffee shop build-out in former retail space', note: 'Decommissioned 2019 as a corner store. Opening as a coffee shop in August. The original tin ceiling stayed.', img: 8 },
  { id: 'ng-022', title: 'Chester Pergola + Patio', year: 2023, completed: 2023, city: 'Chester, VT', type: 'Outdoor Structure', status: 'completed', weight: 2, tag: 'Outdoor Living', materials: 'White oak frame, bluestone patio, gas firepit', scope: '12×16 pergola + 400 sq ft patio + firepit', note: 'Three weeks on site. Hosts the family\'s summer dinners and the neighborhood\'s autumn ones.', img: 9 },
  { id: 'ng-023', title: 'New London Window Replace', year: 1902, completed: 2024, city: 'New London, CT', type: 'Window Replacement', status: 'completed', weight: 2, tag: 'Windows', materials: 'Marvin wood-clad windows, copper flashing', scope: 'Replace 22 windows, match historical sashes', note: 'Worked from a scaffold for four weeks. Matched every sash divide. The historic commission signed off in one visit.', img: 10 },
  { id: 'ng-024', title: 'Barre Stair Rebuild', year: 1889, completed: 2024, city: 'Barre, VT', type: 'Interior Carpentry', status: 'completed', weight: 2, tag: 'Stairs', materials: 'Quartersawn oak treads, walnut handrail', scope: 'Full interior stair rebuild, code upgrade', note: 'Original stairs were treacherous and beautiful. New stairs are safer and almost as beautiful.', img: 11 },
  { id: 'ng-025', title: 'Halverson Home Addition', year: 1901, completed: 1998, city: 'Hensley, MA', type: 'Addition', status: 'completed', weight: 2, tag: 'Addition', materials: 'Clapboard, fieldstone foundation, slate', scope: '12×16 reading room off the kitchen', note: 'The founder\'s own house. The reading room is where the firm\'s books live.', img: 0 },
  { id: 'ng-026', title: 'Revere Three-Season Porch', year: 2024, completed: 2024, city: 'Revere, MA', type: 'Porch Addition', status: 'completed', weight: 2, tag: 'Porch', materials: 'Cedar, screened panels, slate floor', scope: '14×20 screened porch + composite deck', note: 'Built start-to-finish in seven weeks. The screens come down for winter and live in the garage.', img: 1 },
  { id: 'ng-027', title: 'Corbin Greenhouse', year: 1937, completed: 2024, city: 'Cheshire, CT', type: 'Outbuilding', status: 'completed', weight: 3, tag: 'Greenhouse', materials: 'Cedar frame, double-wall polycarbonate, slate floor', scope: '10×14 lean-to greenhouse + raised beds', note: 'Lean-to against the south side of an existing garage. Three feet of snow load, vented for July.', img: 2 },
  { id: 'ng-028', title: 'Alden Cottage Pre-Build', year: 1859, city: 'Duxbury, MA', type: 'Planning + Survey', status: 'active', weight: 2, tag: 'Pre-Construction', materials: 'TBD — survey in progress', scope: 'Whole-home renovation, currently in design', note: 'Survey phase. Owner is the fifth generation in the house. We expect to be on site by September.', img: 3 }
]

const services = [
  { title: 'Framing', body: 'Wall, floor, and roof framing for new builds, additions, and renovations. Square, level, and plumb — the foundation everything else sits on.' },
  { title: 'First Floor Additions', body: 'Ground-level additions matched to the existing house. Foundations, framing, envelope, finish — we run the whole job.' },
  { title: 'Decking', body: 'Timber, composite, and hardwood decks. Engineered substructures, hidden fasteners, and finishes built to outlast the seasons.' },
  { title: 'Form Working', body: 'Concrete formwork for footings, slabs, retaining walls, and structural elements. Built strong, stripped clean.' },
  { title: 'Granny Flats', body: 'Self-contained secondary dwellings — design through completion. We handle the council paperwork, the build, and the connections.' },
  { title: 'Carpentry', body: 'Rough and finish carpentry — structural, architectural, and bespoke. The trade the firm was built on.' },
  { title: 'Exposed Timber Pergolas', body: 'Hardwood pergolas with exposed joinery — the kind of structure where the construction is the finish.' },
  { title: 'Dincel', body: 'Dincel structural walling for basements, retaining, and load-bearing applications. Faster on site, stronger on paper.' }
]

const featured = PROJECTS.filter(p => ['ng-001', 'ng-016', 'ng-021'].includes(p.id))

function imgSrc(p: Project) {
  return `/img/photo${p.img % 12}.jpg`
}
function plate(p: Project) {
  return String(PROJECTS.indexOf(p) + 1).padStart(3, '0')
}

// --- detail modal ---
const open = ref<Project | null>(null)
watch(open, (v) => {
  if (import.meta.client) document.body.style.overflow = v ? 'hidden' : ''
})
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = null
}

// --- desktop masonry ---
const RANDOMNESS = 0.85
const GUTTER = 16
const wallRef = ref<HTMLElement | null>(null)
const wallWidth = ref(1200)

const columns = computed(() =>
  wallWidth.value > 1200 ? 5 : wallWidth.value > 900 ? 4 : wallWidth.value > 620 ? 3 : wallWidth.value > 420 ? 2 : 1
)

function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return (s >>> 0) / 4294967296
  }
}

const layout = computed(() => {
  const containerWidth = wallWidth.value
  const cols = columns.value
  const colWidth = (containerWidth - GUTTER * (cols - 1)) / cols
  const colHeights = Array(cols).fill(0)
  const rand = seeded(2025 + cols * 11 + Math.round(RANDOMNESS * 1000))

  const tiles = PROJECTS.map((p, i) => {
    let span = 1
    if (p.weight >= 4) span = Math.min(2, cols)
    else if (p.weight >= 3) span = rand() > 0.5 ? 2 : 1
    if (cols < 3) span = 1

    const w = colWidth * span + GUTTER * (span - 1)

    const baseRatio = p.weight >= 4 ? 1.05 : p.weight >= 3 ? 1.2 : [0.95, 1.15, 1.4, 0.85][i % 4]
    const jitter = 1 + (rand() - 0.5) * 0.32 * RANDOMNESS
    const h = Math.round(w * baseRatio * jitter)

    let bestCol = 0
    let bestScore = Infinity
    for (let c = 0; c <= cols - span; c++) {
      const top = Math.max(...colHeights.slice(c, c + span))
      if (top < bestScore) {
        bestScore = top
        bestCol = c
      }
    }

    const yOffset = Math.round(rand() * 80 * RANDOMNESS)
    const rotChance = RANDOMNESS > 0.3 ? 0.18 * Math.min(1, RANDOMNESS) : 0
    const rot = rand() < rotChance ? (rand() - 0.5) * 1.4 : 0

    const x = bestCol * (colWidth + GUTTER)
    const y = bestScore + yOffset

    for (let c = bestCol; c < bestCol + span; c++) {
      colHeights[c] = y + h + GUTTER
    }

    return {
      p,
      style: {
        width: w,
        transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
        _h: h
      }
    }
  })

  return { tiles, wallHeight: Math.max(...colHeights) }
})

function measure() {
  if (wallRef.value) wallWidth.value = wallRef.value.offsetWidth
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure)
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', measure)
  window.removeEventListener('keydown', onKey)
  if (import.meta.client) document.body.style.overflow = ''
})
</script>
