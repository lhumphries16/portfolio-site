import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <>
      <section className="section section--paper section--hero page-hero" id="top">
        <div className="site-frame page-hero__layout">
          <div className="hero-copy">
            <p className="section-label">Projects</p>
            <h1 className="hero-heading page-hero__heading">Independent engineering work I am actively building now.</h1>
            <div className="hero-body">
              <p>
                This is separate from professional work and separate from consulting.
              </p>
              <p>
                These pages are for experiments, active builds, field notes, and useful
                overlaps with collaborators, spaces, venues, or adjacent expertise.
              </p>
            </div>
          </div>

          <aside className="page-hero__panel" aria-label="Projects framing">
            <ul className="meta-list" role="list">
              <li>
                <span className="meta-label">Work</span>
                <span>Professional evidence and delivered systems live on the homepage.</span>
              </li>
              <li>
                <span className="meta-label">Projects</span>
                <span>Independent builds, investigations, and active technical questions live here.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-frame project-card-grid">
          {projects.map((project) => (
            <article key={project.slug} className="project-card">
              <div className="status-row">
                <span className="status-chip">{project.status}</span>
                {project.seekingSupport ? (
                  <span className="status-chip status-chip--accent">{project.seekingSupport}</span>
                ) : null}
              </div>
              <div className="project-card__body">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <div className="project-card__section">
                <p className="project-block__label">Current stage</p>
                <p>{project.currentStage}</p>
              </div>
              <div className="ledger-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-card__footer">
                <p className="project-caption">Last updated {project.lastUpdated}</p>
                <Link className="button button--primary" to={`/projects/${project.slug}`}>
                  View project notes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
