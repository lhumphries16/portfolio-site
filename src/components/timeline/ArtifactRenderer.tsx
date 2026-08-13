import { BrowserPreview } from '../BrowserPreview';
import {
  artifactDomainLabels,
  formatArtifactDate,
} from '../../content/artifacts';
import type { Artifact, ArtifactMedia } from '../../content/artifacts/types';
import type { BrowserPreviewRecord, MediaPlaceholder } from '../../data/types';
import { ArtifactCard } from './ArtifactCard';
import { ArtifactFeature } from './ArtifactFeature';
import { ArtifactMarker } from './ArtifactMarker';

type ArtifactRendererProps = {
  artifact: Artifact;
};

function getPrimaryMedia(artifact: Artifact) {
  return artifact.media?.find((media) => media.featured) ?? artifact.media?.[0];
}

function getMediaPlaceholder(artifact: Artifact, media?: ArtifactMedia): MediaPlaceholder {
  if (media?.type === 'pdf') {
    return {
      title: media.title ?? artifact.title,
      note: 'PDF media is registered for this record, but an in-place preview has not been added here yet.',
      lines: artifact.domains.map((domain) => artifactDomainLabels[domain]).slice(0, 4),
      caption: media.caption,
    };
  }

  if (media?.type === 'audio') {
    return {
      title: media.title ?? artifact.title,
      note: 'Audio media is registered for this record, but this archive currently treats it as a linked artifact rather than an inline player.',
      lines: artifact.domains.map((domain) => artifactDomainLabels[domain]).slice(0, 4),
      caption: media.caption,
    };
  }

  return {
    title: artifact.title,
    note: 'No approved public media has been added for this record yet.',
    lines: [
      formatArtifactDate(artifact.date),
      ...artifact.domains.map((domain) => artifactDomainLabels[domain]).slice(0, 3),
    ],
    caption: media?.caption,
  };
}

function toBrowserPreviewRecord(media?: ArtifactMedia): BrowserPreviewRecord | undefined {
  if (!media) {
    return undefined;
  }

  if (media.type === 'image') {
    return {
      previewMode: 'image',
      previewSrc: media.src,
      previewTitle: media.title ?? media.alt ?? 'Artifact image preview',
      previewAlt: media.alt,
      previewCaption: media.caption,
    };
  }

  if (media.type === 'video') {
    return {
      previewMode: 'video',
      previewSrc: media.src,
      previewTitle: media.title ?? 'Artifact video preview',
      previewPosterSrc: media.poster,
      previewCaption: media.caption,
    };
  }

  if (media.type === 'iframe' || media.type === 'preserved-site' || media.type === 'interactive') {
    return {
      previewMode: 'iframe',
      previewSrc: media.src,
      previewTitle: media.title ?? 'Artifact browser preview',
      previewCaption: media.caption,
    };
  }

  return undefined;
}

function renderArtifactMedia(artifact: Artifact, variant: 'default' | 'wide') {
  const media = getPrimaryMedia(artifact);
  const preview = toBrowserPreviewRecord(media);
  const fallback = getMediaPlaceholder(artifact, media);
  const previewVariant = media?.display?.variant ?? variant;

  return <BrowserPreview preview={preview} fallback={fallback} variant={previewVariant} className="max-w-none" />;
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
