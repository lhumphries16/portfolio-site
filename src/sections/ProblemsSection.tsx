import { SectionIntro } from '../components/SectionIntro';

type ProblemsSectionProps = {
  content: {
    id: string;
    label: string;
    title: string;
    intro: readonly string[];
    items: readonly string[];
  };
};

export function ProblemsSection({ content }: ProblemsSectionProps) {
  return (
    <section className="section section--paper" id={content.id}>
      <div className="site-frame split-section">
        <SectionIntro label={content.label} title={content.title} paragraphs={content.intro} />
        <ul className="problem-list" role="list">
          {content.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
