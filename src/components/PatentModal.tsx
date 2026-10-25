import { useState, useEffect, useRef } from 'react'

interface PatentModalProps {
  isOpen: boolean
  onClose: () => void
  initialPatentId?: string
}

interface StepItem {
  i: number
  t: string
  d: string
  delay: string
}

interface ClaimItem {
  n: number
  head: string
  type: string
  d: string
}

interface IPCItem {
  code: string
  label: string
}

interface TargetItem {
  l: string
  v: string
}

interface InventionData {
  tabId: string
  num: string
  name: string
  sub: string
  plain: string
  title: string
  problem: string
  cons: string[]
  steps: StepItem[]
  claims: ClaimItem[]
  why: string
  ipc: IPCItem[]
  targets: TargetItem[]
}

const makeSteps = (arr: [string, string][]): StepItem[] =>
  arr.map(([t, d], i) => ({
    i: i + 1,
    t,
    d,
    delay: `${i * 1.5}s`
  }))

const makeClaims = (arr: [string, string, string][]): ClaimItem[] =>
  arr.map(([head, type, d], i) => ({
    n: i + 1,
    head,
    type,
    d
  }))

const INVENTIONS: InventionData[] = [
  {
    tabId: 'pm-tab-1',
    num: 'i.',
    name: 'Rewindable records',
    sub: 'Bi-temporal Merkle odontogram',
    plain: 'Dental records that can be rewound to any date, and that prove they were never altered.',
    title: 'A System and Method for Bi-Temporal Event-Sourced Dental State Projection and Tamper-Evident Merkle Chain Ledger for Operatory Records',
    problem: 'Most clinic software overwrites a tooth’s record when it is updated. Once overwritten, nobody can show what the chart said before, which is exactly what an audit or a dispute needs.',
    cons: [
      'A chart cannot show a tooth’s condition before an alleged incident.',
      'Audit logs can be edited or truncated by whoever runs the database.',
      'Records shared over ABDM carry no unbroken proof of where they came from.'
    ],
    steps: makeSteps([
      ['Record', 'Every observation is appended as a new event. Nothing is overwritten.'],
      ['Keep two clocks', 'Each event stores when it was true and when it was entered.'],
      ['Chain', 'Each event is hashed with the one before it, back to a fixed first block.'],
      ['Rewind', 'Replay events up to any moment to rebuild the chart exactly as it stood.']
    ]),
    claims: makeClaims([
      ['Append-only record with a hash chain', 'Claim 1 · independent system claim', 'An event store that only appends, gives every event two timestamps, and links each one by SHA-256 hash back to a fixed genesis block.'],
      ['Gum-pocket depths as structured data', 'Claim 2 · dependent', 'Captures six-point periodontal probing depths as structured values, with automatic checks for anomalies.'],
      ['Proof the chain is unbroken', 'Claim 3 · dependent', 'Issues a verification certificate showing the chain is continuous from today back to the genesis block.'],
      ['Encrypted exchange over ABDM', 'Claim 4 · dependent', 'Packages records as HL7 FHIR R5 bundles, encrypted with Curve25519 key exchange and AES-GCM-256.'],
      ['Rebuilding a past chart', 'Claim 5 · method claim', 'Reconstructs a patient’s chart as it stood at any requested moment, for audits and disputes.']
    ]),
    why: 'The specification argues a technical effect: it binds operatory terminals and hardware timestamps to a tamper-evident record of physical clinical state.',
    ipc: [
      { code: 'G16H 10/60', label: 'Handling patient health data' },
      { code: 'G06F 21/64', label: 'Protecting data integrity' },
      { code: 'A61C 19/00', label: 'Dental operatory apparatus' }
    ],
    targets: [
      { l: 'Rewind query time', v: '< 12 ms' },
      { l: 'Hash chain', v: 'SHA-256' },
      { l: 'ABDM encryption', v: 'AES-GCM-256' }
    ]
  },
  {
    tabId: 'pm-tab-2',
    num: 'ii.',
    name: 'Instant 3D scan review',
    sub: 'Progressive scanner ingestion',
    plain: 'Intraoral scans that open in the browser almost instantly, from any scanner brand, with preparation clearance checked while the patient is still in the chair.',
    title: 'A System and Method for Hardware-Agnostic Automated Ingestion and Real-Time Normalization of 3D Intraoral Volumetric Datasets via Non-Invasive Browser Kernel Watcher',
    problem: 'Clinics use scanners from different makers that export 50–250 MB mesh files. Dentists wait minutes for uploads and vendor software, and often find a preparation is too shallow only after the patient has left.',
    cons: [
      'Chair time is lost while large scans upload.',
      'Insufficient clearance is found after the patient has gone.',
      'High-resolution models will not open on operatory tablets.'
    ],
    steps: makeSteps([
      ['Watch', 'A browser folder watcher spots a finished scan. No drivers to install.'],
      ['Normalise', 'Coordinates, units and surface normals are standardised across brands.'],
      ['Stream', 'A light preview appears first; finer tiers load behind it.'],
      ['Check', 'Clearance to the opposing teeth is shaded live on the model.']
    ]),
    claims: makeClaims([
      ['Driverless watcher with tiered detail', 'Claim 1 · independent system claim', 'A browser-based watcher that picks up new scanner files without drivers, builds a four-tier level-of-detail pyramid and computes clearance in real time.'],
      ['Clearance colour shading', 'Claim 2 · dependent', 'Shades the model by occlusal clearance: under 1.0 mm, 1.0–1.5 mm, and over 1.5 mm.'],
      ['One format for every scanner', 'Claim 3 · dependent', 'Normalises coordinates, units and normals from 3Shape TRIOS, Medit, iTero and Carestream scanners.'],
      ['Margin marking', 'Claim 4 · dependent', 'A tool that fits closed Catmull-Rom splines to the preparation’s finish line.'],
      ['Chairside clearance check', 'Claim 5 · method claim', 'Validates preparation clearance before the case is sent to the lab.']
    ]),
    why: 'The specification argues a technical effect on physical equipment: it reads output from intraoral scanners and produces verified meshes for CAD/CAM milling.',
    ipc: [
      { code: 'G16H 30/20', label: 'Handling medical images and scans' },
      { code: 'A61C 9/00', label: 'Dental impressions and optical scans' },
      { code: 'G06T 17/00', label: '3D modelling and meshes' }
    ],
    targets: [
      { l: 'First preview', v: '< 80 ms' },
      { l: 'Polygons in first tier', v: '5%' },
      { l: 'Clearance accuracy', v: '± 0.05 mm' }
    ]
  },
  {
    tabId: 'pm-tab-3',
    num: 'iii.',
    name: 'Clinic–lab case gate',
    sub: 'State-gated messaging and remakes',
    plain: 'A case workflow between clinic and lab that opens chat only when the lab commits, keeps internal rework private, and lets warranty remakes be milled without a new scan.',
    title: 'A System and Method for Dual-Layer Context-Aware Clinical-Laboratory Asynchronous Messaging and Soft-Copy CAD/CAM Archival Engine',
    problem: 'Clinics and dental labs coordinate over chat apps. Technicians field questions before a case is even reviewed, internal rework alarms clinicians who see it without context, and remakes usually mean scanning the patient again.',
    cons: [
      'Technicians lose hours to questions asked too early.',
      'Internal rework, seen without context, worries clinicians.',
      'Remakes need a fresh scan even when the design is already on file.'
    ],
    steps: makeSteps([
      ['Intake', 'The case arrives as a draft. Chat stays locked while the lab reviews it.'],
      ['Accept', 'The lab commits the case to production, and chat opens.'],
      ['Split timelines', 'Internal steps stay with the lab. The clinic sees verified milestones.'],
      ['Archive', 'The final design is hashed into a remake token for warranty re-milling.']
    ]),
    claims: makeClaims([
      ['Chat gated by case state', 'Claim 1 · independent system claim', 'An order state machine that keeps clinic-lab chat locked until the lab accepts the case, with separate internal and client timelines and archived CAD files.'],
      ['Reading Exocad settings', 'Claim 2 · dependent', 'Extracts material, shade and cement-space settings directly from Exocad .constructionInfo files.'],
      ['Remake token', 'Claim 3 · dependent', 'Hashes the final restoration design into a token, so a warranty remake can be milled without a new scan.'],
      ['Private lab events', 'Claim 4 · dependent', 'Keeps internal lab events out of the clinic’s view while passing on verified milestones.'],
      ['The full workflow', 'Claim 5 · method claim', 'Gated intake, split timelines, settings extraction and archived remakes, end to end.']
    ]),
    why: 'The specification ties the workflow to manufacturing equipment: case states gate milling and sintering stages, and the remake token triggers re-milling from an archived design.',
    ipc: [
      { code: 'G16H 40/20', label: 'Managing healthcare facilities and labs' },
      { code: 'G06Q 50/22', label: 'Healthcare workflow processes' },
      { code: 'A61C 13/00', label: 'Dental prostheses and their manufacture' }
    ],
    targets: [
      { l: 'Reading CAD settings', v: '< 15 ms' },
      { l: 'Rescans for a warranty remake', v: 'None' }
    ]
  }
]

