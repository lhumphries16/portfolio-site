import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function ProjectsPage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <>
      <section className="section section--paper section--hero page-hero" id="top">
        <div className="site-frame page-hero__layout">
          <div className="hero-copy">
            <p className="section-label section-label--hero">
              <span className="section-label__text">Projects</span>
            </p>
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
        <div className="site-frame">
          <article className="project-feature">
            <div className="project-feature__intro">
              <p className="project-status-line">
                <span>{featuredProject.status}</span>
                <span>Project 001</span>
                {featuredProject.seekingSupport ? <span>{featuredProject.seekingSupport}</span> : null}
              </p>
              <h2 className="project-feature__title">Programmable{'\n'}Flying Creatures</h2>
              <p className="project-feature__summary">{featuredProject.summary}</p>
            </div>

            <div className="project-placeholder" aria-label="Programmable Flying Creatures project placeholder">
              <div className="project-placeholder__field" aria-hidden="true" />
              <div className="project-placeholder__meta">
                <div>
                  <p className="meta-label">Current stage</p>
                  <p>Prototype flying / active tuning</p>
                </div>
                <div>
                  <p className="meta-label">Seeking</p>
                  <p>Venues / event-production collaborators / technical overlap</p>
                </div>
              </div>
            </div>

            <div className="project-feature__details">
              <div className="project-feature__detail">
                <p className="project-block__label">Current stage</p>
                <p>{featuredProject.currentStage}</p>
              </div>
              <div className="project-feature__detail">
                <p className="project-block__label">Technical areas</p>
                <p className="tag-line">{featuredProject.tags.join(' / ')}</p>
              </div>
              <div className="project-feature__detail">
                <p className="project-caption">Last updated {featuredProject.lastUpdated}</p>
                <Link className="text-link" to={`/projects/${featuredProject.slug}`}>
                  Read project
                </Link>
              </div>
            </div>
          </article>

          {otherProjects.length > 0 ? (
            <div className="project-archive">
              {otherProjects.map((project, index) => (
                <article key={project.slug} className="project-archive__item">
                  <p className="project-status-line">
                    <span>{String(index + 2).padStart(3, '0')}</span>
                    <span>{project.status}</span>
                  </p>
                  <div>
                    <h2>{project.title}</h2>
                    <p>{project.summary}</p>
                  </div>
                  <Link className="text-link" to={`/projects/${project.slug}`}>
                    Read project
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
