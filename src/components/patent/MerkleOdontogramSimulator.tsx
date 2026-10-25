import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MerkleBlock {
  blockIndex: number
  event: string
  tooth: string
  validTime: string
  txTime: string
  hash: string
  prevHash: string
  verified: boolean
  clinicalDetails: string
}

const CHAIN_DATA: MerkleBlock[] = [
  {
    blockIndex: 0,
    event: 'GENESIS_ANCHOR',
    tooth: 'All Quadrants (1–4)',
    validTime: '2026-03-01 09:00:00.000 IST',
    txTime: '2026-03-01 09:00:00.104 IST',
    hash: '0x8b91fe4a019c72e3a890db7214ff9c3e214',
    prevHash: '0x00000000000000000000000000000000000',
    verified: true,
    clinicalDetails: 'Genesis baseline operatory anchor initialized with 32-tooth sound dentition profile.'
  },
  {
    blockIndex: 1,
    event: 'CARIES_EXCAVATION_COMPOSITE',
    tooth: 'FDI #36 (Mandibular Left 1st Molar)',
    validTime: '2026-03-15 10:15:00.000 IST',
    txTime: '2026-03-15 10:15:02.348 IST',
    hash: '0x3f18a90dc2e176b98e09f5a43c2140bb711',
    prevHash: '0x8b91fe4a019c72e3a890db7214ff9c3e214',
    verified: true,
    clinicalDetails: 'Class I Occlusal composite resin restoration (Shade A2) placed following deep dentinal excavation.'
  },
  {
    blockIndex: 2,
    event: 'PERIODONTAL_6POINT_PROBING',
    tooth: 'FDI #36, #37 (Sextant 5)',
    validTime: '2026-04-10 11:30:00.000 IST',
    txTime: '2026-04-10 11:30:01.890 IST',
    hash: '0x71ba4809e4f5cc11832049e917da45a1920',
    prevHash: '0x3f18a90dc2e176b98e09f5a43c2140bb711',
    verified: true,
    clinicalDetails: '6-point probing depth array: MB 3mm, B 2mm, DB 3mm, ML 4mm, L 3mm, DL 5mm. Bleeding on Probing (BOP) flagged at DL.'
  },
  {
    blockIndex: 3,
    event: 'CROWN_PREPARATION_MARGIN',
    tooth: 'FDI #36 (Full-Coverage Zirconia Prep)',
    validTime: '2026-05-02 14:45:00.000 IST',
    txTime: '2026-05-02 14:45:04.112 IST',
    hash: '0x9f4ae12b0789bc44120938ff6a27e94017c',
    prevHash: '0x71ba4809e4f5cc11832049e917da45a1920',
    verified: true,
    clinicalDetails: 'Circumferential 1.0mm chamfer finish line prepared; occlusal clearance verified at 1.8mm. 3D optical scan dispatched to milling lab.'
  }
]

