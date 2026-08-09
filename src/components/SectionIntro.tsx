type SectionIntroProps = {
  index?: string;
  label: string;
  title: string;
  paragraphs: readonly string[];
  dark?: boolean;
};

export function SectionIntro({ index, label, title, paragraphs, dark = false }: SectionIntroProps) {
  return (
    <div className={`section-copy${dark ? ' section-copy--dark' : ''}`}>
      <p className="section-label">
        {index ? <span className="section-label__index">{index}</span> : null}
        <span className="section-label__text">{label}</span>
      </p>
      <h2 className="section-heading">{title}</h2>
      <div className="section-intro">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
