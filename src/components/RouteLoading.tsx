export function RouteLoading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <div className="site-frame route-loading__inner">
        <p className="section-label">
          <span className="section-label__text">Loading</span>
        </p>
      </div>
    </div>
  );
}
