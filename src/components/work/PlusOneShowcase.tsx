export function PlusOneShowcase() {
  return (
    <aside className="relative overflow-hidden rounded-[20px] border border-dashed border-[#22384E] bg-[#0A1828]/60 p-6 transition-all duration-300 hover:border-[#5CC8B8]/60 hover:bg-[#0E2034]/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5 sm:max-w-[75%]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9FB0C2]">Also Built</span>
            <span className="text-[#9FB0C2]">·</span>
            <span className="font-mono text-xs text-[#5CC8B8]">Native Android Architecture</span>
          </div>
          <h4 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[24px] font-medium text-[#E6ECF2]">
            PlusOne — Habit Companion &amp; Haptic Particle Engine
          </h4>
          <p className="m-0 text-[14.5px] leading-relaxed text-[#9FB0C2]">
            A native Android habit companion built from scratch in Kotlin, featuring a hand-tuned 60fps canvas particle system, 
            mathematically synthesised micro-audio tones, and custom hardware haptic actuation curves.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2 sm:pt-0">
          <a
            href="https://github.com/suryanshu1520-1/PlusOne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#22384E] bg-[#071626] px-5 text-[14px] font-medium text-[#5CC8B8] transition-all hover:border-[#5CC8B8] hover:bg-[#5CC8B8]/10"
          >
            <span>Inspect Kotlin Source</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
