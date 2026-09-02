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
        <section className="px-4 py-16 md:px-6 lg:px-8 xl:px-12">
          <div className="page-wrap grid gap-4">
            <h1 className="m-0 max-w-[11ch] text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-carbon">
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
  const cta = item.category === 'controls' ? ctaLinks.controls : ctaLinks.web;
  const galleryAssets = caseStudy.assets.slice(1);

  return (
    <>
      <RouteMeta title={`${item.title} | Tre Humphries`} description={item.summary} />

      <section className="px-4 pb-10 pt-8 md:px-6 lg:px-8 lg:pb-14 lg:pt-12 xl:px-12">
        <div className="page-wrap grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
          <div className="grid gap-5">
            <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">
              {caseStudy.eyebrow}
            </p>
            <h1 className="m-0 max-w-[10ch] text-[clamp(3rem,7vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-carbon">
              {item.title}
            </h1>
            <div className="grid gap-3">
              {caseStudy.intro.map((paragraph) => (
                <p key={paragraph} className="m-0 max-w-[40rem] text-[1.04rem] leading-relaxed text-carbon/74">
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
              <ButtonLink external={cta.external} href={cta.href} variant="secondary">
                {cta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-carbon/10 bg-white p-4 shadow-[0_24px_80px_rgba(24,34,45,0.08)]">
            <img
              className="aspect-[16/10] w-full rounded-[1.45rem] object-cover object-top"
              src={item.primaryAsset.src}
              alt={item.primaryAsset.alt}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-4 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="grid gap-4 rounded-[1.8rem] border border-carbon/10 bg-white p-6 shadow-[0_18px_50px_rgba(24,34,45,0.05)]">
            <h2 className="m-0 text-[1.6rem] font-semibold tracking-[-0.04em] text-carbon">Project facts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {caseStudy.facts.map((fact) => (
                <div key={fact.label} className="grid gap-1">
                  <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/44">
                    {fact.label}
                  </p>
                  <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/72">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-[1.8rem] border border-carbon/10 bg-paper p-6">
            <h2 className="m-0 text-[1.6rem] font-semibold tracking-[-0.04em] text-carbon">What this proves</h2>
            <p className="m-0 text-[1rem] leading-relaxed text-carbon/72">{item.whatItProves}</p>
            <div className="grid gap-3 border-t border-carbon/10 pt-4 sm:grid-cols-2">
              {caseStudy.highlights.map((highlight) => (
                <p key={highlight} className="m-0 rounded-[1rem] bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-carbon/70">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {galleryAssets.length > 0 ? (
        <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
          <div className="content-wrap grid gap-4 md:grid-cols-2">
            {galleryAssets.map((asset, index) => (
              <figure
                key={asset.src}
                className={`grid gap-3 rounded-[1.8rem] border border-carbon/10 ${
                  index % 2 === 0 ? 'bg-white shadow-[0_18px_50px_rgba(24,34,45,0.05)]' : 'bg-paper'
                } p-4`}
              >
                <img className="aspect-[16/10] w-full rounded-[1.35rem] object-cover object-top" src={asset.src} alt={asset.alt} />
                {asset.caption ? (
                  <figcaption className="text-[0.96rem] leading-relaxed text-carbon/64">{asset.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-12">
        <div className="content-wrap grid gap-5">
          {caseStudy.sections.map((section, index) => (
            <article
              key={section.title}
              className={`grid gap-4 rounded-[1.8rem] border border-carbon/10 ${
                index % 2 === 0 ? 'bg-white shadow-[0_18px_50px_rgba(24,34,45,0.05)]' : 'bg-paper'
              } p-6 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]`}
            >
              <h2 className="m-0 text-[1.55rem] font-semibold leading-[0.98] tracking-[-0.04em] text-carbon">
                {section.title}
              </h2>
              <div className="grid gap-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="m-0 text-[1rem] leading-relaxed text-carbon/72">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <div className="grid gap-3 border-t border-carbon/10 pt-4">
                    {section.bullets.map((bullet) => (
                      <p key={bullet} className="m-0 text-[0.98rem] leading-relaxed text-carbon/70">
                        {bullet}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 pt-10 md:px-6 lg:px-8 lg:pb-18 lg:pt-14 xl:px-12">
        <div className="page-wrap rounded-[2rem] border border-carbon/10 bg-white px-6 py-7 shadow-[0_24px_80px_rgba(24,34,45,0.08)] md:px-8 md:py-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-end">
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-carbon">
                Want this level of clarity in your own project?
              </h2>
              <p className="m-0 max-w-[38rem] text-[1rem] leading-relaxed text-carbon/68">
                The right starting point is still the actual business or technical context, not a vague wish list.
              </p>
            </div>
            <ButtonLink external={cta.external} href={cta.href}>
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
