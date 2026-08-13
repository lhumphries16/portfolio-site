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

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.18em]';
const industrialArtifacts = getArtifactsForSurface(artifacts, 'industrial', { limit: 5 });
const featuredArtifact = industrialArtifacts[0];
const supportingArtifacts = industrialArtifacts.slice(1);

export function IndustrialPage() {
  return (
    <>
      <RouteMeta
        title="Industrial & Controls | Tre Humphries"
        description="Scoped engineering work across controls, embedded systems, physical equipment, field integration, and operator-facing workflows."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 lg:py-14 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-end`}>
          <div className="grid gap-4">
            <p className={`${mono} text-carbon/52`}>Industrial &amp; Controls</p>
            <h1 className="m-0 max-w-[8ch] font-display text-[clamp(3.6rem,10vw,6.6rem)] uppercase leading-[0.92] tracking-[-0.04em] text-carbon">
              Controls, machines, hardware, and the systems around them.
            </h1>
          </div>
          <div className="grid gap-4">
            <p className="m-0 max-w-[42rem] text-[1.04rem] leading-relaxed text-carbon/74">
              This is the path for engineering teams, manufacturers, integrators, owners, and operators
              who need one experienced technical generalist on a defined problem.
            </p>
            <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/66">
              Fixed scope, defined deliverables, clean handoff, and no assumption of open-ended support
              afterward.
            </p>
          </div>
        </div>
      </section>

      {featuredArtifact ? (
        <section className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
          <div className={`${contentWrap} grid gap-8 xl:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.96fr)] xl:items-start`}>
            <div className="grid gap-4">
              <ArtifactPreview artifact={featuredArtifact} variant="wide" className="max-w-none" />
            </div>
            <div className="grid gap-4 border-t border-carbon/10 pt-4 xl:border-t-0 xl:pt-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className={`${mono} text-carbon/48`}>{formatArtifactDate(featuredArtifact.date)}</p>
                <p className={`${mono} text-cobalt`}>{artifactTypeLabels[featuredArtifact.type]}</p>
              </div>
              <h2 className="m-0 max-w-[12ch] text-[clamp(2.3rem,4vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-carbon">
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
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
            <div className="grid gap-2">
              <p className={`${mono} text-carbon/52`}>Selected Work</p>
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
                Relevant artifacts from the same archive.
              </h2>
            </div>
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/68">
              Industrial and controls work is not a separate identity here. It is one view across the same
              records that also feed The Index.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {supportingArtifacts.map((artifact) => (
              <article key={artifact.id} className="grid gap-4">
                <ArtifactPreview artifact={artifact} variant="wide" className="max-w-none" />
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className={`${mono} text-carbon/48`}>{formatArtifactDate(artifact.date)}</p>
                    <p className={`${mono} text-cobalt`}>{artifactTypeLabels[artifact.type]}</p>
                  </div>
                  <h3 className="m-0 text-[1.45rem] font-semibold tracking-[-0.03em] text-carbon">
                    {artifact.title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-carbon/70">{artifact.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start`}>
          <div className="grid gap-2">
            <p className={`${mono} text-carbon/52`}>Areas of Work</p>
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
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
              <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-base leading-relaxed text-carbon/70">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-2">
            <p className={`${mono} text-carbon/52`}>Scoped Consulting Offers</p>
            <h2 className="m-0 max-w-[10ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
              Defined packages, not open-ended ownership.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {consultingContent.offers.map((offer) => (
              <article key={offer.id} className="grid gap-4 border border-carbon/10 px-5 py-5 md:px-6 md:py-6">
                <div className="grid gap-2">
                  <p className={`${mono} text-cobalt`}>{offer.label}</p>
                  <h3 className="m-0 text-[1.5rem] font-semibold tracking-[-0.03em] text-carbon">
                    {offer.title}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-carbon/70">{offer.summary}</p>
                </div>
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  {offer.meta.map((item) => (
                    <div key={item.label} className="grid gap-1">
                      <p className={`${mono} text-carbon/48`}>{item.label}</p>
                      <p className="m-0 text-sm leading-relaxed text-carbon/72">{item.value}</p>
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
            <p className={`${mono} text-carbon/52`}>Approach &amp; Boundaries</p>
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
              Useful if the problem is real and the handoff can be real too.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              'Fixed scope and named deliverable before the work starts.',
              'Short engagements are normal. Long-term ownership is not assumed.',
              'Implementation support can be separately scoped, but indefinite support is not the model.',
            ].map((item) => (
              <p key={item} className="m-0 border-t border-carbon/10 pt-3 text-base leading-relaxed text-carbon/68">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-6 border border-carbon/10 bg-white/48 px-5 py-6 md:px-7 md:py-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end`}>
          <div className="grid gap-3">
            <p className={`${mono} text-carbon/52`}>Contact</p>
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
              Have an industrial problem worth defining?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/68">
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
