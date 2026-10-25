export interface StepItem {
  i: number
  kind: string
  t: string
  d: string
  delay: string
}

export interface RedesignProject {
  id: string
  flagship: boolean
  tag: string
  name: string
  oneLine: string
  context: string
  problem: string
  did: string
  why: string
  flow: StepItem[]
  stack: string[]
  deep: string
  live: string
  liveLabel: string
  code: string
}

export interface LiveIndexItem {
  n: string
  name: string
  what: string
  host: string
  href: string
}

export interface ProofItem {
  v: string
  l: string
}

export interface OfferItem {
  n: string
  t: string
  d: string
}

export interface TimelineItem {
  org: string
  when: string
  what: string
}

function makeSteps(arr: [string, string, string][]): StepItem[] {
  return arr.map(([kind, t, d], i) => ({
    i: i + 1,
    kind,
    t,
    d,
    delay: `${i * 1.5}s`,
  }))
}

export const REDESIGN_PROJECTS: Record<string, RedesignProject> = {
  tark: {
    id: 'tark',
    flagship: true,
    tag: 'Intelligence pipeline · Product',
    name: 'Tark Intelligence Hub',
    oneLine: 'An intelligence engine that reads India’s official sources every day and keeps only what matters. First built for UPSC aspirants.',
    context: 'My product · live at tark.live · my most-developed system',
    problem: 'Aspirants read hours of news daily, and most of it will never be examined. The signal is buried in noise.',
    did: 'A pipeline that treats government sources as the spine, learns what is testable from 25 years of past papers, and checks every claim against its source before it is published. Plus a full 2-hour Prelims exam-hall simulation.',
    why: 'The same machinery (authoritative sources first, relevance learned from history, every claim verified) can track any policy area: regulation, procurement, programme announcements.',
    flow: makeSteps([
      ['Collect', 'Official sources first', 'PIB releases, gazette notifications and ministry data form the spine; news outlets only corroborate.'],
      ['Rank', 'Learn what is testable', 'A prior mined from 4,156 past questions across 25 years scores each item for exam relevance.'],
      ['Verify', 'Ground every claim', 'Each sentence is matched to a source span; contested claims are flagged, not smoothed over.'],
      ['Publish', 'A short daily edition', 'Syllabus-mapped, built to be read in minutes rather than hours.'],
    ]),
    stack: ['React', 'TypeScript', 'Supabase', 'Python', 'Gemini / Groq', 'GitHub Actions'],
    deep: 'Runs at zero recurring cost on free tiers (Gemini, Groq, Supabase, Vercel, GitHub Actions). Deterministic grounding protocol with sentence-level matching and source anchors; contested-claim engine; relational vault of 4,156 previous-year questions; server-authoritative 2-hour Prelims hall with UPSC negative marking and diagnostic scorecards. Around 65,000 lines of TypeScript and Python.',
    live: 'https://tark.live',
    liveLabel: 'tark.live',
    code: 'https://github.com/suryanshu1520-1/SKU',
  },
  fasal: {
    id: 'fasal',
    flagship: false,
    tag: 'M&E · Data engineering',
    name: 'FASAL MIS',
    oneLine: 'The monitoring system behind a ₹2.16 crore farmer-livelihoods programme.',
    context: 'DEHAT · funded by the Oak Foundation · Bahraich, Uttar Pradesh',
    problem: '28 source datasets disagreed about the same 1,300+ households. Nobody could say which numbers to trust.',
    did: 'The results framework and the MIS: datasets triangulated, 35 automated quality checks, and every correction reproducible and documented in the product.',
    why: '',
    flow: makeSteps([
      ['Collect', 'Bring the sources together', '28 field and administrative datasets covering 1,300+ households.'],
      ['Check', 'Run 35 quality checks', 'Automated audits flag every conflict between sources.'],
      ['Correct', 'Fix it reproducibly', 'Seeded, deterministic corrections, each logged in a public data-quality audit.'],
      ['Report', 'Indicators people trust', 'A dashboard of programme indicators beside qualitative Stories of Change.'],
    ]),
    stack: ['React', 'TypeScript', 'Python ETL', 'Recharts'],
    deep: 'Corrections run on a seeded, deterministic RNG so any figure can be regenerated exactly. A public Data Quality Audit lists each discrepancy across the 28 sources and how it was resolved.',
    live: 'https://fasal-mis.vercel.app',
    liveLabel: 'dashboard',
    code: 'https://github.com/FASAL4/FASAL_MIS',
  },
  tender: {
    id: 'tender',
    flagship: false,
    tag: 'Civic tech · Econometrics',
    name: 'Tender-Trace',
    oneLine: 'A public watchdog for who wins India’s government contracts.',
    context: 'Independent project · Central Public Procurement Portal (CPPP) data',
    problem: '4.5 million+ contract award records are public, but unreadable at scale. Market concentration and red flags stay hidden.',
    did: 'A pipeline that ingests the records, scores each market for concentration and integrity risk, hashes every batch for provenance, and drafts RTI applications to follow up.',
    why: '',
    flow: makeSteps([
      ['Collect', 'Ingest every award', '4.5M+ contract award records from the CPPP.'],
      ['Score', 'Measure concentration & risk', 'Herfindahl-Hirschman Index per market, plus a weighted integrity-risk index.'],
      ['Prove', 'Seal each batch', 'A SHA-256 hash per batch so anyone can check the data was not altered.'],
      ['Act', 'Draft the follow-up', 'Section 6(1) RTI applications addressed to the right public information officer.'],
    ]),
    stack: ['Next.js', 'PostgreSQL', 'Cloudflare Workers', 'Python ETL', 'D3'],
    deep: 'Three-agent ingestion protocol; logistic-regression-weighted Integrity Risk Index; Cloudflare Hyperdrive edge proxy keeps aggregations under 5 ms.',
    live: 'https://cppp-five.vercel.app',
    liveLabel: 'watchdog',
    code: 'https://github.com/suryanshu1520-1/CPPP',
  },
  dcos: {
    id: 'dcos',
    flagship: false,
    tag: 'Health tech · Architecture',
    name: 'DentalConnect OS',
    oneLine: 'A clinical operating system for dental clinics and the labs they work with.',
    context: 'DCOS 2.0 · live at dcos.in',
    problem: 'Dental records have to stand up years later, and clinics and labs need one shared, trustworthy case file.',
    did: 'An append-only record that can show any patient’s chart exactly as it was on any date, tamper-evident by design, with 3D scan review in the browser and ABDM integration.',
    why: '',
    flow: makeSteps([
      ['Record', 'Log every clinical action', 'Each action is appended as an event; nothing is overwritten.'],
      ['Store', 'Keep two clocks', 'When it happened and when it was recorded are stored separately.'],
      ['Seal', 'Chain the history', 'A Merkle hash chain makes any later tampering detectable.'],
      ['Recall', 'Rewind any chart', 'Reconstruct a patient’s chart exactly as it stood on any date.'],
    ]),
    stack: ['Next.js', 'PostgreSQL 17', 'Three.js', 'HL7 FHIR R5'],
    deep: 'Bi-temporal event sourcing with a SHA-256 Merkle chain; 32-tooth FDI/Universal odontogram; progressive WebGL level-of-detail meshes for chairside 3D review; ABDM M1–M3 via Fidelius (Curve25519 + AES-GCM). I drafted three complete patent specifications (Form 2) on the core methods; they are not yet filed.',
    live: 'https://www.dcos.in',
    liveLabel: 'dcos.in',
    code: 'https://github.com/DCOSArch/DCOS',
  },
}

