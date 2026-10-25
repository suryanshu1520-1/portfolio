export type Theme = 'amber' | 'verdant' | 'teal' | 'crimson' | 'ember'

export interface Metric {
  value: string
  label: string
}

export interface Link {
  label: string
  href: string
}

export interface Project {
  id: string
  index: string
  name: string
  tagline: string
  year: string
  status: string
  theme: Theme
  summary: string
  problem: string
  paragraphs: string[]
  metrics: Metric[]
  standout: string[]
  scope: string[]
  stack: string[]
  links: Link[]
}

export const projects: Project[] = [
  {
    id: 'tender-trace',
    index: '01',
    name: 'Tender-Trace',
    tagline: 'A civic-transparency watchdog for ₹-crore government contracts',
    year: '2026',
    status: 'Live · Tri-Agent Protocol v2',
    theme: 'amber',
    summary:
      'Turns India’s raw Central Public Procurement Portal award data into market-concentration scores, integrity-risk flags, and legally-formatted RTI requests. Built for journalists, researchers, and honest vendors, not compliance analysts.',
    problem:
      'Government procurement data is public by law, but public does not mean legible. Millions of contract-award rows sit in disconnected portals with no way to tell a routine tender from a cartelized one, or a suspicious single-bid window from administrative noise.',
    paragraphs: [
      'Tender-Trace ingests India’s CPPP "Award of Contract" dataset—over 4.5 million records spanning ₹-crore public tenders across central ministries, CPSEs, and departments—and runs it through an econometric lens reserved for antitrust enforcement. A Herfindahl-Hirschman Index (HHI) is computed per department and vendor sector alongside an Integrity Risk Index (IRI) that blends single-bid rates, bid-window compression anomalies, and award-delay asymmetries.',
      'The data tier operates on a high-throughput hybrid architecture: Supabase PostgreSQL paired with a Cloudflare Hyperdrive query proxy microservice keeps analytical aggregations sub-5ms at the edge, while precomputed analytical matrices stream from Cloudflare R2. High-volume ingestion is driven by an autonomous Tri-Agent protocol (v2) that parses raw batches, normalizes vendor aliases, and publishes cryptographic verification checkpoints.',
      'Flagged anomalies resolve into legally actionable accountability. A "Generate RTI Dossier" button produces an audit packet ready for filing: an analytical provenance sheet carrying SHA-256 batch cryptographic hashes, a statutorily formatted Section 6(1) Right to Information application addressed to the exact Central Public Information Officer (CPIO), and demand schedules tailored to survive bureaucratic rejection tactics.',
    ],
    metrics: [
      { value: '4.5M+', label: 'procurement records ingested' },
      { value: '<5ms', label: 'edge query time via Hyperdrive' },
      { value: 'HHI + IRI', label: 'monopoly & collusion risk scoring' },
      { value: 'Section 6(1)', label: 'auto-generated RTI legal dossiers' },
    ],
    standout: [
      'Herfindahl-Hirschman Index (HHI) market-concentration paired with a logistic-regression-weighted Integrity Risk Index',
      'Tri-Agent autonomous ingestion & audit loop (Protocol v2) executing reproducible batch verification',
      'SHA-256 cryptographic provenance hashing on every ingest batch, cited directly in legal RTI applications',
      'Cloudflare Hyperdrive DB query proxy worker and R2 precomputed JSON streaming for zero-cold-start edge performance',
      'Interactive econometric visualizations: Bids Distribution Histograms, Money Flow Sankey charts, and Fiscal Heatmaps',
      'Dynamic Monokai & high-contrast econometric theme engine for data-dense investigations',
    ],
    scope: [
      'Investigative journalists filing targeted RTI requests',
      'SME & local contractors auditing public tender competitiveness',
      'Public finance & civic-tech researchers tracking procurement cartels',
      'Integrity compliance officers inside government departments',
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Cloudflare Hyperdrive',
      'Cloudflare Workers',
      'Supabase / Postgres',
      'Cloudflare R2',
      'SQLite / Turso',
      'D3.js',
      'Recharts',
      'Python (ETL)',
    ],
    links: [
      { label: 'Live app', href: 'https://cppp-five.vercel.app' },
      { label: 'Source', href: 'https://github.com/suryanshu1520-1/CPPP' },
    ],
  },
  {
    id: 'dcos',
    index: '02',
    name: 'DentalConnect OS (DCOS 2.0)',
    tagline: 'The bi-temporal, local-first clinical operating system & dental lab cloud',
    year: '2026',
    status: 'Live · DCOS 2.0 · 3 Form 2 Patents',
    theme: 'teal',
    summary:
      'An enterprise-grade clinical operating system and restorative manufacturing cloud bridging chairside dental operatories with prosthetic milling centers. Features bi-temporal event sourcing, a 32-tooth interactive odontogram, in-browser 3D WebGL mesh review, live operatory telemetry HUD, and ABDM/FHIR R5 compliance.',
    problem:
      'The clinic-to-lab boundary is dentistry’s biggest friction vector: non-manifold STL scans discovered hours later at CAM machines, missing shade notes lost in WhatsApp messages, and zero audit trails for fit remakes. Conventional dental software is either an antiquated billing ledger or an isolated CAD viewer with no shared state.',
    paragraphs: [
      'DCOS 2.0 consolidates chairside dental operations and laboratory production into a unified clinical cockpit. Clinicians interact with a live appointment scheduling calendar and operatory telemetry HUD, alongside a full-width 32-tooth elliptical odontogram supporting 1-click restorative condition painting (FDI and Universal notation), multi-unit bridge connections, and 6-point periodontal probing. Cases stream directly into a synchronized CAD/CAM workstation with an interactive 6-stage manufacturing Kanban and order-scoped doctor-to-technician WebSocket chat.',
      'At its core is a bi-temporal event store built on PostgreSQL 17 that records both Valid Time (clinical event) and Transaction Time (system commit), anchored to a SHA-256 Merkle hash chain. This enables a "Time-Travel Odontogram" that deterministically reconstructs patient tooth history at any exact second in time for clinical continuity and medicolegal defense. Full ABDM (Ayushman Bharat Digital Mission) M1–M3 compliance provides sovereign health record transit via the Fidelius cryptographic bridge (Curve25519 ECDH + AES-GCM-256).',
      'The 3D engineering layer features a 4-tier polygon LOD pyramid that reduces mesh vertices by 95% for sub-80ms mobile rendering, interactive occlusal clearance heatmaps, Catmull-Rom subgingival margin splines, and an Exocad .constructionInfo XML parser. Chairside, a local-first WebSocket hardware bridge (ws://127.0.0.1:12345) interfaces with intraoral cameras and foot pedals while speech VAD filters drill noise for hands-free voice SOAP charting. Three complete Form 2 Indian patent specifications (CRIs) protect these core architectures.',
    ],
    metrics: [
      { value: '27,200+', label: 'lines of TypeScript in src/' },
      { value: '3 Patents', label: 'Form 2 Indian specifications (CRIs)' },
      { value: '33 / 33', label: 'master backend verification tests passed (100%)' },
      { value: 'ABDM M1–M3', label: 'FHIR R5 & Fidelius Curve25519 encryption' },
    ],
    standout: [
      'Bi-temporal event sourcing + SHA-256 Merkle ledger powering historical "Time-Travel Odontogram" state reconstruction (IN-PAT-2026-01)',
      'Progressive WebGL 3D LOD mesh viewer with occlusal clearance heatmaps, Catmull-Rom splines, and Exocad XML parser (IN-PAT-2026-02)',
      'State-machine gated clinical-laboratory asynchronous messaging and permanent soft-copy CAD remake warranty engine (IN-PAT-2026-03)',
      'Chairside operatory cockpit engine with live appointment scheduling calendar and real-time operatory telemetry HUD',
      'ABDM Milestone 1–3 compliant integration with Fidelius sovereign cryptographic bridge (ECDH Curve25519 + AES-GCM-256)',
      'Enterprise multi-tenancy isolation, declarative <FeatureGate> commercial tiers, and automatic inventory stock deduction',
    ],
    scope: [
      'Modern dental clinics needing chairside HUD, odontogram charting, and live operatory scheduling',
      'High-volume dental laboratories and prosthetic milling centers managing CAD/CAM production',
      'Dental healthcare chains requiring multi-clinic tenant isolation and ABDM compliance',
      'Clinicians needing medicolegally defensible, bi-temporal patient chart histories',
    ],
    stack: [
      'Next.js 16 (Turbopack)',
      'React 19',
      'TypeScript',
      'Three.js / React Three Fiber',
      'Supabase / PostgreSQL 17',
      'Cloudflare R2',
      'HL7 FHIR R5',
      'Web Audio VAD',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    links: [
      { label: 'Live app', href: 'https://www.dcos.in' },
      { label: 'Source', href: 'https://github.com/DCOSArch/DCOS' },
    ],
  },
  {
    id: 'tark',
    index: '03',
    name: 'Tark',
    tagline: 'A server-authoritative exam hall simulation, 25-year PYQ vault & policy intelligence radar',
    year: '2026',
    status: 'Live · 65k+ LoC · Prelims + Mains Final Edition',
    theme: 'crimson',
    summary:
      'A high-precision UPSC Civil Services and State PSC testing arena and policy intelligence system. Combines a strict server-authoritative 2-hour Prelims Exam Hall simulation with the QBank Final Edition (4,156+ verified PYQs with 100% test-booklet parity), a dedicated Mains GS1–GS4 & Essay extractor with layout recovery, an Examiner Psyche engine, and the Policy Radar statutory lineage tracker.',
    problem:
      'Standard exam-prep apps game user engagement with untrusted client-side scoring and recycled mock tests, while current-affairs digests suffer from hallucinated summaries that distort statutory facts, official gazette notifications, and constitutional nuances.',
    paragraphs: [
      'Tark’s flagship surface is a high-fidelity UPSC Prelims Simulation Exam Hall running under authentic 2-hour timed conditions with full keyboard navigation (useExamKeyboard hotkeys), live OMR response grid, and strict UPSC negative marking (+2.0 / -0.66). The grading path is entirely server-authoritative (server-lib/submit-quiz.ts): correct answers are never sent to the client during testing, eliminating client-side inspection vulnerabilities. Upon submission, a multi-dimensional Diagnostic Autopsy computes sectional accuracy across subject matrices, dynamic cutoff probability bands, pace velocity curves, sheet omission discipline, and blind-guessing risk ledgers.',
      'Underpinning the arena is the newly released QBank Final Edition (final-2026-10), backed by an automated 25-Year PYQ Relational Vault (2001–2025) indexing 4,156+ authentic questions with 100% test-booklet parity. The extraction pipeline features an automated document profiler, CSAT passage segmentation, tabular data extraction, and a dedicated Mains Extractor with an OCR guard and layout-recovery engine covering GS1–GS4 and Essay papers. An integrated Review CLI and cropping suite ensures human-in-the-loop audit gates before projection into production.',
      'For policy intelligence, Tark operates the Policy Radar Lineage Engine (TASK_085A–TASK_085S) alongside an autonomous daily distillation pipeline fed by official gazette feeds, PIB, PRS Legislative Research, RBI circulars, and ministry releases. Claims pass through a deterministic Grounding Protocol (verify.ts) using sentence-span token matching, while interactive SourceAnchor popovers let students inspect exact statutory citations, and an autonomous Contested-Claim engine (contested.ts) flags divergence between government claims and independent audit releases.',
    ],
    metrics: [
      { value: '65,000+', label: 'lines of TypeScript & Python ETL' },
      { value: '4,156', label: 'authentic 25-year PYQs (100% booklet parity)' },
      { value: 'Prelims + Mains', label: 'server-authoritative hall & GS1–4 extractor' },
      { value: 'Policy Radar', label: 'statutory lineage & zero-trust grounding' },
    ],
    standout: [
      'Server-authoritative Prelims Exam Hall with keyboard hotkey navigation, live OMR grid, and Diagnostic Autopsy telemetry',
      'QBank Final Edition pipeline featuring CSAT passage segmentation, table extraction, and 100% test-booklet parity engine',
      'Mains Extractor with layout recovery, OCR guard, subpart parsing, and case-study data modeling for GS1–GS4 & Essay',
      'Policy Radar Lineage Engine (TASK_085) mapping statutory authorities, official Gazette notifications, and ministry releases',
      'Deterministic Grounding Protocol (verify.ts) with sentence-span token verification and interactive SourceAnchor citations',
      'Edge-hardened serverless Vercel engine with /library canonical routing, zero-CLS hero, and deferred KaTeX loading',
      '15-minute transactional PostgreSQL RPC seat locks and Razorpay payment verification preventing checkout race conditions',
    ],
    scope: [
      'UPSC Civil Services and State PSC aspirants demanding authentic exam conditions and zero hallucination',
      'Policy scholars and competitive test analysts studying 25-year examination trends and examiner psyche',
      'EdTech product architects evaluating server-authoritative anti-cheat and verified distillation architectures',
    ],
    stack: [
      'React 19',
      'TypeScript 5.8',
      'Node.js / Express',
      'Supabase (PostgreSQL 15+)',
      'Tailwind CSS v4',
      'Motion',
      'KaTeX',
      'Razorpay',
      'Python (ETL & OCR)',
      'Firecrawl v2',
      'Google Gemini / Groq',
    ],
    links: [
      { label: 'Live app', href: 'https://py.md/TarkV1' },
      { label: 'Source', href: 'https://github.com/suryanshu1520-1/SKU' },
    ],
  },
  {
    id: 'fasal-mis',
    index: '04',
    name: 'FASAL MIS',
    tagline: 'A monitoring & evaluation dashboard for Farmers Action for Sustainable Agro-based Livelihoods (₹2.16 Cr programme)',
    year: '2026',
    status: 'Live · Field audited',
    theme: 'verdant',
    summary:
      'An M&E dashboard built for DEHAT, tracking a Farmers Action for Sustainable Agro-based Livelihoods programme across 1,300+ households in Bahraich District, Uttar Pradesh. Built for program managers and the Oak Foundation, the grant’s funder.',
    problem:
      'NGO field data arrives as conflicting Excel exports from disparate survey rounds. The default failure mode is a dashboard that quietly reports whichever number was pasted in last: visually clean, highly confident, and structurally wrong.',
    paragraphs: [
      'Six comprehensive programme tabs (Baseline Survey, Results Scorecard, Agriculture Economy, Rights & Entitlements Convergence, Nutrition Security, and Institutions & Capacity Building) sit alongside a searchable 1,300+ record Farmer Registry and a "Stories of Change" module of narrative case studies, giving quantitative indicators authentic human context.',
      'The architectural core is its self-critical audit trail: a dedicated Data Quality Audit tab and full triangulation suite cross-validate 28 conflicting NGO source files against one another. It exposes and documents real field reporting discrepancies in production, including historical crop income figures traced back to individual corrupted survey rows.',
      'Where source records exhibited logical contradictions (e.g. households flagged simultaneously as Below Poverty Line and Above Poverty Line), eligibility reconciliations are driven by seeded pseudo-random algorithms so corrections remain deterministic and reproducible rather than arbitrary silent overrides.',
    ],
    metrics: [
      { value: '1,300+', label: 'farmer households tracked' },
      { value: '28', label: 'source datasets triangulated' },
      { value: '35-Check', label: 'automated data-quality integrity audit' },
      { value: '₹2.16 Cr', label: 'programme grant tracked' },
    ],
    standout: [
      'A self-critical, versioned Data Quality Audit documenting and correcting field survey anomalies directly in production',
      'Reproducible algorithmic correction of logically conflicting household survey data via seeded deterministic RNG',
      'Full provenance pipeline: physical survey booklets to digitized spreadsheets to Python ETL to static JSON',
      '"Stories of Change": structured narrative case studies of individual rural farmers integrated alongside telemetry',
    ],
    scope: [
      'NGO programme directors running agro-livelihoods field interventions',
      'Grant officers and philanthropic foundations (Oak Foundation) auditing M&E veracity',
      'Rural development consultants requiring reproducible data validation pipelines',
    ],
    stack: [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'Framer Motion',
      'Python / Node ETL scripts',
    ],
    links: [
      { label: 'Live app', href: 'https://fasal-mis.vercel.app' },
      { label: 'Source', href: 'https://github.com/FASAL4/FASAL_MIS' },
    ],
  },
  {
    id: 'plusone',
    index: '05',
    name: 'PlusOne (Ember & Pulse)',
    tagline: 'A tactile Android habit companion with a custom 60FPS Canvas particle engine',
    year: '2026',
    status: 'Android · Kotlin & Compose',
    theme: 'ember',
    summary:
      'A single-screen Jetpack Compose companion app for harm-reduction habit tracking and mindfulness. Features adaptive energy-scaled workouts, dynamic hydration pool targets, and a physics-grounded Canvas mini-game simulating ember combustion, ash buildup, and flick gestures.',
    problem:
      'Most habit apps reduce behavioral change to clinical checkboxes and guilt notifications. The challenge here was interaction engineering: crafting a visceral, physically convincing tactile experience using zero third-party animation libraries.',
    paragraphs: [
      'The centerpiece is a hand-crafted Canvas ember particle system executing smooth 60FPS dragging, lighting, glowing heat convection, and ash-flicking physics. Rather than static sound files, interactions are paired with real-time procedural PCM audio tone synthesis (AudioTrack) and custom VibrationEffect waveforms, producing unique acoustic and haptic feedback signatures for every tap, spark, and ash flick.',
      'Around the tactile core sits an adaptive behavioral engine: a 120-second "Ignition" workout whose exercise routines modulate dynamically according to self-reported energy levels, and a hydration pool target that recalibrates on the fly against same-day smoke logs and physical exertion.',
      'Engineered strictly in modern Android primitives using Kotlin, Jetpack Compose, Room database, and StateFlow coroutines, with Gemini API integrations explored in recent iterations to interpret long-term behavioral trend analytics.',
    ],
    metrics: [
      { value: '620 LoC', label: 'hand-rolled Canvas particle engine' },
      { value: '0', label: 'animation libraries used' },
      { value: 'PCM Audio', label: 'procedural audio & custom haptics' },
      { value: 'MVVM', label: 'Room + StateFlow + Jetpack Compose' },
    ],
    standout: [
      'Procedural PCM tone synthesis via AudioTrack paired with custom hardware VibrationEffect waveforms',
      'Zero-dependency Canvas ash and ember combustion particle engine running at native 60FPS',
      'Adaptive behavioral loops: dynamic hydration and workout targets recalibrated from same-day logs',
      'Modern Android architecture: unidirectional data flow with Kotlin StateFlow, Room DB, and Jetpack Compose',
    ],
    scope: [
      'Individuals seeking tactile, harm-reduction habit companions',
      'Android engineers and interaction designers exploring custom Canvas physics and procedural haptics',
      'Digital health practitioners studying tactile feedback in behavioral intervention tools',
    ],
    stack: [
      'Kotlin',
      'Jetpack Compose',
      'Android Room DB',
      'Coroutines & StateFlow',
      'AudioTrack (PCM Audio)',
      'Google Gemini API',
    ],
    links: [
      { label: 'Source', href: 'https://github.com/suryanshu1520-1/PlusOne' },
    ],
  },
]
