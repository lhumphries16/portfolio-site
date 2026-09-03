import type { PortfolioItem } from './types';

const homeEmsProofImage = '/images/portfolio/homeems/homepage.png';
const bsbHomeImage = '/images/portfolio/brazilian-sweet-bites/home-desktop.png';
const bsbOrderImage = '/images/portfolio/bsb-order/home-desktop.png';
const homeEmsContactImage = '/images/portfolio/homeems/contact-desktop.png';
const homeEmsGalleryImage = '/images/portfolio/homeems/gallery-desktop.png';
const homeEmsServiceAreaImage = '/images/portfolio/homeems/service-area-desktop.png';
const mayaraImage = '/images/portfolio/mayara/home-desktop.png';

export const portfolioItems = [
  {
    slug: 'homeems',
    title: 'HomeEMS',
    year: '2026',
    category: 'web',
    treatment: 'flagship',
    relationshipLabel: 'Independent client work',
    context: 'Website strategy, design, build, and handoff for a restoration contractor.',
    summary:
      'A client-owned restoration website built around service clarity, geographic coverage, emergency intake, and maintainable handoff.',
    whatItProves:
      'Tre can turn messy operating requirements into a serious service-business website with a clearer customer path and a client-owned handoff.',
    liveUrl: 'https://www.home-ems.net',
    primaryAsset: {
      src: homeEmsProofImage,
      alt: 'HomeEMS homepage showing restoration messaging, emergency calls to action, and a clear service structure.',
      caption: 'Live HomeEMS homepage capture with real restoration imagery.',
    },
    supportingAssets: [
      {
        src: homeEmsServiceAreaImage,
        alt: 'HomeEMS service-area page with an interactive coverage map and ZIP or locality lookup.',
        caption: 'Structured service-area experience with map and coverage lookup.',
      },
      {
        src: homeEmsGalleryImage,
        alt: 'HomeEMS gallery page with real restoration photography from storm, fire, and water jobs.',
        caption: 'Real project imagery supporting restoration credibility.',
      },
      {
        src: homeEmsContactImage,
        alt: 'HomeEMS contact page with a structured emergency intake form and photo-upload field.',
        caption: 'Emergency intake flow with optional damage-photo upload.',
      },
    ],
    caseStudy: {
      eyebrow: 'Flagship case study',
      intro: [
        'Home Emergency Mitigation Services needed a website that better reflected the professionalism of the company, clarified its services, and made it easier for customers to get help under real time pressure.',
        'The finished system organized service structure, service-area logic, a project gallery, customer intake, and handoff into one client-owned foundation.',
      ],
      facts: [
        { label: 'Client', value: 'Home Emergency Mitigation Services LLC' },
        { label: 'Industry', value: 'Property restoration' },
        { label: 'Platform', value: 'Webflow' },
        { label: 'Site structure', value: 'Focused five-page website' },
        { label: 'Follow-on work', value: 'Search strategy and opportunity mapping' },
      ],
      highlights: [
        'Responsive five-page website',
        'Structured service-area experience',
        'Project gallery CMS',
        'Customer photo-upload contact flow',
        'Analytics and Search Console setup',
      ],
      assets: [
        {
          src: homeEmsProofImage,
          alt: 'HomeEMS homepage showing restoration messaging, emergency calls to action, and a clear service structure.',
          caption: 'A contractor homepage built to establish trust quickly and route urgent customers cleanly.',
        },
        {
          src: homeEmsServiceAreaImage,
          alt: 'HomeEMS service-area page with an interactive coverage map and ZIP or locality lookup.',
          caption: 'Service coverage treated as structured information rather than a buried town list.',
        },
        {
          src: homeEmsGalleryImage,
          alt: 'HomeEMS gallery page with real restoration photography from storm, fire, and water jobs.',
          caption: 'Real project imagery gives the site operational credibility without inflated claims.',
        },
        {
          src: homeEmsContactImage,
          alt: 'HomeEMS contact page with a structured emergency intake form and photo-upload field.',
          caption: 'The intake form reduces friction between "I have a problem" and "the company has enough detail to respond."',
        },
      ],
      sections: [
        {
          title: 'The challenge',
          paragraphs: [
            'A restoration website has to work for urgent customers and for the business behind the scenes. Someone dealing with fire or water damage needs immediate clarity about services, territory, and contact options.',
            'At the same time, the company still needs a structure it can maintain for search, future expansion, and day-to-day ownership after handoff.',
          ],
        },
        {
          title: 'The approach',
          paragraphs: [
            'The project started with the business itself: what HomeEMS actually offers, how customers arrive, where the company works, and what information the team needs before responding.',
            'That produced a tighter five-page architecture instead of a sprawling set of thin pages, and the site design, CMS structure, intake flow, and launch setup followed from that operating logic.',
          ],
        },
        {
          title: 'What was built',
          paragraphs: [
            'The scope included the public website, structured service-area coverage, a project gallery, an intake form with photo uploads, foundational metadata, analytics, and Search Console setup.',
          ],
          bullets: [
            'Company, services, service area, gallery, and contact pages',
            'Structured service-area data behind the map experience',
            'Client-owned Webflow configuration and documentation',
            'A clean launch and handoff without retainer dependence',
          ],
        },
        {
          title: 'Service-area system',
          paragraphs: [
            'One of the strongest moments in the project is the service-area page. Instead of hiding towns in a paragraph, coverage is presented as maintainable information that helps both visitors and the team after launch.',
          ],
        },
        {
          title: 'Customer intake built for real restoration work',
          paragraphs: [
            'The contact flow supports how restoration work actually starts. Customers can describe the issue, share location and urgency, and upload images so the team can respond with better context from the first touchpoint.',
          ],
        },
        {
          title: 'Follow-on search strategy',
          paragraphs: [
            'After launch, HomeEMS brought Tre back for a separate search-strategy engagement. That research reviewed 130 relevant search terms, grouped overlapping intent, compared the results to the existing structure, and identified where new pages were genuinely justified.',
          ],
          bullets: [
            'Water Damage Restoration',
            'Fire Damage Restoration',
            'Mold Remediation',
            'Lynchburg Restoration Services',
            'Danville Restoration Services',
          ],
        },
      ],
    },
  },
  {
    slug: 'brazilian-sweet-bites-order-system',
    title: 'Brazilian Sweet Bites Order System',
    shortTitle: 'BSB Order System',
    year: '2026',
    category: 'web',
    treatment: 'case-study',
    relationshipLabel: 'Independent client work',
    context: 'Purpose-built request flow for event and bulk dessert orders.',
    summary:
      'A lightweight public order-request surface that separates event and bulk ordering from in-person market sales and makes fulfillment rules visible before someone submits.',
    whatItProves:
      'Tre can structure a real customer workflow into a focused request system rather than treating every digital problem like a brochure site.',
    liveUrl: 'https://order.braziliansweetbites.com',
    primaryAsset: {
      src: bsbOrderImage,
      alt: 'Brazilian Sweet Bites order-request homepage with menu preview, order rules, and a focused event-order call to action.',
      caption: 'Public ordering surface for event and bulk requests.',
    },
    caseStudy: {
      eyebrow: 'Secondary case study',
      intro: [
        'The useful story here is not another marketing site. It is a focused workflow surface for event and bulk dessert orders.',
        'The public interface separates request-based ordering from in-person market sales, shows the current bulk menu, and makes delivery and payment rules visible before the request starts.',
      ],
      facts: [
        { label: 'Role', value: 'Workflow and public request surface' },
        { label: 'Observed live behavior', value: 'Event and bulk orders only' },
        { label: 'Delivery note', value: 'Town-based local delivery with manual review for out-of-area towns' },
        { label: 'Payment note', value: 'Payment links sent after availability is confirmed' },
      ],
      highlights: [
        'Current event-order menu preview',
        'Clear separation between bulk requests and pop-up sales',
        'Visible fulfillment rules before submission',
        'Focused public interface without extra noise',
      ],
      assets: [
        {
          src: bsbOrderImage,
          alt: 'Brazilian Sweet Bites order-request homepage with menu preview, order rules, and a focused event-order call to action.',
          caption: 'The live public interface centers on the request itself rather than generic brand copy.',
        },
      ],
      sections: [
        {
          title: 'What the public interface does well',
          paragraphs: [
            'The page immediately clarifies that the system is for event and bulk orders. It then shows the current menu, minimum quantities, and request rules without making the customer guess what the form is for.',
          ],
        },
        {
          title: 'Why it works',
          paragraphs: [
            'The page solves the ordering problem directly by setting expectations, showing the current menu, and giving customers a cleaner request path.',
          ],
        },
      ],
    },
  },
  {
    slug: 'mayara-miranda',
    title: 'Mayara Miranda',
    year: '2026',
    category: 'web',
    treatment: 'project-card',
    relationshipLabel: 'Independent client work',
    context: 'Website for a design and prepress practice.',
    summary:
      'A design-forward website for a service practice, with a sharper visual language and straightforward owner usability.',
    whatItProves:
      'Tre can deliver a more visual brand presentation while staying commercially composed and technically clean.',
    liveUrl: 'https://mayara-site.trehumphries16.workers.dev',
    primaryAsset: {
      src: mayaraImage,
      alt: 'Mayara Miranda homepage with strong typography and a design-focused layout.',
      caption: 'A design-forward website for a different kind of service practice.',
    },
  },
  {
    slug: 'brazilian-sweet-bites',
    title: 'Brazilian Sweet Bites',
    shortTitle: 'Brazilian Sweet Bites',
    year: '2026',
    category: 'web',
    treatment: 'project-card',
    relationshipLabel: 'Independent client work',
    context: 'Local brand website with strong product photography.',
    summary:
      'A local brand website with strong product photography, clear categories, and grounded sales flow.',
    whatItProves:
      'Tre can present a local brand with personality and product imagery without losing sales clarity.',
    liveUrl: 'https://braziliansweetbites.com',
    primaryAsset: {
      src: bsbHomeImage,
      alt: 'Brazilian Sweet Bites marketing site with product photography and bold category blocks.',
      caption: 'Local brand website with strong real product imagery.',
    },
  },
  {
    slug: 'mainstream-hvac-controls',
    title: 'Mainstream Fluid & Air',
    shortTitle: 'Mainstream HVAC controls',
    year: '2022-2024',
    category: 'controls',
    treatment: 'project-card',
    relationshipLabel: 'Professional history',
    context: 'Controls Engineer work on configurable commercial HVAC fan-array systems.',
    summary:
      'PLC and HMI work, drives, integrations, startup, commissioning, and field troubleshooting for configurable HVAC equipment.',
    whatItProves:
      'Tre has serious equipment-side controls experience where sequence, commissioning, and real installation constraints all matter.',
    primaryAsset: {
      src: '/images/mainstream_rooftop_ahu_public.jpg',
      alt: 'Commercial HVAC equipment used in controls and commissioning work.',
      caption: 'Commercial HVAC context where controls and commissioning had to hold up.',
    },
    supportingAssets: [
      {
        src: '/images/yaskawa_drive_photo_public.jpg',
        alt: 'Yaskawa drive used in controls work.',
        caption: 'Supporting equipment from controls work.',
      },
      {
        src: '/images/baldor_motor_photo_public.jpg',
        alt: 'Baldor motor used in equipment context.',
        caption: 'Additional equipment from the system context.',
      },
    ],
  },
  {
    slug: 'gaf-roads-standard-industries',
    title: 'GAF Roads / Standard Industries',
    shortTitle: 'GAF Roads',
    year: '2025-2026',
    category: 'controls',
    treatment: 'project-card',
    relationshipLabel: 'Professional history',
    context: 'Senior engineering and technology work on an early electric sprayer platform.',
    summary:
      'CODESYS controls, telemetry paths, field issues, operator workflows, and machine-system integration on an early electric sprayer platform.',
    whatItProves:
      'Tre can work across machine behavior, controls, telemetry, and field reality without pretending those are separate disciplines.',
    primaryAsset: {
      src: '/images/feature_road-application-1.jpg',
      alt: 'Electric road-application sprayer platform used in controls and telemetry work.',
      caption: 'Controls, telemetry, and field integration on a machine platform.',
    },
  },
  {
    slug: 'innerspec',
    title: 'Innerspec',
    shortTitle: 'Innerspec inspection systems',
    year: '2021-2022',
    category: 'controls',
    treatment: 'project-card',
    relationshipLabel: 'Professional history',
    context: 'Controls and field integration around robotic ultrasonic inspection systems.',
    summary:
      'Controls, robotics, electronics, and field troubleshooting around industrial ultrasonic inspection systems.',
    whatItProves:
      'Tre has real robotics and industrial inspection experience grounded in actual equipment behavior.',
    primaryAsset: {
      src: '/images/rollmate-inspection-system_innerspec.jpg',
      alt: 'Robotic ultrasonic inspection system used in industrial controls work.',
      caption: 'Inspection-system context from Innerspec.',
    },
  },
  {
    slug: 'mainstream-internal-tooling',
    title: 'Mainstream internal tooling',
    year: '2024-2025',
    category: 'controls',
    treatment: 'project-card',
    relationshipLabel: 'Professional history',
    context: 'Internal quoting, selection, and workflow software tied to engineering logic.',
    summary:
      'Internal quoting, selection, and workflow software tied to product knowledge, pricing rules, and engineering handoff.',
    whatItProves:
      'Tre understands how technical workflow software can support real engineering work without becoming vague digital transformation language.',
    primaryAsset: {
      src: '/images/mainstream_fan_submittal_example_doc_public.jpg',
      alt: 'Submittal document from an internal engineering selection workflow.',
      caption: 'Workflow and internal tooling tied to engineering handoff.',
    },
  },
] as const satisfies readonly PortfolioItem[];

export const portfolioBySlug = Object.fromEntries(
  portfolioItems.map((item) => [item.slug, item])
) as Record<string, PortfolioItem>;

export const flagshipProject = portfolioBySlug.homeems;
export const secondaryCaseStudy = portfolioBySlug['brazilian-sweet-bites-order-system'];
export const webProjects = portfolioItems.filter((item) => item.category === 'web');
export const controlsProjects = portfolioItems.filter((item) => item.category === 'controls');
export const supportingWebProjects = webProjects.filter((item) => item.treatment === 'project-card');

export const homePageProjects = {
  flagship: portfolioBySlug.homeems,
  workflow: portfolioBySlug['brazilian-sweet-bites-order-system'],
  visual: portfolioBySlug['brazilian-sweet-bites'],
  controls: portfolioBySlug['mainstream-hvac-controls'],
} as const;
