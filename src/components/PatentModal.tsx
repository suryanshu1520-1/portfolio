import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { patents } from '../data/patents'
import MerkleOdontogramSimulator from './patent/MerkleOdontogramSimulator'
import ProgressiveLODSimulator from './patent/ProgressiveLODSimulator'
import StateGateSimulator from './patent/StateGateSimulator'
import PatentClaimsView from './patent/PatentClaimsView'
import PatentForm2Text from './patent/PatentForm2Text'

interface PatentModalProps {
  isOpen: boolean
  onClose: () => void
  initialPatentId?: string
}

type ModalViewMode = 'architecture' | 'claims' | 'form2'

export default function PatentModal({ isOpen, onClose, initialPatentId }: PatentModalProps) {
  const [activeId, setActiveId] = useState<string>(initialPatentId || patents[0].id)
  const [viewMode, setViewMode] = useState<ModalViewMode>('architecture')
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false)

  useEffect(() => {
    if (initialPatentId) {
      setActiveId(initialPatentId)
    }
  }, [initialPatentId])

  // Keyboard navigation: ESC to close, 1/2/3 to switch patents
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === '1') {
        setActiveId(patents[0].id)
      } else if (e.key === '2') {
        setActiveId(patents[1].id)
      } else if (e.key === '3') {
        setActiveId(patents[2].id)
      }
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

  const handleCopyCitation = () => {
    const citation = `${selectedPatent.code}: ${selectedPatent.title}. Form 2 Complete Specification, Indian Patent Office (IPO) / CGPDTM, New Delhi. The Patents Act, 1970 § 10 & Rule 13.`
    navigator.clipboard.writeText(citation)
    setCopiedCitation(true)
    setTimeout(() => setCopiedCitation(false), 2200)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop with radial blur and spatial aura */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#040810]/85 backdrop-blur-2xl transition-opacity"
            aria-hidden="true"
          >
            {/* Ambient teal & cyan spatial glows */}
            <div className="pointer-events-none absolute top-1/4 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/15 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-96 w-96 translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
          </motion.div>

          {/* Modal Container: Antigravity Floating Spatial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-teal-500/20 bg-[#08121E]/95 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="patent-modal-title"
          >
            {/* TOP BAR / STATUTORY HEADER */}
            <div className="flex flex-col border-b border-white/[0.08] bg-gradient-to-b from-[#0F2032]/90 to-[#0A1624]/90 px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-teal-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_#2dd4bf]" />
                      Form 2 Complete Specifications
                    </span>
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] text-amber-300">
                      Patents Act 1970 § 10 &amp; Rule 13
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-slate-400">
                      Prior-Art Disclosed · Not Yet Filed
                    </span>
                  </div>

                  <h3
                    id="patent-modal-title"
                    className="mt-2.5 font-['Source_Serif_4',Georgia,serif] text-2xl font-medium tracking-tight text-white sm:text-3xl"
                  >
                    Indian Patent Portfolio (CRIs)
                  </h3>

                  <p className="mt-1 text-xs text-slate-300">
                    Drafted in full accordance with the Indian Patent Office CRI Guidelines (2017) and Delhi High Court precedent (<em>Ferid Allani</em>).
                  </p>
                </div>

                {/* Actions: Copy Citation & Close */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyCitation}
                    className="cursor-pointer rounded-full border border-teal-500/30 bg-teal-500/15 px-3 py-1.5 font-mono text-xs font-medium text-teal-200 transition-colors hover:bg-teal-500/25 active:scale-95"
                  >
                    {copiedCitation ? '✓ Citation Copied' : 'Copy Citation'}
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer rounded-full border border-white/10 p-2 text-slate-400 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    aria-label="Close modal"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* PATENT SELECTOR SEGMENTED TABS (Antigravity Pill Indicator) */}
              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {patents.map((p, idx) => {
                  const isActive = p.id === selectedPatent.id
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveId(p.id)}
                      className={`group relative flex flex-col items-start gap-1 rounded-xl border p-3.5 text-left transition-all ${
                        isActive
                          ? 'border-teal-400/80 bg-teal-500/20 shadow-[0_0_20px_rgba(45,212,191,0.2)]'
                          : 'border-white/[0.06] bg-[#071320]/60 hover:border-teal-500/40 hover:bg-[#091828]'
                      }`}
                    >
                      <div className="flex w-full items-center justify-between font-mono text-[11px]">
                        <span className={isActive ? 'font-bold text-teal-300' : 'text-slate-400'}>
                          [{idx + 1}] {p.code}
                        </span>
                        <span
                          className={`h-2 w-2 rounded-full transition-all ${
                            isActive ? 'bg-teal-400 shadow-[0_0_8px_#2dd4bf]' : 'bg-slate-600'
                          }`}
                        />
                      </div>

                      <span className="font-['Source_Serif_4',Georgia,serif] text-sm font-medium text-white line-clamp-1">
                        {p.shortName}
                      </span>

                      <span className="font-mono text-[10px] text-slate-400 truncate w-full">
                        IPC: {p.ipcCodes[0].code}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* SECONDARY NAVIGATION: VIEW MODE SWITCHER */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#060E18] px-6 py-2.5 sm:px-8">
              <div className="flex space-x-1 sm:space-x-2">
                <button
                  type="button"
                  onClick={() => setViewMode('architecture')}
                  className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
                    viewMode === 'architecture'
                      ? 'border border-teal-500/40 bg-teal-500/20 text-teal-200'
                      : 'border border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Interactive Architecture &amp; Live Simulator</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('claims')}
                  className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
                    viewMode === 'claims'
                      ? 'border border-teal-500/40 bg-teal-500/20 text-teal-200'
                      : 'border border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Statutory Claims ({selectedPatent.claims.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('form2')}
                  className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${
                    viewMode === 'form2'
                      ? 'border border-teal-500/40 bg-teal-500/20 text-teal-200'
                      : 'border border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Official Form 2 Text</span>
                </button>
              </div>

              {/* Patent title summary */}
              <div className="hidden font-mono text-[11px] text-slate-400 md:block">
                Ref: <span className="text-teal-300">{selectedPatent.genesisOrRefToken}</span>
              </div>
            </div>

            {/* SCROLLABLE MAIN BODY */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
              {/* PATENT HEADLINE & METRICS CARD */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 shadow-inner">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="font-bold text-teal-400">{selectedPatent.code}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-slate-400">{selectedPatent.jurisdiction}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-slate-400">{selectedPatent.filingOffice}</span>
                </div>

                <h4 className="font-['Source_Serif_4',Georgia,serif] mt-2.5 text-xl font-medium leading-snug text-white sm:text-2xl">
                  {selectedPatent.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {selectedPatent.shortDescription}
                </p>

                {/* IPC Classification Pills */}
                <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    IPC Classifications:
                  </span>
                  {selectedPatent.ipcCodes.map((item) => (
                    <span
                      key={item.code}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/25 bg-teal-500/5 px-2.5 py-1 font-mono text-[11px] text-teal-300"
                      title={item.label}
                    >
                      <span className="font-semibold">{item.code}</span>
                      <span className="text-slate-400 font-sans hidden sm:inline">({item.label})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* RENDER ACTIVE MODE */}
              {viewMode === 'architecture' && (
                <div className="space-y-6">
                  {/* Dynamic Interactive Simulator for the selected patent */}
                  {selectedPatent.id === 'in-pat-01' && <MerkleOdontogramSimulator />}
                  {selectedPatent.id === 'in-pat-02' && <ProgressiveLODSimulator />}
                  {selectedPatent.id === 'in-pat-03' && <StateGateSimulator />}

                  {/* Quantitative Technical Metrics Grid */}
                  <div className="rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
                      Quantifiable Technical Transformation &amp; Benchmarks
                    </span>
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {selectedPatent.technicalEffect.quantifiableMetrics.map((metric) => (
                        <div key={metric.label} className="rounded-xl border border-white/[0.06] bg-black/40 p-3">
                          <span className="font-mono text-[10px] uppercase text-slate-400">
                            {metric.label}
                          </span>
                          <p className="font-['Source_Serif_4',Georgia,serif] mt-1 text-base font-semibold text-teal-300">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {viewMode === 'claims' && <PatentClaimsView patent={selectedPatent} />}

              {viewMode === 'form2' && <PatentForm2Text patent={selectedPatent} />}
            </div>

            {/* MODAL FOOTER */}
            <div className="flex flex-wrap items-center justify-between border-t border-white/[0.08] bg-[#060E18] px-6 py-4 sm:px-8">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-400">
                <span>Keyboard: Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-teal-300">1</kbd>, <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-teal-300">2</kbd>, or <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-teal-300">3</kbd> to switch</span>
                <span>·</span>
                <span><kbd className="rounded bg-white/10 px-1.5 py-0.5 text-teal-300">ESC</kbd> to close</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-mono text-xs font-semibold text-white transition-colors hover:bg-white/[0.1] active:scale-95"
              >
                Close Specification
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
