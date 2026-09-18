import { useParams } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, portfolioBySlug } from '../data/siteContent';

export function CaseStudyPage() {
  const { slug } = useParams();
  const item = slug ? portfolioBySlug[slug] : undefined;

  if (!item?.caseStudy) {
    return (
      <>
        <RouteMeta title="Case Study Not Found | Tre Humphries" description="The requested case study is not available." />
        <section className="section-shell py-16">
          <div className="page-wrap grid gap-4">
            <h1 className="m-0 max-w-[11ch] text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-[1] tracking-[-0.05em] text-carbon">
              That case study is not part of the public set.
            </h1>
            <ButtonLink href="/work" variant="text">
              Back to selected work
            </ButtonLink>
          </div>
        </section>
      </>
    );
  }

  const caseStudy = item.caseStudy;
  const cta = item.category === 'web' ? ctaLinks.web : ctaLinks.project;
  const galleryAssets = caseStudy.assets.slice(1);
  const leadGalleryAsset = galleryAssets[0];
  const supportingGalleryAssets = galleryAssets.slice(1);

  return (
    <>
      <RouteMeta title={`${item.title} | Tre Humphries`} description={item.summary} />

      <section className="hero-shell">
        <div className="page-wrap hero-stage grid gap-8 p-5 md:p-7 lg:p-9 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-start">
          <div className="grid gap-5 xl:sticky xl:top-28">
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon">
              {item.title}
            </h1>
            <div className="grid gap-3">
              {caseStudy.intro.map((paragraph) => (
                <p key={paragraph} className="body-lead max-w-[36rem]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {item.liveUrl ? (
                <ButtonLink external href={item.liveUrl}>
                  View live site
                </ButtonLink>
              ) : null}
              {item.repoUrl ? (
                <ButtonLink external href={item.repoUrl} variant={item.liveUrl ? 'secondary' : 'primary'}>
                  View GitHub archive
                </ButtonLink>
              ) : null}
              <ButtonLink external={cta.external} href={cta.href} variant="secondary">
                {cta.label}
              </ButtonLink>
            </div>
          </div>

          <article className="surface-card overflow-hidden p-4 md:p-5">
            <div className="overflow-hidden rounded-[1.45rem] border border-carbon/8 bg-paper">
              <img className="aspect-[16/10] w-full object-cover object-top" src={item.primaryAsset.src} alt={item.primaryAsset.alt} />
            </div>
            {item.primaryAsset.caption ? <p className="body-copy px-1 pt-4">{item.primaryAsset.caption}</p> : null}
          </article>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-4 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <article className="surface-dark grid gap-4 p-6 text-white md:p-8">
            <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-white/52">Project facts</p>
            <h2 className="m-0 max-w-[8ch] text-[clamp(2.2rem,4.2vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">Project facts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {caseStudy.facts.map((fact) => (
                <div key={fact.label} className="grid gap-1">
                  <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white/44">{fact.label}</p>
                  <p className="m-0 text-[0.98rem] leading-relaxed text-white/82">{fact.value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-soft grid gap-4 p-6 md:p-8">
            <p className="eyebrow">Project highlights</p>
            <h2 className="section-heading max-w-[8ch]">Project highlights</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {caseStudy.highlights.map((highlight) => (
                <p key={highlight} className="m-0 rounded-[1.2rem] bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-carbon/72">
                  {highlight}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      {item.reports?.length ? (
        <section className="section-shell section-block section-band">
          <div className="content-wrap surface-card grid gap-5 p-6 md:p-8">
            <div className="grid gap-3">
              <p className="eyebrow">Project reports</p>
              <h2 className="section-heading max-w-[10ch]">Read the full studies.</h2>
              <p className="body-copy max-w-[44rem]">
                The portfolio page tells the short version. These reports preserve the deeper technical and commercial analysis behind the final decision.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {item.reports.map((report) => (
                <article key={report.href} className="surface-soft grid gap-4 p-5 md:p-6">
                  <div className="grid gap-2">
                    <h3 className="m-0 text-[1.25rem] font-semibold leading-tight tracking-[-0.025em] text-carbon">
                      {report.title}
                    </h3>
                    <p className="detail-copy m-0">{report.description}</p>
                  </div>
                  <div>
                    <ButtonLink external href={report.href}>
                      View PDF
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {leadGalleryAsset ? (
        <section className="section-shell section-block">
          <div className="content-wrap grid gap-4">
            <figure className="surface-card grid gap-4 overflow-hidden p-4 md:p-5">
              <img className="aspect-[16/9] w-full rounded-[1.45rem] object-cover object-top" src={leadGalleryAsset.src} alt={leadGalleryAsset.alt} />
              {leadGalleryAsset.caption ? <figcaption className="body-copy">{leadGalleryAsset.caption}</figcaption> : null}
            </figure>

            {supportingGalleryAssets.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {supportingGalleryAssets.map((asset) => (
                  <figure key={asset.src} className="surface-soft grid gap-3 p-4">
                    <img className="aspect-[16/10] w-full rounded-[1.35rem] object-cover object-top" src={asset.src} alt={asset.alt} />
                    {asset.caption ? <figcaption className="detail-copy">{asset.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-5">
          {caseStudy.sections.map((section, index) => (
            <article key={section.title} className={index % 2 === 0 ? 'surface-card grid gap-4 p-6 md:p-8' : 'surface-soft grid gap-4 p-6 md:p-8'}>
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:items-start">
                <div className="grid gap-3">
                  <p className="m-0 font-mono text-[0.76rem] font-semibold tracking-[0.08em] text-cobalt/72">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <span className="editorial-rule" aria-hidden="true" />
                  <h2 className="m-0 text-[1.75rem] font-semibold leading-[1.02] tracking-[-0.04em] text-carbon">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="m-0 text-[1rem] leading-relaxed text-carbon/72">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <p key={bullet} className="m-0 rounded-[1.2rem] bg-white/88 px-4 py-3 text-[0.95rem] leading-relaxed text-carbon/72">
                          {bullet}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="page-wrap surface-dark px-6 py-7 text-white md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-white/54">Project fit</p>
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.2rem,4.2vw,3.7rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">Have a technical problem that needs an owner?</h2>
              <p className="m-0 max-w-[38rem] text-[0.98rem] leading-[1.68] text-white/72">
                The strongest fit is a bounded project with a real system, a defined outcome, and enough ambiguity that hardware, controls, software, test, or field behavior overlap.
              </p>
            </div>
            <ButtonLink external={cta.external} href={cta.href} variant="secondary">
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
