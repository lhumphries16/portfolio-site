import { Outlet } from 'react-router-dom';
import { profile } from '../data/profile';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <div className="min-h-[100dvh] bg-bone">
      <a
        className="absolute top-4 left-4 z-[60] -translate-y-[220%] rounded-full bg-white px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-carbon transition-transform duration-200 focus-visible:translate-y-0"
        href="#main-content"
      >
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
          name: profile.brand.name,
          role: profile.brand.role,
          location: profile.brand.location,
          email: profile.brand.email,
        }}
        note={profile.footerNote}
        socialLinks={profile.socialLinks}
      />
    </div>
  );
}
