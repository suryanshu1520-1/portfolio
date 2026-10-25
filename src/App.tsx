import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import PatentModal from './components/PatentModal'
import { TarkShowcase } from './components/work/TarkShowcase'
import { TenderTraceShowcase } from './components/work/TenderTraceShowcase'
import { FasalShowcase } from './components/work/FasalShowcase'
import { DcosShowcase } from './components/work/DcosShowcase'
import { PlusOneShowcase } from './components/work/PlusOneShowcase'
import {
  LIVE_INDEX,
  PROOF_ITEMS,
  OFFERS_HIRE,
  OFFERS_BUILD,
  TIMELINE,
} from './data/redesignData'

export default function App() {
  const [path, setPath] = useState<'hire' | 'build'>('hire')
  const [copied, setCopied] = useState(false)
  const [patentModalOpen, setPatentModalOpen] = useState(false)
  const [selectedPatentId, setSelectedPatentId] = useState<string | undefined>(undefined)

  const handleOpenPatents = (id?: string) => {
    setSelectedPatentId(id)
    setPatentModalOpen(true)
  }

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText('suryanshu1520@gmail.com')
    } catch {}
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isHire = path === 'hire'
  const isBuild = path === 'build'

  const projectOrder = isHire
    ? ['tark', 'fasal', 'tender', 'dcos']
    : ['tark', 'tender', 'dcos', 'fasal']

  const renderProject = (id: string) => {
    switch (id) {
      case 'tark':
        return <TarkShowcase key="tark" />
      case 'fasal':
        return <FasalShowcase key="fasal" />
      case 'tender':
        return <TenderTraceShowcase key="tender" />
      case 'dcos':
        return <DcosShowcase key="dcos" onOpenPatents={handleOpenPatents} />
      default:
        return null
    }
  }

  const offers = isHire ? OFFERS_HIRE : OFFERS_BUILD

  return (
    <div className="sc-root min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-[#DAD8D0] bg-[#F6F5F1]/85 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3.5 sm:px-8"
        >
          <a
            href="#top"
            className="flex items-center gap-3 text-[#0B1B2B] no-underline hover:opacity-90"
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#0B1B2B] font-['Source_Serif_4',Georgia,serif] text-base font-semibold text-[#F6F5F1]"
            >
              SC
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.005em]">
              Suryanshu Chaturvedi
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
            <a className="ul text-[#0B1B2B]" href="#work">
              Work
            </a>
            <a className="ul text-[#0B1B2B]" href="#approach">
              Approach
            </a>
            <a className="ul text-[#0B1B2B]" href="#about">
              About
            </a>
            <button
              onClick={() => handleOpenPatents()}
              className="font-mono text-xs text-[#0F766E] hover:underline"
            >
              Patents (CRIs)
            </button>
            <a
              className="btn btn-p inline-flex min-h-[40px] items-center rounded-full bg-[#0B1B2B] px-4.5 font-semibold text-[#F6F5F1] no-underline"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-x-14 gap-y-10 px-4 pt-12 pb-16 sm:px-8 md:pt-20 lg:grid-cols-12"
      >
        <div className="flex flex-col gap-6 lg:col-span-12">
          <div className="rise flex flex-wrap items-center gap-2.5 text-[13.5px] font-semibold italic tracking-[0.02em] uppercase text-[#5A6472]">
            <span
              className="live inline-block h-2 w-2 rounded-full bg-[#0F766E]"
              aria-hidden="true"
            />
            <span>Open to roles &amp; projects</span>
            <span aria-hidden="true">/</span>
            <span>New Delhi · IST</span>
          </div>

          <h1 className="m-0 max-w-[1180px] font-['Source_Serif_4',Georgia,serif] text-[clamp(40px,5.8vw,86px)] font-medium leading-[1.02] tracking-[-0.022em] text-[#0B1B2B]">
            <span className="mask">
              <span style={{ animationDelay: '80ms' }}>
                I evaluate programmes &amp; help
              </span>
            </span>
            <span className="mask">
              <span style={{ animationDelay: '190ms' }}>
                build the <em className="italic text-[#0F766E]">systems</em> that run them.
              </span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-7 lg:col-span-7">
          <p
            className="rise m-0 max-w-[560px] text-[clamp(17px,1.35vw,19px)] leading-[1.55] text-[#2B3644]"
            style={{ animationDelay: '420ms' }}
          >
            Policy researcher (MPP, NLSIU) and self-taught engineer. I design M&amp;E frameworks,
            work with large public datasets, and ship the software that turns them into decisions.
          </p>

          <div
            className="rise flex flex-col gap-3.5"
            style={{ animationDelay: '540ms' }}
          >
            <span id="path-label" className="lbl text-[#5A6472]">
              What brings you here?
            </span>
            <div
              className="seg relative grid w-full max-w-[440px] grid-cols-2 rounded-full border border-[#DAD8D0] bg-[#ECEBE5] p-1"
              role="group"
              aria-labelledby="path-label"
            >
              <span
                className="seg-ind absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-[#0B1B2B]"
                data-pos={path}
                aria-hidden="true"
              />
              <button
                type="button"
                aria-pressed={isHire}
                onClick={() => setPath('hire')}
                className="relative z-10 min-h-[46px] cursor-pointer rounded-full border-0 bg-transparent text-[15px] font-semibold"
              >
                I'm hiring
              </button>
              <button
                type="button"
                aria-pressed={isBuild}
                onClick={() => setPath('build')}
                className="relative z-10 min-h-[46px] cursor-pointer rounded-full border-0 bg-transparent text-[15px] font-semibold"
              >
                I need something built
              </button>
            </div>

            {isHire && (
              <div className="swap flex flex-col gap-4.5 pt-2">
                <p className="m-0 max-w-[520px] text-[#2B3644]">
                  Looking for data-for-development roles where evaluation meets engineering:
                  MEL, research, or policy-tech. New Delhi, hybrid or remote.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="btn btn-p inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-[#0B1B2B] px-6 font-semibold text-[#F6F5F1] no-underline"
                    href="mailto:suryanshu1520@gmail.com?subject=Role%20opportunity"
                  >
                    Email me <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="btn btn-g inline-flex min-h-[52px] items-center gap-2.5 rounded-full border-[1.5px] border-[#0B1B2B] px-5.5 font-semibold text-[#0B1B2B] no-underline"
                    href="https://www.linkedin.com/in/suryanshu-chaturvedi-5765b51a4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            )}

            {isBuild && (
              <div className="swap flex flex-col gap-4.5 pt-2">
                <p className="m-0 max-w-[520px] text-[#2B3644]">
                  Available worldwide for intelligence pipelines, M&amp;E systems, dashboards
                  and evaluations. Scoped, built and documented end to end.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="btn btn-p inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-[#0B1B2B] px-6 font-semibold text-[#F6F5F1] no-underline"
                    href="mailto:suryanshu1520@gmail.com?subject=Project%20enquiry"
                  >
                    Start a project <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="btn btn-g inline-flex min-h-[52px] items-center gap-2.5 rounded-full border-[1.5px] border-[#0B1B2B] px-5.5 font-semibold text-[#0B1B2B] no-underline"
                    href="#services"
                  >
                    What I take on <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live systems index panel */}
        <aside
          className="rise rounded-[22px] bg-[#0B1B2B] px-6.5 py-2.5 text-[#E6ECF2] shadow-2xl lg:col-span-5"
          style={{ animationDelay: '660ms' }}
          aria-label="Live systems"
        >
          {LIVE_INDEX.map((s) => (
            <a
              key={s.name}
              className="live-row grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-3 border-b border-[#22384E] py-4 text-[#E6ECF2] no-underline last:border-b-0"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-mono text-[13px] font-semibold text-[#9FB0C2]">
                {s.n}
              </span>
              <span className="flex flex-col min-w-0">
                <span className="font-['Source_Serif_4',Georgia,serif] text-[22px] font-medium tracking-[-0.01em]">
                  {s.name}
                </span>
                <span className="text-[14px] text-[#9FB0C2]">{s.what}</span>
              </span>
              <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#5CC8B8]">
                {s.host} <span className="arr" aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </aside>
      </section>

      {/* PROOF */}
      <section
        aria-label="At a glance"
        className="mx-auto max-w-[1280px] px-4 pt-2 pb-14 sm:px-8"
      >
        <div className="rv-line h-px w-full bg-[#0B1B2B]" aria-hidden="true" />
        <div className="grid grid-cols-1 gap-7 pt-7 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_ITEMS.map((k) => (
            <div key={k.v} className="rv flex flex-col gap-2">
              <span className="font-['Source_Serif_4',Georgia,serif] text-[clamp(36px,3.6vw,52px)] font-medium leading-none tracking-[-0.02em] text-[#0B1B2B]">
                {k.v}
              </span>
              <span className="text-[15px] leading-snug text-[#5A6472]">{k.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div
        className="mqwrap overflow-hidden border-y border-[#DAD8D0] bg-[#ECEBE5] py-4.5"
        aria-hidden="true"
      >
        <div className="mq font-['Source_Serif_4',Georgia,serif] text-[26px] font-normal italic whitespace-nowrap text-[#2B3644]">
          <span className="pr-10">
            Intelligence pipelines <span className="text-[#0F766E] not-italic">·</span>{' '}
            Monitoring &amp; evaluation <span className="text-[#0F766E] not-italic">·</span>{' '}
            Public procurement analytics <span className="text-[#0F766E] not-italic">·</span>{' '}
            Living-income benchmarking <span className="text-[#0F766E] not-italic">·</span>{' '}
            Clinical record systems <span className="text-[#0F766E] not-italic">·</span>{' '}
            Data with provenance <span className="text-[#0F766E] not-italic">·</span>
          </span>
          <span className="pr-10">
            Intelligence pipelines <span className="text-[#0F766E] not-italic">·</span>{' '}
            Monitoring &amp; evaluation <span className="text-[#0F766E] not-italic">·</span>{' '}
            Public procurement analytics <span className="text-[#0F766E] not-italic">·</span>{' '}
            Living-income benchmarking <span className="text-[#0F766E] not-italic">·</span>{' '}
            Clinical record systems <span className="text-[#0F766E] not-italic">·</span>{' '}
            Data with provenance <span className="text-[#0F766E] not-italic">·</span>
          </span>
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="bg-[#0B1B2B] text-[#E6ECF2]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 py-[clamp(72px,9vw,128px)] sm:px-8">
          <div className="rv flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[780px] flex-col gap-3.5">
              <span className="lbl text-[#5CC8B8]">Selected Systems &amp; Evidence Engines</span>
              <h2 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(34px,4.4vw,60px)] font-medium leading-[1.06] tracking-[-0.02em]">
                Each one started as a question someone couldn't answer.
              </h2>
            </div>
            <p className="m-0 max-w-[360px] text-[15px] leading-relaxed text-[#9FB0C2]">
              Live policy intelligence, forensic civic auditing, rural econometric M&amp;E, and patented clinical architectures. Built with provable mathematical and statutory guarantees.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {projectOrder.map((id) => renderProject(id))}
            <PlusOneShowcase />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="approach"
        className="mx-auto flex max-w-[1280px] flex-col gap-11 px-4 py-[clamp(72px,9vw,128px)] sm:px-8"
      >
        <div className="rv flex max-w-[780px] flex-col gap-3.5">
          <span className="lbl text-[#0F766E]">Approach</span>
          <h2 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(34px,4.2vw,56px)] font-medium leading-[1.06] tracking-[-0.02em] text-[#0B1B2B]">
            Policy questions first. Software second. Evidence throughout.
          </h2>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rv flex flex-col gap-3 border-t-2 border-[#0B1B2B] pt-5.5">
            <span className="font-['Source_Serif_4',Georgia,serif] text-[22px] italic text-[#0F766E]">
              i.
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[28px] font-medium tracking-[-0.01em] text-[#0B1B2B]">
              Frame the decision
            </h3>
            <p className="m-0 text-[16px] leading-relaxed text-[#2B3644]">
              Start from what someone has to decide, then work back to the indicators and data that
              would change their mind.
            </p>
          </li>
          <li className="rv flex flex-col gap-3 border-t-2 border-[#0B1B2B] pt-5.5">
            <span className="font-['Source_Serif_4',Georgia,serif] text-[22px] italic text-[#0F766E]">
              ii.
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[28px] font-medium tracking-[-0.01em] text-[#0B1B2B]">
              Build the instrument
            </h3>
            <p className="m-0 text-[16px] leading-relaxed text-[#2B3644]">
              A results framework, a field survey, a data pipeline or a full application. Whatever
              answers the question, built to production standard.
            </p>
          </li>
          <li className="rv flex flex-col gap-3 border-t-2 border-[#0B1B2B] pt-5.5">
            <span className="font-['Source_Serif_4',Georgia,serif] text-[22px] italic text-[#0F766E]">
              iii.
            </span>
            <h3 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[28px] font-medium tracking-[-0.01em] text-[#0B1B2B]">
              Make every number traceable
            </h3>
            <p className="m-0 text-[16px] leading-relaxed text-[#2B3644]">
              Automated quality checks, reproducible corrections and provenance on every batch, so
              findings hold up when they are challenged.
            </p>
          </li>
        </ol>
      </section>

      {/* SERVICES / ROLES (Path-aware) */}
      <section id="services" className="mx-auto max-w-[1280px] px-4 pb-[clamp(72px,9vw,120px)] sm:px-8">
        <div className="rv grid grid-cols-1 gap-x-14 gap-y-9 rounded-[26px] bg-[#ECEBE5] p-[clamp(24px,4vw,56px)] lg:grid-cols-2">
          {isHire ? (
            <div className="swap flex flex-col gap-3.5">
              <span className="lbl text-[#0F766E]">For hiring teams</span>
              <h2 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.06] tracking-[-0.02em] text-[#0B1B2B]">
                Roles where I add the most
              </h2>
              <p className="m-0 text-[16px] text-[#2B3644]">
                An evaluator who can also build the system, and an engineer who knows what the indicator is for.
              </p>
            </div>
          ) : (
            <div className="swap flex flex-col gap-3.5">
              <span className="lbl text-[#0F766E]">For clients</span>
              <h2 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.06] tracking-[-0.02em] text-[#0B1B2B]">
                What I take on
              </h2>
              <p className="m-0 text-[16px] text-[#2B3644]">
                One person from the research question to the deployed tool, with the documentation to hand it over.
              </p>
            </div>
          )}

          <div className="flex flex-col">
            {offers.map((o) => (
              <div
                key={o.n}
                className="swap grid grid-cols-[40px_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-[#DAD8D0] py-4.5 last:border-b-0"
              >
                <span className="row-span-2 font-['Source_Serif_4',Georgia,serif] text-[20px] italic text-[#0F766E]">
                  {o.n}
                </span>
                <span className="font-['Source_Serif_4',Georgia,serif] text-[23px] font-medium tracking-[-0.01em] text-[#0B1B2B]">
                  {o.t}
                </span>
                <span className="text-[15px] leading-relaxed text-[#2B3644]">{o.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-[#DAD8D0]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-18 gap-y-12 px-4 py-[clamp(72px,9vw,120px)] sm:px-8 lg:grid-cols-2">
          <div className="rv flex flex-col gap-5">
            <span className="lbl text-[#0F766E]">About</span>
            <h2 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(32px,3.8vw,52px)] font-medium leading-[1.06] tracking-[-0.02em] text-[#0B1B2B]">
              Trained in public policy. Taught myself to build.
            </h2>
            <p className="m-0 leading-relaxed text-[#2B3644]">
              I've designed M&amp;E frameworks and indicators, monitored CSR portfolios, and run field
              data collection in capacity-constrained states. Along the way I started writing the
              software those programmes were missing, and kept going.
            </p>
            <p className="m-0 leading-relaxed text-[#2B3644]">
              I work with NFHS-5, NSS-HCES, WHO and NIN data, and I'm most useful where a team needs both
              the evaluation logic and the system that carries it. Outside production, I have drafted
              3 complete Form 2 patent specifications in distributed event stores and medical 3D ingestion.
            </p>
            <p className="m-0 text-[14px] text-[#5A6472]">
              Hindi · Awadhi · English · Bhojpuri (conversational)
            </p>
          </div>

          <div className="flex flex-col">
            {TIMELINE.map((e) => (
              <div
                key={e.org + e.when}
                className="rv grid grid-cols-[minmax(0,1fr)_auto] gap-x-5 gap-y-1 border-b border-[#DAD8D0] py-5 last:border-b-0"
              >
                <span className="text-[17px] font-semibold text-[#0B1B2B]">{e.org}</span>
                <span className="text-right text-[14px] text-[#5A6472]">{e.when}</span>
                <span className="col-span-2 text-[15px] leading-relaxed text-[#2B3644]">{e.what}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#0B1B2B] text-[#E6ECF2]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[30%] -right-[10%] aspect-square w-[60%] rounded-full border border-[#22384E]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[6%] right-[2%] aspect-square w-[36%] rounded-full border border-[#22384E]"
        />

        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 px-4 py-[clamp(80px,10vw,140px)] sm:px-8">
          <div className="rv flex flex-col gap-4">
            <span className="lbl text-[#5CC8B8]">Contact</span>
            <h2 className="m-0 font-['Source_Serif_4',Georgia,serif] text-[clamp(48px,8vw,116px)] font-medium leading-[0.98] tracking-[-0.03em]">
              Let's talk.
            </h2>
            <p className="m-0 max-w-[560px] text-[18px] text-[#9FB0C2]">
              A role, a project, or a dataset that needs a second look? Email is the fastest way to
              reach me.
            </p>
          </div>

          <div className="rv flex flex-wrap items-center gap-x-5 gap-y-3.5">
            <a
              className="mail font-['Source_Serif_4',Georgia,serif] text-[clamp(26px,4vw,52px)] font-normal tracking-[-0.015em] text-[#E6ECF2] underline decoration-[#22384E] underline-offset-8 transition-colors hover:text-[#5CC8B8]"
              href="mailto:suryanshu1520@gmail.com"
            >
              suryanshu1520@gmail.com
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-live="polite"
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-[#22384E] bg-transparent px-4 text-[14px] font-medium text-[#E6ECF2] transition-colors hover:border-[#5CC8B8]"
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="12" height="12" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
              <span>{copied ? 'Copied' : 'Copy email'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="ctile rv flex flex-col justify-between gap-5 rounded-[16px] border border-[#22384E] p-5 text-[#E6ECF2] no-underline"
              href="https://www.linkedin.com/in/suryanshu-chaturvedi-5765b51a4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lbl flex justify-between text-[#9FB0C2]">
                LinkedIn <span className="text-[#5CC8B8]" aria-hidden="true">↗</span>
              </span>
              <span className="text-[17px] font-medium">Career history &amp; references</span>
            </a>

            <a
              className="ctile rv flex flex-col justify-between gap-5 rounded-[16px] border border-[#22384E] p-5 text-[#E6ECF2] no-underline"
              href="https://github.com/suryanshu1520-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lbl flex justify-between text-[#9FB0C2]">
                GitHub <span className="text-[#5CC8B8]" aria-hidden="true">↗</span>
              </span>
              <span className="text-[17px] font-medium">@suryanshu1520-1: all the code</span>
            </a>

            <button
              type="button"
              onClick={() => handleOpenPatents()}
              className="ctile rv flex flex-col justify-between gap-5 rounded-[16px] border border-[#22384E] p-5 text-left text-[#E6ECF2] cursor-pointer"
            >
              <span className="lbl flex justify-between text-[#9FB0C2]">
                Patents <span className="text-[#5CC8B8]" aria-hidden="true">↗</span>
              </span>
              <span className="text-[17px] font-medium">Form 2 Specifications (CRIs)</span>
            </button>
          </div>

          <footer className="mt-6 flex flex-wrap justify-between gap-3 border-t border-[#22384E] pt-7 text-[13px] text-[#9FB0C2]">
            <span>© 2026 Suryanshu Chaturvedi · New Delhi</span>
            <a className="ul text-[#9FB0C2]" href="#top">
              Back to top ↑
            </a>
          </footer>
        </div>
      </section>

      {/* Patent modal component */}
      <PatentModal
        isOpen={patentModalOpen}
        onClose={() => setPatentModalOpen(false)}
        initialPatentId={selectedPatentId}
      />

      <Analytics />
    </div>
  )
}
