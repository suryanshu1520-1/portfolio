import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type OrderStage =
  | 'DRAFT'
  | 'PENDING_REVIEW'
  | 'IN_PROGRESS'
  | 'SINTERING_MILLING'
  | 'QC_PASSED'
  | 'DISPATCHED'

interface StageMeta {
  stage: OrderStage
  label: string
  chatLocked: boolean
  clinicVisible: boolean
  labNote: string
}

const STAGES: StageMeta[] = [
  {
    stage: 'DRAFT',
    label: '1. Draft Intake',
    chatLocked: true,
    clinicVisible: true,
    labNote: 'Clinic initializing Rx slip and attaching raw 3D intraoral scan.'
  },
  {
    stage: 'PENDING_REVIEW',
    label: '2. Lab Feasibility',
    chatLocked: true,
    clinicVisible: true,
    labNote: 'Senior dental technician reviewing occlusal clearance and margin finish line.'
  },
  {
    stage: 'IN_PROGRESS',
    label: '3. Active CAD Design',
    chatLocked: false,
    clinicVisible: true,
    labNote: 'Case formally accepted! Chat gate unlatched for real-time restorative collaboration.'
  },
  {
    stage: 'SINTERING_MILLING',
    label: '4. Milling & Sintering',
    chatLocked: false,
    clinicVisible: false,
    labNote: 'Internal: 5-axis Roland milling active (0.6mm diamond bur). Sintering at 1,530°C for 8h.'
  },
  {
    stage: 'QC_PASSED',
    label: '5. Quality Assurance',
    chatLocked: false,
    clinicVisible: true,
    labNote: 'Die verification check passed; margin seal verified under 20x stereomicroscope.'
  },
  {
    stage: 'DISPATCHED',
    label: '6. Clinic Delivery',
    chatLocked: false,
    clinicVisible: true,
    labNote: 'Prosthesis dispatched via express courier with temperature-sealed container.'
  }
]

