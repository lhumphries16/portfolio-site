import { Link } from 'react-router-dom';
import { BrowserPreview } from '../components/BrowserPreview';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { clientWork } from '../data/clientWork';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.68rem] uppercase tracking-[0.18em]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.03em]';
const recordTitle = 'text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold tracking-[-0.03em]';
const [allSeasons, homeEms, scopedEngineering] = clientWork;

export function ClientWorkPage() {
  return (
    <>
      <RouteMeta
        title="Client Work | Tre Humphries"
        description="Independent client work across web delivery, operational tooling, and scoped technical engagements."
      />

      <section id="top" className="bg-cobalt px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-end`}>
          <div className="grid gap-4">
            <SystemRail label="Client Work" index="01" labelClassName="text-bone/76" lineClassName="bg-carbon" />
            <h1 className={`${heroDisplay} max-w-[9ch] text-[clamp(3rem,7vw,5.4rem)] text-bone`}>
              Independent delivery for paying clients.
            </h1>
          </div>
          <div className="grid gap-4 lg:max-w-[42rem]">
            <p className="m-0 text-[1.04rem] leading-relaxed text-bone/86">
              This includes websites, scoped engineering work, and other paid delivery where the
              client needed something useful, operable, and cleanly handed off.
            </p>
            <p className="m-0 text-base leading-relaxed text-bone/78">
              It is not an agency pitch. It is a durable record of independent work that had to
              function after launch.
            </p>
          </div>
        </div>
      </section>

      <section id={allSeasons.id} className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-start`}>
          <div className="grid gap-4">
            <SystemRail label={allSeasons.years} index="02" labelClassName="text-carbon/62" />
            <h2 className={`${recordTitle} text-carbon`}>{allSeasons.client}</h2>
            <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/76">{allSeasons.title}</p>
            <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/74">{allSeasons.detail}</p>
            <p className={`${mono} text-orange`}>{allSeasons.domains.join(' / ')}</p>
            {allSeasons.liveUrl ? (
              <a
                className={`${mono} text-carbon transition-colors duration-200 hover:text-cobalt`}
                href={allSeasons.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live site
              </a>
            ) : null}
          </div>

          <BrowserPreview
            preview={allSeasons.preview}
            fallback={allSeasons.previewPlaceholder}
            loading="eager"
            variant="wide"
            className="max-w-none"
          />
        </div>
      </section>

      <section id={homeEms.id} className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:items-start`}>
          <div className="grid gap-5">
            <SystemRail label={homeEms.years} index="03" labelClassName="text-steel" />
            <div className="grid gap-3">
              <h2 className={`${recordTitle} text-bone`}>{homeEms.client}</h2>
              <p className="m-0 text-[1rem] tracking-[-0.02em] text-steel">
                Website + lead / service-area system
              </p>
            </div>
            <BrowserPreview
              preview={homeEms.preview}
              fallback={homeEms.previewPlaceholder}
              variant="wide"
              className="max-w-none"
            />
          </div>

          <div className="grid gap-4 border-t border-bone/10 pt-5 lg:border-t-0 lg:pt-0">
            <p className="m-0 text-base leading-relaxed text-steel">{homeEms.detail}</p>
            <div className="grid gap-2 border-t border-bone/10 pt-4">
              {homeEms.domains.map((domain) => (
                <span key={domain} className={`${mono} text-steel`}>
                  {domain}
                </span>
              ))}
            </div>
            <p className="m-0 text-sm leading-relaxed text-steel">{homeEms.summary}</p>
            <p className={`${mono} text-cobalt`}>{homeEms.technologies.join(' / ')}</p>
            {homeEms.liveUrl ? (
              <a
                className={`${mono} text-bone transition-colors duration-200 hover:text-cobalt`}
                href={homeEms.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live site
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section id={scopedEngineering.id} className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start`}>
          <div className="grid gap-4">
            <SystemRail label={scopedEngineering.years} index="04" labelClassName="text-carbon/62" />
            <h2 className={`${recordTitle} text-carbon`}>Scoped engineering delivery</h2>
            <p className="m-0 max-w-[32rem] text-base leading-relaxed text-carbon/74">
              {scopedEngineering.detail}
            </p>
            <p className={`${mono} text-orange`}>I can scope something, deliver it, and hand it back.</p>
          </div>

          <div className="grid gap-5 border-l-2 border-l-orange bg-carbon px-5 py-6 text-bone md:px-7 md:py-7">
            <p className={`${mono} text-cobalt`}>Bridge to consulting</p>
            <p className="m-0 text-[1rem] leading-relaxed text-steel">
              One defined problem, one usable output, and no assumption that I become the default owner afterward.
            </p>
            <div className="grid gap-2 border-t border-bone/10 pt-4">
              {scopedEngineering.domains.map((domain) => (
                <span key={domain} className={`${mono} text-steel`}>
                  {domain}
                </span>
              ))}
            </div>
            <Link className={`${mono} text-bone transition-colors duration-200 hover:text-cobalt`} to="/consulting">
              View consulting scope
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
