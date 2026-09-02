import { ButtonLink } from '../components/ButtonLink';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, siteContent } from '../data/siteContent';
import { profile } from '../data/profile';

export function AboutPage() {
  return (
    <>
      <RouteMeta
        title="About | Tre Humphries"
        description="About Tre Humphries, an independent practice spanning web systems, controls engineering, and clean owner handoff."
      />

      <section className="hero-shell">
        <div className="page-wrap surface-card overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.42fr)_minmax(0,0.58fr)] lg:items-center">
            <div className="overflow-hidden rounded-[1.6rem]">
              <img
                className="aspect-[5/4] w-full object-cover"
                style={{ objectPosition: profile.portrait.objectPosition }}
                src={profile.portrait.src}
                alt={profile.portrait.alt}
              />
            </div>

            <div className="grid gap-5">
              <p className="eyebrow">About</p>
              <h1 className="m-0 max-w-[10ch] text-[clamp(2.8rem,5vw,4.65rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon">
                {siteContent.about.title}
              </h1>
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-lead max-w-[42rem]">
                  {paragraph}
                </p>
              ))}
              <p className="m-0 text-[0.96rem] leading-relaxed text-carbon/58">{profile.brand.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-4 xl:grid-cols-3">
          {siteContent.about.pillars.map((pillar, index) => (
            <article key={pillar.title} className={index === 1 ? 'surface-dark grid gap-3 px-5 py-5 text-white' : 'surface-soft grid gap-3 px-5 py-5'}>
              <h2 className={`m-0 text-[1.32rem] font-semibold leading-[1.02] tracking-[-0.03em] ${index === 1 ? 'text-white' : 'text-carbon'}`}>
                {pillar.title}
              </h2>
              <p className={`m-0 text-[0.98rem] leading-relaxed ${index === 1 ? 'text-white/78' : 'text-carbon/72'}`}>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-card px-6 py-7 md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="eyebrow">Schedule</p>
              <h2 className="section-heading max-w-[10ch]">Need to talk through a project?</h2>
              <p className="body-copy max-w-[38rem]">
                Use the contact route that matches the work. The best conversations start from the actual problem and
                the actual handoff.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink external={ctaLinks.web.external} href={ctaLinks.web.href}>
                {ctaLinks.web.label}
              </ButtonLink>
              <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href} variant="secondary">
                {ctaLinks.controls.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
