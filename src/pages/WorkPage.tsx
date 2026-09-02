import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import {
  controlsProjects,
  ctaLinks,
  flagshipProject,
  secondaryCaseStudy,
  supportingWebProjects,
} from '../data/siteContent';

export function WorkPage() {
  return (
    <>
      <RouteMeta
        title="Selected Work | Tre Humphries"
        description="Curated proof across web, digital systems, and scoped controls engineering work from Tre Humphries."
      />

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end">
          <div className="grid gap-4">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">Selected Work</p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(3rem,7vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-carbon">
              Curated proof, not a dump of everything.
            </h1>
          </div>
          <p className="m-0 max-w-[42rem] text-[1.04rem] leading-relaxed text-carbon/72">
            The portfolio is weighted toward the work that best supports the current commercial site: one flagship web
            case study, one strong workflow case study, supporting project cards, and concise controls proof.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">Flagship</p>
            <h2 className="m-0 text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              HomeEMS
            </h2>
          </div>
          <ProjectCard item={flagshipProject} variant="feature" />
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-start">
          <ProjectCard item={secondaryCaseStudy} />
          <div className="grid gap-4">
            <div className="grid gap-3">
              <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">
                Supporting web proof
              </p>
              <p className="m-0 text-[1rem] leading-relaxed text-carbon/68">
                Mayara stays polished supporting proof. Brazilian Sweet Bites broadens the industry fit. All Seasons
                remains selective legacy proof.
              </p>
            </div>
            <ProjectCard item={supportingWebProjects[0]} variant="compact" />
            <div className="grid gap-4 md:grid-cols-2">
              <ProjectCard item={supportingWebProjects[1]} variant="compact" />
              <ProjectCard item={supportingWebProjects[2]} variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.15rem,4vw,3.2rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              Controls proof
            </h2>
            <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/68">
              Concise public-safe professional-history proof to support the controls offer without pretending these
              were freelance consulting case studies.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {controlsProjects.map((item) => (
              <ProjectCard key={item.slug} item={item} showAction={false} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-10 md:px-6 lg:px-8 lg:pb-18 lg:pt-14 xl:px-12">
        <div className="page-wrap rounded-[2rem] border border-carbon/10 bg-white px-6 py-7 shadow-[0_24px_80px_rgba(24,34,45,0.08)] md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                Need to talk through fit before scoping?
              </h2>
              <p className="m-0 max-w-[38rem] text-[1rem] leading-relaxed text-carbon/68">
                Use the contact route that matches the work you are considering and start with the current situation.
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
