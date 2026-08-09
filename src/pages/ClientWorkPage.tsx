import { Link } from 'react-router-dom';
import { BrowserPreview } from '../components/BrowserPreview';
import { RouteMeta } from '../components/RouteMeta';
import { clientWork } from '../data/clientWork';

export function ClientWorkPage() {
  return (
    <>
      <RouteMeta
        title="Client Work | Tre Humphries"
        description="Independent client work across web delivery, operational tooling, and scoped technical engagements."
      />

      <section className="section section--hero" id="top">
        <div className="site-frame page-hero">
          <div className="page-hero__copy">
            <p className="section-label">
              <span className="section-label__text">Client Work</span>
            </p>
            <h1 className="display-title display-title--page">Independent delivery for paying clients.</h1>
            <div className="hero-body">
              <p>
                This includes websites, scoped engineering work, and other paid delivery where the client needed something useful, operable, and cleanly handed off.
              </p>
              <p>
                It is not an agency pitch. It is a durable record of independent work that had to function after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-frame record-stack">
          {clientWork.map((record, index) => (
            <article key={record.id} className={`record-block${index % 2 === 1 ? ' record-block--reverse' : ''}`} id={record.id}>
              <div className="record-block__media">
                <BrowserPreview
                  preview={record.preview}
                  fallback={record.previewPlaceholder}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="record-block__copy">
                <p className="section-label">
                  <span className="section-label__index">{record.years}</span>
                  <span className="section-label__text">{record.client}</span>
                </p>
                <h2>{record.title}</h2>
                <p>{record.detail}</p>
                <p className="tag-line">{record.domains.join(' / ')}</p>
                <p className="project-caption">{record.technologies.join(' / ')}</p>
                <div className="feature-record__actions">
                  {record.liveUrl ? (
                    <a
                      className="text-link text-link--external"
                      href={record.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open live site
                    </a>
                  ) : null}
                  {record.caseStudyUrl ? (
                    <Link className="text-link" to={record.caseStudyUrl}>
                      View related page
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
