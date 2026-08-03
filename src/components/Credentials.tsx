import { motion } from 'framer-motion'

const TIMELINE = [
  { period: '2024 to present', role: 'Policy & M&E practitioner', place: 'Bihar, Uttar Pradesh, Telangana' },
  { period: '2024 to 2026', role: 'CSR and Living Income consulting', place: 'Sattva Consulting / Arcus Policy Research' },
  { period: '2022 to 2024', role: 'Master of Public Policy', place: 'NLSIU, Bengaluru' },
  { period: '2019 to 2022', role: 'BA, Law and Politics', place: 'Ambedkar University, Delhi' },
  { period: '2014 to 2019', role: 'Grassroots programme monitoring', place: 'DEHAT, Bahraich' },
]

const RECORD = [
  'Built the results-framework for a ₹2.16 Cr livelihoods programme covering 6 gram panchayats and 1,329 farmer families.',
  'Wrote a 35-check automated integrity audit that re-derives every published indicator from source data.',
  'Ran Anker-methodology Living Income Benchmark studies across three states for Arcus Policy Research.',
  'Managed a roughly ₹12.5 Cr multi-NGO CSR portfolio across 25+ implementation partners for Sattva Consulting.',
  'Designed bilingual Hindi/English survey instruments for fieldwork in two of Uttar Pradesh’s worst-performing health districts.',
]

const BADGES = ['MPP, NLSIU', 'BA, Ambedkar University', '3+ yrs policy & M&E', 'Native Awadhi & Bhojpuri', '5 shipped tools']

export default function Credentials() {
  return (
    <section id="credentials" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-amber-500">
            Credentials
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium tracking-tight text-signal sm:text-4xl">
            The record, in brief.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-signal-dim">
            Three years of policy and M&E work, five before that in the field. The projects on
            this page are what I build. This is where that work comes from.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap gap-2">
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-amber-500/30 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-amber-500"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
              Education & experience
            </h3>
            <ol className="mt-5 space-y-5 border-l-2 border-white/10 pl-5">
              {TIMELINE.map((item) => (
                <li key={item.role}>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
                    {item.period}
                  </div>
                  <div className="mt-1 font-medium text-signal">{item.role}</div>
                  <div className="text-sm text-signal-dim">{item.place}</div>
                </li>
              ))}
            </ol>
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
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
