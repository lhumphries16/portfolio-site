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
  const metaItems = [
    formatArtifactDate(artifact.date),
    artifactTypeLabels[artifact.type],
    artifact.domains.map((domain) => artifactDomainLabels[domain]).join(' / '),
  ];

  return (
    <article className="grid gap-6 border-t border-carbon/10 pt-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
      <div className="grid gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-carbon/46">
          {metaItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="grid gap-2">
          <h3 className="m-0 text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] text-carbon">
            {artifact.title}
          </h3>
          {artifact.subtitle ? <p className="m-0 text-[0.98rem] tracking-[-0.02em] text-carbon/62">{artifact.subtitle}</p> : null}
        </div>
        <p className="m-0 text-[1.02rem] leading-relaxed text-carbon/74">{artifact.summary}</p>
        {artifact.story ? <p className="m-0 text-sm leading-relaxed text-carbon/66">{artifact.story}</p> : null}
        {artifact.highlights?.length ? (
          <p className="m-0 text-sm leading-relaxed text-carbon/58">
            {artifact.highlights.join(' / ')}
          </p>
        ) : null}
        {artifact.status ? (
          <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cobalt">{artifact.status}</p>
        ) : null}
        {artifact.visibility?.safeForPublic === 'pending-review' ? (
          <p className="m-0 max-w-[36rem] border-l border-orange/45 pl-4 text-sm leading-relaxed text-carbon/62">
            Public-safe summary only. Media and deeper technical detail remain pending review.
          </p>
        ) : null}
        {artifact.links?.length ? (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
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

      {media ? <div className="lg:pt-1">{media}</div> : null}
    </article>
  );
}
