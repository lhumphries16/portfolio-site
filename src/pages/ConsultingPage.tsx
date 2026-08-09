import { Link } from 'react-router-dom';
import { consultingContent } from '../data/consultingContent';
import { SectionIntro } from '../components/SectionIntro';

export function ConsultingPage() {
  const { adjacent, controls, hero, process } = consultingContent;

  return (
    <>
      <section className="section section--paper section--hero page-hero" id="top">
        <div className="site-frame page-hero__layout">
          <div className="hero-copy">
            <p className="section-label">{hero.label}</p>
            <h1 className="hero-heading page-hero__heading">{hero.title}</h1>
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
                  <span className="meta-label">Note</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-frame">
          <div className="offer-list">
            <article className="offer-card">
              <div className="offer-card__header">
                <p className="project-kicker">{controls.label}</p>
                <h2>{controls.title}</h2>
                <p>{controls.summary}</p>
              </div>
              <div className="offer-card__grid">
                <div className="offer-card__section">
                  <p className="project-block__label">Controls systems audit</p>
                  <ul className="project-list">
                    {controls.auditFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Outcome</p>
                  <p>{controls.outcome}</p>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Controls design-for-hire</p>
                  <ul className="project-list">
                    {controls.designDeliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Typical engagement</p>
                  <ul className="project-list">
                    {controls.typicalEngagement.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Boundaries</p>
                  <ul className="project-list">
                    {controls.boundaries.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="offer-card offer-card--dark">
              <div className="offer-card__header">
                <p className="project-kicker">{process.label}</p>
                <h2>{process.title}</h2>
                <p>{process.summary}</p>
              </div>
              <div className="offer-card__grid">
                <div className="offer-card__section">
                  <p className="project-block__label">Examples</p>
                  <ul className="project-list">
                    {process.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Focus</p>
                  <ul className="project-list">
                    {process.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Typical process</p>
                  <ol className="project-list">
                    {process.processSteps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Possible improvements</p>
                  <ul className="project-list">
                    {process.improvements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer-card__section">
                  <p className="project-block__label">Typical engagement</p>
                  <ul className="project-list">
                    {process.typicalEngagement.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-frame split-section">
          <SectionIntro
            label={adjacent.label}
            title={adjacent.title}
            paragraphs={adjacent.paragraphs}
          />
          <div className="page-hero__panel">
            <p className="project-block__label">Common requirement</p>
            <p className="page-panel__copy">
              Clear problem. Clear deliverable. Clean handoff.
            </p>
            <Link className="button button--primary page-panel__action" to={adjacent.action.href}>
              {adjacent.action.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
