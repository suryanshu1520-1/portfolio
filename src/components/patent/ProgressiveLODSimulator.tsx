import { useState } from 'react'
import { motion } from 'framer-motion'

interface LODTier {
  tier: number
  name: string
  reduction: string
  polycount: string
  payloadSize: string
  latency: string
  useCase: string
}

const LOD_TIERS: LODTier[] = [
  {
    tier: 0,
    name: 'LOD 0 · Ultra-Coarse',
    reduction: '95% Decimated',
    polycount: '24,500 Triangles',
    payloadSize: '2.4 MB',
    latency: '< 78 ms (Instant)',
    useCase: 'Instant chairside 3D inspection while patient remains in dental operatory.'
  },
  {
    tier: 1,
    name: 'LOD 1 · Mobile / Tablet',
    reduction: '75% Decimated',
    polycount: '118,000 Triangles',
    payloadSize: '9.8 MB',
    latency: '~ 210 ms',
    useCase: 'Smooth 60 FPS touch orbit on iPads and chairside wireless tablet terminals.'
  },
  {
    tier: 2,
    name: 'LOD 2 · High-Fidelity',
    reduction: '40% Decimated',
    polycount: '460,000 Triangles',
    payloadSize: '28.5 MB',
    latency: '~ 620 ms',
    useCase: 'Lab technician margin line delineation and contact area audit.'
  },
  {
    tier: 3,
    name: 'LOD 3 · Raw Production',
    reduction: '0% (Raw Production)',
    polycount: '1,840,000 Triangles',
    payloadSize: '148.2 MB',
    latency: 'Async R2 Upload',
    useCase: '5-Axis wet/dry CNC milling machine toolpath generation.'
  }
]

