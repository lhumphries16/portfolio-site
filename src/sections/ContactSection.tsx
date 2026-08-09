import { ContactForm } from '../components/ContactForm';
import { SectionIntro } from '../components/SectionIntro';

type ContactSectionProps = {
  content: {
    id: string;
    label: string;
    title: string;
    intro: readonly string[];
    helper: string;
    success: string;
    error: string;
    submitLabel: string;
    image: {
      src: string;
      alt: string;
      className?: string;
    };
  };
  brand: {
    name: string;
    role: string;
    location: string;
    email: string;
  };
  socialLink: {
    href: string;
    label: string;
  };
};

export function ContactSection({ content, brand, socialLink }: ContactSectionProps) {
  return (
    <section className="section section--paper" id={content.id}>
      <div className="site-frame split-section split-section--contact">
        <div className="section-sidecar">
          <SectionIntro label={content.label} title={content.title} paragraphs={content.intro} />
          <div className="contact-card">
            <div className="contact-card__details">
              <p className="contact-card__name">{brand.name}</p>
              <p>{brand.role}</p>
              <p>{brand.location}</p>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href={socialLink.href} target="_blank" rel="noreferrer">
                {socialLink.label}
              </a>
            </div>
            <div className="contact-photo">
              <img
                src={content.image.src}
                alt={content.image.alt}
                className={`contact-photo__image ${content.image.className ?? ''}`.trim()}
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 36vw"
              />
            </div>
          </div>
        </div>
        <ContactForm
          helper={content.helper}
          success={content.success}
          error={content.error}
          submitLabel={content.submitLabel}
          email={brand.email}
        />
      </div>
    </section>
  );
}
