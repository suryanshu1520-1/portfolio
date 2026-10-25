import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { patents } from '../data/patents'

interface PatentModalProps {
  isOpen: boolean
  onClose: () => void
  initialPatentId?: string
}

export default function PatentModal({ isOpen, onClose, initialPatentId }: PatentModalProps) {
  const [activeId, setActiveId] = useState<string>(initialPatentId || patents[0].id)

  useEffect(() => {
    if (initialPatentId) {
      setActiveId(initialPatentId)
    }
  }, [initialPatentId])

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const selectedPatent = patents.find((p) => p.id === activeId) || patents[0]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-white/[0.12] bg-[#0c0d12] shadow-2xl shadow-black/80"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/[0.08] px-6 py-5 sm:px-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-teal-400">
                    Intellectual Property · DCOS 2.0
                  </span>
                  <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 font-mono text-[10px] text-teal-300">
                    Form 2 Specifications
                  </span>
                </div>
                <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-signal sm:text-3xl">
                  Indian Patent Portfolio
                </h3>
                <p className="mt-1 text-xs text-signal-dim">
                  Prepared in accordance with Form 2 (Second Schedule) of the Indian Patents Rules, 2003 &amp; CRI Guidelines (2017)
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-signal-dim transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-signal"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Patent Selector Tabs */}
            <div className="flex border-b border-white/[0.08] bg-black/40 px-6 sm:px-8">
              <div className="flex space-x-2 overflow-x-auto py-3">
                {patents.map((p) => {
                  const isActive = p.id === selectedPatent.id
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveId(p.id)}
                      className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-left font-mono text-xs transition-all ${
                        isActive
                          ? 'border border-teal-500/40 bg-teal-500/15 text-signal font-medium'
                          : 'border border-transparent text-signal-dim hover:bg-white/[0.04] hover:text-signal'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-teal-400' : 'bg-white/20'}`} />
                      <span>{p.code}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6 text-sm text-signal-dim">
              {/* Patent Heading & IPCs */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-teal-400">{selectedPatent.code}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-signal-faint">{selectedPatent.jurisdiction}</span>
                </div>
                <h4 className="font-display mt-2 text-lg font-medium leading-snug text-signal sm:text-xl">
                  {selectedPatent.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-signal-faint">IPC Codes:</span>
                  {selectedPatent.ipcCodes.map((code) => (
                    <span
                      key={code}
                      className="rounded border border-teal-500/20 bg-teal-500/5 px-2 py-0.5 font-mono text-xs text-teal-300"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statutory Framework & Section 3(k) Compliance */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-4 text-xs">
                <div className="font-mono uppercase tracking-widest text-amber-400">
                  Statutory Basis &amp; Section 3(k) CRI Compliance
                </div>
                <p className="mt-1 text-signal-dim">
                  {selectedPatent.statutoryBasis}. Complies with Delhi High Court CRI precedents (
                  <em>Ferid Allani v. Union of India</em>) by solving concrete physical operatory bottlenecks,
                  producing measurable hardware transformations, and interacting directly with scanner hardware and dental CAD/CAM milling pipelines.
                </p>
              </div>

              {/* The Technical Problem */}
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-signal-faint">
                  The Clinical / Engineering Bottleneck
                </div>
                <p className="mt-2 leading-relaxed text-signal">
                  {selectedPatent.problemSolved}
                </p>
              </div>

              {/* Technical Transformation & Architectural Innovation */}
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-signal-faint">
                  Technical Effect &amp; Tangible Transformation
                </div>
                <p className="mt-2 leading-relaxed text-signal">
                  {selectedPatent.technicalEffect}
                </p>
              </div>

              {/* Core Patent Claims */}
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-signal-faint">
                  Summary of Form 2 Claims
                </div>
                <ul className="mt-3 space-y-2.5">
                  {selectedPatent.claimsSummary.map((claim, idx) => (
                    <li key={idx} className="flex gap-3 text-xs leading-relaxed text-signal-dim">
                      <span className="mt-1 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-teal-500/10 font-mono text-[10px] font-semibold text-teal-400">
                        {idx + 1}
                      </span>
                      <span>{claim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Abstract */}
              <div className="rounded-xl border border-white/[0.06] bg-black/30 p-4">
                <div className="font-mono text-[11px] uppercase tracking-widest text-signal-faint">
                  Official Abstract
                </div>
                <p className="mt-2 text-xs italic leading-relaxed text-signal-dim">
                  "{selectedPatent.abstract}"
                </p>
              </div>

              {/* File reference */}
              <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.01] px-4 py-3 font-mono text-[11px] text-signal-faint">
                <span>Repository specification document:</span>
                <span className="text-teal-400">{selectedPatent.localPath}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-4 sm:px-8 bg-black/40">
              <span className="font-mono text-[11px] text-signal-faint">
                Jurisdiction: Controller General of Patents, Designs &amp; Trade Marks, Government of India
              </span>
              <button
                onClick={onClose}
                className="rounded-lg border border-white/10 px-4 py-2 font-mono text-xs text-signal transition-colors hover:bg-white/[0.06]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