export default function ProgressiveLODSimulator() {
  const [activeTier, setActiveTier] = useState<number>(0)
  const [clearanceMm, setClearanceMm] = useState<number>(1.8)

  const selectedTier = LOD_TIERS[activeTier]

  // Chromatic shader calculations
  const isCritical = clearanceMm < 1.0
  const isMarginal = clearanceMm >= 1.0 && clearanceMm <= 1.5

  const statusColor = isCritical
    ? 'text-red-400 border-red-500/40 bg-red-500/10'
    : isMarginal
    ? 'text-amber-400 border-amber-500/40 bg-amber-500/10'
    : 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'

  const glowShadow = isCritical
    ? 'shadow-[0_0_20px_rgba(239,68,68,0.3)]'
    : isMarginal
    ? 'shadow-[0_0_20px_rgba(245,158,11,0.3)]'
    : 'shadow-[0_0_20px_rgba(16,185,129,0.3)]'

  return (
    <div className="flex flex-col gap-6">
      {/* Top Banner: Browser Native File System Ingestion Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-teal-500/20 bg-[#0F2032]/80 p-5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-teal-300 uppercase">
                Zero-Driver Kernel Watcher Active
              </span>
              <span className="rounded bg-teal-500/20 px-2 py-0.5 font-mono text-[10px] text-teal-300">
                FileSystemDirectoryHandle
              </span>
            </div>
            <p className="mt-0.5 text-xs text-slate-400">
              Auto-detecting 3Shape TRIOS, Medit i700, and iTero optical exports in browser memory
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
          <span className="text-slate-500">I/O Footprint:</span>
          <span className="font-bold text-teal-400">0 KB Installed</span>
        </div>
      </div>

      {/* Main Interactive Stage: 2 Columns */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: 4-Tier Progressive LOD Pyramid (6 cols) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div>
              <h5 className="font-['Source_Serif_4',Georgia,serif] text-base font-medium text-white">
                4-Tier Progressive LOD Mesh Pyramid
              </h5>
              <p className="mt-0.5 text-xs text-slate-400">
                Interactive multi-resolution mesh decomposition
              </p>
            </div>
            <span className="font-mono text-xs font-semibold text-teal-300">
              {selectedTier.reduction}
            </span>
          </div>

          {/* LOD Tier Selectors */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {LOD_TIERS.map((tier) => {
              const isSelected = activeTier === tier.tier
              return (
                <button
                  key={tier.tier}
                  type="button"
                  onClick={() => setActiveTier(tier.tier)}
                  className={`group relative flex flex-col gap-1 rounded-xl border p-3 text-left transition-all ${
                    isSelected
                      ? 'border-teal-400 bg-teal-500/20 shadow-[0_0_15px_rgba(45,212,191,0.25)]'
                      : 'border-white/[0.08] bg-[#07111C] hover:border-teal-500/30'
                  }`}
                >
                  <span className="font-mono text-[11px] font-bold text-teal-300">
                    LOD {tier.tier}
                  </span>
                  <span className="font-mono text-xs font-semibold text-white">
                    {tier.payloadSize}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {tier.latency}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mesh Wireframe Simulation Card */}
          <div className="relative flex flex-col items-center justify-center rounded-xl border border-teal-500/20 bg-[#07111C] p-6">
            <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border border-slate-800 bg-black/60">
              {/* Animated mesh wireframe grid simulation */}
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  activeTier === 0
                    ? 'h-24 w-32 border-2 border-teal-400/80 bg-teal-500/10'
                    : activeTier === 1
                    ? 'h-28 w-36 border border-teal-300 bg-teal-500/15'
                    : activeTier === 2
                    ? 'h-32 w-40 border border-teal-200/90 bg-teal-500/20'
                    : 'h-36 w-44 border-2 border-white bg-teal-500/25'
                }`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                }}
              >
                <div className="font-mono text-center text-xs font-semibold text-teal-200">
                  <span>{selectedTier.polycount}</span>
                  <div className="text-[10px] text-teal-300 font-normal">
                    {selectedTier.reduction}
                  </div>
                </div>
              </div>

              <div className="absolute top-2 left-3 font-mono text-[10px] text-slate-400">
                Format: Binary STL / Vertex-Colored PLY
              </div>
              <div className="absolute bottom-2 right-3 font-mono text-[10px] text-teal-400">
                Mesh Latency: {selectedTier.latency}
              </div>
            </div>

            <div className="mt-4 w-full rounded-lg border border-white/[0.06] bg-black/40 p-3 text-xs">
              <span className="font-medium text-teal-300">Active Tier Target: </span>
              <span className="text-slate-300">{selectedTier.useCase}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Occlusal Clearance Shader Gauge (6 cols) */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div>
              <h5 className="font-['Source_Serif_4',Georgia,serif] text-base font-medium text-white">
                Chairside Occlusal Clearance Shader
              </h5>
              <p className="mt-0.5 text-xs text-slate-400">
                Real-time 3D Euclidean distance field vertex shader
              </p>
            </div>
            <span className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-bold ${statusColor}`}>
              {clearanceMm.toFixed(2)} mm
            </span>
          </div>

          {/* Interactive Distance Slider */}
          <div className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-black/40 p-4">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono text-slate-400">Adjust Abutment Tooth Reduction:</span>
              <span className="font-mono font-bold text-white">{clearanceMm.toFixed(2)} mm</span>
            </div>

            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.05"
              value={clearanceMm}
              onChange={(e) => setClearanceMm(parseFloat(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-teal-400"
            />

            <div className="flex justify-between font-mono text-[10px] text-slate-500">
              <span>0.50 mm (Severe)</span>
              <span>1.00 mm (Threshold)</span>
              <span>1.50 mm (Marginal)</span>
              <span>2.50 mm (Generous)</span>
            </div>
          </div>

          {/* Dynamic Shader Preview Box */}
          <motion.div
            key={isCritical ? 'crit' : isMarginal ? 'marg' : 'opt'}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            className={`flex flex-col gap-3 rounded-xl border p-4 transition-all ${statusColor} ${glowShadow}`}
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-current shadow-sm" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                {isCritical
                  ? 'CRITICAL DEFICIENCY · ADJUST CHAIRSIDE'
                  : isMarginal
                  ? 'MARGINAL CLEARANCE · TECHNICIAN WARNING'
                  : 'OPTIMAL RESTORATIVE CLEARANCE · VERIFIED'}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-200">
              {isCritical
                ? 'Distance to opposing arch is less than 1.0mm. Monolithic zirconia or ceramic restorations fabricated under this clearance will suffer catastrophic occlusal fracture under masticatory load. Adjust preparation immediately before patient departure.'
                : isMarginal
                ? 'Distance is between 1.0mm and 1.5mm. Adequate for high-strength monolithic zirconia but suboptimal for layered aesthetic ceramics. Laboratory confirmation recommended.'
                : 'Clearance exceeds 1.50mm. Provides full structural bulk for all restorative prostheses (lithium disilicate, multilayer zirconia, PFM). Clearance certified for automated 5-axis CNC milling dispatch.'}
            </p>

            <div className="flex items-center justify-between border-t border-white/[0.08] pt-2 font-mono text-[11px]">
              <span className="text-slate-400">Shader Kernel:</span>
              <span className="font-medium text-white">GLSL Euclidean Fragment Distance</span>
            </div>
          </motion.div>

          {/* Scanner Interoperability Matrix */}
          <div className="rounded-xl border border-white/[0.06] bg-black/30 p-3.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              Normalized Scanner Geometries
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5 font-mono text-xs">
              <span className="rounded bg-teal-500/10 px-2 py-0.5 text-teal-300">3Shape TRIOS (.stl)</span>
              <span className="rounded bg-teal-500/10 px-2 py-0.5 text-teal-300">Medit i500/i700 (.ply)</span>
              <span className="rounded bg-teal-500/10 px-2 py-0.5 text-teal-300">Align iTero (.obj)</span>
              <span className="rounded bg-teal-500/10 px-2 py-0.5 text-teal-300">Carestream CS 3800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
