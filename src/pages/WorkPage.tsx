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
  const visualSupportProjects = [
    supportingWebProjects.find((item) => item.slug === 'brazilian-sweet-bites'),
    supportingWebProjects.find((item) => item.slug === 'mayara-miranda'),
  ].filter((item): item is (typeof supportingWebProjects)[number] => Boolean(item));

  return (
    <>
      <RouteMeta
        title="Selected Work | Tre Humphries"
        description="Selected work across web, digital systems, and scoped controls engineering from Tre Humphries."
      />

      <section className="hero-shell">
        <div className="page-wrap grid gap-6 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-end">
          <div className="grid gap-4">
            <p className="eyebrow">Selected work</p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(2.8rem,4.9vw,4.6rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon">
              Selected work
            </h1>
          </div>

          <p className="body-lead max-w-[42rem]">
            A few examples across websites, workflow systems, and controls engineering.
          </p>
        </div>
      </section>

      <section className="section-shell pb-10 pt-4 md:pb-12 md:pt-6 lg:pb-14 lg:pt-8">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Flagship</p>
            <h2 className="section-heading max-w-[9ch]">HomeEMS</h2>
          </div>
          <ProjectCard item={flagshipProject} variant="feature" />
        </div>
      </section>

      <section className="section-shell py-10 md:py-12 lg:py-14">
        <div className="content-wrap grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-start">
          <ProjectCard item={secondaryCaseStudy} />

          <div className="grid gap-4">
            <div className="surface-soft grid gap-3 p-5">
              <p className="eyebrow">More website work</p>
              <p className="body-copy">
                Brazilian Sweet Bites broadens the industry mix. Mayara shows a more visual service-business
                presentation within the same independent practice.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {visualSupportProjects.map((item) => (
                <ProjectCard
                  key={item.slug}
                  item={item}
                  showAction={item.slug !== 'mayara-miranda'}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 pt-10 md:pb-16 md:pt-12 lg:pb-18 lg:pt-14">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Selected engineering work</p>
            <h2 className="section-heading max-w-[10ch]">Selected engineering work</h2>
            <p className="body-lead max-w-[40rem]">
              Work from prior roles across HVAC controls, machine systems, robotics, and internal engineering tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {controlsProjects.map((item) => (
              <ProjectCard key={item.slug} item={item} showAction={false} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-card px-6 py-7 md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="eyebrow">Contact</p>
              <h2 className="section-heading max-w-[10ch]">Need to talk through fit before scoping?</h2>
              <p className="body-copy max-w-[38rem]">
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
