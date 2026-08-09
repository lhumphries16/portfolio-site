type HeroSectionProps = {
  content: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    credibility: string;
    primaryAction: { href: string; label: string };
    secondaryAction: { href: string; label: string };
    photo: {
      src: string;
      alt: string;
      className?: string;
    };
    annotations: readonly string[];
  };
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="section section--paper section--hero" id="top">
      <div className="site-frame hero-layout">
        <div className="hero-copy">
          <p className="section-label">{content.label}</p>
          <h1 className="hero-heading">{content.title}</h1>
          <div className="hero-body">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="hero-credibility">
            <strong>{content.credibility}</strong>
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href={content.primaryAction.href}>
              {content.primaryAction.label}
            </a>
            <a className="button button--secondary" href={content.secondaryAction.href}>
              {content.secondaryAction.label}
            </a>
          </div>
        </div>

        <figure className="hero-media">
          <div className="hero-media__frame">
            <div className="trace-grid" aria-hidden="true" />
            <img
              src={content.photo.src}
              alt={content.photo.alt}
              className={`hero-media__image ${content.photo.className ?? ''}`.trim()}
              loading="eager"
              sizes="(max-width: 991px) 100vw, 52vw"
            />
            <div className="hero-annotations" aria-label="Working across system layers">
              {content.annotations.map((annotation) => (
                <span key={annotation}>{annotation}</span>
              ))}
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
