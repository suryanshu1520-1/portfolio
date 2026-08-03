import { motion } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Design',
    body: 'Define the data model and the implementation plan before any code gets written, agent-assisted or not.',
  },
  {
    n: '02',
    title: 'Split',
    body: 'Break the plan into units of work small enough to hand off, to an agent or to myself, without losing track of any of them.',
  },
  {
    n: '03',
    title: 'Review',
    body: 'Every diff is checked against the plan and the test output before it merges. Nothing ships on a skim.',
  },
  {
    n: '04',
    title: 'Ship & log',
    body: 'Commit, record what changed and why, move to the next unit. State lives in the repo, not in my head.',
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
          <span className="font-mono text-[11px] uppercase tracking-widest text-amber-500">
            How I ship
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-medium tracking-tight text-signal sm:text-4xl">
            I design and build the hard parts myself. Agents handle the rest.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-signal-dim">
            The architecture, the data models, and the harder engineering decisions on these
            projects are mine: the Integrity Risk Index, the Razorpay checkout race-condition fix,
            the Canvas particle engine. On Tender-Trace specifically, I also run a small multi-agent
            setup for well-specified implementation work: building a unit against a plan I've
            already written, running the test suite, applying a fix whose shape I already know.
            I review every diff before it merges and decide when something is actually done. It's
            a way to move faster on the parts that don't require my judgment, not a substitute
            for it.
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
              <div className="font-mono text-xs text-amber-500">{step.n}</div>
              <div className="font-display mt-3 text-xl font-medium text-signal">{step.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-signal-dim">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
