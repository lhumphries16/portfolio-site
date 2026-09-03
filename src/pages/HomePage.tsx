import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, controlsProjects, homePageProjects, siteContent } from '../data/siteContent';
import { profile } from '../data/profile';

export function HomePage() {
  const webFeatureAsset = homePageProjects.flagship.supportingAssets?.[1] ?? homePageProjects.flagship.primaryAsset;

  return (
    <>
      <RouteMeta
        title="Tre Humphries | Websites & Controls for Real Operating Businesses"
        description="Tre Humphries builds websites and digital systems for established service businesses and local brands, with scoped controls engineering for defined technical problems."
      />

      <section className="hero-shell">
        <div className="page-wrap grid gap-8 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:items-start">
          <div className="grid gap-7">
            <div className="grid gap-5">
              <p className="eyebrow">Independent web &amp; controls practice</p>
              <h1 className="m-0 max-w-[15ch] text-[clamp(2.8rem,5.2vw,4.75rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon xl:max-w-[12ch]">
                {siteContent.home.title}
              </h1>
            </div>

            <div className="grid gap-3">
              {siteContent.home.intro.map((paragraph) => (
                <p key={paragraph} className="body-lead max-w-[41rem]">
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
          </div>

          <div className="grid gap-4">
            <article className="surface-card overflow-hidden p-4 md:p-5">
              <div className="browser-shell">
                <div className="browser-topbar">
                  <div className="browser-dots" aria-hidden="true">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                  </div>
                  <p className="m-0 truncate text-[0.82rem] text-carbon/52">Flagship website / HomeEMS</p>
                  <span className="h-2.5 w-2.5 rounded-full bg-cobalt/70" aria-hidden="true" />
                </div>
                <img
                  className="aspect-[16/10] w-full object-cover object-top"
                  src={homePageProjects.flagship.primaryAsset.src}
                  alt={homePageProjects.flagship.primaryAsset.alt}
                />
              </div>

              <div className="grid gap-4 p-1 pt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <div className="grid gap-2">
                  <p className="m-0 text-[1.32rem] font-semibold tracking-[-0.03em] text-carbon">HomeEMS</p>
                  <p className="body-copy max-w-[38rem]">{homePageProjects.flagship.summary}</p>
                </div>
                <ButtonLink href="/work/homeems" variant="text">
                  Read the flagship case study
                </ButtonLink>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <article className="surface-soft grid gap-3 p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.3rem] object-cover object-top"
                  src={homePageProjects.workflow.primaryAsset.src}
                  alt={homePageProjects.workflow.primaryAsset.alt}
                />
                <div className="grid gap-1">
                  <p className="m-0 text-[1rem] font-semibold tracking-[-0.03em] text-carbon">BSB Order System</p>
                  <p className="detail-copy">Focused public workflow design for event and bulk ordering.</p>
                </div>
              </article>

              <article className="surface-card grid gap-4 p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.3rem] object-cover"
                  src={profile.portrait.src}
                  style={{ objectPosition: profile.portrait.objectPosition }}
                  alt={profile.portrait.alt}
                />
                <p className="body-copy">
                  Independent practice, direct communication, and delivery shaped for a clean owner handoff.
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="page-wrap pt-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {siteContent.home.reputationPoints.map((point) => (
              <div key={point.label} className="stat-card grid gap-2">
                <p className="m-0 text-[0.82rem] font-semibold tracking-[0.05em] text-carbon/46">{point.label}</p>
                <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{point.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading max-w-[10ch]">Selected work</h2>
            <p className="body-lead max-w-[42rem]">
              A few examples across websites, workflow systems, and controls engineering.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:items-start">
            <ProjectCard item={homePageProjects.flagship} variant="feature" />

            <div className="grid gap-6">
              <ProjectCard item={homePageProjects.visual} />
              <ProjectCard item={homePageProjects.controls} showAction={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <article className="surface-card grid gap-6 overflow-hidden p-6 md:p-8">
            <img className="aspect-[16/10] w-full rounded-[1.5rem] object-cover object-top" src={webFeatureAsset.src} alt={webFeatureAsset.alt} />
            <div className="grid gap-4">
              <p className="eyebrow">Web &amp; Digital</p>
              <h2 className="section-heading max-w-[10ch]">Websites built around the business behind them.</h2>
              <p className="body-lead max-w-[40rem]">{siteContent.web.intro}</p>
              <div className="grid gap-3 md:grid-cols-3">
                {siteContent.home.webPoints.map((point) => (
                  <div key={point} className="rounded-[1.4rem] bg-paper px-4 py-4">
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
            </div>
          </article>

          <article className="surface-dark grid gap-6 overflow-hidden p-6 text-white md:p-8">
            <img
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              src={controlsProjects[0].primaryAsset.src}
              alt={controlsProjects[0].primaryAsset.alt}
            />
            <div className="grid gap-4">
              <p className="m-0 text-[0.8rem] font-semibold tracking-[0.08em] text-white/60">Controls Engineering</p>
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
                Scoped controls engineering for defined problems.
              </h2>
              <div className="grid gap-3">
                {siteContent.home.controlsPoints.map((point) => (
                  <p key={point} className="m-0 border-t border-white/10 pt-3 text-[0.98rem] leading-relaxed text-white/78 first:border-t-0 first:pt-0">
                    {point}
                  </p>
                ))}
              </div>
              <div>
                <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href} variant="secondary">
                  {ctaLinks.controls.label}
                </ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-soft overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.42fr)_minmax(0,0.58fr)] lg:items-center">
            <div className="overflow-hidden rounded-[1.6rem]">
              <img
                className="aspect-[5/4] w-full object-cover"
                style={{ objectPosition: profile.portrait.objectPosition }}
                src={profile.portrait.src}
                alt={profile.portrait.alt}
              />
            </div>

            <div className="grid gap-4">
              <p className="eyebrow">About the practice</p>
              <h2 className="section-heading max-w-[12ch]">A small practice with a direct owner handoff.</h2>
              <p className="body-lead max-w-[40rem]">
                The background spans mechanical systems, controls, field work, internal tools, and client-facing
                websites. The useful through-line is turning complicated requirements into something clearer and more
                ownable.
              </p>
              <p className="body-copy max-w-[40rem]">
                The same practice can help with either a website or a defined engineering problem, with scope and
                handoff shaped to the work.
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
        </div>
      </section>
    </>
  );
}
