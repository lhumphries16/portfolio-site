import { Link } from 'react-router-dom';
import { SectionIntro } from '../components/SectionIntro';

export function NotFoundPage() {
  return (
    <section className="section section--paper">
      <div className="site-frame split-section">
        <SectionIntro
          label="Not found"
          title="That page is not part of the portfolio."
          paragraphs={[
            'Use the main navigation or return to the homepage to continue.',
          ]}
        />
        <div className="page-hero__panel">
          <Link className="button button--primary page-panel__action" to="/">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
