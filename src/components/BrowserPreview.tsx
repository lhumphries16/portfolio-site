import { useEffect, useMemo, useRef, useState } from 'react';
import type { BrowserPreviewRecord, MediaPlaceholder } from '../data/types';

type BrowserPreviewProps = {
  preview?: BrowserPreviewRecord;
  fallback?: MediaPlaceholder;
  loading?: 'eager' | 'lazy';
};

const IFRAME_DESKTOP_WIDTH = 1440;
const IFRAME_DESKTOP_HEIGHT = 3200;
const IFRAME_PREVIEW_HEIGHT = {
  min: 220,
  max: 560,
};

export function BrowserPreview({ preview, fallback, loading = 'lazy' }: BrowserPreviewProps) {
  const [hasFailed, setHasFailed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHasFailed(false);
    setIsInteractive(false);
  }, [preview?.previewMode, preview?.previewSrc]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) {
      return;
    }

    const updateWidth = () => {
      setViewportWidth(node.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const iframeScale = useMemo(() => {
    if (preview?.previewMode !== 'iframe' || viewportWidth <= 0) {
      return 1;
    }

    return Math.min(1, viewportWidth / IFRAME_DESKTOP_WIDTH);
  }, [preview?.previewMode, viewportWidth]);

  const iframePreviewHeight = useMemo(() => {
    if (preview?.previewMode !== 'iframe') {
      return undefined;
    }

    if (viewportWidth <= 0) {
      return IFRAME_PREVIEW_HEIGHT.min;
    }

    const scaledHeight = Math.round(IFRAME_DESKTOP_HEIGHT * iframeScale);
    return Math.min(
      IFRAME_PREVIEW_HEIGHT.max,
      Math.max(IFRAME_PREVIEW_HEIGHT.min, Math.round(Math.min(viewportWidth * 0.7, scaledHeight)))
    );
  }, [iframeScale, preview?.previewMode, viewportWidth]);

  const isCompactIframe = preview?.previewMode === 'iframe' && viewportWidth > 0 && viewportWidth < 560;

  if (!preview || hasFailed) {
    return (
      <figure className="browser-preview">
        <div className="browser-preview__frame">
          <div className="browser-preview__chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-preview__viewport">
            <div className="browser-preview__placeholder" aria-label={fallback?.title ?? 'Preview unavailable'}>
              <div className="browser-preview__placeholder-field" aria-hidden="true" />
              <div className="browser-preview__placeholder-copy">
                <p className="meta-label">Preview</p>
                <h3>{fallback?.title ?? 'Preview unavailable'}</h3>
                <p>{fallback?.note ?? 'Preview unavailable in this browser.'}</p>
                {fallback?.lines?.length ? (
                  <div className="browser-preview__placeholder-lines" aria-hidden="true">
                    {fallback.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {fallback?.caption || preview?.previewCaption ? (
          <figcaption className="project-caption">{fallback?.caption ?? preview?.previewCaption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="browser-preview">
      <div className="browser-preview__frame">
        <div className="browser-preview__chrome" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div
          ref={viewportRef}
          className={`browser-preview__viewport${preview.previewMode === 'iframe' ? ' browser-preview__viewport--iframe' : ''}`}
          style={iframePreviewHeight ? { height: `${iframePreviewHeight}px` } : undefined}
        >
          {preview.previewMode === 'image' ? (
            <img
              src={preview.previewSrc}
              alt={preview.previewAlt ?? ''}
              loading={loading}
              className="browser-preview__image"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 720px"
              onError={() => setHasFailed(true)}
            />
          ) : null}

          {preview.previewMode === 'video' ? (
            <video
              className="browser-preview__video"
              controls
              playsInline
              preload="metadata"
              poster={preview.previewPosterSrc}
              aria-label={preview.previewTitle}
              autoPlay={preview.previewAutoplay}
              loop={preview.previewLoop}
              muted={preview.previewMuted ?? true}
              onError={() => setHasFailed(true)}
            >
              <source src={preview.previewSrc} />
              <p>Preview video unavailable. Use the live-site link below.</p>
            </video>
          ) : null}

          {preview.previewMode === 'iframe' ? (
            <>
              <div
                className={`browser-preview__iframe-stage${isInteractive ? ' browser-preview__iframe-stage--interactive' : ''}`}
                style={{
                  width: `${IFRAME_DESKTOP_WIDTH}px`,
                  height: `${IFRAME_DESKTOP_HEIGHT}px`,
                  transform: `scale(${iframeScale})`,
                }}
              >
                <iframe
                  className="browser-preview__iframe"
                  src={preview.previewSrc}
                  title={preview.previewTitle}
                  loading={loading}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              {!isCompactIframe ? (
                <button
                  type="button"
                  className="browser-preview__interact-toggle"
                  onClick={() => setIsInteractive((current) => !current)}
                >
                  {isInteractive ? 'Done' : 'Interact'}
                </button>
              ) : (
                <p className="browser-preview__hint">Preview is non-interactive on smaller screens.</p>
              )}
            </>
          ) : null}
        </div>
      </div>
      {preview.previewCaption || fallback?.caption ? (
        <figcaption className="project-caption">{preview.previewCaption ?? fallback?.caption}</figcaption>
      ) : null}
    </figure>
  );
}
