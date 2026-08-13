import { buildTimelineEntries, filterArtifacts } from '../../content/artifacts';
import type { Artifact, ArtifactFilters } from '../../content/artifacts/types';
import type { Era } from '../../content/eras/types';
import { ArtifactRenderer } from './ArtifactRenderer';
import { EraMarker } from './EraMarker';

type LivingTimelineProps = {
  artifacts: readonly Artifact[];
  eras: readonly Era[];
  filters: ArtifactFilters;
};

export function LivingTimeline({ artifacts, eras, filters }: LivingTimelineProps) {
  const visibleArtifacts = filterArtifacts(artifacts, filters);
  const eraLookup = eras.reduce(
    (accumulator, era) => {
      accumulator[era.id] = era;
      return accumulator;
    },
    {} as Record<Era['id'], Era>
  );
  const entries = buildTimelineEntries(visibleArtifacts, eraLookup);

  return (
    <section aria-labelledby="living-cv-timeline-heading" className="grid gap-6">
      <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="grid gap-2">
          <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/54">
            One chronology. Several lenses.
          </p>
          <h2
            id="living-cv-timeline-heading"
            className="m-0 text-[clamp(2.1rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-carbon"
          >
            Archive timeline
          </h2>
        </div>
        <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/54">
          {visibleArtifacts.length} matching artifact{visibleArtifacts.length === 1 ? '' : 's'}
        </p>
      </div>

      {entries.length ? (
        <div className="grid gap-4 border-l border-carbon/10 pl-5 md:pl-7">
          {entries.map((entry, index) => {
            if (entry.kind === 'year') {
              return (
                <div key={`${entry.kind}-${entry.year}-${index}`} className="pt-3">
                  <p className="m-0 font-mono text-[0.88rem] uppercase tracking-[0.18em] text-carbon/42">
                    {entry.year}
                  </p>
                </div>
              );
            }

            if (entry.kind === 'era') {
              return <EraMarker key={`${entry.kind}-${entry.era.id}-${index}`} era={entry.era} />;
            }

            return <ArtifactRenderer key={entry.artifact.id} artifact={entry.artifact} />;
          })}
        </div>
      ) : (
        <div className="border border-carbon/10 bg-carbon/3 px-5 py-6">
          <p className="m-0 text-base leading-relaxed text-carbon/72">
            No artifacts match this filter combination yet. Reset one filter and the archive should repopulate immediately.
          </p>
        </div>
      )}
    </section>
  );
}