export default function StateGateSimulator() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2) // Default IN_PROGRESS
  const [viewRole, setViewRole] = useState<'clinic' | 'lab'>('lab')
  const [remakeToken, setRemakeToken] = useState<string | null>(null)
  const [isMintingToken, setIsMintingToken] = useState<boolean>(false)

  const currentStage = STAGES[activeStageIndex]

  const handleGenerateRemakeToken = () => {
    setIsMintingToken(true)
    setTimeout(() => {
      setIsMintingToken(false)
      setRemakeToken(
        'REM-TOKEN-DCOS-2026-F183 · Binding SHA-256 Mesh Digest 0x7a8b...19c2. Zero patient re-scan required.'
      )
    }, 500)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Top Banner: Dual-Layer Visibility Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-teal-500/20 bg-[#0F2032]/80 p-5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
          <div>
            <span className="font-mono text-xs font-semibold text-teal-300 uppercase">
              Dual-Layer State-Machine &amp; ACL Filter
            </span>
            <p className="mt-0.5 text-xs text-slate-400">
              Partitions operational events into CLINIC_EXTERNAL vs LAB_INTERNAL visibility layers
            </p>
          </div>
        </div>

        {/* Role Toggle */}
        <div className="flex items-center gap-1 rounded-full border border-teal-500/30 bg-[#091522] p-1 font-mono text-xs">
          <button
            type="button"
            onClick={() => setViewRole('clinic')}
            className={`rounded-full px-3.5 py-1.5 font-medium transition-all ${
              viewRole === 'clinic'
                ? 'bg-teal-500/30 text-teal-200 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Clinician View
          </button>
          <button
            type="button"
            onClick={() => setViewRole('lab')}
            className={`rounded-full px-3.5 py-1.5 font-medium transition-all ${
              viewRole === 'lab'
                ? 'bg-teal-500 text-[#091522] font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Laboratory Master View
          </button>
        </div>
      </div>

      {/* State Machine Interactive Pipeline */}
      <div className="flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Prosthodontic Order Lifecycle State Machine
          </span>
          <span className="font-mono text-xs text-teal-300">
            Click any step to inspect gate &amp; permissions
          </span>
        </div>

        {/* Steps Rail */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {STAGES.map((s, idx) => {
            const isSelected = activeStageIndex === idx
            const isPassed = idx < activeStageIndex
            const isHiddenFromClinic = viewRole === 'clinic' && !s.clinicVisible

            return (
              <button
                key={s.stage}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`relative flex flex-col gap-1.5 rounded-xl border p-3 text-left transition-all ${
                  isHiddenFromClinic
                    ? 'border-dashed border-slate-700 bg-slate-900/40 opacity-40'
                    : isSelected
                    ? 'border-teal-400 bg-teal-500/20 shadow-[0_0_15px_rgba(45,212,191,0.25)]'
                    : isPassed
                    ? 'border-teal-500/40 bg-[#0B1A2A]'
                    : 'border-white/[0.08] bg-[#07111C] hover:border-teal-500/30'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className={isSelected ? 'text-teal-300 font-bold' : 'text-slate-400'}>
                    Stage {idx + 1}
                  </span>
                  {s.chatLocked ? (
                    <span className="text-amber-400" title="Chat Locked">🔒</span>
                  ) : (
                    <span className="text-teal-400" title="Chat Unlatched">🔓</span>
                  )}
                </div>

                <span className="truncate text-xs font-semibold text-white">
                  {s.label.split('. ')[1]}
                </span>

                <span className="font-mono text-[9px] text-slate-400">
                  {isHiddenFromClinic ? 'Hidden (Lab Only)' : s.chatLocked ? 'Gate: Locked' : 'Gate: Open'}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Stage: 2 Columns */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Active Gate & Dual-Layer Timeline (6 cols) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div>
              <h5 className="font-['Source_Serif_4',Georgia,serif] text-base font-medium text-white">
                Communication Gate Status
              </h5>
              <p className="mt-0.5 text-xs text-slate-400">
                Stage: <strong className="text-teal-300">{currentStage.stage}</strong>
              </p>
            </div>

            <span
              className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold ${
                currentStage.chatLocked
                  ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                  : 'border-teal-400/40 bg-teal-500/15 text-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.2)]'
              }`}
            >
              {currentStage.chatLocked ? '🔒 CHAT GATE LOCKED' : '🔓 CHAT UNLATCHED'}
            </span>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4 text-xs leading-relaxed text-slate-200">
            {currentStage.chatLocked ? (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-bold text-amber-300">
                  PREMATURE INTERRUPTIONS PREVENTED
                </span>
                <p>
                  Clinicians cannot send messages until the dental laboratory completes initial feasibility triage and accepts the case into active production. This eliminates clutter and protects milling technicians from triage distraction.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-bold text-teal-300">
                  REAL-TIME COLLABORATION UNLOCKED
                </span>
                <p>
                  Case is active in CAD/CAM manufacturing. Bi-directional chat is active with context-aware case attachment, shade verification, and margin review comments.
                </p>
              </div>
            )}
          </div>

          {/* Timeline Visibility Notice */}
          <div className="rounded-xl border border-white/[0.06] bg-[#07111C] p-4 text-xs">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-mono uppercase text-[10px]">Timeline Layer:</span>
              <span className="font-mono text-teal-300 font-semibold">
                {viewRole === 'clinic' ? 'CLINIC_EXTERNAL' : 'LAB_INTERNAL + CLINIC_EXTERNAL'}
              </span>
            </div>
            <p className="mt-2 text-slate-300">
              {currentStage.labNote}
            </p>
          </div>
        </div>

        {/* Right Column: Exocad .constructionInfo XML & Remake Warranty Token (6 cols) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div>
              <h5 className="font-['Source_Serif_4',Georgia,serif] text-base font-medium text-white">
                Soft-Copy CAD/CAM Archival
              </h5>
              <p className="mt-0.5 text-xs text-slate-400">
                Automated Exocad parameter extraction &amp; remake tokens
              </p>
            </div>
            <span className="rounded bg-teal-500/20 px-2 py-0.5 font-mono text-[10px] text-teal-300">
              .constructionInfo
            </span>
          </div>

          {/* Extracted Exocad Parameters */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3">
              <span className="font-mono text-[10px] uppercase text-slate-500">Restorative Material</span>
              <p className="mt-1 font-mono font-medium text-teal-300">High-Translucency 4Y-PSZ Zirconia</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3">
              <span className="font-mono text-[10px] uppercase text-slate-500">VITA Shade Standard</span>
              <p className="mt-1 font-mono font-medium text-slate-200">2M2 / A2 Cervical Gradient</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3">
              <span className="font-mono text-[10px] uppercase text-slate-500">Cement Gap Tolerance</span>
              <p className="mt-1 font-mono font-medium text-slate-200">45 μm (Uniform)</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3">
              <span className="font-mono text-[10px] uppercase text-slate-500">Margin Ridge Offset</span>
              <p className="mt-1 font-mono font-medium text-slate-200">150 μm Chamfer</p>
            </div>
          </div>

          {/* Remake Warranty Action */}
          <div className="flex flex-col gap-3 rounded-xl border border-teal-500/20 bg-teal-500/[0.05] p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-teal-300">
                Zero-Rescan Remake Warranty Engine
              </span>
              <button
                type="button"
                onClick={handleGenerateRemakeToken}
                disabled={isMintingToken}
                className="cursor-pointer rounded-full border border-teal-400/40 bg-teal-500/20 px-3 py-1 font-mono text-xs font-medium text-teal-200 transition-all hover:bg-teal-500/30 active:scale-95 disabled:opacity-60"
              >
                {isMintingToken ? 'Binding Mesh...' : 'Mint Remake Token'}
              </button>
            </div>

            <p className="text-xs leading-relaxed text-slate-300">
              When a prosthetic remake is required due to shade adjustment or contact tight spots, this token triggers direct re-milling from the archived CAD mesh without requiring the patient to undergo a second optical or physical impression.
            </p>

            <AnimatePresence>
              {remakeToken && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg border border-teal-400/30 bg-[#07131F] p-2.5 font-mono text-[11px] text-teal-300"
                >
                  {remakeToken}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
