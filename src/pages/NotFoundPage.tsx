import { Link } from 'react-router-dom';
import { RouteMeta } from '../components/RouteMeta';
import { SystemRail } from '../components/SystemRail';

const display = 'font-display uppercase leading-[0.9] tracking-[0.04em]';
const mono = 'font-mono text-[0.66rem] uppercase tracking-[0.22em]';

export function NotFoundPage() {
  return (
    <>
      <RouteMeta
        title="Page Not Found | Tre Humphries"
        description="The requested page is not part of this portfolio."
      />
      <section className="bg-bone px-4 py-16 text-carbon md:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto grid max-w-[1700px] gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end">
          <div className="grid gap-5">
            <SystemRail label="Not found" labelClassName="text-carbon/68" />
            <h1 className={`${display} max-w-[10ch] text-[clamp(2.8rem,7vw,5.4rem)] text-carbon`}>
              That page is not part of the portfolio.
            </h1>
          </div>
          <div className="grid gap-4 lg:max-w-[34rem]">
            <p className="m-0 text-base leading-relaxed text-carbon/74">
              Use the main navigation or return to the homepage to continue.
            </p>
            <Link className={`${mono} text-carbon transition-colors duration-200 hover:text-cobalt`} to="/">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