// Demo 1 rewind constant definitions
const REWIND_EVENTS = [
  { date: '10 Jan', title: 'Block 1', note: '36: caries' },
  { date: '24 Jan', title: 'Block 2', note: '36: filled' },
  { date: '7 Feb', title: 'Block 3', note: '46: crown prep' },
  { date: '9 Feb', title: 'Block 4', note: 'Correction: filling was on 37' }
]

const TOOTH_LOOK = {
  sound: { fill: '#FFFFFF', edge: '#B9BDC4', label: 'Sound' },
  caries: { fill: '#B45309', edge: '#B45309', label: 'Caries' },
  filled: { fill: '#0F766E', edge: '#0F766E', label: 'Filled' },
  prepared: { fill: '#0B1B2B', edge: '#0B1B2B', label: 'Crown prep' }
}

// Demo 2 LOD tiers
const TIERS_CONFIG = [
  { name: 'Tier 1', d: 'about 5% of the polygons. Appears first, so review can start straight away.', cols: 4 },
  { name: 'Tier 2', d: 'a finer intermediate mesh, loaded in the background.', cols: 8 },
  { name: 'Tier 3', d: 'a finer intermediate mesh again, still loading behind the view.', cols: 12 },
  { name: 'Full mesh', d: 'every polygon from the scanner, used for final clearance checks.', cols: 18 }
]

