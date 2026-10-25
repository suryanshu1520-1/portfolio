import { useState } from 'react'

interface DcosShowcaseProps {
  onOpenPatents: () => void
}

export function DcosShowcase({ onOpenPatents }: DcosShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'odontogram' | 'lod'>('odontogram')
  const [timeStep, setTimeStep] = useState<number>(3) // 0: 2023, 1: early 2024, 2: late 2024, 3: current (2026)
  const [selectedTooth, setSelectedTooth] = useState<string>('16')

  // Timeline points for time travel
  const timelineDates = [
    { label: 'Nov 2023', validAt: '2023-11-04T10:15:00Z', event: 'Initial Checkup & Amalgam (Tooth 47)' },
    { label: 'Mar 2024', validAt: '2024-03-12T14:30:00Z', event: 'PFM Crown Prepared & Cemented (Tooth 16)' },
    { label: 'Sep 2024', validAt: '2024-09-18T11:00:00Z', event: 'Class IV Composite Restoration (Tooth 21)' },
    { label: 'Oct 2026 (Now)', validAt: '2026-10-25T21:00:00Z', event: 'Titanium Implant + Full Merkle Seal (Tooth 36)' },
  ]

  // Tooth status depending on timeStep
  const getToothStatus = (toothId: string) => {
    if (toothId === '47') return { condition: 'Amalgam Restoration', color: '#9FB0C2', activeSince: 0 }
    if (toothId === '16') return timeStep >= 1 ? { condition: 'PFM Crown', color: '#5CC8B8', activeSince: 1 } : { condition: 'Sound Tooth', color: '#22384E', activeSince: -1 }
    if (toothId === '21') return timeStep >= 2 ? { condition: 'Class IV Composite', color: '#38BDF8', activeSince: 2 } : { condition: 'Sound Tooth', color: '#22384E', activeSince: -1 }
    if (toothId === '36') return timeStep >= 3 ? { condition: 'Titanium Implant', color: '#E0D0AB', activeSince: 3 } : { condition: 'Sound Tooth', color: '#22384E', activeSince: -1 }
    return { condition: 'Sound Natural Tooth', color: '#22384E', activeSince: -1 }
  }

  const currentSelection = getToothStatus(selectedTooth)

  return (
    <article className="relative overflow-hidden rounded-[24px] border border-[#22384E] bg-gradient-to-b from-[#0B1E32] to-[#061220] p-[clamp(24px,3.8vw,48px)] transition-all duration-300 hover:border-[#5CC8B8]/40 shadow-[0_20px_50px_rgba(4,18,36,0.6)]">
      {/* Top indicator bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22384E]/70 pb-5 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[#5CC8B8] font-semibold tracking-wider">04 / CLINICAL OPERATING SYSTEM</span>
          <span className="text-[#9FB0C2]">·</span>
          <span className="text-[#E6ECF2] font-medium">3 Filed Indian Patents (Form 2)</span>
        </div>
        <button
          type="button"
          onClick={onOpenPatents}
          className="flex items-center gap-2 rounded-full border border-[#5CC8B8]/50 bg-[#5CC8B8]/20 px-3.5 py-1 text-[11.5px] font-mono text-[#5CC8B8] transition-all hover:bg-[#5CC8B8] hover:text-[#061220] cursor-pointer"
        >
          <span className="h-2 w-2 rounded-full bg-[#5CC8B8] animate-pulse" />
          <span>Inspect 3 Form 2 Patent Specs ↗</span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative & Patent Specifications */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8B8]">
              Bi-Temporal Architecture &amp; 3D Streaming
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(32px,3.6vw,46px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#E6ECF2]">
              DentalConnect OS
            </h3>
          </div>

          <p className="m-0 text-[18px] leading-[1.5] text-[#E6ECF2] font-normal">
            A clinical operating system for dental clinics and dental labs, engineered with append-only bi-temporal 
            event sourcing, Merkle cryptographic tamper-evidence, and 4-tier progressive 3D mesh streaming under 80ms.
          </p>

          <div className="rounded-[16px] border border-[#22384E] bg-[#0E243D]/60 p-4.5 text-[14.5px] leading-relaxed text-[#9FB0C2] space-y-3">
            <p className="m-0">
              <strong className="text-[#E6ECF2]">The clinical problem:</strong> Dental restorations have legal and physiological consequences spanning decades. Traditional dental software overwrites database rows during revisions, making historical medical liability audits impossible.
            </p>
            <p className="m-0">
              <strong className="text-[#E6ECF2]">The architecture:</strong> DCOS separates clinical occurrence time (<span className="text-[#5CC8B8] font-mono">valid_at</span>) from audit ledger time (<span className="text-[#5CC8B8] font-mono">system_at</span>). Every revision recalculates a cryptographic Merkle root hash. No tooth record is ever mutated.
            </p>
          </div>

          {/* 3 Patent Pillars Grid */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 pt-1">
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071728] p-3 text-xs">
              <span className="font-mono text-[#5CC8B8] font-semibold">PATENT 01</span>
              <span className="text-[#E6ECF2] font-medium mt-1">Bi-Temporal Merkle Chain</span>
              <span className="text-[#9FB0C2] text-[11px] mt-0.5">Immutable clinical event audit</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071728] p-3 text-xs">
              <span className="font-mono text-[#5CC8B8] font-semibold">PATENT 02</span>
              <span className="text-[#E6ECF2] font-medium mt-1">4-Tier LOD Mesh Stream</span>
              <span className="text-[#9FB0C2] text-[11px] mt-0.5">&lt; 80ms intraoral 3D load</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071728] p-3 text-xs">
              <span className="font-mono text-[#5CC8B8] font-semibold">PATENT 03</span>
              <span className="text-[#E6ECF2] font-medium mt-1">ABDM FHIR R5 Bridge</span>
              <span className="text-[#9FB0C2] text-[11px] mt-0.5">Dual-tier asymmetric E2EE</span>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://dcos.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#5CC8B8] px-6 text-[15px] font-semibold text-[#0B1B2B] transition-all duration-200 hover:bg-[#83E2D5] hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <span>Launch dcos.in</span>
              <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              onClick={onOpenPatents}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#5CC8B8]/40 bg-[#5CC8B8]/10 px-5 text-[14px] font-semibold text-[#5CC8B8] transition-all hover:bg-[#5CC8B8]/20 cursor-pointer"
            >
              <span>Form 2 Patents (Interactive)</span>
              <span aria-hidden="true">↗</span>
            </button>
            <a
              href="https://github.com/suryanshu1520-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#22384E] bg-[#071728] px-5 text-[14px] font-medium text-[#E6ECF2] transition-colors hover:border-[#5CC8B8] hover:text-white"
            >
              <span>Source</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Odontogram & LOD Mesh Workstation */}
        <div className="lg:col-span-6 flex flex-col rounded-[18px] border border-[#22384E] bg-[#071728] overflow-hidden shadow-inner">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#22384E] bg-[#0E243D] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#9FB0C2]">Workstation Telemetry</span>
              <span className="rounded bg-[#22384E] px-1.5 py-0.5 font-mono text-[10px] text-[#5CC8B8]">FDI 32-TOOTH</span>
            </div>
            <div className="flex gap-1.5 rounded-lg bg-[#071728] p-1 border border-[#22384E]">
              <button
                type="button"
                onClick={() => setActiveTab('odontogram')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'odontogram'
                    ? 'bg-[#5CC8B8] text-[#071728] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                Time-Travel Odontogram
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('lod')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'lod'
                    ? 'bg-[#E6ECF2] text-[#071728] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                4-Tier 3D LOD Stream
              </button>
            </div>
          </div>

          {/* Tab 1: Bi-Temporal Odontogram */}
          {activeTab === 'odontogram' && (
            <div className="flex flex-col gap-4 p-5 sm:p-6 text-[13.5px]">
              {/* Time-Travel Scrub Slider */}
              <div className="rounded-xl border border-[#22384E] bg-[#0A2035] p-3.5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#5CC8B8] font-semibold">Bi-Temporal Scrub (Time Travel):</span>
                  <span className="text-[#E6ECF2] font-bold">{timelineDates[timeStep].label}</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={timeStep}
                  onChange={(e) => setTimeStep(Number(e.target.value))}
                  className="w-full accent-[#5CC8B8] cursor-pointer"
                />

                <div className="flex justify-between text-[10.5px] font-mono text-[#9FB0C2]">
                  <span>Nov 2023</span>
                  <span>Mar 2024</span>
                  <span>Sep 2024</span>
                  <span>Oct 2026</span>
                </div>

                <div className="rounded bg-[#071728] p-2 text-xs font-mono text-[#9FB0C2] border border-[#22384E]/70">
                  <span className="text-[#5CC8B8]">valid_at:</span> {timelineDates[timeStep].validAt}<br />
                  <span className="text-[#E6ECF2]">Recorded Event:</span> {timelineDates[timeStep].event}
                </div>
              </div>

              {/* Tooth Chart (Representative FDI Arch) */}
              <div className="rounded-xl border border-[#22384E] bg-[#0A2035] p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#9FB0C2] mb-1">
                  <span>Interactive FDI Dental Arch (Click tooth to inspect):</span>
                  <span className="text-[#5CC8B8]">Upper &amp; Lower Arches</span>
                </div>

                {/* Upper Arch */}
                <div className="flex justify-center gap-1.5 flex-wrap">
                  {['18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28'].map((id) => {
                    const status = getToothStatus(id)
                    const isSelected = selectedTooth === id
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedTooth(id)}
                        className={`h-8 w-8 rounded font-mono text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          isSelected ? 'ring-2 ring-white scale-110' : ''
                        }`}
                        style={{
                          backgroundColor: status.color === '#22384E' ? '#112942' : status.color,
                          color: status.color === '#22384E' ? '#9FB0C2' : '#0B1B2B',
                        }}
                        title={`Tooth ${id}: ${status.condition}`}
                      >
                        {id}
                      </button>
                    )
                  })}
                </div>

                {/* Lower Arch */}
                <div className="flex justify-center gap-1.5 flex-wrap pt-2 border-t border-[#22384E]/50">
                  {['48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'].map((id) => {
                    const status = getToothStatus(id)
                    const isSelected = selectedTooth === id
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedTooth(id)}
                        className={`h-8 w-8 rounded font-mono text-[11px] font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          isSelected ? 'ring-2 ring-white scale-110' : ''
                        }`}
                        style={{
                          backgroundColor: status.color === '#22384E' ? '#112942' : status.color,
                          color: status.color === '#22384E' ? '#9FB0C2' : '#0B1B2B',
                        }}
                        title={`Tooth ${id}: ${status.condition}`}
                      >
                        {id}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tooth Inspection Detail & Merkle Root */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="rounded border border-[#22384E] bg-[#071728] p-2.5">
                  <span className="text-[#9FB0C2] block mb-0.5">Selected Tooth {selectedTooth}:</span>
                  <span className="text-[#E6ECF2] font-semibold text-sm">{currentSelection.condition}</span>
                </div>
                <div className="rounded border border-[#22384E] bg-[#071728] p-2.5">
                  <span className="text-[#9FB0C2] block mb-0.5">Merkle Root Seal:</span>
                  <span className="text-[#10B981] font-semibold text-xs truncate block">
                    0x9a8f4c...3e1b [VALID]
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: 4-Tier Progressive 3D LOD Streaming */}
          {activeTab === 'lod' && (
            <div className="flex flex-col gap-4 p-5 sm:p-6 text-[13.5px]">
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-3">
                <span className="font-mono text-xs text-[#5CC8B8] font-semibold">
                  Intraoral 3D Scan Streaming Telemetry (Patent Claim #2)
                </span>
                <span className="font-mono text-[11px] text-[#10B981]">Total Load: 74ms (&lt;80ms standard)</span>
              </div>

              <div className="flex flex-col gap-2.5 font-mono text-xs">
                <div className="flex items-center justify-between rounded-lg border border-[#22384E] bg-[#0A2035] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-bold">LOD 0: Bounding Wireframe</span>
                    <span className="text-[#9FB0C2] ml-2">(150 polygons)</span>
                  </div>
                  <span className="text-[#10B981] font-semibold">15 ms</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#22384E] bg-[#0A2035] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-bold">LOD 1: Coarse Occlusal Mesh</span>
                    <span className="text-[#9FB0C2] ml-2">(2,400 polygons)</span>
                  </div>
                  <span className="text-[#10B981] font-semibold">32 ms</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#22384E] bg-[#0A2035] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-bold">LOD 2: Clinical Margin Contour</span>
                    <span className="text-[#9FB0C2] ml-2">(12,000 polygons)</span>
                  </div>
                  <span className="text-[#10B981] font-semibold">55 ms</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#5CC8B8]/40 bg-[#0A2035] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-bold">LOD 3: High-Def Intraoral Surface</span>
                    <span className="text-[#9FB0C2] ml-2">(50,000 polygons)</span>
                  </div>
                  <span className="text-[#10B981] font-semibold">74 ms [COMPLETE]</span>
                </div>
              </div>

              <div className="rounded border border-[#5CC8B8]/20 bg-[#040E1A] p-3 text-xs text-[#9FB0C2]">
                <strong className="text-[#E6ECF2]">Streaming Innovation:</strong> Uses Web Workers to decompress hierarchical octrees asynchronously on client GPUs, preventing the UI thread from dropping below 60fps on clinician tablets.
              </div>
            </div>
          )}

          {/* Technical footer */}
          <div className="border-t border-[#22384E] bg-[#040E1A] px-5 py-3 text-xs text-[#9FB0C2] flex flex-wrap items-center justify-between gap-3 font-mono">
            <span>Stack: React · Three.js / WebGL · Go / Rust Service · PostgreSQL Merkle Log</span>
            <button
              type="button"
              onClick={onOpenPatents}
              className="text-[#5CC8B8] underline hover:text-white cursor-pointer"
            >
              Open Indian Patent Specifications (Form 2) ↗
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
