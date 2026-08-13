import {
  artifactDomainLabels,
  artifactTypeFilterLabels,
  livingCvDomainFilters,
} from '../../content/artifacts';
import type {
  ArtifactDomainFilter,
  ArtifactTypeFilter,
  ArtifactYearBounds,
  ArtifactYearRange,
} from '../../content/artifacts/types';

type ArtifactFilterProps = {
  typeFilter: ArtifactTypeFilter;
  domainFilter: ArtifactDomainFilter;
  availableYears: ArtifactYearBounds;
  yearRange: ArtifactYearRange;
  resultCount: number;
  onTypeChange: (next: ArtifactTypeFilter) => void;
  onDomainChange: (next: ArtifactDomainFilter) => void;
  onYearChange: (next: ArtifactYearRange) => void;
};

const filterButtonClassName =
  'min-h-10 border px-3 py-2 text-left font-mono text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-200';

export function ArtifactFilter({
  typeFilter,
  domainFilter,
  availableYears,
  yearRange,
  resultCount,
  onTypeChange,
  onDomainChange,
  onYearChange,
}: ArtifactFilterProps) {
  const typeFilters: readonly ArtifactTypeFilter[] = ['all', 'project', 'experience', 'experiment', 'writing'];
  const totalSpan = Math.max(availableYears.max - availableYears.min, 1);
  const startPercent = ((yearRange.start - availableYears.min) / totalSpan) * 100;
  const endPercent = ((yearRange.end - availableYears.min) / totalSpan) * 100;
  const hasCustomYearRange =
    yearRange.start !== availableYears.min || yearRange.end !== availableYears.max;

  const handleStartYearChange = (nextStart: number) => {
    onYearChange({
      start: Math.min(nextStart, yearRange.end),
      end: yearRange.end,
    });
  };

  const handleEndYearChange = (nextEnd: number) => {
    onYearChange({
      start: yearRange.start,
      end: Math.max(nextEnd, yearRange.start),
    });
  };

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

      <fieldset className="grid gap-4 border border-carbon/10 bg-white/42 px-4 py-4 md:px-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <legend className="p-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon/62">
            Date range
          </legend>
          {hasCustomYearRange ? (
            <button
              type="button"
              className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/52 transition-colors duration-200 hover:text-cobalt"
              onClick={() => onYearChange({ start: availableYears.min, end: availableYears.max })}
            >
              Reset
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="grid gap-1">
            <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/48">From</p>
            <p className="m-0 text-[1.05rem] font-semibold tracking-[-0.02em] text-carbon">{yearRange.start}</p>
          </div>
          <div className="grid gap-1 text-right">
            <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/48">To</p>
            <p className="m-0 text-[1.05rem] font-semibold tracking-[-0.02em] text-carbon">{yearRange.end}</p>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="relative h-8">
            <div className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-carbon/12" />
            <div
              className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-cobalt/28"
              style={{
                left: `${startPercent}%`,
                width: `${Math.max(endPercent - startPercent, 0)}%`,
              }}
            />
            <input
              aria-label="From year"
              className="timeline-range-slider absolute inset-0 h-8 w-full appearance-none bg-transparent"
              data-testid="artifact-year-range-start"
              max={yearRange.end}
              min={availableYears.min}
              step={1}
              type="range"
              value={yearRange.start}
              onChange={(event) => handleStartYearChange(Number(event.currentTarget.value))}
            />
            <input
              aria-label="To year"
              className="timeline-range-slider absolute inset-0 h-8 w-full appearance-none bg-transparent"
              data-testid="artifact-year-range-end"
              max={availableYears.max}
              min={yearRange.start}
              step={1}
              type="range"
              value={yearRange.end}
              onChange={(event) => handleEndYearChange(Number(event.currentTarget.value))}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/48">
            <span>{availableYears.min}</span>
            <span>{availableYears.max}</span>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
