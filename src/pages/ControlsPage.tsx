import { ButtonLink } from '../components/ButtonLink';
import { ProjectCard } from '../components/ProjectCard';
import { RouteMeta } from '../components/RouteMeta';
import { controlsProjects, ctaLinks, siteContent } from '../data/siteContent';

export function ControlsPage() {
  const primaryProof = controlsProjects[0];
  const supportingProof = controlsProjects.slice(1);
  const primaryOffers = siteContent.offers.slice(0, 2);
  const processAuditOffer = siteContent.offers[2];

  return (
    <>
      <RouteMeta
        title="Controls Engineering | Tre Humphries"
        description="Scoped controls engineering for OEMs, controls teams, engineering managers, and technical operators who need defined deliverables and clean handoff."
      />

      <section className="hero-shell">
        <div className="page-wrap grid gap-6 xl:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] xl:items-start">
          <article className="surface-dark grid gap-5 p-6 text-white md:p-8 xl:sticky xl:top-28">
            <p className="m-0 text-[0.82rem] font-semibold tracking-[0.08em] text-white/62">Controls Engineering</p>
            <h1 className="m-0 max-w-[15ch] text-[clamp(2.25rem,8.8vw,4.5rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-white xl:max-w-[11ch]">
              {siteContent.controls.title}
            </h1>
            <p className="m-0 max-w-[34rem] text-[1.02rem] leading-[1.72] text-white/78">{siteContent.controls.intro}</p>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4">
              <p className="m-0 text-[0.98rem] leading-relaxed text-white/74">{siteContent.controls.proofNote}</p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <ButtonLink
                className="w-full sm:w-auto"
                external={ctaLinks.controls.external}
                href={ctaLinks.controls.href}
                variant="secondary"
              >
                {ctaLinks.controls.label}
              </ButtonLink>
              <ButtonLink
                className="w-full border-white/18 text-white hover:border-white/36 hover:bg-white/10 hover:text-white sm:w-auto"
                href="/work"
                variant="ghost"
              >
                See selected work
              </ButtonLink>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="surface-card overflow-hidden p-4 md:p-5">
              <img
                className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
                src={primaryProof.primaryAsset.src}
                alt={primaryProof.primaryAsset.alt}
              />
              <div className="grid gap-2 p-1 pt-5">
                <p className="m-0 text-[1.34rem] font-semibold tracking-[-0.03em] text-carbon">{primaryProof.shortTitle ?? primaryProof.title}</p>
                <p className="body-copy max-w-[42rem]">{primaryProof.summary}</p>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {supportingProof.slice(0, 2).map((item) => (
                <article key={item.slug} className="surface-soft grid gap-3 p-4">
                  <img className="aspect-[4/3] w-full rounded-[1.3rem] object-cover" src={item.primaryAsset.src} alt={item.primaryAsset.alt} />
                  <div className="grid gap-1">
                    <p className="m-0 text-[1rem] font-semibold tracking-[-0.03em] text-carbon">{item.shortTitle ?? item.title}</p>
                    <p className="detail-copy">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-10 pt-4 md:pb-12 md:pt-6 lg:pb-14 lg:pt-8">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Offer structure</p>
            <h2 className="section-heading max-w-[14ch]">Defined controls engagements for defined technical problems.</h2>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {primaryOffers.map((offer, index) => (
              <article key={offer.title} className={index === 1 ? 'surface-dark grid gap-5 p-5 text-white' : 'surface-card grid gap-5 p-5'}>
                <div className="grid gap-2">
                  <h2 className={`m-0 text-[1.5rem] font-semibold leading-[1.02] tracking-[-0.04em] ${index === 1 ? 'text-white' : 'text-carbon'}`}>
                    {offer.title}
                  </h2>
                  <p className={`m-0 text-[0.98rem] leading-relaxed ${index === 1 ? 'text-white/76' : 'text-carbon/70'}`}>{offer.summary}</p>
                </div>

                <div className={`grid gap-3 rounded-[1.4rem] px-4 py-4 sm:grid-cols-3 ${index === 1 ? 'bg-white/8' : 'bg-paper'}`}>
                  {offer.meta.map((item) => (
                    <div key={item.label} className="grid gap-1">
                      <p className={`m-0 text-[0.84rem] font-semibold tracking-[0.04em] ${index === 1 ? 'text-white/58' : 'text-carbon/48'}`}>
                        {item.label}
                      </p>
                      <p className={`m-0 text-[0.96rem] leading-relaxed ${index === 1 ? 'text-white/82' : 'text-carbon/72'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {offer.bullets.map((bullet) => (
                    <p
                      key={bullet}
                      className={`m-0 rounded-[1.2rem] px-3 py-3 text-[0.92rem] leading-relaxed ${index === 1 ? 'bg-white/7 text-white/78' : 'bg-paper text-carbon/70'}`}
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="surface-soft grid gap-5 p-5 xl:max-w-[62rem]">
            <div className="grid gap-2">
              <p className="eyebrow">Adjacent capability</p>
            <h2 className="m-0 max-w-[18ch] text-[1.5rem] font-semibold leading-[1.02] tracking-[-0.04em] text-carbon">
                {processAuditOffer.title}
              </h2>
              <p className="m-0 max-w-[46rem] text-[0.98rem] leading-relaxed text-carbon/70">{processAuditOffer.summary}</p>
              <p className="detail-copy max-w-[46rem]">
                This scope includes one lightweight practical workflow improvement. Broader controls implementation stays
                separately scoped.
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.4rem] bg-white px-4 py-4 sm:grid-cols-3">
              {processAuditOffer.meta.map((item) => (
                <div key={item.label} className="grid gap-1">
                  <p className="m-0 text-[0.84rem] font-semibold tracking-[0.04em] text-carbon/48">{item.label}</p>
                  <p className="m-0 text-[0.96rem] leading-relaxed text-carbon/72">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {processAuditOffer.bullets.map((bullet) => (
                <p key={bullet} className="m-0 rounded-[1.2rem] bg-white px-3 py-3 text-[0.92rem] leading-relaxed text-carbon/70">
                  {bullet}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell py-10 md:py-12 lg:py-14">
        <div className="content-wrap grid gap-6 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
          <article className="surface-card grid gap-4 p-6 md:p-8">
            <p className="eyebrow">Good fit</p>
            <h2 className="section-heading max-w-[9ch]">Good fit</h2>
            <div className="grid gap-3">
              {siteContent.controls.fit.map((item) => (
                <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-[0.98rem] leading-relaxed text-carbon/72 first:border-t-0 first:pt-0">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="surface-dark grid gap-4 p-6 text-white md:p-8">
            <p className="m-0 text-[0.82rem] font-semibold tracking-[0.08em] text-white/60">Boundaries</p>
            <h2 className="m-0 max-w-[9ch] text-[clamp(2.15rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
              Boundaries
            </h2>
            <div className="grid gap-3">
              {siteContent.controls.boundaries.map((item) => (
                <p key={item} className="m-0 border-t border-white/10 pt-3 text-[0.98rem] leading-relaxed text-white/78 first:border-t-0 first:pt-0">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell pb-14 pt-10 md:pb-16 md:pt-12 lg:pb-18 lg:pt-14">
        <div className="content-wrap grid gap-6">
          <div className="grid gap-3">
            <p className="eyebrow">Selected engineering work</p>
            <h2 className="section-heading max-w-[10ch]">Selected engineering work</h2>
            <p className="body-lead max-w-[42rem]">
              Selected engineering work from prior roles across HVAC controls, machine systems, robotics, and internal
              engineering tools.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:items-start">
            <ProjectCard item={controlsProjects[0]} variant="feature" showAction={false} />
            <div className="grid gap-4">
              <ProjectCard item={controlsProjects[1]} showAction={false} />
              <ProjectCard item={controlsProjects[2]} showAction={false} />
              <ProjectCard item={controlsProjects[3]} showAction={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap grid gap-6 xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <article className="surface-soft grid gap-4 p-6 md:p-8">
            <p className="eyebrow">How engagements close cleanly</p>
            <h2 className="section-heading max-w-[10ch]">How engagements close cleanly</h2>
          </article>

          <article className="surface-card grid gap-4 p-6 md:p-8">
            {siteContent.controls.steps.map((item, index) => (
              <div key={item} className="grid gap-2 border-t border-carbon/10 pt-4 first:border-t-0 first:pt-0">
                <p className="m-0 text-[0.88rem] font-semibold text-carbon/48">Step {index + 1}</p>
                <p className="m-0 text-[1rem] leading-relaxed text-carbon/72">{item}</p>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-20">
        <div className="page-wrap surface-dark px-6 py-7 text-white md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="m-0 text-[0.82rem] font-semibold tracking-[0.08em] text-white/60">Schedule</p>
              <h2 className="m-0 max-w-[12ch] text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
                Need a bounded controls engagement with a real deliverable?
              </h2>
              <p className="m-0 max-w-[38rem] text-[1rem] leading-relaxed text-white/76">
                Start with the specific system, the current ambiguity or failure mode, and the document or review that
                would actually help your team move forward.
              </p>
            </div>
            <ButtonLink
              className="w-full justify-center sm:w-auto"
              external={ctaLinks.controls.external}
              href={ctaLinks.controls.href}
              variant="secondary"
            >
              {ctaLinks.controls.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
