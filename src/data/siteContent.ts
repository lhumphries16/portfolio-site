import allSeasonsProofImage from '../../allseasons-proof.png';
import homeEmsProofImage from '../../homeems-proof.png';
import bsbHomeImage from '../../output/playwright/bsb-home-desktop-full.png';
import bsbOrderImage from '../../output/playwright/bsb-order-desktop-full.png';
import homeEmsContactImage from '../../output/playwright/homeems-contact-desktop-full.png';
import homeEmsGalleryImage from '../../output/playwright/homeems-gallery-desktop-full.png';
import homeEmsServiceAreaImage from '../../output/playwright/homeems-service-area-desktop-full.png';
import mayaraImage from '../../output/playwright/mayara-home-desktop-full.png';
import { getScheduleLink } from './profile';

export type PortfolioCategory = 'web' | 'controls';
export type PortfolioTreatment = 'flagship' | 'case-study' | 'project-card';

export type PortfolioAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type CaseStudyData = {
  eyebrow: string;
  intro: readonly string[];
  facts: readonly {
    label: string;
    value: string;
  }[];
  highlights: readonly string[];
  assets: readonly PortfolioAsset[];
  sections: readonly CaseStudySection[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  year: string;
  category: PortfolioCategory;
  treatment: PortfolioTreatment;
  relationshipLabel: string;
  context: string;
  summary: string;
  whatItProves: string;
  caution?: string;
  liveUrl?: string;
  primaryAsset: PortfolioAsset;
  supportingAssets?: readonly PortfolioAsset[];
  caseStudy?: CaseStudyData;
};

export const siteContent = {
  home: {
    title: 'Tre Humphries turns messy requirements into clear working systems.',
    intro: [
      'Most often, that means websites and digital systems for established service businesses and local brands.',
      'When the problem sits closer to the machine, the sequence, or the engineering handoff, it can mean scoped controls work with a defined deliverable.',
    ],
    reputationPoints: [
      { label: 'Web engagements', value: 'Typically start around $3,000' },
      { label: 'Delivery model', value: 'Fixed scope, fixed fee, clean handoff' },
      { label: 'Controls work', value: 'Senior review or design on defined problems' },
    ],
    webPoints: [
      'Fixed-scope website and search foundation',
      'Client-owned launch, documentation, and handoff',
      'Digital systems that fit the business instead of dressing around it',
    ],
    controlsPoints: [
      'One system, panel, machine, or workflow per engagement',
      'Senior review or design clarity without open-ended ownership',
      'Useful findings, design notes, and handoff-ready deliverables',
    ],
  },
  web: {
    title: 'Websites and digital systems for established service businesses and local brands.',
    intro:
      'Built for operating businesses that already do real work in the world and need a site that finally looks as credible as the business behind it.',
    audience: [
      'Established service businesses with real crews, customers, equipment, or locations',
      'Local brands with real substance that need clearer presentation and customer flow',
      'Owners who want fixed scope, fixed pricing, and client ownership after launch',
    ],
    offer: [
      'Site strategy and structure',
      'Responsive custom design and build',
      'Core service or offering pages',
      'Contact, quote, or intake flow',
      'Foundational search structure',
      'Launch, documentation, and client ownership',
    ],
    process: [
      'Clarify the business, the customer path, and the pages that matter.',
      'Design and build the right amount of site.',
      'Review the working site against the real business before launch.',
      'Launch with structure, metadata, and a clean handoff.',
    ],
    boundaries: [
      'No indefinite retainer by default',
      'No public hourly rate sheet',
      'Extra workflow, intake, or search work can be scoped separately when justified',
    ],
    pricing:
      'Website engagements typically start around $3,000. Final pricing is fixed upfront based on scope.',
  },
  controls: {
    title: 'Scoped controls engineering for teams that need senior clarity, not open-ended support.',
    intro:
      'Written for OEMs, controls teams, engineering managers, and technical operators who need a bounded review or design package their own team can act on.',
    proofNote:
      'The controls proof here is presented as public-safe professional-history evidence, not as outside consulting case studies.',
    fit: [
      'A defined machine, panel, sequence, or workflow',
      'An owner who can name the current ambiguity, failure mode, or handoff risk',
      'A useful deliverable that can be described before the work starts',
    ],
    boundaries: [
      'No staff augmentation positioning',
      'No open-ended maintenance ownership',
      'Implementation only if separately scoped',
    ],
    steps: [
      'Confirm one system, workflow, or project and define the deliverable.',
      'Review or design the work independently with limited clarification as needed.',
      'Walk through the result together and close with a clean handoff.',
    ],
  },
  about: {
    title: 'One practice that stays close to the business, the system, and the handoff.',
    paragraphs: [
      'The through-line is not lots of unrelated technology. It is understanding how a real business or technical system works, finding where requirements get messy, and turning that into something clear enough to build and hand off.',
      'That can look like a contractor website with a better intake path, a service-area system, a controls review before commissioning, or internal workflow tooling that removes guesswork from engineering work.',
      'The practice is intentionally small, direct, and bounded. The goal is useful work with clear ownership after delivery, not permanent attachment to the client.',
    ],
    pillars: [
      {
        title: 'Mechanical and controls foundation',
        body: 'A large part of the judgment here comes from real equipment, field conditions, commissioning logic, and engineering handoffs, not from treating every problem like abstract software.',
      },
      {
        title: 'Business-facing web delivery',
        body: 'The web side is strongest when a business already has substance and just needs the digital system to represent that substance clearly.',
      },
      {
        title: 'Bounded scope by design',
        body: 'Projects are sold to end with a useful result and clear ownership, not to create dependence on an always-on freelancer.',
      },
    ],
  },
  contact: {
    title: 'Start with the real problem.',
    intro:
      'Choose the path that matches the work. If it helps to send context first, use the outline form and Tre can reply directly with the next step.',
    webNote:
      'Helpful context: the business, the current site or digital gap, and the customer path that needs to work better.',
    controlsNote:
      'Helpful context: the system, the current ambiguity or failure mode, and the deliverable that would actually help.',
    formHelper: {
      web:
        'The best first note names the business, the current site or gap, and what a better customer path should make easier.',
      controls:
        'The best first note names the system, the current ambiguity or failure mode, and what a useful review or design package should leave behind.',
    },
  },
  offers: [
    {
      title: 'Controls Audit',
      summary:
        'A short, fixed-scope review of one existing controls system to identify ambiguity, risk, and likely failure modes before they keep surfacing in the field.',
      meta: [
        { label: 'Typical scope', value: 'One system, panel, machine, or project' },
        { label: 'Duration', value: '3 to 10 business days' },
        { label: 'Fee', value: '$3,000 to $15,000 fixed fee' },
      ],
      bullets: [
        'Sequence and control logic intent',
        'I/O mapping and signal assumptions',
        'Interlocks and fault handling',
        'Documentation versus program behavior',
        'Handoff risk between engineering and field',
      ],
    },
    {
      title: 'Controls Design-for-Hire',
      summary:
        'A defined design package for one system or project, built so an internal team or integrator can implement it without confusion about states, modes, or edge cases.',
      meta: [
        { label: 'Typical scope', value: 'One system, panel, machine, or project' },
        { label: 'Duration', value: '3 to 10 business days' },
        { label: 'Fee', value: '$3,000 to $15,000 fixed fee' },
      ],
      bullets: [
        'Sequence of operations',
        'Mode and state definitions',
        'Signal intent and assumptions',
        'Fault and recovery behavior',
        'Commissioning and verification checklist',
      ],
    },
    {
      title: 'Process & Information Flow Audit',
      summary:
        'A fixed-scope review of one workflow where information, decisions, or ownership are breaking down, ending with one practical implemented improvement and a clean closeout.',
      meta: [
        { label: 'Typical scope', value: 'One workflow' },
        { label: 'Duration', value: '2 to 3 weeks' },
        { label: 'Fee', value: '$5,000 to $10,000 fixed fee' },
      ],
      bullets: [
        'Current-state conversations and artifact review',
        'Three to five prioritized friction points',
        'One implemented practical improvement',
        'Documentation and clearly bounded follow-on scope',
      ],
    },
  ],
} as const;

export const portfolioItems = [
  {
    slug: 'homeems',
    title: 'HomeEMS',
    year: '2024',
    category: 'web',
    treatment: 'flagship',
    relationshipLabel: 'Independent client work',
    context: 'Website strategy, design, build, and handoff for a restoration contractor.',
    summary:
      'Flagship case-study proof of a client-owned restoration website built around service clarity, geographic coverage, emergency intake, and maintainable handoff.',
    whatItProves:
      'Tre can turn messy operating requirements into a serious service-business website with a clearer customer path and a client-owned handoff.',
    liveUrl: 'https://www.home-ems.net',
    primaryAsset: {
      src: homeEmsProofImage,
      alt: 'HomeEMS homepage showing restoration messaging, emergency calls to action, and a clear service structure.',
      caption: 'Homepage proof from the live HomeEMS website.',
    },
    supportingAssets: [
      {
        src: homeEmsServiceAreaImage,
        alt: 'HomeEMS service-area page with an interactive coverage map and ZIP or locality lookup.',
        caption: 'Structured service-area experience with map and coverage lookup.',
      },
      {
        src: homeEmsContactImage,
        alt: 'HomeEMS contact page with a structured emergency intake form and photo-upload field.',
        caption: 'Emergency intake flow with optional damage-photo upload.',
      },
      {
        src: homeEmsGalleryImage,
        alt: 'HomeEMS gallery page with real restoration photography from storm, fire, and water jobs.',
        caption: 'Real project imagery supporting restoration credibility.',
      },
    ],
    caseStudy: {
      eyebrow: 'Flagship case study',
      intro: [
        'Home Emergency Mitigation Services needed a website that better reflected the professionalism of the company, clarified its services, and made it easier for customers to get help under real time pressure.',
        'The finished system organized service structure, service-area logic, gallery proof, customer intake, and handoff into one client-owned foundation.',
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
          src: homeEmsContactImage,
          alt: 'HomeEMS contact page with a structured emergency intake form and photo-upload field.',
          caption: 'The intake form reduces friction between "I have a problem" and "the company has enough detail to respond."',
        },
        {
          src: homeEmsGalleryImage,
          alt: 'HomeEMS gallery page with real restoration photography from storm, fire, and water jobs.',
          caption: 'Real project imagery gives the site operational credibility without inflated claims.',
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
          title: 'Why it matters as portfolio proof',
          paragraphs: [
            'This is strong supporting proof because it shows workflow thinking: the page is solving for order structure, expectation setting, and clean intake, not just a nicer marketing surface.',
          ],
        },
        {
          title: 'Claims avoided',
          paragraphs: [
            'The public source material supports the structure and the ordering rules. It does not support claims about volume, automation depth, business impact, or back-office implementation details, so the case study stays disciplined.',
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
    context: 'Polished visual proof for a design and prepress practice.',
    summary:
      'Design-forward portfolio proof for a service practice, showing a sharper visual language without losing structure or owner usability.',
    whatItProves:
      'Tre can deliver a more visual brand presentation while staying commercially composed and technically clean.',
    caution:
      'The live project still shows placeholder project media, so it stays supporting proof rather than a full case study.',
    liveUrl: 'https://mayara-site.trehumphries16.workers.dev',
    primaryAsset: {
      src: mayaraImage,
      alt: 'Mayara Miranda homepage with strong typography and a design-focused layout.',
      caption: 'Polished visual proof for a different kind of service practice.',
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
      'Supporting proof that the web practice is not contractor-only and can still feel commercially grounded for a local food brand.',
    whatItProves:
      'Tre can present a local brand with personality and product imagery without losing sales clarity.',
    liveUrl: 'https://braziliansweetbites.com',
    primaryAsset: {
      src: bsbHomeImage,
      alt: 'Brazilian Sweet Bites marketing site with product photography and bold category blocks.',
      caption: 'Local-brand proof with strong real product imagery.',
    },
  },
  {
    slug: 'all-seasons',
    title: 'All Seasons',
    year: '2021',
    category: 'web',
    treatment: 'project-card',
    relationshipLabel: 'Independent client work',
    context: 'Selective legacy proof from earlier service-business website delivery.',
    summary:
      'Older but still useful service-business proof showing practical delivery and client-owned handoff for an established operating business.',
    whatItProves:
      'Tre has relevant service-business web experience that predates the newer flagship work.',
    caution:
      'This is legacy proof and should stay selective rather than carrying flagship design weight.',
    liveUrl: 'https://allseasonsmo.com/home/',
    primaryAsset: {
      src: allSeasonsProofImage,
      alt: 'All Seasons homepage capture showing service-business website proof.',
      caption: 'Useful historical proof, not the visual benchmark for the redesign.',
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
      'Professional-history proof across PLC and HMI logic, drives, integrations, startup, commissioning, and field troubleshooting for configurable HVAC equipment.',
    whatItProves:
      'Tre has serious equipment-side controls experience where sequence, commissioning, and real installation constraints all matter.',
    primaryAsset: {
      src: '/images/mainstream_rooftop_ahu_public.jpg',
      alt: 'Commercial HVAC equipment used as public-safe proof for controls and commissioning work.',
      caption: 'Commercial HVAC context where controls and commissioning had to hold up.',
    },
    supportingAssets: [
      {
        src: '/images/yaskawa_drive_photo_public.jpg',
        alt: 'Public-safe photo of a Yaskawa drive used in controls work.',
        caption: 'Public-safe supporting controls artifact.',
      },
      {
        src: '/images/baldor_motor_photo_public.jpg',
        alt: 'Public-safe photo of a Baldor motor used in equipment context.',
        caption: 'Additional public-safe equipment proof.',
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
      'Public-safe professional-history proof spanning CODESYS controls, telemetry paths, field issues, operator workflows, and machine-system integration.',
    whatItProves:
      'Tre can work across machine behavior, controls, telemetry, and field reality without pretending those are separate disciplines.',
    primaryAsset: {
      src: '/images/feature_road-application-1.jpg',
      alt: 'Electric road-application sprayer platform used as public-safe proof for controls and telemetry work.',
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
      'Professional-history proof in industrial inspection systems where controls, robotics, electronics, and field troubleshooting all had to line up.',
    whatItProves:
      'Tre has real robotics and industrial inspection experience grounded in actual equipment behavior.',
    primaryAsset: {
      src: '/images/rollmate-inspection-system_innerspec.jpg',
      alt: 'Robotic ultrasonic inspection system used as public-safe proof for Innerspec work.',
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
      'Supporting proof that Tre can translate product knowledge, calculations, pricing rules, and engineering handoffs into practical internal software.',
    whatItProves:
      'Tre understands how technical workflow software can support real engineering work without becoming vague digital transformation language.',
    primaryAsset: {
      src: '/images/mainstream_fan_submittal_example_doc_public.jpg',
      alt: 'Public-safe submittal document from an internal engineering selection workflow.',
      caption: 'Supporting proof for workflow and internal tooling work.',
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
  visual: portfolioBySlug['mayara-miranda'],
  controls: portfolioBySlug['mainstream-hvac-controls'],
} as const;

export const ctaLinks = {
  web: getScheduleLink('web'),
  controls: getScheduleLink('controls'),
  contact: {
    label: 'Contact',
    href: '/contact',
    external: false,
  },
  work: {
    label: 'See Selected Work',
    href: '/work',
    external: false,
  },
} as const;
