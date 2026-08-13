import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserPreview } from '../components/BrowserPreview';
import { ContactForm } from '../components/ContactForm';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';
import { careerStreams } from '../data/careerIndex';
import { clientWork } from '../data/clientWork';
import { experience } from '../data/experience';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { systems } from '../data/systems';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.68rem] uppercase tracking-[0.18em]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.03em]';
const sectionTitle = 'text-[clamp(2.25rem,4vw,3.3rem)] font-semibold tracking-[-0.03em]';
const recordTitle = 'text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold tracking-[-0.03em]';
const actionLink =
  'inline-flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] transition-colors duration-200';

export function HomePage() {
  const featuredCorporate = experience.find((record) => record.featured) ?? experience[0];
  const featuredClient = clientWork.find((record) => record.featured) ?? clientWork[0];
  const featuredProject = projects.find((record) => record.featured) ?? projects[0];

  const firstCareerItem = careerStreams[0]?.items[0];
  const [activeCareerId, setActiveCareerId] = useState(firstCareerItem?.id ?? '');

  const activeCareerItem = useMemo(() => {
    return (
      careerStreams.flatMap((stream) => stream.items).find((item) => item.id === activeCareerId) ??
      firstCareerItem
    );
  }, [activeCareerId, firstCareerItem]);

  return (
    <>
      <RouteMeta
        title="Tre Humphries | Mechanical Engineer & Systems Builder"
        description="Mechanical engineer and systems builder working across physical systems, industrial controls, embedded systems, software, commissioning, and operational workflows."
      />

      <section id="top" className="border-b border-bone/10 bg-carbon px-4 py-8 text-bone md:px-6 lg:px-8 lg:py-12 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,0.94fr)] lg:items-center`}>
          <div className="grid gap-7">
            <SystemRail label={profile.hero.eyebrow} index="00" labelClassName="text-steel" />
            <div className="grid gap-3">
              <h1 className={`${heroDisplay} max-w-[6ch] text-[clamp(3.8rem,13vw,7.2rem)] uppercase text-bone`}>
                {profile.hero.name}
              </h1>
              <p className="m-0 text-[clamp(1rem,1.8vw,1.2rem)] tracking-[-0.02em] text-steel">
                {profile.hero.role}
              </p>
            </div>
            <div className="grid gap-4">
              <p className={`${heroDisplay} m-0 max-w-[11ch] text-[clamp(2.1rem,5vw,4.2rem)] text-bone`}>
                {profile.hero.statement}
              </p>
              <p className="m-0 max-w-[38rem] text-base leading-relaxed text-steel">
                {profile.hero.support}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {profile.hero.actions.map((action, index) => (
                <Link
                  key={action.href}
                  className={
                    index === 0
                      ? 'inline-flex min-h-12 items-center justify-center bg-orange px-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-carbon transition-colors duration-200 hover:bg-bone'
                      : `${actionLink} text-cobalt hover:text-bone`
                  }
                  to={action.href}
                >
                  {action.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-4 border-t border-bone/10 pt-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-5">
              <span className={`${mono} text-steel`}>Field annotation</span>
              <p className="m-0 max-w-[30rem] text-sm leading-relaxed text-steel">
                {profile.hero.image.caption}
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-items-end">
            <div className="w-full max-w-[44rem] border border-bone/12 bg-carbon/50 p-3 sm:p-4">
              <div className="aspect-[4/5] max-h-[46rem] overflow-hidden bg-cobalt">
                <img
                  className="h-full w-full object-cover object-[68%_42%]"
                  src={profile.hero.image.src}
                  alt={profile.hero.image.alt}
                  loading="eager"
                />
              </div>
            </div>
            <div className="w-full max-w-[33rem] border-t border-bone/10 pt-4">
              <p className={`${mono} mb-3 text-steel`}>Systems profile</p>
              <ol className="grid list-none gap-2 p-0 sm:grid-cols-2">
                {profile.hero.systemsProfile.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-bone/10 pt-2 first:border-t-0 first:pt-0"
                  >
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cobalt">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium tracking-[-0.02em] text-bone">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="career-index" className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
            <div className="grid gap-4">
              <SystemRail label="Career Index" index="01" labelClassName="text-carbon/62" />
              <h2 className={`${sectionTitle} max-w-[11ch] text-carbon`}>Three streams, one career.</h2>
            </div>
            <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/72">
              Professional work proves engineering depth. Client work proves independent delivery.
              R&amp;D proves ongoing curiosity and hands-on building.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
            <div className="grid gap-8 xl:grid-cols-3">
              {careerStreams.map((stream) => (
                <article key={stream.id} className="grid content-start gap-4">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-carbon">{stream.label}</h3>
                  <div className="grid border-t border-carbon/12">
                    {stream.items.map((item) => {
                      const isActive = activeCareerItem?.id === item.id;

                      return (
                        <Link
                          key={item.id}
                          className={`grid gap-1.5 border-b border-carbon/10 py-4 transition-all duration-200 ${
                            isActive
                              ? 'border-l-2 border-l-orange pl-4 text-carbon'
                              : 'pl-0 text-carbon/68 hover:pl-2 hover:text-carbon focus-visible:pl-2 focus-visible:text-carbon'
                          }`}
                          to={item.href}
                          onMouseEnter={() => setActiveCareerId(item.id)}
                          onFocus={() => setActiveCareerId(item.id)}
                        >
                          <span className={`${mono} text-orange`}>{item.years}</span>
                          <span className="text-[1.08rem] font-semibold tracking-[-0.02em] text-carbon">
                            {item.title}
                          </span>
                          <span className="text-sm leading-relaxed text-carbon/78">{item.subtitle}</span>
                          <span className={`${mono} text-carbon/46`}>
                            {item.domains.slice(0, 4).join(' / ')}
                          </span>
                          <span className={`${mono} ${item.status ? 'text-active' : 'text-carbon/42'}`}>
                            {item.status ?? 'Record'}
                          </span>
                          <span className="text-sm leading-relaxed text-carbon/62 xl:hidden">{item.detail}</span>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            {activeCareerItem ? (
              <div className="grid gap-4 border border-carbon/12 bg-bone px-5 py-5 xl:sticky xl:top-28">
                <SystemRail label="Focused record" labelClassName="text-carbon/62" className="gap-2.5" />
                <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold tracking-[-0.03em] text-carbon">
                  {activeCareerItem.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-carbon/76">{activeCareerItem.detail}</p>
                <p className={`${mono} text-carbon/56`}>{activeCareerItem.domains.join(' / ')}</p>
                <Link className={`${actionLink} text-carbon hover:text-cobalt`} to={activeCareerItem.href}>
                  Open record
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section id="featured-records" className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-10`}>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
            <div className="grid gap-4">
              <SystemRail label="Featured Work" index="02" labelClassName="text-carbon/62" />
              <h2 className={`${sectionTitle} max-w-[10ch] text-carbon`}>
                One representative record from each stream.
              </h2>
            </div>
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/72">
              Engineering credibility, independent delivery, and active R&amp;D each get one proof point here.
            </p>
          </div>

          <article className="grid gap-8 border-t border-carbon/12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] lg:items-start">
            <div className="grid gap-3">
              <div className="aspect-[16/10] overflow-hidden bg-carbon">
                <img
                  className="h-full w-full object-cover object-center"
                  src={featuredCorporate.image?.src}
                  alt={featuredCorporate.image?.alt ?? ''}
                  loading="eager"
                />
              </div>
              {featuredCorporate.image?.caption ? (
                <p className={`${mono} text-carbon/44`}>{featuredCorporate.image.caption}</p>
              ) : null}
            </div>

            <div className="grid gap-4">
              <SystemRail label="Corporate Engineering" labelClassName="text-carbon/62" />
              <div className="grid gap-2">
                <h3 className={`${recordTitle} text-carbon`}>Electric Sprayer Platform</h3>
                <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/72">
                  GAF Roads / Standard Industries
                </p>
              </div>
              <p className="m-0 text-base leading-relaxed text-carbon/74">{featuredCorporate.summary}</p>
              <p className={`${mono} text-cobalt`}>{featuredCorporate.domains.join(' / ')}</p>
              <Link className={`${actionLink} text-carbon hover:text-cobalt`} to="/experience#gaf-roads-platform">
                View the experience chapter
              </Link>
            </div>
          </article>

          <article className="grid gap-8 border-t border-carbon/12 pt-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-start">
            <div className="grid gap-4">
              <SystemRail label="Client Work" labelClassName="text-carbon/62" />
              <div className="grid gap-2">
                <h3 className={`${recordTitle} text-carbon`}>HomeEMS</h3>
                <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/72">
                  Website + lead / service-area system
                </p>
              </div>
              <p className="m-0 text-base leading-relaxed text-carbon/74">{featuredClient.detail}</p>
              <div className="grid gap-2 border-t border-carbon/12 pt-4">
                {featuredClient.domains.map((domain) => (
                  <span key={domain} className={`${mono} text-carbon/56`}>
                    {domain}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {featuredClient.liveUrl ? (
                  <a
                    className={`${actionLink} text-carbon hover:text-cobalt`}
                    href={featuredClient.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open live site
                  </a>
                ) : null}
                <Link className={`${actionLink} text-cobalt hover:text-carbon`} to="/client-work#homeems">
                  View client record
                </Link>
              </div>
            </div>

            <div className="border border-cobalt/20 bg-cobalt/8 p-4">
              <BrowserPreview
                preview={featuredClient.preview}
                fallback={featuredClient.previewPlaceholder}
                variant="wide"
                className="max-w-none"
              />
            </div>
          </article>

          <article className="grid gap-8 border-t border-carbon/12 pt-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(20rem,0.78fr)] lg:items-start">
            <div className="grid gap-4">
              <SystemRail
                label="R&D / Active"
                index="03"
                labelClassName="text-active"
                lineClassName="bg-active"
              />
              <p className={`${mono} text-active`}>Active / Project 001 / Seeking Support</p>
              <h3 className={`${recordTitle} text-carbon`}>Programmable Flying Creatures</h3>
              <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/74">
                {featuredProject.summary}
              </p>
              <p className="m-0 max-w-[42rem] text-sm leading-relaxed text-carbon/68">
                {featuredProject.currentStage}
              </p>
              <Link className={`${actionLink} text-carbon hover:text-active`} to="/projects/flying-creatures">
                Open project dossier
              </Link>
            </div>

            <div className="grid gap-4 border border-carbon/12 bg-carbon px-5 py-5 text-bone">
              <p className={`${mono} text-active`}>Current engineering focus</p>
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="text-sm leading-relaxed text-steel">
                  {tag}
                </span>
              ))}
              <div className="grid gap-2 border-t border-bone/10 pt-4">
                <p className={`${mono} text-steel`}>Looking for</p>
                {featuredProject.lookingFor.slice(0, 3).map((item) => (
                  <p key={item} className="m-0 text-sm leading-relaxed text-steel">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-bone px-4 pb-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:pb-16">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:items-end">
            <SystemRail label="Selected Systems" index="04" labelClassName="text-carbon/62" />
            <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/72">
              A quiet index connecting physical systems, controls, software, client delivery, and current R&amp;D.
            </p>
          </div>

          <div className="grid border-t border-carbon/12">
            {systems.map((system) => (
              <Link
                key={system.id}
                className="grid gap-2 border-b border-carbon/10 py-4 transition-colors duration-200 hover:text-cobalt md:grid-cols-[3rem_minmax(0,1.08fr)_minmax(0,0.92fr)_auto] md:items-center md:gap-4"
                to={system.href}
              >
                <span className={`${mono} text-orange`}>{system.index}</span>
                <span className="text-[clamp(1.45rem,2.8vw,2.1rem)] font-semibold tracking-[-0.03em] text-carbon">
                  {system.title}
                </span>
                <span className="text-sm leading-relaxed text-carbon/66">{system.metadata}</span>
                <span className={`${mono} ${system.status ? 'text-active' : 'text-carbon/42'}`}>
                  {system.status ?? 'Open'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:items-start`}>
          <div className="grid gap-3 lg:justify-items-start">
            <div className="w-full max-w-[28rem] overflow-hidden border border-bone/12 bg-bone/6">
              <div className="aspect-[3/4]">
                <img
                  className="h-full w-full object-cover object-[54%_42%]"
                  src={profile.contact.image.src}
                  alt={profile.contact.image.alt}
                  loading="lazy"
                />
              </div>
            </div>
            <p className={`${mono} text-steel`}>Field portrait / client-site context</p>
          </div>

          <div className="grid gap-10 border-t border-bone/10 pt-6 lg:border-t-0 lg:pt-0">
            <div className="grid gap-4">
              <SystemRail label={profile.about.label} index="05" labelClassName="text-steel" />
              <h2 className={`${sectionTitle} max-w-[14ch] text-bone`}>{profile.about.title}</h2>
              <div className="grid gap-4">
                {profile.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="m-0 max-w-[42rem] text-base leading-relaxed text-steel">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div id="contact" className="grid gap-8 border-t border-bone/10 pt-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
                <div className="grid content-start gap-4">
                  <SystemRail label={profile.contact.label} labelClassName="text-steel" />
                  <h3 className={`${sectionTitle} max-w-[10ch] text-bone`}>{profile.contact.title}</h3>
                  <p className="m-0 max-w-[30rem] text-base leading-relaxed text-steel">
                    {profile.contact.intro}
                  </p>
                  <div className="grid border-t border-bone/10 pt-4">
                    <div className="grid gap-2 border-b border-bone/10 py-3">
                      <span className={`${mono} text-cobalt`}>Location</span>
                      <span className="text-sm text-steel">{profile.brand.location}</span>
                    </div>
                    <div className="grid gap-2 border-b border-bone/10 py-3">
                      <span className={`${mono} text-cobalt`}>Email</span>
                      <a
                        className="text-sm text-steel transition-colors duration-200 hover:text-cobalt"
                        href={`mailto:${profile.brand.email}`}
                      >
                        {profile.brand.email}
                      </a>
                    </div>
                    <div className="grid gap-2 py-3">
                      <span className={`${mono} text-cobalt`}>Working model</span>
                      <span className="text-sm text-steel">
                        Scoped engineering work. Clear deliverable. Clean handoff.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-bone/10 bg-bone px-5 py-6 text-carbon md:px-7 md:py-7">
                  <ContactForm
                    helper={profile.contact.helper}
                    success={profile.contact.success}
                    error={profile.contact.error}
                    submitLabel={profile.contact.submitLabel}
                    email={profile.brand.email}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