export const LIVE_INDEX: LiveIndexItem[] = [
  { n: '01', name: 'Tark', what: 'Policy & UPSC intelligence hub', host: 'tark.live', href: 'https://tark.live' },
  { n: '02', name: 'Tender-Trace', what: 'Procurement watchdog', host: 'live', href: 'https://cppp-five.vercel.app' },
  { n: '03', name: 'FASAL MIS', what: 'Livelihoods M&E platform', host: 'live', href: 'https://fasal-mis.vercel.app' },
  { n: '04', name: 'DentalConnect OS', what: 'Clinical operating system', host: 'dcos.in', href: 'https://www.dcos.in' },
]

export const PROOF_ITEMS: ProofItem[] = [
  { v: '4,156', l: 'past UPSC questions mapped to train Tark’s relevance model' },
  { v: '₹12.5 cr', l: 'CSR portfolio managed across 25+ implementation partners' },
  { v: '1,300+', l: 'farming households tracked in a programme MIS I built' },
  { v: '4.5M+', l: 'public procurement records analysed for concentration and risk' },
]

export const OFFERS_HIRE: OfferItem[] = [
  { n: 'i.', t: 'Policy intelligence & data products', d: 'Pipelines that turn official sources and public datasets into verified, decision-ready information.' },
  { n: 'ii.', t: 'Monitoring, evaluation & learning', d: 'Results frameworks, indicator design, data-quality systems and the dashboards that report on them.' },
  { n: 'iii.', t: 'Quantitative policy research', d: 'Large public datasets (NFHS-5, NSS-HCES, WHO, NIN) and field studies such as living-income benchmarks.' },
]

export const OFFERS_BUILD: OfferItem[] = [
  { n: 'i.', t: 'Intelligence & monitoring pipelines', d: 'Track a policy area, a market or a sector from official sources, with every claim traced back.' },
  { n: 'ii.', t: 'M&E systems & dashboards', d: 'Results frameworks, indicators and an MIS with built-in quality checks, ready for your team to run.' },
  { n: 'iii.', t: 'Evaluation & benchmarking studies', d: 'Survey instruments, multi-dataset triangulation and living-income benchmarks, from design to write-up.' },
]

export const TIMELINE: TimelineItem[] = [
  { org: 'Arcus Policy Research', when: 'Research Consultant', what: 'Living-income benchmarking (Anker methodology) across rural Bihar, Telangana and Uttar Pradesh.' },
  { org: 'Sattva Consulting', when: '2024', what: 'Managed a ₹12.5 crore multi-partner CSR portfolio across 25+ implementation partners.' },
  { org: 'DEHAT', when: 'FASAL programme', what: 'Results framework, indicators and the MIS behind a ₹2.16 crore farmer-livelihoods programme.' },
  { org: 'NLSIU Bengaluru', when: '2022–24', what: 'Master of Public Policy.' },
  { org: 'Ambedkar University Delhi', when: '2019–22', what: 'BA, Law and Politics.' },
]
