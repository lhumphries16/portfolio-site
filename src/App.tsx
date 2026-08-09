import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { siteContent } from './data/siteContent';
import { ApproachSection } from './sections/ApproachSection';
import { CareerSection } from './sections/CareerSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { ProblemsSection } from './sections/ProblemsSection';
import { SystemLayersSection } from './sections/SystemLayersSection';
import { WorkSection } from './sections/WorkSection';

function App() {
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
        <HeroSection content={siteContent.hero} />
        <SystemLayersSection content={siteContent.systems} />
        <CareerSection content={siteContent.career} />
        <WorkSection content={siteContent.work} />
        <ProblemsSection content={siteContent.problems} />
        <ApproachSection content={siteContent.approach} />
        <ContactSection
          content={siteContent.contact}
          brand={siteContent.brand}
          socialLink={siteContent.socialLink}
        />
      </main>
      <Footer
        brand={siteContent.brand}
        socialLink={siteContent.socialLink}
      />
    </div>
  );
}

export default App;
