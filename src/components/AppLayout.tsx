import { Outlet } from 'react-router-dom';
import { profile } from '../data/profile';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header
        brand={{
          name: profile.brand.name,
          role: profile.brand.role,
        }}
        navItems={profile.navigation}
      />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer
        brand={{
          name: profile.brand.fullName,
          role: profile.brand.role,
          location: profile.brand.location,
          email: profile.brand.email,
        }}
        socialLinks={profile.socialLinks}
        note={profile.footerNote}
      />
    </div>
  );
}
