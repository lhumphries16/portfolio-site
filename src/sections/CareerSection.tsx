import { ImageFigure } from '../components/ImageFigure';
import { SectionIntro } from '../components/SectionIntro';

type CareerSectionProps = {
  content: {
    id: string;
    label: string;
    title: string;
    intro: readonly string[];
    proof: {
      src: string;
      alt: string;
      caption?: string;
    };
    proofGallery?: readonly {
      src: string;
      alt: string;
      caption?: string;
      className?: string;
    }[];
    entries: readonly {
      shortDate: string;
      yearRange: string;
      role: string;
      company: string;
      body: string;
      image?: {
        src: string;
        alt: string;
        caption?: string;
      };
    }[];
    close: string;
  };
};

export function CareerSection({ content }: CareerSectionProps) {
  return (
    <section className="section section--dark" id={content.id}>
      <div className="site-frame split-section split-section--dark">
        <div className="section-sidecar">
          <SectionIntro
            index="02"
            label={content.label}
            title={content.title}
            paragraphs={content.intro}
            dark
          />
          <div className="career-proof-stack">
            <ImageFigure image={content.proof} />
            {content.proofGallery?.map((image) => (
              <ImageFigure key={image.src} image={image} />
            ))}
          </div>
        </div>
        <div className="timeline">
          {content.entries.map((entry) => (
            <article key={`${entry.shortDate}-${entry.role}`} className="timeline-card">
              <div className="timeline-card__date">{entry.shortDate}</div>
              <div>
                <p className="timeline-card__range">{entry.yearRange}</p>
                <h3>{entry.role}</h3>
                <p className="timeline-card__company">{entry.company}</p>
                {entry.image ? <ImageFigure image={entry.image} /> : null}
                <p>{entry.body}</p>
              </div>
            </article>
          ))}
          <p className="timeline-close">{content.close}</p>
        </div>
      </div>
    </section>
  );
}
