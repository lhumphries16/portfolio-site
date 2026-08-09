import { Link, useParams } from 'react-router-dom';
import { ImageFigure } from '../components/ImageFigure';
import { SectionIntro } from '../components/SectionIntro';
import { getProjectBySlug } from '../data/projects';

export function ProjectDetailPage() {
  const { slug = '' } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="section section--paper">
        <div className="site-frame split-section">
          <SectionIntro
            label="Projects"
            title="That project page does not exist."
            paragraphs={[
              'The route is valid, but there is no matching project entry in the data source.',
            ]}
          />
          <div className="page-hero__panel">
            <p className="project-block__label">Next step</p>
            <Link className="button button--primary page-panel__action" to="/projects">
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section section--paper section--hero page-hero" id="top">
        <div className="site-frame page-hero__layout">
          <div className="hero-copy">
            <div className="status-row">
              <span className="status-chip">{project.status}</span>
              {project.seekingSupport ? (
                <span className="status-chip status-chip--accent">{project.seekingSupport}</span>
              ) : null}
            </div>
            <p className="section-label">Project</p>
            <h1 className="hero-heading page-hero__heading">{project.title}</h1>
            <div className="hero-body">
              <p>{project.summary}</p>
            </div>
          </div>

          {project.hero ? (
            <ImageFigure image={project.hero} loading="eager" />
          ) : (
            <aside className="page-hero__panel" aria-label="Project status">
              <ul className="meta-list" role="list">
                <li>
                  <span className="meta-label">Current stage</span>
                  <span>{project.currentStage}</span>
                </li>
                <li>
                  <span className="meta-label">Last updated</span>
                  <span>{project.lastUpdated}</span>
                </li>
                <li>
                  <span className="meta-label">Technical areas</span>
                  <span>{project.tags.join(' | ')}</span>
                </li>
              </ul>
            </aside>
          )}
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-frame split-section">
          <SectionIntro label="Overview" title={project.title} paragraphs={project.overview} />
          <div className="page-hero__panel">
            <p className="project-block__label">Current stage</p>
            <p className="page-panel__copy">{project.currentStage}</p>
            {project.externalLink ? (
              <a
                className="button button--secondary page-panel__action"
                href={project.externalLink.href}
                rel="noreferrer"
                target="_blank"
              >
                {project.externalLink.label}
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="site-frame split-section split-section--dark">
          <div className="section-sidecar">
            <SectionIntro
              dark
              label="Current notebook"
              title="The engineering is real, but it is still active R and D."
              paragraphs={[
                'A lightweight butterfly prototype is flying. The work now is about predictability, repeatability, control feel, and where the system actually becomes useful.',
              ]}
            />
          </div>
          <div className="offer-list">
            <article className="offer-card offer-card--dark">
              <div className="offer-card__header">
                <p className="project-kicker">What I&apos;m working on</p>
              </div>
              <div className="offer-card__section">
                <ul className="project-list">
                  {project.currentWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="offer-card offer-card--dark">
              <div className="offer-card__header">
                <p className="project-kicker">Questions I&apos;m exploring</p>
              </div>
              <div className="offer-card__section">
                <ul className="project-list">
                  {project.questions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="site-frame split-section">
          <SectionIntro
            label="Looking for"
            title="If this overlaps with your world, I&apos;d like to hear from you."
            paragraphs={[
              'The point of sharing the project here is to make useful connections around the work itself.',
            ]}
          />
          <div className="page-hero__panel">
            <ul className="project-list">
              {project.lookingFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button button--primary page-panel__action" to="/#contact">
              Reach out
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
