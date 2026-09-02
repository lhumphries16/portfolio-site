import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import { controlsProjects, ctaLinks, siteContent } from '../data/siteContent';

export function ControlsPage() {
  const primaryProof = controlsProjects[0];
  const supportingProof = controlsProjects.slice(1);

  return (
    <>
      <RouteMeta
        title="Controls Engineering | Tre Humphries"
        description="Scoped controls engineering for OEMs, controls teams, engineering managers, and technical operators who need defined deliverables and clean handoff."
      />

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start">
          <div className="grid gap-5">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">
              Controls Engineering
            </p>
            <h1 className="m-0 max-w-[11ch] text-[clamp(3rem,7vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-carbon">
              {siteContent.controls.title}
            </h1>
            <p className="m-0 max-w-[40rem] text-[1.04rem] leading-relaxed text-carbon/74">
              {siteContent.controls.intro}
            </p>
            <div className="rounded-[1.45rem] border border-carbon/10 bg-paper px-5 py-4">
              <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{siteContent.controls.proofNote}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href}>
                {ctaLinks.controls.label}
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                See selected work
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.04fr)_minmax(15rem,0.66fr)]">
            <div className="rounded-[2rem] border border-carbon/10 bg-white p-4 shadow-[0_24px_80px_rgba(24,34,45,0.08)]">
              <img
                className="aspect-[16/10] w-full rounded-[1.45rem] object-cover"
                src={primaryProof.primaryAsset.src}
                alt={primaryProof.primaryAsset.alt}
              />
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.8rem] border border-carbon/10 bg-paper p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.2rem] object-cover"
                  src={supportingProof[0].primaryAsset.src}
                  alt={supportingProof[0].primaryAsset.alt}
                />
              </div>
              <div className="rounded-[1.8rem] border border-carbon/10 bg-white p-4">
                <img
                  className="aspect-[4/3] w-full rounded-[1.2rem] object-cover"
                  src={supportingProof[1].primaryAsset.src}
                  alt={supportingProof[1].primaryAsset.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-4 xl:grid-cols-3">
          {siteContent.offers.map((offer) => (
            <article
              key={offer.title}
              className="grid gap-4 rounded-[1.6rem] border border-carbon/10 bg-white p-5 shadow-[0_18px_50px_rgba(24,34,45,0.05)]"
            >
              <div className="grid gap-2">
                <h2 className="m-0 text-[1.45rem] font-semibold leading-[1] tracking-[-0.04em] text-carbon">
                  {offer.title}
                </h2>
                <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/70">{offer.summary}</p>
              </div>

              <div className="grid gap-3 rounded-[1.2rem] bg-paper px-4 py-4 sm:grid-cols-3">
                {offer.meta.map((item) => (
                  <div key={item.label} className="grid gap-1">
                    <p className="m-0 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">
                      {item.label}
                    </p>
                    <p className="m-0 text-[0.96rem] leading-relaxed text-carbon/72">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 border-t border-carbon/10 pt-4 sm:grid-cols-2">
                {offer.bullets.map((bullet) => (
                  <p key={bullet} className="m-0 rounded-[1rem] bg-bone px-3 py-3 text-[0.92rem] leading-relaxed text-carbon/70">
                    {bullet}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-start">
          <article className="grid gap-4 rounded-[2rem] border border-carbon/10 bg-paper p-6">
            <h2 className="m-0 max-w-[10ch] text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              Good fit
            </h2>
            <div className="grid gap-3">
              {siteContent.controls.fit.map((item) => (
                <p key={item} className="m-0 border-b border-carbon/10 pb-3 text-[0.98rem] leading-relaxed text-carbon/72 last:border-b-0 last:pb-0">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="grid gap-4 rounded-[2rem] border border-carbon/10 bg-white p-6 shadow-[0_20px_60px_rgba(24,34,45,0.06)]">
            <h2 className="m-0 max-w-[10ch] text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              Boundaries
            </h2>
            <div className="grid gap-3">
              {siteContent.controls.boundaries.map((item) => (
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
              Selected engineering work
            </h2>
            <p className="m-0 max-w-[40rem] text-[1rem] leading-relaxed text-carbon/68">
              Selected engineering work from prior roles across HVAC controls, machine systems, robotics, and internal
              engineering tools.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
            <ProjectCard item={controlsProjects[0]} variant="feature" showAction={false} />
            <div className="grid gap-4">
              <ProjectCard item={controlsProjects[1]} showAction={false} />
              <ProjectCard item={controlsProjects[2]} showAction={false} />
            </div>
          </div>

          <ProjectCard item={controlsProjects[3]} showAction={false} />
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start">
          <div className="grid gap-4">
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3.1rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
              How engagements close cleanly
            </h2>
          </div>
          <div className="grid gap-4">
            {siteContent.controls.steps.map((item, index) => (
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
                Need a bounded controls engagement with a real deliverable?
              </h2>
              <p className="m-0 max-w-[38rem] text-[1rem] leading-relaxed text-carbon/68">
                Start with the specific system, the current ambiguity or failure mode, and the document or review that
                would actually help your team move forward.
              </p>
            </div>
            <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href}>
              {ctaLinks.controls.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
