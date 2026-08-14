import { ContactCTA } from '../components/ContactCTA';
import { ArtifactPreview } from '../components/artifacts/ArtifactPreview';
import { RouteMeta } from '../components/RouteMeta';
import {
  artifactTypeLabels,
  artifacts,
  formatArtifactDate,
  getArtifactsForSurface,
} from '../content/artifacts';
import { profile } from '../data/profile';

const pageWrap = 'page-wrap';
const contentWrap = 'content-wrap';
const kicker = 'editorial-kicker';
const webArtifacts = getArtifactsForSurface(artifacts, 'web');
const featuredArtifact = webArtifacts[0];
const galleryArtifacts = webArtifacts.slice(0, 4);

export function WebPage() {
  return (
    <>
      <RouteMeta
        title="Web & Digital Systems | Tre Humphries"
        description="Professional websites and digital systems for contractors, service businesses, designers, and small organizations."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 lg:py-18 xl:px-12 xl:py-20">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end`}>
          <div className="grid gap-4">
            <p className={kicker}>Web &amp; Digital Systems</p>
            <h1 className="page-title max-w-[8ch] text-[clamp(3.8rem,10vw,6.4rem)]">
              Websites that look sharp, work cleanly, and hold up after handoff.
            </h1>
          </div>
          <div className="grid gap-4">
            <p className="body-copy max-w-[42rem]">
              This is the path for contractors, service businesses, designers, and small organizations
              that need a professional web presence or digital system without hiring a generic agency.
            </p>
            <p className="support-copy max-w-[42rem]">
              The engineering background helps with structure, logic, analytics, and edge cases. The
              result still has to be easy to understand and easy to own.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-9`}>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-end">
            <h2 className="section-title max-w-[10ch] text-[clamp(2.25rem,4vw,3.4rem)]">
              Visual records from the same artifact archive.
            </h2>
            <p className="support-copy max-w-[40rem]">
              The web path can lean a little more visual, but it still comes from the same shared archive
              and handoff-focused practice.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-2">
            {galleryArtifacts.map((artifact, index) => (
              <article key={artifact.id} className={index === 0 ? 'grid gap-5 xl:col-span-2' : 'grid gap-5'}>
                <ArtifactPreview artifact={artifact} variant="wide" className="max-w-none" />
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/44">
                    <p className="m-0">{formatArtifactDate(artifact.date)}</p>
                    <p className="m-0">{artifactTypeLabels[artifact.type]}</p>
                  </div>
                  <h3 className={index === 0 ? 'm-0 text-[1.9rem] font-semibold tracking-[-0.03em] text-carbon' : 'm-0 text-[1.55rem] font-semibold tracking-[-0.03em] text-carbon'}>
                    {artifact.title}
                  </h3>
                  {artifact.subtitle ? <p className="m-0 text-[0.98rem] text-carbon/60">{artifact.subtitle}</p> : null}
                  <p className="m-0 text-sm leading-relaxed text-carbon/68">{artifact.summary}</p>
                  {artifact.links?.length ? (
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                      {artifact.links.map((link) =>
                        link.external ? (
                          <a
                            key={link.href}
                            className="editorial-link"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <a key={link.href} className="editorial-link" href={link.href}>
                            {link.label}
                          </a>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredArtifact ? (
        <section className="border-t border-carbon/10 bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
          <div className={`${contentWrap} grid gap-7 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] xl:items-start`}>
            <ArtifactPreview artifact={featuredArtifact} variant="wide" className="max-w-none" />
            <div className="grid gap-4 border-t border-carbon/10 pt-4 xl:border-t-0 xl:pt-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/44">
                <p className="m-0">{formatArtifactDate(featuredArtifact.date)}</p>
                <p className="m-0">{artifactTypeLabels[featuredArtifact.type]}</p>
              </div>
              <h2 className="section-title max-w-[11ch] text-[clamp(2.25rem,4vw,3.5rem)]">
                {featuredArtifact.title}
              </h2>
              {featuredArtifact.subtitle ? (
                <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/62">{featuredArtifact.subtitle}</p>
              ) : null}
              <p className="body-copy">{featuredArtifact.summary}</p>
              {featuredArtifact.story ? <p className="support-copy">{featuredArtifact.story}</p> : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-carbon/10 bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[10ch] text-[clamp(2.1rem,4vw,3.2rem)]">
              Structured build, client-owned result.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Scoped build and clear implementation path',
              'Responsive front-end implementation',
              'CMS or editable content where it helps',
              'Analytics, search, and lead-path setup',
              'Deployment the client can own after launch',
              'Documentation and handoff instead of dependency',
            ].map((item) => (
              <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-base leading-relaxed text-carbon/66">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[11ch] text-[clamp(2.1rem,4vw,3.2rem)]">
              Have a site or digital system that needs a cleaner handoff?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="support-copy max-w-[40rem]">
              The right starting point is usually the current site, the problem with it, and what the
              client should be able to own afterward.
            </p>
            <ContactCTA
              ctaLabel={profile.contact.ctaLabel}
              dialogTitle="Reach Tre directly"
              methods={profile.contact.methods}
              variant="section"
            />
          </div>
        </div>
      </section>
    </>
  );
}
