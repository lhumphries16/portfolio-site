import { SectionIntro } from '../components/SectionIntro';

type ApproachSectionProps = {
  content: {
    id: string;
    label: string;
    title: string;
    intro: readonly string[];
    steps: readonly {
      index: string;
      title: string;
      body: string;
    }[];
  };
};

export function ApproachSection({ content }: ApproachSectionProps) {
  return (
    <section className="section section--paper" id={content.id}>
      <div className="site-frame split-section">
        <SectionIntro label={content.label} title={content.title} paragraphs={content.intro} />
        <ol className="process-list">
          {content.steps.map((step) => (
            <li key={step.index} className="process-card">
              <div className="process-card__index">{step.index}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
