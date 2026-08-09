import { Outlet } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header
        brand={siteContent.brand}
        navItems={siteContent.navigation}
        socialLink={siteContent.socialLink}
      />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer brand={siteContent.brand} socialLink={siteContent.socialLink} />
    </div>
  );
}
