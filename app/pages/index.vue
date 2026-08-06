<template>
  <div>
    <AppHeader />

    <main>
      <!-- 01 Hero -->
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-left">
            <div>
              <h1>Building what<br>stays standing.<br><em>And remembering<br>what didn't.</em></h1>
              <p class="hero-desc">NGOV is a small construction firm working across New South Wales. Additions, renovations, outdoor living, and the occasional outbuilding. We take on six to eight projects a season, and we keep a record of every one.</p>
            </div>
            <div class="cta-row">
              <button class="btn-primary large" @click="openInquiry">Start your project<span class="ico">&#8594;</span></button>
            </div>
          </div>
          <div class="hero-right">
            <img src="/img/hero.png" alt="Looking up through timber framing on an NGOV build" />
            <div class="hero-tri a"></div>
            <div class="hero-tri b"></div>
          </div>
        </div>
      </section>

      <!-- 02 Featured -->
      <section class="featured">
        <div class="featured-head">
          <h2>The work we're <em>most proud of</em></h2>
          <p>Three recent projects. One finished, one just finished, one on site as we type.</p>
        </div>
        <div class="featured-cards">
          <article class="fcard featured-img" :style="{ backgroundImage: `url('${imgSrc(featured[0])}')` }">
            <div>
              <div class="meta">{{ featured[0].type }} · {{ featured[0].city }}</div>
              <h3><a href="#archive" @click.prevent="open = featured[0]">{{ featured[0].title }}</a></h3>
              <div class="stat">Completed {{ featured[0].completed }}</div>
              <p>{{ featured[0].note }}</p>
            </div>
            <a class="more" href="#archive" @click.prevent="open = featured[0]">Read the file →</a>
          </article>
          <article class="fcard featured-img" :style="{ backgroundImage: `url('${imgSrc(featured[1])}')` }">
            <div>
              <div class="meta">{{ featured[1].type }} · {{ featured[1].city }}</div>
              <h3><a href="#archive" @click.prevent="open = featured[1]">{{ featured[1].title }}</a></h3>
              <p style="margin-top: 14px">{{ featured[1].note }}</p>
            </div>
            <a class="more" href="#archive" @click.prevent="open = featured[1]">Read the file →</a>
          </article>
          <article class="fcard featured-img" :style="{ backgroundImage: `url('${imgSrc(featured[2])}')` }">
            <div>
              <div class="meta">{{ featured[2].type }} · ON SITE</div>
              <h3><a href="#archive" @click.prevent="open = featured[2]">{{ featured[2].title }}</a></h3>
              <p style="margin-top: 14px">{{ featured[2].note }}</p>
            </div>
            <a class="more" href="#archive" @click.prevent="open = featured[2]">Read the file →</a>
          </article>
        </div>
      </section>

      <!-- 03 Pitch -->
      <section class="pitch">
        <div class="pitch-corner" aria-hidden></div>
        <div class="pitch-grid">
          <div></div>
          <div>
            <h2>Decisions get made on the building. <em>Not on a spreadsheet.</em></h2>
            <p>Every site we walk gets a paper survey before a single tool comes out of the truck. Every survey gets a file. And every file stays, whether or not the building does. That is how we estimate, how we restore, and how we remember. No guesswork, no missing dimensions, no surprises halfway through a framing job. When you hire a builder who surveys first, you pay for what the house actually needs. Not what someone guessed from the curb.</p>
            <a class="more" href="#archive">How we work →</a>
          </div>
        </div>
      </section>

      <!-- 04 Gallery -->
      <section class="gallery-section" id="archive">
        <div class="gallery-head">
          <div>
            <h2>Every project <em>we've ever touched.</em></h2>
          </div>
        </div>

        <!-- Mobile carousel -->
        <div class="wall-mobile">
          <article
            v-for="p in PROJECTS"
            :key="'m' + p.id"
            class="tile"
            @click="open = p"
          >
            <div class="tile-frame">
              <img class="tile-img" :src="imgSrc(p)" :alt="`${p.title} — ${p.type}, ${p.city}`" loading="lazy" />
            </div>
          </article>
        </div>
        <!-- Desktop masonry -->
        <div ref="wallRef" class="wall-desktop" :style="{ height: layout.wallHeight + 'px' }">
          <article
            v-for="t in layout.tiles"
            :key="'d' + t.p.id"
            class="tile"
            :style="{ width: t.style.width + 'px', transform: t.style.transform }"
            @click="open = t.p"
          >
            <div class="tile-frame" :style="{ height: t.style._h + 'px' }">
              <img class="tile-img" :src="imgSrc(t.p)" :alt="`${t.p.title} — ${t.p.type}, ${t.p.city}`" loading="lazy" />
            </div>
          </article>
        </div>
      </section>

      <!-- 05 Why NGOV -->
      <section class="why" id="why">
        <div class="why-inner">
          <div class="why-top">
            <div>
              <h2>Move projects forward with <em>proactive, informed decisions.</em></h2>
              <a class="more" href="#contact">Learn more →</a>
            </div>
            <div class="image">
              <img src="/img/works/WhatsApp%20Image%202026-07-30%20at%208.55.29%20PM.jpeg" alt="NGOV utes on site at a scaffolded two-storey build" />
            </div>
          </div>
          <div class="why-services">
            <div class="label">What we build / Eight services</div>
            <div v-for="s in services" :key="s.title" class="item">
              <h4>{{ s.title }}</h4>
              <p>{{ s.body }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 06 About -->
      <section class="contention" id="about">
        <div class="contention-left">
          <h2>Exceptional quality, <em>in every detail.</em></h2>
          <div class="signature">
            <strong>NGOV Construct</strong><br>
            Builders, carpenters &amp; tradespeople
          </div>
        </div>
        <div class="contention-right">
          <p class="lead">
            At NGOV Construct, we deliver exceptional quality and craftsmanship on every residential job we take on. From a single deck rebuild to a full first-floor addition, the standard is the same. Get it right, keep it tight, and never cut a corner the homeowner will feel later.
          </p>
          <p>
            Turning your vision into reality starts with how we listen. Before we quote a number or pull a permit, we walk the site with you and understand the brief, the budget, and what the house will actually allow. That same attention carries through to the details nobody sees once the job is finished. Every cut, joint, and fixing is checked. The work behind the wall matters as much as the work in front of it. If you are searching for a framing contractor, a finish carpenter, or a custom home builder who treats every stud like it matters, you have found the right crew.
          </p>
          <p>
            Durability and aesthetics go hand in hand. We choose materials that hold up in Australian conditions: cedar cladding, white oak flooring, Colorbond steel roofing, fiber-cement weatherboards, and treated pine framing stock rated for termite zones. A kitchen renovation or bathroom remodel should look as considered on day one as it does ten years later. No shortcuts disguised as savings. No builder-grade callbacks. Just solid residential construction that ages well.
          </p>
          <p>
            Most of our work comes from referrals and repeat clients. That is not an accident. Families live through a home renovation with us and call us back for the next project: the screened porch they always wanted, the mudroom that finally handles four kids and two dogs, the garage conversion that becomes the home office. We are a small team of licensed carpenters, framers, and tradespeople who show up on time, communicate clearly, and put our name on every door casing and deck joist we install.
          </p>
          <p>
            If you have a project in mind, whether it is framing and formwork, a granny flat or ADU, a new timber pergola, or something we have not built yet, we would like to hear about it. Based in Hensley, NSW and serving homeowners across New South Wales, including Sydney, the Central Coast, Newcastle, Wollongong, the Blue Mountains, and the Hunter Valley, we take on six to eight projects a season and give each one the focus it deserves.
          </p>
        </div>
      </section>

      <!-- 08 CTA -->
      <section class="cta-block" id="contact">
        <div class="bg"><img src="/img/photo9.jpg" alt="" /></div>
        <div class="cta-inner">
          <div class="pre">A small practice, paying attention</div>
          <h2>Tell us about your project. <em>We'll come look at it.</em></h2>
          <div class="cta-row">
            <button class="btn-primary large ghost" @click="openInquiry">Start your project<span class="ico">&#8594;</span></button>
            <span class="or-call">Or call <a href="tel:+61410901455">0410 901 455</a></span>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />

    <!-- Project detail modal -->
    <div v-if="open" class="modal-scrim" @click="open = null">
      <div class="modal" @click.stop>
        <div class="modal-img" :class="{ lost: open.status === 'lost' }">
          <img :src="imgSrc(open)" :alt="`${open.title} — ${open.type}, ${open.city}`" />
          <div class="tint"></div>
          <div class="tile-cut"></div>
          <div class="tile-cut2"></div>
          <div class="tile-plate">№ {{ plate(open) }}</div>
          <div v-if="open.status === 'lost'" class="tile-status lost">In Memoriam</div>
          <div v-else-if="open.status === 'active'" class="tile-status active">On Site</div>
        </div>
        <div class="modal-body">
          <button class="close" aria-label="Close" @click="open = null">×</button>
          <div class="plate">File № {{ plate(open) }} / {{ open.type }}</div>
          <h3>{{ open.title }}</h3>
          <div class="subline">
            {{ open.city }} · Built {{ open.year }}<template v-if="open.completed"> · Completed {{ open.completed }}</template><template v-if="open.lost"> · Lost {{ open.lost }}</template>
          </div>
          <dl class="spec">
            <dt>Status</dt>
            <dd>{{ open.status === 'lost' ? 'No longer extant' : open.status === 'active' ? 'Active restoration' : 'Standing' }}</dd>
            <dt>Category</dt>
            <dd>{{ open.tag }}</dd>
            <dt>Materials</dt>
            <dd>{{ open.materials }}</dd>
            <dt>Scope</dt>
            <dd>{{ open.scope }}</dd>
            <template v-if="open.lost"><dt>Year lost</dt><dd>{{ open.lost }}</dd></template>
            <template v-if="open.completed"><dt>Completed</dt><dd>{{ open.completed }}</dd></template>
          </dl>
          <div class="note">{{ open.note }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const pageTitle = 'NGOV Construct | Carpenters & Builders — Sydney & NSW'
const pageDesc = 'Carpenters & builders serving Sydney & regional NSW. First-floor additions, framing, decking, granny flats, pergolas & structural LVL work.'

useSeoMeta({
  title: pageTitle,
  description: pageDesc,
  ogTitle: pageTitle,
  ogDescription: pageDesc,
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: 'NGOV Construct',
  ogImage: `${siteUrl}/img/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDesc,
  twitterImage: `${siteUrl}/img/og-image.jpg`,
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'NGOV Construct',
      telephone: '+61 410 901 455',
      slogan: 'Building what stays standing.',
      description: pageDesc,
      url: siteUrl,
      logo: `${siteUrl}/img/ngov-logo.png`,
      image: `${siteUrl}/img/og-image.jpg`,
      areaServed: ['Sydney NSW', 'Central Coast NSW', 'Newcastle NSW', 'Wollongong NSW', 'Blue Mountains NSW', 'Hunter Valley NSW'],
      knowsAbout: ['First-floor additions', 'Framing', 'Decking', 'Concrete formwork', 'Granny flats & ADUs', 'Carpentry', 'Exposed timber pergolas', 'Dincel walling', 'Structural LVL construction', 'Curved skylights']
    })
  }]
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
  { id: 'ng-036', title: 'First Floor Addition', year: 2026, city: 'Sydney, NSW', type: 'Addition — Subfloor Steel', status: 'active', weight: 3, tag: 'Addition', materials: 'Steel bearers, brick piers, timber joists', scope: 'Steel bearers laid over brick piers, subfloor stage', note: 'Steel going down over the piers. Everything level before the joists land.', img: 32 },
  { id: 'ng-037', title: 'First Floor Addition', year: 2026, city: 'Sydney, NSW', type: 'Addition — Brickwork', status: 'active', weight: 2, tag: 'Addition', materials: 'Face brick cavity walls, brick piers, Colorbond roofing', scope: 'Subfloor brickwork and piers before the roof goes on', note: 'Cavity brickwork up, piers set, roof sheets on site.', img: 33 },
  { id: 'ng-038', title: 'Structural Opening', year: 2026, city: 'Sydney, NSW', type: 'Load-Bearing Wall Removal', status: 'active', weight: 2, tag: 'Structural', materials: 'Engineered LVL beam, structural timber framing', scope: 'Load-bearing wall removed, LVL beam carrying the roof above', note: 'The wall came out and the beam carries everything it used to. The living room opens straight onto the deck now.', img: 34 },
  { id: 'ng-005', title: 'The Verity Mudroom', year: 1971, completed: 2023, city: 'Hunter Valley, NSW', type: 'Addition', status: 'completed', weight: 2, tag: 'Mudroom', materials: 'Slate floor, beadboard, white oak benches', scope: '8×14 mudroom + half-bath off the kitchen', note: 'Four kids, three dogs, two bikes. The mudroom had to earn its keep, and it does.', img: 3 },
  { id: 'ng-007', title: 'The Workshop', year: 1971, completed: 2004, city: 'Hensley, NSW', type: 'Founder\'s Shop', status: 'completed', weight: 2, tag: 'Our Shop', materials: 'Pine frame, corrugated steel, polished concrete', scope: 'Ongoing in-house improvements', note: 'Where the firm started. We renovate it ourselves, in slow weeks between jobs.', img: 4 },
  { id: 'ng-008', title: 'Dunbar Sunroom', year: 1992, completed: 2024, city: 'Southern Highlands, NSW', type: 'Sunroom', status: 'completed', weight: 3, tag: 'Sunroom', materials: 'Cedar, glass, radiant floor', scope: '3-season sunroom + new deck', note: 'South-facing. Catches sun nine months of the year. The cat lives there now.', img: 5 },
  { id: 'ng-010', title: 'East Warren Kitchen', year: 1856, completed: 2023, city: 'Bathurst, NSW', type: 'Kitchen Renovation', status: 'completed', weight: 2, tag: 'Kitchen', materials: 'Reclaimed pine, soapstone, original beams exposed', scope: 'Kitchen + pantry renovation', note: 'Pulled down a 1980s dropped ceiling and found hand-hewn beams underneath. We kept them.', img: 6 },
  { id: 'ng-011', title: 'Harbor Cottage', year: 1950, city: 'Coffs Harbour, NSW', type: 'Whole-Home Renovation', status: 'active', weight: 3, tag: 'Renovation', materials: 'Cedar shingle, fiber-cement, copper flashing', scope: 'Interior gut + new envelope, Phase 2 of 3', note: 'Started in March. New copper roof scheduled for June. Owners moved out for the summer.', img: 7 },
  { id: 'ng-012', title: 'Ansell Pool House', year: 2024, completed: 2024, city: 'Parramatta, NSW', type: 'Outbuilding', status: 'completed', weight: 2, tag: 'Pool House', materials: 'Brick veneer, cedar siding, IPE decking', scope: 'Pool house + outdoor shower + storage', note: '240 square feet. Two changing rooms, an outdoor shower, and a beer fridge.', img: 8 },
  { id: 'ng-016', title: 'Kellerman ADU', year: 2023, completed: 2024, city: 'Manly, NSW', type: 'Accessory Dwelling Unit', status: 'completed', weight: 3, tag: 'ADU', materials: 'SIP panels, cedar siding, metal roof', scope: '640 sq ft 1-bedroom ADU above garage', note: 'First ADU permitted in the neighborhood. Took eight months and three zoning hearings to get the permit. Six months to build.', img: 9 },
  { id: 'ng-018', title: 'Perry Garage Conversion', year: 1965, completed: 2023, city: 'Dubbo, NSW', type: 'Garage Conversion', status: 'completed', weight: 2, tag: 'Garage → Studio', materials: 'Insulated panels, drywall, oak floors', scope: '2-car garage converted to home office + studio', note: 'Owner works from home full-time now. The cars stay outside. Nobody is complaining.', img: 10 },
  { id: 'ng-021', title: 'Worcester Café Fit-out', year: 1918, city: 'Surry Hills, NSW', type: 'Small Commercial', status: 'active', weight: 3, tag: 'Commercial', materials: 'Reclaimed brick, white oak, brass', scope: 'Coffee shop build-out in former retail space', note: 'Decommissioned 2019 as a corner store. Opening as a coffee shop in August. The original tin ceiling stayed.', img: 11 },
  { id: 'ng-029', title: '90 Macquarie Street', year: 2026, completed: 2026, city: 'Chifley, NSW', type: 'Curved Skylight', status: 'completed', weight: 3, tag: 'Skylight', materials: 'Curved LVL ribs, structural LVL timber framing', scope: 'Dual internal detailed curved skylight', note: 'Dual internal detailed curved skylight.', img: 29 },
  { id: 'ng-030', title: '90 Macquarie Street', year: 2026, city: 'Chifley, NSW', type: 'Curved Skylight — Structure', status: 'completed', weight: 2, tag: 'Skylight', materials: 'Curved LVL ribs, structural LVL timber framing', scope: 'Crane lift of the curved roof structure', note: 'The curved skylight roof structure goes in by crane.', img: 25 },
  { id: 'ng-031', title: '90 Macquarie Street', year: 2026, city: 'Chifley, NSW', type: 'Curved Skylight — Steel Frame', status: 'completed', weight: 2, tag: 'Skylight', materials: 'Curved LVL ribs, structural LVL timber framing', scope: 'Propped steel wall frame below the skylight', note: 'Structural steel wall framing below the skylight ring.', img: 26 },
  { id: 'ng-032', title: '90 Macquarie Street', year: 2026, city: 'Chifley, NSW', type: 'Curved Skylight — Ring Framing', status: 'completed', weight: 2, tag: 'Skylight', materials: 'Curved LVL ribs, structural LVL timber framing', scope: 'Ring framing around the skylight opening', note: 'Curved ribs laid out around the skylight opening.', img: 27 },
  { id: 'ng-033', title: '90 Macquarie Street', year: 2026, city: 'Chifley, NSW', type: 'Curved Skylight — Install', status: 'completed', weight: 2, tag: 'Skylight', materials: 'Curved LVL ribs, structural LVL timber framing', scope: 'Setting the curved ring by hand', note: 'Setting the curved ring by hand.', img: 28 },
  { id: 'ng-034', title: '12 Carrington Street', year: 2026, completed: 2026, city: 'Revesby, NSW', type: 'Structural Redesign', status: 'completed', weight: 2, tag: 'Structural', materials: 'Engineered LVL beams, structural LVL timber', scope: 'Open-plan redesign: beams carry the upper floor, load-bearing walls removed below', note: 'Structural redesign for a modern open-plan layout. Engineered beams support the upper floor, allowing the safe removal of load-bearing walls below. Built with precision.', img: 30 },
  { id: 'ng-035', title: '147 Wentworth Road', year: 2026, city: 'Strathfield, NSW', type: 'Feature Wall', status: 'active', weight: 2, tag: 'Feature Wall', materials: 'Structural LVL Timber', scope: 'Fire + TV feature wall, framed for long-term stability', note: 'Precision-built fire and TV feature wall, designed with structural stability in mind for a flawless, long-lasting finish.', img: 31 },
]

const services = [
  { title: 'Framing', body: 'New construction framing, wall framing, floor joists, and roof trusses for additions, new builds, and full home renovations. Every wall is square, every floor is level, every rafter is plumb. The foundation everything else sits on.' },
  { title: 'First Floor Additions', body: 'Ground-level home additions matched to the existing structure. Foundations, framing, building envelope, siding, roofing, and interior finish. One crew runs the whole job from excavation to trim.' },
  { title: 'Decking', body: 'Custom deck builds in timber, composite, and hardwood. Treated pine substructures with hidden fasteners and stainless hardware. Decks, timber pergolas, and outdoor living spaces built to handle Australian summers.' },
  { title: 'Form Working', body: 'Concrete formwork and poured foundations for footings, slabs, retaining walls, and structural elements. Built strong, stripped clean, poured true to the plans.' },
  { title: 'Granny Flats & ADUs', body: 'Accessory dwelling units and secondary suites from design through completion. We handle zoning, council paperwork, the build, and the utility connections. A full self-contained home on your existing lot.' },
  { title: 'Carpentry', body: 'Rough carpentry and finish carpentry. Structural framing, architectural millwork, custom built-ins, trim, casing, and bespoke joinery. The trade the firm was built on.' },
  { title: 'Exposed Timber Pergolas', body: 'Hardwood pergolas with exposed joinery and mortise-and-tenon connections. The kind of outdoor structure where the construction is the finish. No brackets, no bolts showing, just clean timber framing.' },
  { title: 'Dincel Walling', body: 'Dincel structural walling for basements, retaining walls, and load-bearing applications. Faster on site than blockwork, stronger on paper than poured concrete, and a permanent formwork system that stays in place.' }
]

const featured = PROJECTS.filter(p => ['ng-029', 'ng-034', 'ng-035'].includes(p.id))

const WORKS_IMAGES = [
  'DFG5qrFyj4Q_1.jpg',
  'DFG5qrFyj4Q_2.jpg',
  'DFG5qrFyj4Q_3.jpg',
  'DFH16BKx1YF_1.jpg',
  'DFH16BKx1YF_2.jpg',
  'DFH16BKx1YF_3.jpg',
  'DFHw8yBSET7_1.jpg',
  'DFHy-EuS559_2.jpg',
  'DFHyOaSSi5E_2.jpg',
  'DFZgxFsSj1p_2.jpg',
  'DIjEEanyNcq_1.jpg',
  'DJIoiBTy4y8_1.jpg',
  'DN9-KbkkoY7_1.jpg',
  'DN9-KbkkoY7_2.jpg',
  'DNSJl7guTlF_1.jpg',
  'DNSLAJhOPCE_1.jpg',
  'DNSLAJhOPCE_2.jpg',
  'DOTCy4ilY-z_2.jpg',
  'DP3UMJwElKl_1.jpg',
  'DP3UMJwElKl_2.jpg',
  'dji_fly_20260513_083916_163_1778625964471_photo_optimized Large.jpeg',
  'dji_fly_20260513_084446_169_1778625968942_photo_optimized Large.jpeg',
  'IMG_2399 Large.jpeg',
  'IMG_2401 Large.jpeg',
  'IMG_2582 Large.jpeg',
  'WhatsApp Image 2026-07-30 at 7.31.17 PM Large.jpeg',
  'WhatsApp Image 2026-07-30 at 7.31.17 PM(1) Large.jpeg',
  'WhatsApp Image 2026-07-30 at 7.31.17 PM(2) Large.jpeg',
  'WhatsApp Image 2026-07-30 at 7.31.17 PM(3) Large.jpeg',
  'WhatsApp Image 2026-07-30 at 7.31.17 PM(4) Large.jpeg',
  'WhatsApp Image 2026-07-30 at 8.21.10 PM Large.jpeg',
  'WhatsApp Image 2026-07-30 at 8.22.16 PM Large.jpeg',
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
]

function imgSrc(p: Project) {
  return `/img/works/${encodeURIComponent(WORKS_IMAGES[p.img % WORKS_IMAGES.length])}`
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

<style scoped>
em { font-style: normal; }

/* --- hero --- */
.hero {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 32px 0;
  overflow: hidden;
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) 1.15fr;
  gap: 48px;
  align-items: stretch;
  min-height: 540px;
}
.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 40px;
}
.hero h1 {
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(44px, 5.5vw, 84px);
  line-height: 0.96;
  letter-spacing: -0.025em;
  margin: 0 0 28px;
  color: #0f1830;
  text-wrap: balance;
}
.hero h1 em { color: #E42929; }
.hero-desc {
  font-size: 17px;
  line-height: 1.6;
  color: #5b6373;
  max-width: 44ch;
  margin: 0 0 36px;
  text-wrap: pretty;
}
.hero-right {
  position: relative;
  overflow: hidden;
  background: #0F2240;
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 14%);
}
.hero-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.hero-right::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26,47,92,0.0) 50%, rgba(26,47,92,0.18) 100%);
}
.hero-tri { position: absolute; pointer-events: none; background: rgba(255,255,255,0.18); mix-blend-mode: overlay; }
.hero-tri.a { top: 0; left: 12%; width: 18%; height: 100%; clip-path: polygon(0 0, 100% 0, 0 100%); background: rgba(255,255,255,0.25); }
.hero-tri.b { top: 0; left: 32%; width: 9%; height: 70%; clip-path: polygon(0 0, 100% 0, 0 100%); background: rgba(255,255,255,0.12); }

/* --- primary CTA button --- */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #E42929;
  color: #fff;
  border: 0;
  border-radius: 999px;
  padding: 14px 8px 14px 24px;
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  transition: background .2s, transform .2s;
}
.btn-primary:hover { background: #b81e1e; }
.btn-primary .ico {
  width: 36px; height: 36px;
  background: #fff; color: #E42929;
  border-radius: 50%;
  display: grid; place-items: center;
  font-weight: 700; font-size: 16px;
}
.btn-primary.large { padding: 18px 10px 18px 30px; font-size: 16px; }
.btn-primary.large .ico { width: 42px; height: 42px; }
.btn-primary.ghost {
  background: rgba(255,255,255,0.08);
  color: #fff;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}
.btn-primary.ghost:hover { background: rgba(255,255,255,0.16); }
.btn-primary.ghost .ico { background: #E42929; color: #fff; }

.cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
.cta-row .or-call {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #5b6373;
}
.cta-row .or-call a {
  color: #0f1830; text-decoration: none; border-bottom: 1px solid #d3cfc3; padding-bottom: 2px; margin-left: 8px;
}
.cta-row .or-call a:hover { border-color: #E42929; color: #E42929; }

/* --- featured --- */
.featured { max-width: 1400px; margin: 200px auto 0; padding: 0 32px; }
.featured-head { text-align: center; margin-bottom: 48px; }
.featured-head h2 {
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  font-weight: 700; font-size: clamp(32px, 4vw, 52px);
  line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 16px;
}
.featured-head h2 em { color: #E42929; }
.featured-head p { max-width: 60ch; margin: 0 auto; color: #5b6373; font-size: 16px; line-height: 1.6; text-wrap: pretty; }
.featured-cards { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 18px; }
.fcard {
  position: relative; background: #fff; border: 1px solid #d3cfc3;
  padding: 28px 28px 24px; min-height: 280px;
  display: flex; flex-direction: column; justify-content: space-between;
  overflow: hidden; transition: transform .25s;
}
.fcard:hover { transform: translateY(-3px); }
.fcard .meta {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: #5b6373; margin-bottom: 8px;
}
.fcard h3 {
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  font-weight: 700; font-size: 22px; line-height: 1.15; letter-spacing: -0.01em; margin: 0 0 12px; text-wrap: balance;
}
.fcard h3 a { color: inherit; text-decoration: underline; text-decoration-color: #d3cfc3; text-underline-offset: 4px; text-decoration-thickness: 1px; cursor: pointer; }
.fcard .stat { font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: 18px; margin: 12px 0 6px; }
.fcard p { font-size: 13.5px; line-height: 1.5; color: #5b6373; margin: 0 0 16px; text-wrap: pretty; }
.fcard .more {
  align-self: flex-start; font-size: 13px; font-weight: 600; background: #f1f0eb; color: #0f1830;
  padding: 10px 16px; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: background .2s; cursor: pointer;
}
.fcard .more:hover { background: #e5e3dc; }
.fcard.featured-img { background-size: cover; background-position: center; color: #fff; }
.fcard.featured-img::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,24,48,0.1) 0%, rgba(15,24,48,0.55) 100%); }
.fcard.featured-img > * { position: relative; z-index: 1; }
.fcard.featured-img .meta { color: rgba(255,255,255,0.8); }
.fcard.featured-img h3 a { color: #fff; text-decoration-color: rgba(255,255,255,0.4); }
.fcard.featured-img p { color: rgba(255,255,255,0.85); }
.fcard.featured-img .more { background: rgba(255,255,255,0.2); color: #fff; backdrop-filter: blur(6px); }
.fcard.featured-img .more:hover { background: rgba(255,255,255,0.3); }
.fcard.red { background: #E42929; color: #fff; border-color: #E42929; }
.fcard.red .meta { color: rgba(255,255,255,0.85); }
.fcard.red h3 a { color: #fff; text-decoration-color: rgba(255,255,255,0.4); }
.fcard.red p { color: rgba(255,255,255,0.85); }
.fcard.red .more { background: rgba(255,255,255,0.18); color: #fff; }
.fcard.red .more:hover { background: rgba(255,255,255,0.28); }
.fcard.navy { background: #0F2240; color: #fff; border-color: #0F2240; }
.fcard.navy .meta { color: rgba(255,255,255,0.7); }
.fcard.navy h3 a { color: #fff; text-decoration-color: rgba(255,255,255,0.3); }
.fcard.navy p { color: rgba(255,255,255,0.75); }
.fcard.navy .more { background: rgba(255,255,255,0.12); color: #fff; }
.fcard.navy .more:hover { background: rgba(255,255,255,0.2); }

/* --- pitch --- */
.pitch { position: relative; max-width: 1400px; margin: 96px auto 0; padding: 0 32px; }
.pitch-corner {
  position: absolute; top: -30px; left: 32px; width: 150px; height: 150px;
  background: linear-gradient(135deg, transparent 0%, transparent 30%, rgba(26,47,92,0.06) 30%, rgba(26,47,92,0.06) 50%, transparent 50%), #f1f0eb;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
.pitch-grid { display: grid; grid-template-columns: 200px 1fr; gap: 64px; align-items: end; position: relative; }
.pitch h2 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: clamp(32px, 4.2vw, 56px);
  line-height: 1.02; letter-spacing: -0.025em; margin: 0 0 20px; text-wrap: balance; max-width: 22ch;
}
.pitch h2 em { color: #E42929; }
.pitch p { font-size: 16px; line-height: 1.65; color: #5b6373; max-width: 60ch; margin: 0 0 28px; text-wrap: pretty; }
.pitch .more { font-size: 13px; font-weight: 600; background: #f1f0eb; color: #0f1830; padding: 12px 20px; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }

/* --- gallery --- */
.gallery-section { max-width: 1400px; margin: 120px auto 0; padding: 0 32px 0; position: relative; }
.gallery-head { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; margin-bottom: 32px; }
.gallery-head h2 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: clamp(34px, 4.6vw, 64px);
  line-height: 1.0; letter-spacing: -0.025em; margin: 0;
}
.gallery-head h2 em { color: #E42929; }
.gallery-head .note { font-size: 16px; line-height: 1.6; color: #5b6373; max-width: 42ch; text-wrap: pretty; }

/* --- mobile carousel --- */
.wall-mobile {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  padding-bottom: 8px;
  overscroll-behavior-x: contain;
}
.wall-mobile > .tile {
  flex: 0 0 78%;
  scroll-snap-align: start;
}
.wall-mobile .tile-frame {
  aspect-ratio: 3 / 2;
  width: 100%;
}

/* --- desktop masonry --- */
.wall-desktop {
  display: none;
  position: relative;
  width: 100%;
}
@media (min-width: 480px) {
  .wall-mobile { display: none; }
  .wall-desktop { display: block; }
}
.wall-desktop > .tile {
  position: absolute;
  transition: transform 0.45s cubic-bezier(.2,.7,.2,1), opacity .3s;
  cursor: pointer;
}
.wall-desktop > .tile:hover { z-index: 5; }

/* --- shared tile styles --- */
.tile { cursor: pointer; }
.tile:hover .tile-frame { transform: translateY(-4px); box-shadow: 0 30px 60px -30px rgba(15,24,48,0.35), 0 12px 24px -12px rgba(15,24,48,0.2); }
.tile:hover .tile-img { transform: scale(1.04); }
.tile-frame {
  position: relative;
  overflow: hidden;
  background: #0F2240;
  transition: transform 0.35s cubic-bezier(.2,.7,.2,1), box-shadow 0.35s;
  box-shadow: 0 12px 30px -22px rgba(15,24,48,0.45);
}
.tile-img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(.2,.7,.2,1);
  display: block;
}

/* --- why --- */
.why { margin: 120px 0 0; background: #091a32; color: #fff; position: relative; overflow: hidden; }
.why::before {
  content: ""; position: absolute; top: -1px; right: 0; width: 40%; height: 100%;
  background: linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.025) 40%, rgba(255,255,255,0.025) 60%, transparent 60%);
  pointer-events: none;
}
.why::after { content: ""; position: absolute; top: 0; left: 0; width: 80px; height: 80px; background: #fdfdfd; clip-path: polygon(0 0, 100% 0, 0 100%); }
.why-inner { max-width: 1400px; margin: 0 auto; padding: 96px 32px 80px; }
.why-top { display: grid; grid-template-columns: 1fr 1.1fr; gap: 64px; align-items: start; margin-bottom: 56px; }
.why-top h2 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: clamp(34px, 4.4vw, 60px);
  line-height: 1.02; letter-spacing: -0.025em; margin: 0 0 28px; color: #fff; text-wrap: balance;
}
.why-top h2 em { color: #E42929; }
.why-top .more {
  font-size: 13px; font-weight: 600; background: #E42929; color: #fff; padding: 12px 22px;
  border-radius: 999px; text-decoration: none; display: inline-flex; gap: 8px; align-items: center;
}
.why-top .image { position: relative; height: 360px; background: #fff; overflow: hidden; clip-path: polygon(0 0, 92% 0, 100% 14%, 100% 100%, 8% 100%, 0 86%); }
.why-top .image img { width: 100%; height: 100%; object-fit: cover; }
.why-services { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; padding-top: 48px; border-top: 1px solid rgba(255,255,255,0.12); }
.why-services .label {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10.5px; letter-spacing: 0.2em;
  text-transform: uppercase; color: rgba(255,255,255,0.55); margin-bottom: 32px; grid-column: 1 / -1;
}
.why-services .item { padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); }
.why-services .item h4 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: 18px; letter-spacing: -0.01em; margin: 0 0 12px; color: #fff;
}
.why-services .item p { font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.65); margin: 0 0 16px; text-wrap: pretty; }

/* --- about / contention --- */
.contention { max-width: 1400px; margin: 0 auto; padding: 120px 32px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.contention-left { position: sticky; top: 100px; }
.contention-left h2 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: clamp(34px, 4.2vw, 56px);
  line-height: 1.02; letter-spacing: -0.025em; margin: 0 0 32px; text-wrap: balance;
}
.contention-left h2 em { color: #E42929; }
.contention-left .signature {
  font-size: 14px; color: #5b6373; margin-top: 32px; padding-top: 24px; border-top: 1px solid #d3cfc3; max-width: 28ch; line-height: 1.6;
}
.contention-left .signature strong { color: #0f1830; font-weight: 600; }
.contention-right { font-size: 16px; line-height: 1.75; color: #2a3142; text-wrap: pretty; }
.contention-right p { margin: 0 0 1.3em; }
.contention-right p.lead {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 600; font-size: 20px; line-height: 1.45; color: #0f1830; letter-spacing: -0.01em;
}

/* --- cta block --- */
.cta-block { position: relative; margin: 120px 0 0; background: #051022; color: #fff; overflow: hidden; }
.cta-block .bg { position: absolute; inset: 0; opacity: 0.45; filter: grayscale(0.6); }
.cta-block .bg img { width: 100%; height: 100%; object-fit: cover; }
.cta-block::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,18,42,0.6) 0%, rgba(8,18,42,0.85) 100%); }
.cta-inner { position: relative; z-index: 2; max-width: 880px; margin: 0 auto; padding: 120px 32px; text-align: center; }
.cta-inner .pre {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 24px;
}
.cta-inner h2 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: clamp(34px, 4.6vw, 60px);
  line-height: 1.05; letter-spacing: -0.025em; margin: 0 0 36px; color: #fff; text-wrap: balance;
}
.cta-inner h2 em { color: #E42929; }
.cta-block .cta-row { justify-content: center; }
.cta-block .cta-row .or-call { color: rgba(255,255,255,0.7); }
.cta-block .cta-row .or-call a { color: #fff; border-bottom-color: rgba(255,255,255,0.3); }

/* --- detail modal --- */
.modal-scrim {
  position: fixed; inset: 0; background: rgba(8,18,42,0.78); backdrop-filter: blur(6px); z-index: 50;
  display: flex; align-items: center; justify-content: center; padding: 40px; animation: fade 0.25s ease;
}
@keyframes fade { from { opacity: 0; } to { opacity: 1; } }
.modal {
  background: #fdfdfd; max-width: 1100px; width: 100%; max-height: 90vh; display: grid;
  grid-template-columns: 1.1fr 1fr; overflow: hidden; animation: rise 0.35s cubic-bezier(.2,.7,.2,1);
}
@keyframes rise { from { transform: translateY(18px); opacity: 0; } to { transform: none; opacity: 1; } }
.modal-img { position: relative; min-height: 580px; overflow: hidden; background: #0F2240; }
.modal-img img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
.modal-img .tint { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,24,48,0.1) 0%, rgba(15,24,48,0.5) 100%); }
.modal-img.lost img { filter: grayscale(0.6) contrast(1.05); }
.modal-img.lost .tint { background: linear-gradient(180deg, rgba(214,69,47,0.1) 0%, rgba(120,30,15,0.7) 100%); }
.tile-cut {
  position: absolute; top: 0; left: -2%; width: 28%; height: 100%;
  background: rgba(255,255,255,0.16); clip-path: polygon(0 0, 100% 0, 0 100%); mix-blend-mode: overlay; pointer-events: none;
}
.tile-cut2 {
  position: absolute; top: 0; right: -2%; width: 12%; height: 50%;
  background: rgba(255,255,255,0.1); clip-path: polygon(100% 0, 100% 100%, 0 0); mix-blend-mode: overlay; pointer-events: none;
}
.tile-plate {
  position: absolute; top: 14px; right: 14px; font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; letter-spacing: 0.16em; color: rgba(255,255,255,0.85); padding: 4px 8px;
  border: 1px solid rgba(255,255,255,0.3); text-transform: uppercase; background: rgba(15,24,48,0.3); backdrop-filter: blur(8px);
}
.tile-status {
  position: absolute; top: 14px; left: 14px; font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 9.5px; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 8px; color: #fff;
  background: rgba(15,24,48,0.6); backdrop-filter: blur(8px);
}
.tile-status.lost { background: #E42929; }
.tile-status.active { background: #c87b2a; }
.modal-body { padding: 48px; overflow-y: auto; position: relative; }
.modal-body .close {
  position: absolute; top: 20px; right: 20px; background: #fff; border: 1px solid #d3cfc3;
  width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; color: #0f1830; display: grid; place-items: center;
}
.modal-body .close:hover { background: #0f1830; color: #fff; }
.modal-body .plate {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: #E42929; margin-bottom: 16px;
}
.modal-body h3 {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: 36px; line-height: 1.05; letter-spacing: -0.025em; margin: 0 0 12px; text-wrap: balance;
}
.modal-body .subline {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; letter-spacing: 0.14em;
  text-transform: uppercase; color: #5b6373; padding-bottom: 22px; border-bottom: 1px solid #d3cfc3;
}
.modal-body .spec { margin-top: 24px; display: grid; grid-template-columns: 110px 1fr; gap: 12px 18px; font-size: 13.5px; }
.modal-body .spec dt {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #5b6373; padding-top: 3px;
}
.modal-body .spec dd { margin: 0; color: #2a3142; }
.modal-body .note {
  margin-top: 28px; padding: 20px 22px; background: #fff; border-left: 3px solid #E42929;
  font-size: 15px; line-height: 1.6; color: #0f1830; text-wrap: pretty; font-style: italic;
}

/* --- responsive --- */
@media (max-width: 1100px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-right { min-height: 380px; }
  .featured-cards { grid-template-columns: 1fr 1fr; }
  .featured-cards .fcard:first-child { grid-column: 1 / -1; }
  .why-top, .contention { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .hero { padding-top: 24px; }
  .featured-cards { grid-template-columns: 1fr; }
  .why-services { grid-template-columns: 1fr 1fr; }
  .gallery-head { grid-template-columns: 1fr; }
  .pitch-grid { grid-template-columns: 1fr; gap: 24px; }
  .pitch-corner { left: 20px; }
  .modal { grid-template-columns: 1fr; }
  .modal-img { min-height: 240px; }
  .modal-body { padding: 28px 24px; }
}
</style>
