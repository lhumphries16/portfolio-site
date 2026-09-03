import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import {
  ctaLinks,
  flagshipProject,
  secondaryCaseStudy,
  siteContent,
  supportingWebProjects,
} from '../data/siteContent';

export function WebPage() {
  const flagshipSupport = flagshipProject.supportingAssets ?? [];
  const commercialSupportProjects = supportingWebProjects.filter((item) => item.slug !== 'mayara-miranda');

  return (
    <>
      <RouteMeta
        title="Web & Digital | Tre Humphries"
        description="Fixed-scope websites and digital systems for established service businesses and local brands, built for client ownership and clean handoff."
      />

      <section className="hero-shell">
        <div className="page-wrap grid gap-8 xl:grid-cols-[minmax(0,0.47fr)_minmax(0,0.53fr)] xl:items-start">
          <div className="grid gap-6 xl:sticky xl:top-28">
            <p className="eyebrow">Web &amp; Digital</p>
            <h1 className="m-0 max-w-[15ch] text-[clamp(2.35rem,9vw,4.45rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon xl:max-w-[12ch]">
              {siteContent.web.title}
            </h1>
            <p className="body-lead max-w-[34rem]">{siteContent.web.intro}</p>

            <div className="surface-soft px-5 py-4">
              <p className="m-0 text-[0.96rem] leading-relaxed text-carbon/72">
                <span className="font-semibold text-carbon">Pricing:</span> {siteContent.web.pricing}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <ButtonLink className="w-full sm:w-auto" external={ctaLinks.web.external} href={ctaLinks.web.href}>
                {ctaLinks.web.label}
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="/work/homeems" variant="secondary">
                Read the HomeEMS case study
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
                  <p className="m-0 truncate text-[0.82rem] text-carbon/52">HomeEMS flagship website</p>
                  <span className="h-2.5 w-2.5 rounded-full bg-cobalt/70" aria-hidden="true" />
                </div>
                <img
                  className="aspect-[16/10] w-full object-cover object-top"
                  src={flagshipProject.primaryAsset.src}
                  alt={flagshipProject.primaryAsset.alt}
                />
              </div>
              <div className="grid gap-2 p-1 pt-5">
                <p className="m-0 text-[1.34rem] font-semibold tracking-[-0.03em] text-carbon">HomeEMS</p>
                <p className="body-copy max-w-[40rem]">{flagshipProject.summary}</p>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {flagshipSupport.slice(0, 2).map((asset) => (
                <article key={asset.src} className="surface-soft grid gap-3 p-4">
                  <img className="aspect-[4/3] w-full rounded-[1.3rem] object-cover object-top" src={asset.src} alt={asset.alt} />
                  {asset.caption ? <p className="detail-copy">{asset.caption}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-10 pt-4 md:pb-12 md:pt-6 lg:pb-14 lg:pt-8">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Best fit</p>
            <h2 className="section-heading max-w-[15ch]">Best fit for established businesses with real operations.</h2>
            <p className="body-lead max-w-[38rem]">
              Best fit for established businesses whose real-world operation has outgrown the website representing it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {siteContent.web.audience.map((item) => (
              <article key={item} className="surface-card px-5 py-5">
                <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-12 lg:py-14">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Selected website work</p>
            <h2 className="section-heading max-w-[10ch]">Selected website work</h2>
            <p className="body-lead max-w-[40rem]">
              HomeEMS is the clearest example of a service-business site built around structure, intake, and handoff.
            </p>
          </div>

          <ProjectCard item={flagshipProject} variant="feature" />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <ProjectCard item={secondaryCaseStudy} />
            <ProjectCard item={commercialSupportProjects[0]} />
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <article className="surface-card grid gap-5 p-6 md:p-8">
            <div className="grid gap-3">
              <p className="eyebrow">Engagement model</p>
              <h2 className="section-heading max-w-[10ch]">A fixed-scope website engagement with a clean handoff.</h2>
              <p className="body-copy max-w-[40rem]">
                Planning, responsive design and build, service pages, intake flow, search structure, launch, and a
                client-owned result.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {siteContent.web.offer.map((item) => (
                <div key={item} className="rounded-[1.4rem] bg-paper px-4 py-4">
                  <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="surface-soft grid gap-4 p-6 md:p-8">
              <p className="eyebrow">How projects run</p>
              <div className="grid gap-4">
                {siteContent.web.process.map((item, index) => (
                  <div key={item} className="grid gap-2 border-t border-carbon/10 pt-4 first:border-t-0 first:pt-0">
                    <p className="m-0 text-[0.88rem] font-semibold text-carbon/48">Step {index + 1}</p>
                    <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-dark grid gap-4 p-6 text-white md:p-8">
              <p className="m-0 text-[0.8rem] font-semibold tracking-[0.08em] text-white/60">Clear scope</p>
              <div className="grid gap-3">
                {siteContent.web.boundaries.map((item) => (
                  <p key={item} className="m-0 border-t border-white/10 pt-3 text-[0.98rem] leading-relaxed text-white/80 first:border-t-0 first:pt-0">
                    {item}
                  </p>
                ))}
              </div>
              <div className="soft-rule border-white/10 pt-4">
                <p className="m-0 max-w-[32rem] text-[1rem] leading-relaxed text-white/78">{siteContent.web.pricing}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-card px-6 py-7 md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="eyebrow">Schedule</p>
              <h2 className="section-heading max-w-[10ch]">Have a site that no longer matches the business behind it?</h2>
              <p className="body-copy max-w-[38rem]">
                Start with the current site, what the business actually needs, and what a better handoff should leave
                behind.
              </p>
            </div>
            <ButtonLink className="w-full justify-center sm:w-auto" external={ctaLinks.web.external} href={ctaLinks.web.href}>
              {ctaLinks.web.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
