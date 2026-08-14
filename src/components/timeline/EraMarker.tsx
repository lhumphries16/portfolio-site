import type { Era } from '../../content/eras/types';

type EraMarkerProps = {
  era: Era;
};

export function EraMarker({ era }: EraMarkerProps) {
  return (
    <div className="grid gap-3 border-t border-carbon/12 pt-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="m-0 text-[0.82rem] font-medium uppercase tracking-[0.08em] text-carbon/42">{era.label}</p>
        <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-carbon/40">{era.span}</p>
      </div>
      <p className="m-0 max-w-[40rem] text-sm leading-relaxed text-carbon/64">{era.summary}</p>
      <p className="m-0 text-sm leading-relaxed text-carbon/52">{era.themes.join(' / ')}</p>
    </div>
  );
}
