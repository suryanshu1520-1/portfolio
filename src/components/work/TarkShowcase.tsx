import { useState } from 'react'

export function TarkShowcase() {
  const [activeTab, setActiveTab] = useState<'grounding' | 'hall'>('grounding')
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false)

  const handleSelectAnswer = (idx: number) => {
    setSelectedAnswer(idx)
    setHasSubmitted(true)
  }

  const handleResetAnswer = () => {
    setSelectedAnswer(null)
    setHasSubmitted(false)
  }

  return (
    <article className="relative overflow-hidden rounded-[24px] border border-[#22384E] bg-gradient-to-b from-[#0B1D30] to-[#071524] p-[clamp(24px,3.8vw,48px)] transition-all duration-300 hover:border-[#5CC8B8]/40 shadow-[0_20px_50px_rgba(5,11,26,0.6)]">
      {/* Subtle top indicator bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#22384E]/70 pb-5 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[#5CC8B8] font-semibold tracking-wider">01 / FLAGSHIP SYSTEM</span>
          <span className="text-[#9FB0C2]">·</span>
          <span className="text-[#E6ECF2] font-medium">UPSC Intelligence &amp; Exam Hall Telemetry</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#5CC8B8]/30 bg-[#5CC8B8]/10 px-3 py-1 text-[11px] font-mono text-[#5CC8B8]">
          <span className="h-2 w-2 rounded-full bg-[#5CC8B8] animate-pulse" />
          <span>Active Pipeline · 25-Yr Prior</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Narrative & Metrics */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5CC8B8]">
              The Annotated Reading Desk
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(32px,3.6vw,46px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#F4ECD8]">
              Tark Intelligence Hub
            </h3>
          </div>

          <p className="m-0 text-[18px] leading-[1.5] text-[#E6ECF2] font-normal">
            An intelligence engine that ingests India’s official gazettes and ministry releases daily, 
            grounds every sentence against statutory records, and runs a server-authoritative 2-hour 
            Prelims simulation with real UPSC negative marking.
          </p>

          <div className="rounded-[16px] border border-[#22384E] bg-[#0E2238]/60 p-4.5 text-[14.5px] leading-relaxed text-[#9FB0C2] space-y-3">
            <p className="m-0">
              <strong className="text-[#E6ECF2]">The core thesis:</strong> Aspirants drown in 100-page coaching PDFs where 85% of content is unexaminable noise. 
              Tark treats official government records as the sole factual spine, weights every claim against a prior learned from 
              <span className="text-[#F4ECD8] font-mono font-medium"> 4,156 past questions (1999–2024)</span>, and strictly refuses to publish claims lacking sentence-level statutory lineage.
            </p>
          </div>

          {/* Hard Telemetry Numbers */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-1">
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071626]/80 p-3">
              <span className="font-mono text-[20px] font-semibold text-[#F4ECD8] tabular-nums">4,156</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Past Papers Mined</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071626]/80 p-3">
              <span className="font-mono text-[20px] font-semibold text-[#F4ECD8] tabular-nums">65,000+</span>
              <span className="text-[11.5px] text-[#9FB0C2]">LoC TS / Python</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071626]/80 p-3">
              <span className="font-mono text-[20px] font-semibold text-[#5CC8B8] tabular-nums">₹0</span>
              <span className="text-[11.5px] text-[#9FB0C2]">Recurring Infra</span>
            </div>
            <div className="flex flex-col rounded-xl border border-[#22384E]/70 bg-[#071626]/80 p-3">
              <span className="font-mono text-[20px] font-semibold text-[#E0D0AB] tabular-nums">+2 / -0.66</span>
              <span className="text-[11.5px] text-[#9FB0C2]">UPSC Marking</span>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://tark.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#E0D0AB] px-6 text-[15px] font-semibold text-[#050B1A] transition-all duration-200 hover:bg-[#F4ECD8] hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <span>Launch tark.live</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/suryanshu1520-1/SKU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#22384E] bg-[#071626] px-5 text-[14px] font-medium text-[#E6ECF2] transition-colors hover:border-[#5CC8B8] hover:text-white"
            >
              <span>Source Engine</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Bespoke Interactive Telemetry Console */}
        <div className="lg:col-span-6 flex flex-col rounded-[18px] border border-[#22384E] bg-[#071626] overflow-hidden shadow-inner">
          {/* Console Header Tabs */}
          <div className="flex items-center justify-between border-b border-[#22384E] bg-[#0A1F36] px-4 py-2.5">
            <span className="text-xs font-mono text-[#9FB0C2] uppercase tracking-wider">
              Live Specimen Desk
            </span>
            <div className="flex gap-1.5 rounded-lg bg-[#071626] p-1 border border-[#22384E]">
              <button
                type="button"
                onClick={() => setActiveTab('grounding')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'grounding'
                    ? 'bg-[#5CC8B8] text-[#071626] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                Grounded Citation Radar
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hall')}
                className={`min-h-[30px] rounded px-3 text-xs font-medium transition-all ${
                  activeTab === 'hall'
                    ? 'bg-[#E0D0AB] text-[#071626] font-semibold shadow-xs'
                    : 'text-[#9FB0C2] hover:text-[#E6ECF2]'
                }`}
              >
                Prelims Hall Simulator
              </button>
            </div>
          </div>

          {/* Tab 1: Grounded Citation Radar */}
          {activeTab === 'grounding' && (
            <div className="flex flex-col gap-4 p-5 sm:p-6 text-[13.5px]">
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#10B981]" />
                  <span className="font-mono text-xs text-[#E6ECF2] font-semibold">
                    Gazette of India Lineage Anchor
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#5CC8B8]">Ref: PIB ID 2010188</span>
              </div>

              {/* Verified Text Passage */}
              <div className="rounded-xl border border-[#22384E] bg-[#0B1E33] p-4 text-[#E6ECF2] font-serif leading-relaxed">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9FB0C2] block mb-2 font-sans not-italic">
                  Daily Brief Excerpt · GS Paper III (Energy Infrastructure)
                </span>
                <p className="m-0 text-[15.5px]">
                  &ldquo;The Union Cabinet approved the{' '}
                  <mark className="bg-[#5CC8B8]/20 text-[#5CC8B8] px-1 py-0.5 rounded border border-[#5CC8B8]/40 font-medium">
                    PM-Surya Ghar: Muft Bijli Yojana with ₹75,021 crore outlay
                  </mark>{' '}
                  providing up to 300 units of free electricity monthly for 1 crore households, backed by statutory central financial assistance.&rdquo;
                </p>
              </div>

              {/* Grounding Verification Panel */}
              <div className="flex flex-col gap-2 rounded-xl border border-[#5CC8B8]/20 bg-[#05111E] p-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#5CC8B8] font-medium">✓ Sentence-Level Deterministic Match</span>
                  <span className="text-[#10B981] font-semibold">Confidence: 99.4%</span>
                </div>
                <div className="text-[12.5px] text-[#9FB0C2] leading-snug">
                  <strong className="text-[#E6ECF2]">Statutory Citation:</strong> Ministry of New &amp; Renewable Energy, Resolution F. No. 32/2024-RE, Extraordinary Gazette Part II, Section 3(i).
                </div>
                <div className="mt-1 flex items-center justify-between pt-2 border-t border-[#22384E]/60 text-[11.5px] font-mono text-[#9FB0C2]">
                  <span>25-Yr Prior Exam Relevance: <strong className="text-[#F4ECD8]">92/100 (High)</strong></span>
                  <span>Contested Claims: <strong className="text-[#10B981]">0 detected</strong></span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Prelims Hall Simulation Telemetry */}
          {activeTab === 'hall' && (
            <div className="flex flex-col gap-4 p-5 sm:p-6 text-[13.5px]">
              {/* Exam Hall Telemetry Bar */}
              <div className="flex items-center justify-between border-b border-[#22384E]/70 pb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#E0D0AB] animate-ping" />
                  <span className="font-mono text-xs text-[#E0D0AB] font-semibold">
                    Hall Clock: 01:42:19
                  </span>
                </div>
                <div className="flex gap-2 font-mono text-[11px]">
                  <span className="text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">Correct: +2.00</span>
                  <span className="text-[#F87171] bg-[#F87171]/10 px-2 py-0.5 rounded border border-[#F87171]/30">Penalty: -0.66</span>
                </div>
              </div>

              {/* Sample Question Stem */}
              <div className="rounded-xl border border-[#22384E] bg-[#0B1E33] p-4 text-[#E6ECF2]">
                <div className="flex items-center justify-between text-xs font-mono text-[#9FB0C2] mb-1.5">
                  <span>Q.42 · CSE General Studies Paper I</span>
                  <span className="text-[#E0D0AB]">UPSC Standard Stem</span>
                </div>
                <p className="m-0 text-[14.5px] leading-relaxed font-serif">
                  With reference to the PM-Surya Ghar Yojana, consider the following statements:
                </p>
                <ol className="mt-2 pl-4 list-decimal text-[13.5px] text-[#9FB0C2] space-y-1">
                  <li>It provides up to 300 units of free electricity every month to 1 crore households.</li>
                  <li>The nodal central implementing agency is designated under the Ministry of Housing and Urban Affairs.</li>
                </ol>
                <p className="mt-2 mb-0 text-[13.5px] text-[#E6ECF2] font-serif italic">
                  Which of the statements given above is/are correct?
                </p>
              </div>

              {/* Interactive OMR Options */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {[
                  { id: 0, label: 'A', text: '1 only', correct: true },
                  { id: 1, label: 'B', text: '2 only', correct: false },
                  { id: 2, label: 'C', text: 'Both 1 and 2', correct: false },
                  { id: 3, label: 'D', text: 'Neither 1 nor 2', correct: false },
                ].map((opt) => {
                  const isSelected = selectedAnswer === opt.id
                  let btnStyle = 'border-[#22384E] bg-[#071626] text-[#E6ECF2] hover:border-[#5CC8B8]'
                  if (hasSubmitted) {
                    if (opt.correct) {
                      btnStyle = 'border-[#10B981] bg-[#10B981]/20 text-[#10B981] font-bold'
                    } else if (isSelected && !opt.correct) {
                      btnStyle = 'border-[#F87171] bg-[#F87171]/20 text-[#F87171]'
                    }
                  } else if (isSelected) {
                    btnStyle = 'border-[#E0D0AB] bg-[#E0D0AB]/20 text-[#E0D0AB]'
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectAnswer(opt.id)}
                      className={`flex min-h-[44px] items-center gap-2.5 rounded-lg border px-3 py-2 text-left transition-all ${btnStyle}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold">
                        {opt.label}
                      </span>
                      <span className="truncate">{opt.text}</span>
                    </button>
                  )
                })}
              </div>

              {/* Interactive Feedback / Diagnostic Autopsy */}
              {hasSubmitted && (
                <div className="rounded-lg border border-[#22384E] bg-[#05111E] p-3 text-xs">
                  <div className="flex items-center justify-between font-mono mb-1">
                    <span className={selectedAnswer === 0 ? 'text-[#10B981] font-bold' : 'text-[#F87171] font-bold'}>
                      {selectedAnswer === 0 ? '✓ UPSC SCORE: +2.00 (Accurate)' : '✗ UPSC SCORE: -0.66 (Negative Penalty)'}
                    </span>
                    <button
                      type="button"
                      onClick={handleResetAnswer}
                      className="text-[#9FB0C2] underline hover:text-white cursor-pointer"
                    >
                      Retry
                    </button>
                  </div>
                  <p className="m-0 text-[#9FB0C2] leading-snug">
                    <strong className="text-[#E6ECF2]">Examiner Autopsy:</strong> Statement 1 is correct (300 units/month). Statement 2 is incorrect because the nodal agency operates under the Ministry of New and Renewable Energy (MNRE), not MoHUA.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Under-the-hood technical footer */}
          <div className="border-t border-[#22384E] bg-[#05111E] px-5 py-3 text-xs text-[#9FB0C2] flex flex-wrap items-center justify-between gap-3 font-mono">
            <span>Stack: React · TypeScript · Supabase · Python · Groq / Gemini</span>
            <span className="text-[#5CC8B8]">Zero Recurring Infra Cost</span>
          </div>
        </div>
      </div>
    </article>
  )
}
