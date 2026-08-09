import type { BrowserPreviewMedia } from '../data/types';

type BrowserPreviewProps = {
  media: BrowserPreviewMedia;
  loading?: 'eager' | 'lazy';
};

export function BrowserPreview({ media, loading = 'lazy' }: BrowserPreviewProps) {
  const caption =
    media.caption ?? (media.type === 'image' ? media.image.caption : undefined);

  return (
    <figure className="browser-preview">
      <div className="browser-preview__frame">
        <div className="browser-preview__chrome" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-preview__viewport">
          {media.type === 'image' ? (
            <img
              src={media.image.src}
              alt={media.image.alt}
              loading={loading}
              className="browser-preview__image"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 720px"
            />
          ) : null}

          {media.type === 'video' ? (
            <video
              className="browser-preview__video"
              controls
              playsInline
              preload="metadata"
              poster={media.poster}
              aria-label={media.title}
            >
              <source src={media.src} />
            </video>
          ) : null}

          {media.type === 'iframe' ? (
            <iframe
              className="browser-preview__iframe"
              src={media.src}
              title={media.title}
              loading={loading}
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : null}

          {media.type === 'placeholder' ? (
            <div className="browser-preview__placeholder" aria-label={media.title}>
              <div className="browser-preview__placeholder-field" aria-hidden="true" />
              <div className="browser-preview__placeholder-copy">
                <p className="meta-label">Preview</p>
                <h3>{media.title}</h3>
                <p>{media.note}</p>
                <div className="browser-preview__placeholder-lines" aria-hidden="true">
                  {media.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {caption ? <figcaption className="project-caption">{caption}</figcaption> : null}
    </figure>
  );
}
