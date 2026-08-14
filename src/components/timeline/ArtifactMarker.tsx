import {
  artifactDomainLabels,
  artifactTypeLabels,
  formatArtifactDate,
} from '../../content/artifacts';
import type { Artifact } from '../../content/artifacts/types';

type ArtifactMarkerProps = {
  artifact: Artifact;
};

export function ArtifactMarker({ artifact }: ArtifactMarkerProps) {
  return (
    <article className="grid gap-3 border-t border-carbon/10 pt-4">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
        <span>{formatArtifactDate(artifact.date)}</span>
        <span>{artifactTypeLabels[artifact.type]}</span>
        <span>{artifact.domains.map((domain) => artifactDomainLabels[domain]).join(' / ')}</span>
      </div>
      <div className="grid gap-2 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:items-start">
        <div className="grid gap-1">
          <h3 className="m-0 text-[1.3rem] font-semibold tracking-[-0.03em] text-carbon">
            {artifact.title}
          </h3>
          {artifact.subtitle ? <p className="m-0 text-sm text-carbon/62">{artifact.subtitle}</p> : null}
        </div>
        <div className="grid gap-2">
          <p className="m-0 text-sm leading-relaxed text-carbon/72">{artifact.summary}</p>
          {artifact.status ? (
            <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cobalt">
              {artifact.status}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
