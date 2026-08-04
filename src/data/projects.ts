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
    status: 'Live · actively built',
    theme: 'amber',
    summary:
      'Turns India’s raw Central Public Procurement Portal award data into market-concentration scores, integrity-risk flags, and legally-formatted RTI requests. Built for journalists and citizens, not analysts.',
    problem:
      'Government procurement data is public by law, but public doesn’t mean legible. Millions of contract-award rows sit in disconnected portals with no way to tell a routine tender from a rigged one, or a suspicious pattern from noise.',
    paragraphs: [
      'Tender-Trace ingests India’s CPPP "Award of Contract" dataset, currently about 4.5 million rows and growing roughly 500k a year, and runs it through an econometric lens usually reserved for antitrust analysis. A Herfindahl-Hirschman Index is scored per department and per vendor to surface market concentration, alongside a custom Integrity Risk Index blending single-bid rate, bid-window compression, and award-delay asymmetry.',
      'The flagged anomalies aren’t just charted, they’re actionable. A "Generate RTI Dossier" button produces a three-part legal packet: an analytical cover sheet carrying the provenance hash of the source batch, a Section 6(1)-formatted Right to Information application addressed to the correct CPIO pulled straight from the org record, and specific, non-hypothetical record demands engineered to survive the standard rejection tactics public information officers use to stall requests.',
      'Every batch ingest is SHA-256 hashed and the hash published, so a journalist citing a flagged anomaly can prove it traces back to an unedited government row. Provenance as a first-class feature, not an afterthought.',
    ],
    metrics: [
      { value: '4.5M+', label: 'procurement records ingested' },
      { value: '~25GB', label: 'raw SQLite pipeline data' },
      { value: '<5ms', label: 'target query time, tuned indexes' },
      { value: '3-part', label: 'auto-generated RTI legal dossier' },
    ],
    standout: [
      'HHI market-concentration plus a logistic-regression-weighted Integrity Risk Index, not just dashboards',
      'RTI request generator that outputs statutorily correct Section 6(1) applications',
      'SHA-256 provenance hashing on every ingest batch, published for independent verification',
      'Hybrid data tier: Supabase Postgres for live aggregates, Cloudflare R2 for precomputed JSON, keeping a government-scale dataset feeling instant on a free-tier budget',
    ],
    scope: [
      'Investigative journalists filing RTI requests',
      'SME and local contractors bidding on public tenders',
      'Compliance officers inside government departments',
      'Civic-tech and transparency researchers',
    ],
    stack: [
      'Next.js 16', 'React 19', 'TypeScript', 'Cloudflare Workers', 'Cloudflare Hyperdrive',
      'Supabase / Postgres', 'Cloudflare R2', 'SQLite', 'D3', 'Recharts', 'Python (ETL)',
    ],
    links: [
      { label: 'Live app', href: 'https://cppp-five.vercel.app' },
      { label: 'Source', href: 'https://github.com/suryanshu1520-1/CPPP' },
    ],
  },
  {
    id: 'fasal-mis',
    index: '02',
    name: 'FASAL MIS',
    tagline: 'A monitoring & evaluation dashboard for Farmers Action for Sustainable Agro-based Livelihoods (₹2.16 Cr programme)',
    year: '2026',
    status: 'Live',
    theme: 'verdant',
    summary:
      'An M&E dashboard built for DEHAT, tracking a Farmers Action for Sustainable Agro-based Livelihoods programme across 1,300+ households in Bahraich District, Uttar Pradesh. Built for program managers and the Oak Foundation, the grant’s funder.',
    problem:
      'NGO field data arrives as conflicting Excel exports from different survey rounds. The usual failure mode is a dashboard that quietly reports whichever number was pasted in last: confident, clean, and wrong.',
    paragraphs: [
      'Six programme tabs (Baseline Survey, Results Scorecard, Agriculture Economy, Rights & Entitlements Convergence, Nutrition Security, and Institutions & Capacity Building) sit alongside a searchable 1,300+ record Farmer Registry and a "Stories of Change" module of narrative case studies, giving the data a human face rather than only a chart.',
      'The part worth pointing at isn’t the UI, it’s the audit trail underneath it. A dedicated Data Quality Audit tab and a full triangulation report cross-validate conflicting NGO source files against each other, and document, in the app itself, real errors they caught, including a previously reported turmeric-income figure traced back to a single mis-read source row.',
      'Where source data was logically inconsistent (a household flagged both BPL and APL on the same record), eligibility figures are regenerated with a seeded RNG so the correction is reproducible rather than a silent one-off fix.',
    ],
    metrics: [
      { value: '1,300+', label: 'farmer records tracked' },
      { value: '6', label: 'programme areas covered' },
      { value: '28', label: 'source datasets triangulated' },
      { value: '₹2.16 Cr', label: 'programme grant tracked' },
    ],
    standout: [
      'A self-critical, versioned Data Quality Audit that documents and corrects the organization’s own reporting errors, in production',
      'Full data-provenance pipeline: field survey booklets to digitized Excel to ETL scripts to static dashboard JSON',
      'Reproducible correction of logically-inconsistent source data via a seeded RNG, instead of a silent hand-edit',
      '"Stories of Change": narrative case studies of individual farmers built as structured UI, not just a PDF appendix',
    ],
    scope: [
      'NGO programme managers running the FASAL livelihoods programme',
      'Grant officers and funders reviewing M&E reports',
      'M&E consultants auditing agri-livelihoods data',
      'District-level agriculture and rural development staff',
    ],
    stack: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Python / Node ETL scripts'],
    links: [
      { label: 'Live app', href: 'https://fasal-mis.vercel.app' },
      { label: 'Source', href: 'https://github.com/FASAL4/FASAL_MIS' },
    ],
  },
  {
    id: 'dcos',
    index: '03',
    name: 'DentalConnect OS',
    tagline: 'A case-management handoff between dentists and dental labs, with real 3D scan review',
    year: '2026',
    status: 'In progress',
    theme: 'teal',
    summary:
      'A clinical handoff platform connecting dentists and dental labs: digital prescriptions, STL scan uploads, and a Kanban case pipeline from PENDING through DELIVERED. Deliberately not an EHR or billing system, just the production journey a crown or aligner takes between clinic and lab.',
    problem:
      'That handoff normally happens over email attachments and phone calls: a scan file here, a shade selection in a WhatsApp message, a status update nobody wrote down. Nothing about the case is queryable until it is done.',
    paragraphs: [
      'A dentist builds a digital prescription (FDI tooth charting, material and shade selection, implant or scan-body details), uploads an STL scan, and assigns a lab. From there the case moves through a fixed pipeline on a drag-and-drop Kanban board, with a case timeline that shows lab-internal notes separately from what the dentist sees, and per-case chat that unlocks only once a lab accepts the job.',
      'The part that took real engineering is the 3D layer: STL scans render directly in the browser with Three.js and React Three Fiber, and a spatial annotation system lets a reviewer click a point on the actual tooth mesh, drop a pin, and attach a note, then mark it resolved. A separate token-based "Smile Preview" link lets a patient view their 3D design with no account required.',
      'This one is the least finished of the five, and it says so about itself: a 15KB self-audit document lives in the repo, flagging a schema conflict, a public storage bucket that needs locking down, and inventory writes that are not yet safe under concurrent edits. Shipping the audit alongside the code, instead of hiding it, is the part worth noticing.',
    ],
    metrics: [
      { value: '~12,900', label: 'lines across src/' },
      { value: '23', label: 'sequential SQL migrations' },
      { value: '3D', label: 'in-browser STL viewer with spatial notes' },
      { value: 'Self-audited', label: 'known issues tracked in repo' },
    ],
    standout: [
      'Real STL rendering in the browser with click-to-annotate spatial notes on the 3D mesh, not a static screenshot viewer',
      'Dual-visibility case timeline: lab-internal notes stay internal, dentist-facing updates stay separate',
      'Postgres triggers auto-provision a profile, a lab profile, and a chat channel the moment a case is created',
      'A self-written audit that names its own security gaps instead of quietly shipping around them',
    ],
    scope: [
      'Dental clinics coordinating cases with outside labs',
      'Dental labs managing incoming production queues',
      'Patients previewing a case before treatment',
      'Dental-tech operators evaluating the platform for a pilot deployment',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Three.js', 'React Three Fiber', 'Supabase / Postgres', 'shadcn/ui', 'Tailwind CSS'],
    links: [
      { label: 'Live app', href: 'https://www.dcos.in' },
      { label: 'Source', href: 'https://github.com/DCOSArch/DCOS' },
    ],
  },
  {
    id: 'tark',
    index: '04',
    name: 'Tark 1.0',
    tagline: 'A server-authoritative exam arena for competitive-exam aspirants',
    year: '2026',
    status: 'Live',
    theme: 'crimson',
    summary:
      'A timed quiz arena for Indian competitive-exam prep (UPSC-style), with a leaderboard, a current-affairs feed generated by its own scrape-to-LLM pipeline, and paid ranked seats sold through Razorpay.',
    problem:
      'Quiz apps that trust the client are quiz apps that get gamed. And a current-affairs feed for exam prep is stale the moment a human stops curating it by hand every day.',
    paragraphs: [
      'Every quiz submission is rescored server-side against the database. The client’s answers are never trusted for the final result, which closes off the easiest cheating vector in any timed-test product.',
      'The current-affairs module runs its own small content pipeline: a daily cron scrapes exam-prep sources, pipes the raw text through a Llama 3.1 model behind a strict editorial system prompt, and upserts the resulting structured digest straight into Supabase. A real scrape-to-LLM-to-structured-content system, not a CMS someone updates by hand.',
      'Paid "Vanguard" ranked seats are sold through Razorpay. A specific race condition in the checkout flow, two users claiming the last seat at the same time, is closed with an atomic reservation table and a time-boxed RPC lock: the kind of fix that only shows up once you’ve actually shipped payments to real users.',
    ],
    metrics: [
      { value: '~10,400', label: 'lines of TypeScript' },
      { value: '2', label: 'daily cron pipelines (news + leaderboard)' },
      { value: 'Server-side', label: 'quiz scoring, zero client trust' },
      { value: '15-min', label: 'atomic seat lock on checkout' },
    ],
    standout: [
      'Automated scrape-to-LLM-to-digest pipeline feeding a "current affairs" feature, refreshed daily without a human editor',
      'Server-authoritative scoring designed explicitly against client-side cheating',
      'A named, fixed Razorpay race condition on paid-seat checkout: production-hardening, not a demo shortcut',
      'Gemini-backed quiz explanations layered on top of the deterministic scoring path',
    ],
    scope: [
      'Competitive-exam aspirants preparing UPSC-style exams',
      'EdTech operators building exam-prep products',
      'Content teams that need an automated current-affairs pipeline',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Express (Vercel function)', 'Supabase / Postgres', 'Razorpay', 'Google Gemini', 'Llama 3.1 (Gradio)', 'Tailwind CSS'],
    links: [
      { label: 'Live app', href: 'https://py.md/TarkV1' },
      { label: 'Source', href: 'https://github.com/suryanshu1520-1/SKU' },
    ],
  },
  {
    id: 'plusone',
    index: '05',
    name: 'PlusOne',
    tagline: 'A personal habit companion with a hand-built ember particle system',
    year: '2026',
    status: 'In progress · Android',
    theme: 'ember',
    summary:
      'A single-screen Jetpack Compose companion app for harm-reduction habit tracking. Adaptive workouts, hydration targets, and a custom Canvas mini-game that simulates lighting and flicking a cigarette, ash and all.',
    problem:
      'The interesting problem here wasn’t data modeling, it was making a small, tactile interaction feel physically real without reaching for an animation library.',
    paragraphs: [
      'The centerpiece is a hand-rolled Canvas particle system: dragging, lighting, ash buildup, and an ash-flick gesture, paired with procedurally generated audio (sine-wave PCM tone synthesis via AudioTrack) and matched custom vibration waveforms, so every interaction has its own sound and haptic signature instead of a stock click.',
      'Around that sits an adaptive companion layer: a 120-second "Ignition" workout whose exercises change based on a self-reported energy level, and a hydration target that scales dynamically with how much you’ve smoked and how much you’ve worked out that day. The app pushes back on you rather than just logging what happened.',
      'It’s an honest work-in-progress: several scaffolded dependencies (Firebase, Retrofit, CameraX) aren’t wired up yet, and it’s included here for the interaction engineering, not as a finished product.',
    ],
    metrics: [
      { value: '~4,550', label: 'lines of Kotlin' },
      { value: '620', label: 'lines, hand-rolled particle canvas' },
      { value: '0', label: 'animation libraries used for it' },
      { value: 'MVVM', label: 'Room + StateFlow + Compose' },
    ],
    standout: [
      'Procedural PCM tone synthesis (AudioTrack) matched to custom VibrationEffect waveforms per interaction',
      'A Canvas-based ash/smoke particle system built without a graphics or animation library',
      'Dynamic hydration and workout targets that adapt to same-day logged behavior',
      'Built and shipped this far entirely solo, including the audio and haptics layer most app teams outsource to a library',
    ],
    scope: [
      'Individuals tracking a harm-reduction habit',
      'Android engineers interested in custom Canvas and haptics work',
      'Health-behavior app designers evaluating adaptive UX patterns',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Coroutines / StateFlow', 'AudioTrack (procedural audio)', 'Navigation-Compose'],
    links: [
      { label: 'Source', href: 'https://github.com/suryanshu1520-1/PlusOne' },
    ],
  },
]
