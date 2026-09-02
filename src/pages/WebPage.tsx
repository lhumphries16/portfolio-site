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
  return (
    <>
      <RouteMeta
        title="Web & Digital | Tre Humphries"
        description="Fixed-scope websites and digital systems for established service businesses and local brands, built for client ownership and clean handoff."
      />

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start">
          <div className="grid gap-5">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">Web & Digital</p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(3rem,7vw,5.3rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-carbon">
              {siteContent.web.title}
            </h1>
            <p className="m-0 max-w-[40rem] text-[1.06rem] leading-relaxed text-carbon/74">{siteContent.web.intro}</p>
            <div className="rounded-[1.45rem] border border-carbon/10 bg-white px-5 py-4 shadow-[0_18px_50px_rgba(24,34,45,0.05)]">
              <p className="m-0 text-[1rem] leading-relaxed text-carbon/72">
                <span className="font-semibold text-carbon">Pricing:</span> {siteContent.web.pricing}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink external={ctaLinks.web.external} href={ctaLinks.web.href}>
                {ctaLinks.web.label}
              </ButtonLink>
              <ButtonLink href="/work/homeems" variant="secondary">
                Read the HomeEMS case study
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.06fr)_minmax(15rem,0.64fr)]">
            <div className="rounded-[2rem] border border-carbon/10 bg-white p-4 shadow-[0_24px_80px_rgba(24,34,45,0.08)]">
              <img
                className="aspect-[16/10] w-full rounded-[1.45rem] object-cover object-top"
                src={flagshipProject.primaryAsset.src}
                alt={flagshipProject.primaryAsset.alt}
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.8rem] border border-carbon/10 bg-paper p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.2rem] object-cover object-top"
                  src={secondaryCaseStudy.primaryAsset.src}
                  alt={secondaryCaseStudy.primaryAsset.alt}
                />
                <p className="m-0 px-1 pt-4 text-[0.95rem] leading-relaxed text-carbon/68">
                  Strong supporting proof for customer flow and lightweight workflow design.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-carbon/10 bg-white px-5 py-5">
                <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                  Delivery model
                </p>
                <p className="m-0 pt-2 text-[0.98rem] leading-relaxed text-carbon/72">
                  Fixed scope, fixed fee, client ownership, and a clean handoff after launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start">
          <div className="grid gap-4">
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.2rem,4vw,3.3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              Built for businesses that already have customers, reputation, and real operations.
            </h2>
            <p className="m-0 max-w-[36rem] text-[1rem] leading-relaxed text-carbon/68">
              Contractors and service companies should feel especially well served here, but the practice is not
              contractor-exclusive. The benchmark is a real business whose site is underselling the operation behind it.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {siteContent.web.audience.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-carbon/10 bg-white px-5 py-5 shadow-[0_14px_40px_rgba(24,34,45,0.05)]">
                <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-start">
          <article className="grid gap-5 rounded-[2rem] border border-carbon/10 bg-white p-6 shadow-[0_20px_60px_rgba(24,34,45,0.06)]">
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.2rem,4vw,3.3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                The offer stays fixed-scope and handoff-oriented.
              </h2>
              <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/68">
                Strategy, responsive design and build, service pages, intake flow, search structure, launch, and a
                client-owned result.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {siteContent.web.offer.map((item) => (
                <div key={item} className="rounded-[1.2rem] bg-paper px-4 py-4">
                  <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="grid gap-4 rounded-[2rem] border border-carbon/10 bg-paper p-6">
            <h2 className="m-0 max-w-[10ch] text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              Bounded on purpose.
            </h2>
            <div className="grid gap-3">
              {siteContent.web.boundaries.map((item) => (
                <p key={item} className="m-0 border-b border-carbon/10 pb-3 text-[0.98rem] leading-relaxed text-carbon/72 last:border-b-0 last:pb-0">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.2rem,4vw,3.3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              Selected web proof
            </h2>
            <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/68">
              HomeEMS carries the most weight because it most directly shows the kind of service-business work this
              offer is built to win.
            </p>
          </div>

          <ProjectCard item={flagshipProject} variant="feature" />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <ProjectCard item={secondaryCaseStudy} />
            <ProjectCard item={supportingWebProjects[0]} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {supportingWebProjects.slice(1).map((item) => (
              <ProjectCard key={item.slug} item={item} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start">
          <div className="grid gap-4">
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.2rem,4vw,3.3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              How projects usually run
            </h2>
          </div>
          <div className="grid gap-4">
            {siteContent.web.process.map((item, index) => (
              <div key={item} className="grid gap-2 border-t border-carbon/10 py-4 first:border-t-0 first:pt-0 last:pb-0">
                <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
                  Step {index + 1}
                </p>
                <p className="m-0 text-[1rem] leading-relaxed text-carbon/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-10 md:px-6 lg:px-8 lg:pb-18 lg:pt-14 xl:px-12">
        <div className="page-wrap rounded-[2rem] border border-carbon/10 bg-white px-6 py-7 shadow-[0_24px_80px_rgba(24,34,45,0.08)] md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                Have a site that no longer matches the business behind it?
              </h2>
              <p className="m-0 max-w-[38rem] text-[1rem] leading-relaxed text-carbon/68">
                Start with the current site, the business reality it is underselling, and what a better handoff should
                leave behind.
              </p>
            </div>
            <ButtonLink external={ctaLinks.web.external} href={ctaLinks.web.href}>
              {ctaLinks.web.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
