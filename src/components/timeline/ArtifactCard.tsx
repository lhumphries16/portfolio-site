import {
  artifactDomainLabels,
  artifactTypeLabels,
  formatArtifactDate,
} from '../../content/artifacts';
import type { Artifact } from '../../content/artifacts/types';
import type { ReactNode } from 'react';

type ArtifactCardProps = {
  artifact: Artifact;
  media?: ReactNode;
};

export function ArtifactCard({ artifact, media }: ArtifactCardProps) {
  return (
    <article className="grid gap-5 border-t border-carbon/10 pt-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
      <div className="grid gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-carbon/56">
          <span>{formatArtifactDate(artifact.date)}</span>
          <span>{artifactTypeLabels[artifact.type]}</span>
        </div>
        <div className="grid gap-2">
          <h3 className="m-0 text-[clamp(1.75rem,3vw,2.3rem)] font-semibold tracking-[-0.03em] text-carbon">
            {artifact.title}
          </h3>
          {artifact.subtitle ? <p className="m-0 text-base tracking-[-0.02em] text-carbon/66">{artifact.subtitle}</p> : null}
        </div>
        <p className="m-0 text-base leading-relaxed text-carbon/76">{artifact.summary}</p>
        {artifact.story ? <p className="m-0 text-sm leading-relaxed text-carbon/66">{artifact.story}</p> : null}
        <div className="grid gap-2">
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/48">
            Domains
          </p>
          <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-cobalt">
            {artifact.domains.map((domain) => artifactDomainLabels[domain]).join(' / ')}
          </p>
        </div>
        {artifact.highlights?.length ? (
          <div className="flex flex-wrap gap-2">
            {artifact.highlights.map((highlight) => (
              <span
                key={highlight}
                className="border border-carbon/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-carbon/62"
              >
                {highlight}
              </span>
            ))}
          </div>
        ) : null}
        {artifact.status ? (
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-orange">{artifact.status}</p>
        ) : null}
        {artifact.visibility?.safeForPublic === 'pending-review' ? (
          <p className="m-0 max-w-[36rem] text-sm leading-relaxed text-carbon/62">
            Public-safe summary only. Media and deeper technical detail remain pending review.
          </p>
        ) : null}
        {artifact.links?.length ? (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {artifact.links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon transition-colors duration-200 hover:text-cobalt"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-carbon transition-colors duration-200 hover:text-cobalt"
                  href={link.href}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        ) : null}
      </div>

      {media ? <div className="border border-carbon/12 bg-carbon/4 p-3">{media}</div> : null}
    </article>
  );
}
