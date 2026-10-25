import { motion } from 'framer-motion'

interface CredentialsProps {
  onOpenPatents?: (id?: string) => void
}

const EDUCATION = [
  { period: '2022 to 2024', role: 'Master of Public Policy (Public Policy Analysis)', place: 'National Law School of India University, Bengaluru' },
  { period: '2019 to 2022', role: 'B.A. Law and Politics', place: 'Ambedkar University, Delhi' },
]

const EXPERIENCE = [
  { period: 'May 2026 to present', role: 'Systems Architect & Founder, Tark & DCOS 2.0', place: 'Independent' },
  { period: 'Sep 2025 to Jan 2026', role: 'Research Consultant', place: 'Arcus Policy Research, New Delhi' },
  { period: 'Sep 2024 to Jul 2025', role: 'CSR Analyst', place: 'Sattva Consulting, Bengaluru' },
  { period: 'Feb 2023 to Mar 2024', role: 'Research and Communication', place: 'Centre for Responsible Business / Development Solutions, New Delhi' },
  { period: 'Sep 2020 to Jul 2022', role: 'Graphic Design Consultant', place: 'The George Institute for Global Health, remote' },
  { period: '2014 to 2019', role: 'Translator and Communications', place: 'School for International Training / DEHAT, Bahraich' },
]

const RECORD = [
  'Authored 3 complete Form 2 Indian patent specifications (CRIs) covering bi-temporal clinical event sourcing, zero-driver 3D mesh LOD decimation, and dual-layer clinical-lab gating in DCOS 2.0.',
  'Engineered Tark’s QBank Final Edition (4,156 authentic 2001–2025 questions with 100% booklet parity), Mains GS1–GS4 & Essay extractor with layout recovery, and server-authoritative Prelims Exam Hall.',
  'Architected Tender-Trace’s Tri-Agent autonomous ingestion protocol (v2) and Cloudflare Hyperdrive edge query proxy (<5ms latency) across 4.5M+ public procurement records.',
  'Managed a ₹12.5 Cr multi-NGO CSR portfolio across 25+ implementation partners, onboarding 12+ new institutional partners, at Sattva Consulting.',
  'Led field execution of Anker-methodology Living Income Benchmarking across Bihar, Telangana, and Gautam Buddh Nagar (UP) for Arcus Policy Research.',
  'Designed the results-framework and a 35-check automated integrity audit behind a ₹2.16 Cr farmer-livelihoods programme (FASAL MIS).',
]

const BADGES = [
  { label: '3 Form 2 Patents (CRIs)', isPatent: true },
  { label: '120k+ LoC Systems', isPatent: false },
  { label: 'MPP, NLSIU', isPatent: false },
  { label: 'ABDM & FHIR R5', isPatent: false },
  { label: '3+ yrs policy & M&E', isPatent: false },
  { label: 'Native Awadhi speaker', isPatent: false },
]

function Timeline({ items }: { items: typeof EDUCATION }) {
  return (
    <ol className="space-y-5 border-l-2 border-white/10 pl-5">
      {items.map((item) => (
        <li key={item.role}>
          <div className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
            {item.period}
          </div>
          <div className="font-display mt-1 text-lg font-medium leading-snug text-signal">
            {item.role}
          </div>
          <div className="text-sm text-signal-dim">{item.place}</div>
        </li>
      ))}
    </ol>
  )
}

export default function Credentials({ onOpenPatents }: CredentialsProps) {
  return (
    <section id="credentials" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-500">
            Credentials
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium tracking-tight text-signal sm:text-4xl">
            The record, in brief.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-signal-dim">
            Three years of policy and M&amp;E research, five before that in grassroots field operations,
            and 120k+ lines of production engineering. The projects on this page are what I build.
            This is where that rigor comes from.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {BADGES.map((b) =>
            b.isPatent ? (
              <button
                key={b.label}
                onClick={() => onOpenPatents?.()}
                className="group flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/[0.08] px-4 py-2 text-sm font-medium text-teal-300 transition-all hover:border-teal-400 hover:bg-teal-500/20 hover:text-white"
              >
                <span>{b.label}</span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
              </button>
            ) : (
              <span
                key={b.label}
                className="rounded-full border border-brand-500/30 bg-brand-500/[0.06] px-4 py-2 text-sm font-medium text-signal"
              >
                {b.label}
              </span>
            )
          )}
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
              Education
            </h3>
            <div className="mt-5">
              <Timeline items={EDUCATION} />
            </div>
            <h3 className="mt-10 font-mono text-[11px] uppercase tracking-widest text-signal-faint">
              Experience
            </h3>
            <div className="mt-5">
              <Timeline items={EXPERIENCE} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
              Track record
            </h3>
            <ul className="mt-5 space-y-4">
              {RECORD.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-signal-dim">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* Patent Specifications Callout Card */}
            <div className="mt-8 rounded-xl border border-teal-500/20 bg-teal-500/[0.04] p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-teal-400" />
                    <span className="font-mono text-xs uppercase tracking-wider text-teal-300">
                      Indian CRI Patent Specifications (Form 2)
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-signal-dim">
                    Three complete specifications prepared under Section 10 &amp; Rule 13 of the Indian Patents Act, 1970: Bi-Temporal Merkle Odontogram, Zero-Driver 3D Mesh Ingestion, and Dual-Layer CAD/CAM Gating.
                  </p>
                </div>
                <button
                  onClick={() => onOpenPatents?.()}
                  className="flex-none rounded-lg border border-teal-500/40 bg-teal-500/10 px-3.5 py-2 font-mono text-xs font-medium text-teal-300 transition-colors hover:bg-teal-500/20 hover:text-white"
                >
                  Explore Specifications ↗
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
