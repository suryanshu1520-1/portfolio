import { motion } from 'framer-motion'

const GROUPS = [
  {
    label: 'Frontend & 3D Spatial',
    items: [
      'React 19',
      'Next.js 16 (Turbopack)',
      'TypeScript',
      'Three.js / React Three Fiber',
      'Progressive 3D LOD Pyramids',
      'Occlusal Heatmap Shaders',
      'Live Operatory Cockpit HUD',
      'Tailwind CSS v4 & shadcn/ui',
    ],
  },
  {
    label: 'Backend, Data & Edge',
    items: [
      'PostgreSQL 17 / Supabase',
      'Bi-Temporal Event Stores',
      'SHA-256 Merkle Ledgers',
      'Cloudflare Hyperdrive & R2',
      'QBank Booklet Parity Engine',
      'Python ETL & OCR Pipelines',
      'SQLite / Turso',
      'Room DB & Jetpack Compose',
    ],
  },
  {
    label: 'HealthTech & Civic Protocols',
    items: [
      'Form 2 Patents (CRI Guidelines 2017)',
      'ABDM M1–M3 (Fidelius Curve25519)',
      'HL7 FHIR R5 Clinical Bundles',
      'CPPP Procurement Analytics (4.5M+)',
      'HHI Monopoly & IRI Risk Scoring',
      'Section 6(1) RTI Legal Dossiers',
      'Tri-Agent Protocol v2 (Autonomous Audit)',
    ],
  },
  {
    label: 'Policy, Verification & AI',
    items: [
      'Master of Public Policy (NLSIU)',
      'Policy Radar Lineage Engine',
      'Deterministic Grounding (verify.ts)',
      'Mains OCR Guard & Layout Recovery',
      'CSAT Passage Segmentation',
      'Examiner Psyche & 25-Yr PYQ Vault',
      'Anker Living Income Benchmarking',
      '35-Check M&E Data Quality Auditing',
    ],
  },
]

export default function Skills() {
  return (
    <section id="stack" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-widest text-brand-500"
        >
          Capabilities &amp; Stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display mt-4 max-w-2xl text-3xl font-medium tracking-tight text-signal sm:text-4xl"
        >
          From statutory econometrics to real-time 3D WebGL and bi-temporal ledgers.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="space-y-4"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal-faint border-b border-white/[0.08] pb-2">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-signal-dim flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-500/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
