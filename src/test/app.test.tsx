import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

const projectCallUrl = 'https://cal.com/tre-humphries/project-call';
const controlsConsultationUrl = 'https://cal.com/tre-humphries/controls-consultation';

function renderRoute(route: string) {
  window.history.pushState({}, '', route);
  render(<App />);
}

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/');
});

describe('App', () => {
  it('renders the homepage and strips query params from the canonical url', async () => {
    renderRoute('/?utm_source=instagram');

    expect(
      await screen.findByRole('heading', {
        name: /serious websites and digital systems for established businesses that do real work/i,
      })
    ).toBeInTheDocument();

    expect(document.title).toBe('Tre Humphries | Websites & Controls for Real Operating Businesses');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toMatch(
      /established service businesses/i
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://trehumphries.com/'
    );
  });

  it('renders the web page with the approved pricing language', async () => {
    renderRoute('/web');

    expect(
      await screen.findByRole('heading', {
        name: /websites and digital systems for established service businesses and local brands/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/website engagements typically start around \$3,000/i).length).toBeGreaterThan(0);
    expect(document.title).toBe('Web & Digital | Tre Humphries');
  });

  it('renders the controls page with bounded offer language', async () => {
    renderRoute('/controls');

    expect(
      await screen.findByRole('heading', {
        name: /scoped controls engineering for teams that need senior clarity/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/controls audit/i)).toBeInTheDocument();
    expect(screen.getByText(/controls design-for-hire/i)).toBeInTheDocument();
    expect(screen.getByText(/process & information flow audit/i)).toBeInTheDocument();
    expect(document.title).toBe('Controls Engineering | Tre Humphries');
  });

  it('renders the selected work page with the flagship and secondary case study', async () => {
    renderRoute('/work');

    expect(
      await screen.findByRole('heading', {
        name: /^selected work$/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/homeems/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/bsb order system/i).length).toBeGreaterThan(0);
  });

  it('renders the homeems case study page', async () => {
    renderRoute('/work/homeems');

    expect(
      await screen.findByRole('heading', {
        name: /^homeems$/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/follow-on search strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/130 relevant search terms/i)).toBeInTheDocument();
    expect(document.title).toBe('HomeEMS | Tre Humphries');
  });

  it('renders the order-system case study page', async () => {
    renderRoute('/work/brazilian-sweet-bites-order-system');

    expect(
      await screen.findByRole('heading', {
        name: /brazilian sweet bites order system/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/event and bulk orders/i).length).toBeGreaterThan(0);
  });

  it('renders the contact page with both direct scheduling options and email fallback', async () => {
    renderRoute('/contact');

    expect(
      await screen.findByRole('heading', {
        name: /start with the real problem/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /schedule a project call/i })).toHaveAttribute('href', projectCallUrl);
    expect(screen.getByRole('link', { name: /schedule a controls consultation/i })).toHaveAttribute(
      'href',
      controlsConsultationUrl
    );
    expect(screen.getByRole('heading', { name: /send the outline/i })).toBeInTheDocument();
    expect(screen.getByText(/the most useful first note names the real problem/i)).toBeInTheDocument();
  });

  it('renders the about page with the approved practice framing', async () => {
    renderRoute('/about');

    expect(
      await screen.findByRole('heading', {
        name: /one practice that stays close to the business, the system, and the handoff/i,
      })
    ).toBeInTheDocument();

    expect(document.title).toBe('About | Tre Humphries');
  });

  it('opens a project-call draft from the contact page after valid form input', async () => {
    renderRoute('/contact');
    const originalLocation = window.location;
    let assignedHref = '';

    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...originalLocation,
        pathname: '/contact',
        search: '',
        set href(value: string) {
          assignedHref = value;
        },
        get href() {
          return assignedHref || originalLocation.href;
        },
      },
    });

    try {
      fireEvent.change(await screen.findByLabelText(/^name$/i), { target: { value: 'Tre Tester' } });
      fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'tre@example.com' } });
      fireEvent.change(screen.getByLabelText(/scope or problem/i), {
        target: { value: 'Need a better service-business site.' },
      });
      fireEvent.click(screen.getByRole('button', { name: /open email draft/i }));

      expect(assignedHref).toContain('mailto:trehumphries16@gmail.com');
      expect(assignedHref).toContain(encodeURIComponent('Website or controls inquiry'));
    } finally {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: originalLocation,
      });
    }
  });

  it.each([
    ['/industrial', '/controls', '', /scoped controls engineering/i],
    ['/consulting', '/controls', '', /scoped controls engineering/i],
    ['/client-work', '/work', '', /^selected work$/i],
    ['/projects', '/work', '', /^selected work$/i],
    ['/experience', '/about', '', /one practice that stays close to the business, the system, and the handoff/i],
    ['/index', '/work', '', /^selected work$/i],
    ['/living-cv?from=2019', '/work', '?from=2019', /^selected work$/i],
  ])('redirects %s to %s', async (from, pathname, search, heading) => {
    renderRoute(from);

    await waitFor(() => {
      expect(window.location.pathname).toBe(pathname);
      expect(window.location.search).toBe(search);
    });

    expect(await screen.findByRole('heading', { name: heading })).toBeInTheDocument();
  });

  it('redirects a legacy project slug to the new case study route when available', async () => {
    renderRoute('/projects/homeems');

    await waitFor(() => {
      expect(window.location.pathname).toBe('/work/homeems');
    });
  });

  it('redirects a second legacy project slug to the matching case study route', async () => {
    renderRoute('/projects/brazilian-sweet-bites-order-system');

    await waitFor(() => {
      expect(window.location.pathname).toBe('/work/brazilian-sweet-bites-order-system');
    });
  });

  it('redirects unknown legacy project slugs back to selected work', async () => {
    renderRoute('/projects/not-a-real-project');

    await waitFor(() => {
      expect(window.location.pathname).toBe('/work');
    });
  });

  it('renders a not found page for unknown routes', async () => {
    renderRoute('/not-a-real-page');

    expect(await screen.findByText(/not part of the current public site/i)).toBeInTheDocument();
    expect(document.title).toBe('Page Not Found | Tre Humphries');
  });

  it.each([
    ['/', 'Schedule a Project Call', projectCallUrl, 2],
    ['/', 'Schedule a Controls Consultation', controlsConsultationUrl, 2],
    ['/web', 'Schedule a Project Call', projectCallUrl, 2],
    ['/controls', 'Schedule a Controls Consultation', controlsConsultationUrl, 2],
    ['/contact', 'Schedule a Project Call', projectCallUrl, 1],
    ['/contact', 'Schedule a Controls Consultation', controlsConsultationUrl, 1],
    ['/about', 'Schedule a Project Call', projectCallUrl, 1],
    ['/about', 'Schedule a Controls Consultation', controlsConsultationUrl, 1],
    ['/work', 'Schedule a Project Call', projectCallUrl, 1],
    ['/work', 'Schedule a Controls Consultation', controlsConsultationUrl, 1],
    ['/work/homeems', 'Schedule a Project Call', projectCallUrl, 2],
    ['/work/brazilian-sweet-bites-order-system', 'Schedule a Project Call', projectCallUrl, 2],
  ])('uses the correct scheduler link on %s for %s', async (route, label, href, count) => {
    renderRoute(route);

    const links = await screen.findAllByRole('link', { name: new RegExp(label, 'i') });

    expect(links).toHaveLength(count);

    for (const link of links) {
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
