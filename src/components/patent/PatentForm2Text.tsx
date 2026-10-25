import { useState } from 'react'
import type { PatentSpecification } from '../../data/patents'

interface PatentForm2TextProps {
  patent: PatentSpecification
}

export default function PatentForm2Text({ patent }: PatentForm2TextProps) {
  const [copied, setCopied] = useState<boolean>(false)

  const fullText = `FORM 2
THE PATENTS ACT, 1970
(39 OF 1970)
&
THE PATENTS RULES, 2003
COMPLETE SPECIFICATION
(See Section 10 and Rule 13)

1. TITLE OF THE INVENTION:
${patent.title}

2. APPLICANT(S):
Name: Suryanshu Chaturvedi
Nationality: Indian
Address: New Delhi, India

3. PREAMBLE TO THE DESCRIPTION:
The following specification particularly describes the invention and the manner in which it is to be performed.

4. FIELD OF THE INVENTION:
${patent.form2Document.fieldOfInvention}

5. BACKGROUND AND PRIOR ART:
${patent.form2Document.backgroundAndPriorArt}

6. OBJECTS OF THE INVENTION:
${patent.form2Document.objectsOfInvention.map((obj, i) => `${i + 1}. ${obj}`).join('\n')}

7. DETAILED DESCRIPTION OF THE PREFERRED EMBODIMENTS:
${patent.form2Document.detailedDescriptionSummary}

8. WE CLAIM:
${patent.claims.map((c) => `Claim ${c.number} (${c.type}):\n${c.fullText}`).join('\n\n')}

9. ABSTRACT:
${patent.abstract}
`

  const handleCopyFull = () => {
    navigator.clipboard.writeText(fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#0A1624] p-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-300">
            Form 2 Complete Specification Document
          </span>
          <p className="mt-0.5 text-xs text-slate-400">
            Prepared under The Patents Act, 1970 (Section 10 &amp; Rule 13)
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopyFull}
          className="cursor-pointer rounded-full border border-teal-400/40 bg-teal-500/20 px-4 py-1.5 font-mono text-xs font-semibold text-teal-200 transition-all hover:bg-teal-500/30 active:scale-95"
        >
          {copied ? '✓ Form 2 Copied to Clipboard' : 'Copy Full Specification'}
        </button>
      </div>

      {/* Styled Legal Document Container */}
      <div className="relative rounded-2xl border border-white/[0.1] bg-[#07111C] p-6 sm:p-8 font-serif text-slate-300 shadow-xl">
        {/* Document Header Watermark */}
        <div className="border-b border-white/[0.1] pb-6 text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-teal-400 font-bold">
            FORM 2 · THE PATENTS ACT, 1970 (39 OF 1970)
          </div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-400">
            THE PATENTS RULES, 2003 · COMPLETE SPECIFICATION (SECTION 10 &amp; RULE 13)
          </div>
          <h4 className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">
            {patent.title}
          </h4>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-slate-400">
            <span>Jurisdiction: {patent.jurisdiction}</span>
            <span>·</span>
            <span>IPO Office: New Delhi</span>
            <span>·</span>
            <span className="text-amber-300">Status: Complete Draft (Not Yet Filed)</span>
          </div>
        </div>

        {/* Section 1: Preamble */}
        <div className="mt-6 border-b border-white/[0.06] pb-5">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
            Preamble to the Description
          </h5>
          <p className="mt-2 text-xs italic leading-relaxed text-slate-300">
            "The following specification particularly describes the invention and the manner in which it is to be performed."
          </p>
        </div>

        {/* Section 2: Field of the Invention */}
        <div className="mt-6 border-b border-white/[0.06] pb-5">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
            Field of the Invention
          </h5>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            {patent.form2Document.fieldOfInvention}
          </p>
        </div>

        {/* Section 3: Background & Prior Art */}
        <div className="mt-6 border-b border-white/[0.06] pb-5">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
            Background and Prior Art Bottlenecks
          </h5>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            {patent.form2Document.backgroundAndPriorArt}
          </p>
        </div>

        {/* Section 4: Objects of Invention */}
        <div className="mt-6 border-b border-white/[0.06] pb-5">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
            Objects of the Invention
          </h5>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
            {patent.form2Document.objectsOfInvention.map((obj, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="font-mono text-teal-400 font-bold">({i + 1})</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 5: Detailed Description */}
        <div className="mt-6 border-b border-white/[0.06] pb-5">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
            Detailed Description of Preferred Embodiments
          </h5>
          <p className="mt-2 text-xs leading-relaxed text-slate-200">
            {patent.form2Document.detailedDescriptionSummary}
          </p>
        </div>

        {/* Section 6: Abstract */}
        <div className="mt-6">
          <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
            Official Abstract
          </h5>
          <p className="mt-2 text-xs italic leading-relaxed text-slate-300">
            "{patent.abstract}"
          </p>
        </div>
      </div>
    </div>
  )
}
