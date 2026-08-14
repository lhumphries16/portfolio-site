import { Link } from 'react-router-dom';
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
const heroDisplay = 'page-title';
const kicker = 'editorial-kicker';
const actionLink = 'editorial-link';

const homeArtifacts = getArtifactsForSurface(artifacts, 'home');
const industrialArtifacts = getArtifactsForSurface(artifacts, 'industrial', { limit: 2 });
const webArtifacts = getArtifactsForSurface(artifacts, 'web', { limit: 2 });

export function HomePage() {
  const industrialLead = industrialArtifacts[0];
  const webLead = webArtifacts[0];

  return (
    <>
      <RouteMeta
        title="Tre Humphries | Whole-System Engineer"
        description="Tre Humphries is a whole-system engineer working across controls, hardware, software, interfaces, and operations through defined scopes and clean handoff."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 lg:py-16 xl:px-12 xl:py-18">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start`}>
          <div className="grid gap-3">
            <h1 className={`${heroDisplay} max-w-[8ch] text-[clamp(4rem,9vw,6.2rem)]`}>
              {profile.hero.statement}
            </h1>
            <p className="m-0 text-[clamp(1.12rem,2vw,1.45rem)] font-medium tracking-[-0.02em] text-carbon/58">
              Whole-System Engineer
            </p>
          </div>

          <div className="grid gap-5 lg:pt-5">
            <p className="m-0 max-w-[37rem] text-[1.08rem] leading-[1.62] text-carbon/74">
              Work tends to land where physical systems, controls, software, interfaces, and operations
              start affecting each other. The useful version is defined scope, real deliverable, and
              clean handoff.
            </p>
            <div className="grid w-full max-w-[37rem] gap-x-6 gap-y-2 border-t border-carbon/10 pt-4 text-sm tracking-[-0.02em] text-carbon/56 sm:grid-cols-2">
              {profile.hero.systemsProfile.map((item) => (
                <p key={item} className="m-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} divide-y divide-carbon/10 lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0`}>
          <article className="grid gap-5 pb-10 lg:pr-8 lg:pb-0 xl:pr-10">
            <div className="grid gap-4">
              <p className={kicker}>Industrial &amp; Controls</p>
              <h2 className="section-title max-w-[12ch] text-[clamp(2.2rem,4vw,3.4rem)]">
                Engineering work for machines, controls, hardware, and operations.
              </h2>
              <p className="support-copy max-w-[34rem]">
                For engineering teams, manufacturers, integrators, owners, and operators who need one
                experienced generalist on a defined problem.
              </p>
            </div>
            {industrialLead ? <ArtifactPreview artifact={industrialLead} variant="wide" className="max-w-none" /> : null}
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              {industrialArtifacts.map((artifact) => (
                <p key={artifact.id} className="m-0 text-sm leading-relaxed text-carbon/58">
                  {artifact.title}
                </p>
              ))}
            </div>
            <Link className={actionLink} to="/industrial">
              Open Industrial &amp; Controls
            </Link>
          </article>

          <article className="grid gap-5 pt-10 lg:pl-8 lg:pt-0 xl:pl-10">
            {webLead ? <ArtifactPreview artifact={webLead} variant="wide" className="max-w-none" /> : null}
            <div className="grid gap-4">
              <p className={kicker}>Web &amp; Digital Systems</p>
              <h2 className="section-title max-w-[12ch] text-[clamp(2.2rem,4vw,3.4rem)]">
                Professional websites and digital systems that clients can actually own.
              </h2>
              <p className="support-copy max-w-[34rem]">
                For contractors, service businesses, designers, and small organizations that need a
                sharp site, practical structure, and a handoff that lasts.
              </p>
            </div>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              {webArtifacts.map((artifact) => (
                <p key={artifact.id} className="m-0 text-sm leading-relaxed text-carbon/58">
                  {artifact.title}
                </p>
              ))}
            </div>
            <Link className={actionLink} to="/web">
              Open Web &amp; Digital Systems
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-9`}>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-end">
            <h2 className="section-title max-w-[11ch] text-[clamp(2.3rem,4vw,3.5rem)]">
              A few representative artifacts from both paths.
            </h2>
            <p className="support-copy max-w-[40rem]">
              The same artifact data feeds the homepage, the commercial pages, and The Index. No separate
              project lists, no duplicated records.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {homeArtifacts.map((artifact) => (
              <article key={artifact.id} className="grid gap-5">
                <ArtifactPreview artifact={artifact} variant="wide" className="max-w-none" />
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
                    <p className="m-0">{formatArtifactDate(artifact.date)}</p>
                    <p className="m-0">{artifactTypeLabels[artifact.type]}</p>
                  </div>
                  <h3 className="m-0 text-[1.65rem] font-semibold tracking-[-0.03em] text-carbon">
                    {artifact.title}
                  </h3>
                  {artifact.subtitle ? <p className="m-0 text-[0.98rem] text-carbon/60">{artifact.subtitle}</p> : null}
                  <p className="m-0 text-sm leading-relaxed text-carbon/70">{artifact.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12">
        <div className={`${pageWrap} grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[12ch] text-[clamp(2rem,4vw,3.2rem)]">
              Want the full chronology instead of the quick routing?
            </h2>
          </div>
          <Link className={actionLink} to="/index">
            Explore The Index
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-6 border-t border-carbon/10 pt-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end`}>
          <div className="grid gap-3">
            <h2 className="section-title max-w-[11ch] text-[clamp(2.15rem,4vw,3.35rem)]">
              Have a project in mind?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="support-copy max-w-[40rem]">
              Defined scope, clear handoff, and the right mix of physical systems, software, or delivery
              work is usually enough to know whether a conversation should happen.
            </p>
            <ContactCTA
              ctaLabel={profile.contact.ctaLabel}
              dialogTitle="Start the conversation"
              methods={profile.contact.methods}
              variant="section"
            />
          </div>
        </div>
      </section>
    </>
  );
}
