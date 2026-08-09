import { SectionIntro } from '../components/SectionIntro';

type SystemLayersSectionProps = {
  content: {
    id: string;
    label: string;
    title: string;
    intro: readonly string[];
    layers: readonly {
      index: string;
      title: string;
      body: string;
    }[];
  };
};

export function SystemLayersSection({ content }: SystemLayersSectionProps) {
  return (
    <section className="section section--paper" id={content.id}>
      <div className="site-frame split-section">
        <SectionIntro label={content.label} title={content.title} paragraphs={content.intro} />
        <div className="stack-list">
          {content.layers.map((layer) => (
            <article key={layer.index} className="stack-card">
              <div className="stack-card__index">{layer.index}</div>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
