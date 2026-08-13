import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SystemRail } from '../components/SystemRail';
import { ArtifactFilter } from '../components/timeline/ArtifactFilter';
import { LivingTimeline } from '../components/timeline/LivingTimeline';
import {
  artifacts,
  artifactTypeLabels,
  filterArtifacts,
  formatArtifactDate,
  getCurrentHighlights,
  normalizeArtifactDomainFilter,
  normalizeArtifactTypeFilter,
} from '../content/artifacts';
import type { ArtifactDomainFilter, ArtifactTypeFilter } from '../content/artifacts/types';
import { eras } from '../content/eras';
import { RouteMeta } from '../components/RouteMeta';
import { profile } from '../data/profile';

const pageWrap = 'mx-auto max-w-[1440px]';
const contentWrap = 'mx-auto max-w-[1320px]';
const heroDisplay = 'font-display leading-[0.92] tracking-[-0.03em]';
const sectionTitle = 'text-[clamp(2.2rem,4vw,3.4rem)] font-semibold tracking-[-0.03em]';

function updateFilterParam(
  params: URLSearchParams,
  key: 'type' | 'domain',
  value: ArtifactTypeFilter | ArtifactDomainFilter
) {
  if (value === 'all') {
    params.delete(key);
    return;
  }

  params.set(key, value);
}

