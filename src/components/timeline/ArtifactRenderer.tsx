import type { Artifact } from '../../content/artifacts/types';
import { ArtifactPreview } from '../artifacts/ArtifactPreview';
import { ArtifactCard } from './ArtifactCard';
import { ArtifactFeature } from './ArtifactFeature';
import { ArtifactMarker } from './ArtifactMarker';

type ArtifactRendererProps = {
  artifact: Artifact;
};

function renderArtifactMedia(artifact: Artifact, variant: 'default' | 'wide') {
  return <ArtifactPreview artifact={artifact} variant={variant} className="max-w-none" />;
}

export function ArtifactRenderer({ artifact }: ArtifactRendererProps) {
  if (artifact.display.weight === 'marker') {
    return <ArtifactMarker artifact={artifact} />;
  }

  if (artifact.display.weight === 'feature') {
    return <ArtifactFeature artifact={artifact} media={renderArtifactMedia(artifact, 'wide')} />;
  }

  return <ArtifactCard artifact={artifact} media={renderArtifactMedia(artifact, 'default')} />;
}
