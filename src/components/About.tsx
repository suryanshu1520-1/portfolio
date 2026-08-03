import { motion } from 'framer-motion'

const FACTS = [
  { label: 'Based', value: 'New Delhi, India' },
  {
    label: 'Education',
    value: 'MPP, NLSIU Bengaluru (2022-2024) · BA Law & Politics, Ambedkar University Delhi (2019-2022)',
  },
  { label: 'Field languages', value: 'English, Hindi, native Awadhi & Bhojpuri' },
  { label: 'Focus', value: 'Policy & M&E systems, civic tech, agri and health data' },
]

export default function About() {
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
            <span className="font-mono text-[11px] uppercase tracking-widest text-amber-500">
              About
            </span>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-signal sm:text-4xl">
              Trained in public policy. The tools came from needing them in the field.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-signal-dim">
              <p>
                I am Suryanshu Chaturvedi. I have a Master of Public Policy from NLSIU Bengaluru
                and about three years of programme monitoring, results-based management, and
                policy research across Bihar, Uttar Pradesh, and Telangana, on top of five years
                of grassroots field experience at a district NGO before that.
              </p>
              <p>
                None of the five projects on this page started as a portfolio piece. Tender-Trace,
                FASAL MIS, and DentalConnect OS each began because a specific piece of fieldwork or
                client work needed a tool that did not exist yet, and building it myself was faster
                than waiting for someone else to. Tark and PlusOne are the same instinct pointed at
                smaller problems.
              </p>
              <p>
                Outside of what is on this page: I have run Anker-methodology Living Income
                benchmarking across three states, managed a roughly ₹12.5 crore multi-NGO CSR
                portfolio across 25+ implementation partners, and built the results-framework and a
                35-check integrity audit behind a ₹2.16 crore farmer-livelihoods programme. Same
                instinct as the code: take a dataset nobody trusts yet and make it defensible.
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
                  <dd className="mt-1.5 text-sm leading-relaxed text-signal">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
