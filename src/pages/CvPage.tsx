import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';

const cvPdfUrl = '/cv/tre-humphries-cv.pdf';
const pageWrap = 'mx-auto max-w-[1440px]';
const display = 'font-display leading-[0.92] tracking-[-0.03em]';
const mono = 'font-mono text-[0.68rem] uppercase tracking-[0.18em]';

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

      <section id="top" className="bg-carbon px-4 py-14 text-bone md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={`${pageWrap} grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end`}>
          <div className="grid gap-4">
            <SystemRail label="CV" index="01" labelClassName="text-steel" />
            <h1 className={`${display} max-w-[8ch] text-[clamp(3rem,7vw,5.2rem)] text-bone`}>Current CV</h1>
          </div>
          <div className="grid gap-4 lg:max-w-[40rem]">
            <p className="m-0 text-base leading-relaxed text-steel">
              A direct in-page view of the current PDF, with open and download options below.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                className={`${mono} text-bone transition-colors duration-200 hover:text-cobalt`}
                href={cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open PDF
              </a>
              <a className={`${mono} text-steel transition-colors duration-200 hover:text-bone`} href={cvPdfUrl} download="tre-humphries-cv.pdf">
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d8dde3] px-4 py-12 text-carbon md:px-6 lg:px-8 xl:px-12 xl:py-16">
        <div className={pageWrap}>
          <div className="mx-auto max-w-[980px]" ref={sheetRef}>
            {loadError ? (
              <div className="grid gap-4 border border-carbon/12 bg-bone px-5 py-6 md:px-7 md:py-8">
                <p className="m-0 text-base leading-relaxed text-carbon/74">
                  The CV preview could not be rendered in this browser.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    className={`${mono} text-carbon transition-colors duration-200 hover:text-cobalt`}
                    href={cvPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open PDF
                  </a>
                  <a className={`${mono} text-carbon/60 transition-colors duration-200 hover:text-carbon`} href={cvPdfUrl} download="tre-humphries-cv.pdf">
                    Download PDF
                  </a>
                </div>
              </div>
            ) : (
              <div
                className="grid justify-items-center border border-carbon/12 bg-bone/92 p-[clamp(0.9rem,2.2vw,2rem)]"
                data-testid="cv-pdf-viewer"
                data-pdf-url={cvPdfUrl}
                aria-label="Tre Humphries CV PDF"
              >
                <Document
                  file={cvPdfUrl}
                  loading={<p className={`${mono} text-carbon/58`}>Loading CV...</p>}
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
