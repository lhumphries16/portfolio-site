import { Link } from 'react-router-dom';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { consultingContent } from '../data/consultingContent';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.68rem] uppercase tracking-[0.18em]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.03em]';
const sectionTitle = 'text-[clamp(2.15rem,4vw,3.1rem)] font-semibold tracking-[-0.03em]';

export function ConsultingPage() {
  const { adjacent, hero, offers } = consultingContent;

  return (
    <>
      <RouteMeta
        title="Engineering Consulting | Tre Humphries"
        description="Scoped engineering consulting for controls systems and process or information-flow audits with clear deliverables and clean handoff."
      />

      <section id="top" className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,0.94fr)] lg:items-end`}>
          <div className="grid gap-4">
            <SystemRail label={hero.label} index="01" labelClassName="text-carbon/62" />
            <h1 className={`${heroDisplay} max-w-[11ch] text-[clamp(3rem,7vw,5.2rem)] text-carbon`}>
              {hero.title}
            </h1>
          </div>
          <div className="grid gap-4">
            {hero.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/74">
                {paragraph}
              </p>
            ))}
            <div className="grid gap-2 border-t border-carbon/12 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              {hero.notes.map((note) => (
                <span key={note} className={`${mono} text-cobalt`}>
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 pb-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:pb-16">
        <div className={`${contentWrap} grid gap-14`}>
          {offers.map((offer) => (
            <article key={offer.id} className="grid gap-8 border-t border-carbon/12 pt-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
                <div className="grid gap-4">
                  <SystemRail label={offer.label} index={offer.index} labelClassName="text-carbon/62" />
                  <h2 className={`${sectionTitle} text-carbon`}>{offer.title}</h2>
                  <p className="m-0 max-w-[30rem] text-base leading-relaxed text-carbon/74">{offer.summary}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {offer.meta.map((item) => (
                    <div key={item.label} className="grid gap-2 border-t border-carbon/12 pt-4">
                      <p className={`${mono} text-cobalt`}>{item.label}</p>
                      <p className="m-0 text-[1rem] leading-relaxed text-carbon">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {offer.sections.map((section) => (
                  <div
                    key={section.title}
                    className={`grid gap-4 border-t pt-5 ${
                      section.tone === 'boundary'
                        ? 'border-orange bg-bone/70 pl-4'
                        : 'border-carbon/12'
                    }`}
                  >
                    <p className={`${mono} ${section.tone === 'boundary' ? 'text-orange' : 'text-cobalt'}`}>
                      {section.title}
                    </p>
                    {section.body ? (
                      <p className="m-0 text-sm leading-relaxed text-carbon/74">{section.body}</p>
                    ) : null}
                    {section.items ? (
                      section.ordered ? (
                        <ol className="m-0 grid gap-3 pl-5 text-sm leading-relaxed text-carbon/74">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="m-0 grid list-none gap-3 p-0">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-relaxed text-carbon/74"
                            >
                              <span
                                className={`mt-[0.72rem] h-px ${section.tone === 'boundary' ? 'bg-orange' : 'bg-cobalt'}`}
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}

          <section className="grid gap-5 border-t border-carbon/12 pt-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div className="grid gap-4">
              <SystemRail label={adjacent.label} index="03" labelClassName="text-carbon/62" />
              <h2 className={`${sectionTitle} max-w-[12ch] text-carbon`}>{adjacent.title}</h2>
            </div>
            <div className="grid gap-4">
              {adjacent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/74">
                  {paragraph}
                </p>
              ))}
              <p className={`${mono} text-cobalt`}>Clear problem. Clear deliverable. Clean handoff.</p>
              <Link className={`${mono} text-carbon transition-colors duration-200 hover:text-cobalt`} to={adjacent.action.href}>
                {adjacent.action.label}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
