import { ImageFigure } from '../components/ImageFigure';
import { SectionIntro } from '../components/SectionIntro';

type WorkSectionProps = {
  content: {
    id: string;
    label: string;
    title: string;
    intro: readonly string[];
    featured: readonly {
      kicker: string;
      title: string;
      problem: string;
      listLabel: string;
      items: readonly string[];
      why: string;
      reverse?: boolean;
      images: readonly {
        src: string;
        alt: string;
        caption?: string;
        className?: string;
      }[];
    }[];
    additionalLabel: string;
    additionalTitle: string;
    additional: readonly {
      title: string;
      body: string;
      tags: readonly string[];
      image?: {
        src: string;
        alt: string;
        caption?: string;
        className?: string;
      };
    }[];
  };
};

export function WorkSection({ content }: WorkSectionProps) {
  return (
    <>
      <section className="section section--paper" id={content.id}>
        <div className="site-frame">
          <SectionIntro index="03" label={content.label} title={content.title} paragraphs={content.intro} />
          <div className="feature-list">
            {content.featured.map((project) => (
              <article
                key={project.kicker}
                className={`feature-project${project.reverse ? ' feature-project--reverse' : ''}`}
              >
                <div className="feature-project__media">
                  {project.images.map((image) => (
                    <ImageFigure key={`${project.kicker}-${image.src}`} image={image} />
                  ))}
                </div>
                <div className="feature-project__content">
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>{project.title}</h3>
                  <div className="project-block">
                    <p className="project-block__label">Problem</p>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-block">
                    <p className="project-block__label">{project.listLabel}</p>
                    <ul className="project-list">
                      {project.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-block">
                    <p className="project-block__label">Why it mattered</p>
                    <p>{project.why}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="site-frame">
          <p className="section-label">{content.additionalLabel}</p>
          <h2 className="section-heading">{content.additionalTitle}</h2>
          <div className="ledger-grid">
            {content.additional.map((item) => (
              <article key={item.title} className="ledger-card">
                <div className="ledger-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.image ? <ImageFigure image={item.image} /> : null}
                </div>
                <div className="ledger-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
