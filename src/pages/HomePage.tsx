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

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.04em]';
const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.18em]';
const actionLink =
  'inline-flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-200';

const homeArtifacts = getArtifactsForSurface(artifacts, 'home');
const industrialArtifacts = getArtifactsForSurface(artifacts, 'industrial', { limit: 2 });
const webArtifacts = getArtifactsForSurface(artifacts, 'web', { limit: 2 });

export function HomePage() {
  return (
    <>
      <RouteMeta
        title="Tre Humphries | Whole-System Engineer"
        description="Tre Humphries is a whole-system engineer working across controls, hardware, software, interfaces, and operations through defined scopes and clean handoff."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 lg:py-14 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end`}>
          <div className="grid gap-5">
            <p className={`${mono} text-carbon/54`}>Tre Humphries</p>
            <div className="grid gap-3">
              <h1 className={`${heroDisplay} m-0 max-w-[7ch] text-[clamp(4rem,12vw,7.8rem)] uppercase text-carbon`}>
                Whole-System Engineer
              </h1>
              <p className={`${heroDisplay} m-0 max-w-[9ch] text-[clamp(2rem,4.4vw,3.9rem)] text-carbon`}>
                {profile.hero.statement}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:justify-items-end">
            <p className="m-0 max-w-[38rem] text-[1.04rem] leading-relaxed text-carbon/74">
              Work tends to land where physical systems, controls, software, interfaces, and operations
              start affecting each other. The useful version is defined scope, real deliverable, and
              clean handoff.
            </p>
            <div className="grid w-full max-w-[42rem] gap-3 border-t border-carbon/10 pt-5 sm:grid-cols-2">
              {profile.hero.systemsProfile.map((item) => (
                <p key={item} className="m-0 border-t border-carbon/8 pt-2 text-sm tracking-[-0.02em] text-carbon/62 first:border-t-0 first:pt-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-5 lg:grid-cols-2`}>
          <article className="grid gap-5 border border-carbon/10 bg-bone px-5 py-6 md:px-7 md:py-7">
            <p className={`${mono} text-carbon/52`}>Industrial &amp; Controls</p>
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[11ch] text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-carbon">
                Engineering work for machines, controls, hardware, and operations.
              </h2>
              <p className="m-0 max-w-[34rem] text-base leading-relaxed text-carbon/74">
                For engineering teams, manufacturers, integrators, owners, and operators who need one
                experienced generalist on a defined problem.
              </p>
            </div>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              {industrialArtifacts.map((artifact) => (
                <p key={artifact.id} className="m-0 text-sm leading-relaxed text-carbon/62">
                  {artifact.title}
                </p>
              ))}
            </div>
            <Link className={`${actionLink} text-carbon hover:text-cobalt`} to="/industrial">
              Open Industrial &amp; Controls
            </Link>
          </article>

          <article className="grid gap-5 border border-carbon/10 bg-cobalt/4 px-5 py-6 md:px-7 md:py-7">
            <p className={`${mono} text-cobalt`}>Web &amp; Digital Systems</p>
            <div className="grid gap-3">
              <h2 className="m-0 max-w-[11ch] text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-carbon">
                Professional websites and digital systems that clients can actually own.
              </h2>
              <p className="m-0 max-w-[34rem] text-base leading-relaxed text-carbon/74">
                For contractors, service businesses, designers, and small organizations that need a
                sharp site, practical structure, and a handoff that lasts.
              </p>
            </div>
            <div className="grid gap-2 border-t border-carbon/10 pt-4">
              {webArtifacts.map((artifact) => (
                <p key={artifact.id} className="m-0 text-sm leading-relaxed text-carbon/62">
                  {artifact.title}
                </p>
              ))}
            </div>
            <Link className={`${actionLink} text-carbon hover:text-cobalt`} to="/web">
              Open Web &amp; Digital Systems
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
            <div className="grid gap-2">
              <p className={`${mono} text-carbon/52`}>Selected Work</p>
              <h2 className="m-0 max-w-[10ch] text-[clamp(2.3rem,4vw,3.6rem)] font-semibold tracking-[-0.04em] text-carbon">
                A few representative artifacts from both paths.
              </h2>
            </div>
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/72">
              The same artifact data feeds the homepage, the commercial pages, and The Index. No separate
              project lists, no duplicated records.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {homeArtifacts.map((artifact) => (
              <article key={artifact.id} className="grid gap-4">
                <ArtifactPreview artifact={artifact} variant="wide" className="max-w-none" />
                <div className="grid gap-2 border-t border-carbon/10 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className={`${mono} text-carbon/46`}>{formatArtifactDate(artifact.date)}</p>
                    <p className={`${mono} text-cobalt`}>{artifactTypeLabels[artifact.type]}</p>
                  </div>
                  <h3 className="m-0 text-[1.7rem] font-semibold tracking-[-0.03em] text-carbon">
                    {artifact.title}
                  </h3>
                  {artifact.subtitle ? <p className="m-0 text-sm text-carbon/60">{artifact.subtitle}</p> : null}
                  <p className="m-0 text-sm leading-relaxed text-carbon/72">{artifact.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 xl:px-12">
        <div className={`${pageWrap} grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_auto] lg:items-end`}>
          <div className="grid gap-2">
            <p className={`${mono} text-carbon/52`}>Quiet CTA</p>
            <h2 className="m-0 max-w-[12ch] text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.04em] text-carbon">
              Want the full chronology instead of the quick routing?
            </h2>
          </div>
          <Link className={`${actionLink} text-carbon hover:text-cobalt`} to="/index">
            Explore The Index
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-6 border border-carbon/10 bg-white/48 px-5 py-6 md:px-7 md:py-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end`}>
          <div className="grid gap-3">
            <p className={`${mono} text-carbon/52`}>Contact</p>
            <h2 className="m-0 max-w-[11ch] text-[clamp(2.15rem,4vw,3.45rem)] font-semibold tracking-[-0.04em] text-carbon">
              Have a project in mind?
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="m-0 max-w-[40rem] text-base leading-relaxed text-carbon/72">
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
