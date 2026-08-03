import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/[0.06] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-widest text-brand-500"
        >
          Get in touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-balance mt-4 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-signal sm:text-5xl"
        >
          Building something that needs raw data turned into something trustworthy?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="mailto:suryanshu@dehatindia.org"
            className="rounded-full border border-brand-500/30 bg-brand-500/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-brand-500 transition-colors hover:bg-brand-500/20"
          >
            suryanshu@dehatindia.org
          </a>
          <a
            href="https://github.com/suryanshu1520-1"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/[0.08] px-6 py-3 font-mono text-xs uppercase tracking-widest text-signal-dim transition-colors hover:text-signal"
          >
            github.com/suryanshu1520-1 ↗
          </a>
          <a
            href="https://www.linkedin.com/in/suryanshu-chaturvedi-5765b51a4"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/[0.08] px-6 py-3 font-mono text-xs uppercase tracking-widest text-signal-dim transition-colors hover:text-signal"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        <div className="mt-24 flex flex-col gap-4 border-t border-white/[0.06] pt-8 font-mono text-[11px] uppercase tracking-widest text-signal-faint sm:flex-row sm:items-center sm:justify-between">
          <span>Designed &amp; built by Suryanshu Chaturvedi</span>
          <span>Signal from noise · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
