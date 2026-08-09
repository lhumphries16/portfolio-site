import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserPreview } from '../components/BrowserPreview';
import { ContactForm } from '../components/ContactForm';
import { ImageFigure } from '../components/ImageFigure';
import { RouteMeta } from '../components/RouteMeta';
import { careerStreams } from '../data/careerIndex';
import { clientWork } from '../data/clientWork';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { systems } from '../data/systems';

export function HomePage() {
  const featuredCorporate = experience.find((record) => record.featured) ?? experience[0];
  const featuredClient = clientWork.find((record) => record.featured) ?? clientWork[0];
  const featuredProject = projects.find((record) => record.featured) ?? projects[0];

  const firstCareerItem = careerStreams[0]?.items[0];
  const [activeCareerId, setActiveCareerId] = useState(firstCareerItem?.id ?? '');

  const activeCareerItem = useMemo(() => {
    return careerStreams.flatMap((stream) => stream.items).find((item) => item.id === activeCareerId) ?? firstCareerItem;
  }, [activeCareerId, firstCareerItem]);

  return (
    <>
      <RouteMeta
        title="Tre Humphries | Mechanical Engineer & Systems Builder"
        description="Mechanical engineer and systems builder working across physical systems, industrial controls, embedded systems, software, commissioning, and operational workflows."
      />

      <section className="section section--hero" id="top">
        <div className="site-frame hero-grid" id="overview">
          <div className="hero-copy">
            <p className="section-label">
              <span className="section-label__text">{profile.hero.eyebrow}</span>
            </p>
            <h1 className="display-title">{profile.hero.name}</h1>
            <p className="hero-role">{profile.hero.role}</p>
            <p className="hero-statement">{profile.hero.statement}</p>
            <p className="hero-support">{profile.hero.support}</p>
            <div className="hero-actions">
              {profile.hero.actions.map((action, index) => (
                <Link
                  key={action.href}
                  className={index === 0 ? 'button button--primary' : 'text-link'}
                  to={action.href}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-media__frame">
              <img
                className="hero-media__image"
                src={profile.hero.image.src}
                alt={profile.hero.image.alt}
                loading="eager"
              />
            </div>
            <div className="hero-media__meta">
              <p className="project-caption">{profile.hero.image.caption}</p>
              <ol className="systems-profile" aria-label="Systems profile">
                {profile.hero.systemsProfile.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="career-index">
        <div className="site-frame">
          <div className="section-copy section-copy--compact">
            <p className="section-label">
              <span className="section-label__index">01</span>
              <span className="section-label__text">Career Index</span>
            </p>
            <h2 className="section-heading">Three streams, one career.</h2>
            <div className="section-intro">
              <p>
                Professional work proves engineering depth. Client work proves independent delivery. R&amp;D proves ongoing curiosity and hands-on building.
              </p>
            </div>
          </div>

          <div className="timeline-ruler" aria-hidden="true">
            <span>2021</span>
            <span>2022</span>
            <span>2024</span>
            <span>2025</span>
            <span>2026</span>
            <span>Now</span>
          </div>

          <div className="career-lanes">
            {careerStreams.map((stream) => (
              <article key={stream.id} className="career-lane">
                <h3 className="career-lane__title">{stream.label}</h3>
                <div className="career-lane__list">
                  {stream.items.map((item) => (
                    <Link
                      key={item.id}
                      className={`career-item${activeCareerItem?.id === item.id ? ' career-item--active' : ''}`}
                      to={item.href}
                      onMouseEnter={() => setActiveCareerId(item.id)}
                      onFocus={() => setActiveCareerId(item.id)}
                    >
                      <span className="career-item__year">{item.years}</span>
                      <span className="career-item__title">{item.title}</span>
                      <span className="career-item__subtitle">{item.subtitle}</span>
                      <span className="career-item__tags">{item.domains.slice(0, 4).join(' / ')}</span>
                      <span className="career-item__status">{item.status}</span>
                      <span className="career-item__detail-mobile">{item.detail}</span>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {activeCareerItem ? (
            <div className="career-detail" aria-live="polite">
              <p className="meta-label">Focused record</p>
              <h3>{activeCareerItem.title}</h3>
              <p>{activeCareerItem.detail}</p>
              <p className="tag-line">{activeCareerItem.domains.join(' / ')}</p>
              <Link className="text-link" to={activeCareerItem.href}>
                Open record
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section" id="featured-records">
        <div className="site-frame">
          <div className="section-copy section-copy--compact">
            <p className="section-label">
              <span className="section-label__index">02</span>
              <span className="section-label__text">Featured Records</span>
            </p>
            <h2 className="section-heading">One representative record from each stream.</h2>
          </div>

          <div className="feature-records">
            <article className="feature-record">
              <div className="feature-record__media">
                {featuredCorporate.image ? <ImageFigure image={featuredCorporate.image} loading="eager" /> : null}
              </div>
              <div className="feature-record__copy">
                <p className="section-label">
                  <span className="section-label__text">Corporate Engineering</span>
                </p>
                <h3>Electric Sprayer Platform</h3>
                <p className="feature-record__client">GAF Roads / Standard Industries</p>
                <p>{featuredCorporate.summary}</p>
                <p className="tag-line">{featuredCorporate.domains.join(' / ')}</p>
                <Link className="text-link" to="/experience#gaf-roads-platform">
                  View engineering experience
                </Link>
              </div>
            </article>

            <article className="feature-record feature-record--reverse">
              <div className="feature-record__media">
                <BrowserPreview
                  preview={featuredClient.preview}
                  fallback={featuredClient.previewPlaceholder}
                  loading="eager"
                />
              </div>
              <div className="feature-record__copy">
                <p className="section-label">
                  <span className="section-label__text">Client Work</span>
                </p>
                <h3>HomeEMS</h3>
                <p className="feature-record__client">Website + Lead / Service-Area System</p>
                <p>{featuredClient.summary}</p>
                <p className="tag-line">{featuredClient.domains.join(' / ')}</p>
                <div className="feature-record__actions">
                  {featuredClient.liveUrl ? (
                    <a
                      className="text-link text-link--external"
                      href={featuredClient.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open live site
                    </a>
                  ) : null}
                  <Link className="text-link" to="/client-work#homeems">
                    View client work
                  </Link>
                </div>
              </div>
            </article>

            <article className="feature-record">
              <div className="feature-record__media">
                <div
                  className="project-placeholder"
                  aria-label={featuredProject.heroPlaceholder?.ariaLabel ?? 'Programmable Flying Creatures media placeholder'}
                >
                  <div className="project-placeholder__field" aria-hidden="true" />
                  <div className="project-placeholder__meta">
                    {featuredProject.heroPlaceholder?.meta.map((item) => (
                      <div key={item.label}>
                        <p className="meta-label">{item.label}</p>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="feature-record__copy">
                <p className="section-label">
                  <span className="section-label__text">R&amp;D / Projects</span>
                </p>
                <h3>Programmable Flying Creatures</h3>
                <p className="feature-record__client">Bio-inspired indoor flight systems</p>
                <p>{featuredProject.summary}</p>
                <p className="tag-line">Embedded / Wireless / Flight / Interaction</p>
                <p className="project-caption">Current: Flight tuning + handheld controls</p>
                <Link className="text-link" to="/projects/flying-creatures">
                  Open project
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="systems-index">
        <div className="site-frame">
          <div className="section-copy section-copy--compact">
            <p className="section-label">
              <span className="section-label__index">03</span>
              <span className="section-label__text">Selected Systems</span>
            </p>
            <h2 className="section-heading">A representative index of the systems I have worked on.</h2>
          </div>

          <div className="systems-index">
            {systems.map((system) => (
              <Link key={system.id} className="system-row" to={system.href}>
                <span className="system-row__index">{system.index}</span>
                <span className="system-row__title">{system.title}</span>
                <span className="system-row__meta">{system.metadata}</span>
                <span className="system-row__status">{system.status}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="site-frame contact-grid">
          <div className="contact-grid__lead">
            <p className="section-label">
              <span className="section-label__index">04</span>
              <span className="section-label__text">{profile.about.label}</span>
            </p>
            <h2 className="section-heading">{profile.contact.title}</h2>
            <div className="section-intro">
              <p>{profile.contact.intro}</p>
            </div>

            <div className="service-lines">
              <div className="service-line">
                <span>Controls Audit &amp; Design-for-Hire</span>
                <span>3 to 10 business days</span>
              </div>
              <div className="service-line">
                <span>Process &amp; Information Flow Audit</span>
                <span>2 to 3 weeks</span>
              </div>
            </div>

            <div className="contact-links">
              <Link className="text-link" to="/consulting">
                View consulting
              </Link>
              <Link className="text-link" to="/#contact">
                Contact
              </Link>
            </div>

            <div className="about-copy">
              <h3>{profile.about.title}</h3>
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="contact-grid__form" id="contact">
            <div className="contact-photo">
              <img
                className="contact-photo__image"
                src={profile.contact.image.src}
                alt={profile.contact.image.alt}
                loading="lazy"
              />
            </div>
            <ContactForm
              helper={profile.contact.helper}
              success={profile.contact.success}
              error={profile.contact.error}
              submitLabel={profile.contact.submitLabel}
              email={profile.brand.email}
            />
          </div>
        </div>
      </section>
    </>
  );
}
