import { Link } from 'react-router-dom';
import { consultingContent } from '../data/consultingContent';
import { SectionIntro } from '../components/SectionIntro';

export function ConsultingPage() {
  const { adjacent, hero, offers } = consultingContent;

  return (
    <>
      <section className="section section--hero" id="top">
        <div className="site-frame page-hero">
          <div className="page-hero__copy">
            <p className="section-label section-label--hero">
              <span className="section-label__text">{hero.label}</span>
            </p>
            <h1 className="display-title display-title--page">{hero.title}</h1>
            <div className="hero-body">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="page-hero__panel" aria-label="Consulting model">
            <p className="project-block__label">Working model</p>
            <ul className="meta-list" role="list">
              {hero.notes.map((note) => (
                <li key={note}>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-frame">
          <div className="offer-list">
            {offers.map((offer) => (
              <article key={offer.id} className="offer-card">
                <div className="offer-card__header">
                  <p className="section-label">
                    <span className="section-label__index">{offer.index}</span>
                    <span className="section-label__text">{offer.label}</span>
                  </p>
                  <h2>{offer.title}</h2>
                  <p>{offer.summary}</p>
                </div>
                <div className="offer-card__meta">
                  {offer.meta.map((item) => (
                    <div key={item.label} className="offer-stat">
                      <p className="meta-label">{item.label}</p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="offer-card__grid">
                  {offer.sections.map((section) => (
                    <div
                      key={section.title}
                      className={`offer-card__section${section.tone === 'boundary' ? ' offer-card__section--boundary' : ''}`}
                    >
                      <p className="project-block__label">{section.title}</p>
                      {section.body ? <p>{section.body}</p> : null}
                      {section.items ? (
                        section.ordered ? (
                          <ol className="project-list">
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="project-list">
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
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
        </div>
      </section>

      <section className="section">
        <div className="site-frame split-section">
          <SectionIntro
            index="03"
            label={adjacent.label}
            title={adjacent.title}
            paragraphs={adjacent.paragraphs}
          />
          <div className="page-hero__panel">
            <p className="project-block__label">Common requirement</p>
            <p className="page-panel__copy">
              Clear problem. Clear deliverable. Clean handoff.
            </p>
            <Link className="text-link page-panel__action" to={adjacent.action.href}>
              {adjacent.action.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
