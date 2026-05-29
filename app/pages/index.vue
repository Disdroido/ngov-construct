<template>
  <div>
    <AppHeader />

    <main>
      <!-- 01 Hero -->
      <section class="hero">
        <div class="hero-grid">
          <div class="hero-left">
            <div>
              <h1>Building what<br>stays standing —<br><em>and remembering<br>what didn't.</em></h1>
              <p class="hero-desc">NGOV is a small-construction firm working across New England — additions, renovations, outdoor living, and the occasional outbuilding. We take on six to eight projects a season, and we keep a record of every one.</p>
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
          <p>Three recent projects — one finished, one just finished, one on site as we type.</p>
        </div>
        <div class="featured-cards">
          <article class="fcard featured-img" :style="{ backgroundImage: `url(${imgSrc(featured[0])})` }">
            <div>
              <div class="meta">{{ featured[0].type }} · {{ featured[0].city }}</div>
              <h3><a href="#archive" @click.prevent="open = featured[0]">{{ featured[0].title }}</a></h3>
              <div class="stat">Completed {{ featured[0].completed }}</div>
              <p>{{ featured[0].note }}</p>
            </div>
            <a class="more" href="#archive" @click.prevent="open = featured[0]">Read the file →</a>
          </article>
          <article class="fcard red">
            <div>
              <div class="meta">{{ featured[1].type }} · {{ featured[1].city }}</div>
              <h3><a href="#archive" @click.prevent="open = featured[1]">{{ featured[1].title }}</a></h3>
              <p style="margin-top: 14px">{{ featured[1].note }}</p>
            </div>
            <a class="more" href="#archive" @click.prevent="open = featured[1]">Read the file →</a>
          </article>
          <article class="fcard navy">
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
            <p>Every site we walk gets a paper survey before a single tool comes out of the truck. Every survey gets a file — and every file stays, whether or not the building does. That's how we estimate, how we restore, and how we remember.</p>
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
          <div class="note">
            Twenty-eight projects, sorted by file rather than year. Click any image to read the full record.
          </div>
        </div>

        <div ref="wallRef" class="wall" :style="{ height: layout.wallHeight + 'px' }">
          <article
            v-for="t in layout.tiles"
            :key="t.p.id"
            class="tile"
            :style="{ width: t.style.width + 'px', transform: t.style.transform }"
            @click="open = t.p"
          >
            <div class="tile-frame" :style="{ width: '100%', height: t.style._h + 'px' }">
              <img class="tile-img" :src="imgSrc(t.p)" :alt="t.p.title" loading="lazy" />
              <div class="tile-tint"></div>
              <div class="tile-info">
                <div class="t">{{ t.p.title }}</div>
                <div class="m">
                  <span>{{ t.p.year }}</span>
                  <span class="sep"></span>
                  <span>{{ t.p.city }}</span>
                </div>
              </div>
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
              <img src="/img/photo2.jpg" alt="Restoration site" />
            </div>
          </div>
          <div class="why-services">
            <div class="label">What we build / Eight services</div>
            <div v-for="s in services" :key="s.title" class="item">
              <h4>{{ s.title }}</h4>
              <p>{{ s.body }}</p>
              <a href="#contact">Learn more →</a>
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
            At NGOV Construct, we pride ourselves on delivering exceptional quality and craftsmanship in every project we undertake — from a single deck to a full first-floor addition.
          </p>
          <p>
            We are committed to turning your vision into reality. That commitment starts with how we listen — to what the brief actually is, what the site allows, and what the budget will sustain — and it carries through to the details no one sees once the job is finished. Every cut, joint, and fixing is meticulously crafted to meet the highest standards. The work behind the wall has to be as good as the work in front of it.
          </p>
          <p>
            Our focus is on durability and aesthetics in equal measure. A project should look as considered the day it's handed over as it does ten years later, and the choices we make in materials, framing, and finishes are made with that timeline in mind. We use what holds up, we build the way it should be built, and we don't take shortcuts that cost the client later.
          </p>
          <p>
            More than anything, we are in the business of building lasting relationships with our clients. Most of our work comes from referrals, return clients, and the families who lived through their last renovation with us and asked us back for the next one. That is not an accident. It is the result of unwavering dedication to excellence, clear communication on site, and a small team of tradespeople who care about what they put their name to.
          </p>
          <p>
            If you have a project in mind — whether it's framing, formwork, a granny flat, a new pergola, or something we haven't built yet — we'd like to hear about it.
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
            <span class="or-call">Or call <a href="tel:+14135550147">(413) 555 — 0147</a></span>
          </div>
        </div>
      </section>
    </main>

    <AppFooter />

    <!-- Project detail modal -->
    <div v-if="open" class="modal-scrim" @click="open = null">
      <div class="modal" @click.stop>
        <div class="modal-img" :class="{ lost: open.status === 'lost' }">
          <img :src="imgSrc(open)" :alt="open.title" />
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

