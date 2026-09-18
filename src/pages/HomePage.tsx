import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, portfolioBySlug, siteContent } from '../data/siteContent';
import { profile } from '../data/profile';

const featuredProjects = [
  portfolioBySlug['gaf-roads-standard-industries'],
  portfolioBySlug['mainstream-hvac-controls'],
  portfolioBySlug.innerspec,
  portfolioBySlug['mainstream-internal-tooling'],
  portfolioBySlug.homeems,
];

export function HomePage() {
  return (
    <>
      <RouteMeta
        title="Tre Humphries | Product & Systems Engineer"
        description="Product and systems engineering across physical systems, industrial controls, automation, test systems, software, commissioning, and operational workflows."
      />

      <section className="hero-shell">
        <div className="page-wrap hero-stage grid gap-8 p-5 md:p-7 lg:p-9 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
          <div className="grid gap-7">
            <div className="grid gap-5">
              <p className="eyebrow">Product &amp; Systems Engineer</p>
              <h1 className="m-0 max-w-[15ch] text-[clamp(2.8rem,5.2vw,4.75rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon xl:max-w-[13ch]">
                {siteContent.home.title}
              </h1>
            </div>

            <div className="grid gap-3">
              {siteContent.home.intro.map((paragraph) => (
                <p key={paragraph} className="body-lead max-w-[43rem]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/work">View selected work</ButtonLink>
              <ButtonLink external={ctaLinks.project.external} href={ctaLinks.project.href} variant="secondary">
                {ctaLinks.project.label}
              </ButtonLink>
            </div>
          </div>

          <article className="surface-dark grid gap-5 overflow-hidden p-4 text-white md:p-5">
            <img
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
              style={{ objectPosition: profile.portrait.objectPosition }}
              src={profile.portrait.src}
              alt={profile.portrait.alt}
            />
            <div className="grid gap-3">
              <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-white/54">How I work</p>
              <p className="m-0 max-w-[40rem] text-[1.03rem] leading-[1.72] text-white/82">
                Give me a real problem, a budget, a deadline, and a definition of done. I am most useful when the path from requirement to working system is not obvious yet.
              </p>
            </div>
          </article>
        </div>

        <div className="page-wrap pt-6">
          <div className="stat-strip grid gap-0 overflow-hidden sm:grid-cols-3">
            {siteContent.home.reputationPoints.map((point, index) => (
              <div key={point.label} className={`grid gap-2 px-5 py-5 md:px-6 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}>
                <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/46">{point.label}</p>
                <p className="m-0 text-[1rem] leading-relaxed text-white/86">{point.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading max-w-[11ch]">Built across machines, controls, and software.</h2>
            <p className="body-lead max-w-[44rem]">
              Professional and independent work that shows the same pattern: understand the whole system, own the difficult middle, and leave behind something that works.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((item, index) => (
              <ProjectCard
                key={item.slug}
                item={item}
                variant={index === 0 ? 'feature' : 'standard'}
                showAction={Boolean(item.caseStudy || item.liveUrl)}
                className={index === 0 ? 'md:col-span-2 xl:col-span-3' : ''}
              />
            ))}
          </div>

          <div>
            <ButtonLink href="/work" variant="text">See all selected work</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-shell section-block section-band">
        <div className="content-wrap grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div className="grid gap-3">
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-heading max-w-[10ch]">One technical owner across the messy middle.</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {siteContent.home.capabilityPoints.map((point) => {
              const [title, body] = point.split(' — ');
              return (
                <article key={point} className="surface-card grid gap-3 p-5 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="m-0 text-[1.2rem] font-semibold tracking-[-0.03em] text-carbon">{title}</h3>
                  <p className="body-copy">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-dark overflow-hidden p-6 text-white md:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="m-0 text-[0.8rem] font-semibold tracking-[0.08em] text-white/60">Start with the problem</p>
              <h2 className="m-0 max-w-[13ch] text-[clamp(2.1rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
                Have a technical problem that does not fit neatly into one discipline?
              </h2>
              <p className="m-0 max-w-[43rem] text-[1rem] leading-relaxed text-white/76">
                If the work crosses hardware, controls, software, test, or field operations, send the current situation and what a finished result should look like.
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
