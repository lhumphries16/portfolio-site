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
    shell: 'max-w-[900px]',
    media: 'aspect-[16/10]',
    fallbackHeading: 'text-[clamp(1.8rem,4vw,2.6rem)]',
    maxIframeHeight: 520,
  },
  wide: {
    shell: 'max-w-[1040px]',
    media: 'aspect-[16/10]',
    fallbackHeading: 'text-[clamp(2rem,4.6vw,2.9rem)]',
    maxIframeHeight: 620,
  },
  compact: {
    shell: 'max-w-[760px]',
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

    const idealHeight = Math.round(viewportWidth / 1.58);
    const scaledHeight = Math.round(IFRAME_DESKTOP_HEIGHT * iframeScale);
    return Math.min(config.maxIframeHeight, Math.max(240, Math.min(idealHeight, scaledHeight)));
  }, [config.maxIframeHeight, iframeScale, preview?.previewMode, viewportWidth]);

  const isCompactIframe = preview?.previewMode === 'iframe' && viewportWidth > 0 && viewportWidth < 560;
  const showFrame = !preview || preview.previewMode === 'iframe';
  const figureClassName = `grid w-full gap-3 ${config.shell} ${className}`.trim();
  const viewportClassName = `relative overflow-hidden ${config.media}`;
  const frameClassName = showFrame
    ? 'overflow-hidden border border-carbon/10 bg-[#fbf8f2] text-carbon shadow-[0_18px_60px_rgba(16,19,23,0.05)]'
    : 'overflow-hidden bg-carbon/4 text-carbon';

  if (!preview || hasFailed) {
    return (
      <figure className={figureClassName}>
        <div className={frameClassName}>
          <div className={`${viewportClassName} bg-bone text-carbon`}>
            <div className="absolute top-0 left-0 h-px w-full bg-carbon/12" aria-hidden="true" />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(180deg, rgb(43 85 199 / 0.04), transparent 42%), repeating-linear-gradient(90deg, transparent 0, transparent calc(25% - 1px), rgb(19 20 23 / 0.035) calc(25% - 1px), rgb(19 20 23 / 0.035) 25%)',
              }}
            />
            <div
              className="relative z-10 grid h-full content-end gap-3 p-5 md:p-6"
              aria-label={fallback?.title ?? 'Preview unavailable'}
            >
              <h3 className={`m-0 max-w-[10ch] font-semibold tracking-[-0.03em] text-carbon ${config.fallbackHeading}`}>
                {fallback?.title ?? 'Preview unavailable'}
              </h3>
              <p className="m-0 max-w-[28rem] text-sm leading-relaxed text-carbon/70">
                {fallback?.note ?? 'Preview unavailable in this browser.'}
              </p>
              {fallback?.lines?.length ? (
                <div
                  className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.63rem] uppercase tracking-[0.16em] text-carbon/46"
                  aria-hidden="true"
                >
                  {fallback.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {fallback?.caption || preview?.previewCaption ? (
          <figcaption className="text-[0.8rem] leading-relaxed text-carbon/50">
            {fallback?.caption ?? preview?.previewCaption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={figureClassName}>
      <div className={frameClassName}>
        <div
          ref={viewportRef}
          className={`${viewportClassName} ${preview.previewMode === 'iframe' ? 'isolate bg-white' : 'bg-carbon/4'}`}
          style={iframePreviewHeight ? { height: `${iframePreviewHeight}px` } : undefined}
        >
          {preview.previewMode === 'image' ? (
            <img
              src={preview.previewSrc}
              alt={preview.previewAlt ?? ''}
              loading={loading}
              className="h-full w-full"
              style={{
                objectFit: preview.previewObjectFit ?? 'cover',
                ...(preview.previewObjectPosition ? { objectPosition: preview.previewObjectPosition } : {}),
              }}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 860px"
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
                  className="absolute right-3 bottom-3 z-20 min-h-9 rounded-full bg-bone/96 px-3 text-[0.76rem] font-medium tracking-[-0.01em] text-carbon shadow-[0_10px_30px_rgba(16,19,23,0.08)]"
                  onClick={() => setIsInteractive((current) => !current)}
                >
                  {isInteractive ? 'Done' : 'Interact'}
                </button>
              ) : (
                <p className="absolute right-3 bottom-3 left-3 z-20 bg-bone/96 px-3 py-2 text-center text-[0.76rem] font-medium tracking-[-0.01em] text-carbon/68">
                  Preview is non-interactive on smaller screens.
                </p>
              )}
            </>
          ) : null}
        </div>
      </div>
      {preview.previewCaption || fallback?.caption ? (
        <figcaption className="text-[0.8rem] leading-relaxed text-carbon/50">
          {preview.previewCaption ?? fallback?.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
