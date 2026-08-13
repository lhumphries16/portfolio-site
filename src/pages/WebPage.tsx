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

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.18em]';
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

      <section className="border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 lg:py-14 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-end`}>
          <div className="grid gap-4">
            <p className={`${mono} text-carbon/52`}>Web &amp; Digital Systems</p>
            <h1 className="m-0 max-w-[8ch] font-display text-[clamp(3.6rem,10vw,6.6rem)] uppercase leading-[0.92] tracking-[-0.04em] text-carbon">
              Websites that look sharp, work cleanly, and hold up after handoff.
            </h1>
          </div>
          <div className="grid gap-4">
            <p className="m-0 max-w-[42rem] text-[1.04rem] leading-relaxed text-carbon/74">
              This is the path for contractors, service businesses, designers, and small organizations
              that need a professional web presence or digital system without hiring a generic agency.
            </p>
            <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/66">
              The engineering background helps with structure, logic, analytics, and edge cases. The
              result still has to be easy to understand and easy to own.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-2">
            <p className={`${mono} text-carbon/52`}>Website Gallery</p>
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
              Visual records from the same artifact archive.
            </h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {galleryArtifacts.map((artifact) => (
              <article key={artifact.id} className="grid gap-4">
                <ArtifactPreview artifact={artifact} variant="wide" className="max-w-none" />
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className={`${mono} text-carbon/48`}>{formatArtifactDate(artifact.date)}</p>
                    <p className={`${mono} text-cobalt`}>{artifactTypeLabels[artifact.type]}</p>
                  </div>
                  <h3 className="m-0 text-[1.55rem] font-semibold tracking-[-0.03em] text-carbon">
                    {artifact.title}
                  </h3>
                  {artifact.subtitle ? <p className="m-0 text-sm text-carbon/60">{artifact.subtitle}</p> : null}
                  <p className="m-0 text-sm leading-relaxed text-carbon/70">{artifact.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredArtifact ? (
        <section className="border-t border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
          <div className={`${contentWrap} grid gap-8 xl:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.96fr)] xl:items-start`}>
            <div className="grid gap-4">
              <ArtifactPreview artifact={featuredArtifact} variant="wide" className="max-w-none" />
            </div>
            <div className="grid gap-4 border-t border-carbon/10 pt-4 xl:border-t-0 xl:pt-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className={`${mono} text-carbon/48`}>{formatArtifactDate(featuredArtifact.date)}</p>
                <p className={`${mono} text-cobalt`}>{artifactTypeLabels[featuredArtifact.type]}</p>
              </div>
              <h2 className="m-0 max-w-[11ch] text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-carbon">
                {featuredArtifact.title}
              </h2>
              {featuredArtifact.subtitle ? (
                <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/64">{featuredArtifact.subtitle}</p>
              ) : null}
              <p className="m-0 text-base leading-relaxed text-carbon/74">{featuredArtifact.summary}</p>
              {featuredArtifact.story ? (
                <p className="m-0 text-sm leading-relaxed text-carbon/66">{featuredArtifact.story}</p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start`}>
          <div className="grid gap-2">
            <p className={`${mono} text-carbon/52`}>How I Work</p>
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
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
              <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-base leading-relaxed text-carbon/68">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-6 border border-carbon/10 bg-white/48 px-5 py-6 md:px-7 md:py-7 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end`}>
          <div className="grid gap-2">
            <p className={`${mono} text-carbon/52`}>Contact</p>
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
              Have a site or digital system that needs a cleaner handoff?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/68">
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