// Demo 3 stages & logs
const CASE_STAGES = ['Draft', 'Under review', 'In production', 'Delivered']
const LAB_LOGS = [
  ['Case received: crown on 46'],
  ['Scan checked: margin clear'],
  ['Accepted into production', 'Milling started', 'Sintering re-run (internal)'],
  ['Design archived', 'Remake token issued']
]
const CLINIC_LOGS = [
  ['Case sent to lab'],
  ['Lab is reviewing the scan'],
  ['Accepted: in production'],
  ['Delivered', 'Remake covered: no new scan needed']
]

export default function PatentModal({ isOpen, onClose, initialPatentId }: PatentModalProps) {
  const getInitialIndex = (id?: string) => {
    if (id === 'in-pat-02') return 1
    if (id === 'in-pat-03') return 2
    return 0
  }

  const [activeIdx, setActiveIdx] = useState<number>(getInitialIndex(initialPatentId))
  const [swapAnim, setSwapAnim] = useState<string>('swapA')
  const panelRef = useRef<HTMLDivElement>(null)

  // Interactive Demo states
  const [p1, setP1] = useState<number>(4) // Demo 1 rewind step (0–4)
  const [tier, setTier] = useState<number>(0) // Demo 2 LOD tier (0–3)
  const [caseStage, setCaseStage] = useState<number>(0) // Demo 3 case stage (0–3)

  useEffect(() => {
    if (initialPatentId) {
      const idx = getInitialIndex(initialPatentId)
      setActiveIdx(idx)
    }
  }, [initialPatentId])

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === '1') {
        pickTab(0)
      } else if (e.key === '2') {
        pickTab(1)
      } else if (e.key === '3') {
        pickTab(2)
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const pickTab = (i: number) => {
    setActiveIdx(i)
    setSwapAnim((prev) => (prev === 'swapA' ? 'swapB' : 'swapA'))
    if (panelRef.current) {
      panelRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (!isOpen) return null

  const cur = INVENTIONS[activeIdx]

  // Demo 1 computed state
  const toothState: Record<string, keyof typeof TOOTH_LOOK> = {
    '37': 'sound',
    '36': 'sound',
    '35': 'sound',
    '45': 'sound',
    '46': 'sound',
    '47': 'sound'
  }
  if (p1 >= 1) toothState['36'] = 'caries'
  if (p1 >= 2) toothState['36'] = 'filled'
  if (p1 >= 3) toothState['46'] = 'prepared'
  if (p1 >= 4) {
    toothState['36'] = 'caries'
    toothState['37'] = 'filled'
  }
  const teeth = ['37', '36', '35', '45', '46', '47'].map((num) => ({
    n: num,
    ...TOOTH_LOOK[toothState[num]]
  }))
  const rewindDate = p1 === 0 ? 'the day the record was opened' : REWIND_EVENTS[p1 - 1].date
  const chainBlocks = [{ title: 'Genesis', note: 'First block' }, ...REWIND_EVENTS]

  // Demo 2 computed state
  const curTier = TIERS_CONFIG[tier]
  const totalDots = curTier.cols * curTier.cols
  const dots = Array.from({ length: totalDots }, (_, i) => {
    const r = Math.floor(i / curTier.cols)
    const c = i % curTier.cols
    const dx = (c + 0.5) / curTier.cols - 0.5
    const dy = (r + 0.5) / curTier.cols - 0.5
    const dist = Math.sqrt(dx * dx + dy * dy)
    const col = dist > 0.5 ? 'transparent' : dist < 0.16 ? '#B91C1C' : dist < 0.28 ? '#D97706' : '#5CC8B8'
    return {
      c: col,
      delay: `${Math.min(i * 4, 500)}ms`
    }
  })

  // Demo 3 computed state
  const labEvents: string[] = []
  const clinicEvents: string[] = []
  for (let s = 0; s <= caseStage; s++) {
    labEvents.push(...LAB_LOGS[s])
    clinicEvents.push(...CLINIC_LOGS[s])
  }
  const chatLocked = caseStage < 2

  return (
    <div
      className="pm scrim fixed inset-0 z-50 flex items-center justify-center bg-[#0B1B2B]/65 p-0 sm:p-4 md:p-6 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="dlg flex flex-col bg-[#F6F5F1] text-[#0B1B2B] overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] w-full h-full sm:h-[min(100%,940px)] sm:max-w-[1120px] sm:rounded-[22px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pm-title"
        aria-describedby="pm-status"
      >
        {/* HEADER */}
        <header className="flex flex-col gap-4.5 bg-white border-b border-[#DAD8D0] px-4.5 sm:px-9 pt-5 sm:pt-7 pb-0">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2 min-w-0">
              <span className="lbl text-[#0F766E]">
                DentalConnect OS · Patent specifications
              </span>
              <h2
                id="pm-title"
                className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(22px,3vw,34px)] font-medium leading-[1.1] tracking-[-0.015em]"
              >
                Three inventions inside DCOS
              </h2>
              <p
                id="pm-status"
                className="m-0 flex flex-wrap items-center gap-2 sm:gap-3 text-[13px] sm:text-[14.5px] text-[#2B3644]"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FEF3E2] px-3 py-1 text-[12.5px] sm:text-[13.5px] font-semibold text-[#8A4B0F]">
                  <span
                    aria-hidden="true"
                    className="h-1.75 w-1.75 rounded-full bg-[#B45309]"
                  />
                  Drafted, not yet filed
                </span>
                <span className="text-pretty">
                  Complete specifications in Form 2 format under the Patents Act, 1970. Not yet filed with the Indian Patent Office.
                </span>
              </p>
            </div>

            {/* Circular Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close patent specifications"
              className="btn flex-none flex items-center justify-center w-11 h-11 rounded-full border border-[#DAD8D0] text-[#0B1B2B] hover:bg-[#ECEBE5] transition-colors cursor-pointer"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* TAB SWITCHER */}
          <div
            role="tablist"
            aria-label="Inventions"
            className="relative grid grid-cols-3 -mx-2 mt-1 border-t border-[#DAD8D0]/60 sm:border-0"
          >
            {INVENTIONS.map((inv, i) => {
              const isSelected = activeIdx === i
              return (
                <button
                  key={inv.tabId}
                  type="button"
                  role="tab"
                  id={inv.tabId}
                  aria-selected={isSelected}
                  aria-controls="pm-panel"
                  onClick={() => pickTab(i)}
                  className="flex flex-col items-start gap-0.5 min-h-[58px] sm:min-h-[64px] px-2 sm:px-3 pt-2.5 pb-3.5 sm:pb-4 border-0 bg-transparent rounded-t-[10px] text-left cursor-pointer font-inherit text-[#5A6472]"
                >
                  <span className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="tab-num font-['Source_Serif_4',Georgia,serif] italic text-[15px] sm:text-[17px] text-[#5A6472]">
                      {inv.num}
                    </span>
                    <span className="tab-name text-[13px] sm:text-[15.5px] font-semibold text-[#2B3644] line-clamp-1">
                      {inv.name}
                    </span>
                  </span>
                  <span className="text-[11.5px] sm:text-[13px] text-[#5A6472] truncate max-w-full hidden xs:block">
                    {inv.sub}
                  </span>
                </button>
              )
            })}

            {/* Sliding Underline Indicator */}
            <span
              className="tab-ind absolute left-0 bottom-[-1px] w-1/3 h-[3px] px-2 box-border"
              data-pos={activeIdx}
              aria-hidden="true"
            >
              <span className="block h-full rounded-t-[3px] bg-[#0B1B2B]" />
            </span>
          </div>
        </header>

        {/* SCROLLABLE BODY PANEL */}
        <div
          id="pm-panel"
          role="tabpanel"
          aria-labelledby={cur.tabId}
          ref={panelRef}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain scroll-smooth"
        >
          <div
            key={activeIdx}
            className={`${swapAnim} flex flex-wrap gap-8 lg:gap-10 p-4.5 sm:p-7 md:p-9`}
          >
            {/* READING COLUMN */}
            <div className="flex-[999_1_540px] min-w-0 flex flex-col gap-9">
              {/* Section: What it is */}
              <section aria-labelledby="pm-what" className="flex flex-col gap-3">
                <h3
                  id="pm-what"
                  className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(22px,2.6vw,32px)] font-medium leading-[1.18] tracking-[-0.01em] text-balance text-[#0B1B2B]"
                >
                  {cur.plain}
                </h3>
                <p className="m-0 font-['Source_Serif_4',Georgia,serif] italic text-[14.5px] sm:text-[15.5px] leading-[1.5] text-[#5A6472] text-pretty">
                  Formal title: {cur.title}
                </p>
              </section>

              {/* Section: The Problem */}
              <section id="pm-problem" aria-labelledby="pm-problem-h" className="flex flex-col gap-3.5">
                <span id="pm-problem-h" className="lbl text-[#0F766E]">
                  The problem
                </span>
                <p className="m-0 text-[16px] sm:text-[17px] text-[#2B3644] text-pretty">
                  {cur.problem}
                </p>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {cur.cons.map((con, idx) => (
                    <li
                      key={idx}
                      className="grid grid-cols-[20px_minmax(0,1fr)] gap-2 text-[14.5px] sm:text-[15px] text-[#2B3644]"
                    >
                      <span aria-hidden="true" className="text-[#B45309] font-bold">
                        !
                      </span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section: How it works */}
              <section id="pm-how" aria-labelledby="pm-how-h" className="flex flex-col gap-3.5">
                <span id="pm-how-h" className="lbl text-[#0F766E]">
                  How it works
                </span>
                <ol className="m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {cur.steps.map((st) => (
                    <li
                      key={st.i}
                      className="flex flex-col gap-2 p-4 rounded-[14px] bg-white border border-[#DAD8D0]"
                    >
                      <span
                        className="step-node flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#DAD8D0] bg-white text-[#5A6472] text-[13.5px] font-bold"
                        aria-hidden="true"
                        style={{ animationDelay: st.delay }}
                      >
                        {st.i}
                      </span>
                      <span className="text-[15.5px] font-semibold text-[#0B1B2B]">
                        {st.t}
                      </span>
                      <span className="text-[14px] text-[#5A6472] text-pretty">
                        {st.d}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Section: Try it */}
              <section id="pm-try" aria-labelledby="pm-try-h" className="flex flex-col gap-3.5">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <span id="pm-try-h" className="lbl text-[#0F766E]">
                    Try it
                  </span>
                  <span className="text-[13px] text-[#5A6472]">
                    Illustration with example data
                  </span>
                </div>

                {/* DEMO 1: REWIND */}
                {activeIdx === 0 && (
                  <div className="flex flex-col gap-4.5 p-4.5 sm:p-6 rounded-[18px] bg-white border border-[#DAD8D0]">
                    <div className="flex flex-col gap-1">
                      <span className="font-['Source_Serif_4',Georgia,serif] text-[20px] sm:text-[21px] font-medium text-[#0B1B2B]">
                        Rewind the chart
                      </span>
                      <span className="text-[14px] sm:text-[14.5px] text-[#5A6472]">
                        Drag to see the lower teeth as recorded on each date. The last entry corrects an earlier one without erasing it.
                      </span>
                    </div>

                    {/* 6 Teeth Graphic */}
                    <div
                      className="grid grid-cols-6 gap-2 max-w-[520px] w-full"
                      aria-live="polite"
                    >
                      {teeth.map((t) => (
                        <div key={t.n} className="flex flex-col items-center gap-1.5">
                          <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#5A6472]">
                            {t.n}
                          </span>
                          <span
                            className="tooth w-full max-w-[54px] aspect-[0.8] rounded-t-[12px] rounded-b-[18px] border-2"
                            aria-hidden="true"
                            style={{
                              backgroundColor: t.fill,
                              borderColor: t.edge
                            }}
                          />
                          <span className="text-[11.5px] sm:text-[12px] text-center text-[#2B3644] truncate w-full">
                            {t.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Slider */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="pm-rewind" className="text-[14px] sm:text-[14.5px] font-semibold text-[#0B1B2B]">
                        Chart as recorded on <span className="text-[#0F766E]">{rewindDate}</span>
                      </label>
                      <input
                        id="pm-rewind"
                        type="range"
                        min="0"
                        max="4"
                        step="1"
                        value={p1}
                        onChange={(e) => setP1(parseInt(e.target.value, 10) || 0)}
                        aria-valuetext={rewindDate}
                        className="w-full max-w-[520px] h-7 cursor-pointer m-0"
                      />
                    </div>

                    {/* Hash Chain Blocks */}
                    <ol
                      className="m-0 p-0 list-none flex flex-wrap gap-2"
                      aria-label="Hash chain"
                    >
                      {chainBlocks.map((b, i) => {
                        const on = i <= p1
                        const isCurrent = on && i === p1
                        return (
                          <li
                            key={b.title}
                            className="block flex flex-col gap-0.5 min-w-[96px] sm:min-w-[104px] p-2.5 sm:p-3 rounded-[10px] border"
                            style={{
                              backgroundColor: on ? (isCurrent ? '#0F766E' : '#ECF6F4') : '#FFFFFF',
                              color: on && isCurrent ? '#FFFFFF' : '#0B1B2B',
                              borderColor: on ? '#0F766E' : '#DAD8D0',
                              opacity: on ? 1 : 0.55
                            }}
                          >
                            <span className="text-[12px] sm:text-[12.5px] font-semibold">
                              {b.title}
                            </span>
                            <span className="text-[11.5px] sm:text-[12.5px]">
                              {b.note}
                            </span>
                          </li>
                        )
                      })}
                    </ol>

                    <p className="m-0 text-[13px] sm:text-[13.5px] text-[#5A6472]">
                      Each block is hashed with the one before it, so changing any past entry breaks every link after it.
                    </p>
                  </div>
                )}

                {/* DEMO 2: PROGRESSIVE 3D SCAN */}
                {activeIdx === 1 && (
                  <div className="flex flex-wrap items-center gap-6 p-4.5 sm:p-6 rounded-[18px] bg-white border border-[#DAD8D0]">
                    <div className="flex-1 basis-[260px] min-w-0 flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-['Source_Serif_4',Georgia,serif] text-[20px] sm:text-[21px] font-medium text-[#0B1B2B]">
                          Watch a scan arrive
                        </span>
                        <span className="text-[14px] sm:text-[14.5px] text-[#5A6472]">
                          The dentist starts reviewing at tier 1 while finer tiers load behind it.
                        </span>
                      </div>

                      <div role="group" aria-label="Level of detail" className="flex flex-wrap gap-2">
                        {TIERS_CONFIG.map((t, idx) => (
                          <button
                            key={t.name}
                            type="button"
                            aria-pressed={tier === idx}
                            onClick={() => setTier(idx)}
                            className="chip-btn min-h-[44px] px-4 rounded-full border-[1.5px] border-[#DAD8D0] bg-white font-semibold text-[14px] text-[#0B1B2B] cursor-pointer"
                          >
                            {t.name}
                          </button>
                        ))}
                      </div>

                      <p className="m-0 text-[14.5px] sm:text-[15px] text-[#2B3644]" aria-live="polite">
                        <strong>{curTier.name}:</strong> {curTier.d}
                      </p>

                      <div className="flex flex-col gap-2">
                        <span className="text-[13.5px] font-semibold text-[#0B1B2B]">
                          Clearance shading on the model
                        </span>
                        <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 text-[13px] sm:text-[13.5px] text-[#2B3644]">
                          <span className="inline-flex items-center gap-1.5">
                            <span aria-hidden="true" className="w-3 h-3 rounded-[3px] bg-[#B91C1C]" />
                            Under 1.0 mm: too shallow
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <span aria-hidden="true" className="w-3 h-3 rounded-[3px] bg-[#B45309]" />
                            1.0–1.5 mm: borderline
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <span aria-hidden="true" className="w-3 h-3 rounded-[3px] bg-[#15803D]" />
                            Over 1.5 mm: clear
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Dot Mesh Box */}
                    <div
                      aria-hidden="true"
                      className="flex-none w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] p-3.5 box-border rounded-[16px] bg-[#0B1B2B] grid content-center gap-[3px] mx-auto sm:mx-0"
                      style={{
                        gridTemplateColumns: `repeat(${curTier.cols}, minmax(0, 1fr))`
                      }}
                    >
                      {dots.map((d, i) => (
                        <span
                          key={i}
                          className="dot block aspect-square rounded-full"
                          style={{
                            backgroundColor: d.c,
                            animationDelay: d.delay
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* DEMO 3: GATED CASE */}
                {activeIdx === 2 && (
                  <div className="flex flex-col gap-4.5 p-4.5 sm:p-6 rounded-[18px] bg-white border border-[#DAD8D0]">
                    <div className="flex flex-wrap justify-between items-end gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="font-['Source_Serif_4',Georgia,serif] text-[20px] sm:text-[21px] font-medium text-[#0B1B2B]">
                          Move a crown case through the lab
                        </span>
                        <span className="text-[14px] sm:text-[14.5px] text-[#5A6472]">
                          Watch what the lab and the clinic each see at every stage.
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setCaseStage(0)}
                          className="btn btn-g min-h-[44px] px-4 rounded-full border-[1.5px] border-[#0B1B2B] bg-transparent text-[#0B1B2B] font-semibold text-[14px] cursor-pointer"
                        >
                          Reset
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (caseStage < 3) setCaseStage((s) => s + 1)
                          }}
                          disabled={caseStage >= 3}
                          className="btn min-h-[44px] px-4.5 rounded-full border-0 bg-[#0B1B2B] text-[#F6F5F1] font-semibold text-[14px] cursor-pointer disabled:opacity-45"
                        >
                          {caseStage >= 3
                            ? 'Case complete'
                            : `Advance to ${CASE_STAGES[caseStage + 1].toLowerCase()}`}
                        </button>
                      </div>
                    </div>

                    {/* Stage Rail */}
                    <ol
                      aria-label="Case stage"
                      className="m-0 p-0 list-none grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2"
                    >
                      {CASE_STAGES.map((nm, i) => {
                        const isCurrent = i === caseStage
                        const isPast = i < caseStage
                        return (
                          <li
                            key={nm}
                            aria-current={isCurrent ? 'step' : 'false'}
                            className="block p-2.5 rounded-[10px] text-center text-[12.5px] sm:text-[13px] font-semibold border"
                            style={{
                              backgroundColor: isCurrent ? '#0B1B2B' : isPast ? '#ECF6F4' : '#FFFFFF',
                              color: isCurrent ? '#F6F5F1' : '#0B1B2B',
                              borderColor: isCurrent ? '#0B1B2B' : isPast ? '#0F766E' : '#DAD8D0'
                            }}
                          >
                            {nm}
                          </li>
                        )
                      })}
                    </ol>

                    {/* Dual Timelines */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex flex-col gap-2 p-3.5 rounded-[12px] bg-[#F6F5F1]">
                        <span className="text-[13.5px] font-semibold text-[#0B1B2B]">
                          Lab timeline (internal)
                        </span>
                        <ul className="m-0 p-0 list-none flex flex-col gap-1.5" aria-live="polite">
                          {labEvents.map((l, i) => (
                            <li key={i} className="ev text-[13.5px] sm:text-[14px] text-[#2B3644]">
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-2 p-3.5 rounded-[12px] bg-[#F6F5F1]">
                        <span className="text-[13.5px] font-semibold text-[#0B1B2B]">
                          Clinic sees
                        </span>
                        <ul className="m-0 p-0 list-none flex flex-col gap-1.5" aria-live="polite">
                          {clinicEvents.map((l, i) => (
                            <li key={i} className="ev text-[13.5px] sm:text-[14px] text-[#2B3644]">
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Gated Chat Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pm-chat" className="text-[14px] font-semibold text-[#0B1B2B]">
                        Message the lab
                      </label>
                      <input
                        id="pm-chat"
                        type="text"
                        disabled={chatLocked}
                        placeholder={
                          chatLocked
                            ? 'Locked until the lab accepts the case'
                            : 'Type a message to the lab'
                        }
                        aria-describedby="pm-chat-note"
                        className="min-h-[44px] px-3.5 rounded-[10px] border-[1.5px] border-[#DAD8D0] text-[15px] text-[#0B1B2B] disabled:bg-[#ECEBE5] bg-white"
                      />
                      <span id="pm-chat-note" className="text-[13px] sm:text-[13.5px] text-[#5A6472]">
                        {chatLocked
                          ? 'Chat opens when the lab moves the case into production.'
                          : 'Chat is open: the lab has committed to this case.'}
                      </span>
                    </div>
                  </div>
                )}
              </section>

              {/* Section: What it claims */}
              <section id="pm-claims" aria-labelledby="pm-claims-h" className="flex flex-col gap-2.5">
                <span id="pm-claims-h" className="lbl text-[#0F766E]">
                  What it claims
                </span>
                <div className="flex flex-col border-t border-[#DAD8D0]">
                  {cur.claims.map((k) => (
                    <details key={k.n} className="border-b border-[#DAD8D0] group">
                      <summary className="grid grid-cols-[36px_minmax(0,1fr)_24px] items-center gap-3 min-h-[56px] py-1.5 cursor-pointer">
                        <span className="font-['Source_Serif_4',Georgia,serif] text-[20px] text-[#0F766E]">
                          {k.n}
                        </span>
                        <span className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-[15.5px] font-semibold text-[#0B1B2B]">
                            {k.head}
                          </span>
                          <span className="text-[13px] text-[#5A6472]">
                            {k.type}
                          </span>
                        </span>
                        <span
                          className="plus text-[22px] leading-none text-[#0F766E] text-center"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <p className="m-0 mb-4 ml-12 text-[14.5px] sm:text-[15px] leading-relaxed text-[#2B3644] text-pretty">
                        {k.d}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section: Why it is more than software */}
              <section
                id="pm-why"
                aria-labelledby="pm-why-h"
                className="flex flex-col gap-2.5 p-5 sm:p-5.5 rounded-[16px] bg-[#ECEBE5]"
              >
                <span id="pm-why-h" className="lbl text-[#0F766E]">
                  Why it is more than software
                </span>
                <p className="m-0 text-[14.5px] sm:text-[15px] text-[#2B3644] text-pretty">
                  Section 3(k) of the Patents Act excludes a computer program “per se”. {cur.why}
                </p>
                <p className="m-0 text-[13px] sm:text-[13.5px] text-[#5A6472]">
                  Reasoning follows the 2017 Guidelines for Computer Related Inventions and Ferid Allani v. Union of India (Delhi High Court, 2019). This is the drafter's argument, not a decision by the Patent Office.
                </p>
              </section>
            </div>

            {/* FACTS ASIDE COLUMN */}
            <aside
              aria-label="Specification facts"
              className="flex-[1_1_260px] min-w-0 flex flex-col gap-5.5"
            >
              {/* On this page Navigation */}
              <nav
                aria-label="On this page"
                className="flex flex-col gap-0.5 pb-4 border-b border-[#DAD8D0]"
              >
                <span className="lbl text-[#5A6472] pb-1.5">
                  On this page
                </span>
                <a
                  className="jump flex items-center min-h-[36px] text-[#0B1B2B] no-underline text-[15px]"
                  href="#pm-problem"
                >
                  The problem
                </a>
                <a
                  className="jump flex items-center min-h-[36px] text-[#0B1B2B] no-underline text-[15px]"
                  href="#pm-how"
                >
                  How it works
                </a>
                <a
                  className="jump flex items-center min-h-[36px] text-[#0B1B2B] no-underline text-[15px]"
                  href="#pm-try"
                >
                  Try it
                </a>
                <a
                  className="jump flex items-center min-h-[36px] text-[#0B1B2B] no-underline text-[15px]"
                  href="#pm-claims"
                >
                  What it claims
                </a>
                <a
                  className="jump flex items-center min-h-[36px] text-[#0B1B2B] no-underline text-[15px]"
                  href="#pm-why"
                >
                  Why it is more than software
                </a>
              </nav>

              {/* Specification Facts List */}
              <dl className="m-0 flex flex-col gap-3.5">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[13px] text-[#5A6472]">Status</dt>
                  <dd className="m-0 text-[15px] font-semibold text-[#0B1B2B]">
                    Drafted, not yet filed
                  </dd>
                </div>

                <div className="flex flex-col gap-0.5">
                  <dt className="text-[13px] text-[#5A6472]">Format</dt>
                  <dd className="m-0 text-[14.5px] sm:text-[15px] text-[#0B1B2B]">
                    Form 2 complete specification, Patents Act 1970 (Section 10, Rule 13)
                  </dd>
                </div>

                <div className="flex flex-col gap-0.5">
                  <dt className="text-[13px] text-[#5A6472]">Claims</dt>
                  <dd className="m-0 text-[15px] text-[#0B1B2B]">
                    5 claims, 1 independent
                  </dd>
                </div>

                <div className="flex flex-col gap-1.5">
                  <dt className="text-[13px] text-[#5A6472]">Classification (IPC)</dt>
                  {cur.ipc.map((c) => (
                    <dd
                      key={c.code}
                      className="m-0 flex flex-col p-2 sm:p-2.5 rounded-[10px] bg-white border border-[#DAD8D0]"
                    >
                      <span className="text-[14px] font-semibold text-[#0B1B2B]">{c.code}</span>
                      <span className="text-[12.5px] sm:text-[13px] text-[#5A6472]">{c.label}</span>
                    </dd>
                  ))}
                </div>
              </dl>

              {/* Targets Box */}
              <div className="flex flex-col gap-2 p-4 rounded-[14px] bg-white border border-[#DAD8D0]">
                <span className="text-[13px] text-[#5A6472]">
                  Targets stated in the specification
                </span>
                {cur.targets.map((m) => (
                  <div
                    key={m.l}
                    className="flex justify-between items-baseline gap-3 py-1.5 border-t border-[#ECEBE5]"
                  >
                    <span className="text-[13.5px] sm:text-[14px] text-[#2B3644]">{m.l}</span>
                    <span className="font-['Source_Serif_4',Georgia,serif] text-[17px] sm:text-[18px] font-semibold text-[#0B1B2B] whitespace-nowrap">
                      {m.v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5">
                <a
                  className="btn flex justify-center items-center gap-2 min-h-[48px] rounded-full bg-[#0B1B2B] text-[#F6F5F1] font-semibold text-[15px] no-underline"
                  href="mailto:suryanshu1520@gmail.com?subject=DCOS%20patent%20specifications%20PDF%20request"
                >
                  Read the full specification <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="btn btn-g flex justify-center items-center min-h-[48px] rounded-full border-[1.5px] border-[#0B1B2B] text-[#0B1B2B] font-semibold text-[15px] no-underline"
                  href="mailto:suryanshu1520@gmail.com?subject=Discuss%20DCOS%20patent%20specifications"
                >
                  Discuss this work
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
