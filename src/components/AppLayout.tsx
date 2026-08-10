import { Outlet } from 'react-router-dom';
import { profile } from '../data/profile';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-carbon">
      <a
        className="absolute top-4 left-4 z-60 -translate-y-[220%] bg-bone px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-carbon transition-transform duration-200 focus-visible:translate-y-0"
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
