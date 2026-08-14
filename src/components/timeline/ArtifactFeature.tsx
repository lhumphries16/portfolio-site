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
  return (
    <article className="grid gap-6 border-t border-carbon/10 pt-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] xl:items-start">
      <div className="grid gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-carbon/56">
          <span>{formatArtifactDate(artifact.date)}</span>
          <span>{artifactTypeLabels[artifact.type]}</span>
          {artifact.display.current ? <span className="text-active">Current</span> : null}
        </div>

        <div className="grid gap-2">
          <h3 className="m-0 max-w-[16ch] text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-carbon">
            {artifact.title}
          </h3>
          {artifact.subtitle ? <p className="m-0 text-[1.02rem] tracking-[-0.02em] text-carbon/66">{artifact.subtitle}</p> : null}
        </div>

        <p className="m-0 max-w-[44rem] text-[1.02rem] leading-relaxed text-carbon/78">{artifact.summary}</p>
        {artifact.story ? <p className="m-0 max-w-[44rem] text-base leading-relaxed text-carbon/66">{artifact.story}</p> : null}

        <div className="grid gap-3 border-t border-carbon/10 pt-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="grid gap-2">
            <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/48">Domains</p>
            <p className="m-0 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-cobalt">
              {artifact.domains.map((domain) => artifactDomainLabels[domain]).join(' / ')}
            </p>
          </div>
          {artifact.highlights?.length ? (
            <div className="grid gap-2">
              <p className="m-0 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon/48">
                Highlights
              </p>
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
            </div>
          ) : null}
        </div>

        {artifact.status ? (
          <p className="m-0 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-orange">{artifact.status}</p>
        ) : null}

        {artifact.visibility?.safeForPublic === 'pending-review' ? (
          <p className="m-0 max-w-[40rem] border-l-2 border-orange pl-4 text-sm leading-relaxed text-carbon/64">
            Public-safe summary only. This record uses approved visuals, while deeper technical detail remains intentionally constrained.
          </p>
        ) : null}

        {artifact.links?.length ? (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
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

      {media ? <div className="border border-carbon/12 bg-carbon/4 p-4">{media}</div> : null}
    </article>
  );
}
