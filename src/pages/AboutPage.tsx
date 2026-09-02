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

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-carbon/10 bg-paper">
            <img
              className="aspect-[5/4] w-full object-cover"
              style={{ objectPosition: profile.portrait.objectPosition }}
              src={profile.portrait.src}
              alt={profile.portrait.alt}
            />
          </div>

          <div className="grid gap-5">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">About</p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(3rem,7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-carbon">
              {siteContent.about.title}
            </h1>
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="m-0 max-w-[42rem] text-[1.02rem] leading-relaxed text-carbon/72">
                {paragraph}
              </p>
            ))}
            <p className="m-0 text-[0.96rem] leading-relaxed text-carbon/58">{profile.brand.location}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-4 xl:grid-cols-3">
          {siteContent.about.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`grid gap-3 rounded-[1.6rem] border border-carbon/10 ${
                index === 1 ? 'bg-white shadow-[0_18px_50px_rgba(24,34,45,0.05)]' : 'bg-paper'
              } px-5 py-5`}
            >
              <h2 className="m-0 text-[1.28rem] font-semibold leading-[1] tracking-[-0.03em] text-carbon">
                {pillar.title}
              </h2>
              <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 pt-10 md:px-6 lg:px-8 lg:pb-18 lg:pt-14 xl:px-12">
        <div className="page-wrap rounded-[2rem] border border-carbon/10 bg-white px-6 py-7 shadow-[0_24px_80px_rgba(24,34,45,0.08)] md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                Need to talk through a project?
              </h2>
              <p className="m-0 max-w-[38rem] text-[1rem] leading-relaxed text-carbon/68">
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
