import { useState } from 'react'

export function FasalShowcase() {
  const [activeTab, setActiveTab] = useState<'income' | 'audit'>('income')

  return (
    <article className="relative overflow-hidden rounded-[24px] border border-[#22384E] bg-gradient-to-b from-[#0B1E22] to-[#071317] p-[clamp(24px,3.8vw,48px)] transition-all duration-300 hover:border-[#5CC8B8]/40 shadow-[0_20px_50px_rgba(4,22,26,0.6)]">
      {/* Top indicator bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22384E]/70 pb-5 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[#5CC8B8] font-semibold tracking-wider">03 / MONITORING &amp; EVALUATION</span>
          <span className="text-[#9FB0C2]">·</span>
          <span className="text-[#E6ECF2] font-medium">₹2.16 Crore Rural Livelihoods Programme</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#5CC8B8]/30 bg-[#5CC8B8]/10 px-3 py-1 text-[11px] font-mono text-[#5CC8B8]">
          <span className="h-2 w-2 rounded-full bg-[#5CC8B8] animate-pulse" />
          <span>DEHAT · Oak Foundation · Bahraich, UP</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative & Field Specs */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8B8]">
              Econometric Triangulation
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(32px,3.6vw,46px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#E6ECF2]">
              FASAL MIS
            </h3>
          </div>

          <p className="m-0 text-[18px] leading-[1.5] text-[#E6ECF2] font-normal">
            The data engineering and results framework behind a ₹2.16 crore farmer-livelihoods initiative, 
            triangulating 28 conflicting field datasets across 1,300+ smallholder households with 35 automated integrity checks.
          </p>

          <div className="rounded-[16px] border border-[#22384E] bg-[#0E2528]/60 p-4.5 text-[14.5px] leading-relaxed text-[#9FB0C2] space-y-3">
            <p className="m-0">
              <strong className="text-[#E6ECF2]">The field breakdown:</strong> Multiple surveying teams, government baseline records, and field officers reported violently conflicting data on the same 1,300+ farming families. Donor audits were stalled because nobody could prove which numbers were authentic.
            </p>
            <p className="m-0">
              <strong className="text-[#E6ECF2]">What I built:</strong> A unified MIS results framework where all 28 datasets are mathematically triangulated, audited against 35 custom validation checks, and reconciled through seeded deterministic algorithms so every single figure can be regenerated from raw field logs.
            </p>
          </div>

          {/* Hard Telemetry Numbers */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#07171A] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#5CC8B8] tabular-nums">₹2.16 Cr</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Grant Outlay</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#07171A] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#E6ECF2] tabular-nums">1,300+</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Farming Families</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#07171A] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#5CC8B8] tabular-nums">35 Checks</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Automated Audits</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#07171A] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#F4ECD8] tabular-nums">28 Sources</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Datasets Triangulated</span>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://fasal-mis.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#5CC8B8] px-6 text-[15px] font-semibold text-[#0B1B2B] transition-all duration-200 hover:bg-[#83E2D5] hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <span>Open Dashboard</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/FASAL4/FASAL_MIS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#22384E] bg-[#07171A] px-5 text-[14px] font-medium text-[#E6ECF2] transition-colors hover:border-[#5CC8B8] hover:text-white"
            >
              <span>Source Pipeline</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Living Income & 35-Check Quality HUD */}
        <div className="lg:col-span-6 flex flex-col rounded-[18px] border border-[#22384E] bg-[#07171A] overflow-hidden shadow-inner">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#22384E] bg-[#0E2528] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#9FB0C2]">Livelihood Evaluation Console</span>
              <span className="rounded bg-[#22384E] px-1.5 py-0.5 font-mono text-[10px] text-[#5CC8B8]">BAHRAICH, UP</span>
            </div>
            <div className="flex gap-1.5 rounded-lg bg-[#07171A] p-1 border border-[#22384E]">
              <button
                type="button"
                onClick={() => setActiveTab('income')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'income'
                    ? 'bg-[#5CC8B8] text-[#07171A] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                Anker Living Income Curve
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('audit')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'audit'
                    ? 'bg-[#E6ECF2] text-[#07171A] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                35-Check Audit Feed
              </button>
            </div>
          </div>

          {/* Tab 1: Anker Living Income Benchmark Curve */}
          {activeTab === 'income' && (
            <div className="flex flex-col gap-4 p-5 sm:p-6 text-[13.5px]">
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-3">
                <span className="font-mono text-xs text-[#E6ECF2] font-semibold">
                  Eastern Uttar Pradesh Rural Living Income Gap
                </span>
                <span className="font-mono text-[11px] text-[#5CC8B8]">Statutory Anker Standard</span>
              </div>

              {/* Progress Bar Visualization */}
              <div className="rounded-xl border border-[#22384E] bg-[#0A2024] p-4 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-[#9FB0C2]">Progress to Living Income:</span>
                  <span className="font-mono text-base font-bold text-[#5CC8B8]">78.3% Achieved</span>
                </div>

                {/* Stepped Income Bar */}
                <div className="h-4 w-full rounded-full bg-[#122E33] overflow-hidden p-0.5 flex">
                  <div className="h-full bg-[#5CC8B8] rounded-full w-[78.3%] transition-all duration-500 shadow-sm" />
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#22384E]/60 text-xs font-mono">
                  <div className="flex flex-col">
                    <span className="text-[#9FB0C2] text-[10px]">BASELINE (PRE-FASAL)</span>
                    <span className="text-[#F87171] font-semibold tabular-nums text-sm">₹8,400 / mo</span>
                    <span className="text-[10px] text-[#9FB0C2]">Vulnerability floor</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#9FB0C2] text-[10px]">CURRENT INTERVENTION</span>
                    <span className="text-[#5CC8B8] font-semibold tabular-nums text-sm">₹16,920 / mo</span>
                    <span className="text-[10px] text-[#5CC8B8]">+101.4% Net Delta</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#9FB0C2] text-[10px]">ANKER BENCHMARK</span>
                    <span className="text-[#F4ECD8] font-semibold tabular-nums text-sm">₹21,600 / mo</span>
                    <span className="text-[10px] text-[#9FB0C2]">Dignified living target</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#5CC8B8]/20 bg-[#051114] p-3 text-xs text-[#9FB0C2]">
                <strong className="text-[#E6ECF2]">Impact Proof:</strong> The ₹8,520/month delta represents verified agricultural yield surplus from SRI (System of Rice Intensification) and multi-cropping, cross-checked against local mandi receipt slips.
              </div>
            </div>
          )}

          {/* Tab 2: 35-Check Automated Quality Audit */}
          {activeTab === 'audit' && (
            <div className="flex flex-col gap-3 p-5 sm:p-6 text-[13px]">
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-2">
                <span className="font-mono text-xs text-[#5CC8B8] font-semibold">
                  35-Check Triangulation Ticker (All 28 Datasets)
                </span>
                <span className="rounded bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 font-mono text-[10px]">
                  100% REPRODUCIBLE
                </span>
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center justify-between rounded-lg border border-[#22384E] bg-[#0A2024] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-semibold">Check #12:</span>
                    <span className="text-[#E6ECF2] ml-2">Land Holding vs Paddy Yield Outlier</span>
                  </div>
                  <span className="rounded bg-[#10B981]/20 px-2 py-0.5 text-[#10B981] font-bold">PASS (2.4% var)</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#22384E] bg-[#0A2024] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-semibold">Check #21:</span>
                    <span className="text-[#E6ECF2] ml-2">Surveyor GPS Temporal Collision Trap</span>
                  </div>
                  <span className="rounded bg-[#10B981]/20 px-2 py-0.5 text-[#10B981] font-bold">RESOLVED (0 overlap)</span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#22384E] bg-[#0A2024] p-3">
                  <div>
                    <span className="text-[#5CC8B8] font-semibold">Check #35:</span>
                    <span className="text-[#E6ECF2] ml-2">Cross-Source Demographic Triangulation</span>
                  </div>
                  <span className="rounded bg-[#10B981]/20 px-2 py-0.5 text-[#10B981] font-bold">28/28 SYNCED</span>
                </div>
              </div>

              <div className="rounded border border-[#22384E] bg-[#051114] p-2.5 font-mono text-[11px] text-[#9FB0C2] flex items-center justify-between">
                <span>Deterministic Seed: <strong className="text-[#E6ECF2]">0xFA5A1_2024</strong></span>
                <span className="text-[#5CC8B8]">Public Data Audit Log Ready</span>
              </div>
            </div>
          )}

          {/* Technical footer */}
          <div className="border-t border-[#22384E] bg-[#051114] px-5 py-3 text-xs text-[#9FB0C2] flex flex-wrap items-center justify-between gap-3 font-mono">
            <span>Stack: React · TypeScript · Python ETL · Recharts</span>
            <span className="text-[#5CC8B8]">Deterministic RNG Verification</span>
          </div>
        </div>
      </div>
    </article>
  )
}
