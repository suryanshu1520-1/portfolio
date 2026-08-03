import { motion } from 'framer-motion'
import ParticleField from './ParticleField'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-28 pb-10 sm:px-10">
      <ParticleField
        accent="#a78bfa"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, var(--color-noise-0) 78%)',
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-brand-500"
        >
          Suryanshu Chaturvedi · Policy researcher &amp; tool-builder
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-balance max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-signal sm:text-7xl"
        >
          I turn raw, messy, real-world data into systems people can{' '}
          <em className="italic text-brand-500">trust</em>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-signal-dim"
        >
          Five shipped, solo-built products spanning procurement watchdogging,
          agricultural livelihoods, dental practice ops, exam prep, and personal habit design.
          Between them: 4.5M+ government records, an NGO's own data audits, an anti-cheat
          exam arena, and a hand-built particle engine.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full border border-brand-500/40 bg-brand-500/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-500 transition-colors hover:bg-brand-500/20"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-signal-dim transition-colors hover:text-signal"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 flex items-center justify-between border-t border-white/[0.06] pt-6 font-mono text-[11px] uppercase tracking-widest text-signal-faint"
      >
        <span>Scroll to explore</span>
        <span>05 shipped systems</span>
      </motion.div>
    </section>
  )
}
