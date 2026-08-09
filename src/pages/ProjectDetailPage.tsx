import { Link, useParams } from 'react-router-dom';
import { ProjectHeroMedia } from '../components/ProjectHeroMedia';
import { RouteMeta } from '../components/RouteMeta';
import { getProjectBySlug } from '../data/projects';

export function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <RouteMeta
          title="Project Not Found | Tre Humphries"
          description="The requested project route does not match a published project entry."
        />

        <section className="section section--paper">
          <div className="site-frame split-section">
            <div className="section-copy">
              <p className="section-label">
                <span className="section-label__text">Projects</span>
              </p>
              <h2 className="section-heading">That project page does not exist.</h2>
              <div className="section-intro">
                <p>The route is valid, but there is no matching project entry in the data source.</p>
              </div>
            </div>
            <div className="page-hero__panel">
              <p className="project-block__label">Next step</p>
              <Link className="text-link page-panel__action" to="/projects">
                Back to projects
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <RouteMeta title={`${project.title} | Tre Humphries`} description={project.summary} />

      <section className="section section--hero" id="top">
        <div className="site-frame project-detail-hero">
          <div className="project-detail-hero__copy">
            <p className="project-status-line">
              <span>{project.status}</span>
              <span>Project {project.number}</span>
              {project.seekingSupport ? <span>{project.seekingSupport}</span> : null}
            </p>
            <h1 className="display-title display-title--page">{project.title}</h1>
            <div className="hero-body">
              <p>{project.summary}</p>
            </div>
          </div>

          {project.heroMediaType ? (
            <div className="project-detail-hero__media">
              <ProjectHeroMedia project={project} loading="eager" />
            </div>
          ) : (
            <div
              className="project-placeholder project-placeholder--detail"
              aria-label={project.heroPlaceholder?.ariaLabel ?? `${project.title} project placeholder`}
            >
              <div className="project-placeholder__field" aria-hidden="true" />
              <div className="project-placeholder__meta">
                {project.heroPlaceholder?.meta.map((item) => (
                  <div key={item.label}>
                    <p className="meta-label">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="site-frame project-detail-grid">
          <aside className="project-rail">
            <div className="project-rail__group">
              <p className="meta-label">Current stage</p>
              <p>{project.currentStage}</p>
            </div>
            <div className="project-rail__group">
              <p className="meta-label">Technical areas</p>
              <p className="tag-line">{project.tags.join(' / ')}</p>
            </div>
            <div className="project-rail__group">
              <p className="meta-label">Last updated</p>
              <p>{project.lastUpdated}</p>
            </div>
            {project.externalLinks?.map((link) => (
              <div key={`${link.type}-${link.url}`} className="project-rail__group">
                <a
                  className="text-link text-link--external"
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </aside>

          <div className="detail-stack">
            <section className="detail-section">
              <p className="section-label">
                <span className="section-label__index">01</span>
                <span className="section-label__text">Overview</span>
              </p>
              <div className="section-intro">
                {project.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <p className="section-label">
                <span className="section-label__index">02</span>
                <span className="section-label__text">Current stage</span>
              </p>
              <div className="section-intro">
                <p>{project.currentStage}</p>
              </div>
            </section>

            <section className="detail-section">
              <p className="section-label">
                <span className="section-label__index">03</span>
                <span className="section-label__text">Working on</span>
              </p>
              <ul className="project-list">
                {project.currentWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <p className="section-label">
                <span className="section-label__index">04</span>
                <span className="section-label__text">Questions</span>
              </p>
              <ul className="project-list">
                {project.questions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="detail-section detail-section--accent">
              <p className="section-label">
                <span className="section-label__index">05</span>
                <span className="section-label__text">Looking for</span>
              </p>
              <h2 className="detail-heading">If this overlaps with your world, I&apos;d like to hear from you.</h2>
              <div className="section-intro">
                <p>The point of sharing the project here is to make useful connections around the work itself.</p>
              </div>
              <ul className="project-list">
                {project.lookingFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to="/#contact">
                Reach out
              </Link>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
