import { ContactCTA } from '../components/ContactCTA';
import { ArtifactPreview } from '../components/artifacts/ArtifactPreview';
import { RouteMeta } from '../components/RouteMeta';
import {
  artifactTypeLabels,
  artifacts,
  formatArtifactDate,
  getArtifactsForSurface,
} from '../content/artifacts';
import { consultingContent } from '../data/consultingContent';
import { profile } from '../data/profile';

const pageWrap = 'page-wrap';
const contentWrap = 'content-wrap';
const industrialArtifacts = getArtifactsForSurface(artifacts, 'industrial', { limit: 5 });
const featuredArtifact = industrialArtifacts[0];
const supportingArtifacts = industrialArtifacts.slice(1);
const heroArtifact = industrialArtifacts[1] ?? featuredArtifact;
const industrialFocusPoints = [
  'Controls architecture and sequence clarity',
  'Telemetry and operator-facing information flow',
  'Field integration, commissioning, and handoff repair',
];

export function IndustrialPage() {
  return (
    <>
      <RouteMeta
        title="Industrial & Controls | Tre Humphries"
        description="Scoped engineering work across controls, embedded systems, physical equipment, field integration, and operator-facing workflows."
      />

      <section className="border-b border-bone/10 bg-carbon px-4 py-10 text-bone md:px-6 lg:px-8 lg:py-16 xl:px-12 xl:py-18">
        <div className={`${pageWrap} grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-end`}>
          <div className="grid gap-6">
            <p className="m-0 text-[0.72rem] font-medium tracking-[0.02em] text-bone/44">
              Industrial &amp; Controls
            </p>
            <h1 className="page-title max-w-[9ch] text-[clamp(3.3rem,8.8vw,5.9rem)] text-bone">
              Controls, machines, hardware, and the systems around them.
            </h1>
            <p className="m-0 max-w-[38rem] text-[1.04rem] leading-[1.65] text-bone/74">
              This is the path for engineering teams, manufacturers, integrators, owners, and operators
              who need one experienced technical generalist on a defined problem.
            </p>
            <div className="grid gap-3 border-t border-bone/12 pt-4 sm:grid-cols-3">
              {industrialFocusPoints.map((item) => (
                <p key={item} className="m-0 text-sm leading-relaxed text-bone/58">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 xl:pl-8">
            <div className="relative overflow-hidden border border-bone/12 bg-bone/4">
              <img
                className="aspect-[5/4] w-full object-cover"
                src="/images/feature_road-application-1.jpg"
                alt="Electric road-application equipment in the field during controls and telemetry work"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-carbon via-carbon/82 to-transparent" />
              <div className="absolute top-4 left-4 border border-bone/14 bg-carbon/86 px-3 py-2">
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone/56">
                  2025 field integration
                </p>
                <p className="m-0 text-sm font-medium tracking-[-0.02em] text-bone">
                  Real equipment. Real operator context.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 left-0 h-1.5 bg-cobalt" />
            </div>

            {heroArtifact ? (
              <div className="grid gap-4 border-t border-bone/12 pt-4 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.72fr)]">
                <div className="grid gap-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-bone/42">
                    <p className="m-0">{formatArtifactDate(heroArtifact.date)}</p>
                    <p className="m-0">{artifactTypeLabels[heroArtifact.type]}</p>
                    <p className="m-0 text-cobalt">Archive lead</p>
                  </div>
                  <h2 className="m-0 text-[clamp(1.7rem,3vw,2.45rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-bone">
                    {heroArtifact.title}
                  </h2>
                  {heroArtifact.subtitle ? (
                    <p className="m-0 text-[0.98rem] tracking-[-0.02em] text-bone/68">{heroArtifact.subtitle}</p>
                  ) : null}
                </div>
                <p className="m-0 border-l border-bone/12 pl-4 text-sm leading-relaxed text-bone/62">
                  Fixed scope, defined deliverables, clean handoff, and no assumption of open-ended support afterward.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {featuredArtifact ? (
        <section className="bg-paper px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
          <div className={`${contentWrap} grid gap-7 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] xl:items-start`}>
            <ArtifactPreview artifact={featuredArtifact} variant="wide" className="max-w-none" />
            <div className="grid gap-4 border-t border-carbon/10 pt-4 xl:border-t-0 xl:pt-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
                <p className="m-0">{formatArtifactDate(featuredArtifact.date)}</p>
                <p className="m-0">{artifactTypeLabels[featuredArtifact.type]}</p>
              </div>
              <h2 className="section-title max-w-[12ch] text-[clamp(2.4rem,4vw,3.7rem)]">
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
        <div className={`${contentWrap} grid gap-9`}>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-end">
            <h2 className="section-title max-w-[10ch] text-[clamp(2.15rem,4vw,3.3rem)]">
              Relevant artifacts from the same archive.
            </h2>
            <p className="support-copy max-w-[40rem]">
              Industrial and controls work is not a separate identity here. It is one view across the same
              records that also feed The Index.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {supportingArtifacts.map((artifact) => (
              <article key={artifact.id} className="grid gap-5">
                <ArtifactPreview artifact={artifact} variant="wide" className="max-w-none" />
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
                    <p className="m-0">{formatArtifactDate(artifact.date)}</p>
                    <p className="m-0">{artifactTypeLabels[artifact.type]}</p>
                  </div>
                  <h3 className="m-0 text-[1.45rem] font-semibold tracking-[-0.03em] text-carbon">
                    {artifact.title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-carbon/68">{artifact.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[10ch] text-[clamp(2.1rem,4vw,3.2rem)]">
              Scoped help where systems start crossing boundaries.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Controls architecture and sequence clarity',
              'Embedded and field hardware integration',
              'Commissioning risk and troubleshooting',
              'Operator workflow and information flow',
              'Internal tooling around engineering logic',
              'Documentation, assumptions, and handoff repair',
            ].map((item) => (
              <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-base leading-relaxed text-carbon/66">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[11ch] text-[clamp(2.1rem,4vw,3.2rem)] text-bone">
              Defined packages, not open-ended ownership.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {consultingContent.offers.map((offer) => (
              <article key={offer.id} className="grid gap-4 border-t border-bone/12 pt-5">
                <div className="grid gap-2">
                  <p className="m-0 text-[0.72rem] font-medium tracking-[0.02em] text-bone/42">{offer.label}</p>
                  <h3 className="m-0 text-[1.5rem] font-semibold tracking-[-0.03em] text-bone">
                    {offer.title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-bone/64">{offer.summary}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {offer.meta.map((item) => (
                    <div key={item.label} className="grid gap-1 border-t border-bone/12 pt-3">
                      <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-bone/40">
                        {item.label}
                      </p>
                      <p className="m-0 text-sm leading-relaxed text-bone/72">{item.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-6 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-end`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[11ch] text-[clamp(2.1rem,4vw,3.2rem)]">
              Useful if the problem is real and the handoff can be real too.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              'Fixed scope and named deliverable before the work starts.',
              'Short engagements are normal. Long-term ownership is not assumed.',
              'Implementation support can be separately scoped, but indefinite support is not the model.',
            ].map((item) => (
              <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-base leading-relaxed text-carbon/66">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-6 border-t border-carbon/10 pt-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end`}>
          <div className="grid gap-3">
            <h2 className="section-title max-w-[11ch] text-[clamp(2.1rem,4vw,3.25rem)]">
              Have an industrial problem worth defining?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="support-copy max-w-[40rem]">
              Good starting points are the current system, the specific failure or friction, and what a
              useful deliverable would look like.
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