export function LivingCvPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = normalizeArtifactTypeFilter(searchParams.get('type'));
  const domainFilter = normalizeArtifactDomainFilter(searchParams.get('domain'));
  const filters = useMemo(
    () => ({
      type: typeFilter,
      domain: domainFilter,
    }),
    [domainFilter, typeFilter]
  );

  const visibleArtifacts = useMemo(() => filterArtifacts(artifacts, filters), [filters]);
  const currentHighlights = useMemo(() => getCurrentHighlights(artifacts, 4), []);

  const handleTypeChange = (next: ArtifactTypeFilter) => {
    const nextParams = new URLSearchParams(searchParams);
    updateFilterParam(nextParams, 'type', next);
    setSearchParams(nextParams);
  };

  const handleDomainChange = (next: ArtifactDomainFilter) => {
    const nextParams = new URLSearchParams(searchParams);
    updateFilterParam(nextParams, 'domain', next);
    setSearchParams(nextParams);
  };

  return (
    <>
      <RouteMeta
        title="Living CV | Tre Humphries"
        description="A filterable archive of experience, projects, experiments, and future writing across controls, software, web, embedded, physical systems, data, and operations."
      />

      <section className="border-b border-bone/10 bg-carbon px-4 py-10 text-bone md:px-6 lg:px-8 lg:py-12 xl:px-12 xl:py-14">
        <div className={`${pageWrap} grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-end`}>
          <div className="grid gap-6">
            <SystemRail label="Archive Route" index="LCV" labelClassName="text-steel" />
            <div className="grid gap-3">
              <h1 className={`${heroDisplay} m-0 max-w-[8ch] text-[clamp(3.6rem,10vw,6.7rem)] uppercase text-bone`}>
                Living CV
              </h1>
              <p className="m-0 max-w-[36rem] text-[1.04rem] leading-relaxed text-steel">
                One chronological archive for professional experience, client work, experiments, software,
                engineering projects, and future writing.
              </p>
            </div>
            <p className={`${heroDisplay} m-0 max-w-[13ch] text-[clamp(2rem,4vw,3.9rem)] text-bone`}>
              Same history. Different filters. No homepage rewiring every time a new artifact appears.
            </p>
          </div>

          <div className="grid gap-5 border-t border-bone/10 pt-5 lg:border-t-0 lg:pt-0">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="border border-bone/10 px-4 py-4">
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel">Artifacts</p>
                <p className="m-0 pt-2 text-[2.2rem] font-semibold tracking-[-0.04em] text-bone">
                  {artifacts.length}
                </p>
              </div>
              <div className="border border-bone/10 px-4 py-4">
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel">Eras</p>
                <p className="m-0 pt-2 text-[2.2rem] font-semibold tracking-[-0.04em] text-bone">{eras.length}</p>
              </div>
              <div className="border border-bone/10 px-4 py-4">
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel">Visible now</p>
                <p className="m-0 pt-2 text-[2.2rem] font-semibold tracking-[-0.04em] text-bone">
                  {visibleArtifacts.length}
                </p>
              </div>
            </div>
            <p className="m-0 max-w-[38rem] text-sm leading-relaxed text-steel">
              This route is intentionally Phase 1: the content model and working archive come first. Detail pages,
              additional media preservation, and future writing can layer on without replacing the data model.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8`}>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-end">
            <div className="grid gap-4">
              <SystemRail label="Present Day" index="01" labelClassName="text-carbon/62" />
              <h2 className={`${sectionTitle} max-w-[10ch] text-carbon`}>What the archive says about right now.</h2>
            </div>
            <p className="m-0 max-w-[42rem] text-base leading-relaxed text-carbon/72">
              Highlights here are derived from artifact metadata like <span className="font-mono">featured</span> and
              <span className="font-mono"> current</span>, not from homepage-specific conditions.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {currentHighlights.map((artifact) => (
              <article key={artifact.id} className="grid gap-3 border border-carbon/10 bg-bone px-4 py-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/52">
                  <span>{formatArtifactDate(artifact.date)}</span>
                  <span>{artifactTypeLabels[artifact.type]}</span>
                  {artifact.display.current ? <span className="text-active">Current</span> : null}
                </div>
                <div className="grid gap-1">
                  <h3 className="m-0 text-[1.35rem] font-semibold tracking-[-0.03em] text-carbon">
                    {artifact.title}
                  </h3>
                  {artifact.subtitle ? <p className="m-0 text-sm text-carbon/64">{artifact.subtitle}</p> : null}
                </div>
                <p className="m-0 text-sm leading-relaxed text-carbon/72">{artifact.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-4 pb-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:pb-16">
        <div className={`${contentWrap} grid gap-8`}>
          <ArtifactFilter
            typeFilter={typeFilter}
            domainFilter={domainFilter}
            resultCount={visibleArtifacts.length}
            onTypeChange={handleTypeChange}
            onDomainChange={handleDomainChange}
          />
          <LivingTimeline artifacts={artifacts} eras={eras} filters={filters} />
        </div>
      </section>

      <section className="border-t border-bone/10 bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-6`}>
          <SystemRail label="Current End" index="02" labelClassName="text-steel" />
          <div className="grid gap-3">
            <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-active">STILL BUILDING.</p>
            <h2 className={`${heroDisplay} m-0 max-w-[12ch] text-[clamp(2.4rem,5vw,4.6rem)] text-bone`}>
              More artifacts, preserved media, and writing can plug into this without changing the page structure.
            </h2>
          </div>
          <p className="m-0 max-w-[44rem] text-base leading-relaxed text-steel">
            Phase 1 stops at the archive model and working timeline. Future detail routes such as
            <span className="font-mono"> /artifacts/:slug</span>, richer media, and writing records remain deferred.
          </p>
        </div>
      </section>

      <section className="bg-carbon px-4 pb-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:pb-16">
        <div className={`${pageWrap} grid gap-6 border-t border-bone/10 pt-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start`}>
          <div className="grid gap-3">
            <SystemRail label="Contact" index="03" labelClassName="text-steel" />
            <h2 className={`${sectionTitle} max-w-[8ch] text-bone`}>If this archive overlaps your problem, reach out.</h2>
          </div>

          <div className="grid gap-4 border border-bone/10 bg-bone/4 px-5 py-5">
            <p className="m-0 max-w-[38rem] text-base leading-relaxed text-steel">
              The current working model is still the same: scoped engineering work, clear deliverables, and a clean handoff when it makes sense.
            </p>
            <div className="grid gap-2">
              <a
                className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cobalt transition-colors duration-200 hover:text-bone"
                href={`mailto:${profile.brand.email}`}
              >
                {profile.brand.email}
              </a>
              <Link
                className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel transition-colors duration-200 hover:text-bone"
                to="/consulting"
              >
                Open consulting page
              </Link>
              <Link
                className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel transition-colors duration-200 hover:text-bone"
                to="/cv"
              >
                Open CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
