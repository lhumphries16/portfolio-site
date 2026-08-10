import { Link } from 'react-router-dom';
import { BrowserPreview } from '../components/BrowserPreview';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { clientWork } from '../data/clientWork';

const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';
const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';
const [allSeasons, homeEms, scopedEngineering] = clientWork;

export function ClientWorkPage() {
  return (
    <>
      <RouteMeta
        title="Client Work | Tre Humphries"
        description="Independent client work across web delivery, operational tooling, and scoped technical engagements."
      />

      <section id="top" className="bg-cobalt px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail label="Client Work" index="01" labelClassName="text-bone/76" lineClassName="bg-carbon" />
            <h1 className={`${display} max-w-[9ch] text-[clamp(3.3rem,9vw,6.8rem)] text-bone`}>
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

      <section id={allSeasons.id} className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
          <div className="grid gap-5 lg:sticky lg:top-28">
            <SystemRail label={allSeasons.years} index="02" labelClassName="text-carbon/68" />
            <h2 className={`${display} max-w-[9ch] text-[clamp(2.5rem,6vw,4.8rem)] text-carbon`}>
              {allSeasons.client}
            </h2>
            <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/78">{allSeasons.title}</p>
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

          <div className="lg:-mr-8 xl:-mr-12">
            <BrowserPreview preview={allSeasons.preview} fallback={allSeasons.previewPlaceholder} loading="eager" />
          </div>
        </div>
      </section>

      <section id={homeEms.id} className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:items-end">
            <div className="grid gap-4">
              <SystemRail label={homeEms.years} index="03" labelClassName="text-steel" />
              <h2 className={`${display} max-w-[7ch] text-[clamp(2.9rem,7vw,5.8rem)] text-bone`}>
                {homeEms.client}
              </h2>
            </div>
            <p className="m-0 max-w-[46rem] text-[1.04rem] leading-relaxed text-steel">
              {homeEms.detail}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-start">
            <div className="lg:-mr-10 xl:-mr-14">
              <BrowserPreview preview={homeEms.preview} fallback={homeEms.previewPlaceholder} />
            </div>

            <div className="grid gap-5 bg-cobalt px-5 py-6 text-carbon md:px-7 md:py-8">
              <p className={`${mono} text-carbon/70`}>System dimensions</p>
              <p className="m-0 text-[1rem] font-medium tracking-[-0.02em] text-carbon">
                Website + lead / service-area system
              </p>
              <div className="grid gap-2 border-t border-carbon/12 pt-4">
                {homeEms.domains.map((domain) => (
                  <span key={domain} className="text-sm font-medium tracking-[-0.02em]">
                    {domain}
                  </span>
                ))}
              </div>
              <p className="m-0 text-sm leading-relaxed text-carbon/82">{homeEms.summary}</p>
              <p className={`${mono} text-carbon/70`}>{homeEms.technologies.join(' / ')}</p>
              {homeEms.liveUrl ? (
                <a
                  className={`${mono} text-carbon transition-colors duration-200 hover:text-bone`}
                  href={homeEms.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live site
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id={scopedEngineering.id} className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="grid gap-5">
            <SystemRail label={scopedEngineering.years} index="04" labelClassName="text-carbon/68" />
            <h2 className={`${display} max-w-[9ch] text-[clamp(2.5rem,6vw,4.9rem)] text-carbon`}>
              Scoped engineering delivery
            </h2>
            <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/74">
              {scopedEngineering.detail}
            </p>
            <p className={`${mono} text-orange`}>I can scope something, deliver it, and hand it back.</p>
          </div>

          <div className="grid gap-5 border-l-0 bg-carbon px-5 py-6 text-bone md:px-7 md:py-8 lg:border-l-4 lg:border-l-orange">
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
