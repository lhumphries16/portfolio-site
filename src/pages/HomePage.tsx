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

const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';
const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';
const actionLink =
  'inline-flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.22em] transition-colors duration-200';

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

      <section id="top" className="border-b border-bone/10 bg-carbon">
        <div className="mx-auto grid max-w-[1720px] lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,32rem)_minmax(0,1fr)]">
          <div className="grid content-start gap-8 px-4 py-6 md:px-6 md:py-8 lg:min-h-[calc(100dvh-4.6rem)] lg:content-between lg:px-8 lg:py-10 xl:px-12">
            <div className="grid gap-7">
              <SystemRail label={profile.hero.eyebrow} index="00" labelClassName="text-steel" />
              <div className="grid gap-3">
                <h1 className={`${display} max-w-[7ch] text-[clamp(4.2rem,18vw,9rem)] text-bone`}>
                  {profile.hero.name}
                </h1>
                <p className="m-0 text-[clamp(1rem,1.8vw,1.25rem)] tracking-[-0.03em] text-steel">
                  {profile.hero.role}
                </p>
              </div>
              <div className="grid gap-4">
                <p className={`${display} m-0 max-w-[8ch] text-[clamp(2.7rem,8vw,5.8rem)] text-bone`}>
                  {profile.hero.statement}
                </p>
                <p className="m-0 max-w-[33rem] text-base leading-relaxed text-steel">
                  {profile.hero.support}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {profile.hero.actions.map((action, index) => (
                  <Link
                    key={action.href}
                    className={
                      index === 0
                        ? 'inline-flex min-h-12 items-center justify-center bg-orange px-5 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-carbon transition-colors duration-200 hover:bg-bone'
                        : `${actionLink} text-cobalt hover:text-bone`
                    }
                    to={action.href}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-5 border-t border-bone/10 pt-5 lg:border-t-0 lg:pt-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`${mono} text-steel`}>System rail</span>
                <span className="h-1.5 w-14 bg-cobalt" aria-hidden="true" />
                <span className="h-2.5 w-2.5 bg-orange" aria-hidden="true" />
                <span className={`${mono} text-steel`}>Field / panel / commissioning</span>
              </div>
              <p className="m-0 max-w-[26rem] text-sm leading-relaxed text-steel">
                {profile.hero.image.caption}
              </p>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden bg-cobalt sm:min-h-[38rem] lg:min-h-[calc(100dvh-4.6rem)]">
            <img
              className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
              src={profile.hero.image.src}
              alt={profile.hero.image.alt}
              loading="eager"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(90deg, rgb(16 19 23 / 0.9) 0%, rgb(16 19 23 / 0.28) 26%, rgb(16 19 23 / 0.06) 54%, rgb(16 19 23 / 0.56) 100%)',
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-4 md:p-6 lg:p-8 xl:p-10">
              <div className="ml-auto hidden bg-carbon/86 px-4 py-3 lg:flex lg:items-center lg:gap-3">
                <span className={`${mono} text-steel`}>Engineering archive</span>
                <span className="h-2.5 w-2.5 bg-orange" aria-hidden="true" />
                <span className={`${mono} text-bone`}>Controls / hardware / operating context</span>
              </div>

              <div className="mt-auto self-end bg-cobalt px-5 py-5 text-carbon md:max-w-[34rem] md:px-6 md:py-6">
                <p className={`${mono} mb-4 text-carbon/70`}>Systems profile</p>
                <ol className="grid list-none gap-2 p-0 md:grid-cols-2">
                  {profile.hero.systemsProfile.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-carbon/12 pt-2 first:border-t-0 first:pt-0"
                    >
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium tracking-[-0.02em]">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="career-index" className="bg-bone px-4 py-16 text-carbon md:px-6 md:py-20 lg:px-8 xl:px-12 xl:py-24">
        <div className="mx-auto grid max-w-[1700px] gap-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="grid gap-5">
              <SystemRail label="Career Index" index="01" labelClassName="text-carbon/68" />
              <h2 className={`${display} max-w-[12ch] text-[clamp(2.8rem,7vw,5.9rem)] text-carbon`}>
                Three streams, one career.
              </h2>
            </div>
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/74">
              Professional work proves engineering depth. Client work proves independent delivery.
              R&amp;D proves ongoing curiosity and hands-on building.
            </p>
          </div>

          <div
            className="hidden grid-cols-6 gap-4 border-b border-carbon/12 pb-4 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-carbon/44 md:grid"
            aria-hidden="true"
          >
            <span>2021</span>
            <span>2022</span>
            <span>2024</span>
            <span>2025</span>
            <span>2026</span>
            <span>Now</span>
          </div>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-10">
              {careerStreams.map((stream) => (
                <article key={stream.id} className="grid content-start gap-4">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-carbon">{stream.label}</h3>
                  <div className="grid border-t border-carbon/14">
                    {stream.items.map((item) => {
                      const isActive = activeCareerItem?.id === item.id;

                      return (
                        <Link
                          key={item.id}
                          className={`grid gap-1.5 border-b border-carbon/10 py-4 transition-all duration-200 ${
                            isActive
                              ? 'border-l-2 border-l-orange pl-4 text-carbon'
                              : 'pl-0 text-carbon/70 hover:pl-3 hover:text-carbon focus-visible:pl-3 focus-visible:text-carbon'
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
              <div className="grid gap-4 bg-orange px-5 py-6 text-carbon xl:sticky xl:top-28">
                <p className={`${mono} text-carbon/68`}>Focused record</p>
                <h3 className={`${display} max-w-[10ch] text-[clamp(2rem,4vw,3.5rem)] text-carbon`}>
                  {activeCareerItem.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-carbon/84">{activeCareerItem.detail}</p>
                <p className={`${mono} text-carbon/72`}>{activeCareerItem.domains.join(' / ')}</p>
                <Link className={`${actionLink} text-carbon hover:text-bone`} to={activeCareerItem.href}>
                  Open record
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section id="featured-records" className="bg-bone text-carbon">
        <div className="bg-orange px-4 py-12 md:px-6 lg:px-8 xl:px-12">
          <div className="mx-auto grid max-w-[1700px] gap-4 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-end lg:gap-10">
            <SystemRail label="Featured Work" index="02" labelClassName="text-carbon/70" />
            <h2 className={`${display} max-w-[12ch] text-[clamp(2.8rem,7vw,6.3rem)] text-carbon`}>
              One representative record from each stream.
            </h2>
          </div>
        </div>

        <article className="px-4 py-12 md:px-6 lg:px-8 xl:px-12 xl:py-16">
          <div className="mx-auto grid max-w-[1700px] gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-center">
            <div className="grid gap-3">
              <div className="min-h-[22rem] overflow-hidden bg-carbon md:min-h-[32rem] xl:min-h-[42rem]">
                <img
                  className="h-full w-full object-cover"
                  src={featuredCorporate.image?.src}
                  alt={featuredCorporate.image?.alt ?? ''}
                  loading="eager"
                />
              </div>
              {featuredCorporate.image?.caption ? (
                <p className={`${mono} text-carbon/46`}>{featuredCorporate.image.caption}</p>
              ) : null}
            </div>

            <div className="grid gap-5 bg-carbon px-5 py-6 text-bone md:px-7 md:py-8 lg:-ml-14 xl:-ml-18">
              <SystemRail label="Corporate Engineering" labelClassName="text-steel" />
              <div className="grid gap-2">
                <h3 className={`${display} max-w-[9ch] text-[clamp(2.4rem,5vw,4.5rem)] text-bone`}>
                  Electric Sprayer Platform
                </h3>
                <p className="m-0 text-[1rem] tracking-[-0.02em] text-steel">GAF Roads / Standard Industries</p>
              </div>
              <p className="m-0 text-base leading-relaxed text-steel">{featuredCorporate.summary}</p>
              <p className={`${mono} text-cobalt`}>{featuredCorporate.domains.join(' / ')}</p>
              <Link className={`${actionLink} text-bone hover:text-cobalt`} to="/experience#gaf-roads-platform">
                View the experience chapter
              </Link>
            </div>
          </div>
        </article>

        <article className="bg-cobalt px-4 py-12 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
          <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
            <div className="grid gap-5">
              <SystemRail label="Client Work" labelClassName="text-bone/72" lineClassName="bg-carbon" />
              <h3 className={`${display} max-w-[8ch] text-[clamp(2.4rem,6vw,4.8rem)] text-bone`}>
                HomeEMS
              </h3>
              <p className="m-0 text-[1.05rem] leading-relaxed text-bone/86">{featuredClient.detail}</p>
              <div className="grid gap-2 border-t border-bone/18 pt-4">
                {featuredClient.domains.map((domain) => (
                  <span key={domain} className={`${mono} text-bone/72`}>
                    {domain}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {featuredClient.liveUrl ? (
                  <a
                    className={`${actionLink} text-bone hover:text-carbon`}
                    href={featuredClient.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open live site
                  </a>
                ) : null}
                <Link className={`${actionLink} text-carbon hover:text-bone`} to="/client-work#homeems">
                  View client record
                </Link>
              </div>
            </div>

            <div className="lg:-mr-8 xl:-mr-12">
              <BrowserPreview preview={featuredClient.preview} fallback={featuredClient.previewPlaceholder} />
            </div>
          </div>
        </article>

        <article className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-18">
          <div className="mx-auto grid max-w-[1700px] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-start">
            <div className="grid gap-6">
              <SystemRail
                label="R&D / Active"
                index="03"
                labelClassName="text-active"
                lineClassName="bg-active"
                markerClassName="bg-orange"
              />
              <div className="grid gap-3">
                <p className={`${mono} text-active`}>Active / Project 001 / Seeking Support</p>
                <h3 className={`${display} max-w-[11ch] text-[clamp(3rem,8vw,6.4rem)] text-bone`}>
                  Programmable Flying Creatures
                </h3>
              </div>
              <p className="m-0 max-w-[44rem] text-[1.06rem] leading-relaxed text-steel">
                {featuredProject.summary}
              </p>
              <p className="m-0 max-w-[44rem] text-base leading-relaxed text-steel">
                {featuredProject.currentStage}
              </p>
            </div>

            <div className="grid gap-5 border-t border-active/35 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="grid gap-2">
                <p className={`${mono} text-active`}>Current engineering focus</p>
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="text-sm leading-relaxed text-bone">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid gap-2 border-t border-bone/10 pt-4">
                <p className={`${mono} text-steel`}>Looking for</p>
                {featuredProject.lookingFor.slice(0, 3).map((item) => (
                  <p key={item} className="m-0 text-sm leading-relaxed text-steel">
                    {item}
                  </p>
                ))}
              </div>
              <Link className={`${actionLink} text-bone hover:text-active`} to="/projects/flying-creatures">
                Open project dossier
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-18">
        <div className="mx-auto grid max-w-[1700px] gap-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:items-end">
            <SystemRail label="Selected Systems" index="04" labelClassName="text-carbon/70" />
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/72">
              A compact index connecting physical systems, controls, software, client delivery, and current R&amp;D.
            </p>
          </div>

          <div className="grid border-t border-carbon/12">
            {systems.map((system) => (
              <Link
                key={system.id}
                className="grid gap-2 border-b border-carbon/10 py-4 transition-colors duration-200 hover:text-cobalt md:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,0.8fr)_auto] md:items-baseline md:gap-4"
                to={system.href}
              >
                <span className={`${mono} text-orange`}>{system.index}</span>
                <span className={`${display} text-[clamp(1.9rem,3.6vw,3.2rem)] text-carbon`}>{system.title}</span>
                <span className="text-sm leading-relaxed text-carbon/66">{system.metadata}</span>
                <span className={`${mono} ${system.status ? 'text-active' : 'text-carbon/42'}`}>
                  {system.status ?? 'Open'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-carbon">
        <div className="mx-auto grid max-w-[1720px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="min-h-[22rem] overflow-hidden bg-carbon sm:min-h-[28rem] lg:min-h-[58rem]">
            <img
              className="h-full w-full object-cover"
              src={profile.contact.image.src}
              alt={profile.contact.image.alt}
              loading="lazy"
            />
          </div>

          <div className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
            <div className="grid gap-10">
              <div className="grid gap-5">
                <SystemRail label={profile.about.label} index="05" labelClassName="text-carbon/68" />
                <h2 className={`${display} max-w-[12ch] text-[clamp(2.8rem,6vw,5.6rem)] text-carbon`}>
                  {profile.about.title}
                </h2>
                <div className="grid gap-4">
                  {profile.about.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="m-0 max-w-[38rem] text-base leading-relaxed text-carbon/76">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div id="contact" className="grid gap-8 border-t border-carbon/12 pt-8">
                <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className="grid content-start gap-4">
                    <SystemRail label={profile.contact.label} labelClassName="text-carbon/68" />
                    <h3 className={`${display} max-w-[8ch] text-[clamp(2.4rem,5vw,4.8rem)] text-carbon`}>
                      {profile.contact.title}
                    </h3>
                    <p className="m-0 max-w-[28rem] text-base leading-relaxed text-carbon/76">
                      {profile.contact.intro}
                    </p>
                    <div className="grid border-t border-carbon/12 pt-4">
                      <div className="grid gap-2 border-b border-carbon/10 py-3">
                        <span className={`${mono} text-cobalt`}>Location</span>
                        <span className="text-sm text-carbon/74">{profile.brand.location}</span>
                      </div>
                      <div className="grid gap-2 border-b border-carbon/10 py-3">
                        <span className={`${mono} text-cobalt`}>Email</span>
                        <a className="text-sm text-carbon/74 transition-colors duration-200 hover:text-cobalt" href={`mailto:${profile.brand.email}`}>
                          {profile.brand.email}
                        </a>
                      </div>
                      <div className="grid gap-2 py-3">
                        <span className={`${mono} text-cobalt`}>Working model</span>
                        <span className="text-sm text-carbon/74">
                          Scoped engineering work. Clear deliverable. Clean handoff.
                        </span>
                      </div>
                    </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
