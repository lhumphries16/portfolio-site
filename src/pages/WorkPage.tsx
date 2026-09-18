import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, portfolioBySlug } from '../data/siteContent';

const engineeringProjects = [
  portfolioBySlug['gaf-roads-standard-industries'],
  portfolioBySlug['mainstream-hvac-controls'],
  portfolioBySlug['mainstream-internal-tooling'],
  portfolioBySlug.innerspec,
];

const independentRAndD = [
  portfolioBySlug['garage-smart-farm'],
  portfolioBySlug['wondersky-flying-creatures'],
];

const clientProjects = [
  portfolioBySlug.homeems,
  portfolioBySlug['brazilian-sweet-bites-order-system'],
  portfolioBySlug['mayara-miranda'],
  portfolioBySlug['brazilian-sweet-bites'],
];

export function WorkPage() {
  return (
    <>
      <RouteMeta
        title="Selected Work | Tre Humphries"
        description="Selected product development, controls, automation, engineering software, independent R&D, and client work from Tre Humphries."
      />

      <section className="hero-shell">
        <div className="page-wrap hero-stage grid gap-6 p-5 md:p-7 lg:p-9 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-end">
          <div className="grid gap-4">
            <p className="eyebrow">Selected work</p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(2.8rem,4.9vw,4.6rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon">
              Systems I have helped make real.
            </h1>
          </div>

          <p className="body-lead max-w-[42rem]">
            Work across machines, controls, robotics, engineering software, independent physical R&amp;D, and shipped client systems. The common thread is technical ownership across disciplines.
          </p>
        </div>
      </section>

      <section className="section-shell pb-10 pt-4 md:pb-12 md:pt-6 lg:pb-14 lg:pt-8">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Engineering experience</p>
            <h2 className="section-heading max-w-[12ch]">Machines, controls, robotics, and engineering tools.</h2>
            <p className="body-lead max-w-[44rem]">
              Professional work from equipment companies and technical teams where the job extended beyond writing code into startup, field failures, integration, workflow, and handoff.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {engineeringProjects.map((item, index) => (
              <ProjectCard
                key={item.slug}
                item={item}
                variant={index === 0 ? 'feature' : 'standard'}
                className={index === 0 ? 'md:col-span-2' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-band py-12 md:py-14 lg:py-16">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Independent R&amp;D</p>
            <h2 className="section-heading max-w-[12ch]">Physical systems built because the problem was interesting enough to own.</h2>
            <p className="body-lead max-w-[44rem]">
              These projects show the same systems approach without an employer or client defining the brief: build the thing, operate it, observe where reality disagrees with the design, and iterate.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {independentRAndD.map((item) => (
              <ProjectCard key={item.slug} item={item} variant="standard" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-12 lg:py-14">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Independent client work</p>
            <h2 className="section-heading max-w-[12ch]">Shipped systems with a real customer on the other side.</h2>
            <p className="body-lead max-w-[44rem]">
              Client projects add another kind of proof: scope the problem, communicate directly, deliver something useful, and leave the owner with a clean handoff.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clientProjects.map((item) => (
              <ProjectCard key={item.slug} item={item} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-dark px-6 py-7 text-white md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-white/54">Project fit</p>
              <h2 className="m-0 max-w-[12ch] text-[clamp(2.2rem,4.2vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">Need someone to own a difficult technical problem?</h2>
              <p className="m-0 max-w-[40rem] text-[0.98rem] leading-[1.68] text-white/72">
                The strongest fit is a bounded project where hardware, controls, software, test, or field operations overlap and the path to a finished result is not obvious yet.
              </p>
            </div>
            <ButtonLink external={ctaLinks.project.external} href={ctaLinks.project.href} variant="secondary">
              {ctaLinks.project.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
