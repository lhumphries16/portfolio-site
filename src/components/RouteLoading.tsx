export function RouteLoading() {
  return (
    <div className="bg-carbon px-4 py-16 text-bone md:px-6 lg:px-8 xl:px-12" role="status" aria-live="polite">
      <div className="mx-auto grid max-w-[1700px] gap-4 border-t border-bone/12 pt-6">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cobalt">Loading</p>
      </div>
    </div>
  );
}