export default function MerkleOdontogramSimulator() {
  const [activeStep, setActiveStep] = useState<number>(3)
  const [isVerifying, setIsVerifying] = useState<boolean>(false)
  const [verificationResult, setVerificationResult] = useState<string | null>(
    'MERKLE CHAIN CONTINUITY: 100% DETERMINISTIC · 0 TAMPERING DETECTED'
  )

  const currentBlock = CHAIN_DATA[activeStep]

  const handleVerifyChain = () => {
    setIsVerifying(true)
    setVerificationResult(null)
    setTimeout(() => {
      setIsVerifying(false)
      setVerificationResult(
        'CRYPTOGRAPHIC PROOF VERIFIED: SHA-256 Merkle root 0x9f4a...e12b valid back to Genesis Anchor. No database rollbacks detected.'
      )
    }, 650)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Top Controller Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-teal-500/20 bg-[#0F2032]/80 p-5 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-teal-300 uppercase">
              Bi-Temporal Deterministic Projection Engine
            </span>
          </div>
          <button
            type="button"
            onClick={handleVerifyChain}
            disabled={isVerifying}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-3.5 py-1.5 font-mono text-xs font-medium text-teal-200 transition-all hover:bg-teal-500/25 active:scale-95 disabled:opacity-60"
          >
            {isVerifying ? (
              <>
                <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Recomputing SHA-256 Chain...</span>
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Run Merkle Audit</span>
              </>
            )}
          </button>
        </div>

        {/* Step Scrubber */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-mono uppercase tracking-wider text-slate-400">Time-Travel Projection Slider:</span>
            <span className="font-mono font-medium text-teal-300">
              Historical Coordinate T{activeStep} of {CHAIN_DATA.length - 1}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {CHAIN_DATA.map((block, idx) => {
              const isSelected = activeStep === idx
              const isPastOrCurrent = idx <= activeStep
              return (
                <button
                  key={block.blockIndex}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col gap-1 rounded-xl border p-3 text-left transition-all ${
                    isSelected
                      ? 'border-teal-400 bg-teal-500/20 shadow-[0_0_15px_rgba(45,212,191,0.2)]'
                      : isPastOrCurrent
                      ? 'border-teal-500/30 bg-[#0B1827] hover:border-teal-400/50'
                      : 'border-slate-800 bg-[#08111D]/60 opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className={isSelected ? 'text-teal-300 font-bold' : 'text-slate-400'}>
                      Block #{block.blockIndex}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${isPastOrCurrent ? 'bg-teal-400' : 'bg-slate-600'}`} />
                  </div>
                  <span className="truncate text-xs font-semibold text-slate-200">
                    {block.event.replace(/_/g, ' ')}
                  </span>
                  <span className="truncate font-mono text-[10px] text-slate-400">
                    {block.validTime.split(' ')[0]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Interactive Visual Stage: 2 Columns */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: 32-Tooth Projected Odontogram HUD (7 cols) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 lg:col-span-7">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div>
              <h5 className="font-['Source_Serif_4',Georgia,serif] text-base font-medium text-white">
                Projected 32-Tooth Odontogram Matrix
              </h5>
              <p className="mt-0.5 text-xs text-slate-400">
                In-memory deterministic state replayed up to block coordinate #{activeStep}
              </p>
            </div>
            <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 font-mono text-[10px] text-teal-300">
              ABDM Milestone 3
            </span>
          </div>

          {/* Interactive Tooth Visualizer (FDI Tooth #36 focus) */}
          <div className="relative flex flex-col items-center justify-center rounded-xl border border-teal-500/20 bg-[#07111C] p-6">
            {/* Visual Tooth Diagram */}
            <div className="relative flex h-48 w-48 items-center justify-center">
              {/* Outer tooth contour */}
              <div className="relative flex h-44 w-44 items-center justify-center rounded-3xl border-2 border-slate-600 bg-slate-900/60 p-4 shadow-inner">
                {/* 5 Surfaces: Buccal, Lingual, Mesial, Distal, Occlusal */}
                <div className="relative grid h-full w-full grid-cols-3 grid-rows-3 gap-1">
                  {/* Mesial (Left) */}
                  <div className="col-start-1 row-start-2 flex items-center justify-center rounded border border-slate-700 bg-slate-800/80 font-mono text-[10px] text-slate-400">
                    M
                  </div>
                  {/* Buccal (Top) */}
                  <div className="col-start-2 row-start-1 flex items-center justify-center rounded border border-slate-700 bg-slate-800/80 font-mono text-[10px] text-slate-400">
                    B
                  </div>
                  {/* Occlusal (Center) - Highlighting based on state */}
                  <motion.div
                    key={activeStep}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`col-start-2 row-start-2 flex flex-col items-center justify-center rounded border font-mono text-[10px] font-bold transition-all ${
                      activeStep === 0
                        ? 'border-slate-700 bg-emerald-950/40 text-emerald-400'
                        : activeStep === 1
                        ? 'border-amber-400 bg-amber-500/30 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                        : activeStep === 2
                        ? 'border-teal-400 bg-teal-500/30 text-teal-200 shadow-[0_0_12px_rgba(45,212,191,0.3)]'
                        : 'border-cyan-400 bg-cyan-500/40 text-cyan-100 shadow-[0_0_16px_rgba(6,182,212,0.4)]'
                    }`}
                  >
                    <span>OCC</span>
                    <span className="text-[9px] font-normal">
                      {activeStep === 0
                        ? 'Sound'
                        : activeStep === 1
                        ? 'Restored'
                        : activeStep === 2
                        ? 'Pocketed'
                        : 'Crown Prep'}
                    </span>
                  </motion.div>
                  {/* Lingual (Bottom) */}
                  <div className="col-start-2 row-start-3 flex items-center justify-center rounded border border-slate-700 bg-slate-800/80 font-mono text-[10px] text-slate-400">
                    L
                  </div>
                  {/* Distal (Right) */}
                  <div className="col-start-3 row-start-2 flex items-center justify-center rounded border border-slate-700 bg-slate-800/80 font-mono text-[10px] text-slate-400">
                    D
                  </div>
                </div>
              </div>

              {/* Tooth badge */}
              <div className="absolute -bottom-3 rounded-full border border-teal-500/40 bg-[#0B1A28] px-3 py-1 font-mono text-xs text-teal-300 shadow-md">
                FDI #36 (Tooth 19)
              </div>
            </div>

            {/* Clinical telemetry box */}
            <div className="mt-6 w-full rounded-lg border border-white/[0.06] bg-black/40 p-3 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Active Target Tooth:</span>
                <span className="font-mono text-slate-200">{currentBlock.tooth}</span>
              </div>
              <div className="mt-1.5 text-slate-300">
                <span className="font-medium text-teal-300">Clinical State: </span>
                {currentBlock.clinicalDetails}
              </div>
            </div>
          </div>

          {/* Bi-Temporal Timestamp Dual Readout */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-teal-500/20 bg-teal-500/[0.05] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-teal-400">
                Valid Time (T_valid) · Clinical Event
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-white">
                {currentBlock.validTime}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Physical chairside occurrence recorded by clinician.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/[0.05] p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                Transaction Time (T_tx) · Database Commit
              </span>
              <p className="mt-1 font-mono text-xs font-semibold text-white">
                {currentBlock.txTime}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Monotonically committed to immutable ledger block.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Cryptographic SHA-256 Merkle Chain Ledger (5 cols) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 lg:col-span-5">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <h5 className="font-['Source_Serif_4',Georgia,serif] text-base font-medium text-white">
              SHA-256 Merkle Proof
            </h5>
            <span className="font-mono text-[11px] text-teal-400">RFC 6962 Standard</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Current Block Digest (H_{activeStep})
              </span>
              <p className="mt-1 break-all font-mono text-xs font-medium text-teal-300">
                {currentBlock.hash}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Preceding Block Digest (H_{activeStep === 0 ? 'GENESIS' : activeStep - 1})
              </span>
              <p className="mt-1 break-all font-mono text-xs font-medium text-slate-300">
                {currentBlock.prevHash}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                ABDM Sovereign Encryption Bridge
              </span>
              <p className="mt-1 font-mono text-xs text-slate-200">
                Curve25519 ECDH + AES-GCM-256
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                HL7 FHIR R5 payload sealed for Ayushman Bharat Health Account (ABHA) gateway verification.
              </p>
            </div>

            {/* Verification Banner */}
            <AnimatePresence>
              {verificationResult && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300"
                >
                  <div className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>{verificationResult}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
