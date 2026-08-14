import { artifactDomainLabels, formatArtifactDate } from '../../content/artifacts';
import type { Artifact, ArtifactMedia } from '../../content/artifacts/types';
import type { BrowserPreviewRecord, MediaPlaceholder } from '../../data/types';
import { BrowserPreview } from '../BrowserPreview';

type ArtifactPreviewProps = {
  artifact: Artifact;
  variant?: 'default' | 'wide' | 'compact';
  loading?: 'eager' | 'lazy';
  className?: string;
};

function getPrimaryArtifactMedia(artifact: Artifact) {
  return artifact.media?.find((media) => media.featured) ?? artifact.media?.[0];
}

function getPreviewPlaceholder(artifact: Artifact, media?: ArtifactMedia): MediaPlaceholder {
  if (media?.type === 'pdf') {
    return {
      title: media.title ?? artifact.title,
      note: 'PDF media is registered for this record, but an in-place preview has not been added yet.',
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
      previewObjectPosition: media.display?.objectPosition,
      previewObjectFit: media.display?.objectFit,
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

export function ArtifactPreview({
  artifact,
  variant = 'default',
  loading = 'lazy',
  className,
}: ArtifactPreviewProps) {
  const media = getPrimaryArtifactMedia(artifact);
  const preview = toBrowserPreviewRecord(media);
  const fallback = getPreviewPlaceholder(artifact, media);
  const previewVariant = media?.display?.variant ?? variant;

  return (
    <BrowserPreview
      preview={preview}
      fallback={fallback}
      loading={loading}
      variant={previewVariant}
      className={className}
    />
  );
}
