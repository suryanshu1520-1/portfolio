import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { themes } from '../data/themes'

interface ProjectCardProps {
  project: Project
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const theme = themes[project.theme]

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: 0.08 }}
      className="relative border-t border-white/[0.06] py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -top-px left-0 h-px w-24"
        style={{ background: theme.hex }}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-4">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-signal-faint">{project.index}</span>
            <span
              className={`font-mono text-[11px] uppercase tracking-widest ${theme.text}`}
            >
              {project.status}
            </span>
          </div>
          <h3 className="font-display mt-4 text-4xl font-semibold tracking-tight text-signal sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-signal-dim">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border ${theme.borderSoft} px-4 py-2 font-mono text-[11px] uppercase tracking-widest ${theme.text} transition-colors ${theme.hoverBgSoft}`}
              >
                {link.label} ↗
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl font-medium text-signal">{m.value}</div>
                <div className="mt-1 text-xs leading-snug text-signal-faint">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="lg:col-span-8">
          <p className="border-l-2 border-white/10 pl-5 text-lg italic leading-relaxed text-signal-dim">
            {project.problem}
          </p>

          <div className="mt-8 space-y-5">
            {project.paragraphs.map((para, i) => (
              <p key={i} className="leading-relaxed text-signal-dim">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <div className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
              What's actually interesting here
            </div>
            <ul className="mt-4 space-y-3">
              {project.standout.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-signal">
                  <span className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full ${theme.bg}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <div className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
              Who this is built for
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.scope.map((audience) => (
                <span
                  key={audience}
                  className={`rounded-full border ${theme.borderSoft} px-3 py-1.5 text-xs leading-snug text-signal-dim`}
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-signal-dim"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}
