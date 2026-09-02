import { ButtonLink } from '../components/ButtonLink';
import { RouteMeta } from '../components/RouteMeta';

export function NotFoundPage() {
  return (
    <>
      <RouteMeta title="Page Not Found | Tre Humphries" description="The requested page is not part of this site." />
      <section className="px-4 py-16 md:px-6 lg:px-8 xl:px-12">
        <div className="page-wrap grid gap-4">
          <p className="m-0 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">Not found</p>
          <h1 className="m-0 max-w-[11ch] text-[clamp(2.8rem,6vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-carbon">
            That page is not part of the current public site.
          </h1>
          <ButtonLink href="/" variant="text">
            Back to the homepage
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
