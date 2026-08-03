import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-noise-0/80 backdrop-blur-md border-b border-white/[0.06]' : ''
      }`}
    >
      <motion.div
        className="h-[2px] bg-brand-500 origin-left"
        style={{ scaleX: progress }}
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-mono text-sm tracking-widest text-signal">
          SS<span className="text-signal-faint">/</span>
          <span className="text-signal-dim">portfolio</span>
        </a>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-signal-dim sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-signal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
