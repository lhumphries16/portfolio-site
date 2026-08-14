import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { RouteMeta } from '../components/RouteMeta';
import { ArtifactFilter } from '../components/timeline/ArtifactFilter';
import { LivingTimeline } from '../components/timeline/LivingTimeline';
import {
  artifacts,
  artifactTypeLabels,
  filterArtifacts,
  formatArtifactDate,
  getArtifactYearBounds,
  getCurrentHighlights,
  normalizeArtifactDomainFilter,
  normalizeArtifactTypeFilter,
  normalizeArtifactYearRange,
} from '../content/artifacts';
import type {
  ArtifactDomainFilter,
  ArtifactTypeFilter,
  ArtifactYearBounds,
  ArtifactYearRange,
} from '../content/artifacts/types';
import { eras } from '../content/eras';
import { profile } from '../data/profile';

const pageWrap = 'page-wrap';
const contentWrap = 'content-wrap';
const kicker = 'editorial-kicker';

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

function updateYearParams(
  params: URLSearchParams,
  years: ArtifactYearRange,
  bounds: ArtifactYearBounds
) {
  if (years.start === bounds.min && years.end === bounds.max) {
    params.delete('from');
    params.delete('to');
    return;
  }

  params.set('from', String(years.start));
  params.set('to', String(years.end));
}

export function LivingCvPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const availableYears = useMemo(() => getArtifactYearBounds(artifacts), []);
  const typeFilter = normalizeArtifactTypeFilter(searchParams.get('type'));
  const domainFilter = normalizeArtifactDomainFilter(searchParams.get('domain'));
  const yearRange = useMemo(
    () => normalizeArtifactYearRange(searchParams.get('from'), searchParams.get('to'), availableYears),
    [availableYears, searchParams]
  );
  const filters = useMemo(
    () => ({
      type: typeFilter,
      domain: domainFilter,
      years: yearRange,
    }),
    [domainFilter, typeFilter, yearRange]
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

  const handleYearChange = (next: ArtifactYearRange) => {
    const nextParams = new URLSearchParams(searchParams);
    updateYearParams(nextParams, next, availableYears);
    setSearchParams(nextParams);
  };

  return (
    <>
      <RouteMeta
        title="The Index | Tre Humphries"
        description="The autobiographical archive of Tre Humphries across professional experience, old projects, experiments, software, websites, engineering work, and future writing."
      />

      <section className="border-b border-carbon/10 bg-bone px-4 py-10 text-carbon md:px-6 lg:px-8 lg:py-16 xl:px-12 xl:py-18">
        <div className={`${pageWrap} grid gap-8 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:items-stretch`}>
          <div className="grid gap-6">
            <p className={kicker}>The Index</p>
            <div className="grid gap-4 border-l-[0.4rem] border-cobalt pl-4 md:pl-6">
              <p className="m-0 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-cobalt">2014 - now</p>
              <h1 className="page-title max-w-[9ch] text-[clamp(3.35rem,8.8vw,5.8rem)]">
                Personal archive. Working catalog.
              </h1>
            </div>
          </div>

          <div className="grid gap-5 xl:pt-4">
            <div className="grid gap-4 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] md:items-start">
              <p className="body-copy max-w-[40rem]">
                Professional experience, old websites, experiments, software, client delivery, engineering
                work, and future writing all live in one chronology.
              </p>
              <div className="grid gap-2 border-t border-carbon/10 pt-4 md:border-t-0 md:border-l md:pl-4">
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cobalt">
                  Archive cues
                </p>
                <p className="m-0 text-sm leading-relaxed text-carbon/62">
                  Type, domain, and year range all act on the same record stream.
                </p>
              </div>
            </div>

            <div className="grid overflow-hidden border border-carbon/10 bg-white md:grid-cols-[minmax(9rem,0.26fr)_minmax(0,1fr)]">
              <div className="grid gap-1 bg-cobalt px-4 py-5 text-bone md:content-start md:px-5 md:py-6">
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone/70">Index</p>
                <p className="m-0 font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-[0.88] tracking-[-0.04em]">
                  2014
                </p>
                <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bone/70">
                  through now
                </p>
              </div>

              <div className="grid divide-y divide-carbon/10">
                {currentHighlights.slice(0, 3).map((artifact) => (
                  <article
                    key={artifact.id}
                    className="grid gap-2 px-4 py-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-4 md:px-5"
                  >
                    <div className="grid gap-1">
                      <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-carbon/42">
                        {formatArtifactDate(artifact.date)}
                      </p>
                      <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-carbon/36">
                        {artifactTypeLabels[artifact.type]}
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h2 className="m-0 text-[1.15rem] font-semibold tracking-[-0.03em] text-carbon">
                        {artifact.title}
                      </h2>
                      <p className="m-0 text-sm leading-relaxed text-carbon/62">{artifact.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <p className="support-copy max-w-[42rem]">
              The homepage routes by problem. The Index keeps the longer autobiographical record.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-6 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-end`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[10ch] text-[clamp(2.1rem,4vw,3.2rem)] text-bone">
              Current artifacts rise to the surface without changing the archive.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {currentHighlights.map((artifact) => (
              <article key={artifact.id} className="grid gap-2 border-t border-bone/12 pt-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-bone/46">
                  <p className="m-0">{formatArtifactDate(artifact.date)}</p>
                  <p className="m-0">{artifactTypeLabels[artifact.type]}</p>
                  {artifact.display.current ? <p className="m-0 text-cobalt">Current</p> : null}
                </div>
                <h3 className="m-0 text-[1.3rem] font-semibold tracking-[-0.03em] text-bone">
                  {artifact.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-bone/64">{artifact.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-carbon/10 bg-bone px-4 py-14 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${contentWrap} grid gap-8`}>
          <ArtifactFilter
            typeFilter={typeFilter}
            domainFilter={domainFilter}
            availableYears={availableYears}
            yearRange={yearRange}
            resultCount={visibleArtifacts.length}
            onTypeChange={handleTypeChange}
            onDomainChange={handleDomainChange}
            onYearChange={handleYearChange}
          />
          <LivingTimeline artifacts={artifacts} eras={eras} filters={filters} />
        </div>
      </section>

      <section className="border-t border-b border-carbon/10 bg-bone px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12">
        <div className={`${pageWrap} grid gap-4 lg:grid-cols-[minmax(0,0.84fr)_auto] lg:items-end`}>
          <div className="grid gap-2">
            <h2 className="section-title max-w-[12ch] text-[clamp(2.2rem,4vw,3.4rem)]">
              STILL BUILDING.
            </h2>
            <p className="support-copy max-w-[40rem]">
              More preserved media, more writing, and future detail pages can plug into the same archive
              without changing the chronology model.
            </p>
          </div>
          <div className="grid gap-2">
            <Link className="editorial-link" to="/industrial">
              Industrial &amp; Controls
            </Link>
            <Link className="editorial-link" to="/web">
              Web &amp; Digital Systems
            </Link>
            <a className="editorial-link" href={`mailto:${profile.brand.email}`}>
              {profile.brand.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
