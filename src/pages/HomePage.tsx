import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, controlsProjects, homePageProjects, siteContent } from '../data/siteContent';
import { profile } from '../data/profile';

export function HomePage() {
  return (
    <>
      <RouteMeta
        title="Tre Humphries | Websites & Controls for Real Operating Businesses"
        description="Tre Humphries builds websites and digital systems for established service businesses and local brands, with scoped controls engineering for defined technical problems."
      />

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
          <div className="grid gap-6">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">
              Tre Humphries
            </p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(3.15rem,7.2vw,5.9rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-carbon">
              {siteContent.home.title}
            </h1>
            <div className="grid gap-3">
              {siteContent.home.intro.map((paragraph) => (
                <p key={paragraph} className="m-0 max-w-[40rem] text-[1.04rem] leading-relaxed text-carbon/74">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink external={ctaLinks.web.external} href={ctaLinks.web.href}>
                {ctaLinks.web.label}
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Explore selected work
              </ButtonLink>
              <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href} variant="text">
                {ctaLinks.controls.label}
              </ButtonLink>
            </div>

            <div className="grid gap-3 border-t border-carbon/10 pt-5 md:grid-cols-3">
              {siteContent.home.reputationPoints.map((point) => (
                <div key={point.label} className="grid gap-1">
                  <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                    {point.label}
                  </p>
                  <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{point.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(15rem,0.62fr)]">
            <article className="grid gap-4 rounded-[2rem] border border-carbon/10 bg-white p-4 shadow-[0_24px_80px_rgba(24,34,45,0.08)]">
              <img
                className="aspect-[16/10] w-full rounded-[1.45rem] object-cover object-top"
                src={homePageProjects.flagship.primaryAsset.src}
                alt={homePageProjects.flagship.primaryAsset.alt}
              />
              <div className="grid gap-2 px-1">
                <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                  Flagship web proof
                </p>
                <h2 className="m-0 text-[1.75rem] font-semibold leading-[0.97] tracking-[-0.04em] text-carbon">
                  HomeEMS
                </h2>
                <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/68">
                  A structured service-business website with emergency intake, service-area coverage, gallery proof,
                  and client-owned handoff.
                </p>
                <div className="pt-1">
                  <ButtonLink href="/work/homeems" variant="text">
                    Read the flagship case study
                  </ButtonLink>
                </div>
              </div>
            </article>

            <div className="grid gap-4">
              <article className="grid gap-3 rounded-[1.8rem] border border-carbon/10 bg-paper p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover object-top"
                  src={homePageProjects.workflow.primaryAsset.src}
                  alt={homePageProjects.workflow.primaryAsset.alt}
                />
                <div className="grid gap-1 px-1">
                  <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                    Workflow proof
                  </p>
                  <p className="m-0 text-[1rem] font-semibold tracking-[-0.03em] text-carbon">
                    BSB Order System
                  </p>
                </div>
              </article>

              <article className="grid gap-3 rounded-[1.8rem] border border-carbon/10 bg-white p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                  src={profile.portrait.src}
                  style={{ objectPosition: profile.portrait.objectPosition }}
                  alt={profile.portrait.alt}
                />
                <p className="m-0 px-1 text-[0.96rem] leading-relaxed text-carbon/68">
                  Independent practice, direct communication, and work built for a clean handoff.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <div className="grid gap-4">
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.2rem,4.4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-carbon">
              Selected proof, weighted on purpose.
            </h2>
            <p className="m-0 max-w-[38rem] text-[1.02rem] leading-relaxed text-carbon/68">
              The site should earn confidence with specific work, not a flat archive. HomeEMS carries the most weight
              because it is the clearest match for the actively marketed web lane.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ProjectCard item={homePageProjects.workflow} variant="compact" />
            <ProjectCard item={homePageProjects.visual} variant="compact" />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-4 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)]">
          <article className="grid gap-5 rounded-[2rem] border border-carbon/10 bg-white p-6 shadow-[0_20px_60px_rgba(24,34,45,0.07)]">
            <div className="grid gap-2">
              <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                Web & Digital
              </p>
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.15rem,4vw,3.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                The main commercial front door.
              </h2>
              <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/70">{siteContent.web.intro}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {siteContent.home.webPoints.map((point) => (
                <div key={point} className="rounded-[1.2rem] bg-paper px-4 py-4">
                  <p className="m-0 text-[0.95rem] leading-relaxed text-carbon/72">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink external={ctaLinks.web.external} href={ctaLinks.web.href}>
                {ctaLinks.web.label}
              </ButtonLink>
              <ButtonLink href="/web" variant="secondary">
                See the web offer
              </ButtonLink>
            </div>
          </article>

          <article className="grid gap-5 rounded-[2rem] border border-carbon/10 bg-paper p-6">
            <div className="grid gap-2">
              <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                Controls Engineering
              </p>
              <h2 className="m-0 max-w-[10ch] text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                Separate buyer path, same practice.
              </h2>
            </div>

            <div className="grid gap-3">
              {siteContent.home.controlsPoints.map((point) => (
                <p key={point} className="m-0 border-b border-carbon/10 pb-3 text-[0.98rem] leading-relaxed text-carbon/72 last:border-b-0 last:pb-0">
                  {point}
                </p>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {controlsProjects.slice(0, 2).map((item) => (
                <div key={item.slug} className="grid gap-2 rounded-[1.2rem] border border-carbon/10 bg-white p-3">
                  <img className="aspect-[4/3] w-full rounded-[1rem] object-cover" src={item.primaryAsset.src} alt={item.primaryAsset.alt} />
                  <p className="m-0 text-[0.95rem] font-semibold tracking-[-0.03em] text-carbon">{item.shortTitle ?? item.title}</p>
                </div>
              ))}
            </div>

            <div>
              <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href} variant="secondary">
                {ctaLinks.controls.label}
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-14 pt-10 md:px-6 lg:px-8 lg:pb-18 lg:pt-14 xl:px-12">
        <div className="page-wrap grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-carbon/10 bg-paper">
            <img
              className="aspect-[5/4] w-full object-cover"
              style={{ objectPosition: profile.portrait.objectPosition }}
              src={profile.portrait.src}
              alt={profile.portrait.alt}
            />
          </div>

          <div className="grid gap-4">
            <h2 className="m-0 max-w-[12ch] text-[clamp(2.15rem,4vw,3.1rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              A small practice with a direct owner handoff.
            </h2>
            <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/72">
              The background spans mechanical systems, controls, field work, internal tools, and client-facing
              websites. The useful through-line is turning complicated requirements into something clearer and more
              ownable.
            </p>
            <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/72">
              That is why the site can credibly serve both web buyers and technical buyers without pretending they are
              the same project or the same pitch.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="text">
                More about the practice
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Tre
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
