import { ImageFigure } from '../components/ImageFigure';
import { experience } from '../data/experience';

export function ExperiencePage() {
  return (
    <>
      <section className="section section--hero" id="top">
        <div className="site-frame page-hero">
          <div className="page-hero__copy">
            <p className="section-label">
              <span className="section-label__text">Experience</span>
            </p>
            <h1 className="display-title display-title--page">Corporate Engineering</h1>
            <div className="hero-body">
              <p>
                Professional engineering work delivered inside organizations across industrial equipment, controls, automation, data, and field operations.
              </p>
              <p>
                This is the record of systems delivered inside teams, not consulting offers and not independent R&amp;D.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-frame record-stack">
          {experience.map((record, index) => (
            <article key={record.id} className={`record-block${index % 2 === 1 ? ' record-block--reverse' : ''}`} id={record.id}>
              <div className="record-block__copy">
                <p className="section-label">
                  <span className="section-label__index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="section-label__text">{record.years}</span>
                </p>
                <h2>{record.role}</h2>
                <p className="record-block__client">{record.company}</p>
                <p>{record.detail}</p>
                <p className="tag-line">{record.domains.join(' / ')}</p>
                <ul className="project-list">
                  {record.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="project-caption">{record.technologies.join(' / ')}</p>
              </div>
              <div className="record-block__media">
                {record.image ? <ImageFigure image={record.image} loading={index === 0 ? 'eager' : 'lazy'} /> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
