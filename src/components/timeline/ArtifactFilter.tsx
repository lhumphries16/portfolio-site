import {
  artifactDomainLabels,
  artifactTypeFilterLabels,
  livingCvDomainFilters,
} from '../../content/artifacts';
import type { ArtifactDomainFilter, ArtifactTypeFilter } from '../../content/artifacts/types';

type ArtifactFilterProps = {
  typeFilter: ArtifactTypeFilter;
  domainFilter: ArtifactDomainFilter;
  resultCount: number;
  onTypeChange: (next: ArtifactTypeFilter) => void;
  onDomainChange: (next: ArtifactDomainFilter) => void;
};

const filterButtonClassName =
  'min-h-10 border px-3 py-2 text-left font-mono text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-200';

export function ArtifactFilter({
  typeFilter,
  domainFilter,
  resultCount,
  onTypeChange,
  onDomainChange,
}: ArtifactFilterProps) {
  const typeFilters: readonly ArtifactTypeFilter[] = ['all', 'project', 'experience', 'experiment', 'writing'];

  return (
    <section
      aria-labelledby="living-cv-filter-heading"
      className="grid gap-6 border-t border-b border-carbon/12 py-6"
    >
      <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="grid gap-2">
          <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/54">
            Filter the same archive by lens.
          </p>
          <h2
            id="living-cv-filter-heading"
            className="m-0 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.03em] text-carbon"
          >
            Artifact filters
          </h2>
        </div>
        <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/54">
          {resultCount} visible record{resultCount === 1 ? '' : 's'}
        </p>
      </div>

      <fieldset className="grid gap-3 border-0 p-0">
        <legend className="p-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/62">
          Type
        </legend>
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((option) => {
            const active = option === typeFilter;

            return (
              <button
                key={option}
                type="button"
                className={`${filterButtonClassName} ${
                  active
                    ? 'border-carbon bg-carbon text-bone'
                    : 'border-carbon/12 bg-bone text-carbon hover:border-carbon/32 hover:text-cobalt'
                }`}
                aria-pressed={active}
                onClick={() => onTypeChange(option)}
              >
                {artifactTypeFilterLabels[option]}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="grid gap-3 border-0 p-0">
        <legend className="p-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/62">
          Domain
        </legend>
        <div className="flex flex-wrap gap-2">
          {livingCvDomainFilters.map((option) => {
            const active = option === domainFilter;

            return (
              <button
                key={option}
                type="button"
                className={`${filterButtonClassName} ${
                  active
                    ? 'border-carbon bg-carbon text-bone'
                    : 'border-carbon/12 bg-bone text-carbon hover:border-carbon/32 hover:text-cobalt'
                }`}
                aria-pressed={active}
                onClick={() => onDomainChange(option)}
              >
                {option === 'all' ? 'All' : artifactDomainLabels[option]}
              </button>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}
