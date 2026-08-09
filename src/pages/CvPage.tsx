import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { RouteMeta } from '../components/RouteMeta';

const cvPdfUrl = '/cv/tre-humphries-cv.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export function CvPage() {
  const [pageWidth, setPageWidth] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sheetRef.current;
    if (!node) {
      return;
    }

    const updateWidth = () => {
      setPageWidth(Math.max(280, Math.floor(node.clientWidth)));
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <RouteMeta
        title="CV | Tre Humphries"
        description="View or download the current CV for Tre Humphries."
      />

      <section className="section section--hero" id="top">
        <div className="site-frame page-hero">
          <div className="page-hero__copy">
            <p className="section-label">
              <span className="section-label__text">CV</span>
            </p>
            <h1 className="display-title display-title--page">Current CV</h1>
            <div className="hero-body">
              <p>A direct in-page view of the current PDF, with open and download options below.</p>
            </div>
            <div className="feature-record__actions">
              <a
                className="text-link text-link--external"
                href={cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open PDF
              </a>
              <a className="text-link" href={cvPdfUrl} download="tre-humphries-cv.pdf">
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-frame">
          <div className="cv-viewer" ref={sheetRef}>
            {loadError ? (
              <div className="cv-viewer__fallback">
                <p>The CV preview could not be rendered in this browser.</p>
                <div className="feature-record__actions">
                  <a
                    className="text-link text-link--external"
                    href={cvPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF
                  </a>
                  <a className="text-link" href={cvPdfUrl} download="tre-humphries-cv.pdf">
                    Download PDF
                  </a>
                </div>
              </div>
            ) : (
              <div
                className="cv-viewer__sheet"
                data-testid="cv-pdf-viewer"
                data-pdf-url={cvPdfUrl}
                aria-label="Tre Humphries CV PDF"
              >
                <Document
                  file={cvPdfUrl}
                  loading={<p className="project-caption">Loading CV...</p>}
                  onLoadError={() => setLoadError(true)}
                  onSourceError={() => setLoadError(true)}
                >
                  {pageWidth > 0 ? (
                    <Page
                      pageNumber={1}
                      width={pageWidth}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  ) : null}
                </Document>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
