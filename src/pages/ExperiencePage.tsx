import { Link } from 'react-router-dom';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { experience } from '../data/experience';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.68rem] uppercase tracking-[0.18em]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.03em]';
const recordTitle = 'text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold tracking-[-0.03em]';
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

      <section id="top" className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-end`}>
          <div className="grid gap-4">
            <SystemRail label="Experience" index="01" labelClassName="text-steel" />
            <h1 className={`${heroDisplay} max-w-[8ch] text-[clamp(3rem,7vw,5.4rem)] text-bone`}>
              Corporate Engineering
            </h1>
          </div>
          <div className="grid gap-4 lg:max-w-[44rem]">
            <p className="m-0 text-[1.04rem] leading-relaxed text-steel">
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

      <section id={innerspec.id} className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start`}>
          <div className="grid gap-4">
            <SystemRail label={innerspec.years} index="01" labelClassName="text-carbon/62" />
            <h2 className={`${recordTitle} text-carbon`}>{innerspec.company}</h2>
            <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/74">{innerspec.role}</p>
            <p className="m-0 max-w-[32rem] text-base leading-relaxed text-carbon/74">{innerspec.detail}</p>
            <p className={`${mono} text-orange`}>{innerspec.domains.join(' / ')}</p>
          </div>

          <div className="grid gap-6">
            <div className="aspect-[16/10] overflow-hidden bg-carbon">
              <img
                className="h-full w-full object-cover object-center"
                src={innerspec.image?.src}
                alt={innerspec.image?.alt ?? ''}
                loading="eager"
              />
            </div>
            {innerspec.image?.caption ? <p className={`${mono} text-carbon/44`}>{innerspec.image.caption}</p> : null}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="grid gap-4">
                <p className={`${mono} text-cobalt`}>What the work required</p>
                <ResponsibilityList items={innerspec.responsibilities} />
              </div>
              <div className="grid gap-4 border-t border-carbon/12 pt-4 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                <p className={`${mono} text-cobalt`}>Technical context</p>
                <p className="m-0 text-sm leading-relaxed text-carbon/74">{innerspec.summary}</p>
                <p className={`${mono} text-carbon/48`}>{innerspec.technologies.join(' / ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={mainstreamControls.id} className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.86fr)] lg:items-start`}>
          <div className="grid gap-3">
            <div className="aspect-[16/10] overflow-hidden bg-bone/6">
              <img
                className="h-full w-full object-cover object-[52%_48%]"
                src={mainstreamControls.image?.src}
                alt={mainstreamControls.image?.alt ?? ''}
                loading="lazy"
              />
            </div>
            {mainstreamControls.image?.caption ? (
              <p className={`${mono} text-steel`}>{mainstreamControls.image.caption}</p>
            ) : null}
          </div>

          <div className="grid gap-5 border-t border-bone/10 pt-5 lg:border-t-0 lg:pt-0">
            <SystemRail label={mainstreamControls.years} index="02" labelClassName="text-steel" />
            <div className="grid gap-2">
              <h2 className={`${recordTitle} text-bone`}>{mainstreamControls.company}</h2>
              <p className="m-0 text-[1rem] tracking-[-0.02em] text-steel">{mainstreamControls.role}</p>
            </div>
            <p className="m-0 text-base leading-relaxed text-steel">{mainstreamControls.detail}</p>
            <p className={`${mono} text-cobalt`}>{mainstreamControls.domains.join(' / ')}</p>
            <ResponsibilityList items={mainstreamControls.responsibilities} tone="dark" />
            <div className="grid gap-2 border-t border-bone/10 pt-4">
              <p className={`${mono} text-cobalt`}>Technical context</p>
              <p className="m-0 text-sm leading-relaxed text-steel">{mainstreamControls.summary}</p>
              <p className={`${mono} text-steel`}>{mainstreamControls.technologies.join(' / ')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id={mainstreamAutomation.id} className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-start`}>
          <div className="grid gap-4">
            <SystemRail label={mainstreamAutomation.years} index="03" labelClassName="text-carbon/62" />
            <h2 className={`${recordTitle} text-carbon`}>{mainstreamAutomation.company}</h2>
            <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/74">{mainstreamAutomation.role}</p>
            <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/74">{mainstreamAutomation.detail}</p>
            <p className={`${mono} text-orange`}>{mainstreamAutomation.domains.join(' / ')}</p>
          </div>

          <div className="grid gap-6">
            <div className="aspect-[4/3] overflow-hidden border border-carbon/12 bg-carbon/4">
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
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="grid gap-4">
                <p className={`${mono} text-cobalt`}>What the work required</p>
                <ResponsibilityList items={mainstreamAutomation.responsibilities} />
              </div>
              <div className="grid gap-4 border-t border-carbon/12 pt-4 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                <p className={`${mono} text-cobalt`}>Technical context</p>
                <p className="m-0 text-sm leading-relaxed text-carbon/72">{mainstreamAutomation.summary}</p>
                <p className={`${mono} text-carbon/46`}>{mainstreamAutomation.technologies.join(' / ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={gafRoads.id} className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start`}>
          <div className="grid gap-4">
            <SystemRail label={gafRoads.years} index="04" labelClassName="text-steel" />
            <h2 className={`${recordTitle} text-bone`}>{gafRoads.company}</h2>
            <p className="m-0 text-[1rem] tracking-[-0.02em] text-steel">{gafRoads.role}</p>
            <p className="m-0 max-w-[32rem] text-base leading-relaxed text-steel">{gafRoads.detail}</p>
            <p className={`${mono} text-cobalt`}>{gafRoads.domains.join(' / ')}</p>
            <Link className={`${mono} text-bone transition-colors duration-200 hover:text-cobalt`} to="/consulting">
              Consulting builds on this range
            </Link>
          </div>

          <div className="grid gap-6">
            <div className="aspect-[16/10] overflow-hidden border border-bone/10 bg-cobalt/8">
              <img
                className="h-full w-full object-cover object-center"
                src={gafRoads.image?.src}
                alt={gafRoads.image?.alt ?? ''}
                loading="lazy"
              />
            </div>
            {gafRoads.image?.caption ? <p className={`${mono} text-steel`}>{gafRoads.image.caption}</p> : null}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="grid gap-4">
                <p className={`${mono} text-cobalt`}>What the work required</p>
                <ResponsibilityList items={gafRoads.responsibilities} tone="dark" />
              </div>
              <div className="grid gap-4 border-t border-bone/10 pt-4 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
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
