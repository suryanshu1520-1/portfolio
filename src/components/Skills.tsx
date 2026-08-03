import { motion } from 'framer-motion'

const GROUPS = [
  {
    label: 'Frontend',
    items: ['React 19', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Jetpack Compose'],
  },
  {
    label: 'Backend & data',
    items: ['Node.js', 'Express', 'Cloudflare Workers', 'Supabase / Postgres', 'SQLite', 'Cloudflare R2', 'Room (Android)'],
  },
  {
    label: '3D & visualization',
    items: ['Three.js', 'React Three Fiber', 'D3', 'Recharts', 'HHI / risk scoring'],
  },
  {
    label: 'Pipelines & platform',
    items: ['Python ETL', 'Web scraping', 'LLM content pipelines', 'Vercel', 'Netlify', 'Razorpay', 'Google Gemini', 'Multi-agent orchestration'],
  },
]

export default function Skills() {
  return (
    <section id="stack" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-widest text-brand-500"
        >
          Toolbox
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display mt-4 max-w-xl text-3xl font-medium tracking-tight text-signal sm:text-4xl"
        >
          Everything above, actually used in production.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal-faint">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-signal-dim">
                    {item}
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
