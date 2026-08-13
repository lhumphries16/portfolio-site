import { useEffect, useMemo, useRef, useState } from 'react';
import type { BrowserPreviewRecord, MediaPlaceholder } from '../data/types';

type BrowserPreviewProps = {
  preview?: BrowserPreviewRecord;
  fallback?: MediaPlaceholder;
  loading?: 'eager' | 'lazy';
  variant?: 'default' | 'wide' | 'compact';
  className?: string;
};

const IFRAME_DESKTOP_WIDTH = 1440;
const IFRAME_DESKTOP_HEIGHT = 3200;

const variantConfig = {
  default: {
    shell: 'max-w-[860px]',
    media: 'aspect-[16/10]',
    fallbackHeading: 'text-[clamp(1.8rem,4vw,2.6rem)]',
    maxIframeHeight: 520,
  },
  wide: {
    shell: 'max-w-[980px]',
    media: 'aspect-[16/9]',
    fallbackHeading: 'text-[clamp(2rem,4.6vw,2.9rem)]',
    maxIframeHeight: 560,
  },
  compact: {
    shell: 'max-w-[720px]',
    media: 'aspect-[4/3]',
    fallbackHeading: 'text-[clamp(1.7rem,4vw,2.3rem)]',
    maxIframeHeight: 460,
  },
} as const;

export function BrowserPreview({
  preview,
  fallback,
  loading = 'lazy',
  variant = 'default',
  className = '',
}: BrowserPreviewProps) {
  const [hasFailed, setHasFailed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const config = variantConfig[variant];

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
      return 240;
    }

    const idealHeight = Math.round(viewportWidth / 1.6);
    const scaledHeight = Math.round(IFRAME_DESKTOP_HEIGHT * iframeScale);
    return Math.min(config.maxIframeHeight, Math.max(240, Math.min(idealHeight, scaledHeight)));
  }, [config.maxIframeHeight, iframeScale, preview?.previewMode, viewportWidth]);

  const isCompactIframe = preview?.previewMode === 'iframe' && viewportWidth > 0 && viewportWidth < 560;

  const figureClassName = `grid w-full gap-3 ${config.shell} ${className}`.trim();
  const viewportClassName = `relative overflow-hidden ${config.media}`;

  if (!preview || hasFailed) {
    return (
      <figure className={figureClassName}>
        <div className="overflow-hidden border border-bone/12 bg-bone text-carbon">
          <div className="flex min-h-8 items-center gap-1.5 border-b border-carbon/10 px-4" aria-hidden="true">
            <span className="size-1.5 rounded-full border border-carbon/24 bg-carbon/10" />
            <span className="size-1.5 rounded-full border border-carbon/24 bg-carbon/10" />
            <span className="size-1.5 rounded-full border border-carbon/24 bg-carbon/10" />
          </div>
          <div className={`${viewportClassName} bg-bone text-carbon`}>
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(180deg, rgb(21 94 239 / 0.06), transparent 40%), repeating-linear-gradient(90deg, transparent 0, transparent calc(20% - 1px), rgb(16 19 23 / 0.04) calc(20% - 1px), rgb(16 19 23 / 0.04) 20%)',
              }}
            />
            <div className="absolute top-0 left-0 h-1 w-full bg-cobalt" aria-hidden="true" />
            <div className="relative z-10 grid h-full content-end gap-4 p-5 md:p-6" aria-label={fallback?.title ?? 'Preview unavailable'}>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-cobalt">Preview</p>
              <h3 className={`m-0 max-w-[10ch] font-semibold tracking-[-0.03em] ${config.fallbackHeading}`}>
                {fallback?.title ?? 'Preview unavailable'}
              </h3>
              <p className="m-0 max-w-[28rem] text-sm leading-relaxed text-carbon/70">
                {fallback?.note ?? 'Preview unavailable in this browser.'}
              </p>
              {fallback?.lines?.length ? (
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.63rem] uppercase tracking-[0.18em] text-carbon/54" aria-hidden="true">
                  {fallback.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {fallback?.caption || preview?.previewCaption ? (
          <figcaption className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel">
            {fallback?.caption ?? preview?.previewCaption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={figureClassName}>
      <div className="overflow-hidden border border-bone/12 bg-bone text-carbon">
        <div className="flex min-h-8 items-center gap-1.5 border-b border-carbon/10 px-4" aria-hidden="true">
          <span className="size-1.5 rounded-full border border-carbon/24 bg-carbon/10" />
          <span className="size-1.5 rounded-full border border-carbon/24 bg-carbon/10" />
          <span className="size-1.5 rounded-full border border-carbon/24 bg-carbon/10" />
        </div>
        <div
          ref={viewportRef}
          className={`${viewportClassName} ${preview.previewMode === 'iframe' ? 'isolate bg-white' : 'bg-bone'}`}
          style={iframePreviewHeight ? { height: `${iframePreviewHeight}px` } : undefined}
        >
          {preview.previewMode === 'image' ? (
            <img
              src={preview.previewSrc}
              alt={preview.previewAlt ?? ''}
              loading={loading}
              className="h-full w-full object-cover"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 820px"
              onError={() => setHasFailed(true)}
            />
          ) : null}

          {preview.previewMode === 'video' ? (
            <video
              className="h-full w-full object-cover"
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
                className={`absolute top-0 left-0 ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                style={{
                  width: `${IFRAME_DESKTOP_WIDTH}px`,
                  height: `${IFRAME_DESKTOP_HEIGHT}px`,
                  transform: `scale(${iframeScale})`,
                  transformOrigin: 'top left',
                }}
              >
                <iframe
                  className="h-full w-full border-0 bg-white"
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
                  className="absolute right-3 bottom-3 z-20 min-h-9 border border-carbon/14 bg-bone/96 px-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-carbon"
                  onClick={() => setIsInteractive((current) => !current)}
                >
                  {isInteractive ? 'Done' : 'Interact'}
                </button>
              ) : (
                <p className="absolute right-3 bottom-3 left-3 z-20 bg-bone/96 px-3 py-2 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-carbon/68">
                  Preview is non-interactive on smaller screens.
                </p>
              )}
            </>
          ) : null}
        </div>
      </div>
      {preview.previewCaption || fallback?.caption ? (
        <figcaption className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel">
          {preview.previewCaption ?? fallback?.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
