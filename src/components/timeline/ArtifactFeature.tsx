import {
  artifactDomainLabels,
  artifactTypeLabels,
  formatArtifactDate,
} from '../../content/artifacts';
import type { Artifact } from '../../content/artifacts/types';
import type { ReactNode } from 'react';

type ArtifactFeatureProps = {
  artifact: Artifact;
  media?: ReactNode;
};

export function ArtifactFeature({ artifact, media }: ArtifactFeatureProps) {
  const metaItems = [
    formatArtifactDate(artifact.date),
    artifactTypeLabels[artifact.type],
    artifact.display.current ? 'Current' : null,
  ].filter(Boolean) as string[];

  return (
    <article className="grid gap-6 border-t border-carbon/10 pt-7 xl:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)] xl:items-start">
      {media ? <div>{media}</div> : null}

      <div className="grid gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
          {metaItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="grid gap-2">
          <h3 className="m-0 max-w-[14ch] text-[clamp(2.2rem,5vw,3.7rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-carbon">
            {artifact.title}
          </h3>
          {artifact.subtitle ? <p className="m-0 text-[1rem] tracking-[-0.02em] text-carbon/62">{artifact.subtitle}</p> : null}
        </div>

        <p className="m-0 max-w-[44rem] text-[1.04rem] leading-relaxed text-carbon/76">{artifact.summary}</p>
        {artifact.story ? <p className="m-0 max-w-[44rem] text-base leading-relaxed text-carbon/66">{artifact.story}</p> : null}

        <div className="grid gap-2 border-t border-carbon/10 pt-4">
          <p className="m-0 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
            {artifact.domains.map((domain) => artifactDomainLabels[domain]).join(' / ')}
          </p>
          {artifact.highlights?.length ? (
            <p className="m-0 text-sm leading-relaxed text-carbon/58">{artifact.highlights.join(' / ')}</p>
          ) : null}
        </div>

        {artifact.status ? (
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cobalt">{artifact.status}</p>
        ) : null}

        {artifact.visibility?.safeForPublic === 'pending-review' ? (
          <p className="m-0 max-w-[40rem] border-l border-orange/45 pl-4 text-sm leading-relaxed text-carbon/62">
            Public-safe summary only. This record uses approved visuals, while deeper technical detail remains intentionally constrained.
          </p>
        ) : null}

        {artifact.links?.length ? (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {artifact.links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  className="editorial-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.href} className="editorial-link" href={link.href}>
                  {link.label}
                </a>
              )
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
