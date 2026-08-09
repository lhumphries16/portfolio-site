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
    <section className="section section--paper section--hero section--hero-home" id="top">
      <div className="site-frame hero-layout">
        <div className="hero-copy">
          <p className="section-label section-label--hero">
            <span className="section-label__text">{content.label}</span>
          </p>
          <h1 className="hero-heading">{content.title}</h1>
          <div className="hero-body">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href={content.primaryAction.href}>
              {content.primaryAction.label}
            </a>
            <a className="text-link" href={content.secondaryAction.href}>
              {content.secondaryAction.label}
            </a>
          </div>
          <p className="hero-credibility">
            <strong>{content.credibility}</strong>
          </p>
        </div>

        <figure className="hero-media">
          <div className="hero-media__frame">
            <img
              src={content.photo.src}
              alt={content.photo.alt}
              className={`hero-media__image ${content.photo.className ?? ''}`.trim()}
              loading="eager"
              sizes="(max-width: 991px) 100vw, 52vw"
            />
          </div>
          <figcaption className="hero-media__meta">
            <p className="project-caption">System layers</p>
            <ol className="hero-annotations" aria-label="Working across system layers">
              {content.annotations.map((annotation, index) => (
                <li key={annotation}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{annotation}</span>
                </li>
              ))}
            </ol>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
