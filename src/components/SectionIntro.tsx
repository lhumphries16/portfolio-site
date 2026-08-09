type SectionIntroProps = {
  label: string;
  title: string;
  paragraphs: readonly string[];
  dark?: boolean;
};

export function SectionIntro({ label, title, paragraphs, dark = false }: SectionIntroProps) {
  return (
    <div className={`section-copy${dark ? ' section-copy--dark' : ''}`}>
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      <div className="section-intro">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
