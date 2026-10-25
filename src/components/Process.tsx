import { motion } from 'framer-motion'

interface ProcessProps {
  onOpenPatents?: () => void
}

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

export default function Process({ onOpenPatents }: ProcessProps) {
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
            the bi-temporal Merkle event store and{' '}
            <button
              type="button"
              onClick={() => onOpenPatents?.()}
              className="text-teal-300 underline decoration-teal-500/40 underline-offset-2 hover:text-white"
            >
              3 Form 2 patent specifications
            </button>{' '}
            in DCOS 2.0, the server-authoritative UPSC Prelims engine, QBank test-booklet parity pipeline, and Policy Radar in Tark,
            the HHI econometric risk index and Tri-Agent Protocol (v2) in Tender-Trace, and the Canvas particle engine in PlusOne.
            For implementation velocity, I construct formal multi-agent harnesses—such as the Tri-Agent autonomous loop on Tender-Trace
            or 33/33 test verification suites in DCOS—reviewing every diff against explicit invariant plans before anything merges.
            It is a method for accelerating execution on well-bounded tasks without ever outsourcing architectural judgment.
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
              className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-brand-500">
                {step.n}
              </div>
              <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-signal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-signal-dim">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
