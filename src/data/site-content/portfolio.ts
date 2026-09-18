import type { PortfolioItem } from './types';

const homeEmsProofImage = '/images/portfolio/homeems/homepage.png';
const bsbHomeImage = '/images/portfolio/brazilian-sweet-bites/home-desktop.png';
const bsbOrderImage = '/images/portfolio/bsb-order/home-desktop.png';
const homeEmsContactImage = '/images/portfolio/homeems/contact-desktop.png';
const homeEmsGalleryImage = '/images/portfolio/homeems/gallery-desktop.png';
const homeEmsServiceAreaImage = '/images/portfolio/homeems/service-area-desktop.png';
const mayaraImage = '/images/portfolio/mayara/home-desktop.png';
const hydroRackImage = '/images/hydro_basil_rack_photo_my_garage.jpg';
const butterflyFlightImage = '/images/artifacts/butterfly/flight.jpg';
const butterflyControllerImage = '/images/artifacts/butterfly/controller.png';

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
          caption: 'The intake form reduces friction between a customer having a problem and the company having enough detail to respond.',
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
          title: 'Follow-on search strategy',
          paragraphs: [
            'After launch, HomeEMS brought Tre back for a separate search-strategy engagement. That research reviewed 130 relevant search terms, grouped overlapping intent, compared the results to the existing structure, and identified where new pages were genuinely justified.',
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
      eyebrow: 'Workflow case study',
      intro: [
        'The useful story here is not another marketing site. It is a focused workflow surface for event and bulk dessert orders.',
        'The public interface separates request-based ordering from in-person market sales, shows the current bulk menu, and makes delivery and payment rules visible before the request starts.',
      ],
      facts: [
        { label: 'Role', value: 'Workflow and public request surface' },
        { label: 'Use case', value: 'Event and bulk orders' },
        { label: 'Delivery model', value: 'Local delivery with manual review outside the normal area' },
        { label: 'Payment flow', value: 'Payment after availability is confirmed' },
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
          caption: 'The public interface centers on the request itself rather than generic brand copy.',
        },
      ],
      sections: [
        {
          title: 'The problem',
          paragraphs: [
            'The business sells in person but also needs a separate path for event and bulk requests. Those two customer journeys have different rules and should not be mixed together.',
          ],
        },
        {
          title: 'The solution',
          paragraphs: [
            'The request surface sets expectations before submission, shows the current menu, and gives customers a cleaner path into the manual fulfillment process.',
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
    slug: 'gaf-roads-standard-industries',
    title: 'GAF Roads / Standard Industries',
    shortTitle: 'GAF Roads',
    year: '2025-2026',
    category: 'controls',
    treatment: 'case-study',
    relationshipLabel: 'Professional history',
    context: 'Senior engineering and technology work on an early electric road-application platform.',
    summary:
      'CODESYS controls, telemetry paths, field issues, operator workflows, and machine-system integration on an early electric road-application platform.',
    whatItProves:
      'Tre can work across machine behavior, controls, telemetry, and field reality without pretending those are separate disciplines.',
    primaryAsset: {
      src: '/images/feature_road-application-1.jpg',
      alt: 'Electric road-application machine platform used in controls and telemetry work.',
      caption: 'Controls, telemetry, and field integration on a machine platform.',
    },
    caseStudy: {
      eyebrow: 'Machine systems case study',
      intro: [
        'This role sat at the intersection of controls, machine behavior, field commissioning, telemetry, and operator workflow on an early electric road-application platform.',
        'The work was less about owning one isolated subsystem and more about tracing failures across the machine, deciding what needed to change, and getting the whole system closer to dependable field operation.',
      ],
      facts: [
        { label: 'Role', value: 'Senior Engineering & Technology Developer' },
        { label: 'Environment', value: 'Early electric road-application equipment' },
        { label: 'Controls', value: 'CODESYS-based machine control' },
        { label: 'Work mode', value: 'Development, field investigation, commissioning, and integration' },
      ],
      highlights: [
        'Machine controls and state behavior',
        'Field failure investigation',
        'Sensor, actuator, and integration debugging',
        'Telemetry and diagnostic paths',
        'Operator workflow and handoff considerations',
      ],
      assets: [
        {
          src: '/images/feature_road-application-1.jpg',
          alt: 'Electric road-application machine platform used in controls and telemetry work.',
          caption: 'A machine-development context where controls, hardware, operators, and field conditions all met.',
        },
      ],
      sections: [
        {
          title: 'The engineering problem',
          paragraphs: [
            'Early machine platforms rarely fail inside neat discipline boundaries. A symptom that looks like software can be wiring, sensing, actuation, sequence logic, operator interaction, or several of those at once.',
            'The useful engineering work was therefore system-level: understand the machine behavior, reproduce the issue, trace the failure path, and make a change that held up outside the lab.',
          ],
        },
        {
          title: 'What I owned',
          paragraphs: [
            'My work spanned controls development, field debugging, machine integration, telemetry paths, and the practical workflow around operating and supporting the equipment.',
          ],
          bullets: [
            'CODESYS logic and machine behavior',
            'Field investigation and commissioning',
            'Sensor and actuator troubleshooting',
            'Diagnostics and telemetry paths',
            'Cross-discipline technical coordination',
          ],
        },
        {
          title: 'What this demonstrates',
          paragraphs: [
            'This is the clearest example of how I like to work: a real physical system, ambiguous failures, freedom to cross discipline boundaries, and responsibility for getting from observed behavior to a credible technical fix.',
          ],
        },
      ],
    },
  },
  {
    slug: 'mainstream-hvac-controls',
    title: 'Mainstream Fluid & Air',
    shortTitle: 'Mainstream HVAC controls',
    year: '2022-2024',
    category: 'controls',
    treatment: 'case-study',
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
        caption: 'Variable-frequency drive from the equipment context.',
      },
      {
        src: '/images/baldor_motor_photo_public.jpg',
        alt: 'Baldor motor used in equipment context.',
        caption: 'Motor and drive behavior were part of the real equipment system, not abstract controls logic.',
      },
    ],
    caseStudy: {
      eyebrow: 'OEM controls case study',
      intro: [
        'Mainstream built configurable commercial HVAC fan-array equipment, which meant the controls had to survive variation in equipment configuration, drives, customer integration, and field conditions.',
        'My role covered the path from control logic and operator interface through startup, commissioning, integration, and troubleshooting when the physical system did not behave as expected.',
      ],
      facts: [
        { label: 'Role', value: 'Controls Engineer' },
        { label: 'Equipment', value: 'Commercial HVAC fan-array systems' },
        { label: 'Interfaces', value: 'PLC/HMI, VFDs, BACnet, and Modbus' },
        { label: 'Lifecycle', value: 'Design support through startup and field troubleshooting' },
      ],
      highlights: [
        'PLC and HMI development',
        'Drive configuration and integration',
        'BACnet and Modbus integration',
        'Startup and commissioning',
        'Field troubleshooting and handoff',
      ],
      assets: [
        {
          src: '/images/mainstream_rooftop_ahu_public.jpg',
          alt: 'Commercial HVAC equipment used in controls and commissioning work.',
          caption: 'Controls engineering attached to equipment that had to start, communicate, and operate correctly in the field.',
        },
        {
          src: '/images/yaskawa_drive_photo_public.jpg',
          alt: 'Yaskawa drive used in controls work.',
          caption: 'Drive behavior and integration were part of the control problem.',
        },
        {
          src: '/images/baldor_motor_photo_public.jpg',
          alt: 'Baldor motor used in equipment context.',
          caption: 'The controls always had a physical machine on the other end.',
        },
      ],
      sections: [
        {
          title: 'The challenge',
          paragraphs: [
            'Configurable OEM equipment creates a different controls problem than a one-off machine. Logic and interfaces have to be reusable enough to support variation while still being understandable during startup and service.',
          ],
        },
        {
          title: 'From design to field behavior',
          paragraphs: [
            'The work extended past programming. Startup and commissioning exposed the real assumptions in sequence logic, drive setup, network integration, sensing, and documentation.',
            'That feedback loop shaped how I think about controls now: a design is not finished when the code compiles; it is finished when someone can start the equipment, understand what it is doing, and hand it off cleanly.',
          ],
        },
        {
          title: 'What this demonstrates',
          paragraphs: [
            'This experience built the practical controls foundation I use today: sequence thinking, industrial communications, fault behavior, commissioning discipline, and respect for the people who have to operate and troubleshoot the system later.',
          ],
        },
      ],
    },
  },
  {
    slug: 'mainstream-internal-tooling',
    title: 'Mainstream internal tooling',
    year: '2024-2025',
    category: 'controls',
    treatment: 'case-study',
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
    caseStudy: {
      eyebrow: 'Engineering software case study',
      intro: [
        'A second part of the Mainstream work was building software around the engineering operation itself: selection, quoting, calculations, pricing logic, project information, and handoff.',
        'The value was not software for its own sake. It was reducing the amount of engineering knowledge that had to live in someone’s head or be re-entered manually between steps.',
      ],
      facts: [
        { label: 'Context', value: 'Internal engineering and quoting workflow' },
        { label: 'Focus', value: 'Selection, calculations, pricing, and handoff' },
        { label: 'Role', value: 'Internal tool design and implementation' },
        { label: 'Constraint', value: 'Software had to reflect real product and engineering rules' },
      ],
      highlights: [
        'Engineering calculations encoded into tooling',
        'Product-selection workflow',
        'Quoting and pricing logic',
        'Project information handoff',
        'Software shaped around the existing operation',
      ],
      assets: [
        {
          src: '/images/mainstream_fan_submittal_example_doc_public.jpg',
          alt: 'Submittal document from an internal engineering selection workflow.',
          caption: 'The output mattered because it carried engineering decisions into the next step of the operation.',
        },
      ],
      sections: [
        {
          title: 'The workflow problem',
          paragraphs: [
            'Engineering organizations accumulate calculations, product rules, quoting logic, and handoff conventions over time. When those live across spreadsheets, individual memory, and repeated manual steps, the process becomes harder to scale and easier to misunderstand.',
          ],
        },
        {
          title: 'The approach',
          paragraphs: [
            'I treated the software as an extension of the engineering workflow rather than as a separate IT project. The important work was understanding the rules, the inputs, the decisions, and what the next person needed downstream.',
          ],
        },
        {
          title: 'What this demonstrates',
          paragraphs: [
            'This project is why engineering software remains part of my practice. I am most interested in tools that sit directly beside physical engineering work and remove friction from decisions, testing, documentation, or handoff.',
          ],
        },
      ],
    },
  },
  {
    slug: 'innerspec',
    title: 'Innerspec',
    shortTitle: 'Innerspec inspection systems',
    year: '2021-2022',
    category: 'controls',
    treatment: 'case-study',
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
    caseStudy: {
      eyebrow: 'Robotics & inspection case study',
      intro: [
        'Innerspec was my first full-time engineering role and a fast introduction to industrial automation in the real world: robotic inspection equipment, controls, electronics, motion, and customer-site troubleshooting.',
        'The systems combined precision inspection requirements with the practical reality of machines that had to move, communicate, and produce useful results outside a development bench.',
      ],
      facts: [
        { label: 'Role', value: 'Controls / automation engineering' },
        { label: 'Systems', value: 'Robotic ultrasonic inspection equipment' },
        { label: 'Work', value: 'Controls, integration, electronics, and field troubleshooting' },
        { label: 'Environment', value: 'Industrial inspection and automation' },
      ],
      highlights: [
        'Industrial controls integration',
        'Robotics and motion systems',
        'Ultrasonic inspection equipment',
        'Electronics and wiring troubleshooting',
        'Field startup and problem solving',
      ],
      assets: [
        {
          src: '/images/rollmate-inspection-system_innerspec.jpg',
          alt: 'Robotic ultrasonic inspection system used in industrial controls work.',
          caption: 'Robotics, controls, sensing, and inspection all converged in one physical system.',
        },
      ],
      sections: [
        {
          title: 'Learning system ownership early',
          paragraphs: [
            'Working on inspection systems made it obvious that controls engineering is rarely only PLC programming. Mechanical behavior, electronics, communication, motion, sensing, and the inspection process itself all affect whether the machine works.',
          ],
        },
        {
          title: 'Field reality',
          paragraphs: [
            'Customer-site work forces fast separation between symptoms and root causes. It also teaches the value of documentation, testability, and designs that another person can understand after the original engineer leaves.',
          ],
        },
        {
          title: 'What this demonstrates',
          paragraphs: [
            'This role established the pattern that continued through the rest of my career: I am strongest when I can cross boundaries, understand the full system, and keep working until the physical behavior makes sense.',
          ],
        },
      ],
    },
  },
  {
    slug: 'garage-smart-farm',
    title: 'Garage Smart Farm',
    shortTitle: 'Garage Smart Farm',
    year: '2026',
    category: 'product',
    treatment: 'case-study',
    relationshipLabel: 'Independent R&D',
    context: 'Six-month systems-engineering experiment from physical prototype to measured commercial decision.',
    summary:
      'A garage-scale physical system combining hydroponics, edge computer vision, structured operational data, and commercial validation.',
    whatItProves:
      'Tre can take an ambiguous real-world problem from hypothesis through physical build, software integration, operation, measurement, failure analysis, and a defensible technical and commercial decision.',
    primaryAsset: {
      src: hydroRackImage,
      alt: 'Garage-scale NFT growing rack built, instrumented, and operated as a six-month systems-engineering experiment.',
      caption: 'A physical production system used to test engineering, operating, and commercial assumptions with real data.',
    },
    caseStudy: {
      eyebrow: 'Independent systems R&D',
      intro: [
        'Could an unused one-car garage become a low-touch production system capable of generating meaningful income? I spent six months answering that with a physical build rather than a spreadsheet.',
        'An aquaponics pilot led to a 76-site NFT rack. I instrumented it, added edge computer vision and structured farm-state logging, operated it through summer, measured harvests and failure modes, then used the evidence to evaluate the original business assumption.',
      ],
      facts: [
        { label: 'Period', value: 'March–September 2026' },
        { label: 'Physical pilot', value: '4 NFT channels · 76 nominal sites' },
        { label: 'Production record', value: '24 harvest records · 3,472 g repo-recorded biomass' },
        { label: 'Data record', value: '45 analyzed snapshots · 99,866 environmental readings · 61 farm events' },
        { label: 'Mature Genovese rate', value: '0.568 g per productive site per day' },
        { label: 'Commercial result', value: 'Commodity basil did not meet the $3k/month income target at measured performance' },
      ],
      highlights: [
        'Physical system designed, fabricated, commissioned, and operated end to end',
        'Raspberry Pi, Python, and OpenCV layer for canopy trends and visual evidence',
        'Structured site ledger separated canonical farm state from imperfect sensor inference',
        'Root growth exposed a late mechanical and hydraulic failure mode',
        'Measured results replaced an early 20 g/site/week planning assumption with observed production',
      ],
      assets: [
        {
          src: hydroRackImage,
          alt: 'Garage-scale NFT growing rack built, instrumented, and operated as a six-month systems-engineering experiment.',
          caption: 'The rack became a testbed for physical systems, software, operations, and commercial validation.',
        },
      ],
      sections: [
        {
          title: 'The question',
          paragraphs: [
            'The original question was simple: could unused garage space become a low-touch, modular production system capable of producing enough basil or specialty crops to generate meaningful income?',
            'A small aquaponics system came first. It worked, but separating crop production from the aquarium offered better control over nutrients, flow, spacing, and measurement, so the next iteration moved to hydroponic NFT.',
          ],
        },
        {
          title: 'What I built',
          paragraphs: [
            'The main pilot used four roughly six-foot NFT channels with 19 nominal sites each, a recirculating reservoir, lighting, airflow, and a propagation area. The physical system was then instrumented with environmental logging and a fixed-camera edge-compute layer.',
            'The software pipeline captured and aligned images, measured green canopy, generated overlays, tracked farm events and harvests, and connected those observations to a structured site ledger.',
          ],
          bullets: [
            '76-site physical pilot with a 190-site full-rack geometry defined for scale-up analysis',
            'Raspberry Pi 3B edge compute with Python and OpenCV',
            'Structured plant, site, event, harvest, and environment records',
            'Six basil cultivars used for production and specialty-product learning',
          ],
        },
        {
          title: 'What held up',
          paragraphs: [
            'The system produced repeated harvests with a low routine operator burden and could be left alone for multi-day trips. Genovese basil continued producing through summer conditions that reached roughly 99°F in the garage and did not bolt.',
            'The mature Genovese cohort produced about 1,681 g over 58 days across roughly 51 productive plants, or 0.568 g per productive site per day. That was biologically credible, but materially below the early planning assumption.',
          ],
        },
        {
          title: 'What broke',
          paragraphs: [
            'The most useful late-season failure was mechanical rather than biological. Root biomass formed a dense mat across the channel bottoms, restricted drainage, created standing water at the low end, and eventually exposed imperfect upper channel seams.',
            'The plants had grown well enough to create a hydraulic constraint. That shifted the next design priorities toward root management, drainage geometry, service access, and sealing rather than simply adding more sensing.',
          ],
        },
        {
          title: 'What the software taught me',
          paragraphs: [
            'Computer vision was useful for whole-rack canopy trends, harvest impact, recovery, visual inspection, and evidence. It was not reliable enough to serve as the canonical source for exact occupancy, cultivar identity, or per-plant biomass.',
            'The durable architecture was therefore simple: structured state is the source of truth; vision is a measurement and trend sensor. That distinction made the data more defensible and the software less fragile.',
          ],
        },
        {
          title: 'Commercial result',
          paragraphs: [
            'The strongest mature-production data did not support the original commodity-basil livelihood thesis. At the observed rate, a six-rack garage scenario extrapolated to roughly 10 lb/week, but normal restaurant basil pricing did not generate the target owner income from the available footprint.',
            'That was the useful outcome of the experiment: the physical platform worked, while the original business assumption did not. The more interesting future question became whether a standardized living system creates more value at the point of use with specialty crops, rather than by competing on commodity pounds.',
          ],
        },
        {
          title: 'What this demonstrates',
          paragraphs: [
            'The project is useful to me as an engineering case study because it crossed physical design, fabrication, controls-adjacent thinking, edge computing, computer vision, data modeling, commissioning, operating discipline, failure analysis, and commercial validation.',
            'The transferable lesson is not indoor farming. It is the ability to take a messy physical idea from concept to operation, observe where reality disagrees with the model, and make a decision from evidence.',
          ],
        },
      ],
    },
  },
  {
    slug: 'wondersky-flying-creatures',
    title: 'WonderSky — Programmable Flying Creatures',
    shortTitle: 'Programmable flying creatures',
    year: '2026',
    category: 'product',
    treatment: 'case-study',
    relationshipLabel: 'Independent R&D',
    context: 'Experimental bio-inspired indoor flight, controls, telemetry, and operator-interface development.',
    summary:
      'A lightweight flying butterfly prototype and handheld control system exploring predictable indoor flight, embedded control, wireless communication, and live operator interaction.',
    whatItProves:
      'Tre can push an unusual electromechanical idea through physical prototyping, embedded controls, wireless communication, operator-interface design, and repeated flight testing.',
    primaryAsset: {
      src: butterflyFlightImage,
      alt: 'Programmable lightweight butterfly prototype in flight.',
      caption: 'Flying butterfly prototype during indoor flight development.',
    },
    supportingAssets: [
      {
        src: butterflyControllerImage,
        alt: 'Handheld controller built for the programmable flying butterfly prototype.',
        caption: 'Custom handheld control interface for flight testing and operator interaction.',
      },
    ],
    caseStudy: {
      eyebrow: 'Experimental product R&D',
      intro: [
        'WonderSky explores controllable bio-inspired indoor flight for performance and interactive environments.',
        'The engineering problem is broader than getting a lightweight object airborne. The useful system needs predictable behavior, repeatable startup, intuitive control, wireless communication, and enough robustness to be operated outside a one-off bench demo.',
      ],
      facts: [
        { label: 'Stage', value: 'Flying prototype / active R&D' },
        { label: 'System', value: 'Lightweight flying creature + handheld controller' },
        { label: 'Controls', value: 'Embedded control and wireless communication' },
        { label: 'Focus', value: 'Flight behavior, operator interface, telemetry, and repeatability' },
      ],
      highlights: [
        'Lightweight physical prototyping',
        'Embedded flight control',
        'Wireless command link',
        'Handheld operator interface',
        'Repeated indoor flight testing',
      ],
      assets: [
        {
          src: butterflyFlightImage,
          alt: 'Programmable lightweight butterfly prototype in flight.',
          caption: 'The physical prototype is already flying; the harder work is making the behavior useful and repeatable.',
        },
        {
          src: butterflyControllerImage,
          alt: 'Handheld controller built for the programmable flying butterfly prototype.',
          caption: 'The controller turns an experimental vehicle into something an operator can actually interact with.',
        },
      ],
      sections: [
        {
          title: 'The real problem',
          paragraphs: [
            'A novelty flyer is easy to understand as a demo. A controllable flying effect for a venue is a systems problem: weight, actuation, communication, control authority, startup, battery life, operator skill, and environmental conditions all interact.',
          ],
        },
        {
          title: 'Prototype to usable system',
          paragraphs: [
            'The current work focuses on making flight more predictable and the operating experience more repeatable. That includes control behavior, startup sequence, handheld interaction, and lightweight telemetry rather than treating the airframe alone as the product.',
          ],
        },
        {
          title: 'What this demonstrates',
          paragraphs: [
            'WonderSky is a compact example of the product-development work I want more of: ambiguous requirements, physical experimentation, embedded systems, controls, and a finished experience that has to make sense to someone besides the engineer who built it.',
          ],
        },
      ],
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
export const productProjects = portfolioItems.filter((item) => item.category === 'product');
export const supportingWebProjects = webProjects.filter((item) => item.treatment === 'project-card');

export const homePageProjects = {
  flagship: portfolioBySlug.homeems,
  workflow: portfolioBySlug['brazilian-sweet-bites-order-system'],
  visual: portfolioBySlug['brazilian-sweet-bites'],
  controls: portfolioBySlug['mainstream-hvac-controls'],
} as const;
