import { useState } from 'react'

export function TenderTraceShowcase() {
  const [activeTab, setActiveTab] = useState<'hhi' | 'rti'>('hhi')

  return (
    <article className="relative overflow-hidden rounded-[24px] border border-[#22384E] bg-gradient-to-b from-[#0A1726] to-[#06101C] p-[clamp(24px,3.8vw,48px)] transition-all duration-300 hover:border-[#38BDF8]/40 shadow-[0_20px_50px_rgba(4,18,36,0.6)]">
      {/* Top indicator bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22384E]/70 pb-5 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[#38BDF8] font-semibold tracking-wider">02 / CIVIC TECH &amp; ECONOMETRICS</span>
          <span className="text-[#9FB0C2]">·</span>
          <span className="text-[#E6ECF2] font-medium">Public Procurement Watchdog</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1 text-[11px] font-mono text-[#38BDF8]">
          <span className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>4,521,890 CPPP Records Ingested</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative & Forensics Specs */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
              Forensic Public Contracting
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(32px,3.6vw,46px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#E6ECF2]">
              Tender-Trace
            </h3>
          </div>

          <p className="m-0 text-[18px] leading-[1.5] text-[#E6ECF2] font-normal">
            A public watchdog for India’s government procurement that scores 4.5M+ Central Public Procurement Portal (CPPP) 
            awards for market concentration, flags corruption indicators, and automatically drafts Section 6(1) RTI applications.
          </p>

          <div className="rounded-[16px] border border-[#22384E] bg-[#0E1F33]/60 p-4.5 text-[14.5px] leading-relaxed text-[#9FB0C2] space-y-3">
            <p className="m-0">
              <strong className="text-[#E6ECF2]">The investigative problem:</strong> Contract awards are legally public, but deliberately siloed across millions of impenetrable tables. Cartel bid-rigging and single-bidder captures hide in plain sight.
            </p>
            <p className="m-0">
              <strong className="text-[#E6ECF2]">The engine:</strong> A 3-agent ingestion pipeline that scores Herfindahl-Hirschman Indices (HHI) per sector, computes an Integrity Risk Index (IRI) via logistic regression, and cryptographically seals every ingested batch with SHA-256 for court-admissible provenance.
            </p>
          </div>

          {/* Hard Telemetry Numbers */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071320] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#38BDF8] tabular-nums">4.5M+</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Awards Scraped</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071320] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#E6ECF2] tabular-nums">&lt; 5ms</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Edge Query Latency</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071320] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#F59E0B] tabular-nums">HHI &gt; 2500</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Cartel Anomaly Trap</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071320] p-3">
              <span className="font-mono text-[20px] font-semibold text-[#10B981] tabular-nums">Sec 6(1)</span>
              <span className="text-[11.5px] text-[#9FB0C2]">RTI CPIO Generator</span>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://cppp-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#E6ECF2] px-6 text-[15px] font-semibold text-[#0B1B2B] transition-all duration-200 hover:bg-[#38BDF8] hover:text-[#06101C] hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <span>Open Watchdog</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/suryanshu1520-1/CPPP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#22384E] bg-[#071320] px-5 text-[14px] font-medium text-[#E6ECF2] transition-colors hover:border-[#38BDF8] hover:text-white"
            >
              <span>Source Pipeline</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Forensic Risk & RTI Generator Console */}
        <div className="lg:col-span-6 flex flex-col rounded-[18px] border border-[#22384E] bg-[#071320] overflow-hidden shadow-inner">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#22384E] bg-[#0C1B2E] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#9FB0C2]">CPPP Forensic Console</span>
              <span className="rounded bg-[#22384E] px-1.5 py-0.5 font-mono text-[10px] text-[#38BDF8]">LIVE DATA</span>
            </div>
            <div className="flex gap-1.5 rounded-lg bg-[#071320] p-1 border border-[#22384E]">
              <button
                type="button"
                onClick={() => setActiveTab('hhi')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'hhi'
                    ? 'bg-[#38BDF8] text-[#071320] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                HHI &amp; Risk Matrix
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rti')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'rti'
                    ? 'bg-[#E6ECF2] text-[#071320] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                Section 6(1) RTI Dossier
              </button>
            </div>
          </div>

          {/* Tab 1: HHI Concentration & Integrity Risk */}
          {activeTab === 'hhi' && (
            <div className="flex flex-col gap-4 p-5 sm:p-6 text-[13.5px]">
              {/* Batch Hash Proof */}
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-3 font-mono text-xs">
                <span className="text-[#9FB0C2]">Cryptographic Seal:</span>
                <span className="text-[#38BDF8] truncate max-w-[240px]">
                  SHA256: 8f2e9a...e3b0c442 [VERIFIED]
                </span>
              </div>

              {/* Sample Target Market Analysis */}
              <div className="rounded-xl border border-[#22384E] bg-[#0A1A2C] p-4">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#E6ECF2] font-semibold">Target Sector: National Highways &amp; Pavement Works</span>
                  <span className="rounded bg-[#EF4444]/20 border border-[#EF4444]/40 px-2 py-0.5 text-[#EF4444] font-bold">
                    CARTEL RISK DETECTED
                  </span>
                </div>

                {/* HHI Visual Meter */}
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#9FB0C2]">Herfindahl-Hirschman Index (HHI):</span>
                    <span className="text-[#EF4444] font-bold tabular-nums">3,842 / 10,000 (Severe Concentration)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#1E2E42] overflow-hidden flex">
                    <div className="h-full bg-[#10B981] w-[15%]" title="Competitive (<1500)" />
                    <div className="h-full bg-[#F59E0B] w-[10%]" title="Moderate (1500-2500)" />
                    <div className="h-full bg-[#EF4444] w-[75%]" title="High (>2500)" />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[#9FB0C2] pt-0.5">
                    <span>0 (Pure Competition)</span>
                    <span className="text-[#F59E0B]">2,500 Threshold</span>
                    <span>10,000 (Monopoly)</span>
                  </div>
                </div>

                {/* Anomaly Breakdown */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="rounded border border-[#22384E] bg-[#071320] p-2.5">
                    <span className="text-[#9FB0C2] block mb-0.5">Single-Bidder Rate:</span>
                    <span className="text-[#EF4444] font-semibold tabular-nums text-sm">78.4% (Expected &lt;15%)</span>
                  </div>
                  <div className="rounded border border-[#22384E] bg-[#071320] p-2.5">
                    <span className="text-[#9FB0C2] block mb-0.5">Tender Turnaround:</span>
                    <span className="text-[#F59E0B] font-semibold tabular-nums text-sm">1.8 Days (Statutory: 21d)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#38BDF8]/20 bg-[#040C14] p-3 text-xs text-[#9FB0C2]">
                <strong className="text-[#E6ECF2]">Econometric Finding:</strong> In District Ward 04, 86 consecutive highway surfacing contracts were awarded to a single consortium with an average bid variation of less than 0.04% from internal departmental cost estimates.
              </div>
            </div>
          )}

          {/* Tab 2: Automated Section 6(1) RTI Dossier */}
          {activeTab === 'rti' && (
            <div className="flex flex-col gap-3 p-5 sm:p-6 text-[13px]">
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-2">
                <span className="font-mono text-xs text-[#38BDF8] font-semibold">
                  Statutory RTI Draft (Right to Information Act, 2005)
                </span>
                <span className="rounded bg-[#10B981]/20 text-[#10B981] px-2 py-0.5 font-mono text-[10px]">
                  READY TO FILE
                </span>
              </div>

              <div className="rounded-xl border border-[#22384E] bg-[#0A1A2C] p-4 font-mono text-xs text-[#E6ECF2] space-y-2 leading-relaxed">
                <div className="text-[#9FB0C2] border-b border-[#22384E] pb-2">
                  <div><strong>To:</strong> Central Public Information Officer (CPIO)</div>
                  <div><strong>Authority:</strong> National Highways Authority of India (NHAI)</div>
                  <div><strong>Subject:</strong> Requisition under Section 6(1) regarding CPPP Tender #2024_NHAI_19283_1</div>
                </div>
                <div className="text-[12px] text-[#E6ECF2]">
                  <p className="m-0">
                    Sir / Madam,<br />
                    Under Section 6(1) of the RTI Act, 2005, please provide authenticated copies of:
                  </p>
                  <ol className="mt-1 pl-4 list-decimal space-y-1 text-[#9FB0C2]">
                    <li>The Technical Bid Evaluation Committee minutes explaining the disqualification of 3 competing bidders.</li>
                    <li>The statutory justification for reducing the mandatory 21-day bidding window to 44 hours.</li>
                    <li>Bank guarantee verification certificates submitted by M/s Apex Infra Consortium.</li>
                  </ol>
                </div>
              </div>

              <div className="rounded border border-[#22384E] bg-[#071320] p-2.5 font-mono text-[11px] text-[#9FB0C2] flex items-center justify-between">
                <span>Addressed to verified CPIO nodal address</span>
                <span className="text-[#38BDF8]">One-Click Export (PDF / Email)</span>
              </div>
            </div>
          )}

          {/* Technical footer */}
          <div className="border-t border-[#22384E] bg-[#040C14] px-5 py-3 text-xs text-[#9FB0C2] flex flex-wrap items-center justify-between gap-3 font-mono">
            <span>Stack: Next.js · PostgreSQL · Cloudflare Workers (Hyperdrive) · D3</span>
            <span className="text-[#38BDF8]">Sub-5ms Edge Analytics</span>
          </div>
        </div>
      </div>
    </article>
  )
}
