import { siteContent } from '../data/siteContent';
import { ApproachSection } from '../sections/ApproachSection';
import { CareerSection } from '../sections/CareerSection';
import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { PathwaysSection } from '../sections/PathwaysSection';
import { ProblemsSection } from '../sections/ProblemsSection';
import { SystemLayersSection } from '../sections/SystemLayersSection';
import { WorkSection } from '../sections/WorkSection';

export function HomePage() {
  return (
    <>
      <HeroSection content={siteContent.hero} />
      <SystemLayersSection content={siteContent.systems} />
      <CareerSection content={siteContent.career} />
      <WorkSection content={siteContent.work} />
      <PathwaysSection content={siteContent.pathways} />
      <ProblemsSection content={siteContent.problems} />
      <ApproachSection content={siteContent.approach} />
      <ContactSection
        content={siteContent.contact}
        brand={siteContent.brand}
        socialLink={siteContent.socialLink}
      />
    </>
  );
}
