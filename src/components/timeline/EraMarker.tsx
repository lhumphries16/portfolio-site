import type { Era } from '../../content/eras/types';

type EraMarkerProps = {
  era: Era;
};

export function EraMarker({ era }: EraMarkerProps) {
  return (
    <div className="grid gap-3 border-t border-carbon/14 pt-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-orange">{era.label}</p>
        <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/46">{era.span}</p>
      </div>
      <p className="m-0 max-w-[40rem] text-sm leading-relaxed text-carbon/66">{era.summary}</p>
      <div className="flex flex-wrap gap-2">
        {era.themes.map((theme) => (
          <span
            key={theme}
            className="border border-carbon/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-carbon/54"
          >
            {theme}
          </span>
        ))}
      </div>
    </div>
  );
}
