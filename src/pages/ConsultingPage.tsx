import { Link } from 'react-router-dom';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { consultingContent } from '../data/consultingContent';

const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';
const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';

export function ConsultingPage() {
  const { adjacent, hero, offers } = consultingContent;

  return (
    <>
      <RouteMeta
        title="Engineering Consulting | Tre Humphries"
        description="Scoped engineering consulting for controls systems and process or information-flow audits with clear deliverables and clean handoff."
      />

      <section id="top" className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.78fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail label={hero.label} index="01" labelClassName="text-carbon/66" />
            <h1 className={`${display} max-w-[11ch] text-[clamp(3rem,8vw,6.2rem)] text-carbon`}>
              {hero.title}
            </h1>
            <div className="grid gap-4">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph} className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/74">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-2 border-l-0 bg-carbon px-5 py-6 text-bone md:px-7 md:py-8 lg:border-l-4 lg:border-l-cobalt">
            <p className={`${mono} text-cobalt`}>Working model</p>
            {hero.notes.map((note) => (
              <span key={note} className="text-sm leading-relaxed text-steel">
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 pb-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:pb-18">
        <div className="mx-auto grid max-w-[1700px] gap-14">
          {offers.map((offer) => (
            <article key={offer.id} className="grid gap-8 border-t border-carbon/12 pt-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-end">
                <div className="grid gap-4">
                  <SystemRail label={offer.label} index={offer.index} labelClassName="text-carbon/66" />
                  <h2 className={`${display} max-w-[10ch] text-[clamp(2.5rem,6vw,5rem)] text-carbon`}>
                    {offer.title}
                  </h2>
                  <p className="m-0 max-w-[28rem] text-base leading-relaxed text-carbon/74">{offer.summary}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                        ? 'bg-carbon px-5 py-6 text-bone md:px-7 md:py-8'
                        : 'border-carbon/12'
                    }`}
                  >
                    <p className={`${mono} ${section.tone === 'boundary' ? 'text-orange' : 'text-cobalt'}`}>
                      {section.title}
                    </p>
                    {section.body ? (
                      <p className={`m-0 text-sm leading-relaxed ${section.tone === 'boundary' ? 'text-steel' : 'text-carbon/74'}`}>
                        {section.body}
                      </p>
                    ) : null}
                    {section.items ? (
                      section.ordered ? (
                        <ol className="m-0 grid gap-3 pl-5 text-sm leading-relaxed">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="m-0 grid list-none gap-3 p-0">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className={`grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 text-sm leading-relaxed ${
                                section.tone === 'boundary' ? 'text-steel' : 'text-carbon/74'
                              }`}
                            >
                              <span
                                className={`mt-[0.72rem] h-px ${
                                  section.tone === 'boundary' ? 'bg-orange' : 'bg-cobalt'
                                }`}
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
        </div>
      </section>

      <section className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail label={adjacent.label} index="03" labelClassName="text-steel" />
            <h2 className={`${display} max-w-[11ch] text-[clamp(2.5rem,6vw,4.8rem)] text-bone`}>
              {adjacent.title}
            </h2>
          </div>
          <div className="grid gap-4 lg:max-w-[42rem]">
            {adjacent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 text-base leading-relaxed text-steel">
                {paragraph}
              </p>
            ))}
            <p className={`${mono} text-cobalt`}>Clear problem. Clear deliverable. Clean handoff.</p>
            <Link className={`${mono} text-bone transition-colors duration-200 hover:text-cobalt`} to={adjacent.action.href}>
              {adjacent.action.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
