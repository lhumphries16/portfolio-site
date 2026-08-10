import { Link } from 'react-router-dom';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { experience } from '../data/experience';

const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';
const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';
const [innerspec, mainstreamControls, mainstreamAutomation, gafRoads] = experience;

function ResponsibilityList({ items, tone = 'light' }: { items: readonly string[]; tone?: 'light' | 'dark' }) {
  return (
    <ul className="m-0 grid list-none gap-3 p-0">
      {items.map((item) => (
        <li
          key={item}
          className={`grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-relaxed ${
            tone === 'dark' ? 'text-steel' : 'text-carbon/74'
          }`}
        >
          <span className="mt-[0.72rem] h-px bg-orange" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExperiencePage() {
  return (
    <>
      <RouteMeta
        title="Engineering Experience | Tre Humphries"
        description="Corporate engineering experience across industrial equipment, automation, controls, telemetry, and field delivery."
      />

      <section id="top" className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail label="Experience" index="01" labelClassName="text-steel" />
            <h1 className={`${display} max-w-[8ch] text-[clamp(3.4rem,9vw,7.2rem)] text-bone`}>
              Corporate Engineering
            </h1>
          </div>
          <div className="grid gap-4 lg:max-w-[42rem]">
            <p className="m-0 text-[1.05rem] leading-relaxed text-steel">
              Professional engineering work delivered inside organizations across industrial equipment,
              controls, automation, data, and field operations.
            </p>
            <p className="m-0 text-base leading-relaxed text-steel">
              This is the record of systems delivered inside teams, not consulting offers and not
              independent R&amp;D.
            </p>
          </div>
        </div>
      </section>

      <section id={innerspec.id} className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="grid gap-5 lg:sticky lg:top-28">
            <SystemRail label={innerspec.years} index="01" labelClassName="text-carbon/66" />
            <h2 className={`${display} max-w-[10ch] text-[clamp(2.5rem,6vw,4.8rem)] text-carbon`}>
              {innerspec.company}
            </h2>
            <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/76">{innerspec.role}</p>
            <p className="m-0 max-w-[32rem] text-base leading-relaxed text-carbon/74">{innerspec.detail}</p>
            <p className={`${mono} text-orange`}>{innerspec.domains.join(' / ')}</p>
          </div>

          <div className="grid gap-6">
            <div className="min-h-[22rem] overflow-hidden bg-carbon md:min-h-[30rem] xl:min-h-[38rem]">
              <img
                className="h-full w-full object-cover"
                src={innerspec.image?.src}
                alt={innerspec.image?.alt ?? ''}
                loading="eager"
              />
            </div>
            {innerspec.image?.caption ? <p className={`${mono} text-carbon/44`}>{innerspec.image.caption}</p> : null}
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="grid gap-4">
                <p className={`${mono} text-cobalt`}>What the work required</p>
                <ResponsibilityList items={innerspec.responsibilities} />
              </div>
              <div className="grid gap-4 border-t border-carbon/12 pt-4 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                <p className={`${mono} text-cobalt`}>Technical context</p>
                <p className="m-0 text-sm leading-relaxed text-carbon/74">
                  {innerspec.summary}
                </p>
                <p className={`${mono} text-carbon/48`}>{innerspec.technologies.join(' / ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id={mainstreamControls.id}
        className="bg-cobalt px-4 py-12 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16"
      >
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-start">
          <div className="grid gap-3">
            <div className="min-h-[22rem] overflow-hidden bg-carbon md:min-h-[30rem] xl:min-h-[40rem]">
              <img
                className="h-full w-full object-cover"
                src={mainstreamControls.image?.src}
                alt={mainstreamControls.image?.alt ?? ''}
                loading="lazy"
              />
            </div>
            {mainstreamControls.image?.caption ? (
              <p className={`${mono} text-bone/64`}>{mainstreamControls.image.caption}</p>
            ) : null}
          </div>

          <div className="grid gap-6 bg-carbon px-5 py-6 md:px-7 md:py-8">
            <SystemRail label={mainstreamControls.years} index="02" labelClassName="text-steel" />
            <div className="grid gap-2">
              <h2 className={`${display} max-w-[10ch] text-[clamp(2.5rem,5vw,4.6rem)] text-bone`}>
                {mainstreamControls.company}
              </h2>
              <p className="m-0 text-[1rem] tracking-[-0.02em] text-steel">{mainstreamControls.role}</p>
            </div>
            <p className="m-0 text-base leading-relaxed text-steel">{mainstreamControls.detail}</p>
            <p className={`${mono} text-bone/72`}>{mainstreamControls.domains.join(' / ')}</p>
            <ResponsibilityList items={mainstreamControls.responsibilities} tone="dark" />
            <div className="grid gap-2 border-t border-bone/10 pt-4">
              <p className={`${mono} text-cobalt`}>Technical context</p>
              <p className="m-0 text-sm leading-relaxed text-steel">{mainstreamControls.summary}</p>
              <p className={`${mono} text-steel`}>{mainstreamControls.technologies.join(' / ')}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id={mainstreamAutomation.id}
        className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16"
      >
        <div className="mx-auto grid max-w-[1700px] gap-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
            <div className="grid gap-4">
              <SystemRail label={mainstreamAutomation.years} index="03" labelClassName="text-carbon/66" />
              <h2 className={`${display} max-w-[10ch] text-[clamp(2.6rem,6vw,5rem)] text-carbon`}>
                {mainstreamAutomation.company}
              </h2>
              <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/76">{mainstreamAutomation.role}</p>
            </div>
            <p className="m-0 max-w-[44rem] text-[1.02rem] leading-relaxed text-carbon/74">
              {mainstreamAutomation.detail}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start">
            <div className="grid gap-5 border-t border-carbon/12 pt-5">
              <p className={`${mono} text-orange`}>{mainstreamAutomation.domains.join(' / ')}</p>
              <ResponsibilityList items={mainstreamAutomation.responsibilities} />
              <div className="grid gap-2 border-t border-carbon/12 pt-4">
                <p className={`${mono} text-cobalt`}>Technical context</p>
                <p className="m-0 text-sm leading-relaxed text-carbon/72">
                  {mainstreamAutomation.summary}
                </p>
                <p className={`${mono} text-carbon/46`}>{mainstreamAutomation.technologies.join(' / ')}</p>
              </div>
            </div>

            <div className="grid gap-3 lg:-mt-12">
              <div className="min-h-[20rem] overflow-hidden bg-carbon md:min-h-[26rem] xl:min-h-[34rem]">
                <img
                  className="h-full w-full object-cover object-top"
                  src={mainstreamAutomation.image?.src}
                  alt={mainstreamAutomation.image?.alt ?? ''}
                  loading="lazy"
                />
              </div>
              {mainstreamAutomation.image?.caption ? (
                <p className={`${mono} text-carbon/44`}>{mainstreamAutomation.image.caption}</p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id={gafRoads.id} className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <div className="grid gap-6 lg:sticky lg:top-28">
            <SystemRail label={gafRoads.years} index="04" labelClassName="text-steel" />
            <div className="grid gap-2">
              <h2 className={`${display} max-w-[9ch] text-[clamp(2.8rem,7vw,5.8rem)] text-bone`}>
                {gafRoads.company}
              </h2>
              <p className="m-0 text-[1rem] tracking-[-0.02em] text-steel">{gafRoads.role}</p>
            </div>
            <p className="m-0 max-w-[34rem] text-[1.04rem] leading-relaxed text-steel">{gafRoads.detail}</p>
            <p className={`${mono} text-cobalt`}>{gafRoads.domains.join(' / ')}</p>
            <Link className={`${mono} text-bone transition-colors duration-200 hover:text-cobalt`} to="/consulting">
              Consulting builds on this range
            </Link>
          </div>

          <div className="grid gap-7">
            <div className="grid gap-3">
              <div className="min-h-[20rem] overflow-hidden bg-cobalt md:min-h-[28rem] xl:min-h-[36rem]">
                <img
                  className="h-full w-full object-cover"
                  src={gafRoads.image?.src}
                  alt={gafRoads.image?.alt ?? ''}
                  loading="lazy"
                />
              </div>
              {gafRoads.image?.caption ? <p className={`${mono} text-steel`}>{gafRoads.image.caption}</p> : null}
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="grid gap-4 border-t border-bone/10 pt-5">
                <p className={`${mono} text-cobalt`}>What the work required</p>
                <ResponsibilityList items={gafRoads.responsibilities} tone="dark" />
              </div>
              <div className="grid gap-4 border-t border-bone/10 pt-5">
                <p className={`${mono} text-cobalt`}>Technical context</p>
                <p className="m-0 text-sm leading-relaxed text-steel">{gafRoads.summary}</p>
                <p className={`${mono} text-steel`}>{gafRoads.technologies.join(' / ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
