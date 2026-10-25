import { useState } from 'react'
import type { PatentSpecification } from '../../data/patents'

interface PatentClaimsViewProps {
  patent: PatentSpecification
}

export default function PatentClaimsView({ patent }: PatentClaimsViewProps) {
  const [copiedClaimNumber, setCopiedClaimNumber] = useState<number | null>(null)

  const handleCopyClaim = (claimNumber: number, claimText: string) => {
    navigator.clipboard.writeText(`Claim ${claimNumber}: ${claimText}`)
    setCopiedClaimNumber(claimNumber)
    setTimeout(() => setCopiedClaimNumber(null), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Section 3(k) Statutory Precedent Card */}
      <div className="rounded-2xl border border-teal-500/30 bg-teal-500/[0.04] p-5 backdrop-blur-md">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
          <svg className="h-4 w-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>{patent.criCompliance.heading}</span>
        </div>

        <div className="mt-3 flex flex-col gap-2 text-xs leading-relaxed text-slate-300">
          <p>
            <strong className="text-white">Legal Precedent: </strong>
            <em className="text-teal-200">{patent.criCompliance.precedent}</em>
          </p>
          <p className="text-slate-300">
            {patent.criCompliance.reasoning}
          </p>
          <div className="mt-2 rounded-xl border border-white/[0.06] bg-black/40 p-3 font-mono text-[11px] text-teal-300">
            <strong className="text-slate-400 uppercase">Hardware / Operatory Anchoring: </strong>
            {patent.criCompliance.hardwareInteraction}
          </div>
        </div>
      </div>

      {/* Claims List */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div>
            <h5 className="font-['Source_Serif_4',Georgia,serif] text-lg font-medium text-white">
              Form 2 Patent Claims Structure
            </h5>
            <p className="mt-0.5 text-xs text-slate-400">
              Complete specification claims drafted under The Patents Act, 1970 § 10 &amp; Rule 13
            </p>
          </div>
          <span className="font-mono text-xs text-teal-300">
            {patent.claims.length} Claims Total
          </span>
        </div>

        <div className="space-y-4">
          {patent.claims.map((claim) => {
            const isCopied = copiedClaimNumber === claim.number
            const isIndependent = claim.type.includes('Independent')

            return (
              <div
                key={claim.number}
                className={`relative flex flex-col gap-3 rounded-2xl border p-5 transition-all ${
                  isIndependent
                    ? 'border-teal-400/50 bg-[#0E1E2F]/90 shadow-[0_4px_25px_rgba(45,212,191,0.15)]'
                    : 'border-white/[0.08] bg-[#0A1624] hover:border-teal-500/30'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs font-bold ${
                        isIndependent
                          ? 'bg-teal-400 text-[#0E1E2F]'
                          : 'bg-teal-500/20 text-teal-300'
                      }`}
                    >
                      {claim.number}
                    </span>
                    <span
                      className={`rounded px-2.5 py-0.5 font-mono text-[11px] font-semibold ${
                        isIndependent
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                          : 'bg-white/[0.05] text-slate-300 border border-white/[0.08]'
                      }`}
                    >
                      {claim.type}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyClaim(claim.number, claim.fullText)}
                    className="cursor-pointer rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-slate-300 transition-colors hover:border-teal-400 hover:text-teal-300 active:scale-95"
                  >
                    {isCopied ? '✓ Copied' : 'Copy Claim'}
                  </button>
                </div>

                {/* Summary */}
                <h6 className="text-sm font-semibold text-white">
                  {claim.summary}
                </h6>

                {/* Full Statutory Claim Language */}
                <p className="text-xs leading-relaxed text-slate-300 font-serif italic">
                  "{claim.fullText}"
                </p>

                {/* Technical & Legal Significance */}
                <div className="mt-1 flex items-start gap-2 border-t border-white/[0.06] pt-3 text-[11px] text-slate-400">
                  <span className="font-mono uppercase text-teal-400 font-semibold flex-none">
                    Legal &amp; Technical Effect:
                  </span>
                  <span>{claim.technicalSignificance}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
