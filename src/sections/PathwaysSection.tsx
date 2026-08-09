import { Link } from 'react-router-dom';
import { SectionIntro } from '../components/SectionIntro';

type PathwaysSectionProps = {
  content: {
    label: string;
    title: string;
    intro: readonly string[];
    cards: readonly {
      label: string;
      title: string;
      body: string;
      href: string;
      actionLabel: string;
    }[];
  };
};

export function PathwaysSection({ content }: PathwaysSectionProps) {
  return (
    <section className="section section--dark">
      <div className="site-frame split-section split-section--dark">
        <div className="section-sidecar">
          <SectionIntro index="04" dark label={content.label} title={content.title} paragraphs={content.intro} />
        </div>
        <div className="route-card-grid">
          {content.cards.map((card) => (
            <article key={card.title} className="route-card">
              <div className="route-card__body">
                <p className="project-kicker">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <Link className="text-link" to={card.href}>
                {card.actionLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