// --- unruly masonry wall (ported from design wall.jsx) ---
const RANDOMNESS = 0.85
const GUTTER = 16
const wallRef = ref<HTMLElement | null>(null)
const wallWidth = ref(1200)

const columns = computed(() =>
  wallWidth.value > 1200 ? 5 : wallWidth.value > 900 ? 4 : wallWidth.value > 620 ? 3 : wallWidth.value > 520 ? 2 : 1
)

function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return (s >>> 0) / 4294967296
  }
}

const layout = computed(() => {
  const cols = columns.value
  const containerWidth = wallWidth.value
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
    const rotMag = cols < 3 ? 0.5 : 1.4
    const rot = rand() < rotChance ? (rand() - 0.5) * rotMag : 0

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

.wall { position: relative; width: 100%; }
.tile {
  position: absolute;
  transition: transform 0.45s cubic-bezier(.2,.7,.2,1), opacity .3s;
  cursor: pointer; will-change: transform;
}
.tile:hover { z-index: 5; }
.tile:hover .tile-frame { transform: translateY(-4px); box-shadow: 0 30px 60px -30px rgba(15,24,48,0.35), 0 12px 24px -12px rgba(15,24,48,0.2); }
.tile:hover .tile-img { transform: scale(1.04); }
.tile-frame {
  position: relative; overflow: hidden; background: #0F2240;
  transition: transform 0.35s cubic-bezier(.2,.7,.2,1), box-shadow 0.35s;
  box-shadow: 0 12px 30px -22px rgba(15,24,48,0.45);
}
.tile-img {
  width: 100%; height: 100%; display: block; object-fit: cover;
  transition: transform 0.6s cubic-bezier(.2,.7,.2,1);
  position: absolute; inset: 0;
}
.tile-tint {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(15,24,48,0) 60%, rgba(15,24,48,0.55) 100%);
  pointer-events: none; opacity: 0; transition: opacity .25s;
}
.tile:hover .tile-tint { opacity: 1; }
.tile-info {
  position: absolute; left: 14px; right: 14px; bottom: 14px; color: #fff; z-index: 2;
  opacity: 0; transform: translateY(6px); transition: opacity .25s, transform .3s;
}
.tile:hover .tile-info { opacity: 1; transform: none; }

@media (hover: none) and (pointer: coarse) {
  .tile-tint { opacity: 1; }
  .tile-info { opacity: 1; transform: none; }
  .tile-info .t { font-size: 15px; }
  .tile-frame { box-shadow: 0 12px 30px -22px rgba(15,24,48,0.45); }
}
.tile-info .t {
  font-family: 'Poppins','Inter',sans-serif; font-weight: 700; font-size: 17px; line-height: 1.15;
  letter-spacing: -0.01em; margin: 0 0 6px; text-wrap: balance;
}
.tile-info .m {
  font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 10px; letter-spacing: 0.14em;
  text-transform: uppercase; color: rgba(255,255,255,0.75); display: flex; gap: 12px; align-items: center;
}
.tile-info .m .sep { width: 3px; height: 3px; background: rgba(255,255,255,0.5); border-radius: 50%; }

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
.why-services .item a {
  font-size: 12.5px; font-weight: 600; color: #E42929; text-decoration: none; letter-spacing: 0.02em;
  display: inline-flex; gap: 6px; align-items: center;
}

/* --- about / contention --- */
.contention { max-width: 1400px; margin: 0 auto; padding: 120px 32px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
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
