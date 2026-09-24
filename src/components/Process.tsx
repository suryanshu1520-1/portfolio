import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Architect',
    body: 'Define data models, invariant boundaries, and the master system blueprint before any code is written, agent-assisted or manual.',
  },
  {
    n: '02',
    title: 'Harness',
    body: 'Break the plan into deterministic units of work backed by verification tests, test doubles, and bounded multi-agent protocols.',
  },
  {
    n: '03',
    title: 'Audit',
    body: 'Every diff is checked against the invariant plan, type signatures, and automated test output before merging. Zero skims.',
  },
  {
    n: '04',
    title: 'Ship & log',
    body: 'Commit, record architectural mutations in the ledger, and deploy. State and provenance live strictly in the repo.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-500">
            How I ship
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium tracking-tight text-signal sm:text-4xl">
            I architect the core systems and state models myself. Bounded agents accelerate the rest.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-signal-dim">
            The architecture, state machines, and harder engineering decisions on these systems are mine:
            the bi-temporal Merkle event store and patent specifications in DCOS 2.0, the server-authoritative
            UPSC Prelims engine and Grounding Protocol in Tark, the HHI econometric risk index in Tender-Trace,
            and the Canvas particle engine in PlusOne. For implementation velocity, I construct formal multi-agent
            harnesses—such as the Tri-Agent autonomous loop on Tender-Trace or 33/33 test verification suites in
            DCOS—reviewing every diff against explicit invariant plans before anything merges. It is a method for
            accelerating execution on well-bounded tasks without ever outsourcing architectural judgment.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <div className="font-mono text-xs text-brand-500">{step.n}</div>
              <div className="font-display mt-3 text-xl font-medium text-signal">{step.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-signal-dim">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
