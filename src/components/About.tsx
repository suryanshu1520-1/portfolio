import { motion } from 'framer-motion'

interface AboutProps {
  onOpenPatents?: () => void
}

const FACTS = [
  { label: 'Based', value: 'New Delhi, India' },
  {
    label: 'Education',
    value: 'MPP, NLSIU Bengaluru (2022–2024) · BA Law & Politics, Ambedkar University Delhi (2019–2022)',
  },
  {
    label: 'Patents',
    value: '3 Form 2 Indian Patent Specifications (CRIs) in Clinical Event Sourcing, 3D LOD & CAD/CAM Gating',
    isPatent: true,
  },
  { label: 'Field languages', value: 'English (fluent), Hindi (native), Awadhi (native), Bhojpuri (conversational)' },
  { label: 'Focus', value: 'Civic tech & procurement, bi-temporal healthcare OS, exam simulation & policy telemetry' },
]

export default function About({ onOpenPatents }: AboutProps) {
  return (
    <section id="about" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-500">
              About
            </span>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-signal sm:text-4xl">
              Trained in public policy. The tools came from needing them in the field.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-signal-dim">
              <p>
                I am Suryanshu Chaturvedi. I hold a Master of Public Policy from NLSIU Bengaluru
                and have extensive experience in programme monitoring, results-based management,
                econometric policy research, and full-stack software architecture across Bihar,
                Uttar Pradesh, Telangana, and Odisha, backed by five years of grassroots field
                experience at a district NGO.
              </p>
              <p>
                None of the five systems on this page began as a portfolio exercise. Tender-Trace,
                FASAL MIS, and DentalConnect OS each originated because a concrete piece of fieldwork,
                research, or clinical coordination required a tool that did not exist yet, and
                building it from first principles was faster than waiting for someone else to. Tark and
                PlusOne applied that same insistence on server-authoritative integrity, anti-cheat
                verifiability, and interaction physics to competitive examinations and behavioral tools.
              </p>
              <p>
                Outside of what is on this page: I have authored{' '}
                <button
                  type="button"
                  onClick={() => onOpenPatents?.()}
                  className="font-medium text-teal-300 underline decoration-teal-500/40 underline-offset-4 hover:text-white hover:decoration-teal-400"
                >
                  3 complete Form 2 Indian patent specifications (CRIs)
                </button>{' '}
                in distributed clinical event stores, progressive 3D mesh review, and clinical-laboratory gating;
                led Anker-methodology Living Income Benchmarking across Bihar, Telangana, and Gautam Buddh Nagar;
                managed a ₹12.5 crore multi-partner CSR portfolio across 25+ implementation partners; and built
                the results-framework and 35-check automated integrity audit behind a ₹2.16 crore
                farmer-livelihoods programme. The core discipline is identical: take complex, messy
                real-world data and engineer systems that are mathematically and empirically defensible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <dl className="grid grid-cols-1 gap-6 border-l-2 border-white/10 pl-6">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
                    {fact.label}
                  </dt>
                  {fact.isPatent ? (
                    <dd className="mt-1.5 text-sm leading-relaxed text-teal-300">
                      <button
                        type="button"
                        onClick={() => onOpenPatents?.()}
                        className="text-left hover:underline flex items-start gap-1"
                      >
                        <span>{fact.value}</span>
                        <span className="font-mono text-xs text-teal-400">↗</span>
                      </button>
                    </dd>
                  ) : (
                    <dd className="mt-1.5 text-sm leading-relaxed text-signal">{fact.value}</dd>
                  )}
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
