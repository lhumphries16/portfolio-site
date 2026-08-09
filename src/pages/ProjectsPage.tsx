import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function ProjectsPage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <>
      <section className="section section--hero" id="top">
        <div className="site-frame page-hero">
          <div className="page-hero__copy">
            <p className="section-label section-label--hero">
              <span className="section-label__text">Projects</span>
            </p>
            <h1 className="display-title display-title--page">Independent technical work built out of curiosity.</h1>
            <div className="hero-body">
              <p>
                Projects are separate from professional employment and separate from client work.
              </p>
              <p>
                They are where experiments, active builds, field notes, and useful overlaps with collaborators or spaces can live without being mistaken for consulting offers.
              </p>
            </div>
          </div>

          <aside className="page-hero__panel" aria-label="Projects framing">
            <ul className="meta-list" role="list">
              <li>
                <span>Independent R&amp;D, not client delivery.</span>
              </li>
              <li>
                <span>Useful detail goes on dedicated project pages, not into the homepage at rest.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-frame">
          <article className="project-feature">
            <div className="project-feature__intro">
              <p className="project-status-line">
                <span>{featuredProject.status}</span>
                <span>Project {featuredProject.number}</span>
                {featuredProject.seekingSupport ? <span>{featuredProject.seekingSupport}</span> : null}
              </p>
              <h2 className="project-feature__title">{featuredProject.title}</h2>
              <p className="project-feature__summary">{featuredProject.summary}</p>
            </div>

            <div className="project-placeholder" aria-label={`${featuredProject.title} project placeholder`}>
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
                  Open project
                </Link>
              </div>
            </div>
          </article>

          {otherProjects.length > 0 ? (
            <div className="project-archive">
              {otherProjects.map((project) => (
                <article key={project.slug} className="project-archive__item">
                  <p className="project-status-line">
                    <span>{project.number}</span>
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
